<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sanket Shah | Technology Lawyer & Data Privacy Advocate, Indore</title>
<meta name="description" content="Technology lawyer specialising in DPDPA, GDPR, SaaS contracts, and AI governance. External general counsel for IT and software companies. Based in Indore, India.">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://advsanketshah.github.io/">
<meta property="og:type" content="website">
<meta property="og:url" content="https://advsanketshah.github.io/">
<meta property="og:title" content="Sanket Shah | Technology Lawyer & Data Privacy Advocate, Indore">
<meta property="og:description" content="Technology lawyer specialising in DPDPA, GDPR, SaaS contracts, and AI governance. External general counsel for IT and software companies. Based in Indore, India.">
<meta property="og:image" content="https://advsanketshah.github.io/sanket-photo.JPG">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Sanket Shah | Technology Lawyer & Data Privacy Advocate, Indore">
<meta name="twitter:description" content="Technology lawyer specialising in DPDPA, GDPR, SaaS contracts, and AI governance. External general counsel for IT and software companies. Based in Indore, India.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@400;500;600;700&display=swap" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@400;500;600;700&display=swap"></noscript>
<style>
  :root {
    --bg-base: #FAFAFC; --bg-surface: #FFFFFF; --text-primary: #0F172A;
    --text-secondary: #475569; --text-tertiary: #94A3B8; --accent-primary: #2563EB;
    --accent-light: #EFF6FF; --border-color: #E2E8F0;
    --font-sans: 'Inter', sans-serif; --font-display: 'Outfit', sans-serif;
    --radius-md: 12px; --radius-lg: 24px; --radius-full: 9999px;
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05); --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    --transition: all 0.3s ease;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background-color: var(--bg-base); color: var(--text-primary); font-family: var(--font-sans); line-height: 1.6; }
  .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }

  /* Hero */
  .hero { padding: 10rem 0 6rem; overflow: hidden; }

  /* Desktop: two-column grid with named areas */
  .hero-inner {
    display: grid;
    grid-template-columns: 1fr 300px;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "intro photo"
      "body  photo";
    column-gap: 4rem;
    row-gap: 0;
    align-items: start;
  }
  .hero-intro { grid-area: intro; }
  .hero-photo-wrap { grid-area: photo; }
  .hero-body { grid-area: body; }

  .hero-eyebrow { display: inline-block; font-size: 0.875rem; font-weight: 600; color: var(--accent-primary); background: var(--accent-light); padding: 0.5rem 1rem; border-radius: var(--radius-full); margin-bottom: 1.5rem; }
  .hero-title { font-family: var(--font-display); font-size: clamp(3rem, 5vw, 4.5rem); font-weight: 700; line-height: 1.1; margin-bottom: 1rem; }
  .hero-subtitle { font-size: 1.125rem; color: var(--text-secondary); font-weight: 500; margin-bottom: 0; }
  .hero-text { font-size: 1.125rem; color: var(--text-secondary); margin-bottom: 1.5rem; max-width: 65ch; }
  .hero-body { padding-top: 2rem; }
  .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem; }
  .btn { display: inline-flex; padding: 0.875rem 1.75rem; border-radius: var(--radius-full); font-weight: 500; text-decoration: none; cursor: pointer; border: none; transition: var(--transition); }
  .btn-primary { background: var(--text-primary); color: white; }
  .btn-secondary { background: var(--bg-surface); color: var(--text-primary); border: 1px solid var(--border-color); }

  .hero-photo-wrap { width: 100%; border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg); }
  .hero-photo-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }

  /* Stats */
  .stats-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 2rem; background: var(--bg-surface); padding: 2.5rem; border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); margin-top: 4rem; }
  .stat-item { text-align: center; }
  .stat-number { display: block; font-family: var(--font-display); font-size: 2.5rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem; line-height: 1; }
  .stat-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-secondary); }

  footer { padding: 3rem 2rem; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); background: var(--bg-surface); margin-top: 4rem; }
  .footer-links { display: flex; gap: 2rem; list-style: none; }
  .footer-links a { color: var(--text-secondary); text-decoration: none; font-size: 0.875rem; }

  /* Mobile hero: stack as intro → photo → body */
  @media (max-width: 900px) {
    .hero { padding: 7rem 0 4rem; }
    .hero-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1.75rem;
    }
    .hero-intro { width: 100%; }
    .hero-photo-wrap {
      max-width: 260px;
      width: 100%;
      aspect-ratio: 3 / 4;
      border-radius: var(--radius-lg);
    }
    .hero-body { width: 100%; padding-top: 0; }
    .hero-text { max-width: 100%; }
    .hero-actions { justify-content: center; }
    .stats-grid { grid-template-columns: repeat(3, 1fr); }
  }

  @media (max-width: 600px) {
    .hero { padding: 6rem 0 3rem; }
    .hero-title { font-size: 2.25rem !important; }
    .hero-subtitle { font-size: 1rem; }
    .hero-text { font-size: 1rem; }
    .hero-actions { flex-direction: column; align-items: stretch; }
    .btn { width: 100%; justify-content: center; text-align: center; }
    .stat-number { font-size: 1.75rem; }
    .stats-grid { padding: 1.5rem 1rem; gap: 1rem; margin-top: 2rem; grid-template-columns: repeat(2, 1fr); }
    .hero-photo-wrap { max-width: 220px; }
  }

  .fade-up { opacity: 0; transform: translateY(20px); transition: all 0.6s ease-out; }
  .fade-up.visible { opacity: 1; transform: translateY(0); }
