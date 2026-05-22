import React, { useEffect, useMemo, useState } from 'react';
import { PageHero, SectionTitle } from './components/Common.jsx';
import { Footer, Header, TopBar } from './components/Layout.jsx';

const projects = [
  ['impact-4-life', 'IMPACT 4 LIFE', '/assets/img/pr_1.jpg'],
  ['cocoa-life', 'COCOA LIFE', '/assets/img/pr_2.jpeg'],
  ['swedd-genre', 'SWEDD GENRE', '/assets/img/pr_3.jpg'],
  ['pmndpe', 'PMNDPE', '/assets/img/pr_4.jpg'],
  ['padfa', 'PADFA', '/assets/img/proj-6.jpg'],
  ['plfzn', 'PLFZN', '/assets/img/proj-7.jpg'],
  ['mtn', 'MTN', '/assets/img/pr_7.jpg'],
  ['flac', 'FLAC', '/assets/img/proj-8.jpg'],
  ['clef', 'CLEF', '/assets/img/proj-9.jpg'],
  ['chiepo', 'CHIEPO', '/assets/img/proj-10.jpg'],
  ['gfc', 'GFC', '/assets/img/proj-11.jpg'],
  ['swedd-appui-alimentaire', 'SWEDD Appui Alimentaire', '/assets/img/proj-12.jpg'],
  ['promis', 'PROMIS', '/assets/img/proj-13.jpg'],
  ['transition-carbone', 'TRANSITION CARBONE', '/assets/img/proj-14.jpg'],
  ['genre-et-fistules', 'GENRE ET FISTULES', '/assets/img/proj-15.jpg'],
];

const projectEn = {
  'swedd-appui-alimentaire': 'SWEDD Food Support',
  'genre-et-fistules': 'Gender and Fistula',
};

function localizeProject(project, t) {
  const [slug, title, image] = project;
  return { slug, title: t.lang === 'en' && projectEn[slug] ? projectEn[slug] : title, image };
}

const articles = [
  ['actualite-15', 'GFM3 lance officiellement son plan de formation FDFP 2025.', '/assets/img/gfm3_fdfp.jpeg', '15 avril 2026', 'Dans le cadre du renforcement des capacités de son personnel, l’ONG Génération Femme du 3ème Millénaire (GFM3) a procédé ce mercredi 15 avril 2026, au lancement officiel de son plan de formation FDFP agréé au titre de l’année 2025.'],
  ['actualite-14', 'Zouan-Hounien : les filles en première ligne pour une éducation protectrice et sans grossesses précoces.', '/assets/img/pomci.jpg', '11 avril 2026', 'Le samedi 11 avril 2026, la salle de la mairie de Zouan-Hounien a servi de cadre à une importante campagne de mobilisation en faveur de l’éducation des filles, organisée par la coalition POME-CI avec ses organisations membres.'],
  ['actualite-13', 'Yamoussoukro a accueilli la 3ᵉ édition du Sommet des Filles Adolescentes (SFA 2026).', '/assets/img/sfa.jpg', '31 mars au 3 avril 2026', 'Un événement majeur réunissant plus de 300 participantes issues de 25 pays. Francophones, anglophones, hispanophones ...'],
  ['actualite-12', '16 jours d activisme contre les violences basees sur le genre', '/assets/img/16joursactivisme.jpeg', '3 decembre 2025'],
  ['actualite-11', 'Signature de partenariat avec le MENA', '/assets/img/activite11.jpeg', '19 septembre 2025'],
  ['actualite-10', 'Revue semestrielle du programme Cocoa Life', '/assets/img/cocoalife1.jpeg', '28 juillet 2025'],
  ['actualite-9', 'Activites du projet SUCO', '/assets/img/suco1.jpeg', '2025'],
  ['actualite-8', 'Actions FLAC sur le terrain', '/assets/img/flac1.jpeg', '2025'],
  ['actualite-7', 'Sante communautaire et protection', '/assets/img/art10.jpg', '2025'],
  ['actualite-6', 'Protection et education des filles', '/assets/img/art7.jpg', '2025'],
  ['actualite-5', 'Atelier avec les acteurs locaux', '/assets/img/art1.jpg', '2025'],
  ['actualite-4', 'Developpement local et mobilisation communautaire', '/assets/img/actu-4.jpg', '2024'],
  ['actualite-3', 'Renforcement des activites communautaires', '/assets/img/actu-3.jpg', '2024'],
  ['actualite-2', 'Renforcement des capacites', '/assets/img/blog3.jpg', '2024'],
  ['actualite-1', 'Vie associative GFM3', '/assets/img/blog2.jpeg', '09 octobre 2024'],
];

const articleEn = {
  'actualite-15': ['GFM3 officially launches its FDFP 2025 training plan.', 'April 15, 2026', 'As part of strengthening staff capacity, Generation Femme du 3eme Millenaire (GFM3) officially launched its FDFP training plan approved for 2025.'],
  'actualite-14': ['Zouan-Hounien: girls at the forefront of protective education without early pregnancies.', 'April 11, 2026', 'The town hall of Zouan-Hounien hosted an important mobilization campaign for girls education, organized by the POME-CI coalition and its member organizations.'],
  'actualite-13': ['Yamoussoukro hosted the 3rd Adolescent Girls Summit (SFA 2026).', 'March 31 to April 3, 2026', 'A major event bringing together more than 300 participants from 25 countries, including French, English and Spanish-speaking delegations.'],
  'actualite-12': ['16 days of activism against gender-based violence', 'December 3, 2025'],
  'actualite-11': ['Partnership signing with MENA', 'September 19, 2025'],
  'actualite-10': ['Cocoa Life semi-annual program review', 'July 28, 2025'],
  'actualite-9': ['SUCO project activities', '2025'],
  'actualite-8': ['FLAC field actions', '2025'],
  'actualite-7': ['Community health and protection', '2025'],
  'actualite-6': ['Protection and education for girls', '2025'],
  'actualite-5': ['Workshop with local stakeholders', '2025'],
  'actualite-4': ['Local development and community mobilization', '2024'],
  'actualite-3': ['Strengthening community activities', '2024'],
  'actualite-2': ['Capacity building', '2024'],
  'actualite-1': ['GFM3 community life', 'October 9, 2024'],
};

function localizeArticle(article, t) {
  const [slug, title, image, date, excerpt] = article;
  if (t.lang !== 'en' || !articleEn[slug]) return { slug, title, image, date, excerpt };
  const [enTitle, enDate, enExcerpt] = articleEn[slug];
  return { slug, title: enTitle, image, date: enDate || date, excerpt: enExcerpt || excerpt };
}

