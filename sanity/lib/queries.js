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
