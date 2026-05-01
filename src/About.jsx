import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  Car,
  Check,
  Fuel,
  ShoppingBasket,
  Store,
} from "lucide-react";

const image = {
  storefront:
    "https://globalmarketsc.com//assets/uploads/sliders/1745992421589477.jpg",
};

const aboutFacilities = [
  "Global Market #3 Gas Station",
  "Global Market #3 Store",
  "Global Market #3 Car Wash",
  "Global Party Shop",
];

const aboutText =
  "Global Market is a full-service destination designed to meet all your everyday needs in one convenient location. Inside, you will find a well-stocked Contents Convenience Store offering a wide variety of snacks, beverages, groceries, and household essentials. The location also features the Global Soft Touch Car Wash, providing a gentle yet effective clean for your vehicle. For those planning a celebration or just looking to unwind, the Global Party Shop offers a selection of liquor and beverages. You can also fuel up at the on-site Gas Station, making it easy to fill your tank and grab your essentials all in one stop. Additional amenities include lottery services and an ATM for quick and easy transactions. Inside, there's a deli counter serving up freshly prepared items like crispy fried chicken, hot fries, and other quick bites, perfect for a tasty meal on the go. With friendly service and a wide range of offerings, Global Market is your trusted neighborhood stop for convenience, comfort, and quality.";

export default function AboutPage() {
  return (
    <>
      <section id="top" className="page-hero about-page-hero">
        <div className="page-hero-shade" />
        <div className="page-hero-content">
          <span className="eyebrow light">About Global Market</span>
          <h1>About</h1>
          <p>
            You are currently here <ArrowRight size={16} /> <a href="/">Home</a>{" "}
            <ArrowRight size={16} /> About
          </p>
        </div>
      </section>

      <section className="about-page-section">
        <div className="about-page-grid">
          <div className="about-page-image">
            <img src={image.storefront} alt="Global Market storefront" />
            <div>
              <strong>Full service</strong>
              <span>Convenience, fuel, car wash, deli, and party shop</span>
            </div>
          </div>

          <div className="about-page-copy">
            <span className="section-kicker">Explore Features</span>
            <h2>Global Market</h2>
            <p>{aboutText}</p>

            <div className="about-feature-strip">
              <span>
                <Fuel size={20} /> Gas Station
              </span>
              <span>
                <Store size={20} /> Convenience Store
              </span>
              <span>
                <Car size={20} /> Soft Touch Car Wash
              </span>
            </div>
          </div>
        </div>

        <div className="about-facility-card">
          <div className="about-facility-list">
            <span className="section-kicker">What We Offer</span>
            <h2>Our Facility</h2>
            {aboutFacilities.map((facility) => (
              <p key={facility}>
                <Check size={18} /> {facility}
              </p>
            ))}
          </div>
          <div className="about-stat-grid">
            <AboutMetric icon={BadgeCheck} value="86%" label="Our Production" />
            <AboutMetric
              icon={ShoppingBasket}
              value="866+"
              label="Happy Clients"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function AboutMetric({ icon: Icon, value, label }) {
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
