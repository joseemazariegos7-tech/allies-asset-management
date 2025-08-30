export const metadata = { title: "Services | Allies Asset Management" };

export default function Services() {
  const services = [
    { title: "Full-Service Management", desc: "Rent collection, accounting, lease enforcement, inspections, owner reporting." },
    { title: "Tenant Placement", desc: "Marketing, showings, screening, lease execution." },
    { title: "Maintenance Coordination", desc: "24/7 emergencies, repairs via Allies GC, preventative schedules." },
    { title: "Renovation & Value-Add", desc: "CapEx planning, unit turns, ROI modeling, contractor management." },
    { title: "Financial Reporting", desc: "Monthly statements, year-end summaries, tax-ready exports." },
  ];
  return (
    <section className="container py-16">
      <h1 className="text-4xl font-bold">Services</h1>
      <p className="mt-4 text-gray-300 max-w-2xl">
        Premium property management tailored for single-family, duplexes, and small multi‑family in Chattanooga.
      </p>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {services.map(s => (
          <div className="card" key={s.title}>
            <div className="text-[#D4AF37] font-semibold">{s.title}</div>
            <div className="mt-2 text-gray-300 text-sm">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
