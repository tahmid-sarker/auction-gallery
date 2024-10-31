import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Cart from "../Cart/Cart";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { asset } from "../../utils/asset";

const ItemLists = () => {
  const [bookMarkActive, setBookMarkActive] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const url = asset("data/products.json");
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    if (cart.length !== 0) {
      const productId = [...new Set(cart.map((item) => item.id))];
      setBookMarkActive(productId);
    }
  }, [cart]);

  useEffect(() => {
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    setTotalPrice(totalPrice);
  }, [cart]);

  const handleBookMark = (product) => {
    const isExist = cart.some((item) => item.id === product.id);

    if (isExist) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "warning",
        title: "Already added to bookmark",
      });
      return;
    }

    const cartData = {
      id: product.id,
      image: product.image,
      title: product.title,
      description: product.description,
      price: product.currentBidPrice,
      bidsCount: product.bidsCount,
    };

    setCart([cartData, ...cart]);

    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Bookmark added successfully",
    });
  };

  const handleRemoveBookMark = (id) => {
    const remaining = cart.filter((item) => item.id !== id);
    setCart(remaining);

    if (cart.length === 1) {
      setCart([]);
      setBookMarkActive([]);
    }

    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Bookmark removed successfully",
    });
  };

  return (
    <section className="max-w-screen-2xl py-24 px-30 bg-slate-100 min-h-screen">
      {/* Section Title */}
      <h1 className="text-3xl font-semibold text-blue-900 mb-4 text-left">
        Active Auctions
      </h1>
      <p className="text-xl text-left mb-6">
        Discover and bid on extraordinary items
      </p>

      <div className="flex justify-between mt-12 gap-8">
        {/* Left side - Products */}
        <div className="w-2/3">
          {/* Products Table */}
          <div className="overflow-x-auto bg-white rounded-xl">
            <table className="table-auto w-full border-separate border-spacing-y-4 border-spacing-x-3">
              <thead>
                <tr className="text-left">
                  <th>Items</th>
                  <th>Current Bid</th>
                  <th>Time Left</th>
                  <th>Bid Now</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
                  >
                    <td>
                      <div className="flex items-start gap-3">
                        <div className="h-16 w-24 overflow-hidden rounded-md">
                          <img
                            src={product.image}
                            alt="Product"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-blue-900 font-semibold">
                            {product.title}
                          </div>
                          <p className="text-sm text-gray-500">
                            {product.description.length === 25 ? `${product.description}` : `${product.description.slice(0, 35)}...`}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-blue-900 font-semibold">
                        ${product.currentBidPrice}
                      </p>
                    </td>
                    <td>
                      <p className="text-blue-900 font-semibold">
                        {product.timeLeft}
                      </p>
                    </td>
                    <td className="text-blue-900 text-center">
                      <button
                        onClick={() => handleBookMark(product)}
                        className={`text-lg ${
                          bookMarkActive.includes(product.id)
                            ? "cursor-not-allowed"
                            : "hover:text-red-500 cursor-pointer"
                        }`}
                      >
                        {bookMarkActive.includes(product.id) ? (
                          <FaHeart className="text-red-500" />
                        ) : (
                          <FaRegHeart />
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right side - Favorite Items */}
        <div className="w-1/3">
          <div className="bg-white rounded-lg shadow-md">
            {/* Title for Favorite Items */}
            <div className="text-blue-900 text-2xl flex items-center justify-center gap-2 py-5 font-medium border-b-2 border-gray-300">
              <FaRegHeart />
              <h2>Favorite Items</h2>
            </div>

            {/* Cart Items */}
            <div className="p-5">
              {cart.length === 0 ? (
                <div className="text-center">
                  <h3 className="text-2xl font-semibold">No favorites yet</h3>
                  <p className="text-gray-500">
                    Click the heart icon on any item to add it to your favorites
                  </p>
                </div>
              ) : (
                cart.map((item) => (
                  <Cart
                    key={item.id}
                    item={item}
                    handleRemoveBookMark={handleRemoveBookMark}
                  />
                ))
              )}
            </div>

            {/* Total Price */}
            <div className="p-5 border-t-2 border-gray-300">
              <ul className="flex justify-between text-lg font-medium">
                <li>Total bids Amount:</li>
                <li>${totalPrice}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemLists;
