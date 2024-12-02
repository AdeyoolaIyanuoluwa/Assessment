import Footer from "../components/footer";
import Header from "../components/header";
import CryptoPayment from "../containers/cryptoPayment";
import GetStarted from "../containers/getStarted";
import Hero from "../containers/heroSection";
import NewsLetter from "../containers/newsLetter";
import Testimonial from "../containers/testimonial";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CryptoPayment />
      <NewsLetter />
      <Testimonial/>
      <GetStarted/>
      <Footer />
    </div>
  );
};

export default LandingPage;
