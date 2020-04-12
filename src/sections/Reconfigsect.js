// eslint-disable-next-line
/* eslint-disable */
import passwordHash from 'password-hash'

const mainTemp = `
<div class="flex flex-col bg-gray-500">
        <div class="w-full max-w-xs mt-10 block mx-auto">
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Masuk Password Local
                    </label>
                    <input ref="localpass" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Localpass">
                </div>
                <div class="mb-1">
                    <button @click="reconfig" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Konfig Ulang
                    </button>
                </div>
            </div>
        </div>
</div>`
export default {
    name: 'Reconfigsect',
    template: mainTemp,
    components: {},
    methods: {
        reconfig() {
            let localpass = localStorage.getItem('slimsPassLoc');
            if (passwordHash.verify(this.$refs['localpass'].value, localpass)) {
                // remove attribute
                localStorage.removeItem('slimsPresruID');
                localStorage.removeItem('slimsRom');
                localStorage.removeItem('slimsIP');
                localStorage.removeItem('slimsPassLoc');
                // set redirect
                this.$router.push({path:'/'});
            } else {
                alert('Password Salah');
            }
        },
        checkUniqeId() {
            let uniqeID = localStorage.getItem('slimsPresruID');

            if (uniqeID == null) {
                this.$router.push({path:'/'});
                return false;
            }
        },
    },
    mounted() {
        this.checkUniqeId();
    }
}