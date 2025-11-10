import FeaturedCourses from "@/components/FeaturedCourses";
import Herosection from "@/components/Herosection";
import Whychooseus from "@/components/Whychooseus";
import {InfiniteMovingCardsDemo} from "@/components/InfiniteMovingCardsDemo"
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";
import WavyBackgroundDemo from "@/components/Instructors";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";


export default function Home() {
 
  return (
    <main className="min-h-screen bg-black/[0.7] antialiased bg-grid-white/[0.02]">
      <Herosection/>
      <FeaturedCourses/>
      <Whychooseus/>
      <InfiniteMovingCardsDemo/>
      <CardHoverEffectDemo/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
