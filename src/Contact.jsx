import React, { useState } from "react";
import { ArrowRight, Headphones, Mail, MapPin } from "lucide-react";

const contactDetails = [
  {
    icon: Headphones,
    label: "+1 (843) 407-5014",
  },
  {
    icon: Mail,
    label: "redbudlane124@gmail.com",
  },
  {
    icon: MapPin,
    label: "124 E Redbud Ln, Florence, SC 29505, USA",
  },
];

const contactEmail = "admin@bright-core-solutions.com";
const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!web3FormsAccessKey) {
      setSubmitStatus(
        "Email service needs a Web3Forms access key before this form can send.",
      );
      return;
    }

    setIsSending(true);
    setSubmitStatus("");

    const formData = new FormData(form);
    formData.append("access_key", web3FormsAccessKey);
    formData.append("subject", "New Global Market contact request");
    formData.append("from_name", "Global Market Website");
    formData.append("replyto", formData.get("email"));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const responseText = await response.text();
      let result = {};

      try {
        result = responseText ? JSON.parse(responseText) : {};
      } catch {
        result = {};
      }

      if (!response.ok || result.success === false) {
        throw new Error(result.message || "Unable to send message.");
      }

      form.reset();
      setSubmitStatus("Thank you. Your request has been sent successfully.");
    } catch (error) {
      setSubmitStatus(
        error.message
          ? `Sorry, the message could not be sent right now. ${error.message}`
          : "Sorry, the message could not be sent right now. Please email us directly.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <section id="top" className="page-hero contact-page-hero">
        <div className="page-hero-shade" />
        <div className="page-hero-content">
          <span className="eyebrow light">Contact Global Market</span>
          <h1>Contact</h1>
          <p>
            You are currently here <ArrowRight size={16} /> <a href="/">Home</a>{" "}
            <ArrowRight size={16} /> Contact
          </p>
        </div>
      </section>

      <section className="contact-page-section">
        <form
          className="contact-form"
          onSubmit={handleContactSubmit}
        >
          <input
            aria-label="Name"
            name="name"
            placeholder="Name*"
            required
            type="text"
          />
          <input
            aria-label="Email"
            name="email"
            placeholder="Email*"
            required
            type="email"
          />
          <input
            aria-label="Contact Number"
            name="contact_number"
            placeholder="Contact Number*"
            required
            type="tel"
          />
          <textarea
            aria-label="Your Comment"
            name="comment"
            placeholder="Your Comment"
            rows="6"
          />
          <button disabled={isSending} type="submit">
            {isSending ? "Sending..." : "Send Request"}
          </button>
          {submitStatus && (
            <p className="contact-submit-note">
              {submitStatus}
            </p>
          )}
          <a
            className="contact-mail-fallback"
            href="mailto:admin@bright-core-solutions.com?subject=New%20Global%20Market%20contact%20request"
          >
            Or email admin@bright-core-solutions.com directly
          </a>
        </form>

        <div className="contact-copy">
          <span className="section-kicker">Our Question</span>
          <h2>Get In Touch</h2>
          <p>
            We are committed to providing exceptional customer service and
            support. Reach out to us for any inquiries, and we'll be happy to
            assist you with the best solutions.
          </p>

          <div className="contact-detail-list">
            {contactDetails.map(({ icon: Icon, label }) => (
              <div className="contact-detail" key={label}>
                <span>
                  <Icon size={26} />
                </span>
                <strong>{label}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
