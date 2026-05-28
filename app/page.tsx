import Image from 'next/image';
import logo from '../public/logo.jpeg';
import owner from '../public/owner.jpeg';
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const HeavenHomesPortfolio = () => {
  const services = [
    {
      title: 'Real Estate Advisory',
      desc: 'Strategic residential and commercial property advisory, developer tie-ups, and B2B partnerships.',
      tech: ['Brokerage', 'B2B', 'Consultancy'],
    },
    {
      title: 'Interior Design',
      desc: 'Full-service design for residential apartments and commercial offices with zero outsourcing and total accountability.',
      tech: ['Concept', 'Space Planning', 'Execution'],
    },
    {
      title: 'Co-working Spaces',
      desc: 'Premium flexible workspaces in Gurugram featuring private cabins and conference facilities on SPR.',
      tech: ['Managed Workspaces', 'Private Cabins', 'SPR'],
    }
  ];

  const stats = [
    { label: 'Project Delivered', value: '500+' },
    { label: 'Square Feet Designed', value: '2M+' },
    { label: 'Years of Excellence', value: '15+' },
    { label: 'Client Retention', value: '98%' },
  ];

  const steps = [
    { title: 'Consultation', desc: 'Understanding your vision, budget, and site potential.' },
    { title: 'Blueprint', desc: 'Detailed 3D visualizations and structural planning.' },
    { title: 'Procurement', desc: 'Sourcing premium materials via our vetted vendor network.' },
    { title: 'Handover', desc: 'Final walkthrough and move-in ready transformation.' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* --- Navigation --- */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 bg-white/90 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="relative w-10 h-10">
            <Image
              src={logo}
              alt="Heaven Homes Logo"
              fill
              className="object-contain"
              sizes="40px"
              priority
            />
          </div>
          <span className="text-lg font-black tracking-tighter uppercase text-slate-800">
            Heaven<span className="text-blue-600">Homes</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-bold tracking-wide uppercase text-slate-500">
          <a href="#about" className="hover:text-blue-600 transition-colors">
            Vision
          </a>
          <a href="#services" className="hover:text-blue-600 transition-colors">
            Services
          </a>
          <a href="#process" className="hover:text-blue-600 transition-colors">
            Process
          </a>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-slate-900 transition-all shadow-lg shadow-blue-200"
          >
            Get a Quote
          </a>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header
        id="about"
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 bg-[radial-gradient(circle_at_top_right,_#f8fafc,_#ffffff)]"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-8 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available Across NCR
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.05]">
            Where Strategy <br /> Meets <span className="text-blue-600">Sophistication.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Heaven Homes is a multi-disciplinary firm bridging the gap between luxury real estate
            acquisition and high-end interior execution.
          </p>
        </div>
      </header>

      {/* --- NEW: Strategic Impact (Stats) --- */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-slate-900 p-8 md:p-16 text-center shadow-2xl">
          {stats.map((stat, i) => (
            <div key={i} className="border-r border-slate-800 last:border-0">
              <p className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</p>
              <p className="text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="max-w-7xl mx-auto py-12 px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
            Core Capabilities
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-10 bg-white border border-slate-100 hover:border-blue-600/20 hover:shadow-3xl transition-all duration-500"
            >
              <div className="text-slate-200 group-hover:text-blue-100 absolute top-8 right-10 text-6xl font-black transition-colors">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-8 relative z-10">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-bold uppercase tracking-widest bg-slate-50 text-slate-600 px-3 py-1.5 rounded-md group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- NEW: Seamless Transformation (Process) --- */}
      <section id="process" className="bg-slate-50 py-24 px-6 my-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">How We Bring Ideas to Life</h2>
            <p className="text-slate-500">
              A rigorous 4-step framework ensuring precision at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-blue-600 text-lg font-black mb-4 flex items-center gap-4">
                  Step {i + 1}
                  <div className="flex-1 h-[1px] bg-slate-200 hidden md:block"></div>
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Founder Section --- */}
      <section className="py-24 px-6 bg-slate-900 text-white  mx-4 mb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-6 underline decoration-2 underline-offset-8">
                Managing Director
              </h3>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Suresh Kumar Arora</h2>
              <p className="text-slate-300 text-xl leading-relaxed mb-10 font-light">
                &quot;Our philosophy is simple: we don&apos;t just build spaces; we build legacies.
                By integrating real estate intelligence with design, we protect our clients&apos;
                investments while fulfilling their aesthetic dreams.&quot;
              </p>
              <div className="grid grid-cols-3 gap-4 md:gap-8 pt-10 border-t border-slate-800">
                {[
                  { city: 'Gurugram', role: 'HQ' },
                  { city: 'Rewari', role: 'Branch' },
                  { city: 'Kosli', role: 'Ops' },
                ].map((loc, i) => (
                  <div key={i}>
                    <p className="text-lg md:text-2xl font-bold text-white">{loc.city}</p>
                    <p className="text-blue-500 text-[10px] uppercase font-black tracking-widest">
                      {loc.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 relative group">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] border-[12px] border-slate-800 shadow-2xl">
                <Image
                  src={owner}
                  alt="Suresh Kumar Arora"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer id="contact" className="bg-[#0b1c2c] text-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Top Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Offices */}
            <div>
              <h4 className="text-xs tracking-[0.3em] text-yellow-500 mb-6 font-bold">
                OUR OFFICES
              </h4>

              <div className="space-y-6 text-sm text-gray-300">
                <div>
                  <p className="font-semibold text-white">Gurugram</p>
                  <p>Gurugram, Haryana</p>
                </div>

                <div>
                  <p className="font-semibold text-white">Rewari</p>
                  <p>Rewari, Haryana</p>
                </div>

                <div>
                  <p className="font-semibold text-white">Kosli</p>
                  <p>Kosli, Haryana</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs tracking-[0.3em] text-yellow-500 mb-6 font-bold">
                WHAT WE OFFER
              </h4>

              <ul className="space-y-4 text-sm text-gray-300">
                <li className="hover:text-blue-400 transition">Real Estate Brokerage</li>
                <li className="hover:text-blue-400 transition">Co-working Spaces</li>
                <li className="hover:text-blue-400 transition">Developer & Channel Advisory</li>
                <li className="hover:text-blue-400 transition">Interior Design</li>
              </ul>
            </div>

            {/* Contact CTA */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-black italic leading-tight">
                  Let&apos;s build your <span className="text-blue-500">heaven.</span>
                </h2>

                <a
                  href="mailto:contact@heavenhomes.com"
                  className="inline-block mt-6 text-lg font-semibold border-b border-blue-500 pb-1 hover:text-blue-400 transition"
                >
                  hello@heavenhomes.com
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-xs tracking-[0.25em] text-gray-400">
            {/* Brand */}
            <p className="text-lg font-semibold tracking-normal text-white">Heaven Homes</p>

            {/* Info */}
            <div className="flex gap-8 mt-4 md:mt-0">
              <span>EST. 2009</span>
              <span>GURUGRAM HQ</span>
              <span>REWARI BRANCH</span>
            </div>

            {/* Social + Note */}
            <div className="flex flex-col items-center md:items-end mt-4 md:mt-0 gap-3">
              {/* Social Icons */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 rounded-full hover:bg-white/10 hover:text-blue-400 transition"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full hover:bg-white/10 hover:text-blue-400 transition"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full hover:bg-white/10 hover:text-blue-400 transition"
                >
                  <FaFacebook size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full hover:bg-white/10 hover:text-blue-400 transition"
                >
                  <FaTwitter size={18} />
                </a>
              </div>

              {/* Footer Note */}
              <p className="text-[10px]">CONFIDENTIAL · FOR LESSOR REFERENCE ONLY</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeavenHomesPortfolio;
