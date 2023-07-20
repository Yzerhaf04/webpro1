import React from "react";

function navbar() {
  return (
    <navbar>
      {/* <div>
    <div className="bg-red-800 text-center text-blue-600 ">
        ini navbar ceritanya
    </div>
</div> */}
      <div className=" bg-neutral-900">
        <div className="flex justify-between items-center top-0 left-0 right-0 py-5 px-10">
          <a className="text-8xl ml-5 text-pink-600 float-left capitalize font-bold"> Tokoトク </a>
          <div className="inline-block text-2xl text-red-400 list">
            <a className="mx-4 hover: text-pink-700 " href="/"> Home </a>
            <a className="mx-4 hover: text-pink-700 " href="product"> Produk </a>
            <a className="mx-4 hover: text-pink-700 " href="aboutUs"> About Us </a>
          </div>
        </div>
      </div>
    </navbar>
  )
}
export default navbar