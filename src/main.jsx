import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  Beef,
  Car,
  Check,
  ChevronUp,
  Clock3,
  CreditCard,
  Facebook,
  Fuel,
  Gift,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Quote,
  ShoppingBasket,
  Sparkles,
  Star,
  Store,
  Youtube,
} from "lucide-react";
import AboutPage from "./About.jsx";
import ContactPage from "./Contact.jsx";
import EmploymentApplicationPage from "./EmploymentApplication.jsx";
import ServicePage from "./Service.jsx";
import "./styles.css";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=124%20E%20Redbud%20Ln%2C%20Florence%2C%20SC%2029505%2C%20USA";

const image = {
  logo: "https://globalmarketsc.com//assets/images/logo/logo_3.png",
  storefront:
    "https://globalmarketsc.com//assets/uploads/sliders/1745992421589477.jpg",
  exterior:
    "https://globalmarketsc.com//assets/uploads/sliders/1744610324149338.jpg",
  store: "https://globalmarketsc.com//assets/uploads/sliders/174461038491570.jpg",
  fuel: "https://globalmarketsc.com//assets/uploads/sliders/1744610324149338.jpg",
  carwash: "https://globalmarketsc.com//assets/uploads/sliders/1744610343436155.jpg",
  party: "https://globalmarketsc.com//assets/uploads/sliders/1744610454928337.jpg",
  deli: "https://globalmarketsc.com//assets/uploads/sliders/1744190324992931.jpg",
  pumps: "https://globalmarketsc.com//assets/images/oill/choose-bg.jpg",
  shelves: "https://globalmarketsc.com//assets/uploads/sliders/1744610478578718.jpg",
};

const facilities = [
  "Global Market Gas Station",
  "Global Market Store",
  "Global Soft Touch Car Wash",
  "Global Party Shop",
];

const services = [
  {
    title: "Global Market Gas Station",
    icon: Fuel,
    image: image.fuel,
    body: "Fast, reliable fuel service built around easy access, clean pumps, and everyday convenience.",
  },
  {
    title: "Global Market Store",
    icon: Store,
    image: image.store,
    body: "Snacks, beverages, groceries, deli favorites, lottery, ATM access, and household essentials.",
  },
  {
    title: "Global Soft Touch Car Wash",
    icon: Car,
    image: image.carwash,
    body: "A gentle, effective wash experience for drivers who want a clean finish without slowing down.",
  },
  {
    title: "Global Party Shop",
    icon: Gift,
    image: image.party,
    body: "Liquor, beverages, and celebration-ready selections for quick plans or weekend hosting.",
  },
];

const locations = [
  {
    name: "Global Market #1",
    address: "2490 Alligator Rd, Effingham, SC 29541, USA",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=2490%20Alligator%20Rd%2C%20Effingham%2C%20SC%2029541%2C%20USA",
    services: ["Convenience Store", "Liquor Shop"],
  },
  {
    name: "Global Market #2",
    address: "2631 W Palmetto St, Florence, SC 29501, USA",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=2631%20W%20Palmetto%20St%2C%20Florence%2C%20SC%2029501%2C%20USA",
    services: ["Convenience Store", "Gas Station", "Car Wash", "Liquor Shop"],
  },
  {
    name: "Global Market #3",
    address: "124 E Redbud Ln, Florence, SC 29505, USA",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=124%20E%20Redbud%20Ln%2C%20Florence%2C%20SC%2029505%2C%20USA",
    services: ["Convenience Store", "Gas Station", "Car Wash", "Liquor Shop"],
  },
];

const testimonials = [
  {
    name: "Elwin Dawson",
    text: "Always impressed with the results. My car gets a thorough clean without the worry of paint damage. Quick service and very convenient.",
  },
  {
    name: "Poral Dawson",
    text: "I shop here almost every week. They always have fresh produce and household items. Clean, well-lit, and easy to navigate.",
  },
  {
    name: "Cori Anderson",
    text: "First time visiting and I was impressed. Wide variety of drinks for every taste and budget, and the staff helped me choose quickly.",
  },
];

