import React from "react";
import "./Hotel.css";

const Hotel = () => {
  return (
    <div className="hotel-component shadow-md">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/121402222.webp?k=f7f266ab09f90ddea4464309eca14d79429afe4218ced6887cb52f82c42c03dc&amp;o="
        alt=""
        className="hotel-img"
      />
      <div className="" style={{ margin: 10 }}>
        <div className="text-sm">
          <h3 className="font-bold text-lg">
            3 Epoques Apartments by Adrez Living
          </h3>
          <p>Khu Prague 01, Cộng hoà Séc, Praha 1</p>
          <div className="flex gap-2.5 items-center mt-3 ">
            <div aria-label="8.7" className="number">
              8.7
            </div>
            <span aria-label="Tuyệt vời" class="">
              Tuyệt vời
            </span>
            <span class="">537 đánh giá</span>
          </div>
        </div>
        <div className="flex gap-2.5 items-center justify-end mt-5 text-sm">
          <p className="">Bắt đầu từ</p>
          <h4 className="font-bold">VND&nbsp;1.658.204</h4>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
