export default function Section({ children, id, className = "" }) {
  return (
    <section
      id={id}
      className={`py-32 lg:py-44 ${className}`}
    >
      {children}
    </section>
  );
}