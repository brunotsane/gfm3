export function findContentItem(items, slug) {
  return items.find((item) => item.slug === slug) || items[0];
}

export function localizeProject(project, t) {
  return {
    ...project,
    title: t.lang === 'en' && project.titleEn ? project.titleEn : project.title,
  };
}

export function localizeArticle(article, t) {
  return {
    ...article,
    title: t.lang === 'en' && article.titleEn ? article.titleEn : article.title,
    date: t.lang === 'en' && article.dateEn ? article.dateEn : article.date,
    excerpt: t.lang === 'en' && article.excerptEn ? article.excerptEn : article.excerpt,
  };
}

export function getGallery(item) {
  return item.gallery?.length ? item.gallery : [item.image];
}
