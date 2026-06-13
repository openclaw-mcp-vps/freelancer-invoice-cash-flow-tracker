export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Nav */}
      <nav className="border-b border-[#30363d] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-xl">InvoiceFlow</span>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="bg-[#58a6ff] text-[#0d1117] font-semibold px-4 py-2 rounded-lg text-sm hover:bg-[#79b8ff] transition-colors"
        >
          Get Started
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          Built for Freelancers &amp; Consultants
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Predict Your Freelance{" "}
          <span className="text-[#58a6ff]">Cash Flow</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Stop guessing when you'll get paid. InvoiceFlow tracks your invoices, learns your clients' payment patterns, and gives you an accurate cash flow forecast — so you always know what's coming.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#79b8ff] transition-colors"
          >
            Start Free Trial — $15/mo
          </a>
          <a
            href="#features"
            className="border border-[#30363d] text-[#c9d1d9] font-semibold px-8 py-4 rounded-xl text-lg hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            See How It Works
          </a>
        </div>
        <p className="text-sm text-[#8b949e] mt-4">No credit card required for trial. Cancel anytime.</p>
      </section>

      {/* Features */}
      <section id="features" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-12">Everything you need to stay financially ahead</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "📄",
              title: "Invoice Tracking",
              desc: "Manage all your invoices in one place. Track sent, viewed, overdue, and paid statuses at a glance."
            },
            {
              icon: "📊",
              title: "Payment Pattern Analysis",
              desc: "InvoiceFlow learns how each client pays — early, on time, or late — and factors that into your forecast."
            },
            {
              icon: "🔮",
              title: "Cash Flow Prediction",
              desc: "See a 30, 60, and 90-day cash flow projection based on outstanding invoices and historical data."
            }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-[#58a6ff] transition-colors">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-4">Simple, transparent pricing</h2>
        <p className="text-[#8b949e] text-center mb-12">One plan. Everything included. No surprises.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-8">per month, billed monthly</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited invoices",
              "Unlimited clients",
              "Cash flow forecasting (30/60/90 days)",
              "Client payment pattern analysis",
              "Overdue invoice alerts",
              "CSV export",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] text-[#0d1117] font-bold py-4 rounded-xl text-lg hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-xs text-[#8b949e] mt-4">7-day free trial. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does the cash flow prediction work?",
              a: "InvoiceFlow analyzes your historical invoice data and each client's payment behavior — average days to pay, frequency of late payments — and uses that to project when outstanding invoices are likely to be paid, giving you a realistic cash flow forecast."
            },
            {
              q: "Can I import my existing invoices?",
              a: "Yes. You can import invoices via CSV upload or connect your existing tools. InvoiceFlow supports bulk import so you can get started with your full invoice history right away."
            },
            {
              q: "What happens if I cancel my subscription?",
              a: "You can cancel anytime with no penalties. After cancellation, you'll retain read-only access to your data for 30 days so you can export everything before your account closes."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-3">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] px-6 py-8 text-center text-sm text-[#8b949e]">
        <p>© {new Date().getFullYear()} InvoiceFlow. Built for freelancers who want financial clarity.</p>
      </footer>
    </main>
  )
}
