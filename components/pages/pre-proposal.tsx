import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

export default function PreProposal() {
    return (
        <div>
            {/* 1 */}
            <div className="py-5 grid grid-cols-3 gap-4">
                <div className="bg-primary rounded-lg p-5 h-fit">
                    <div className="flex gap-3">
                        <div className="bg-secondary text-primary rounded-md min-w-8 min-h-8 h-8 w-8 flex items-center justify-center font-bold">
                            1
                        </div>
                        <div>
                            <h1 className="text-2xl text-secondary font-bold">
                                Mencari Judul Skripsi
                            </h1>
                            <p className=" text-slate-400">
                                Jujur saja. Gapapa kok kalau belum bisa. Nanti <span className="line-through">kita</span> dosen bantu
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 flex flex-col gap-4">
                    <div className="border-2 rounded-lg p-5">
                        <h1 className="text-2xl font-semibold">
                            Pilih 1 dosen pembimbing
                        </h1>
                        <p className=" text-slate-400">
                            Coba pilih dan langsung hubungi dosen pembimbing. Konsultasi, minta rekomendasi judul, topik, atau permasalahan
                        </p>
                        <Button className="mt-3">List Dosen ILKOM</Button>
                    </div>
                    <div className="border-2 rounded-lg p-5">
                        <h1 className="text-2xl font-semibold">
                            Rencanakan Skripsi
                        </h1>
                        <p className=" text-slate-400">
                            Mulai lakukan riset kecil-kecilan. Pelajari topik dan materi yang ditarget.
                        </p>
                        <ul className="mt-3 flex flex-col gap-2">
                            <li>Baca artikel di jurnal</li>
                            <li>Baca buku di perpus / rumah ilmu</li>
                            <li>Baca skripsi kating</li>
                            <li>Nonton tutorial di youtub</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className="py-5 grid grid-cols-3 gap-4">
                <div className="bg-primary rounded-lg p-5 h-fit">
                    <div className="flex gap-3">
                        <div className="bg-secondary text-primary rounded-md min-w-8 min-h-8 h-8 w-8 flex items-center justify-center font-bold">
                            2
                        </div>
                        <div>
                            <h1 className="text-2xl text-secondary font-bold">
                                Menulis Proposal Skripsi
                            </h1>
                            <p className=" text-slate-400">
                                Ada yang nulis dari bab 3 ke bab 1, tapi banyak juga yang sebaliknya. Sesuaikan dg kemampuan.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 flex flex-col gap-4">
                    <div className="border-2 rounded-lg p-5">
                        <h1 className="text-2xl font-semibold">
                            Submit judul dan topik di Sitedi
                        </h1>
                        <p className=" text-slate-400">
                            Hal ini adalah tanda bahwa kamu sudah yakin dengan judulmu dan akan lanjut ke tahap bimbingan rutin
                        </p>
                    </div>
                    <div className="border-2 rounded-lg p-5">
                        <h1 className="text-2xl font-semibold">
                            Minta SK Pembimbing ke Ketua Jurusan (Kajur)
                        </h1>
                        <p className=" text-slate-400">
                            Langkah ini bertujuan untuk memasangkan kamu dengan pembimbingmu secara resmi ke dalam sistem
                        </p>
                        <Button className="mt-3">Template Chat</Button>
                    </div>
                    <div className="border-2 rounded-lg p-5">
                        <h1 className="text-2xl font-semibold">
                            Menulis Bab 1 sampai 3 Proposal
                        </h1>
                        <p className=" text-slate-400">
                            Ikuti format penulisan yang ada pada guide book. Kalau masih bingung, lihat skripsi kating.
                        </p>
                        <Button className="mt-3">Guide Book</Button>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className="py-5 grid grid-cols-3 gap-4">
                <div className="bg-primary rounded-lg p-5 h-fit">
                    <div className="flex gap-3">
                        <div className="bg-secondary text-primary rounded-md min-w-8 min-h-8 h-8 w-8 flex items-center justify-center font-bold">
                            3
                        </div>
                        <div>
                            <h1 className="text-2xl text-secondary font-bold">
                                Melakukan bimbingan rutin
                            </h1>
                            <p className=" text-slate-400">
                                Untuk bisa melakukan Seminar proposal, minimum bimbingan adalah 6x
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 flex flex-col gap-4">
                    <div className="border-2 rounded-lg p-5">
                        <h1 className="text-2xl font-semibold">
                            Bimbingan sampai disetujui Sempro
                        </h1>
                        <p className=" text-slate-400">
                            Biasanya tiap pembimbing memiliki grup yang berisi anak-anak bimbingannya. Kalau tidak ada grup, jangan sungkan untuk chat privat. Yang penting sopan.
                        </p>
                    </div>
                    <div className="border-2 rounded-lg p-5">
                        <h1 className="text-2xl font-semibold">
                            Mengisi data bimbingan di Sitedi
                        </h1>
                        <p className=" text-slate-400">
                            Jangan lupa mengisi data bimbingan di Sitedi. Hal ini penting untuk langkah kedepannya
                        </p>
                        <Button className="mt-3">Template Chat</Button>
                    </div>
                    <div className="border-2 rounded-lg p-5">
                        <h1 className="text-2xl font-semibold">
                            Surat Persetujuan Siap Sempro
                        </h1>
                        <p className=" text-slate-400">
                            Jika sudah disetujui pembimbing, minta tanda tangan dari dosen pembimbing yang menyatakan kamu sudah siap untuk mengikuti sempro
                        </p>
                        <Button className="mt-3">Template Surat</Button>
                    </div>
                </div>
            </div>
            {/* 4 */}
            <div className="py-5 grid grid-cols-3 gap-4">
                <div className="bg-primary rounded-lg p-5 h-fit">
                    <div className="flex gap-3">
                        <div className="bg-secondary text-primary rounded-md min-w-8 min-h-8 h-8 w-8 flex items-center justify-center font-bold">
                            4
                        </div>
                        <div>
                            <h1 className="text-2xl text-secondary font-bold">
                                Persiapan Seminar Proposal
                            </h1>
                            <p className=" text-slate-400">
                                Siapkan hal-hal berikut sebelum untuk mendaftar seminar proposal
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 flex flex-col gap-4">
                    <div className="border-2 rounded-lg p-5">
                        <h1 className="text-2xl font-semibold">
                            Siapkan PPT Untuk Sempro
                        </h1>
                        <p className=" text-slate-400">
                            Gunakan template PPT yang clean, minimalis, rapih, dan tidak membingungkan. Pastikan kalian paham materi, supaya tidak plonga-plongo
                        </p>
                        <Button className="mt-3">Referensi PPT Kating</Button>
                    </div>
                    <div className="border-2 rounded-lg p-5">
                        <h1 className="text-2xl font-semibold">
                            Daftar Sempro via Google Form
                        </h1>
                        <p className=" text-slate-400">
                            Scan surat persetujuan siap sempro dari langkah sebelumnya. Ini akan dibutuhkan oleh form pendaftaran.
                        </p>
                        <Button className="mt-3">Google Form</Button>
                    </div>
                    <div className="border-2 rounded-lg p-5">
                        <h1 className="text-2xl font-semibold">
                            Minta Dipilihkan Dosen Penguji ke Kajur
                        </h1>
                        <p className=" text-slate-400">
                            Chat ke Ketua Jurusan untuk dipilihkan dosen penguji. Mereka yang nantinya akan ngasih kamu nilai akhir skripsi
                        </p>
                        <Button className="mt-3">Template Chat</Button>
                    </div>
                </div>
            </div>
            {/* 5 */}
            <div className="py-5 grid grid-cols-3 gap-4">
                <div className="bg-primary rounded-lg p-5 h-fit">
                    <div className="flex gap-3">
                        <div className="bg-secondary text-primary rounded-md min-w-8 min-h-8 h-8 w-8 flex items-center justify-center font-bold">
                            5
                        </div>
                        <div>
                            <h1 className="text-2xl text-secondary font-bold">
                                Seminar Proposal
                            </h1>
                            <p className=" text-slate-400">
                                Selanjutnya adalah mengatur jadwal pertemuan dan memesan ruang
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 flex flex-col gap-4">
                    <div className="border-2 rounded-lg p-5">
                        <h1 className="text-2xl font-semibold">
                            Atur Jadwal Pertemuan Seminar
                        </h1>
                        <p className=" text-slate-400">
                            Hubungi kedua dosen penguji secara privat. Jangan takut. Pastikan cocok juga dengan dosen pembimbing.
                        </p>
                        <Button className="mt-3">Template Chat</Button>
                    </div>
                    <div className="border-2 rounded-lg p-5">
                        <h1 className="text-2xl font-semibold">
                            Pesan Ruangan untuk Sempro
                        </h1>
                        <p className=" text-slate-400">
                            Pesan ruangan bisa dilakukan melalui Google Form. Jangan lupa untuk konfirmasi ke pengurus Lab setelah mengisinya
                        </p>
                        <Button className="mt-3">Google Form</Button>
                    </div>
                    <div className="border-2 rounded-lg p-5">
                        <h1 className="text-2xl font-semibold">
                            H-2 Sempro
                        </h1>
                        <p className=" text-slate-400">
                            Ingatkan Dosen penguji dan pembimbing tentang jadwal Sempro. Tanyakan juga apakah mereka butuh file cetak atau cukup soft file.
                        </p>
                    </div>
                    <div className="border-2 rounded-lg p-5">
                        <h1 className="text-2xl font-semibold">
                            Sempro
                        </h1>
                        <p className=" text-slate-400">
                            Siapkan Snack, Minum, ATK, dan keperluan lain sehari sebelum sempro. Semangat dan jangan plonga-plongo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}