function App() {
  const currentPath = window.location.pathname.toLowerCase();
  const isAboutPage = currentPath.includes("/about");
  const isContactPage = currentPath.includes("/contact");
  const isEmploymentApplicationPage = currentPath.includes("/form");
  const isServicePage = currentPath.includes("/service");

  if (isAboutPage) {
    return (
      <main>
        <Nav />
        <AboutPage />
        <Footer />
        <a className="scroll-top" href="#top" aria-label="Back to top">
          <ChevronUp size={24} />
        </a>
      </main>
    );
  }

  if (isServicePage) {
    return (
      <main>
        <Nav />
        <ServicePage />
        <Footer />
        <a className="scroll-top" href="#top" aria-label="Back to top">
          <ChevronUp size={24} />
        </a>
      </main>
    );
  }

  if (isContactPage) {
    return (
      <main>
        <Nav />
        <ContactPage />
        <Footer />
        <a className="scroll-top" href="#top" aria-label="Back to top">
          <ChevronUp size={24} />
        </a>
      </main>
    );
  }

  if (isEmploymentApplicationPage) {
    return (
      <main>
        <Nav />
        <EmploymentApplicationPage />
        <Footer />
        <a className="scroll-top" href="#top" aria-label="Back to top">
          <ChevronUp size={24} />
        </a>
      </main>
    );
  }

  return (
    <main>
      <Nav />
      <Hero />
      <OfferSection />
      <About />
      <Services />
      <Locations />
      <Testimonials />
      <Gallery />
      <ShopStrip />
      <WhyChoose />
      <VideoCta />
      <Footer />
      <a className="scroll-top" href="#home" aria-label="Back to top">
        <ChevronUp size={24} />
      </a>
    </main>
  );
}

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    ["Home", "/"],
    ["About", "/About"],
    ["Service", "/Service"],
    ["Contact", "/Contact"],
    // ["Employment Application", "/Form"],
  ];

  return (
    <header className="nav-shell">
      <a className="brand" href="/" aria-label="Global Market home">
        <Logo />
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="nav-action" href="/#locations">
        Find a Store <ArrowRight size={16} />
      </a>
      <button
        className="menu-button"
        type="button"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <Menu size={22} />
      </button>
      <nav
        className={`mobile-nav ${isMenuOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
      >
        {navItems.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setIsMenuOpen(false)}>
            {label}
          </a>
        ))}
        <a href="/#locations" onClick={() => setIsMenuOpen(false)}>
          Find a Store <ArrowRight size={16} />
        </a>
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <span className="logo-lockup">
      <img src={image.logo} alt="Global Market" />
    </span>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-media" />
      <div className="hero-shade" />
      <div className="hero-content">
        <div className="hero-copy">
          <span className="eyebrow light">
            <Sparkles size={16} /> Neighborhood convenience, upgraded
          </span>
          <h1>Your everyday stop for fuel, food, and convenience.</h1>
          <p>
            Global Market brings together a convenience store, gas station,
            soft-touch car wash, party shop, deli counter, ATM, and essentials
            in one clean and easy stop.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#services">
              Explore Services <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href="#locations">
              View Locations
            </a>
          </div>
        </div>
        <div className="hero-card">
          <div>
            <span>Open daily</span>
            <strong>24/7</strong>
          </div>
          <p>Fuel, snacks, drinks, deli bites, and quick-stop essentials.</p>
          <div className="hero-card-grid">
            <span>Gas</span>
            <span>Store</span>
            <span>Car Wash</span>
            <span>Party Shop</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section className="offer-section" aria-label="Global Market offers">
      <div className="offer-grid">
        <article className="offer-card offer-card-compact">
          <span className="offer-tag">
            <CreditCard size={18} /> Debit Card Offer
          </span>
          <strong className="offer-value">5¢</strong>
          <h2>Save up to 5¢ per gallon.</h2>
          <p>Enroll your debit card and save every time you fuel up.</p>
          <a href="https://www.dkcards.com/debit" target="_blank" rel="noreferrer">
            Enroll your card today <ArrowRight size={18} />
          </a>
        </article>

        <article className="offer-card offer-card-compact">
          <span className="offer-tag">
            <Store size={18} /> Store Discount
          </span>
          <strong className="offer-value">2%</strong>
          <h2>Discount on in-store purchases.</h2>
          <p>Use your enrolled debit card and enjoy savings inside the store.</p>
        </article>

        <article className="offer-card offer-card-wide">
          <div>
            <span className="offer-tag">
              <Car size={18} /> Car Wash Offer
            </span>
            <h2>
              Get <strong>25¢ off</strong>
            </h2>
            <p>Pair your car wash visit with your fill-up for extra savings.</p>
            <p>Please bundle your service at the time of the car wash, not during fuel payment.</p>
          </div>
          <div className="offer-badge" aria-hidden="true">
            <b>25¢</b>
            <span>off fuel</span>
            <small>up to 20 Gallons</small>
          </div>
        </article>

        <article className="offer-card breakfast-offer">
          <div className="breakfast-copy">
            <span className="offer-tag breakfast-tag">
              <Beef size={18} /> Our Southern Breakfast
            </span>
            <h2>
              Hot Southern breakfast, <strong>served fresh.</strong>
            </h2>
            <p>
              Start your morning with grits, scrambled eggs, sausages, shrimp
              and grits, salmon, bacon, and more comfort favorites.
            </p>
          </div>
          <div className="breakfast-menu" aria-label="Southern breakfast menu">
            {[
              "Grits",
              "Scrambled Eggs",
              "Sausages",
              "Shrimp & Grits",
              "Salmon",
              "Bacon",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-kicker">Visit Us</div>
      <h2>
        We started <span>Global Market</span> for you.
      </h2>
      <div className="about-grid">
        <div className="about-image-wrap">
          <img src={image.storefront} alt="Global Market storefront" />
        </div>
        <div className="about-copy">
          <span className="eyebrow">Explore Features</span>
          <h3>Everything you need in one convenient location.</h3>
          <p>
            Global Market is a full-service destination for everyday needs.
            Inside, you will find beverages, snacks, groceries, household
            essentials, deli favorites, lottery services, and ATM access.
          </p>
          <div className="facility-grid">
            <div>
              <h4>Our Facility</h4>
              {facilities.map((facility) => (
                <p key={facility}>
                  <Check size={18} /> {facility}
                </p>
              ))}
            </div>
            <div className="metric-stack">
              <Metric icon={BadgeCheck} value="100%" label="Our Quality" />
              <Metric icon={ShoppingBasket} value="866+" label="Happy Clients" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ icon: Icon, value, label }) {
  return (
    <article className="metric">
      <Icon size={34} />
      <div>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </article>
  );
}

function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="section-kicker">Explore Services</div>
      <h2>
        We offer the best service in <span>Global Market</span>
      </h2>
      <div className="service-grid">
        {services.map(({ title, icon: Icon, image: serviceImage, body }) => (
          <article className="service-card" key={title}>
            <img src={serviceImage} alt="" />
            <div className="service-icon">
              <Icon size={30} />
            </div>
            <div className="service-body">
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Locations() {
  return (
    <section id="locations" className="section locations-section">
      <div className="section-kicker">Our Location Of</div>
      <h2>Global Market</h2>
      <div className="location-grid">
        {locations.map((location) => (
          <article className="location-card" key={location.name}>
            <a
              className="location-image-link"
              href={location.mapsUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${location.name} in Google Maps`}
            >
              <img src={image.storefront} alt="" />
              <span>
                <MapPin size={34} fill="currentColor" />
              </span>
            </a>
            <div>
              <h3>{location.name}</h3>
              <p className="address">
                <MapPin size={18} /> {location.address}
              </p>
              <strong>Services Available</strong>
              <ul>
                {location.services.map((service) => (
                  <li key={service}>
                    <Check size={16} /> {service}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section testimonial-section">
      <div className="section-kicker">Our Testimonial</div>
      <h2>What our clients say</h2>
      <div className="testimonial-panel">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <Quote size={36} />
            <div className="stars" aria-label="5 stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={22} fill="currentColor" />
              ))}
            </div>
            <p>{testimonial.text}</p>
            <h3>{testimonial.name}</h3>
            <span>Client</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  const galleryImages = [image.storefront, image.store, image.deli, image.carwash, image.shelves];
  const [activeSlide, setActiveSlide] = useState(0);
  const orderedImages = [
    ...galleryImages.slice(activeSlide),
    ...galleryImages.slice(0, activeSlide),
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % galleryImages.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [galleryImages.length]);

  return (
    <section className="gallery-section" aria-label="Global Market gallery">
      <div className="gallery-track" key={activeSlide}>
        {orderedImages.map((galleryImage, index) => (
          <img src={galleryImage} alt="" key={index} />
        ))}
      </div>
      <div className="gallery-dots">
        {galleryImages.map((_, index) => (
          <button
            aria-label={`Show gallery slide ${index + 1}`}
            className={activeSlide === index ? "active" : ""}
            key={index}
            type="button"
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}

function ShopStrip() {
  return (
    <section className="section shop-strip">
      <div className="section-kicker">Our</div>
      <h2>Shop</h2>
      <div className="shop-banner">
        <div className="shop-logo primary-shop-logo">
          <Logo />
        </div>
        <div className="shop-logo party-shop-logo" aria-label="Global Party Shop">
          <span className="party-emblem">
            <Gift size={42} />
          </span>
          <div>
            <strong>Global</strong>
            <b>Party Shop</b>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section id="application" className="why-section">
      <div className="why-copy">
        <span className="eyebrow">Why Choose Us</span>
        <h2>A right choice that makes us different from others.</h2>
        <Feature icon={Check} title="Best Quality Services">
          Top-notch service with a focus on cleanliness, convenience, and a
          smooth visit every time.
        </Feature>
        <Feature icon={Fuel} title="Standards of Fuel">
          Dependable fuel service designed for quick visits, clear access, and
          consistent quality.
        </Feature>
        <Feature icon={Beef} title="Standards of Food">
          Fresh deli items including crispy fries, fried chicken, and other
          quick bites prepared with care.
        </Feature>
      </div>
      <div className="why-media">
        <img src={image.pumps} alt="" />
        <div className="floating-stat one">
          <ShoppingBasket size={38} />
          <AnimatedNumber value={50} suffix="+" />
          <span>Products</span>
        </div>
        <div className="floating-stat two">
          <Clock3 size={38} />
          <AnimatedNumber value={24} suffix="*7" />
          <span>Fuel Service</span>
        </div>
        <div className="floating-stat four">
          <Star size={38} />
          <AnimatedNumber value={20} suffix="+" />
          <span>Years Experience</span>
        </div>
        <div className="floating-stat three">
          <BadgeCheck size={38} />
          <AnimatedNumber value={100} suffix="%" />
          <span>Pure Quality</span>
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({ value, suffix = "" }) {
  const numberRef = useRef(null);
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const numberElement = numberRef.current;

    if (!numberElement) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setHasStarted(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -15% 0px",
        threshold: 0.35,
      },
    );

    observer.observe(numberElement);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) {
      return undefined;
    }

    const duration = 1300;
    const startedAt = performance.now();
    let frameId;

    setCount(0);

    const update = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(update);
      }
    };

    frameId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(frameId);
  }, [hasStarted, value]);

  return (
    <strong ref={numberRef}>
      {count}
      {suffix}
    </strong>
  );
}

