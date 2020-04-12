// eslint-disable-next-line
/* eslint-disable */

import passwordHash from 'password-hash'

const formregisTemp = `
<div class="w-full mx-auto block max-w-xs mx-3">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            IP/Domain Server
        </label>
        <input ref="ip" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Isikan alamat ip server">
        <p class="text-blue-700 text-xs italic">Contoh: http://10.20.54.1, https://perpusku.domain.com</p>
        </div>
        <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Nama Ruang
        </label>
        <input ref="namaruang" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Isikan nama ruangan">
        </div>
        <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            ID Unik Ruangan
        </label>
        <input ref="idunikruang" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Isikan unik id ruangan">
        <p class="text-red-700 text-xs italic">Pastikan nomor ID yang anda masukan tidak sama dengna ruangan yang lain.</p>
        </div>
        <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Password Local
        </label>
        <input ref="passloc" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Masuk ip local">
        <p class="text-green-700 text-xs italic">Digunakan untuk otentikasi ketika mengkonfigurasi ulang pengaturan ini.</p>
        </div>
        <div class="flex items-center justify-between">
        <button @click="setRegis" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Atur sekarang
        </button>
        </div>
    </div>
</div>`

export default {
    name: 'Formregisroom',
    template: formregisTemp,
    methods: {
        setRegis() {
            alert('Data sedang diproses. Apabila tidak muncul pesan apapun dan tampilan tidak berubah. Pastikan konfigurasi \'cors\' pada server induk sudah benar');
            let ip      = this.$refs['ip'].value;
            fetch(ip+'?p=api/presensi/set/hihi',{
                method: 'POST',
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                body: null
            }).then((resp) => this.responeHandler(resp));
            
        },
        responeHandler(resp)
        {
            if (resp.status == 200 && !resp.redirect) {
                // variable
                let ip      = this.$refs['ip'].value;
                let ruang   = this.$refs['namaruang'].value;
                let idunik  = this.$refs['idunikruang'].value;
                let passloc = passwordHash.generate(this.$refs['passloc'].value);
                let ls      = localStorage;
                // set local storage
                ls.setItem('slimsPresruID', idunik);
                ls.setItem('slimsRom', ruang);
                ls.setItem('slimsIP', ip);
                ls.setItem('slimsPassLoc', passloc);

                // set alert
                alert('Data berhasil disimpan!');

                // redirect to presensi
                this.$router.push({path:'presensi'});
            } else {
                alert('Server tidak ditemukan atau menolak untuk diakses. Kode: '+resp.status+', Dialihkan?: '+resp.redirect);
            }
        }
    }
}