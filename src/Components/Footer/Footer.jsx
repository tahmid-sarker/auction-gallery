const Footer = () => {
    return (
      <footer className="max-w-screen-2xl mx-30 mt-24">
        <div className="text-center">
        <h1 className="text-3xl font-bold cursor-pointer text-red-900">Elite <span className="text-blue-900">Auction </span><span className="text-yellow-500">Gallery</span></h1>
          <h2 className="text-[20px] mb-5">Bid. Win. Own.</h2>
          <ul className="flex items-center justify-center gap-12 mb-5">
            <li className="cursor-pointer hover:text-blue-900">Home</li>
            <li className="cursor-pointer hover:text-blue-900">Auctions</li>
            <li className="cursor-pointer hover:text-blue-900">Categories</li>
            <li className="cursor-pointer hover:text-blue-900">How it works</li>
          </ul>
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Auction Gallery| by <a className="text-red-900 hover:text-yellow-500" href="http://tahmid-sarker.github.io/">Tahmid Sarker</a></p>
        </div>
      </footer>
    );
  };
  
export default Footer;