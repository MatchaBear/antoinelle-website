export default function Contact() {
  return (
    <div>
      <div className="hero">
        <h2 className="intro">Let's book your discovery call</h2>
      </div>

      <iframe
        src="https://docs.google.com/forms/d/e/0FAIpQLSfaNjTKOA6BMZPTt8qFaCAOc-ycwIxuILUZnjauwmXOVyLTbQ/viewform?embedded=true"
        className="iframe-contact-form"
        width={640}
        height={1400}
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
      >
        Loading form…
      </iframe>
    </div>
  );
}
