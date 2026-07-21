import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Code2,
  Cloud,
  ShoppingBag,
  LineChart,
  Palette,
  Sparkles,
  Globe2,
  Zap,
  HeartHandshake,
  Search,
  PenTool,
  Hammer,
  Workflow,
  TrendingUp,
} from "lucide-react";
import heroVideo from "@/assets/hero-ai.mp4.asset.json";
import heroPoster from "@/assets/hero-poster.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dialchimp Labs — AI, Automation & Digital Innovation" },
      {
        name: "description",
        content:
          "Dialchimp Labs builds intelligent digital solutions — AI agents, automation, web platforms, and end-to-end digital transformation.",
      },
      { property: "og:title", content: "Dialchimp Labs — AI, Automation & Digital Innovation" },
      {
        property: "og:description",
        content:
          "Dialchimp Labs builds intelligent digital solutions — AI agents, automation, web platforms, and end-to-end digital transformation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  component: Landing,
});

function useMouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return pos;
}

function Nav() {
  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(1180px,calc(100%-2rem))]">
      <div className="glass grad-border-ring flex items-center justify-between rounded-full px-4 py-2.5">
        <a href="#top" className="flex items-center gap-2 pl-2">
          <div className="relative h-7 w-7">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#06B6D4]" />
            <div className="absolute inset-[3px] rounded-full bg-white grid place-items-center">
              <Sparkles className="h-3 w-3 text-slate-900" />
            </div>
          </div>
          <span className="text-sm font-semibold tracking-tight">Dialchimp Labs</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-slate-600">
          <a href="#services" className="hover:text-slate-900 transition">Services</a>
          <a href="#process" className="hover:text-slate-900 transition">Process</a>
          <a href="#work" className="hover:text-slate-900 transition">Work</a>
          <a href="#why" className="hover:text-slate-900 transition">Why us</a>
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 rounded-full bg-[#7C3AED] pl-4 pr-3 py-2 text-sm font-medium text-white hover:bg-[#6d28d9] transition"
        >
          Start a project
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const mouse = useMouseGlow();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative overflow-hidden pt-40 pb-28 md:pt-52 md:pb-40">
      {/* video + animated mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <video
          src={heroVideo.url}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f6f4ff]/40 via-[#f6f4ff]/60 to-[#f6f4ff]" />
        <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-[#7C3AED]/25 blur-[120px] animate-blob" />
        <div className="absolute top-24 -right-32 h-[520px] w-[520px] rounded-full bg-[#06B6D4]/20 blur-[120px] animate-blob [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-fuchsia-400/15 blur-[120px] animate-blob [animation-delay:-12s]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(60,40,120,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(60,40,120,.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at 50% 40%, black 40%, transparent 75%)",
          }}
        />
        <div
          className="absolute h-[380px] w-[380px] rounded-full blur-3xl transition-transform duration-100"
          style={{
            left: mouse.x - 190,
            top: mouse.y - 190,
            background:
              "radial-gradient(circle, rgba(124,58,237,0.22), transparent 60%)",
          }}
        />
      </div>

      {/* floating nodes */}
      {[
        { t: "AI Agent", x: "12%", y: "22%", d: 0 },
        { t: "Automation", x: "82%", y: "18%", d: 1.2 },
        { t: "Cloud", x: "8%", y: "72%", d: 2.4 },
        { t: "Insights", x: "86%", y: "68%", d: 0.6 },
      ].map((n, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.15, duration: 0.8 }}
          style={{ left: n.x, top: n.y, animationDelay: `${n.d}s` }}
          className="pointer-events-none absolute hidden md:flex animate-float-slow items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-slate-900/80"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_10px_#06B6D4]" />
          {n.t}
        </motion.div>
      ))}

      <motion.div style={{ y, opacity }} className="mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-slate-600"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
          Now taking Q1 2026 projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="mt-6 font-display font-semibold tracking-[-0.04em] leading-[0.95] text-[54px] sm:text-[72px] md:text-[96px]"
        >
          <span className="grad-text">Transforming</span> businesses
          <br />
          with AI, automation
          <br />
          &amp; digital <em className="not-italic grad-text">innovation</em>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mx-auto mt-8 max-w-2xl text-base md:text-lg text-slate-600"
        >
          We build intelligent digital solutions that automate workflows, accelerate
          growth, and create exceptional customer experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#7C3AED] px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#7C3AED]/25 transition hover:scale-[1.02] hover:bg-[#6d28d9]"
          >
            Start a project
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="glass grad-border-ring inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm text-slate-800 hover:text-slate-900 transition"
          >
            View services
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function TechMarquee() {
  const items = [
    "OpenAI", "Anthropic", "LangChain", "Next.js", "React", "TypeScript",
    "Node.js", "Python", "Postgres", "Supabase", "Vercel", "AWS",
    "Cloudflare", "Stripe", "Figma", "Framer",
  ];
  const loop = [...items, ...items];
  return (
    <section className="relative py-16">
      <p className="text-center text-xs uppercase tracking-[0.25em] text-slate-400">
        Built with modern technologies
      </p>
      <div
        className="mt-8 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-14 whitespace-nowrap">
          {loop.map((t, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-semibold text-slate-300 hover:text-slate-600 transition"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Bot, title: "AI & Automation", desc: "Intelligent workflows, AI agents, chatbots, and process automation." },
  { icon: Code2, title: "Web & Software", desc: "Custom websites, SaaS products, portals, and enterprise applications." },
  { icon: Cloud, title: "Digital Transformation", desc: "Modernize operations with cloud-native systems and integrations." },
  { icon: ShoppingBag, title: "E-Commerce", desc: "Scalable online stores optimized for real-world conversions." },
  { icon: LineChart, title: "Marketing & SEO", desc: "Growth strategies powered by analytics and AI-driven insights." },
  { icon: Palette, title: "Branding & Design", desc: "Modern brand identities and standout user experiences." },
];

function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Services" title={<>Everything you need to <span className="grad-text">ship faster</span>.</>} />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="grad-border grad-border-ring group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#7C3AED]/0 blur-2xl transition-all duration-500 group-hover:bg-[#7C3AED]/25" />
              <div className="glass inline-flex h-11 w-11 items-center justify-center rounded-xl">
                <s.icon className="h-5 w-5 text-slate-900" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-xs text-slate-500 group-hover:text-slate-900 transition">
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: Search, title: "Discover", desc: "Understanding your business challenges and goals." },
  { icon: PenTool, title: "Design", desc: "Crafting user-focused experiences that convert." },
  { icon: Hammer, title: "Build", desc: "Developing scalable, resilient digital products." },
  { icon: Workflow, title: "Automate", desc: "Integrating AI and workflow automation deeply." },
  { icon: TrendingUp, title: "Grow", desc: "Continuous optimization, iteration and support." },
];

function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 60%", "end 40%"] });
  const line = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const height = useTransform(line, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Process" title={<>How we <span className="grad-text">turn ideas</span> into products.</>} />
        <div ref={ref} className="relative mt-16 pl-8 md:pl-16">
          <div className="absolute left-2 md:left-6 top-0 bottom-0 w-px bg-slate-200" />
          <motion.div
            style={{ height }}
            className="absolute left-2 md:left-6 top-0 w-px bg-gradient-to-b from-[#7C3AED] via-[#06B6D4] to-transparent"
          />
          <div className="space-y-14">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -left-[26px] md:-left-[46px] top-1 grid h-6 w-6 place-items-center rounded-full bg-white border border-slate-200">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#06B6D4]" />
                </div>
                <div className="flex items-start gap-4">
                  <div className="glass hidden md:inline-flex h-11 w-11 items-center justify-center rounded-xl">
                    <s.icon className="h-5 w-5 text-slate-900" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-slate-400">
                      Step 0{i + 1}
                    </div>
                    <h3 className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-slate-600">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const solutions = [
  { tag: "Support", title: "AI Customer Support Agent", desc: "24/7 intelligent customer engagement that resolves tickets, escalates smartly, and learns from every conversation.", grad: "from-[#7C3AED] to-[#06B6D4]" },
  { tag: "HR Tech", title: "Recruitment Automation Platform", desc: "AI-powered staffing and candidate matching — from sourcing to screening to structured interviews.", grad: "from-[#f472b6] to-[#7C3AED]" },
  { tag: "Operations", title: "Business Operations Portal", desc: "A complete workflow management hub for SMEs — teams, tasks, approvals, analytics in one canvas.", grad: "from-[#06B6D4] to-[#22d3ee]" },
  { tag: "Commerce", title: "Smart E-Commerce Platform", desc: "Personalized shopping experiences with AI-driven recommendations, dynamic pricing and search.", grad: "from-[#f59e0b] to-[#ef4444]" },
];

function FeaturedSolutions() {
  return (
    <section id="work" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading eyebrow="Featured Solutions" title={<>Products we've <span className="grad-text">already shipped</span>.</>} />
          <p className="max-w-sm text-sm text-slate-500">
            A glimpse into how Dialchimp Labs blends AI, design and engineering into
            production-ready products.
          </p>
        </div>
      </div>

      <div
        className="mt-14 overflow-x-auto no-scrollbar"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex gap-6 px-6 md:px-[calc((100vw-1152px)/2)] pb-6">
          {solutions.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="grad-border grad-border-ring group relative flex h-[440px] w-[340px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl p-7"
            >
              <div className={`absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br ${s.grad} opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60`} />
              <div>
                <span className="glass rounded-full px-3 py-1 text-[10px] uppercase tracking-widest text-slate-600">
                  {s.tag}
                </span>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight leading-snug">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs text-slate-400">0{i + 1} / 0{solutions.length}</div>
                <div className="glass grid h-10 w-10 place-items-center rounded-full transition group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.article>
          ))}
          <div className="w-6 shrink-0" />
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { icon: Globe2, title: "Global Presence", desc: "England & India delivery model — timezone-friendly execution around the clock." },
  { icon: Sparkles, title: "AI-First Approach", desc: "Modern automation integrated from day one, not bolted on later." },
  { icon: Zap, title: "End-to-End Expertise", desc: "Strategy, design, development and growth — all under one roof." },
  { icon: HeartHandshake, title: "Dedicated Support", desc: "A reliable, long-term partnership beyond project delivery." },
];

function Why() {
  return (
    <section id="why" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Why Dialchimp Labs" title={<>Built to be your <span className="grad-text">long-term partner</span>.</>} />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="grad-border grad-border-ring group relative flex items-start gap-5 rounded-2xl p-7"
            >
              <div className="glass shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl">
                <r.icon className="h-5 w-5 text-slate-900" />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{r.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grad-border-ring relative overflow-hidden rounded-[32px] px-8 py-20 md:px-16 md:py-28 text-center">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ede9fe] via-white to-[#cffafe]" />
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-[#7C3AED]/30 blur-[110px] animate-blob" />
            <div className="absolute bottom-0 right-0 h-[320px] w-[420px] rounded-full bg-[#06B6D4]/25 blur-[110px] animate-blob [animation-delay:-8s]" />
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Let's build</p>
          <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[44px] md:text-[72px] leading-[0.95]">
            Ready to build <span className="grad-text">smarter</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-slate-600">
            Transform your ideas into intelligent digital solutions with a team that
            treats your product like its own.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@dialchimplabs.com"
              className="group inline-flex items-center gap-2 rounded-full bg-[#7C3AED] px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#7C3AED]/25 transition hover:scale-[1.02] hover:bg-[#6d28d9]"
            >
              Schedule a consultation
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:hello@dialchimplabs.com"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm text-slate-800 hover:text-slate-900 transition"
            >
              hello@dialchimplabs.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200/70 py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="relative h-7 w-7">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#06B6D4]" />
            <div className="absolute inset-[3px] rounded-full bg-white grid place-items-center">
              <Sparkles className="h-3 w-3 text-slate-900" />
            </div>
          </div>
          <span className="text-sm font-semibold">Dialchimp Labs</span>
        </div>
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Dialchimp Labs. Crafted between England & India.
        </p>
        <div className="flex items-center gap-6 text-xs text-slate-500">
          <a href="#services" className="hover:text-slate-900">Services</a>
          <a href="#work" className="hover:text-slate-900">Work</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs uppercase tracking-[0.3em] text-slate-400"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-4 font-display font-semibold tracking-[-0.03em] text-4xl md:text-5xl leading-[1.05]"
      >
        {title}
      </motion.h2>
    </div>
  );
}

function Landing() {
  return (
    <main className="relative min-h-screen bg-[#f6f4ff] text-slate-900 overflow-x-hidden">
      <Nav />
      <Hero />
      <TechMarquee />
      <Services />
      <Process />
      <FeaturedSolutions />
      <Why />
      <CTA />
      <Footer />
    </main>
  );
}
