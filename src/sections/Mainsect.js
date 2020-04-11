import Formregisroom from '../components/Formregisroom.js'

const mainTemp = `
<div class="flex flex-col bg-gray-200">
    <div class="text-gray-700 text-center bg-gray-400 px-4 mb-40">
        <h1 class="text-xl uppercase block py-3">Plugin Presensi Per-Ruangan</h1>
        <Formregisroom/>
    </div>
</div>
`

export default {
    components: {
        Formregisroom
    },
    name: 'Mainsect',
    template: mainTemp,
    methods: {
        checkUniqeId() {
            let uniqeID = localStorage.getItem('slimsPresruID');

            if (uniqeID != null) {
                this.$router.push({path:'presensi'});
            }
        }
    },
    mounted() {
        this.checkUniqeId()
    }
}
