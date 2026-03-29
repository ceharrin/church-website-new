import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SERVANT_GIVING_DONATE_URL, SERVANT_GIVING_VIDEO_URL } from "../config/constants";

function ServantKeeperWord() {
  return (
    <>
      <strong>SERVANT</strong>KEEPER
    </>
  );
}

export function GivingPage() {
  useEffect(() => {
    document.title = "Giving | St. Dionysios Greek Orthodox Christian Church";
    return () => {
      document.title = "St. Dionysios Greek Orthodox Christian Church | Overland Park, KS";
    };
  }, []);

  return (
    <>
      <section className="section section-alt giving-page-hero" aria-labelledby="giving-title">
        <div className="section-inner">
          <p className="clergy-back">
            <Link to="/">← Back to home</Link>
          </p>
          <h1 id="giving-title" className="section-title giving-page-title">
            Giving
          </h1>
        </div>
      </section>

      <section className="section giving-page-body">
        <div className="section-inner giving-page-inner">
          <div className="giving-cta-row">
            <a className="btn btn-primary" href={SERVANT_GIVING_DONATE_URL} target="_blank" rel="noreferrer">
              Donate now
            </a>
            <span className="giving-cta-or" aria-hidden="true">
              or
            </span>
            <Link className="btn btn-primary" to="/giving/texting">
              Text to give
            </Link>
          </div>

          <div className="giving-prose">
            <p>
              St. Dionysios Parish is pleased to announce that we have partnered with{" "}
              <ServantKeeperWord /> in order to provide you with the convenience of online
              contributions and &lsquo;Text to Give&rsquo; options. <ServantKeeperWord /> has
              designed a secure, web-based platform in which donors may privately and prayerfully
              make one-time or recurring donations. Prayerful consideration of giving to God first
              enables you to witness a powerful sense of stewardship. You can customize your
              individual method of giving, based on choice and preference — whether it be one-time,
              weekly, bi-weekly, monthly, quarterly, or yearly. You may also choose which contributions
              you would like to make electronically — Stewardship, Candles, Flower Fund,
              Christmas/Pascha Card, etc.
            </p>
            <p>
              Here is a{" "}
              <a href={SERVANT_GIVING_VIDEO_URL} target="_blank" rel="noreferrer">
                video
              </a>{" "}
              showing you how to walk through the sign-up process for our new online giving program
              through <ServantKeeperWord />.
            </p>
            <p>
              <ServantKeeperWord /> allows online contributions whereby donors opt to have their
              financial contributions to the church withdrawn directly from their checking or
              savings account, in lieu of bringing cash or paper checks each Sunday. You can also
              use <ServantKeeperWord /> to donate using a credit or debit card. <ServantKeeperWord />{" "}
              allows for the safe transfer of money from your checking account or credit card — no
              loose cash, no forgotten or misplaced checks, no lost mail. <ServantKeeperWord /> is in
              full compliance with internet protocols — no checking or credit card numbers are kept in
              the parish office.
            </p>
            <p>
              Signing up is as simple as going to our parish website{" "}
              <a href="https://stdionysios.org/" target="_blank" rel="noreferrer">
                www.stdionysios.org
              </a>{" "}
              and clicking on the GIVING tab and &ldquo;Donate Now&rdquo; link. You&rsquo;ll register
              an account and within minutes you will be giving your first online donation. If any
              part of this process seems confusing, please contact Holly in the church office at{" "}
              <a href="tel:+19133417373">913-341-7373</a>; and she will assist you in setting up your
              desired pattern of donations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
