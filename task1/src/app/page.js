import Analystics from "@/components/Home/Analystics";
import Footer from "@/components/Home/Footer";
import KeyFeatures from "@/components/Home/KeyFeatures";
import LandingPage from "@/components/Home/LandingPage";
import TopColleges from "@/components/Home/TopColleges";

export default function Home() {
  return (
    <main className="p-5">
      <LandingPage />
      <Analystics />
      <TopColleges />
      <KeyFeatures />
      <Footer />
    </main>
  );
}
