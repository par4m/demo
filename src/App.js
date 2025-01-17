import React from "react";
import {
  Header,
  Banner,
  About,
  Workouts,
  Pricing,
  Community,
  Faq,
  Join,
  Footer,
} from "./components/index";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  // aos initialization
  Aos.init({
    duration: 2500,
    delay: 400,
  });

  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
      <Header />
      <Banner />
      <About />
      <Workouts />
      <Pricing />
      <Community />
      <Faq />
      <Join />
      <Footer />
    </div>
  );
};

export default App;
