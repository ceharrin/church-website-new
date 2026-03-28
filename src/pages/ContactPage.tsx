import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NEWSLETTER_URL, PARISH_MAP_EMBED_URL } from "../constants";

export function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us | St. Dionysios Greek Orthodox Christian Church";
    return () => {
      document.title = "St. Dionysios Greek Orthodox Christian Church | Overland Park, KS";
    };
  }, []);

  return (
    <>
      <section className="section section-alt contact-page-hero" aria-labelledby="contact-title">
        <div className="section-inner">
          <p className="clergy-back">
            <Link to="/">← Back to home</Link>
          </p>
          <h1 id="contact-title" className="section-title contact-page-title">
            Contact us
          </h1>
        </div>
      </section>

      <section className="section contact-page-body">
        <div className="section-inner">
          <div className="contact-page-main">
            <p className="section-lead contact-intro">
              We always welcome questions, comments, and suggestions regarding our web site, parish,
              or the Orthodox faith in general. We will make every effort to respond to you within a
              reasonable amount of time, though please be aware that the number of inquiries
              received will affect response time.
            </p>

            <p className="contact-newsletter">
              <strong>Would you like to receive our newsletter?</strong>{" "}
              <a href={NEWSLETTER_URL} target="_blank" rel="noreferrer">
                Click here!
              </a>
            </p>

            <div className="contact-address-block">
              <p className="contact-church-name">St. Dionysios Greek Orthodox Church</p>
              <p>
                8100 West 95th Street
                <br />
                Overland Park, KS 66212
              </p>
              <div className="contact-map-embed" role="region" aria-label="Map of parish location">
                <iframe
                  title="Map: St. Dionysios Greek Orthodox Church, 8100 West 95th Street, Overland Park, Kansas"
                  src={PARISH_MAP_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            <hr className="contact-rule" />

            <p className="contact-office">
              <strong>Office phone:</strong>{" "}
              <a href="tel:+19133417373">(913) 341-7373</a>
            </p>
            <p className="contact-office">
              <strong>Office email:</strong>{" "}
              <a href="mailto:office@stdionysios.org">office@stdionysios.org</a>
            </p>

            <hr className="contact-rule" />

            <p className="contact-priest">
              <strong>V. Rev. Archimandrite Philotheos Tomczewski</strong>, Proistamenos (Presiding
              Priest)
              <br />
              <a href="mailto:father@stdionysios.org">father@stdionysios.org</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
