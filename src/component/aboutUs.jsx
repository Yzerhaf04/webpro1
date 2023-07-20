import React from "react";

function contact() {
    return (
        <div className="">
            <h1 className="text-3xl font-bold  mt-9"> About Us </h1>
            <div className="text-lg flex mx-32 my-10">
                <p className=" text-neutral-800 pt-5 mr-10 mt-10 text-justify">
                    Hi, nama saya adalah Teuku Rafli Fahrezy. Saya merupakan mahasiswa Politeknik Negeri Jakarta
                    Jurusan Teknik Informatika dan Komputer Program Studi D4 Teknik Informatika.

                </p>
            </div>
            <hr />
            <div className="text-lg flex mx-32 my-10">
                <p className=" text-neutral-800 pt-5 mr-10 mt-10 text-justify">
                    Halo, nama saya adalah Ahmad Ulul Azmi. Saya merupakan mahasiswa Politeknik Negeri Jakarta
                    Jurusan Teknik Informatika dan Komputer Program Studi D4 Teknik Informatika.
                    Saya merupakan orang yang lumayan aktif di kampus, karena saya ikut beberapa organisasi di kampus.
                    Saya tipikal orang yang susah fokus terhadap sesuatu, jadi saya apabila mengerjakan urusan organisasi,
                    sering lupa akan urusan kuliah.
                </p>
            </div>
            <br />
            <hr />
            <div className="m-10 p-10 bg-pink-700 rounded-2xl">
                <p className="text-center text-neutral-100 text-3xl font-bold"> Contact Us </p>
                <p className="text-center text-neutral-100 pt-5">
                    Teuku Rafli Fahrezy +62 822 1307 5546 <br />
                    Ahmad Ulul Azmi +62 857 1949 2576
                </p>
            </div>
        </div>
    );
}

export default contact;