const content = {
  fr: {
    lang: 'fr',
    switchTo: 'EN',
    nav: [
      ['about', 'A PROPOS'],
      ['projects', 'Projets'],
      ['news', 'ACTUALITÉS'],
      ['cecaref', 'CECAREF'],
      ['collaborate', 'Collaborer'],
      ['contact', 'CONTACTEZ-NOUS'],
    ],
    donate: 'Faire un don',
    readMore: 'Lire plus',
    learnMore: 'Savoir plus',
    back: 'Retour',
    hero: [
      ['3ᵉ Edition du Sommet des Filles Adolescentes 2026 à Yamoussoukro', '', '/assets/img/baniere/sfa.jpg'],
      ['CAMPAGNE DE MOBILISATION ET DE PRESENTATION DES PLAIDOYERS.', '', '/assets/img/baniere/pomci.jpg'],
      ['Une agriculture résiliente face aux changements climatiques', '', '/assets/img/baniere/gfm3_fdfp.jpeg'],
      ['Suivez-Nous', "Plus de 20 ans d'actions en faveur de l'amélioration des conditions de vie des femmes, des jeunes et des enfants en milieu rural et périubain.", '/assets/img/baniere/Banniere.jpeg'],
    ],
    aboutTitle: 'ONG Génération Femme du 3ème Millénaire',
    aboutBody: "La Côte d’ivoire a traversé une crise militaro-politique en 2002 qui a profondément fragilisé les populations, notamment les femmes et les enfants. Après cette crise, un groupe d’amis, dont Madame Honorine VEHI TOURE, a décidé de porter secours aux parents sinistrés dans l’Ouest du pays, qui fut le théâtre de violents combats entre les belligérants.",
    values: ['REDEVABILITE', 'RIGUEUR', 'SOLIDARITE'],
    themeTitle: "NOS DOMAINES D'INTERVENTION",
    themes: ['SANTE POUR TOUS', 'EDUCATION POUR TOUS', 'SYSTEMATISATION DU GENRE, AUTONOMISATION ET DROITS DE LA FEMME', 'SECURITE ALIMENTAIRE', 'ENVIRONNEMENT ET DEVELOPPEMENT DURABLE', 'SANTE-NUTRITION ET DEVELOPPEMENT DE LA PETITE ENFANCE', 'EAU, HYGIENE ET ASSAINISSEMENT', 'PAIX ET COHESION SOCIALE'],
    projectsTitle: 'Projets GFM3',
    featuredProjectsTitle: 'Projets en vedette',
    projectsIntro: 'Explorez les principaux projets portes par GFM3 avec ses partenaires techniques, financiers et communautaires.',
    newsTitle: 'Actualités',
    newsIntro: 'Retrouvez les actions, campagnes, ateliers et temps forts de GFM3.',
    cecarefTitle: 'Centre communautaire d accueil et de rehabilitation',
    cecarefBody: 'Le CECAREF accompagne les femmes et filles survivantes de fistules obstetricales et de violences basees sur le genre avec une prise en charge holistique.',
    collaborateTitle: 'Collaborer avec GFM3',
    collaborateBody: 'Consultez les recrutements, appels d offres et opportunites de collaboration.',
    donationTitle: 'Faire un don',
    donationBody: 'Votre soutien aide GFM3 a proteger les femmes et les enfants, renforcer les services communautaires et accompagner les survivantes.',
    contactTitle: 'Contactez-nous',
    detailProject: 'Ce projet contribue aux priorites de GFM3: autonomisation, protection, sante, education et developpement communautaire. Les activites sont deployees avec les communautes locales et les partenaires institutionnels.',
    detailNews: 'Cet article presente une action menee par GFM3 sur le terrain. Il met en avant la mobilisation communautaire, le plaidoyer et le suivi des beneficiaires.',
    footer: 'Copyright © GFM3 - ONG Génération Femme du 3ème Millénaire.',
    home: {
      visionEyebrow: 'Notre Vision',
      visionTitle: 'Vision',
      visionText: "Contribuer à l'avènement d'une société juste où tous les citoyens, sans distinction de sexe, sont acteurs de leur propre développement tout en bénéficiant équitablement et systématiquement des fruits.",
      newsEyebrow: 'Actualités',
      newsTitle: 'Restez à jour avec nous à partir de',
      newsSubtitle: 'Nos actualités récentes',
      missionEyebrow: 'Notre Mission',
      missionTitle: 'Mission',
      missionText: "Contribuer à impulser le développement local en travaillant à l'amélioration des conditions de vie des femmes, des jeunes et des enfants en milieu rural et périurbain.",
      zonesEyebrow: "CARTOGRAPHIE DES ZONES D'INTERVENTION",
      zonesTitle: 'Zones',
      interventionEyebrow: 'Intervention',
      pcaEyebrow: 'Mots De La PCA',
      pcaTitle: 'PCA',
      pcaSubtitle: 'Présidente du conseil d’administration GFM3',
      pcaText: "Durant 20 ans, nous avons ensemble œuvré pour l’amélioration des conditions de vie des personnes défavorisées. Merci a tous les partenaires qui nous ont accompagné dans ce noble combat de positionnement de la Femme aux cœur des décisions pour un 3eme Millénaires lumineux. Je reste persuadée que la foi et la rigueur demeureront le socle d’élévation de notre institution vers l’excellence et la durabilité.",
      pcaSignature: 'Madame HONORINE VEHI TOURE Femme de foi.',
      objectivesTitle: 'Nos Objectifs',
      objectives: [
        ['20000', 'RENDRE AUTONOMES 20 000 FEMMES EN MILIEU RURAL ET PÉRIURBAIN'],
        ['1000', 'PRENDRE EN CHARGE 1000 FEMMES PORTEUSES DE FISTULES OBSTÉTRICALES'],
        ['7500', 'PRENDRE EN CHARGE 7500 OEV'],
      ],
    },
    aboutPage: {
      hero: 'A PROPOS',
      stat: 'Plus de 500+ Femmes Aidées',
      eyebrow: 'A PROPOS',
      genesis: 'GENESE DE GFM3',
      paragraphs: [
        "La Côte d'Ivoire a traversé une crise militaro-politique en 2002 qui a profondément fragilisé les populations, notamment les femmes et les enfants. Après cette crise, un groupe d'amis, dont Madame Honorine VEHI TOURE, a décidé de porter secours aux parents sinistrés dans l'Ouest du pays.",
        "Ces femmes collectaient des vêtements, des kits alimentaires et hygiéniques qu'elles distribuaient dans les villages pour soutenir les femmes devenues cheffes de familles, leurs enfants orphelins, ainsi que les jeunes à risque. Face à l'ampleur des besoins, ce groupe s'est mué en organisation non gouvernementale.",
        "C'est ainsi que le 30 avril 2004 est née officiellement l'ONG Génération Femme du 3ème Millénaire (GFM3). L'organisation a débuté par l'assistance aux populations vulnérables avant de devenir pionnière dans l'identification et la prise en charge des porteuses de fistule obstétricale en Côte d'Ivoire.",
      ],
      theory: 'THEORIE DU CHANGEMENT BASEE SUR DES PILIERS STRATEGIQUES',
      bioEyebrow: 'Biographie',
      bioTitle: 'BIOGRAPHIE DE LA FONDATRICE',
      founderRole: "Fondatrice et Présidente du Conseil d'Administration de GFM3",
      bioBlocks: [
        ['Formation et Expériences Professionnelles', "Titulaire d'un MBA en administration et gestion des entreprises et d'un Master en gestion des projets, Mme SADIA épse VEHI-TOURE HONORINE est experte en Genre et développement. Elle est certifiée en Genre et Développement à l'OIT de Turin en Italie et à l'Institut des Hautes Etudes de Développement de l'Université de Genève."],
        ['Participation à des Événements Internationaux', "Elle participe régulièrement aux rencontres internationales sur les droits des femmes, notamment les sessions d'évaluation des conditions de la femme aux Nations Unies, les rencontres Girls Not Brides et les conférences sur la philanthropie communautaire."],
        ['Engagement Institutionnel', "Activiste en matière de protection des droits des enfants et des femmes, de promotion de l'autonomisation de la femme et de la jeune fille, de santé de la reproduction et de systématisation du genre, elle demeure une figure engagée de la société civile."],
        ['Création de GFM3 et Missions', "Face à la vulnérabilité des populations occasionnée par la crise ivoirienne, Mme Honorine VEHI a contribué à l'assistance humanitaire aux côtés des agences des Nations Unies et des organisations internationales. Elle formalise ses actions en fondant GFM3 en 2004."],
        ['Actions et Projets de GFM3', "GFM3 initie des campagnes de sensibilisation et de plaidoyer sur les mariages précoces, les viols, l'excision, les filles-mères, les fistules, les grossesses en milieu scolaire, la faim et le travail des enfants. L'organisation intervient aussi dans l'eau, l'hygiène, la santé, la nutrition, la sécurité alimentaire et l'environnement."],
        ['Leadership et Reconnaissance', "Mme HONORINE VEHI-TOURE est l'actuelle Présidente du Conseil d'Administration de l'ONG GFM3 et membre fondatrice de plusieurs réseaux nationaux et internationaux. Son expérience de terrain fait d'elle une spécialiste reconnue dans la lutte contre les VBG et les fistules obstétricales."],
      ],
    },
    common: {
      recentNews: 'Actualités Récentes',
      follow: 'Suivez-Nous',
      projectLabel: 'Projet GFM3',
      footerAbout: 'À Propos',
      footerBlurb: "Plus de 20 ans d'actions en faveur de l'amélioration des conditions de vie des femmes, des jeunes et des enfants en milieu rural et périubain.",
      contactInfo: 'Contact Info',
      address: 'Address:',
      phone: 'Phone:',
    },
  },
  en: {
    lang: 'en',
    switchTo: 'FR',
    nav: [
      ['about', 'About'],
      ['projects', 'Projects'],
      ['news', 'News'],
      ['cecaref', 'CECAREF'],
      ['collaborate', 'Collaborate'],
      ['contact', 'Contact'],
    ],
    donate: 'Donate',
    readMore: 'Read more',
    learnMore: 'Learn more',
    back: 'Back',
    hero: [
      ['3rd Adolescent Girls Summit 2026 in Yamoussoukro', 'Mobilizing communities, institutions and young people around girls leadership.', '/assets/img/baniere/sfa.jpg'],
      ['Advocacy mobilization and presentation campaign', 'Bringing the priorities of women and children into public decision-making.', '/assets/img/baniere/pomci.jpg'],
      ['Resilient agriculture in the face of climate change', 'Supporting rural women toward sustainable food security.', '/assets/img/baniere/gfm3_fdfp.jpeg'],
    ],
    aboutTitle: 'Generation Femme du 3eme Millenaire NGO',
    aboutBody: 'GFM3 is an Ivorian organization committed to improving the lives of women, children and vulnerable communities. Since 2004, it has worked across health, education, empowerment, protection and community development.',
    values: ['Accountability', 'Discipline', 'Solidarity'],
    themeTitle: 'Our areas of work',
    themes: ['Health for all', 'Education for all', 'Gender, empowerment and women rights', 'Food security', 'Environment and sustainable development', 'Health, nutrition and early childhood', 'Water, hygiene and sanitation', 'Peace and social cohesion'],
    projectsTitle: 'GFM3 Projects',
    featuredProjectsTitle: 'Featured projects',
    projectsIntro: 'Explore GFM3 major projects with technical, financial and community partners.',
    newsTitle: 'News and articles',
    newsIntro: 'Browse GFM3 actions, campaigns, workshops and field highlights.',
    cecarefTitle: 'Community reception and rehabilitation center',
    cecarefBody: 'CECAREF supports women and girls who have survived obstetric fistula and gender-based violence through holistic care.',
    collaborateTitle: 'Collaborate with GFM3',
    collaborateBody: 'View recruitment, tenders and collaboration opportunities.',
    donationTitle: 'Donate',
    donationBody: 'Your support helps GFM3 protect women and children, strengthen community services and support survivors.',
    contactTitle: 'Contact us',
    detailProject: 'This project contributes to GFM3 priorities: empowerment, protection, health, education and community development. Activities are delivered with local communities and institutional partners.',
    detailNews: 'This article presents a GFM3 field action. It highlights community mobilization, advocacy and beneficiary follow-up.',
    footer: 'Copyright (c) GFM3 - Generation Femme du 3eme Millenaire NGO.',
    home: {
      visionEyebrow: 'Our Vision',
      visionTitle: 'Vision',
      visionText: 'Contribute to the emergence of a fair society where all citizens, regardless of gender, are actors in their own development while equitably and systematically benefiting from its fruits.',
      newsEyebrow: 'News',
      newsTitle: 'Stay up to date with',
      newsSubtitle: 'Our latest news',
      missionEyebrow: 'Our Mission',
      missionTitle: 'Mission',
      missionText: 'Help drive local development by improving the living conditions of women, young people and children in rural and peri-urban areas.',
      zonesEyebrow: 'MAPPING OF INTERVENTION AREAS',
      zonesTitle: 'Areas',
      interventionEyebrow: 'Intervention',
      pcaEyebrow: 'Message From The Board Chair',
      pcaTitle: 'Board Chair',
      pcaSubtitle: 'Chairwoman of the GFM3 Board of Directors',
      pcaText: 'For 20 years, together we have worked to improve the living conditions of disadvantaged people. Thank you to all the partners who have supported us in this noble effort to position women at the heart of decisions for a brighter third millennium. I remain convinced that faith and rigor will remain the foundation that lifts our institution toward excellence and sustainability.',
      pcaSignature: 'Madame HONORINE VEHI TOURE, woman of faith.',
      objectivesTitle: 'Our Objectives',
      objectives: [
        ['20000', 'MAKE 20,000 WOMEN ECONOMICALLY SELF-RELIANT IN RURAL AND PERI-URBAN AREAS'],
        ['1000', 'CARE FOR 1,000 WOMEN LIVING WITH OBSTETRIC FISTULA'],
        ['7500', 'CARE FOR 7,500 ORPHANS AND VULNERABLE CHILDREN'],
      ],
    },
    aboutPage: {
      hero: 'ABOUT',
      stat: 'More than 500+ Women Supported',
      eyebrow: 'ABOUT',
      genesis: 'GENESIS OF GFM3',
      paragraphs: [
        "Cote d'Ivoire went through a military-political crisis in 2002 that deeply weakened communities, especially women and children. After the crisis, a group of friends, including Madame Honorine VEHI TOURE, decided to support disaster-affected families in the west of the country.",
        'These women collected clothing, food and hygiene kits and distributed them in villages to support women who had become heads of household, orphaned children and at-risk youth. Faced with the scale of needs, the group became a non-governmental organization.',
        'On April 30, 2004, Generation Femme du 3eme Millenaire (GFM3) was officially born. The organization began by assisting vulnerable communities before becoming a pioneer in identifying and supporting women living with obstetric fistula in Cote d’Ivoire.',
      ],
      theory: 'THEORY OF CHANGE BASED ON STRATEGIC PILLARS',
      bioEyebrow: 'Biography',
      bioTitle: 'BIOGRAPHY OF THE FOUNDER',
      founderRole: 'Founder and Chairwoman of the GFM3 Board of Directors',
      bioBlocks: [
        ['Training and Professional Experience', 'Holder of an MBA in business administration and management and a Master’s degree in project management, Mrs. SADIA épouse VEHI-TOURE HONORINE is an expert in gender and development. She is certified in Gender and Development by the ILO in Turin and by the Graduate Institute of Development Studies in Geneva.'],
        ['Participation in International Events', 'She regularly participates in international meetings on women’s rights, including United Nations sessions on the status of women, Girls Not Brides meetings and conferences on community philanthropy.'],
        ['Institutional Commitment', 'An activist for the protection of children’s and women’s rights, women’s and girls’ empowerment, reproductive health and gender mainstreaming, she remains a committed civil society leader.'],
        ['Creation of GFM3 and Mission', 'Faced with the vulnerability of communities caused by the Ivorian crisis, Mrs. Honorine VEHI contributed to humanitarian assistance alongside United Nations agencies and international organizations. She formalized her work by founding GFM3 in 2004.'],
        ['GFM3 Actions and Projects', 'GFM3 leads awareness and advocacy campaigns on early marriage, rape, excision, teenage motherhood, fistula, school pregnancies, hunger and child labor. The organization also works in water, hygiene, health, nutrition, food security and the environment.'],
        ['Leadership and Recognition', 'Mrs. HONORINE VEHI-TOURE is the current Chairwoman of the GFM3 Board of Directors and a founding member of several national and international networks. Her field experience has made her a recognized specialist in the fight against GBV and obstetric fistula.'],
      ],
    },
    common: {
      recentNews: 'Recent News',
      follow: 'Follow Us',
      projectLabel: 'GFM3 Project',
      footerAbout: 'About',
      footerBlurb: 'More than 20 years of action to improve the living conditions of women, young people and children in rural and peri-urban areas.',
      contactInfo: 'Contact Info',
      address: 'Address:',
      phone: 'Phone:',
    },
  },
};

