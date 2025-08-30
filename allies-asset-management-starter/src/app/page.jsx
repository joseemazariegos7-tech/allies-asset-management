export default function Home() {
  return (
    <section>
      <div className="container py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Chattanooga Property Management <span className="text-[#D4AF37]">& Asset Care</span>
        </h1>
        <p className="mt-6 max-w-2xl text-gray-300">
          We protect your investment and maximize ROI with professional leasing, rent collection, maintenance powered by Allies GC, and value‑add renovations.
        </p>
        <div className="mt-8 space-x-3">
          <a href="/packages" className="btn btn-gold-solid">View Packages</a>
          <a href="/contact" className="btn btn-gold-outline">Schedule Consultation</a>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { title: "Owner Portal", href: "#", desc: "Link or embed your PMS owner portal here." },
            { title: "Tenant Portal", href: "#", desc: "Link or embed tenant payments & maintenance requests." },
            { title: "Maintenance by Allies GC", href: "/services", desc: "In-house crews for speed, quality, and savings." }
          ].map((c) => (
            <a key={c.title} href={c.href} className="card block hover:border-yellow-400/50">
              <div className="text-[#D4AF37] font-semibold">{c.title}</div>
              <div className="mt-2 text-gray-300 text-sm">{c.desc}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
