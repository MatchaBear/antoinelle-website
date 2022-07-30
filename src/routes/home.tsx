import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="hero">
        <h2 className="intro">
          Bespoke branding and showit website design for wedding pros, interior
          designers, and passionate creatives
        </h2>
        <div className="cta">
          <Link to="/contact" className="cta-button">
            Book Your Discovery Call
          </Link>
        </div>
      </div>
      <img src="/assets/preview.jpeg" alt="preview" className="preview-image" />
    </div>
  );
}
