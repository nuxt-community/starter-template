import Vuex from 'vuex'
import fetchContent from '../api'

export default function() {
  return new Vuex.Store({
    state: {
      locales: ['en'],
      locale: 'en',
      content: {}
    },

    mutations: {
      setLocale(state, locale) {
        if (state.locales.indexOf(locale) === -1) return
        state.locale = locale
      },
      setContent(state, content) {
        state.content = content
      }
    },

    actions: {
      fetchContent({ state, commit }) {
        return fetchContent(state.locale).then(content =>
          commit('setContent', content)
        )
      }
    }
  })
}
