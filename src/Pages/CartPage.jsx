import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Button, Card, CardContent } from "../components/ui";
import '../App.css';
import qrcode from "../assets/qrcode.png";

const API_KEY = "076aa98c157ee3370fac71ee351288bd";
const API_URL = "https://api.themoviedb.org/3/search/movie";
const POPULAR_URL = "https://api.themoviedb.org/3/movie/popular";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const CartPage = () => {
    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
    const [showPopup, setShowPopup] = useState(false);
    const [countdown, setCountdown] = useState(60); // เริ่มต้นนับถอยหลังที่ 60 วินาที
  
    const removeFromCart = (index) => {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    };
  
    const clearCart = () => {
      setCart([]);
      localStorage.setItem("cart", JSON.stringify([]));
    };
  
    const handleOrder = () => {
      setShowPopup(true); // แสดง Popup
      setCountdown(60); // ตั้งค่านับถอยหลังใหม่
    };
  
    useEffect(() => {
      if (showPopup && countdown > 0) {
        const timer = setInterval(() => {
          setCountdown((prev) => prev - 1);
        }, 1000);
  
        return () => clearInterval(timer); // เคลียร์ timer เมื่อ Popup ถูกปิดหรือ countdown หมด
      } else if (countdown === 0) {
        setShowPopup(false); // ปิด Popup เมื่อ countdown หมด
      }
    }, [showPopup, countdown]);
  
    const closePopup = () => {
      setShowPopup(false);
    };
  
    const totalPrice = cart.reduce((acc, movie) => acc + movie.price, 0);
    let discount = cart.length > 3 ? (cart.length > 5 ? 0.2 : 0.1) : 0;
    const discountedPrice = (totalPrice * (1 - discount)).toFixed(2);
  
    return (
      <div className="p-8 w-full md:w-auto">
        <h2 className="bg-yellow-500 text-2xl text-black font-bold py-2">ตะกร้าสินค้า</h2>
        {cart.length === 0 ? (
          <p>ไม่มีสินค้าในตะกร้า</p>
        ) : (
          <ul>
            {cart.map((movie, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b p-4"
              >
                <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} className="w-16 object-cover rounded px-3" />
                <span className="flex-1 text-left text-yellow-500">{movie.title}</span>
                <span className="w-24 text-center text-white">{movie.price} บาท</span>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 bg-stone-300/30 px-4 py-2 rounded"
                >
                  ลบ
                </button>
              </li>
            ))}
          </ul>
        )}
        <p className="font-bold mt-5">ราคารวม: {totalPrice} บาท</p>
        {discount > 0 && (
          <p className="text-green-400">✅ ส่วนลด {discount * 100}%: -{(totalPrice * discount).toFixed(2)} บาท</p>
        )}
        <p className="font-bold text-yellow-500 text-lg">ราคาสุทธิ: {discountedPrice} บาท</p>
        <button onClick={clearCart} className="bg-red-700 text-white px-4 py-2 rounded mr-4 mt-2">ล้างตะกร้า</button>
        <button
          onClick={handleOrder}
          className="bg-green-500 text-white px-4 py-2 rounded mr-4"
        >
          ชำระเงิน
        </button>
        <Link to="/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">เลือกหนังเพิ่ม</button>
        </Link>
  
  
        {/* Popup แสดงข้อมูลโอนเงิน */}
        {showPopup && (
          <div className="fixed inset-0 bg-white/30 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-96">
              <h3 className="text-xl font-bold mb-4">ชำระเงิน</h3>
              <p className="font-bold text-yellow-500 text-lg">ราคารวม: {discountedPrice} บาท</p>
              <p>กรุณาโอนเงินไปยังบัญชี:</p>
              <div className="flex justify-center my-4">
                <img src={qrcode} className="w-1/2 md:w-3/5" alt="qrcode" />
              </div>
              <p className="font-bold">ธนาคาร ABC เลขที่บัญชี: 123-456-789</p>
              <p>ชื่อบัญชี: ร้านหนังสุดปัง</p>
              <p className="mt-4">กรุณาโอนภายใน <span className="text-red-500">{countdown}</span> วินาที</p>
              <button
                onClick={closePopup}
                className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              >
                ปิด
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default CartPage;  