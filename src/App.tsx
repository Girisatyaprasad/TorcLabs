import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Zap, Beaker, TrendingDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-charcoal font-sans text-text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-deep-red rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-semibold text-sm tracking-wide uppercase">Torc Creative Labs</span>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-deep-red hover:bg-deep-red-hover text-white text-sm font-medium rounded transition-colors duration-200"
          >
            Book a Call
            <ArrowRight size={14} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-3 py-1 border border-border rounded-full text-text-secondary text-xs uppercase tracking-widest">
              Creative R&D Studio
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8">
            We are a specialized{' '}
            <span className="relative inline-block">
              Creative R&D Lab
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
                className="absolute bottom-0 left-0 h-[3px] bg-deep-red"
              />
            </span>
            .
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-12">
            We build high-converting ad concepts that lower your CPA and elevate your brand positioning, without the bloat of a full-stack agency.
          </p>

          <motion.a
            href="#concepts"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-deep-red hover:bg-deep-red-hover text-white font-medium rounded transition-all duration-200 hover:scale-105"
          >
            View Our Work
            <ArrowDown size={18} className="animate-bounce" />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-10"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-text-muted" />
        </motion.div>
      </section>

      {/* Proof Section: Creative in Action */}
      <section id="concepts" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <span className="text-deep-red text-sm font-medium uppercase tracking-widest mb-4 block">
              Case Study
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Creative in Action: <span className="text-text-secondary">ProBodyline</span>
            </h2>
          </motion.div>

          {/* Concept Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group border border-border rounded-lg overflow-hidden hover:border-deep-red/50 transition-colors duration-300"
            >
              {/* Placeholder Image */}
              <div className="aspect-[16/10] bg-charcoal-light border-b border-border flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal-light to-charcoal" />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-3 border border-border rounded-lg flex items-center justify-center">
                    <span className="text-text-muted text-2xl font-bold">01</span>
                  </div>
                  <p className="text-text-muted text-xs uppercase tracking-widest">Ad Mockup</p>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold mb-6 group-hover:text-deep-red-hover transition-colors">
                  Concept 01: The Industrial Standard
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                    <span className="text-deep-red mt-1 flex-shrink-0">—</span>
                    <span>Moody, high-contrast lighting elevates the equipment from a standard catalog item to premium industrial design.</span>
                  </li>
                  <li className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                    <span className="text-deep-red mt-1 flex-shrink-0">—</span>
                    <span>The headline "Extraordinarily Engineered" bypasses cheap buzzwords to address the buyer's need for low-maintenance durability.</span>
                  </li>
                  <li className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                    <span className="text-deep-red mt-1 flex-shrink-0">—</span>
                    <span>Clean negative space and UI-safe text placement ensure the ad looks native to premium platforms, elevating brand value.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group border border-border rounded-lg overflow-hidden hover:border-deep-red/50 transition-colors duration-300"
            >
              {/* Placeholder Image */}
              <div className="aspect-[16/10] bg-charcoal-light border-b border-border flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal-light to-charcoal" />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-3 border border-border rounded-lg flex items-center justify-center">
                    <span className="text-text-muted text-2xl font-bold">02</span>
                  </div>
                  <p className="text-text-muted text-xs uppercase tracking-widest">Ad Mockup</p>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold mb-6 group-hover:text-deep-red-hover transition-colors">
                  Concept 02: Member Retention Through Ergonomics
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                    <span className="text-deep-red mt-1 flex-shrink-0">—</span>
                    <span>We shifted the messaging from "comfort" to "ergonomics," positioning the equipment as professional sports science that directly reduces member churn.</span>
                  </li>
                  <li className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                    <span className="text-deep-red mt-1 flex-shrink-0">—</span>
                    <span>The cinematic, shadow-heavy aesthetic highlights the seamless human-machine interaction, proving the equipment belongs in a premium facility.</span>
                  </li>
                  <li className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                    <span className="text-deep-red mt-1 flex-shrink-0">—</span>
                    <span>This tells gym owners that ProBodyline isn't just hardware; it's the high-end experience that justifies their membership fees.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-32 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <span className="text-deep-red text-sm font-medium uppercase tracking-widest mb-4 block">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              The Torc Labs Model
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 border border-border rounded-lg hover:border-deep-red/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-6 border border-border rounded-lg flex items-center justify-center">
                <Zap size={24} className="text-text-muted" />
              </div>
              <h3 className="text-lg font-semibold mb-4">No Media Buying</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                We do not manage your ad spend or post on your feed.
              </p>
            </motion.div>

            {/* Column 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 border border-border rounded-lg hover:border-deep-red/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-6 border border-border rounded-lg flex items-center justify-center">
                <Beaker size={24} className="text-text-muted" />
              </div>
              <h3 className="text-lg font-semibold mb-4">Creative R&D</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                We build high-converting creative hypotheses and hand them to your media team.
              </p>
            </motion.div>

            {/* Column 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-8 border border-border rounded-lg hover:border-deep-red/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-6 border border-border rounded-lg flex items-center justify-center">
                <TrendingDown size={24} className="text-text-muted" />
              </div>
              <h3 className="text-lg font-semibold mb-4">Lower CPA</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Our goal is to provide assets that stop the scroll and communicate premium value instantly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA / Footer Section */}
      <section id="contact" className="py-32 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to upgrade your creative?
            </h2>
            <p className="text-text-secondary text-lg mb-12 max-w-xl mx-auto">
              We are currently selecting 2–3 foundational partners for a 3-week Creative Sprint.
            </p>

            <a
              href="mailto:hello@torccreativelabs.com?subject=Strategy%20Call%20Request"
              className="inline-flex items-center gap-3 px-10 py-5 bg-deep-red hover:bg-deep-red-hover text-white font-medium text-lg rounded transition-all duration-200 hover:scale-105"
            >
              Book a 15-Minute Strategy Call
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-deep-red rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">T</span>
            </div>
            <span className="text-text-muted text-sm">© 2024 Torc Creative Labs.</span>
          </div>
          <p className="text-text-muted text-xs">
            Specialized Creative R&D for premium brands.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
