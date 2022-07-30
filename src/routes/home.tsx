export default function Home() {
  return (
    <div>
      <h1 className="logo">Antoinelle</h1>
      <div className="hero">
        <h2 className="intro">
          Bespoke branding and showit website design for wedding pros, interior
          designers, and passionate creatives
        </h2>
        <div className="cta">
          <a href="/contact" className="cta-button">
            Book Your Discovery Call
          </a>
        </div>
      </div>
      <img src="/assets/preview.jpeg" alt="preview" className="preview-image" />
    </div>
  );
}
