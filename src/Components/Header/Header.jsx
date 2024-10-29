import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <>
      <header className="max-w-screen-2xl mx-30 flex justify-between items-center py-5">
            <h1 className="text-3xl font-bold cursor-pointer text-red-900">Elite <span className="text-blue-900">Auction </span><span className="text-yellow-500">Gallery</span></h1>

          <nav>
            <ul className="flex justify-center items-center gap-5 text-lg">
              <li className="cursor-pointer hover:text-blue-900">Home</li>
              <li className="cursor-pointer hover:text-blue-900">Auctions</li>
              <li className="cursor-pointer hover:text-blue-900">Categories</li>
              <li className="cursor-pointer hover:text-blue-900">How to works</li>
            </ul>
          </nav>

          <div className="flex justify-center items-center gap-10 text-3xl">
            <span className="cursor-pointer hover:text-blue-900"><FaRegBell /></span>
            <span className="cursor-pointer hover:text-red-900"><CgProfile /></span>
          </div>
      </header>
    </>
  );
};

export default Header;