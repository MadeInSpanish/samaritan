const unsplash = data => ({
  id: data.id,
  url: data.urls.regular,
  download: data.links.download,
  small: data.urls.thumb,
})

const splashbase = () => ({
  id: element.id,
  url: element.url,
  download: element.large_url,
  small: element.url,
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
  id: element.url,
  // NOT USED YET ========= REMOVE THIS WHEN API IS APPROVED
  url: element.src.large,
  // NOT USED YET ========= REMOVE THIS WHEN API IS APPROVED
  download: element.src.original,
  // NOT USED YET ========= REMOVE THIS WHEN API IS APPROVED
  small: element.src.small,
})

module.exports = {
  unsplash: unsplash,
  pixabay: pixabay,
  splashbase: splashbase,
}
