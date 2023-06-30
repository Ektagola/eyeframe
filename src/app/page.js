import Banner from "@/sections/banner";
import RootLayout from "./layout";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Brands from "@/sections/brands";
import Sales from "@/sections/sales";
import Eye from "@/sections/eye";

export default function Home() {
  return (
    <RootLayout>      
      <Navbar/>
      <Banner/>
      <Sales/>
      <Brands/>
      <Eye/>
      <Footer/>
    </RootLayout>
  )
}