function Feature({ icon: Icon, title, children }) {
  return (
    <article className="feature">
      <div>
        <Icon size={24} />
      </div>
      <span>
        <h3>{title}</h3>
        <p>{children}</p>
      </span>
    </article>
  );
}

function VideoCta() {
  return (
    <section className="video-cta">
      <video
        src="/gb_video_18.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-label="Global Market video"
      />
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-brand-block">
        <Logo />
        <p>
          <strong>Address:</strong> 124 E Redbud Ln, Florence, SC 29505, USA
        </p>
        <p>
          <strong>Call Us:</strong> +1 (843) 407-5014
        </p>
        <div className="social-links" aria-label="Social links">
          <a href="#home" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#home" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="#home" aria-label="YouTube">
            <Youtube size={20} />
          </a>
          <a href="#home" aria-label="Phone">
            <Phone size={20} />
          </a>
        </div>
      </div>
      <div>
        <h3>Our Service</h3>
        {facilities.map((facility) => (
          <a href="#services" key={facility}>
            {facility}
          </a>
        ))}
      </div>
      <div>
        <h3>Our Location</h3>
        <div className="map-card">
          <MapPin size={34} />
          <span>124 E Redbud Ln</span>
          <strong>Florence, SC</strong>
          <a href={mapsUrl} target="_blank" rel="noreferrer">
            Open in Google Maps <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(<App />);
