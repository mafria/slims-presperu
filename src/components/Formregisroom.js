const formregisTemp = `
<div class="w-full mx-auto block max-w-xs mx-3">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Nama Ruang
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Isikan nama ruangan">
        </div>
        <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            ID Unik Ruangan
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Isikan unik id ruangan">
        <p class="text-red-500 text-xs italic">Pastikan nomor ID yang anda masukan tidak sama dengna ruangan yang lain.</p>
        </div>
        <div class="flex items-center justify-between">
        <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Atur sekarang
        </button>
        </div>
    </div>
    <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
    </p>
</div>`

export default {
    name: 'Formregisroom',
    template: formregisTemp
}