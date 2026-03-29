import { useEffect, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FACEBOOK_URL, PARISH_YOUTUBE_LIVE_URL } from "../config/constants";

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    document.title = "St. Dionysios Greek Orthodox Christian Church | Overland Park, KS";
  }, []);

  useLayoutEffect(() => {
    const id = location.hash.replace(/^#/, "");
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero-inner">
          <p className="hero-kicker">Glory to Jesus Christ!</p>
          <h1 id="hero-title" className="hero-title">
            Welcome to St. Dionysios
          </h1>
          <p className="hero-sub">
            Please join us for worship to share the light of the Orthodox Christian faith in Overland Park.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#services">
              Our services
            </a>
            <a
              className="btn btn-outline"
              href={PARISH_YOUTUBE_LIVE_URL}
              target="_blank"
              rel="noreferrer"
            >
              Live stream
            </a>
          </div>
        </div>
      </section>

      <section id="welcome" className="section section-alt">
        <div className="section-inner two-col">
          <div className="section-intro">
            <h2 className="section-title">Welcome to our parish</h2>
            <p className="section-lead">
              <strong>Glory to Jesus Christ!</strong> Welcome to the website of St. Dionysios Greek
              Orthodox Christian Church. We are located in Overland Park, Kansas, and are part of
              the{" "}
              <a href="https://www.goarch.org/" target="_blank" rel="noreferrer">
                Greek Orthodox Archdiocese of America
              </a>
              , in the{" "}
              <a href="https://www.denver.goarch.org/" target="_blank" rel="noreferrer">
                Metropolis of Denver
              </a>
              .
            </p>
            <p className="section-lead">
              Please join us below for a live stream of services when available, and explore divine
              service times and ways to connect with our community.
            </p>
          </div>
          <div>
            <div className="card">
              <h3>Watch the divine services</h3>
              <p>
                When services are streaming, follow along on our parish YouTube channel. For parish
                news and community, visit us on Facebook.
              </p>
              <div className="card-cta">
                <div className="card-cta-group">
                  <a
                    className="btn btn-primary btn-with-icon"
                    href={PARISH_YOUTUBE_LIVE_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="btn-youtube-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        fill="currentColor"
                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                      />
                    </svg>
                    Watch on YouTube
                  </a>
                  <a
                    className="btn btn-primary btn-with-icon"
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="btn-facebook-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        fill="currentColor"
                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                      />
                    </svg>
                    St. Dionysios on Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-inner">
          <h2 className="section-title">Divine service schedule</h2>
          <p className="section-lead">
            Regular weekly services at St. Dionysios. For feast days and seasonal changes, see the
            events below or our parish calendar.
          </p>
          <div className="two-col">
            <div className="schedule-block">
              <h3>Sundays</h3>
              <ul>
                <li>Orthros (Matins): 9:00 AM</li>
                <li>Divine Liturgy: 10:00 AM</li>
              </ul>
            </div>
            <div className="schedule-block">
              <h3>Saturdays</h3>
              <ul>
                <li>Great Vespers: 5:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="section section-alt">
        <div className="section-inner">
          <h2 className="section-title">Upcoming events</h2>
          <p className="section-lead">
            Highlights from parish life. For service times, feast days, and parish activities, see the{" "}
            <Link to="/calendar">full calendar</Link>.
          </p>
          <ul className="events-list">
            <li>
              <span className="event-name">Cooking session — Baklava</span>
              <span className="event-meta">Sat · 10:00 AM</span>
            </li>
            <li>
              <span className="event-name">Great Vespers</span>
              <span className="event-meta">Sat · 5:00 PM</span>
            </li>
            <li>
              <span className="event-name">Pan-Orthodox Great Vespers at St. Mary of Egypt</span>
              <span className="event-meta">Sun</span>
            </li>
            <li>
              <span className="event-name">Orthros — early start</span>
              <span className="event-meta">Sun · 8:30 AM</span>
            </li>
            <li>
              <span className="event-name">Divine Liturgy — early start</span>
              <span className="event-meta">Sun · 9:30 AM</span>
            </li>
            <li>
              <span className="event-name">Annunciation / Greek Independence Day celebration</span>
              <span className="event-meta">Sun · 11:00 AM</span>
            </li>
            <li>
              <span className="event-name">Church directory photos</span>
              <span className="event-meta">Sun · 11:30 AM</span>
            </li>
            <li>
              <span className="event-name">9th Hour</span>
              <span className="event-meta">Weekday · 5:30 PM</span>
            </li>
          </ul>
          <p className="events-calendar-cta">
            <Link to="/calendar">See the Calendar</Link>
          </p>
        </div>
      </section>

      <section id="faith" className="section">
        <div className="section-inner">
          <div className="section-intro">
            <h2 className="section-title">New to Orthodoxy?</h2>
            <p className="section-lead">
              As many of our members have found, the Orthodox Church offers a warm, ancient path of
              worship and community. Visitors who are unfamiliar with Orthodox services are always
              welcome; we invite you to introduce yourself to our clergy or parish council after
              Liturgy.
            </p>
            <p className="section-lead">
              Learn more about the faith, worship, and history of the Church through the resources
              offered by the Greek Orthodox Archdiocese, including introductions to the Divine
              Liturgy, sacraments, and spirituality.
            </p>
            <p>
              <a
                className="btn btn-primary"
                href="https://www.goarch.org"
                target="_blank"
                rel="noreferrer"
              >
                Explore our faith
              </a>
            </p>
          </div>
        </div>
      </section>

      <section id="join" className="section section-alt">
        <div className="section-inner">
          <h2 className="section-title">Join us</h2>
          <p className="section-lead">
            We would love to see you at Orthros, Vespers, or Divine Liturgy. For questions about
            baptisms, weddings, or pastoral care, please contact the church office.
          </p>
        </div>
      </section>
    </>
  );
}
