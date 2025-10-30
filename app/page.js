import ContactUs from "@/sections/Home/ContactUs";
import Delivery from "@/sections/Home/Delivery";
import Enjoy from "@/sections/Home/Enjoy";
import HomeHero from "@/sections/Home/HomeHero";
import Kitchen from "@/sections/Home/Kitchen";
import OrderOnline from "@/sections/Home/OrderOnline";
import Quality from "@/sections/Home/Quality";
import Testimonials from "@/sections/Home/Testimonials";



export default function Home () {
  return (
    <>
      <HomeHero />
      <OrderOnline />
      <Enjoy />
      <Kitchen />
      <Delivery />
      <Testimonials />
      <Quality />
      <ContactUs />
    </>
  )
}
