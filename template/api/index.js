import { createClient } from 'contentful'

const contentful = createClient({
  space: "{{ contentfulSpaceId }}",
  accessToken: "{{ contentfulApiKey }}"
})

const findAllById = (entries, id) =>
  entries.items.filter(e => e.sys.contentType.sys.id === id)
const findById = (entries, id) =>
  entries.items.find(e => e.sys.contentType.sys.id === id)

export default function(locale) {
  return contentful.getEntries({ locale, include: 4 })
  .then(entries => ({}))
}
