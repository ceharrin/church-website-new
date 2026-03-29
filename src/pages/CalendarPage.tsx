import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PARISH_CALENDAR_EMBED_URL,
  PARISH_CALENDAR_ICAL_URL,
  PARISH_CALENDAR_OUTLOOK_WEB_URL,
  PARISH_CALENDAR_SUBSCRIBE_URL,
  PARISH_CALENDAR_WEBCAL_URL,
} from "../config/constants";

export function CalendarPage() {
  useEffect(() => {
    document.title = "Calendar | St. Dionysios Greek Orthodox Christian Church";
    return () => {
      document.title = "St. Dionysios Greek Orthodox Christian Church | Overland Park, KS";
    };
  }, []);

  return (
    <>
      <section className="section section-alt contact-page-hero" aria-labelledby="calendar-title">
        <div className="section-inner">
          <p className="clergy-back">
            <Link to="/">← Back to home</Link>
          </p>
          <h1 id="calendar-title" className="section-title contact-page-title">
            Parish calendar
          </h1>
        </div>
      </section>

      <section className="section contact-page-body">
        <div className="section-inner">
          <div className="calendar-subscribe-block">
            <p className="calendar-subscribe">
              <a
                className="btn btn-primary"
                href={PARISH_CALENDAR_SUBSCRIBE_URL}
                target="_blank"
                rel="noreferrer"
              >
                Subscribe to our Calendar
              </a>
            </p>
            <div className="calendar-app-links" aria-labelledby="calendar-app-links-title">
              <h2 id="calendar-app-links-title" className="calendar-app-links-title">
                Desktop & other apps
              </h2>
              <ul className="calendar-app-links-list">
                <li>
                  <a href={PARISH_CALENDAR_ICAL_URL} download>
                    Download .ics file
                  </a>
                  <span className="calendar-app-links-desc">
                    Import into Outlook desktop, Thunderbird, or any app that accepts an iCalendar
                    file.
                  </span>
                </li>
                <li>
                  <a href={PARISH_CALENDAR_WEBCAL_URL}>Subscribe with Apple Calendar</a>
                  <span className="calendar-app-links-desc">
                    Uses the webcal format—often opens Calendar on Mac, iPhone, or iPad.
                  </span>
                </li>
                <li>
                  <a
                    href={PARISH_CALENDAR_OUTLOOK_WEB_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Add to Outlook on the web
                  </a>
                  <span className="calendar-app-links-desc">
                    Personal Microsoft account (outlook.com, hotmail.com, live.com).
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="calendar-embed-wrap">
            <iframe title="St. Dionysios parish calendar" src={PARISH_CALENDAR_EMBED_URL} />
          </div>
        </div>
      </section>
    </>
  );
}
