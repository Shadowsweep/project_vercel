import Companies from "./Components/Companies";
import Guide from "./Components/Guide";
import Hero from "./Components/Hero";
import Properties from "./Components/Properties";
import Details from "./Components/Details";
import GetStarted from "./Components/GetStarted";
import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";
import Dembar from "./Components/demo";
import IntrestProp from "./Components/IntrestProp";
// import BlogCard from "./Components/CardComponent";
import FeedBack from "./Components/FeedBack";

function App() {
  return (
    <div>
      <Dembar />    
      <Hero />
      {/* <Companies /> */}
      {/* <Guide /> */}
      <Properties />
      <IntrestProp/>
      <Details />
      {/* <GetStarted /> */}
      <FeedBack/>
      <Footer />
    </div>
  );
}

export default App;
