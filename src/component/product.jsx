// Product.jsx
import React from "react";
import dataProduk from "./dataProduk";

const Product = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {dataProduk.map((produk) => (
        <div key={produk.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img className="w-full" src={produk.foto} alt={produk.nama} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{produk.nama}</div>
            <p className="text-gray-700 text-base">Harga: Rp {produk.harga}</p>
            <p className="text-gray-700 text-base">Kategori: {produk.kategori}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
