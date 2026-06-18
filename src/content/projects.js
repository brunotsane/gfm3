// PROJETS
// Pour ajouter un nouveau projet:
// 1. Copiez le modele ci-dessous.
// 2. Collez-le au debut de la liste, juste apres "export const projects = [".
// 3. Remplacez le titre, les images et le slug.
//
// Modele a copier:
// {
//   slug: 'mon-projet', // lien de la page: #/projects/mon-projet
//   title: 'MON PROJET',
//   titleEn: 'MY PROJECT', // optionnel: titre en anglais
//   image: '/assets/img/mon-projet.jpg', // image principale
//   gallery: [
//     '/assets/img/mon-projet.jpg',
//     '/assets/img/mon-projet-2.jpg',
//   ], // optionnel: images affichees dans la page detail
// },
//
// Important:
// - Le slug doit etre unique.
// - Les images doivent etre placees dans assets/img.
// - Le chemin commence toujours par /assets/img/.
export const projects = [
  {
    slug: 'impact-4-life',
    title: 'IMPACT 4 LIFE',
    image: '/assets/img/pr_1.jpg',
    gallery: ['/assets/img/pr_1.jpg', '/assets/img/pr5_5.jpeg', '/assets/img/pr5_6.jpeg'],
  },
  {
    slug: 'cocoa-life',
    title: 'COCOA LIFE',
    image: '/assets/img/pr_2.jpeg',
    gallery: ['/assets/img/cocoalife1.jpeg', '/assets/img/cocoalife2.jpeg', '/assets/img/cocoalife3.jpeg', '/assets/img/cocoalife4.jpeg'],
  },
  {
    slug: 'swedd-genre',
    title: 'SWEDD GENRE',
    image: '/assets/img/pr_3.jpg',
    gallery: ['/assets/img/pr_3.jpg', '/assets/img/baniere_swedd.jpg', '/assets/img/baniere_sweed_2.jpg'],
  },
  {
    slug: 'pmndpe',
    title: 'PMNDPE',
    image: '/assets/img/pr_4.jpg',
    gallery: ['/assets/img/pr_4.jpg', '/assets/img/pr4_1.jpg', '/assets/img/pr4_2.jpg', '/assets/img/pr4_3.jpg'],
  },
  {
    slug: 'padfa',
    title: 'PADFA',
    image: '/assets/img/proj-6.jpg',
    gallery: ['/assets/img/proj-6.jpg', '/assets/img/pr_6.jpg'],
  },
  { slug: 'plfzn', title: 'PLFZN', image: '/assets/img/proj-7.jpg', gallery: ['/assets/img/proj-7.jpg'] },
  {
    slug: 'mtn',
    title: 'MTN',
    image: '/assets/img/pr_7.jpg',
    gallery: ['/assets/img/pr_7.jpg', '/assets/img/pr_mtn.jpg'],
  },
  {
    slug: 'flac',
    title: 'FLAC',
    image: '/assets/img/proj-8.jpg',
    gallery: ['/assets/img/flac1.jpeg', '/assets/img/flac2.jpeg', '/assets/img/flac3.jpeg', '/assets/img/flac4.jpeg'],
  },
  { slug: 'clef', title: 'CLEF', image: '/assets/img/proj-9.jpg', gallery: ['/assets/img/proj-9.jpg'] },
  { slug: 'chiepo', title: 'CHIEPO', image: '/assets/img/proj-10.jpg', gallery: ['/assets/img/proj-10.jpg'] },
  { slug: 'gfc', title: 'GFC', image: '/assets/img/proj-11.jpg', gallery: ['/assets/img/proj-11.jpg'] },
  {
    slug: 'swedd-appui-alimentaire',
    title: 'SWEDD Appui Alimentaire',
    titleEn: 'SWEDD Food Support',
    image: '/assets/img/proj-12.jpg',
    gallery: ['/assets/img/proj-12.jpg'],
  },
  { slug: 'promis', title: 'PROMIS', image: '/assets/img/proj-13.jpg', gallery: ['/assets/img/proj-13.jpg'] },
  {
    slug: 'transition-carbone',
    title: 'TRANSITION CARBONE',
    image: '/assets/img/proj-14.jpg',
    gallery: ['/assets/img/proj-14.jpg'],
  },
  {
    slug: 'genre-et-fistules',
    title: 'GENRE ET FISTULES',
    titleEn: 'Gender and Fistula',
    image: '/assets/img/proj-15.jpg',
    gallery: ['/assets/img/proj-15.jpg'],
  },
];
