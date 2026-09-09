export default function Section({ children, className = "" }) {
  return (
    <section className={`py-32 lg:py-44 ${className}`}>{children}</section>
  );
}