import Header from "@/components/Header/page";
import Mission from "@/components/Mission/page";
import Navbar from "@/components/Navbar/page";
import Video from "@/components/Video/page";
import Team from "./team/page";
import Owner from "@/components/Owner/page";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Header />
      <Video />
      <Mission />
      <Owner />
    </div>
  );
}
