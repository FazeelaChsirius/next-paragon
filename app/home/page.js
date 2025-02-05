import Header from "@/components/Header/page";
import Mission from "@/components/Mission/page";
import Navbar from "@/components/Navbar/page";
import Video from "@/components/Video/page";
import Owner from "@/components/Owner/page";
import Timeline from "@/components/Timeline/page";
import Quotes from "@/components/Quotes/page";
import Post from "@/components/Post/page";
import Footer from "@/components/Footer/page";
import Socials from "../socials/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Video />
      <Mission />
      <Owner />
      <Timeline />
      <Quotes />
      <Post />
      <Socials />
    </div>
  );
}
