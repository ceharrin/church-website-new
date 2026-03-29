import { useEffect } from "react";
import { Link } from "react-router-dom";

export function ClergyPage() {
  useEffect(() => {
    document.title = "Clergy | St. Dionysios Greek Orthodox Christian Church";
    return () => {
      document.title = "St. Dionysios Greek Orthodox Christian Church | Overland Park, KS";
    };
  }, []);

  return (
    <>
      <section className="section section-alt clergy-page-hero" aria-labelledby="clergy-title">
        <div className="section-inner">
          <p className="clergy-back">
            <Link to="/">← Back to home</Link>
          </p>
          <h1 id="clergy-title" className="section-title clergy-page-title">
            Parish clergy
          </h1>
        </div>
      </section>

      <section className="section clergy-page-body">
        <div className="section-inner clergy-page-layout">
          <div className="clergy-photo-wrap">
            <img
              className="clergy-photo"
              src={`${import.meta.env.BASE_URL}images/priest.JPG`}
              alt="V. Rev. Archimandrite Philotheos Tomczewski, Proistamenos"
              width={580}
              height={725}
            />
          </div>
          <div className="clergy-details">
            <h2 className="clergy-name">V. Rev. Archimandrite Philotheos Tomczewski</h2>
            <p className="clergy-role">Proistamenos (Presiding Priest)</p>
            <p className="section-lead clergy-intro">
              Our presiding priest serves the spiritual needs of the parish under the omophorion of
              the Metropolis of Denver.
            </p>
            <p className="clergy-contact">
              <a href="mailto:father@stdionysios.org">father@stdionysios.org</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
