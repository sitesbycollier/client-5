import type { ComponentType, ReactNode } from "react";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Camera,
  CheckCircle2,
  Film,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  Phone,
  Plane,
  ScanLine,
  X,
} from "lucide-react";

const LOGO_URL = "/snapmagic/logo.png";
const DETAIL_IMAGE_URL = "/snapmagic/detail-interior.jpg";

const heroImages = [
  {
    src: "/snapmagic/hero-01.jpg",
    alt: "Exterior real estate photography by Snap Magic Media Group",
  },
  {
    src: "/snapmagic/hero-02.jpg",
    alt: "Residential property photography by Snap Magic Media Group",
  },
  {
    src: "/snapmagic/hero-03.jpg",
    alt: "Interior listing photography by Snap Magic Media Group",
  },
  {
    src: "/snapmagic/hero-04.jpg",
    alt: "Luxury home photography by Snap Magic Media Group",
  },
  {
    src: "/snapmagic/hero-05.jpg",
    alt: "Property marketing image by Snap Magic Media Group",
  },
];

const ORDER_PORTAL_URL = "https://snapmagicmedia.hd.pics/order";
const EMAIL = "SnapMagicMedia@gmail.com";
const PHONE = "409-383-4143";

type Icon = ComponentType<{ className?: string }>;
type NavItem = { label: string; path: string };
type ServiceItem = {
  title: string;
  description: string;
  path: string;
  Icon: Icon;
};

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Packages", path: "/packages" },
  { label: "Commercial", path: "/commercial" },
  { label: "Contact", path: "/contact" },
];

const serviceItems: ServiceItem[] = [
  {
    title: "Real Estate Photography",
    description:
      "Magazine-grade listing photography for Realtors, short-term rental owners, FSBO sellers, and luxury properties.",
    path: "/services",
    Icon: Camera,
  },
  {
    title: "Video Production",
    description:
      "Property walkthroughs, agent promos, neighborhood features, sales presentations, and AI-assisted lifestyle videos.",
    path: "/services",
    Icon: Film,
  },
  {
    title: "Aerial Photo and Video",
    description:
      "FAA-certified drone media for listings, land, waterfront homes, commercial sites, and construction documentation.",
    path: "/services",
    Icon: Plane,
  },
  {
    title: "Matterport 3D Tours",
    description:
      "Immersive 3D digital twins with 360-degree views, measurements, points of interest, and optional floor plans.",
    path: "/services",
    Icon: ScanLine,
  },
  {
    title: "Commercial Media",
    description:
      "Architectural photography, branded video, documentation, and quote-based production for business properties.",
    path: "/commercial",
    Icon: Building2,
  },
  {
    title: "Marketing Assets",
    description:
      "Listing websites, agent websites, branded and unbranded video packages, social media content, and print assets.",
    path: "/commercial",
    Icon: Megaphone,
  },
];

const packageOptions = [
  {
    name: "LIST",
    price: "$249",
    copy: "Get your new listing seen on MLS, internet portals, Realtor.com, Zillow, IDX, and a property website.",
  },
  {
    name: "SHOW",
    price: "$450",
    copy: "A stronger media package for agents who want more listing exposure and more value from one shoot.",
  },
  {
    name: "SELL",
    price: "$535",
    copy: "Expanded listing media plus lifestyle AI video for MLS, internet portals, IDX, and property websites.",
  },
  {
    name: "WIN",
    price: "$850",
    copy: "Customized media for larger homes, stronger listing presentation, and elevated web-ready marketing.",
  },
  {
    name: "STAR",
    price: "$1,000",
    copy: "Luxury listing media with customized video and a premium property marketing presence.",
  },
];

const pricingNotes = [
  "Photography starts at $175 for homes up to 2,000 sq. ft.",
  "Video starts at $300 for a 90-second property video.",
  "AI video with 20 images and voice over starts at $60.",
  "Aerial still images start at $140 when ordered with photography.",
  "Matterport 3D tours start at $225 for spaces up to 2,000 sq. ft.",
  "Some locations may include a small travel charge.",
];

const facts = [
  "Architectural and real estate photography",
  "Aerial images and video",
  "CubiCasa-authorized enhanced floor plans",
  "Matterport-authorized 3D digital twin provider",
  "Digital and social media marketing",
  "Short-term rental and Airbnb photography",
];

