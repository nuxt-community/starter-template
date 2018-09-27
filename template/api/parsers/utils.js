export const parseImage = (entry, useJPG = true) => {
  if (!entry || !entry.fields || !entry.fields.file || !entry.fields.title)
    return null
  const src = entry.fields.file.url + (useJPG ? '?fm=jpg&q=80' : '')
  const alt = entry.fields.title
  const size = entry.fields.file.details.image
  size.height = size.height / 2
  size.width = size.width / 2
  return { src, alt, size }
}

export const parseLink = (entry, useJPG = true) => {
  if (!entry || !entry.fields) return null
  const { title, url, target } = entry.fields
  const image = parseImage(entry.fields.image, useJPG)
  return { title, url, image, target }
}
