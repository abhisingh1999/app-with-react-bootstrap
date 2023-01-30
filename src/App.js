import "bootstrap/dist/css/bootstrap.min.css";
import BandSection from "./Components/BandSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import MainBanner from "./Components/MainBanner";
import TopNavBar from "./Components/TopNavBar";
import TourSection from "./Components/TourSection";

function App() {
  return (
    <>
      <TopNavBar />
      <MainBanner />
      <BandSection />
      <TourSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
