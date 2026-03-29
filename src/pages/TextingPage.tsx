import { useEffect } from "react";
import { Link } from "react-router-dom";
import { TEXT_TO_GIVE_INSTRUCTIONS_URL } from "../config/constants";

export function TextingPage() {
  useEffect(() => {
    document.title = "Texting Policy | St. Dionysios Greek Orthodox Christian Church";
    return () => {
      document.title = "St. Dionysios Greek Orthodox Christian Church | Overland Park, KS";
    };
  }, []);

  return (
    <>
      <section className="section section-alt texting-page-hero" aria-labelledby="texting-title">
        <div className="section-inner">
          <p className="clergy-back">
            <Link to="/giving">← Back to giving</Link>
          </p>
          <h1 id="texting-title" className="section-title texting-page-title">
            Texting policy
          </h1>
        </div>
      </section>

      <section className="section texting-page-body">
        <div className="section-inner texting-page-inner">
          <h2 className="texting-section-heading">Welcome to our text messaging service!</h2>

          <div className="texting-prose">
            <p>
              To stay connected and receive important communications from{" "}
              <strong>St. Dionysios Greek Orthodox Church</strong>, reply with the word
              &lsquo;START&rsquo; to{" "}
              <a href="sms:+18884229724">
                1-888-422-<strong>9724</strong>
              </a>
              .
            </p>
            <p>
              By opting in, you agree to receive text messages, possibly including event
              notifications, welcome messages, and important updates at the phone number provided.
            </p>
            <p>Message and data rates may apply.</p>
            <p>
              You can unsubscribe at any time by replying &lsquo;STOP&rsquo;. If you need
              assistance, reply &lsquo;HELP&rsquo;.
            </p>
            <p>
              Stay connected with us and receive important communications right to your phone!
              Reply &lsquo;START&rsquo; now to opt-in.
            </p>

            <h2 className="texting-privacy-title">Text messaging service privacy policy</h2>
            <p>
              We are committed to respecting the privacy and security of our members&rsquo; personal
              information. This Privacy Policy is designed to provide transparency regarding the
              collection, use, and sharing of information within our texting membership.
            </p>

            <h3 className="texting-subheading">Information we collect</h3>
            <p>
              We collect basic contact details and any preferences you choose to share to facilitate
              effective communication within our texting membership.
            </p>

            <h3 className="texting-subheading">How we use your information</h3>
            <p>
              The primary purpose of collecting member information is to enhance engagement, provide
              relevant updates, and foster a sense of community within our organization.
            </p>

            <h3 className="texting-subheading">Sharing your information</h3>
            <p>
              We do not share or sell your information for marketing or any other purposes outside of
              our app; it will be kept private.
            </p>

            <h3 className="texting-subheading">Security</h3>
            <p>
              We employ industry-standard security measures, including encryption, to protect member
              information from unauthorized access, disclosure, alteration, or destruction.
            </p>

            <hr className="texting-rule" />

            <h2 className="texting-instructions-heading">
              <a href={TEXT_TO_GIVE_INSTRUCTIONS_URL} target="_blank" rel="noreferrer">
                Instructions for Text To Give
              </a>
              .
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
