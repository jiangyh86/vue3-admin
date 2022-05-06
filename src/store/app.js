import { LANG } from '@/constant'
import { getItem, setItem } from '@/utils/storage'
export default {
  namespaced: true,
  state: () => ({
    ...
    language: getItem(LANG) || 'zh'
  }),
  mutations: {
    ...
    /**
     * 设置国际化
     */
    setLanguage(state, lang) {
      setItem(LANG, lang)
      state.language = lang
    },
    /**
* 为指定的 tag 修改 title
*/
changeTagsView(state, { index, tag }) {
  state.tagsViewList[index] = tag
  setItem(TAGS_VIEW, state.tagsViewList)
}
  },
  actions: {}
}