const SiteFrame = ({ children }: { children: ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-stone-50/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
          <Link
            to="/"
            className="flex items-center"
            aria-label="Snap Magic Media Group home"
          >
            <img
              src={LOGO_URL}
              alt="Snap Magic Media Group"
              className="h-14 w-auto object-contain"
            />
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `rounded-md px-2.5 py-1.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-slate-950 text-white"
                      : "text-slate-700 hover:bg-white hover:text-slate-950"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <a
            href={ORDER_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400 lg:inline-flex"
          >
            Order Now
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            className="rounded-md p-2 text-slate-700 hover:bg-white lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-stone-50 px-4 pb-4 pt-2 lg:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-slate-950 text-white"
                      : "text-slate-700 hover:bg-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={ORDER_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 rounded-md bg-amber-500 px-3 py-2 text-sm font-semibold text-slate-950"
            >
              Order Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1fr_auto_auto] md:px-8">
          <div className="max-w-sm">
            <img
              src={LOGO_URL}
              alt="Snap Magic Media Group"
              className="h-12 w-auto object-contain"
            />
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Full-service real estate, architectural, aerial, 3D tour, and
              marketing media for Hot Springs, Little Rock, and surrounding
              Arkansas markets.
            </p>
          </div>
          <nav className="grid gap-2 text-sm text-slate-600 md:grid-cols-2">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <address className="not-italic text-sm leading-6 text-slate-600">
            <p className="font-semibold text-slate-900">Linda Beber</p>
            <p>Photographer / Owner</p>
            <p>Hot Springs, AR 71901</p>
            <a href="tel:4093834143" className="block hover:text-slate-950">
              {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="block font-medium text-slate-900 hover:text-amber-700"
            >
              {EMAIL}
            </a>
          </address>
        </div>
        <div className="border-t border-slate-100 py-3 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Snap Magic Media Group. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
};

const SectionHeader = ({
  eyebrow,
  title,
  copy,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
}) => (
  <div className="mx-auto max-w-3xl text-center">
    {eyebrow && (
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
        {eyebrow}
      </p>
    )}
    <h2 className="mt-2 text-3xl font-bold tracking-normal text-slate-950 md:text-4xl">
      {title}
    </h2>
    {copy && <p className="mt-4 text-base leading-7 text-slate-600">{copy}</p>}
  </div>
);

const Hero = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-center gap-10 px-4 py-12 md:grid-cols-[1.05fr_0.95fr] md:px-8">
      <div className="space-y-7">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
          Arkansas real estate media
        </p>
        <div className="space-y-5">
          <h1 className="text-4xl font-bold leading-tight tracking-normal md:text-6xl">
            Snap Magic Media Group
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-200">
            Full-service photography, video, aerial imaging, Matterport 3D tours,
            CubiCasa floor plans, and listing marketing for Realtors,
            short-term rental owners, FSBO sellers, and commercial clients.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={ORDER_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Order Online <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            View Packages
          </Link>
        </div>
        <div className="grid gap-3 pt-3 text-sm text-slate-300 sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-300" />
              <span>{fact}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-white/10">
        {heroImages.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              activeImage === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent p-6">
          <p className="text-sm font-medium text-slate-100">
            Visual storytelling for real estate, rentals, commercial spaces, and
            property marketing.
          </p>
          <div className="mt-4 flex gap-2" aria-label="Hero image selector">
            {heroImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Show image ${index + 1}`}
                onClick={() => setActiveImage(index)}
                className={`h-1.5 rounded-full transition-all ${
                  activeImage === index ? "w-8 bg-amber-300" : "w-3 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

const HomePage = () => (
  <div>
    <Hero />
    <section className="bg-white px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What we do"
          title="Complete property media, organized around the listing."
          copy="The refreshed brand keeps the practical promise of the current site: one team for professional imagery, spatial media, video, floor plans, and launch-ready marketing assets."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((service) => (
            <Link
              key={service.title}
              to={service.path}
              className="group rounded-lg border border-slate-200 bg-stone-50 p-5 transition hover:-translate-y-0.5 hover:border-amber-300 hover:bg-white hover:shadow-md"
            >
              <service.Icon className="h-6 w-6 text-amber-700" />
              <h3 className="mt-4 text-lg font-semibold text-slate-950">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-900">
                Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-stone-100 px-4 py-16 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
            Media magic, made useful
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-950 md:text-4xl">
            Built for agents who need listings to move quickly.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Snap Magic Media Group combines advanced technology with practical
            production experience so every property can stand out with accuracy,
            creativity, and a clear marketing plan.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Free property website included with most services",
            "Branded and unbranded video packages",
            "MLS, IDX, Realtor.com, Zillow, and social-ready assets",
            "Pay at closing option for qualifying listing media orders",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-medium leading-6 text-slate-800"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const PackagesSection = () => (
  <section className="bg-white px-4 py-16 md:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionHeader
        eyebrow="Packages"
        title="Five clear ways to launch a listing."
        copy="The current package ladder is carried forward with cleaner language and clearer calls to action."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-5">
        {packageOptions.map((item) => (
          <div
            key={item.name}
            className="rounded-lg border border-slate-200 bg-stone-50 p-5"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              {item.name}
            </p>
            <p className="mt-3 text-3xl font-bold text-slate-950">
              {item.price}
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-600">{item.copy}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={ORDER_PORTAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Start an Order <ArrowRight className="h-4 w-4" />
        </a>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-stone-100"
        >
          Request a Quote
        </Link>
      </div>
    </div>
  </section>
);

const TextField = ({
  label,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  type?: string;
  required?: boolean;
  className?: string;
}) => (
  <label className={`block ${className}`}>
    <span className="text-sm font-medium text-slate-700">
      {label}
      {required ? " *" : ""}
    </span>
    <input
      type={type}
      required={required}
      className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
    />
  </label>
);

const PageShell = ({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  children?: ReactNode;
}) => (
  <section className="bg-slate-950 px-4 py-16 text-white md:px-8">
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight tracking-normal md:text-5xl">
        {title}
      </h1>
      <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-200">
        {copy}
      </p>
      {children && <div className="mt-7">{children}</div>}
    </div>
  </section>
);

const PackagesPage = () => (
  <div>
    <PageShell
      eyebrow="Packages"
      title="Simple listing packages, with custom quotes when the scope is bigger."
      copy="Keep the package choices visible without making the site feel like a maze. Residential listing media can start here; commercial, marketing, and specialty production can be quoted directly."
    >
      <a
        href={ORDER_PORTAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-400"
      >
        Order Online <ArrowRight className="h-4 w-4" />
      </a>
    </PageShell>
    <PackagesSection />
    <section className="bg-stone-100 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-bold text-slate-950">
          Current starting points
        </h2>
        <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-600 sm:grid-cols-2">
          {pricingNotes.map((note) => (
            <li key={note} className="flex gap-2">
              <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </div>
);

const BookAShootPage = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <PageShell
        eyebrow="Booking request"
        title="Thanks. Your request has been captured for follow-up."
        copy="This prototype does not send the form yet, so use the online order portal or email Linda directly for a live booking."
      >
        <div className="mx-auto flex max-w-lg flex-wrap justify-center gap-3">
          <a
            href={ORDER_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-400"
          >
            Open Order Portal <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            <Mail className="h-4 w-4" />
            Email Linda
          </a>
        </div>
      </PageShell>
    );
  }

  return (
    <div>
      <PageShell
        eyebrow="Book a shoot"
        title="Order now, or start with a custom request."
        copy="Use the live order portal for a photography, video, aerial, Matterport, or floor plan appointment. If the project needs a quote first, share the details below."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={ORDER_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-400"
          >
            Order Online <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="tel:4093834143"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            {PHONE}
          </a>
        </div>
      </PageShell>
      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_380px]">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-lg border border-slate-200 bg-stone-50 p-6"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField label="Your name" required />
              <TextField label="Email" type="email" required />
              <TextField label="Phone" type="tel" required />
              <TextField label="Preferred shoot date" type="date" />
              <TextField
                label="Property address"
                className="sm:col-span-2"
                required
              />
              <TextField label="Approximate square footage" />
              <label className="block">
                <span className="text-sm font-medium text-slate-700">
                  Primary service
                </span>
                <select className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200">
                  <option>Photography</option>
                  <option>Video</option>
                  <option>Aerial photo or video</option>
                  <option>Matterport / 3D tour</option>
                  <option>CubiCasa floor plan</option>
                  <option>Commercial media</option>
                  <option>Marketing assets</option>
                  <option>Custom quote</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-medium text-slate-700">
                  Notes, access details, or quote request
                </span>
                <textarea
                  rows={5}
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Submit Request <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          <aside className="space-y-5">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-950">
                Current starting points
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                {pricingNotes.map((note) => (
                  <li key={note} className="flex gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-lg border border-slate-200">
              <img
                src={DETAIL_IMAGE_URL}
                alt="Professional interior real estate image"
                className="h-full w-full object-cover"
              />
            </div>
          </aside>
        </div>
      </section>
      <PackagesSection />
    </div>
  );
};

const ServicesPage = () => (
  <div>
    <PageShell
      eyebrow="Services"
      title="Photography, video, aerials, 3D tours, and floor plans in one place."
      copy="This combines the smaller residential service pages into one clearer destination. Real estate photography starts at $175 for homes up to 2,000 sq. ft., with video, drone, Matterport, CubiCasa floor plans, property websites, and marketing assets available as add-ons or packages."
    />
    <section className="bg-white px-4 py-16 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-3xl font-bold text-slate-950">
            Residential, rental, and listing work
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Snap Magic Media Group serves Realtors, short-term rental owners,
            Airbnb hosts, FSBO sellers, and luxury listings across Hot Springs,
            Little Rock, and nearby Arkansas communities.
          </p>
          <Link
            to="/packages"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Compare Packages <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Bright interior and exterior listing photography",
            "90-second property videos starting at $300",
            "FAA-certified drone photography and cinematic aerial video",
            "Matterport-authorized 3D tours and measurements",
            "CubiCasa enhanced floor plans and schematic floor plans",
            "Virtual staging, property websites, and listing marketing assets",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-slate-200 bg-stone-50 p-4 text-sm font-medium leading-6 text-slate-800"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
    <PackagesSection />
  </div>
);

const ServiceDetailPage = ({
  Icon,
  eyebrow,
  title,
  copy,
  bullets,
}: {
  Icon: Icon;
  eyebrow: string;
  title: string;
  copy: string;
  bullets: string[];
}) => (
  <div>
    <PageShell eyebrow={eyebrow} title={title} copy={copy}>
      <Link
        to="/book-a-shoot"
        className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-400"
      >
        Start a Project <ArrowRight className="h-4 w-4" />
      </Link>
    </PageShell>
    <section className="bg-white px-4 py-16 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="space-y-5">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
            <Icon className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-slate-950">
            What this includes
          </h2>
          <p className="text-base leading-7 text-slate-600">
            This page keeps the live site&apos;s service detail while shifting
            the tone toward a cleaner, more premium brand: direct, practical,
            and centered on property outcomes.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {bullets.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-slate-200 bg-stone-50 p-5"
            >
              <CheckCircle2 className="h-5 w-5 text-amber-700" />
              <p className="mt-3 text-sm font-medium leading-6 text-slate-800">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const VideoPage = () => (
  <ServiceDetailPage
    Icon={Film}
    eyebrow="Videography"
    title="Property video for buyers who need to feel the space."
    copy="Video starts at $300 for a 90-second property video. Production can include walkthrough video, location aerial video, neighborhood features, agent promos, sales presentations, auction-site videos, product videos, and full cinematic production."
    bullets={[
      "Interior and exterior property walkthroughs",
      "Location and neighborhood video",
      "Agent promos and business explainers",
      "Sales presentations and auction-site media",
      "AI video with 20 images and voice over starting at $60",
      "Branded and unbranded video packages for listing campaigns",
    ]}
  />
);

const AerialsPage = () => (
  <ServiceDetailPage
    Icon={Plane}
    eyebrow="Aerials"
    title="Drone media that gives the property context."
    copy="Aerial still images start at $140 when ordered with photography. Drone services can support listing launch, land and waterfront properties, commercial sites, construction documentation, and cinematic fly-around videos."
    bullets={[
      "FAA-certified aerial photography",
      "Cinematic fly-around videos with points of interest",
      "Interior and aerial feature videos",
      "Marketing overlays for listing videos",
      "Commercial and construction site applications",
      "Standalone aerial services available by quote",
    ]}
  />
);

const MatterportPage = () => (
  <ServiceDetailPage
    Icon={ScanLine}
    eyebrow="Matterport and floor plans"
    title="Immersive 3D tours, measurements, and spatial documentation."
    copy="Matterport tours start at $225 for spaces up to 2,000 sq. ft. 3D scanning helps potential buyers, tenants, customers, and project teams experience a property before they visit."
    bullets={[
      "Matterport-authorized 3D digital twin scanning",
      "Virtual reality experience with 360-degree views",
      "3D and 2D photo capture",
      "Schematic floor plans and CubiCasa enhanced floor plans",
      "Measurements and on-screen points of interest",
      "As-built surveys and point-cloud documentation by quote",
    ]}
  />
);

const CommercialPage = () => (
  <ServiceDetailPage
    Icon={Building2}
    eyebrow="Commercial"
    title="Architectural and business media quoted around the project."
    copy="Commercial work is quoted based on scope. Snap Magic Media Group supports business properties, architectural spaces, construction sites, commercial listings, branded videos, and marketing campaigns."
    bullets={[
      "Architectural photography for commercial properties",
      "Panoramic aerials and site documentation",
      "Business and product video explainers",
      "Commercial Matterport and as-built scanning",
      "Print, web, and social media campaign assets",
      "Custom production planning for business goals",
    ]}
  />
);

const MarketingPage = () => (
  <ServiceDetailPage
    Icon={Megaphone}
    eyebrow="Media marketing"
    title="Marketing support when the business needs more than files."
    copy="The marketing page is carried forward as a clearer service line: websites, social media marketing, video production, marketing strategy, digital business cards, and print assets."
    bullets={[
      "Listing websites and agent websites",
      "Social media messaging, posts, and video",
      "Product, business, advertisement, and promotion videos",
      "Marketing strategy from starting point through measurement",
      "Digital business cards with QR code contact sharing",
      "Brochures, flyers, presentation folders, magazines, and business cards",
    ]}
  />
);

const ContactPage = () => (
  <div>
    <PageShell
      eyebrow="Contact"
      title="Let's talk through the shoot, quote, or campaign."
      copy="Reach Linda directly for real estate photography, video, aerials, 3D tours, floor plans, marketing services, and commercial quotes."
    />
    <section className="bg-white px-4 py-16 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-5">
          <div className="rounded-lg border border-slate-200 bg-stone-50 p-5">
            <MapPin className="h-5 w-5 text-amber-700" />
            <h2 className="mt-4 text-xl font-semibold text-slate-950">
              Snap Magic Media Group
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Linda Beber, Photographer / Owner
              <br />
              Hot Springs, AR 71901
            </p>
          </div>
          <a
            href="tel:4093834143"
            className="flex items-center gap-3 rounded-lg border border-slate-200 bg-stone-50 p-5 text-slate-900 hover:border-amber-300"
          >
            <Phone className="h-5 w-5 text-amber-700" />
            <span className="font-semibold">{PHONE}</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-3 rounded-lg border border-slate-200 bg-stone-50 p-5 text-slate-900 hover:border-amber-300"
          >
            <Mail className="h-5 w-5 text-amber-700" />
            <span className="font-semibold">{EMAIL}</span>
          </a>
        </div>
        <form className="rounded-lg border border-slate-200 bg-stone-50 p-6">
          <h2 className="text-2xl font-bold text-slate-950">
            Ask a question or request a quote
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            This form is staged for the new site build. Until the backend is
            connected, the phone, email, and order portal are the live contact
            paths.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <TextField label="Your name" required />
            <TextField label="Email" type="email" required />
            <TextField label="Company name" />
            <TextField label="Phone" type="tel" />
            <TextField label="Subject" className="sm:col-span-2" />
            <label className="block sm:col-span-2">
              <span className="text-sm font-medium text-slate-700">
                Message
              </span>
              <textarea
                rows={5}
                className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              />
            </label>
          </div>
          <a
            href={`mailto:${EMAIL}?subject=Snap%20Magic%20Media%20Quote%20Request`}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Email Linda Now <ArrowRight className="h-4 w-4" />
          </a>
        </form>
      </div>
    </section>
  </div>
);

export const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <SiteFrame>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-a-shoot" element={<BookAShootPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/photography" element={<Navigate to="/services" replace />} />
          <Route path="/video" element={<Navigate to="/services" replace />} />
          <Route path="/aerials" element={<Navigate to="/services" replace />} />
          <Route path="/matterport" element={<Navigate to="/services" replace />} />
          <Route path="/commercial" element={<CommercialPage />} />
          <Route path="/media-marketing" element={<Navigate to="/commercial" replace />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SiteFrame>
    </BrowserRouter>
  );
};
