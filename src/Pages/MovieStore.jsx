import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardContent } from "../components/ui";
import axios from "axios";
import '../App.css';

const API_KEY = "076aa98c157ee3370fac71ee351288bd";
const API_URL = "https://api.themoviedb.org/3/search/movie";
const POPULAR_URL = "https://api.themoviedb.org/3/movie/popular";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieStore = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);

  useEffect(() => {
    if (query) {
      axios.get(`${API_URL}?api_key=${API_KEY}&query=${query}&language=th-TH`)
        .then((res) => {
          setMovies(res.data.results.map(movie => ({
            ...movie,
            price: Math.floor(Math.random() * 300) + 100
          })));
        });
    } else {
      axios.get(`${POPULAR_URL}?api_key=${API_KEY}&language=th-TH&page=1`)
        .then((res) => {
          setMovies(res.data.results.map(movie => ({
            ...movie,
            price: Math.floor(Math.random() * 300) + 100
          })));
        });
    }
  }, [query]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (movie) => {
    setCart([...cart, movie]);
  };

  return (
    <div>
      <div className="bg-yellow-500 text-stone-800 w-full">
        <h1 className="text-3xl font-bold text-center py-2">🎬 ร้านหนังสุดปัง!</h1>
        <div className="flex justify-between items-center px-7 py-2 bg-yellow-400/40 w-full">
          <input
            type="text"
            placeholder="ค้นหาภาพยนตร์..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-2 rounded bg-white/50  text-black w-1/3"
          />
          <Link to="/cart" className="relative">
            <button className="bg-white/50 text-black/70 px-4 py-2 rounded">🛒 ตะกร้าสินค้า</button>
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white px-2 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
      <div className="p-6 md:p-16 ">
        <h2 className="text-3xl text-yellow-500  font-bold mb-4">{query ? "ผลลัพธ์การค้นหา" : "หนังยอดนิยม"}</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <Card key={movie.id} className="p-4 h-full flex flex-col justify-between">
              <CardContent>
                <img
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full object-cover rounded"
                />
                <h3 className="text-lg text-yellow-500  font-bold mt-2  min-h-[3rem]">{movie.title}</h3>
                <p className="text-slate-200 min-h-[2rem]">ราคา: {movie.price} บาท</p>
                <Button onClick={() => addToCart(movie)}>เพิ่มลงตะกร้า</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieStore;