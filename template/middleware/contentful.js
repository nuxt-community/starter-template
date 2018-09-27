export default function(context) {
  if (!process.client)
    return context.store.dispatch('fetchContent', context.params.lang)
}
