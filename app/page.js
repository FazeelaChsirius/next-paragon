import Header from "@/components/Header/page";
import Mission from "@/components/Mission/page";
import Navbar from "@/components/Navbar/page";
import Video from "@/components/Video/page";
import Team from "./team/page";
import Owner from "@/components/Owner/page";
import Timeline from "@/components/Timeline/page";
import Quotes from "@/components/Quotes/page";
import Post from "@/components/Post/page";
import Footer from "@/components/Footer/page";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Header />
      <Video />
      <Mission />
      <Owner />
      <Timeline />
      <Quotes />
      <Post />
      <Footer />
    </div>
  );
}
