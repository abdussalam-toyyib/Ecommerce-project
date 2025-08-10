import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import ProductLists from "./components/ProductLists";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <ProductLists />
      {/* <div className="p-4">
        <SmartphoneDeals />
      </div>
      <div className="p-6">
        <ProductCategoryCarousel title="Top" highlight="Electronics Brands" items={electronics} />
        <ProductCategoryCarousel title="Daily" highlight="Essentials" items={essentials} />
      </div>
      <Products /> */}
      <Footer />
    </>
  );
};

export default App;
