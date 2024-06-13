import DocumentsRequired from "../component/DocumentsRequired";
import Faq from "../component/Faq";
import Footer from "../component/Footer";
import GuidanceBanner from "../component/GuidenceBanner";
import Herosection from "../component/Herosection";
import Navbar from "../component/Navbar";
import RequirementCard from "../component/RequirementCard";
import StudyUK from "../component/StudyUK";
import UniversityCards from "../component/UniversityCards";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <StudyUK />
      <UniversityCards />
      <RequirementCard />
      <GuidanceBanner />
      <DocumentsRequired />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
