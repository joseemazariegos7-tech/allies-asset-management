export const metadata = { title: "Contact | Allies Asset Management" };

export default function Contact() {
  return (
    <section className="container py-16">
      <h1 className="text-4xl font-bold">Schedule a Consultation</h1>
      <p className="mt-4 text-gray-300 max-w-2xl">
        Tell us about your property and goals. We’ll follow up within one business day.
      </p>

      <form className="mt-8 grid md:grid-cols-2 gap-4 max-w-3xl" onSubmit={async (e)=>{
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget).entries());
        const res = await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });
        alert(res.ok ? "Thanks! We’ll be in touch." : "Something went wrong.");
        if (res.ok) e.currentTarget.reset();
      }}>
        <input className="card" placeholder="Full Name" name="name" required/>
        <input className="card" placeholder="Email" name="email" type="email" required/>
        <input className="card" placeholder="Phone" name="phone"/>
        <input className="card" placeholder="Property Address" name="propertyAddress"/>
        <select className="card" name="package">
          <option value="">Interested Package</option>
          <option>Basic</option><option>Standard</option><option>Premium</option>
        </select>
        <select className="card" name="unitType">
          <option value="">Unit Type</option>
          <option>Single-Family</option><option>Duplex</option><option>Triplex/Fourplex</option>
          <option>Small Multi-Family (5–20)</option>
        </select>
        <textarea className="card md:col-span-2" placeholder="Notes" name="notes" rows={5}></textarea>
        <div className="md:col-span-2">
          <button className="btn btn-gold-solid">Send</button>
        </div>
      </form>
    </section>
  );
}
