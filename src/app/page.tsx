import { Hero } from "@/widgets/Hero/ui/Hero";
import { PostureSection } from "@/widgets/PostureSection/ui/PostureSection";
import { ZoneSelection } from "@/widgets/ZoneSelection/ui/ZoneSelection";
import { FlatfootSection } from "@/widgets/FlatfootSection/ui/FlatfootSection";
import { WorkoutSection } from "@/widgets/WorkoutSection/ui/WorkoutSection";
//import { ProgressSection } from "@/widgets/ProgressSection/ui/ProgressSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PostureSection />
      <ZoneSelection />
      <FlatfootSection />
      <WorkoutSection />
    </>
  );
}
