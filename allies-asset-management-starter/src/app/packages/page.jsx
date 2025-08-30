export const metadata = { title: "Packages | Allies Asset Management" };

function Check({ on }) {
  return <span className={on ? "text-[#D4AF37]" : "text-gray-600"}>{on ? "✔︎" : ""}</span>;
}

export default function Packages() {
  const rows = [
    ["Monthly Rent Collection & Accounting", 1,1,1],
    ["Online Owner Portal", 1,1,1],
    ["Tenant Communication", 1,1,1],
    ["Monthly Financial Reports", 1,1,1],
    ["Lease Enforcement & Renewals", 0,1,1],
    ["Maintenance Coordination (Allies GC)", 0,1,1],
    ["24/7 Emergency Support", 0,1,1],
    ["Bi‑Annual Property Inspections", 0,1,1],
    ["Leasing Placement (Marketing, Showings, Screening)", 0,0,1],
    ["Annual Property Valuation Report", 0,0,1],
    ["Renovation & Upgrade Consulting", 0,0,1],
    ["Eviction Filing & Court Representation", 0,0,1],
    ["Optional Repair Savings Account", "Add‑On","✔︎","✔︎"],
  ];

  return (
    <section className="container py-16">
      <h1 className="text-4xl font-bold">Management Packages</h1>
      <p className="mt-4 text-gray-300 max-w-2xl">
        Choose the coverage that fits your portfolio. All plans include transparent reporting and owner support.
      </p>

      <div className="mt-8 overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Features</th>
              <th>Basic<br/><span className="text-xs text-gray-300">$100/mo</span></th>
              <th>Standard<br/><span className="text-xs text-gray-300">$150/mo</span></th>
              <th className="bg-[#1a1a1a]">Premium<br/><span className="text-xs text-gray-300">$200/mo</span></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r,i)=> (
              <tr key={i}>
                <td>{r[0]}</td>
                <td className="text-center">{r[1] === 1 ? <Check on/> : (r[1] || "")}</td>
                <td className="text-center">{r[2] === 1 ? <Check on/> : (r[2] || "")}</td>
                <td className="text-center">{r[3] === 1 ? <Check on/> : (r[3] || "")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <a href="/contact" className="btn btn-gold-outline">Get Started Today</a>
      </div>
    </section>
  );
}
