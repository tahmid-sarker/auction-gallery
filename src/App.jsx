import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import ItemLists from "./Components/ItemLists/ItemLists";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="font-sora">
        <Header></Header>
        <Hero></Hero>
        <ItemLists></ItemLists>
        <Footer></Footer>
    </div>
  );
}

export default App;