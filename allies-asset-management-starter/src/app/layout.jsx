export const metadata = {
  title: "Allies Asset Management | Property Management in Chattanooga, TN",
  description: "Premium property management and asset care in Chattanooga: tenant placement, rent collection, maintenance via Allies GC, and ROI-focused renovations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json">{}</script>
        <header className="border-b border-yellow-700/30">
          <div className="container flex items-center justify-between py-4">
            <a href="/" className="text-xl font-semibold text-[#D4AF37]">Allies Asset Management</a>
            <nav className="space-x-6 text-sm">
              <a href="/services" className="hover:text-[#D4AF37]">Services</a>
              <a href="/packages" className="hover:text-[#D4AF37]">Packages</a>
              <a href="/contact" className="btn btn-gold-outline">Contact</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-20 border-t border-yellow-700/30">
          <div className="container py-8 text-sm text-gray-300">
            <div>© {new Date().getFullYear()} Allies Asset Management • Chattanooga, TN</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