const themeImages = ['/assets/img/sante.jpg', '/assets/img/education.jpeg', '/assets/img/genre.jpg', '/assets/img/securite.jpg', '/assets/img/protection.jpg', '/assets/img/protection_droit.jpg', '/assets/img/eau.jpg', '/assets/img/paix.jpg'];

function getRoute() {
  return window.location.hash.replace(/^#\/?/, '') || 'home';
}

function App() {
  const [lang, setLang] = useState('fr');
  const [route, setRoute] = useState(getRoute);
  const t = content[lang];

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="site-shell">
      <TopBar />
      <Header t={t} lang={lang} setLang={setLang} route={route} />
      <main>{renderPage(route, t)}</main>
      <Footer t={t} />
    </div>
  );
}

function renderPage(route, t) {
  const [type, slug] = route.split('/');
  if (type === 'projects' && slug) return <ProjectDetailPage t={t} item={findItem(projects, slug)} />;
  if (type === 'news' && slug) return <NewsDetailPage t={t} item={findItem(articles, slug)} />;

  const pages = {
    home: <HomePage t={t} />,
    about: <AboutPage t={t} />,
    projects: <ListingPage t={t} title={t.projectsTitle} intro={t.projectsIntro} items={projects} base="projects" />,
    news: <ListingPage t={t} title={t.newsTitle} intro={t.newsIntro} items={articles} base="news" />,
    cecaref: <CecarefPage t={t} />,
    collaborate: <CollaboratePage t={t} />,
    contact: <ContactPage t={t} />,
    donate: <DonatePage t={t} />,
  };

  return pages[type] || pages.home;
}

