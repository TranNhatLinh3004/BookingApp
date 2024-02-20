import React from "react";
import "./Home.css";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import Hotel from "../../components/hotel/Hotel";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <div className="text-start">
          <h1 className="font-bold text-xl">Điểm đến đang thịnh hành</h1>
          <p className="homeTitle">
            Các lựa chọn phổ biến cho du khách Việt Nam
          </p>
        </div>
        <Featured />
        <h1 className="font-bold text-xl homeTitle">Tìm theo loại chỗ nghỉ</h1>
        <PropertyList />
        <h1 className="font-bold text-xl homeTitle">
          Nhà ở mà khách yêu thích nhất
        </h1>
        <div
          style={{ display: "flex", justifyContent: "space-between", gap: 20 }}
        >
          <Hotel />
          <Hotel />
          <Hotel />
          <Hotel />
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
