export default function Heading({ children, className = "" }) {
  return (
    <h2
      className={`font-heading text-5xl md:text-7xl xl:text-8xl leading-none tracking-tight ${className}`}
    >
      {children}
    </h2>
  );
}