// ARTICLES / ACTIVITES
// Pour ajouter un nouvel article:
// 1. Copiez le modele ci-dessous.
// 2. Collez-le au debut de la liste, juste apres "export const articles = [".
// 3. Changez les textes, la date et les images.
// 4. Verifiez que le "slug" est unique, car il sert a creer le lien de la page.
//
// Modele a copier:
// {
//   slug: 'actualite-16', // lien de la page: #/news/actualite-16
//   title: 'Titre en francais',
//   titleEn: 'English title', // optionnel: titre en anglais
//   image: '/assets/img/mon-image.jpg', // image principale de la carte et de la page
//   date: '20 juin 2026',
//   dateEn: 'June 20, 2026', // optionnel: date en anglais
//   excerpt: 'Petit resume en francais affiche sur les cartes.',
//   excerptEn: 'Short English summary.', // optionnel: resume en anglais
//   gallery: [
//     '/assets/img/mon-image.jpg',
//     '/assets/img/mon-image-2.jpg',
//   ], // optionnel: images affichees dans la page detail
// },
//
// Important:
// - Les images doivent etre placees dans le dossier assets/img.
// - Le chemin commence toujours par /assets/img/.
// - Gardez la virgule apres chaque article, sauf si c'est le dernier.
export const articles = [
  {
    slug: 'actualite-15',
    title: 'GFM3 lance officiellement son plan de formation FDFP 2025.',
    titleEn: 'GFM3 officially launches its FDFP 2025 training plan.',
    image: '/assets/img/gfm3_fdfp.jpeg',
    date: '15 avril 2026',
    dateEn: 'April 15, 2026',
    excerpt: 'Dans le cadre du renforcement des capacités de son personnel, l’ONG Génération Femme du 3ème Millénaire (GFM3) a procédé ce mercredi 15 avril 2026, au lancement officiel de son plan de formation FDFP agréé au titre de l’année 2025.',
    excerptEn: 'As part of strengthening staff capacity, Generation Femme du 3eme Millenaire (GFM3) officially launched its FDFP training plan approved for 2025.',
    gallery: ['/assets/img/gfm3_fdfp1.jpg', '/assets/img/gfm3_fdfp2.jpg', '/assets/img/gfm3_fdfp3.jpg', '/assets/img/gfm3_fdfp4.jpg', '/assets/img/gfm3_fdfp5.jpg'],
  },
  {
    slug: 'actualite-14',
    title: 'Zouan-Hounien : les filles en première ligne pour une éducation protectrice et sans grossesses précoces.',
    titleEn: 'Zouan-Hounien: girls at the forefront of protective education without early pregnancies.',
    image: '/assets/img/pomci.jpg',
    date: '11 avril 2026',
    dateEn: 'April 11, 2026',
    excerpt: 'Le samedi 11 avril 2026, la salle de la mairie de Zouan-Hounien a servi de cadre à une importante campagne de mobilisation en faveur de l’éducation des filles, organisée par la coalition POME-CI avec ses organisations membres.',
    excerptEn: 'The town hall of Zouan-Hounien hosted an important mobilization campaign for girls education, organized by the POME-CI coalition and its member organizations.',
    gallery: ['/assets/img/pomci1.jpg', '/assets/img/pomci2.jpg', '/assets/img/pomci3.jpg', '/assets/img/pomci4.jpg'],
  },
  {
    slug: 'actualite-13',
    title: 'Yamoussoukro a accueilli la 3ᵉ édition du Sommet des Filles Adolescentes (SFA 2026).',
    titleEn: 'Yamoussoukro hosted the 3rd Adolescent Girls Summit (SFA 2026).',
    image: '/assets/img/sfa.jpg',
    date: '31 mars au 3 avril 2026',
    dateEn: 'March 31 to April 3, 2026',
    excerpt: 'Un événement majeur réunissant plus de 300 participantes issues de 25 pays. Francophones, anglophones, hispanophones ...',
    excerptEn: 'A major event bringing together more than 300 participants from 25 countries, including French, English and Spanish-speaking delegations.',
    gallery: ['/assets/img/sfa6.jpg', '/assets/img/sfa5.jpg', '/assets/img/sfa4.jpg', '/assets/img/sfa3.jpg', '/assets/img/sfa2.jpg', '/assets/img/sfa1.jpg'],
  },
  {
    slug: 'actualite-12',
    title: '16 jours d activisme contre les violences basees sur le genre',
    titleEn: '16 days of activism against gender-based violence',
    image: '/assets/img/16joursactivisme.jpeg',
    date: '3 decembre 2025',
    dateEn: 'December 3, 2025',
    gallery: ['/assets/img/16joursactivisme.jpeg', '/assets/img/16joursactivisme2.jpeg', '/assets/img/16joursactivisme3.jpeg'],
  },
  {
    slug: 'actualite-11',
    title: 'Signature de partenariat avec le MENA',
    titleEn: 'Partnership signing with MENA',
    image: '/assets/img/activite11.jpeg',
    date: '19 septembre 2025',
    dateEn: 'September 19, 2025',
    gallery: ['/assets/img/activite12.jpeg', '/assets/img/activite13.jpeg', '/assets/img/activite14.jpeg', '/assets/img/activite15.jpeg'],
  },
  {
    slug: 'actualite-10',
    title: 'Revue semestrielle du programme Cocoa Life',
    titleEn: 'Cocoa Life semi-annual program review',
    image: '/assets/img/cocoalife1.jpeg',
    date: '28 juillet 2025',
    dateEn: 'July 28, 2025',
    gallery: ['/assets/img/cocoalife2.jpeg', '/assets/img/cocoalife3.jpeg', '/assets/img/cocoalife4.jpeg', '/assets/img/cocoalife5.jpeg', '/assets/img/cocoalife6.jpeg', '/assets/img/cocoalife7.jpeg'],
  },
  {
    slug: 'actualite-9',
    title: 'Activites du projet SUCO',
    titleEn: 'SUCO project activities',
    image: '/assets/img/suco1.jpeg',
    date: '2025',
    gallery: ['/assets/img/suco2.jpeg', '/assets/img/suco3.jpeg', '/assets/img/suco4.jpeg', '/assets/img/suco5.jpeg', '/assets/img/suco6.jpeg', '/assets/img/suco7.jpeg'],
  },
  {
    slug: 'actualite-8',
    title: 'Actions FLAC sur le terrain',
    titleEn: 'FLAC field actions',
    image: '/assets/img/flac1.jpeg',
    date: '2025',
    gallery: ['/assets/img/flac2.jpeg', '/assets/img/flac3.jpeg', '/assets/img/flac4.jpeg'],
  },
  { slug: 'actualite-7', title: 'Sante communautaire et protection', titleEn: 'Community health and protection', image: '/assets/img/art10.jpg', date: '2025' },
  { slug: 'actualite-6', title: 'Protection et education des filles', titleEn: 'Protection and education for girls', image: '/assets/img/art7.jpg', date: '2025' },
  { slug: 'actualite-5', title: 'Atelier avec les acteurs locaux', titleEn: 'Workshop with local stakeholders', image: '/assets/img/art1.jpg', date: '2025' },
  { slug: 'actualite-4', title: 'Developpement local et mobilisation communautaire', titleEn: 'Local development and community mobilization', image: '/assets/img/actu-4.jpg', date: '2024' },
  { slug: 'actualite-3', title: 'Renforcement des activites communautaires', titleEn: 'Strengthening community activities', image: '/assets/img/actu-3.jpg', date: '2024' },
  { slug: 'actualite-2', title: 'Renforcement des capacites', titleEn: 'Capacity building', image: '/assets/img/blog3.jpg', date: '2024' },
  {
    slug: 'actualite-1',
    title: 'Vie associative GFM3',
    titleEn: 'GFM3 community life',
    image: '/assets/img/blog2.jpeg',
    date: '09 octobre 2024',
    dateEn: 'October 9, 2024',
    gallery: ['/assets/img/actu-1_1.jpeg', '/assets/img/actu-1_2.jpeg'],
  },
];
