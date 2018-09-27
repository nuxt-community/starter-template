const defaultLocale = 'en'
export default function({ isHMR, app, store, route, params, _, redirect }) {
  if (isHMR) return // ignore if called from hot module replacement

  const lang = params.lang || route.fullPath.split('/')[1]

  // If the lang is not in url or if it's not yet supported
  if (!store.state.locales.includes(lang)) {
    // Resolve first from localStorage
    if (app.i18n.locale) return redirect('/' + app.i18n.locale + route.fullPath)

    // Resolve from browser language
    let locale = defaultLocale
    if (window && window.navigator && window.navigator.language) {
      const [browserLang] = window.navigator.language.split('-')
      if (store.state.locales.includes(browserLang)) locale = browserLang
    }

    return redirect('/' + locale + route.fullPath)
  }

  store.commit('setLocale', lang) // set store
  app.i18n.locale = store.state.locale
}
