/**
 * Example of how you could re-use GROQ queries across different contexts with Javascript.
 * As your schema evolves, this pattern will be useful to keep your data in sync across all surfaces.
 */
export function getPostsQuery(extraFilter) {
  return  `*[
    _type == "post" &&
    defined(slug.current) &&
    publishedAt < now()
    ${extraFilter ? `&& ${extraFilter}` : ''}
  ] | order(publishedAt desc) {
    title,
    slug,
    image,
    publishedAt,
  }`
}

/**
 * You can also re-use parts of projections as fragments.
 * In this case, we're defining that, to render an author card, we need their name, slug & image.
 */
export const AUTHOR_CARD_FRAGMENT = `
name,
slug,
image,
`
/* Get all photos query and sort in ascending order */

export function getPhotosQuery() {
  return  `*[
    _type == "photo" 
  ] | order(createdAt asc) {
    title,
    slug,
    image,
    createdAt,
    description,
  }`
}

/* Get all Astro photos query and sort in ascending order */

export function getAstroPhotosQuery() {
  return  `*[
    _type == "photo" 
  && astro == true
  
  ] | order(createdAt asc) {
    title,
    slug,
    image,
    createdAt,
    description,
  }`
}

/* Get all fauna photos query and sort in ascending order */

export function getFaunaPhotosQuery() {
  return  `*[
    _type == "photo" 
  && fauna == true
  
  ] | order(createdAt asc) {
    title,
    slug,
    image,
    createdAt,
    description,
  }`
}

/* Get all flora photos query and sort in ascending order */

export function getFloraPhotosQuery() {
  return `*[
    _type == "photo" 
  && flora == true
  
  ] | order(createdAt asc) {
    title,
    slug,
    image,
    createdAt,
    description,
  }`
}

/* Get all scape photos query and sort in ascending order */

export function getScapePhotosQuery() {
  return `*[
    _type == "photo" 
  && landscapes == true
  
  ] | order(createdAt asc) {
    title,
    slug,
    image,
    createdAt,
    description,
  }`
}
