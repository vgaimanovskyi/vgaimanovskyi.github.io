import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: 'ru',
    portfolio: [
      {
        name: "Thread-Master",
        link: "https://vgaimanovskyi.github.io/thread-master/",
        description: {
          ru: [
            "Сайт реализован как MPA на Vue JS",
            "Сделан адаптив и кроссбраузерность (IE11)",
            "Контент хранится на Firebase",
            "Использована SVG-анимация",
          ],
          en: [
            "Built as MPA with Vue JS",
            "Adaptive and cross-browser compatible (IE11)",
            "Content is stored on Firebase",
            "SVG animation used",
          ],
        },
      },
      {
        name: "Weather-App",
        link: "https://my-nuxt-weather-app.herokuapp.com/",
        description: {
          ru: [
            "Сайт реализован как PWA на NuxtJS",
            "Сделан адаптив",
            "Использованы Vuetify и REST API",
          ],
          en: [
            "Built as PWA with NuxtJS",
            "Adaptive",
            "Used Vuetify and REST API",
          ],
        },
      },
      {
        name: "Rizor",
        link: "https://vgaimanovskyi.github.io/gsap-practice/",
        description: {
          ru: [
            "Landing page",
            "Написан по БЭМ",
            "Для анимации использован GSAP",
            "Сделан адаптив",
          ],
          en: [
            "Landing page",
            "Used BEM methodology",
            "Animated with GSAP",
            "Adaptive",
          ],
        },
      },
      {
        name: "SpaceX",
        link: "https://vgaimanovskyi.github.io/project/index.html",
        description: {
          ru: [
            "Реализован на Vue JS",
            "Сделан адаптив и кроссбраузерность",
            "Использована анимация",
          ],
          en: [
            "Built with Vue JS",
            "Adaptive and cross-browser compatible",
            "Animation used",
          ],
        },
      },
      {
        name: "CBD",
        link: "https://vgaimanovskyi.github.io/47-Exam/index.html",
        description: {
          ru: [
            "Landing page",
            "Написан по БЭМ",
            "Сделан адаптив и кроссбраузерность",
            "Использован jQuery",
          ],
          en: [
            "Landing page",
            "Used BEM methodology",
            "Adaptive and cross-browser compatible",
            "jQuery used",
          ],
        },
      },
      {
        name: "Daisy",
        link: "https://vgaimanovskyi.github.io/practice-Daisy/index.html",
        description: {
          ru: [
            "Landing page",
            "Написан по БЭМ",
            "Сделан адаптив и кроссбраузерность",
          ],
          en: [
            "Landing page",
            "Used BEM methodology",
            "Adaptive and cross-browser compatible",
          ],
        },
      },
      {
        name: "Design-LAB",
        link: "https://vgaimanovskyi.github.io/15-2-Homework/index.html",
        description: {
          ru: [
            "Landing page",
            "Написан по БЭМ",
            "Сделан адаптив и кроссбраузерность",
          ],
          en: [
            "Landing page",
            "Used BEM methodology",
            "Adaptive and cross-browser compatible",
          ],
        },
      },
      {
        name: "BHROMAON",
        link: "https://vgaimanovskyi.github.io/21-1-Homework/dist/index.html",
        description: {
          ru: [
            "Landing page",
            "Написан по БЭМ",
            "Сделан адаптив и кроссбраузерность",
          ],
          en: [
            "Landing page",
            "Used BEM methodology",
            "Adaptive and cross-browser compatible",
          ],
        },
      },
      {
        name: "Monticello",
        link: "https://vgaimanovskyi.github.io/36-exam/index.html",
        description: {
          ru: [
            "Landing page",
            "Написан по БЭМ",
            "Сделан адаптив и кроссбраузерность",
            "Использован jQuery",
          ],
          en: [
            "Landing page",
            "Used BEM methodology",
            "Adaptive and cross-browser compatible",
            "jQuery used",
          ],
        },
      },
      {
        name: "Cahee",
        link: "https://vgaimanovskyi.github.io/13-1-Homework/index.html",
        description: {
          ru: [
            "Landing page",
            "Написан по БЭМ",
            "Сделан адаптив и кроссбраузерность",
          ],
          en: [
            "Landing page",
            "Used BEM methodology",
            "Adaptive and cross-browser compatible",
          ],
        },
      },
    ],
  },
  mutations: {
    langToggle(state, payload) {
      state.language = payload ? 'ru' : 'en';
    }
  },
  getters: {
    getLanguage(state) {
      return state.language;
    },
    getPortfolio(state) {
      return state.portfolio;
    }
  },
})
