export function SiteFooter() {
  return (
    <footer id="site-footer" className="site-footer">
      <p>
        <strong>St. Dionysios Greek Orthodox Christian Church</strong>
      </p>
      <p>
        8100 West 95th Street
        <br />
        Overland Park, KS 66212
      </p>
      <p>
        Phone: <a href="tel:+19133417373">(913) 341-7373</a>
        {" · "}
        <a href="mailto:father@stdionysios.org">Email the parish</a>
      </p>
      <p className="footer-attribution">
        Powered by the spirit of service in the Greek Orthodox Archdiocese of America; content reflects{" "}
        <a href="https://stdionysios.org" target="_blank" rel="noreferrer">
          stdionysios.org
        </a>
        .
      </p>
    </footer>
  );
}