function findItem(items, slug) {
  return items.find(([itemSlug]) => itemSlug === slug) || items[0];
}

function HomePage({ t }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentHero = useMemo(() => t.hero[activeSlide], [activeSlide, t.hero]);

  return (
    <>
      <section className="hero home-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(12, 32, 39, .78), rgba(12, 32, 39, .18)), url(${currentHero[2]})` }}>
        <div className="hero-content">
          <p className="eyebrow">GFM3</p>
          <h1>{currentHero[0]}</h1>
          {currentHero[1] && <p>{currentHero[1]}</p>}
          <div className="hero-actions">
            <a className="primary-button" href="#/about">{t.learnMore}</a>
            <a className="secondary-button" href="#/contact">{t.contactTitle}</a>
          </div>
        </div>
        <div className="slide-controls" aria-label="Hero slides">
          {t.hero.map((slide, index) => (
            <button type="button" key={slide[0]} className={index === activeSlide ? 'is-active' : ''} onClick={() => setActiveSlide(index)} aria-label={`Slide ${index + 1}`} />
          ))}
        </div>
      </section>
      <AboutBlock t={t} home />
      <ThemesBlock t={t} />
      <HomeVision t={t} />
      <HomeNews t={t} />
      <HomeMission t={t} />
      <HomeIntervention t={t} />
      <HomePca t={t} />
      <ObjectivesSection t={t} />
    </>
  );
}

