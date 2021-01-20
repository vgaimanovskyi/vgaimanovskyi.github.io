<template>
  <div id="app">
    <Clock></Clock>
    <div
      class="tv-box"
      :style="{
        transform: 'translate(-50%, -' + translateY + '%) scale(' + scale + ')',
      }"
    >
      <!--  -->
      <div class="antenna"></div>
      <ol class="sticky">
        <li>
          <span :class="{ done: sticky.powerDone }">
            {{ "stickyPower" | localize }}
          </span>
        </li>
        <li>
          <span :class="{ done: sticky.channelDone }">
            {{ "stickyChannel" | localize }}
          </span>
        </li>
        <li>
          <span :class="{ done: sticky.valumeDone }">
            {{ "stickyValume" | localize }}
          </span>
        </li>
        <li>
          <span :class="{ done: sticky.languageDone }">
            {{ "stickyLanguage" | localize }}
          </span>
        </li>
      </ol>
      <main>
        <div class="error-noise">
          <div
            class="screen"
            :class="{
              'screen--on': power,
              'error-off-1': valume > 0 && valume < 10,
              'error-off-2': valume > 1 && valume < 9,
              'error-off-3': valume > 2 && valume < 8,
              'error-off-4': valume > 3 && valume < 7,
              'error-off-5': valume > 4 && valume < 6,
            }"
          >
            <div class="tv-box-content">
              <router-view></router-view>
              <div class="text-line" v-show="showTextLine && power">
                <span class="text-line__text">
                  {{ "textLine" | localize }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <aside>
        <div class="speaker"></div>

        <div class="controls">
          <div
            class="switch-lang"
            :class="{
              'switch-lang--ru': isRuLang,
              'switch-lang--en': !isRuLang,
            }"
          >
            <label class="switch">
              <input type="checkbox" v-model="isRuLang" @change="langToggle" />
              <div class="switch__center"></div>
            </label>
            <div class="switch-lang__ru">ru</div>
            <div class="switch-lang__en">en</div>
          </div>
          <nav class="channel">
            <router-link
              tag="button"
              data-index="1"
              class="channel__btn"
              active-class="active"
              exact
              to="/about"
              :disabled="!power"
              >about</router-link
            >
            <router-link
              tag="button"
              data-index="2"
              class="channel__btn"
              active-class="active"
              exact
              to="/skills"
              :disabled="!power"
              >Skills</router-link
            >
            <router-link
              tag="button"
              data-index="3"
              class="channel__btn"
              active-class="active"
              exact
              to="/portfolio"
              :disabled="!power"
              >portfolio</router-link
            >
            <router-link
              tag="button"
              data-index="4"
              class="channel__btn"
              active-class="active"
              exact
              to="/social"
              :disabled="!power"
              >social</router-link
            >
            <router-link
              tag="button"
              data-index="5"
              class="channel__btn"
              active-class="active"
              exact
              to="/contact"
              :disabled="!power"
              >contact</router-link
            >
          </nav>

          <div class="volume">
            <input type="range" min="0" max="10" v-model="valume" />
          </div>

          <div
            class="power"
            :class="{ 'power--off': !power, 'power--on': power }"
          >
            <button
              type="button"
              class="power__btn"
              @click="powerToggle()"
            ></button>
          </div>
        </div>
        <!-- end .controls -->
      </aside>
      <footer></footer>
    </div>
  </div>
  <!-- end #app -->
</template>
<script>
import Clock from "./components/clock.vue";

export default {
  components: { Clock },
  data() {
    return {
      power: false,
      valume: 0,
      isRuLang: true,
      showTextLine: false,
      sticky: {
        powerDone: false,
        channelDone: false,
        valumeDone: false,
        languageDone: false,
      },
    };
  },
  computed: {
    scale() {
      // if (window.innerWidth > 1366) {
      //   return 1;
      // } else if (window.innerWidth >= 992) {
      //   return 0.7;
      // } else if (window.innerWidth >= 768) {
      //   return 0.6;
      // } else if (window.innerWidth >= 620) {
      //   return 0.5;
      // } else if (window.innerWidth >= 500) {
      //   return 0.4;
      // } else if (window.innerWidth >= 370) {
      //   return 0.3;
      // } else {
      //   return 0.25;
      // }
      if (window.innerHeight > 900) {
        return 1;
      } else if (window.innerHeight > 768) {
        return 0.85;
      } else if (window.innerHeight >= 600) {
        return 0.65;
      } else if (window.innerWidth >= 620) {
        return 0.5;
      } else if (window.innerWidth >= 500) {
        return 0.4;
      } else if (window.innerWidth >= 370) {
        return 0.3;
      } else {
        return 0.25;
      }
    },
    translateY() {
      if (window.innerWidth >= 620) {
        return 4;
      } else {
        return 2;
      }
    },
    language() {
      return this.$store.getters.getLanguage;
    },
  },
  mounted() {
    this.isRuLang = this.language == "ru";

    setInterval(() => {
      this.showTextLine = !this.showTextLine;
    }, 30000);
  },
  methods: {
    powerToggle() {
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
      this.power = !this.power;
      this.sticky.powerDone = true;
    },
    langToggle() {
      this.$store.commit("langToggle", this.isRuLang);
      this.sticky.languageDone = true;
    },
  },
  watch: {
    $route(to) {
      if (to !== "/") {
        this.sticky.channelDone = true;
      }
    },
    valume() {
      this.sticky.valumeDone = this.valume == 5;
    },
  },
  created() {
    console.log(innerHeight);
  },
};
</script>
<style lang="scss">
@import "./assets/scss/style.scss";
</style>
