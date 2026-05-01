import React from "react";
import { ArrowRight, Plus } from "lucide-react";

const applicantFields = [
  ["Full Name:", "text"],
  ["Date of Birth:", "date"],
  ["Mobile Number:", "tel"],
  ["Email Address:", "email"],
  ["Social Security Number (SSN):", "text"],
  ["Current Address:", "text"],
  ["City:", "text"],
  ["State:", "text"],
  ["Zip Code:", "text"],
];

const educationFields = [
  ["High School Name:", "text"],
  ["College/University Name:", "text"],
  ["Degree Name:", "text"],
];

const employmentFields = [
  ["Employer Name:", "text"],
  ["Position Held:", "text"],
  ["Reason for Leaving:", "text"],
];

const referenceFields = ["Name:", "Relation:", "Mobile Number:", "Email Address:"];

export default function EmploymentApplicationPage() {
  return (
    <>
      <section id="top" className="page-hero application-page-hero">
        <div className="page-hero-shade" />
        <div className="page-hero-content">
          <span className="eyebrow light">Join Global Market</span>
          <h1>Employment Application</h1>
          <p>
            You are currently here <ArrowRight size={16} /> <a href="/">Home</a>{" "}
            <ArrowRight size={16} /> Employment Application
          </p>
        </div>
      </section>

      <section className="application-shell">
        <form
          className="application-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <h2>Employment Application</h2>

          <ApplicationSection title="Applicant Information">
            {applicantFields.map(([label, type]) => (
              <Field key={label} label={label} type={type} />
            ))}
            <RadioGroup label="Are you legally eligible to work in the U.S.?" name="eligible" />
            <RadioGroup label="Have you ever been convicted of a felony?" name="felony" />
          </ApplicationSection>

          <ApplicationSection title="Education Details">
            <Field label="High School Name:" />
            <RadioGroup label="Did You Graduate From High School?" name="high-school" />
            {educationFields.slice(1).map(([label, type]) => (
              <Field key={label} label={label} type={type} />
            ))}
            <RadioGroup label="Did You Graduate?" name="college" />
          </ApplicationSection>

          <ApplicationSection title="Position & Availability">
            <label className="application-field">
              <span>Position Applying For:</span>
              <select defaultValue="Convenience Store Clerk">
                <option>Convenience Store Clerk</option>
                <option>Gas Station Attendant</option>
                <option>Deli Associate</option>
                <option>Car Wash Attendant</option>
                <option>Party Shop Associate</option>
              </select>
            </label>
            <label className="application-field">
              <span>Employment Preference:</span>
              <select defaultValue="Full Time">
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Seasonal</option>
              </select>
            </label>
            <CheckboxGroup
              label="Days Available:"
              options={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]}
            />
            <CheckboxGroup
              label="Shifts Preferred:"
              options={["Morning", "Afternoon", "Evening", "Overnight"]}
            />
            <Field label="Available Start Date:" type="date" />
          </ApplicationSection>

          <ApplicationSection title="Employment History">
            <p className="application-note">
              <strong>Note:</strong> Fill details of your most recent job first.
            </p>
            <h3>Employment Details</h3>
            {employmentFields.slice(0, 2).map(([label, type]) => (
              <Field key={label} label={label} type={type} />
            ))}
            <div className="application-two-column">
              <Field label="Employment Dates (From - To):" type="date" />
              <Field label=" " type="date" />
            </div>
            <Field label="Reason for Leaving:" />
            <button className="add-employment-button" type="button">
              <Plus size={20} /> Add Employment
            </button>
          </ApplicationSection>

          <ApplicationSection title="References">
            <div className="reference-grid">
              {[1, 2].map((reference) => (
                <div className="reference-card" key={reference}>
                  <h3>Reference {reference}</h3>
                  {referenceFields.map((label) => (
                    <Field key={label} label={label} />
                  ))}
                </div>
              ))}
            </div>
          </ApplicationSection>

          <ApplicationSection title="Attached Resume">
            <Field label="Upload Resume (If You Want To):" type="file" />
          </ApplicationSection>

          <ApplicationSection title="Applicant Statement & Signature">
            <p className="statement-box">
              I certify that the information provided in this application is
              true and complete. I understand that any false or misleading
              information may result in my disqualification from employment or
              termination if hired. I authorize <strong>Global Market</strong> to
              verify my employment and educational background and to contact my
              references. I understand that employment is at-will and that{" "}
              <strong>Global Market</strong> may terminate my employment at any
              time for any reason.
            </p>
            <Field label="Upload Signature:" type="file" />
            <p className="application-date">Date: 30th April 2026</p>
            <button className="submit-application-button" type="submit">
              Submit Application
            </button>
          </ApplicationSection>
        </form>
      </section>
    </>
  );
}

function ApplicationSection({ title, children }) {
  return (
    <fieldset className="application-section">
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
}

function Field({ label, type = "text" }) {
  return (
    <label className="application-field">
      <span>{label}</span>
      <input type={type} />
    </label>
  );
}

function RadioGroup({ label, name }) {
  return (
    <div className="application-choice-group">
      <span>{label}</span>
      <label>
        <input name={name} type="radio" /> Yes
      </label>
      <label>
        <input name={name} type="radio" /> No
      </label>
    </div>
  );
}

function CheckboxGroup({ label, options }) {
  return (
    <div className="application-choice-group">
      <span>{label}</span>
      {options.map((option) => (
        <label key={option}>
          <input type="checkbox" /> {option}
        </label>
      ))}
    </div>
  );
}
