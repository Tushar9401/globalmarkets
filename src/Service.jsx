import React from "react";
import { ArrowRight, Car, Fuel, Gift, Store } from "lucide-react";

const serviceItems = [
  {
    id: "gas-station",
    title: "Global Market Gas Station",
    icon: Fuel,
    image: "https://globalmarketsc.com//assets/uploads/sliders/1744610324149338.jpg",
    body: "The Gas Station at Global Market offers a convenient and reliable fueling experience for drivers on the go.",
    lead: "The Gas Station at Global Market",
    detail:
      "offers a convenient and reliable fueling experience for drivers on the go. Whether you're commuting to work or heading out on a road trip, you can count on clean, well-maintained pumps and competitive fuel prices. Located right next to the convenience store and deli, it's easy to fill up your tank and grab a quick snack or hot meal all in one stop. With friendly service and easy access, the gas station at Global Market ensures a smooth, hassle-free refueling experience every time.",
  },
  {
    id: "market-store",
    title: "Global Market Store",
    icon: Store,
    image: "https://globalmarketsc.com//assets/uploads/sliders/174461038491570.jpg",
    body: "The Convenience Store at Global Market is your go-to spot for quick, reliable shopping.",
    lead: "The Convenience Store at Global Market",
    detail:
      "is your go-to spot for quick, reliable shopping. Whether you're grabbing a cold drink, snacks for the road, or last-minute household items, the store is fully stocked with a wide selection of essentials to meet your daily needs. From packaged foods and beverages to toiletries and everyday necessities, everything is neatly organized and easy to find. With clean aisles, friendly staff, and extended hours, the store makes it simple and stress-free to get in, get what you need, and get going. It's convenience done right - right when you need it.",
  },
  {
    id: "car-wash",
    title: "Global Soft Touch Car Wash",
    icon: Car,
    image: "https://globalmarketsc.com//assets/uploads/sliders/1744610343436155.jpg",
    body: "Global Soft Touch Car Wash offers a premium car cleaning experience that's fast, gentle, and effective.",
    lead: "Global Soft Touch Car Wash",
    detail:
      "offers a premium car cleaning experience that's fast, gentle, and effective. Designed with state-of-the-art soft-touch technology, it ensures your vehicle gets a thorough wash while protecting its paint and finish. Whether you're looking for a quick rinse or a complete clean, our car wash provides consistent results with minimal wait time. Conveniently located alongside Global Market, it's the perfect stop to keep your car looking its best while you run errands or grab a bite from the deli. Friendly service, quality results, and a spotless shine - that's the Global Soft Touch Car Wash promise.",
  },
  {
    id: "party-shop",
    title: "Global Party Shop",
    icon: Gift,
    image: "https://globalmarketsc.com//assets/uploads/sliders/1744610454928337.jpg",
    body: "Global Party Shop is your go-to destination for a wide selection of liquor, beer, wine, and spirits.",
    lead: "Global Party Shop",
    detail:
      "is your go-to destination for a wide selection of liquor, beer, wine, and spirits to suit every occasion. Whether you're stocking up for a celebration, planning a quiet evening, or just picking up your favorites, our shelves are filled with top brands and popular selections. From craft beers and fine wines to premium whiskies and vodkas, we have something for every taste and budget. Our friendly and knowledgeable staff are always ready to help you find the perfect drink or suggest something new to try. Conveniently located inside Global Market, Global Party Shop makes it easy to grab what you need - quickly and hassle-free.",
  },
];

export default function ServicePage() {
  return (
    <>
      <section id="top" className="page-hero service-page-hero">
        <div className="page-hero-shade" />
        <div className="page-hero-content">
          <span className="eyebrow light">Our Services</span>
          <h1>Service</h1>
          <p>
            You are currently here <ArrowRight size={16} /> <a href="/">Home</a>{" "}
            <ArrowRight size={16} /> Service
          </p>
        </div>
      </section>

      <section className="section services-section service-page-section">
        <div className="section-kicker">Explore Services</div>
        <h2>
          We Offering Best Service in <span>Global Market</span>
        </h2>

        <div className="service-page-grid">
          {serviceItems.map(({ id, title, icon: Icon, image, body }) => (
            <article className="service-page-card" key={title}>
              <img src={image} alt="" />
              <div className="service-page-icon">
                <Icon size={28} />
              </div>
              <div className="service-page-body">
                <h3>{title}</h3>
                <p>{body}</p>
                <a href={`#${id}`}>
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="service-detail-list" aria-label="Service details">
        {serviceItems.map(({ id, title, image, lead, detail }) => (
          <article className="service-detail" id={id} key={id}>
            <img src={image} alt="" />
            <div className="service-detail-copy">
              <span className="section-kicker">Explore Services</span>
              <h2>{title}</h2>
              <p>
                <strong>{lead}</strong> {detail}
              </p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
