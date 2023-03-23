import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Carousel from "./components/Swiper.jsx";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />,
        <div className="mt-24">
          <Carousel />
        </div>
        
      </div>
    </>
  );
}

export default App;
