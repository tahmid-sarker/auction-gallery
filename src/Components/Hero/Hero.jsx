import { asset } from "../../utils/asset";

const Hero = () => {
  return (
    <section>
      <div
        className="max-w-screen-2xl h-screen flex items-center justify-start bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${asset("images/Hero.jpg")})` }}
      >
        <div className="mx-30 text-white">
          <h1 className="text-5xl font-semibold mb-5">
            Bid on Unique Items from <br /> Around the World
          </h1>
          <p className="text-lg text-gray-300 mb-5">
            Discover rare collectibles, luxury goods, and vintage <br />{" "}
            treasures in our curated auctions
          </p>
          <button className="px-5 py-2.5 rounded-lg border-none font-semibold bg-white cursor-pointer text-blue-900 hover:bg-blue-900 hover:text-white transition duration-300 ease-in-out">
            Explore Auctions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
