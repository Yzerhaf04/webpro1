import React from "react"
import Bg from "../photo/bg.jpg"

function home() {
    return (
        <home>
            <div>
                <p className="text-center text-4xl flex-auto bg-pink-700 text-pink-100 font-bold font-serif mb-1 mt-1 pt-1">
                Selamat datang di Tokoトク
                </p>
                <img src={Bg} alt="" className="rounded-md object-cover w-21 h-21" ></img>

            </div>

            <div className="bg-neutral-800">
                <div className="text-center text-xl text-pink-400 pt-1 mb-1 mt-1 ">
                    <div>
                        Tokoトク (TokoToku) merupakan web katalog produk-produk Tokusatsu.
                    </div>
                    <div>
                        Web katalog produk-produk tokusatsu berbahasa Indonesia ini dibuat 
                    </div>
                    <div>
                    untuk memudahkan fans Tokusatsu Indonesia untuk melihat dan membaca katalog produk Tokusatsu.
                    </div>
                    <div>
                        Untuk saat ini web Tokoトク hanya menyediakan katalog produk saja.
                    </div>

                </div>
            </div>
        </home>

    )
}
export default home