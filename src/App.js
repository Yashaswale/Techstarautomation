import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import ToolsCarousel from "./components/ToolRoom";
import ValuableCustomers from "./components/Customers";
import Footer from "./components/footer";
import WhyChooseUs from "./components/Whyus";
import ImageAccordion from "./components/Oursolutions";

function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <AboutUs/>
    <WhyChooseUs/>
    <ToolsCarousel/>
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8"> Our Solutions </h1>
        <ImageAccordion/>
        </div>
    </div>
    <ValuableCustomers/>
    <Footer/>
    </div>
    
  );
}

export default App;