</style>
<link rel="stylesheet" href="nav.css">
</head>
<body>

<nav>
  <div class="container nav-inner">
    <a href="index.html" class="nav-logo">Adv. Sanket Shah</a>

    <ul class="nav-links">
      <li><a href="value.html">Value</a></li>
      <li class="has-dropdown">
        <button class="dropdown-toggle">Work <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
        <div class="dropdown-menu"><div class="dropdown-menu-inner">
          <a href="portfolio.html">Sample Work</a>
          <a href="cases.html">Cases</a>
        </div></div>
      </li>
      <li class="has-dropdown">
        <button class="dropdown-toggle">Content <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
        <div class="dropdown-menu"><div class="dropdown-menu-inner">
          <a href="books.html">Books</a>
          <a href="privacipher.html">Privacipher</a>
          <a href="resources.html">Resources</a>
        </div></div>
      </li>
      <li class="has-dropdown">
        <button class="dropdown-toggle">About <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
        <div class="dropdown-menu"><div class="dropdown-menu-inner">
          <a href="experience.html">Experience</a>
          <a href="certifications.html">Certifications</a>
          <a href="education.html">Education</a>
        </div></div>
      </li>
      <li><a href="testimonials.html">Testimonials</a></li>
    </ul>

    <div class="nav-right">
      <a href="contact.html" class="nav-cta">Book Consultation</a>
    </div>
  </div>
</nav>

<section class="hero">
  <div class="container fade-up">
    <div class="hero-inner">

      <!-- 1. Name + headline (always top on mobile) -->
      <div class="hero-intro">
        <span class="hero-eyebrow">Advocate &amp; Technology Lawyer, Indore, India</span>
        <h1 class="hero-title">Sanket Shah</h1>
        <p class="hero-subtitle">LL.M., IPR &amp; Technology Law &middot; Gold Medalist &middot; Bar Council of India</p>
      </div>

      <!-- 2. Photo (middle on mobile, right column on desktop) -->
      <div class="hero-photo-wrap">
        <picture>
          <source srcset="sanket-photo.webp" type="image/webp">
          <img src="sanket-photo.jpg" alt="Adv. Sanket Shah" width="597" height="800" loading="eager" decoding="async">
        </picture>
      </div>

      <!-- 3. Description + CTA (always bottom on mobile) -->
      <div class="hero-body">
        <p class="hero-text">
          Technology lawyer based in Indore, working at the intersection of data privacy, AI governance, and commercial contracts. I serve IT and software companies as external general counsel: drafting and negotiating SaaS agreements, MSAs, and vendor contracts with a risk allocation lens, building DPDPA and GDPR compliance frameworks from primary texts, and designing legal workflows that reduce operational friction rather than create it.
        </p>
        <p class="hero-text">
          Four books published. Gold Medalist in Data Privacy from Jindal Global Law School. Jean Monnet EU-ERASMUS+ researcher. Builder of Privacipher, a live 9-jurisdiction compliance platform. If you need legal architecture that works in practice, not just on paper, that is what I do.
        </p>
        <div class="hero-actions">
          <a href="contact.html" class="btn btn-primary">Book Consultation</a>
          <a href="Sanket_Shah_Resume.pdf" class="btn btn-secondary" download>Download CV</a>
        </div>
      </div>

    </div>
  </div>

  <div class="container fade-up">
    <div class="stats-grid">
      <div class="stat-item"><span class="stat-number">4+</span><span class="stat-label">Years in Tech Law</span></div>
      <div class="stat-item"><span class="stat-number">4</span><span class="stat-label">Books Published</span></div>
      <div class="stat-item"><span class="stat-number">12</span><span class="stat-label">Certifications</span></div>
      <div class="stat-item"><span class="stat-number">6.2K+</span><span class="stat-label">LinkedIn Followers</span></div>
      <div class="stat-item"><span class="stat-number">9</span><span class="stat-label">Frameworks Built-In</span></div>
    </div>
  </div>
</section>

<footer>
  <p style="font-size: 0.875rem; color: var(--text-secondary);">© 2026 Adv. Sanket Shah · Advocate, Bar Council of India</p>
  <ul class="footer-links">
    <li><a href="https://linkedin.com/in/advsanketshah" target="_blank">LinkedIn</a></li>
    <li><a href="books.html">Books</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</footer>

<script>
  document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
</script>
<script src="nav.js" defer></script>
<script>if("serviceWorker"in navigator){navigator.serviceWorker.register("/sw.js").catch(function(){});}</script>
</body>
</html>
