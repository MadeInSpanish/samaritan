const unsplash = data => ({
  id: data.id,
  url: data.urls.regular,
  download: data.links.download,
  small: data.urls.thumb,
})

const splashbase = data => ({
  id: data.id,
  url: data.url,
  download: data.large_url,
  small: data.url,
})

const pixabay = data => ({
  id: data.id,
  url: data.webformatURL,
  download: data.pageURL,
  small: data.previewURL,
})

  // NOT USED YET ========= REMOVE THIS WHEN API IS APPROVED
const pexels = data => ({
  // NOT USED YET ========= REMOVE THIS WHEN API IS APPROVED
  id: data.url,
  // NOT USED YET ========= REMOVE THIS WHEN API IS APPROVED
  url: data.src.large,
  // NOT USED YET ========= REMOVE THIS WHEN API IS APPROVED
  download: data.src.original,
  // NOT USED YET ========= REMOVE THIS WHEN API IS APPROVED
  small: data.src.small,
})

module.exports = {
  unsplash: unsplash,
  pixabay: pixabay,
  splashbase: splashbase,
}
