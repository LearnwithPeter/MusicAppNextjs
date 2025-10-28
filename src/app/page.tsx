import FeaturedCourses from "@/components/FeaturedCourses";
import Herosection from "@/components/Herosection";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Whychooseus from "@/components/Whychooseus";
import {InfiniteMovingCardsDemo} from "@/components/InfiniteMovingCardsDemo"
import UpcomingWebinars from "@/components/UpcomingWebinars";


export default function Home() {
 
  return (
    <main className="min-h-screen bg-black/[0.7] antialiased bg-grid-white/[0.02]">
      <Herosection/>
      <FeaturedCourses/>
      <Whychooseus/>
      <InfiniteMovingCardsDemo/>


    </main>
  );
}
