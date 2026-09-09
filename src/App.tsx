import Hero from "./features/home/Hero";
import Features from "./features/home/featured-work/FeaturedWork";
import What from "./features/home/Services/Services";
import Process from "./features/home/Processes/Process";

import Testimonials from "./features/home/Testimonials/Testimonials";

import FAQ from "./features/home/FAQ/FAQ";

import Project from "./features/home/start-project/StartProject";

import Footer from "./features/home/footer/Footer";

import Navbar from "./components/layout/Navbar";
export default function App() {
return (
  <>
<Navbar />
    <Hero />
    <Features />
    <What />
    <Process />
    <Testimonials />
    <FAQ />
    <Project />
    <Footer />
  </>
)
}
;