function AboutPage({ t }) {
  return (
    <>
      <PageHero title={t.aboutPage.hero} image="/assets/img/apropos.jpg" />
      <section className="section about-legacy-intro">
        <div className="about-legacy-image">
          <img src="/assets/img/apropos.jpg" alt="" />
          <strong>{t.aboutPage.stat}</strong>
        </div>
        <div className="about-legacy-copy">
          <p className="eyebrow">{t.aboutPage.eyebrow}</p>
          <h2>{t.aboutPage.genesis}</h2>
          {t.aboutPage.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="section theory-section">
        <h2>{t.aboutPage.theory}</h2>
        <img src="/assets/img/presentation.png" alt="" />
      </section>

      <section className="section founder-section">
        <div className="contact-heading">
          <p className="eyebrow">{t.aboutPage.bioEyebrow}</p>
          <h1>{t.aboutPage.bioTitle}</h1>
          <span />
        </div>
        <div className="founder-layout">
          <aside className="founder-card">
            <img className="founder-image" src="/assets/img/fondatrice.jpeg" alt="" />
            <h2>Honorine VEHI-TOURE</h2>
            <p>{t.aboutPage.founderRole}</p>
          </aside>
          <div className="founder-copy">
            {t.aboutPage.bioBlocks.map(([title, body]) => <BioBlock title={title} key={title}>{body}</BioBlock>)}
          </div>
        </div>
      </section>
    </>
  );
}

function BioBlock({ title, children }) {
  return (
    <div className="bio-block">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

function AboutBlock({ t, home = false }) {
  return (
    <section className={`section about-section ${home ? 'home-about' : ''}`}>
      <div className="about-media">
        <img src="/assets/img/apropos.jpg" alt="" />
        <strong>500+</strong>
      </div>
      <div className="about-copy">
        <SectionTitle eyebrow="GFM3" title={t.aboutTitle} />
        <p>{t.aboutBody}</p>
        <div className="value-row">{t.values.map((value) => <span key={value}>{value}</span>)}</div>
      </div>
    </section>
  );
}

function ThemesBlock({ t }) {
  return (
    <section className="section soft-section">
      <SectionTitle eyebrow="GFM3" title={t.themeTitle} />
      <div className="theme-grid">
        {t.themes.map((title, index) => (
          <a className="theme-card" href="#/projects" key={title}>
            <img src={themeImages[index]} alt="" />
            <h3>{title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}

function ListingPreview({ t, title, items, base }) {
  return (
    <section className={`section home-preview ${base === 'news' ? 'home-news' : ''}`}>
      <SectionTitle eyebrow="GFM3" title={title} />
      <CardGrid t={t} items={items} base={base} />
      <a className="inline-button" href={`#/${base}`}>{t.readMore}</a>
    </section>
  );
}

function HomeStatement({ eyebrow, title, text, dark = false }) {
  return (
    <section className={`home-statement ${dark ? 'dark' : ''}`}>
      <div className="section">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}

function HomeVision({ t }) {
  return (
    <section className="home-statement home-vision">
      <div className="section">
        <p className="eyebrow">{t.home.visionEyebrow}</p>
        <h2>{t.home.visionTitle}</h2>
        <p>{t.home.visionText}</p>
      </div>
    </section>
  );
}

function HomeNews({ t }) {
  return (
    <section className="section home-preview home-news">
      <div className="home-heading-split">
        <div>
          <p className="eyebrow">{t.home.newsEyebrow}</p>
          <h2>{t.home.newsTitle}<br />{t.home.newsSubtitle}</h2>
        </div>
        <a className="inline-button" href="#/news">{t.readMore}</a>
      </div>
      <CardGrid t={t} items={articles.slice(0, 3)} base="news" />
    </section>
  );
}

function HomeMission({ t }) {
  return (
    <section className="home-mission-band">
      <div className="section">
        <div>
          <p className="eyebrow">{t.home.missionEyebrow}</p>
          <h2>{t.home.missionTitle}</h2>
        </div>
        <p>{t.home.missionText}</p>
      </div>
    </section>
  );
}

function HomeIntervention({ t }) {
  const zones = ['ABENGOURO', 'ABIDJAN', 'BONDOUKOU', 'BOROTOU', 'BOUAFLE', 'BOUAKE', 'BOUNA', 'BOUNDIALI', 'DALOA', 'DANANE', 'DIDIEVI', 'KORHOGO', 'KORO', 'LOGOUALE', 'MAN', 'NABINGUE', 'SAN PEDRO', 'TOUBA', 'ZOUKOUGBEU'];
  const countries = ['BENIN', 'BURKINA FASO', 'CAMEROUN', 'CENTRAFRIQUE', 'FRANCE', 'GUINEE', 'CONAKRY', 'MALI', 'NIGER', 'SENEGAL', 'TCHAD', 'TOGO'];

  return (
    <section className="home-intervention-wrap">
      <div className="section home-intervention">
        <div>
          <SectionTitle eyebrow={t.home.zonesEyebrow} title={t.home.zonesTitle} />
          <div className="area-tags">
            {zones.map((area) => <span key={area}>{area}</span>)}
          </div>
          <a className="inline-button" href="#/projects">{t.projectsTitle}</a>
        </div>
        <img src="/assets/img/intervention.png" alt="" />
      </div>
      <div className="section home-africa">
        <img src="/assets/img/africa.png" alt="" />
        <div>
          <p className="eyebrow">{t.home.interventionEyebrow}</p>
          <div className="area-tags">
            {countries.map((country) => <span key={country}>{country}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePca({ t }) {
  return (
    <section className="section home-pca">
      <img src="/assets/img/cpa.jpg" alt="" />
      <div>
        <p className="eyebrow">{t.home.pcaEyebrow}</p>
        <h2>{t.home.pcaTitle}</h2>
        <h3>{t.home.pcaSubtitle}</h3>
        <p>{t.home.pcaText}</p>
        <strong>{t.home.pcaSignature}</strong>
      </div>
    </section>
  );
}

function ObjectivesSection({ t }) {
  return (
    <section className="objectives-section">
      <div className="section">
        <SectionTitle eyebrow="GFM3" title={t.home.objectivesTitle} />
        <div className="objective-grid">
          {t.home.objectives.map(([number, objective]) => (
            <article key={objective}>
              <span>{number}</span>
              <h3>{objective}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ListingPage({ t, title, intro, items, base }) {
  return (
    <>
      <section className={`section listing-page ${base === 'projects' ? 'legacy-projects' : 'legacy-news'}`}>
        <p className="page-intro">{intro}</p>
        <SectionTitle eyebrow="GFM3" title={base === 'projects' ? t.featuredProjectsTitle : title} />
        {base === 'projects' ? <ProjectImageGrid items={items} t={t} /> : <CardGrid t={t} items={items} base={base} />}
      </section>
    </>
  );
}

function ProjectImageGrid({ items, t }) {
  return (
    <div className="project-image-grid">
      {items.map((item) => {
        const { slug, title, image } = localizeProject(item, t);
        return (
        <a href={`#/projects/${slug}`} className="project-image-tile" key={slug} aria-label={title}>
          <img src={image} alt="" />
          <span>{title}</span>
        </a>
        );
      })}
    </div>
  );
}

function CardGrid({ t, items, base }) {
  return (
    <div className="news-grid">
      {items.map((item) => {
        const localized = base === 'projects' ? localizeProject(item, t) : localizeArticle(item, t);
        const { slug, title, image, date, excerpt } = localized;
        return (
        <article className="news-card" key={slug}>
          <a href={`#/${base}/${slug}`}><img src={image} alt="" /></a>
          <div>
            {date && <span className="card-date">{date}</span>}
            <h3>{title}</h3>
            <p>{base === 'projects' ? t.detailProject : (excerpt || t.detailNews)}</p>
            <a href={`#/${base}/${slug}`}>{t.readMore}</a>
          </div>
        </article>
        );
      })}
    </div>
  );
}

function NewsDetailPage({ t, item }) {
  const { slug, title, image, date } = localizeArticle(item, t);
  const gallery = getArticleGallery(item[0], image);

  return (
    <section className="section actualite-layout">
      <article className="actualite-main">
        <img className="actualite-featured" src={image} alt="" />
        <p className="actualite-date">{date}</p>
        <h1>{title}</h1>
        <p>{t.detailNews}</p>
        <p>{t.aboutBody}</p>
        <p>{t.cecarefBody}</p>
        <div className="actualite-gallery">
          {gallery.map((galleryImage) => (
            <img src={galleryImage} alt="" key={galleryImage} />
          ))}
        </div>
      </article>
      <ActualiteSidebar t={t} activeSlug={slug} />
    </section>
  );
}

function getArticleGallery(slug, fallback) {
  const galleries = {
    'actualite-15': ['/assets/img/gfm3_fdfp1.jpg', '/assets/img/gfm3_fdfp2.jpg', '/assets/img/gfm3_fdfp3.jpg', '/assets/img/gfm3_fdfp4.jpg', '/assets/img/gfm3_fdfp5.jpg'],
    'actualite-14': ['/assets/img/pomci1.jpg', '/assets/img/pomci2.jpg', '/assets/img/pomci3.jpg', '/assets/img/pomci4.jpg'],
    'actualite-13': ['/assets/img/sfa6.jpg', '/assets/img/sfa5.jpg', '/assets/img/sfa4.jpg', '/assets/img/sfa3.jpg', '/assets/img/sfa2.jpg', '/assets/img/sfa1.jpg'],
    'actualite-12': ['/assets/img/16joursactivisme.jpeg', '/assets/img/16joursactivisme2.jpeg', '/assets/img/16joursactivisme3.jpeg'],
    'actualite-11': ['/assets/img/activite12.jpeg', '/assets/img/activite13.jpeg', '/assets/img/activite14.jpeg', '/assets/img/activite15.jpeg'],
    'actualite-10': ['/assets/img/cocoalife2.jpeg', '/assets/img/cocoalife3.jpeg', '/assets/img/cocoalife4.jpeg', '/assets/img/cocoalife5.jpeg', '/assets/img/cocoalife6.jpeg', '/assets/img/cocoalife7.jpeg'],
    'actualite-9': ['/assets/img/suco2.jpeg', '/assets/img/suco3.jpeg', '/assets/img/suco4.jpeg', '/assets/img/suco5.jpeg', '/assets/img/suco6.jpeg', '/assets/img/suco7.jpeg'],
    'actualite-8': ['/assets/img/flac2.jpeg', '/assets/img/flac3.jpeg', '/assets/img/flac4.jpeg'],
    'actualite-1': ['/assets/img/actu-1_1.jpeg', '/assets/img/actu-1_2.jpeg'],
  };
  return galleries[slug] || [fallback];
}

function ActualiteSidebar({ t, activeSlug }) {
  return (
    <aside className="actualite-sidebar">
      <a className="sidebar-donate" href="#/donate">
        <img src="/assets/img/woman.jpg" alt="" />
        <span>{t.donate}</span>
      </a>
      <div className="sidebar-widget">
        <h2>{t.common.recentNews}</h2>
        <div className="project-side-list">
          {articles.filter(([slug]) => slug !== activeSlug).slice(0, 5).map((item) => {
            const { slug, title, image, date } = localizeArticle(item, t);
            return (
            <a href={`#/news/${slug}`} key={slug}>
              <img src={image} alt="" />
              <span>{title}<small>{date}</small></span>
            </a>
            );
          })}
        </div>
      </div>
      <div className="sidebar-widget">
        <h2>{t.projectsTitle}</h2>
        <div className="sidebar-projects">
          {projects.slice(0, 6).map(([slug, title, image]) => (
            <a href={`#/projects/${slug}`} key={slug} aria-label={title}>
              <img src={image} alt="" />
            </a>
          ))}
        </div>
      </div>
      <div className="sidebar-widget">
        <h2>{t.common.follow}</h2>
        <div className="social-grid">
          <a href="https://www.facebook.com/profile.php?id=61553383325865">f</a>
          <a href="#/news">t</a>
          <a href="#/news">p</a>
          <a href="#/news">G+</a>
          <a href="#/news">in</a>
        </div>
      </div>
    </aside>
  );
}

function DetailPage({ t, item, collection, body }) {
  const [, title, image] = item;
  return (
    <>
      <PageHero title={title} image={image} />
      <section className="section detail-layout">
        <a className="back-link" href={`#/${collection}`}>{t.back}</a>
        <img src={image} alt="" />
        <div>
          <SectionTitle eyebrow={collection === 'projects' ? t.projectsTitle : t.newsTitle} title={title} />
          <p>{body}</p>
          <p>{t.aboutBody}</p>
          <a className="primary-button" href="#/contact">{t.contactTitle}</a>
        </div>
      </section>
    </>
  );
}

function ProjectDetailPage({ t, item }) {
  const { title, image } = localizeProject(item, t);
  const gallery = getProjectGallery(item[0], image);

  return (
    <section className="section actualite-layout project-detail-layout">
      <article className="actualite-main project-detail-main">
        <img className="actualite-featured" src={image} alt="" />
        <p className="actualite-date">{t.common.projectLabel}</p>
        <h1>{title}</h1>
        <p>{t.detailProject}</p>
        <p>{t.aboutBody}</p>
        <p>{t.cecarefBody}</p>
        <div className="actualite-gallery project-gallery">
          {gallery.map((galleryImage) => (
            <img src={galleryImage} alt="" key={galleryImage} />
          ))}
        </div>
      </article>
      <ProjectSidebar t={t} activeSlug={item[0]} />
    </section>
  );
}

function getProjectGallery(slug, fallback) {
  const galleries = {
    'impact-4-life': ['/assets/img/pr_1.jpg', '/assets/img/pr5_5.jpeg', '/assets/img/pr5_6.jpeg'],
    'cocoa-life': ['/assets/img/cocoalife1.jpeg', '/assets/img/cocoalife2.jpeg', '/assets/img/cocoalife3.jpeg', '/assets/img/cocoalife4.jpeg'],
    'swedd-genre': ['/assets/img/pr_3.jpg', '/assets/img/baniere_swedd.jpg', '/assets/img/baniere_sweed_2.jpg'],
    pmndpe: ['/assets/img/pr_4.jpg', '/assets/img/pr4_1.jpg', '/assets/img/pr4_2.jpg', '/assets/img/pr4_3.jpg'],
    padfa: ['/assets/img/proj-6.jpg', '/assets/img/pr_6.jpg'],
    plfzn: ['/assets/img/proj-7.jpg'],
    mtn: ['/assets/img/pr_7.jpg', '/assets/img/pr_mtn.jpg'],
    flac: ['/assets/img/flac1.jpeg', '/assets/img/flac2.jpeg', '/assets/img/flac3.jpeg', '/assets/img/flac4.jpeg'],
    clef: ['/assets/img/proj-9.jpg'],
    chiepo: ['/assets/img/proj-10.jpg'],
    gfc: ['/assets/img/proj-11.jpg'],
    'swedd-appui-alimentaire': ['/assets/img/proj-12.jpg'],
    promis: ['/assets/img/proj-13.jpg'],
    'transition-carbone': ['/assets/img/proj-14.jpg'],
    'genre-et-fistules': ['/assets/img/proj-15.jpg'],
  };
  return galleries[slug] || [fallback];
}

function ProjectSidebar({ t, activeSlug }) {
  return (
    <aside className="actualite-sidebar">
      <a className="sidebar-donate" href="#/donate">
        <img src="/assets/img/woman.jpg" alt="" />
        <span>{t.donate}</span>
      </a>
      <div className="sidebar-widget">
        <h2>{t.projectsTitle}</h2>
        <div className="project-side-list">
          {projects.filter(([slug]) => slug !== activeSlug).slice(0, 8).map((item) => {
            const { slug, title, image } = localizeProject(item, t);
            return (
            <a href={`#/projects/${slug}`} key={slug}>
              <img src={image} alt="" />
              <span>{title}</span>
            </a>
            );
          })}
        </div>
      </div>
      <div className="sidebar-widget">
        <h2>{t.newsTitle}</h2>
        <div className="project-side-list">
          {articles.slice(0, 4).map((item) => {
            const { slug, title, image, date } = localizeArticle(item, t);
            return (
            <a href={`#/news/${slug}`} key={slug}>
              <img src={image} alt="" />
              <span>{title}<small>{date}</small></span>
            </a>
            );
          })}
        </div>
      </div>
      <div className="sidebar-widget">
        <h2>{t.common.follow}</h2>
        <div className="social-grid">
          <a href="https://www.facebook.com/profile.php?id=61553383325865">f</a>
          <a href="#/projects">t</a>
          <a href="#/projects">p</a>
          <a href="#/projects">G+</a>
          <a href="#/projects">in</a>
        </div>
      </div>
    </aside>
  );
}

function InfoPage({ title, body, image, compact = false }) {
  return (
    <section className={`section split-section ${compact ? 'compact-page' : ''}`}>
      <div>
        <SectionTitle eyebrow="GFM3" title={title} />
        <p>{body}</p>
      </div>
      <img src={image} alt="" />
    </section>
  );
}

function CecarefPage({ t }) {
  const c = t.lang === 'en'
    ? {
        hero: 'COMMUNITY RECEPTION AND REHABILITATION CENTER FOR WOMEN AND GIRLS',
        title: 'CECAREF: Community Reception and Rehabilitation Center for Women and Girls',
        intro: [
          'GFM3 began by assisting vulnerable communities and, through its interventions, identified the first women living with obstetric fistula in Cote d’Ivoire. As a pioneer in this field, GFM3 built a center in Logouale, in the Tonpki region, to provide better care for women affected by fistula.',
          'The Community Reception and Rehabilitation Center for Women and Girls (CECAREF) was built in September 2013. Also known as the house of the girl and the mother, it is a safe space for women and girls fleeing gender-based violence, including women living with or recovering from fistula.',
        ],
        objective: 'OBJECTIVE',
        objectiveText: 'Prevent and contribute to the care of survivors of gender-based violence, especially obstetric fistula, and promote women-led initiatives through a safe space.',
        specific: 'SPECIFIC OBJECTIVES',
        specificItems: [
          'Provide listening support and safe shelter for survivors of GBV, especially women living with obstetric fistula.',
          'Promote women’s leadership and the empowerment of CECAREF partner groups.',
          'Develop partnerships to strengthen women’s rights.',
          'Prevent gender-based violence through community watch and early warning committees.',
        ],
        domains: 'AREAS OF INTERVENTION',
        domainItems: [
          'Psychosocial care for women with obstetric fistula and other GBV survivors.',
          'Women’s empowerment and leadership.',
          'Literacy and professional training for vulnerable girls.',
          'Support and social reintegration for former fistula patients.',
          'Agroecology support for CECAREF partner groups.',
          'GBV prevention and awareness raising.',
        ],
        learningTitle: 'CECAREF, a reception and learning center',
        learningText: 'CECAREF also welcomes young girls seeking professional training. Beneficiaries receive training and are then supported in their professional integration through installation kits.',
        schoolTitle: 'CECAREF against school pregnancies',
        schoolText: 'CECAREF also raises awareness against school pregnancies and promotes sexual education for young people. These actions aim to reduce a major barrier to girls empowerment.',
        achievements: 'CECAREF ACHIEVEMENTS',
        achievementItems: [
          'Care for women living with and recovering from obstetric fistula.',
          'Since its creation, CECAREF has cared for more than 100 women with fistula.',
          'Prevention and fight against violence against women, girls and children.',
          'Community awareness and survivor support.',
        ],
        video: 'Informational video',
        videoText: 'Born from many actions for women and girls living with or recovering from obstetric fistula, CECAREF open days are an advocacy effort to mobilize resources for survivors.',
      }
    : {
        hero: "CENTRE COMMUNAUTAIRE D'ACCUEIL ET DE REHABILITATION DES FEMMES ET DES FILLES",
        title: "CECAREF : Centre Communautaire d'Accueil et de Rehabilitation pour les Femmes et les Filles",
        intro: [
          "GFM3 a debute par l'assistance aux populations vulnerables et, au fur et a mesure de ses interventions, elle decouvre les premieres porteuses de fistule obstetricale en Cote d'Ivoire. ONG pionniere en matiere d'identification contre la fistule obstetricale, GFM3 construit un centre a Logouale, dans la Region du Tonpki afin de permettre une meilleure prise en charge des porteuses de fistules.",
          "Le Centre Communautaire d'Accueil et de Rehabilitation pour les Femmes et les Filles (CECAREF) a ete construit en septembre 2013. Aussi appele la maison de la fille et de la mere, il est un espace sur destine aux femmes et aux filles fuyant les cas de Violences Basees sur le Genre (VBG), notamment les porteuses et ex-porteuses de fistule.",
        ],
        objective: 'OBJECTIFS',
        objectiveText: 'Prevenir et contribuer a la prise en charge des survivantes de violences basees sur le genre notamment la fistule obstetricale, et promouvoir des initiatives feminines a travers un espace sur.',
        specific: 'OBJECTIFS SPECIFIQUES',
        specificItems: [
          'Offrir une ecoute et un abri securise aux survivantes de VBG notamment les porteuses de fistule obstetricale.',
          "Promouvoir le leadership des femmes et l'autonomisation des groupements amis du CECAREF.",
          'Developper des partenariats pour renforcer les droits de la femme.',
          "Prevenir les violences basees sur le genre a travers les actions des comites de veille et d'alerte precoce.",
        ],
        domains: "DOMAINES D'INTERVENTION",
        domainItems: [
          "Prise en charge psychosociale des porteuses de fistule obstetricale et d'autres survivantes de VBG.",
          'Autonomisation et leadership de la femme.',
          'Alphabetisation et formation professionnelle des filles vulnerables.',
          'Accompagnement et reinsertion sociale des ex-porteuses de fistule obstetricale.',
          'Appui en agroecologie des groupements amis du CECAREF.',
          'Prevention et sensibilisation sur les VBG.',
        ],
        learningTitle: "Le CECAREF, un centre d'accueil et d'apprentissage",
        learningText: "Le CECAREF accueille egalement des jeunes filles en quete d'une formation professionnelle. Les beneficiaires recueillies au CECAREF beneficient de plusieurs formations et sont ensuite inserees dans le cursus professionnel a travers des kits d'installation.",
        schoolTitle: 'CECAREF contre les grossesses en milieu scolaire',
        schoolText: "Le CECAREF fait egalement de la sensibilisation contre les grossesses en milieu scolaire et pour l'education sexuelle des jeunes. Ces actions visent a reduire ce frein majeur a l'autonomisation des filles.",
        achievements: 'REALISATION DU CECAREF',
        achievementItems: [
          'Intervention dans la prise en charge des porteuses et ex-porteuses de fistule obstetricale.',
          'Depuis sa creation, le CECAREF a pris en charge plus de 100 porteuses de fistules.',
          'Prevention et lutte contre les violences faites aux femmes, aux filles et aux enfants.',
          'Sensibilisations communautaires et accompagnement des survivantes.',
        ],
        video: 'Video informative',
        videoText: 'Nee de nombreuses actions en faveur de la femme et de la fille porteuse et ex-porteuse de fistule obstetricale, la journee portes ouvertes du CECAREF constitue un plaidoyer pour la mobilisation de ressources au profit des survivantes.',
      };

  return (
    <>
      <PageHero title={c.hero} image="/assets/img/cecaref_banier.jpg" />
      <section className="section cecaref-page">
        <article className="cecaref-article">
          <h2>{c.title}</h2>
          {c.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

          <div className="cecaref-video">
            <video controls>
              <source src="/assets/img/Vidéo_Amara.mp4" type="video/mp4" />
            </video>
          </div>

          <h3>{c.objective}</h3>
          <p>{c.objectiveText}</p>

          <h3>{c.specific}</h3>
          <ul>
            {c.specificItems.map((item) => <li key={item}>{item}</li>)}
          </ul>

          <h3>{c.domains}</h3>
          <ul>
            {c.domainItems.map((item) => <li key={item}>{item}</li>)}
          </ul>

          <ImageRow images={[['/assets/img/cer_1.jpg', ''], ['/assets/img/cer_2.jpg', '']]} />

          <h3>{c.learningTitle}</h3>
          <p>{c.learningText}</p>

          <h3>{c.schoolTitle}</h3>
          <p>{c.schoolText}</p>

          <ImageRow images={[['/assets/img/coiffure.jpg', 'Coiffure'], ['/assets/img/alpha.jpeg', 'Alphabetisation'], ['/assets/img/couture.jpg', 'Couture']]} />

          <h3>{c.achievements}</h3>
          <ul>
            {c.achievementItems.map((item) => <li key={item}>{item}</li>)}
          </ul>

          <ImageRow images={[['/assets/img/cer_3.jpg', ''], ['/assets/img/cer_4.jpeg', '']]} />

          <h3>{c.video}</h3>
          <p>{c.videoText}</p>
          <div className="cecaref-video">
            <video controls>
              <source src="/assets/img/cecarf.mp4" type="video/mp4" />
            </video>
          </div>
        </article>
      </section>
    </>
  );
}

function ImageRow({ images }) {
  return (
    <div className={`cecaref-image-row columns-${images.length}`}>
      {images.map(([src, caption]) => (
        <figure key={src}>
          <img src={src} alt="" />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

function CollaboratePage({ t }) {
  const items = t.lang === 'en'
    ? [['recruitment', 'Recruitment', '/assets/img/offre.png'], ['tenders', 'Tenders', '/assets/img/worker.jpg'], ['partnership', 'Partnerships', '/assets/img/partner.jpg']]
    : [['recruitment', 'On Recrute', '/assets/img/offre.png'], ['tenders', "Appel d'offres", '/assets/img/worker.jpg'], ['partnership', 'Partenariats', '/assets/img/partner.jpg']];

  return (
    <>
      <PageHero title={t.collaborateTitle} image="/assets/img/partner.jpg" />
      <section className="section legacy-content-page">
        <p className="page-intro">{t.collaborateBody}</p>
        <div className="legacy-card-grid">
          {items.map(([slug, title, image]) => (
            <article className="news-card" key={slug}>
              <img src={image} alt="" />
              <div>
                <h3>{title}</h3>
                <p>{t.collaborateBody}</p>
                <a href="#/contact">{t.contactTitle}</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function DonatePage({ t }) {
  return (
    <>
      <PageHero title={t.donationTitle} image="/assets/img/groupfemale.jpg" />
      <section className="section donation-page legacy-content-page">
        <SectionTitle eyebrow="GFM3" title={t.donationTitle} />
        <p>{t.donationBody}</p>
        <div className="donation-actions">
          <a className="primary-button" href="https://pay.wave.com/m/M_u3jNeLm2U_Dj/c/ci">Wave</a>
          <a className="inline-button" href="mailto:infos@gfm3.org">PayPal: infos@gfm3.org</a>
        </div>
      </section>
    </>
  );
}

function ContactPage({ t }) {
  const c = t.lang === 'en'
    ? {
        eyebrow: 'Our Contacts',
        title: 'Stay in touch with GFM3',
        formTitle: 'Together, let us make the world better',
        name: 'Name',
        phone: 'Phone',
        message: 'Tell us about your project *',
        submit: 'Send message',
        location: 'Location',
        address: 'Cocody Angre, 7th section, Rue L169',
      }
    : {
        eyebrow: 'Nos Contacts',
        title: 'Restez en contact avec GFM3',
        formTitle: 'Ensemble, rendons le monde meilleur',
        name: 'Nom',
        phone: 'Téléphone',
        message: 'Parlez-nous de votre projet *',
        submit: 'Envoyer le message',
        location: 'Location',
        address: 'Cocody angrè, 7ème tranche, rue L169',
      };

  return (
    <>
      <section className="section contact-page">
        <div className="contact-heading">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1>{c.title}</h1>
          <span />
        </div>
        <div className="contact-grid legacy-contact-grid">
          <form action="/netlify/functions/contact" method="POST">
            <h2>{c.formTitle}</h2>
            <input name="name" placeholder={c.name} type="text" />
            <input name="email" placeholder="Email*" type="email" />
            <input name="phone" placeholder={c.phone} type="text" />
            <textarea name="comments" placeholder={c.message} rows="6" />
            <button className="primary-button" type="submit">{c.submit}</button>
          </form>
          <div className="address-panel">
            <ul>
              <li>
                <strong>{c.location}</strong>
                <span>{c.address}</span>
              </li>
              <li>
                <strong>Email</strong>
                <span>infos@gfm3.org</span>
              </li>
              <li>
                <strong>Tel</strong>
                <span>+225 27 22 52 20 65</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="maps-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.189141870813!2d-3.9886934257574245!3d5.388118635316583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc195afcd58b0c1%3A0x5766acd79c9b2912!2sGFM3!5e0!3m2!1sfr!2sci!4v1754847772596!5m2!1sfr!2sci"
          title="GFM3 map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </>
  );
}

export default App;
