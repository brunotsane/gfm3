# Content Editing Guide

This folder is the main place to edit website content.

## Files

- `projects.js`: add or edit GFM3 projects.
- `activities.js`: add or edit news, activities, and articles.
- `helpers.js`: shared content helpers used by the app. Most editors should not need this file.
- `index.js`: exports the content files to the React app.

## Add a Project

Add a new object to `projects.js`:

```js
{
  slug: 'my-project',
  title: 'My Project',
  titleEn: 'My Project', // optional English title
  image: '/assets/img/my-project.jpg',
  gallery: [
    '/assets/img/my-project.jpg',
    '/assets/img/my-project-2.jpg',
  ],
}
```

The project URL will be `#/projects/my-project`.

## Add an Activity

Add a new object to `activities.js`:

```js
{
  slug: 'actualite-16',
  title: 'Titre en francais',
  titleEn: 'English title', // optional
  image: '/assets/img/activity.jpg',
  date: '20 juin 2026',
  dateEn: 'June 20, 2026', // optional
  excerpt: 'Court resume en francais.',
  excerptEn: 'Short English summary.', // optional
  gallery: [
    '/assets/img/activity.jpg',
    '/assets/img/activity-2.jpg',
  ],
}
```

The activity URL will be `#/news/actualite-16`.

Keep every `slug` unique. Put images in `assets/img/`, then reference them with `/assets/img/file-name.jpg`.
