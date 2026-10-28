import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const services = [
  { n: "01", icon: "◉", title: "Social Media Management", desc: "Build a consistent brand presence with thoughtful content planning, creative posts, reels, and audience engagement.", tag: "CONTENT & COMMUNITY" },
  { n: "02", icon: "↗", title: "Meta Ads", desc: "Reach the right people on Facebook and Instagram with targeted campaigns, creative testing, and smart optimization.", tag: "PAID SOCIAL" },
  { n: "03", icon: "⌕", title: "Google Ads", desc: "Show up when customers are actively searching for the products and services your business offers.", tag: "SEARCH & DISPLAY" },
  { n: "04", icon: "⌁", title: "Performance Marketing", desc: "Make every campaign more accountable through conversion tracking, analysis, and continuous improvement.", tag: "DATA-LED GROWTH" },
  { n: "05", icon: "◎", title: "Lead Generation", desc: "Turn attention into relevant enquiries with focused campaigns, landing pages, and lead-capture journeys.", tag: "MORE OPPORTUNITIES" },
  { n: "06", icon: "▷", title: "Video Editing", desc: "Transform raw footage into polished reels, promotional videos, ad creatives, and brand stories.", tag: "CREATIVE PRODUCTION" },
  { n: "07", icon: "✳", title: "AI Video Generation", desc: "Explore AI-assisted ads, product visuals, explainers, and fresh creative concepts for your brand.", tag: "AI-POWERED CREATIVE" },
  { n: "08", icon: "✦", title: "Influencer Marketing", desc: "Connect with relevant creators and coordinate campaigns that introduce your brand to aligned audiences.", tag: "CREATOR PARTNERSHIPS" },
  { n: "09", icon: "⌖", title: "Google Business Profile", desc: "Strengthen local visibility with profile optimization, updates, photos, and review-response support.", tag: "LOCAL VISIBILITY" },
  { n: "10", icon: "↗", title: "WhatsApp Marketing", desc: "Support customer communication and follow-ups through consent-based messaging and practical workflows.", tag: "CUSTOMER CONNECTION" }
];

