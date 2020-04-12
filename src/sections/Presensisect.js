// eslint-disable-next-line
/* eslint-disable */

import passwordHash from 'password-hash'

const presensiTemp = `<section id="withoutscroll">
    <div>
        <img ref="logo" class="fill-current text-gray-600 block py-2 h-16 w-12 mx-auto"/>
        <h1 class="p-0 block text-center text-xl uppercase">Selamat datang di <br> {{ libraryName }}</h1>
        <p class="block text-center pb-2">Silakan, isi data Anda ke dalam log pengunjung kami.</p>
    </div>
    <div class="flex flex-col bg-gray-500">
        <div class="w-full max-w-xs mt-10 block mx-auto">
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-6">
                    <img ref="img" class="block mx-auto w-24 h-24 rounded-full"/>
                    <p v-if="showMsg" class="font-weight-bold text-center">{{ responMsg }}</p>
                </div>
                <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    ID Anggota/Nama Anda
                </label>
                <input ref="memberid" @keyup="keyEvent" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="ID Anggota">
                </div>
                <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Institusi
                </label>
                <input ref="institusi" @keyup="keyEvent" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Institusi">
                <p class="text-blue-700 text-xs italic">Jika anda sudah menjadi anggota, isian institusi tak perlu diisi</p>
                </div>
                <div class="flex items-center justify-between">
                <button @click="doCheckin" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Daftar
                </button>
                </div>
            </div>
        </div>
    </div>
</section>`;

export default {
    name: 'Presensisect',
    data() {
        return {
            libraryAddr: localStorage.getItem('slimsIP'),
            libraryName: localStorage.getItem('slimsRom'),
            showMsg: false,
            responMsg: ''
        }
    },
    template: presensiTemp,
    methods: {
        checkUniqeId() 
        {
            let uniqeID = localStorage.getItem('slimsPresruID');

            if (uniqeID == null) {
                this.$router.push({path:'/'});
                return false;
            }
        },
        keyEvent(e)
        {
            if (e.key == 'Enter') {
                this.doCheckin();
            }
        }
        ,
        doCheckin()
        {
            fetch(this.libraryAddr+'?p=api/presensi/set/hihihi', {
                method: 'POST',
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                body: 'uniqueid='
                       +localStorage.getItem('slimsPresruID')
                       +'&memberID='
                       +this.$refs['memberid'].value
                       +'&institution='
                       +this.$refs['institusi'].value
            })
            .then((resp) => resp.json())
            .then(res => {
                if (res.status == 'ok') {
                    // disable
                    this.$refs['memberid'].setAttribute('disabled', 'true');
                    this.$refs['institusi'].setAttribute('disabled', 'true');
                    // set img
                    this.$refs['img'].setAttribute('src', this.libraryAddr+'images/persons/'+res.data.img);
                    // set msg
                    this.showMsg = true;
                    this.responMsg =  res.msg;
                    // set timeoute
                    setTimeout(() => {
                        // set blank
                        this.showMsg = false;
                        this.responMsg = '';
                        this.$refs['memberid'].removeAttribute('disabled');
                        this.$refs['institusi'].removeAttribute('disabled');
                        this.$refs['memberid'].value = '';
                        this.$refs['institusi'].value = '';
                        this.$refs['memberid'].focus();
                        this.$refs['img'].setAttribute('src', this.libraryAddr+'images/persons/avatar.jpg');
                    }, 5000);
                } else {
                    // set msg
                    this.showMsg = true;
                    this.responMsg =  res.msg;
                }
            });
        }
    },
    mounted() {
        this.checkUniqeId();
        this.$refs['img'].setAttribute('src', this.libraryAddr+'images/persons/avatar.jpg');
        this.$refs['logo'].setAttribute('src', this.libraryAddr+'images/logo.png');
        this.$refs['memberid'].focus();
    }
}