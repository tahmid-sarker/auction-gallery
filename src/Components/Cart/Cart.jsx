import { RxCross2 } from "react-icons/rx";

const Cart = ({ item, handleRemoveBookMark }) => {
  const { id, image, price, description, title, bidsCount } = item;

  return (
    <>
      <div className="flex items-start justify-start gap-5 mb-5 pb-5 border-b border-gray-500">
        <div className="h-16 w-24">
          <img src={image} alt="image" className="object-cover rounded-md" />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-center">
            <div>
              <h2 className="text-blue-900 font-semibold">{title}</h2>

              <h2 className="text-sm text-gray-500">
                {description.length === 35
                  ? `${description}`
                  : `${description.slice(0, 35)}...`}
              </h2>
            </div>
            <button
              onClick={() => handleRemoveBookMark(id)}
              className="text-2xl p-1.5 rounded-full bg-white hover:bg-gray-100 cursor-pointer"
            >
              <RxCross2 />
            </button>
          </div>

          <div className="flex items-center justify-start gap-12.5 mt-2.5">
            <h3 className="text-red-500">${price}</h3>
            <h3>Bids: <span className="text-yellow-500">{bidsCount}</span></h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
