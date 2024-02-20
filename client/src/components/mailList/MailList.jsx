import React from "react";
import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="font-bold text-3xl">
        Tiết kiệm thời gian, tiết kiệm tiền!
      </h1>
      <span className="mailDesc">
        Đăng ký và chúng tôi sẽ gửi những ưu đãi tốt nhất cho bạn
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Đăng ký</button>
      </div>
    </div>
  );
};

export default MailList;
