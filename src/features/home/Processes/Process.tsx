import Timeline from "../Processes/Timeline";
import ProcessCard from "./ProcessCard";
import Section from "../Section";
import Container from "../Container";
import process from "../../../data/process.js";
import Heading from "../Heading"
const steps = [
  {
    number: "01",
    title: "The Brief",
    description:
      "We start by understanding your vision, audience, goals, and the story you want to tell.",
  },
  {
    number: "02",
    title: "The Edit",
    description:
      "Raw footage is shaped into a deliberate visual narrative through pacing, composition, sound, and rhythm.",
  },
  {
    number: "03",
    title: "The Finish",
    description:
      "Colour, sound design, transitions, and the final details bring the project together.",
  },
  {
    number: "04",
    title: "The Delivery",
    description:
      "Your finished film is exported and prepared for the platforms and audiences that matter most.",
  },
];

export default function Process() {
  return (
    <Section id="process" className="bg-black">
      <Container>
        <p className="mb-4 uppercase tracking-[0.3em] text-yellow-400">
          Our Process
        </p>

        <Heading>Every great edit begins with understanding.</Heading>

        <div className="relative mt-24">
          <Timeline />

          {process.map((step) => (
            <ProcessCard key={step.id} step={step} />
          ))}
        </div>
      </Container>
    </Section>
  );
}