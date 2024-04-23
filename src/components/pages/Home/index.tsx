import "./Home.scss";
import Header from "./Header";
import WhyUs from "./WhyUs";
import Testimonials from "./Testimonials";
import OurResources from "./OurResources";
import OurServices from "./OurServices";

const HomePage = () => {
  return (
    <div className="w-full relative ">
      <Header />
      <WhyUs />
      <OurServices />
      <OurResources />
      <Testimonials />
    </div>
  );
};

export default HomePage;
