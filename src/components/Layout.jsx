import React from 'react';

export function TopBar() {
  return (
    <div className="top-bar">
      <span>infos@gfm3.org</span>
      <span>+225 27 22 52 20 65</span>
      <a href="https://www.facebook.com/profile.php?id=61553383325865">Facebook</a>
    </div>
  );
}

export function Header({ t, lang, setLang, route }) {
  return (
    <header className="site-header">
      <a className="brand" href="#/home" aria-label="GFM3 home">
        <img src="/assets/img/logo/favicon-96x96.png" alt="" />
        <span>GFM3</span>
      </a>
      <nav aria-label="Main navigation">
        {t.nav.map(([path, label]) => (
          <a className={route.startsWith(path) ? 'active' : ''} href={`#/${path}`} key={path}>{label}</a>
        ))}
      </nav>
      <div className="header-actions">
        <button className="language-toggle" type="button" onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}>
          {t.switchTo}
        </button>
        <a className="donate-button" href="#/donate">{t.donate}</a>
      </div>
    </header>
  );
}

export function Footer({ t }) {
  return (
    <footer className="footer">
      <div>
        <img src="/assets/img/logo/favicon-96x96.png" alt="" />
        <p>{t.common.footerBlurb}</p>
      </div>
      <div>
        <h2>{t.common.footerAbout}</h2>
        <div className="footer-links">
          <a href="#/projects">{t.projectsTitle}</a>
          <a href="#/news">{t.newsTitle}</a>
          <a href="#/cecaref">CECAREF</a>
          <a href="#/contact">{t.contactTitle}</a>
        </div>
      </div>
      <div>
        <h2>{t.common.contactInfo}</h2>
        <p><strong>{t.common.address}</strong> Cocody, 7ème Tranche, Rue L169</p>
        <p><strong>Email:</strong> infos@gfm3.org</p>
        <p><strong>{t.common.phone}</strong> +2252722522065</p>
      </div>
      <p className="footer-copy">
        {t.footer} Created by{' '}
        <a href="https://www.cerebrumlux.com" target="_blank" rel="noreferrer">
          Cerebrum Lux
        </a>
      </p>
    </footer>
  );
}
