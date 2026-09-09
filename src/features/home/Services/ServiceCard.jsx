import { FiArrowUpRight } from "react-icons/fi";

export default function ServiceCard({ service }) {
  return (
    <article
      className="
        group
        border-t
        border-zinc-800
        py-12
        transition
        hover:border-yellow-500
      "
    >
      <div className="grid items-center gap-8 md:grid-cols-12">
        <span className="text-yellow-400 md:col-span-2">{service.id}</span>

        <div className="md:col-span-8">
          <h3 className="text-3xl font-semibold transition group-hover:text-yellow-400">
            {service.title}
          </h3>

          <p className="mt-4 max-w-xl text-zinc-400">{service.description}</p>
        </div>

        <div className="flex justify-end md:col-span-2">
          <FiArrowUpRight
            size={32}
            className="transition group-hover:translate-x-2 group-hover:-translate-y-2"
          />
        </div>
      </div>
    </article>
  );
}