const process = [
  ["01", "Discover", "We learn about your business, audience, services, and objectives."],
  ["02", "Strategize", "We shape a marketing plan around your goals and budget."],
  ["03", "Execute", "We launch campaigns, create content, and put the plan into action."],
  ["04", "Optimize", "We review performance and improve campaigns using available data."],
  ["05", "Report & improve", "We share progress, insights, and recommendations for the next phase."]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState([]);
  const [form, setForm] = useState({name:"", company:"", phone:"", email:"", type:"", budget:"", details:"", privacy:false});
  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((old) => ({ ...old, [name]: type === "checkbox" ? checked : value }));
  };
  const toggleService = (name) => setSelected((old) => old.includes(name) ? old.filter(x => x !== name) : [...old, name]);
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry — ${form.company}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\nBusiness type: ${form.type}\nServices: ${selected.join(", ")}\nMonthly marketing budget: ${form.budget}\nProject details: ${form.details}\n\nSent from the MODUVERSE MEDIA website.`
    );
    const waText = encodeURIComponent(`Hi MODUVERSE MEDIA,\n\nName: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\nBusiness type: ${form.type}\nServices: ${selected.join(", ")}\nMonthly marketing budget: ${form.budget}\nProject details: ${form.details}`);
    window.open(`https://wa.me/916205659924?text=${waText}`, "_blank");
    window.location.href = `mailto:moduversemedia@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <div className="announcement"><span className="pulse"></span> YOUR NEXT CHAPTER OF GROWTH STARTS HERE <span className="announce-arrow">↗</span></div>
      <header className="header">
        <a className="brand" href="#home" aria-label="Moduverse Media home">
          <span className="brand-mark"><span></span><span></span><span></span><span></span></span>
          <span className="brand-type">MODUVERSE<span>MEDIA</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? "✕" : "☰"}</button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About us</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Our process</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <span>↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line"></span> DIGITAL GROWTH, REIMAGINED</div>
            <h1>Make your brand<br/>impossible to <span className="gradient-text">ignore.</span></h1>
            <p className="hero-sub">Turning digital presence into business growth.</p>
            <p className="hero-description">We help businesses grow through strategic digital marketing, performance advertising, engaging content, and AI-powered creative solutions.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">Get a free consultation <span>↗</span></a>
              <a className="btn btn-ghost" href="#services"><span className="play-icon">▶</span> Explore our services</a>
            </div>
            <div className="hero-footnote"><span className="mini-stars">✳</span> Strategy first. Creativity always. Growth by design.</div>
          </div>
          <div className="hero-art" aria-label="Abstract digital growth illustration">
            <div className="art-grid"></div>
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="orbit orbit-three"></div>
            <div className="art-core"><div className="core-symbol">M<span>✳</span></div><div className="core-label">GROWTH ENGINE</div></div>
            <div className="float-card card-top"><span className="float-icon">↗</span><div><small>BUILT FOR</small><strong>Better growth</strong></div></div>
            <div className="float-card card-bottom"><span className="float-icon blue">✦</span><div><small>POWERED BY</small><strong>Creative thinking</strong></div></div>
            <div className="art-caption"><span>01 / 05</span><span>IDEAS INTO IMPACT</span></div>
            <span className="spark spark-a">✳</span><span className="spark spark-b">✦</span><span className="spark spark-c">·</span>
          </div>
        </section>

        <section className="trust-strip">
          <div className="trust-inner"><span>BUILT AROUND YOUR GOALS</span><i></i><span>CREATIVE BY NATURE</span><i></i><span>MEASURED BY PROGRESS</span><i></i><span>READY FOR WHAT’S NEXT</span></div>
        </section>

        <section className="intro section-wrap" id="about">
          <div className="section-kicker">01 — WHO WE ARE</div>
          <div className="intro-grid">
            <h2>Good marketing<br/>does more than <span className="gradient-text">get seen.</span></h2>
            <div className="intro-text"><p>Your business deserves more than just an online presence. It deserves a strategy that attracts the right audience, builds trust, and turns attention into opportunities.</p><p>At MODUVERSE MEDIA, we bring creativity, data, and technology together to help brands find their voice and move forward with purpose.</p><a className="text-link" href="#contact">Let’s build your next chapter <span>↗</span></a></div>
          </div>
          <div className="values-row">
            <div className="value"><span className="value-icon">✳</span><div><strong>Strategy first</strong><p>Every move starts with your business goals.</p></div></div>
            <div className="value"><span className="value-icon">◈</span><div><strong>Creative execution</strong><p>Ideas built to earn attention and trust.</p></div></div>
            <div className="value"><span className="value-icon">⌁</span><div><strong>Data-informed</strong><p>Learn, measure, and keep improving.</p></div></div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-wrap">
            <div className="section-heading">
              <div><div className="section-kicker">02 — WHAT WE DO</div><h2>Everything you need<br/>to <span className="gradient-text">move forward.</span></h2></div>
              <p>Connected digital solutions. One clear direction: helping your business grow.</p>
            </div>
            <div className="service-grid">
              {services.map((s) => <article className="service-card" key={s.n}>
                <div className="service-top"><span className="service-icon">{s.icon}</span><span className="service-number">{s.n}</span></div>
                <div className="service-tag">{s.tag}</div><h3>{s.title}</h3><p>{s.desc}</p>
                <a href="#contact" className="service-link" aria-label={`Enquire about ${s.title}`}>Discuss this service <span>↗</span></a>
              </article>)}
            </div>
          </div>
        </section>

        <section className="approach section-wrap" id="process">
          <div className="approach-head"><div className="section-kicker">03 — HOW WE WORK</div><h2>Clear thinking.<br/><span className="gradient-text">Thoughtful doing.</span></h2><p>Good results come from a process that keeps your goals in focus at every step.</p></div>
          <div className="process-list">{process.map(([n,title,desc]) => <div className="process-item" key={n}><span className="process-num">{n}</span><h3>{title}</h3><p>{desc}</p><span className="process-arrow">↗</span></div>)}</div>
        </section>

        <section className="cta-band section-wrap">
          <div className="cta-glow"></div><div className="section-kicker">YOUR NEXT MOVE</div>
          <h2>Let’s grow something<br/><span className="gradient-text">meaningful.</span></h2>
          <p>Tell us where you want to go. We’ll explore the right digital marketing solutions for your business.</p>
          <a className="btn btn-primary" href="#contact">Discuss your project <span>↗</span></a>
          <span className="cta-star">✳</span>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-info">
            <div className="section-kicker">04 — START A CONVERSATION</div><h2>Have a goal?<br/><span className="gradient-text">Let’s talk.</span></h2>
            <p>Tell us a little about your business and what you want to achieve. We’ll take it from there.</p>
            <div className="contact-method"><span className="contact-method-icon">@</span><div><small>EMAIL US</small><a href="mailto:moduversemedia@gmail.com">moduversemedia@gmail.com</a></div></div>
            <div className="contact-method"><span className="contact-method-icon wa-icon">✆</span><div><small>WHATSAPP US</small><a href="https://wa.me/916205659924" target="_blank" rel="noopener noreferrer">+91 72808 16628</a></div></div>
            <div className="contact-note"><span>✳</span> No pressure. Just a conversation about what’s possible.</div>
          </div>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-heading"><h3>Let’s discuss your project</h3><span>ALL FIELDS MARKED * ARE REQUIRED</span></div>
            <div className="form-grid">
              <label>Full name *<input required name="name" value={form.name} onChange={update} placeholder="Your name"/></label>
              <label>Company / brand *<input required name="company" value={form.company} onChange={update} placeholder="Your business name"/></label>
              <label>Phone number *<input required name="phone" value={form.phone} onChange={update} pattern="[+0-9() -]{7,20}" placeholder="+91 98765 43210"/></label>
              <label>Business email *<input required type="email" name="email" value={form.email} onChange={update} placeholder="you@company.com"/></label>
              <label>Business type *<select required name="type" value={form.type} onChange={update}><option value="">Select business type</option>{["Startup","Local Business","E-commerce","B2B / Professional Services","Real Estate / Construction","Healthcare / Wellness","Education","Personal Brand / Creator","Other"].map(x=><option key={x}>{x}</option>)}</select></label>
              <label>Monthly marketing budget *<select required name="budget" value={form.budget} onChange={update}><option value="">Choose a budget</option>{["Below ₹10,000","₹10,000–₹25,000","₹25,000–₹50,000","₹50,000–₹1,00,000","Above ₹1,00,000","Not decided yet"].map(x=><option key={x}>{x}</option>)}</select></label>
            </div>
            <fieldset className="service-picker"><legend>Services you’re interested in * <span>(select all that apply)</span></legend><div className="checkbox-grid">{services.map(s=><label className="check-option" key={s.title}><input type="checkbox" checked={selected.includes(s.title)} onChange={()=>toggleService(s.title)}/><span>{s.title}</span></label>)}</div>{selected.length===0 && <small className="hint">Choose at least one service.</small>}</fieldset>
            <label className="details-label">Project details <span>(optional)</span><textarea name="details" value={form.details} onChange={update} rows="3" placeholder="Your goals, target audience, website, or campaign details…"/></label>
            <label className="privacy-check"><input type="checkbox" name="privacy" checked={form.privacy} onChange={update} required/><span>I agree that MODUVERSE MEDIA may use my details to respond to this enquiry. Read our <a href="#privacy">Privacy Policy</a>.</span></label>
            <button className="btn btn-primary submit-btn" type="submit" disabled={selected.length===0}>Send enquiry <span>↗</span></button>
            {submitted && <p className="form-feedback">Your email app should open with your enquiry prepared. If it doesn’t, email moduversemedia@gmail.com directly.</p>}
            <p className="form-disclaimer">Submitting this form does not create a client relationship or guarantee project acceptance.</p>
          </form>
        </section>

        <section className="legal section-wrap" id="privacy">
          <details><summary>Privacy policy — starter summary</summary><p>We may collect the details you submit to respond to enquiries, prepare proposals, provide requested services, improve the website, and maintain security. We do not sell personal information. Information may be shared with authorized service providers where needed and retained as reasonably necessary. You may contact <a href="mailto:moduversemedia@gmail.com">moduversemedia@gmail.com</a> to request access, correction, deletion where applicable, or withdrawal of consent. This is a starter summary and should be reviewed for your actual business and applicable law before publication.</p></details>
          <details><summary>Terms & conditions — starter summary</summary><p>Website content is provided for general information and may be updated. Submitting an enquiry does not create a client relationship. Services, deliverables, timelines, fees, and payment terms will be agreed separately in writing. Marketing results depend on budget, market conditions, creative assets, platform policies, and other factors; specific outcomes are not guaranteed unless agreed in writing. Full terms should be reviewed and completed before publication.</p></details>
        </section>
      </main>

      <a className="wa-fab" href="https://wa.me/916205659924?text=Hi%20MODUVERSE%20MEDIA%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        <span>Chat with us</span>
      </a>
      <footer className="footer">
        <div className="footer-main section-wrap">
          <div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark"><span></span><span></span><span></span><span></span></span><span className="brand-type">MODUVERSE<span>MEDIA</span></span></a><p>Turning digital presence into business growth through strategy, creativity, and technology.</p></div>
          <div className="footer-links"><strong>EXPLORE</strong><a href="#about">About us</a><a href="#services">Services</a><a href="#process">Our process</a><a href="#contact">Contact</a></div>
          <div className="footer-links"><strong>LET’S CONNECT</strong><a href="mailto:moduversemedia@gmail.com">Email us ↗</a><a href="#contact">Free consultation ↗</a><a href="#privacy">Privacy & terms</a></div>
        </div>
        <div className="footer-bottom section-wrap"><span>© {new Date().getFullYear()} MODUVERSE MEDIA. All rights reserved.</span><span>MADE FOR WHAT’S NEXT <b>✳</b></span></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
