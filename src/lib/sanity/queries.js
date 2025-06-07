export const LANDING_PROJECTS = `
* [_type == 'project'] | order(_createdAt desc) {
      title,
      "slug": slug.current,
      description,
      mainImage,
      outcomes,
      technologies,
      liveUrl
} [0..5]`;
export const PROJECT_QUERY = `
* [_type == 'project' && slug.current == $slug] {
      title,
      "slug": slug.current,
      description,
      mainImage,
      metaTitle,
      metaDescription,
      body,
      outcomes,
      technologies,
      liveUrl
}[0]`;

export const CATEGORIES_QUERY = `
* [_type == 'category'] {
      title,
      "slug": slug.current,
}`;

export const RECENT_POSTS = `
* [_type == 'post'] | order(_createdAt desc) {
      title,
      "slug": slug.current,
      description,
      "category": {
            "slug": categories[0]->slug.current,
            "title": categories[0]->title
      },
      mainImage,
      readTime,
      author,
      publishedAt
}[0..5]`;

export const POSTS_IN_CATEGORY = `
* [_type == 'post' && categories[0]->slug.current == $category] | order(_createdAt desc) {
      title,
      "slug": slug.current,
      description,
      "category": {
            "slug": categories[0]->slug.current,
            "title": categories[0]->title
      },
      mainImage,
      readTime,
      author,
      publishedAt
}`;

export const SINGLE_POST = `
* [_type == 'post' && slug.current == $slug] {
      title,
      "slug": slug.current,
      description,
      "category": {
            "slug": categories[0]->slug.current,
            "title": categories[0]->title
      },
      mainImage,
      metaTitle,
      metaDescription,
      body
}[0]`;

export const CATEGORY = `
* [_type == 'category' && slug.current == $category] {
      title,
      "slug": slug.current,
      description,
      metaTitle,
      metaDescription
}[0]`;
