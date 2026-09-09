import ServiceCard from "./ServiceCard";
const services = [
    {
        number: "01",
        title: "Commercial Films",
        description: "Cinematic video campaigns designed to make brands impossible to ignore.",
    },
    {
        number: "02",
        title: "Brand Content",
        description: "Visual stories that give brands a distinctive voice and identity.",
    },
    {
        number: "03",
        title: "Music Videos",
        description: "Visual experiences built around rhythm, emotion and artistic direction.",
    },
    {
        number: "04",
        title: "Wedding Films",
        description: "Emotion-driven films that preserve the moments you'll never want to forget.",
    },
    {
        number: "05",
        title: "Social Content",
        description: "Short-form content engineered to capture attention and keep audiences watching.",
    },
    {
        number: "06",
        title: "Corporate Films",
        description: "Professional visual storytelling that communicates your company's vision.",
    },
];
export default function Services() {
    return (<section id="services" className="bg-[#070707]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 uppercase tracking-[0.3em] text-yellow-400">
          Services
        </p>

        <h2 className="text-4xl font-bold text-white md:text-6xl">
          Editing that makes people stop scrolling.
        </h2>

        <div className="mt-24">
          {services.map((service) => (<ServiceCard key={service.number} service={service}/>))}
        </div>
      </div>
    </section>);
}
