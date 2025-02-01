import Header from "@/components/Header/page";
import Navbar from "@/components/Navbar/page";
import Video from "@/components/Video/page";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Header />
      <Video />
    </div>
  );
}
