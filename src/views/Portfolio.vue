<template>
  <div class="page">
    <h1 class="page__caption">Portfolio<span>channel</span></h1>

    <div
      class="portfolio"
      :style="{
        'background-image':
          'url(' +
          require('../assets/images/portfolio/bg/' + selected.name + '.jpg') +
          ')',
      }"
    >
      <div class="info-open" v-show="!info" @click="info = true">i</div>
      <div class="info" v-show="info">
        <div class="info__btn" @click="info = false"></div>
        <h3 class="info__name">{{ selected.name }}</h3>
        <ul class="info__list" v-if="language === 'ru'">
          <li v-for="item in selected.description.ru" :key="item.index">
            {{ item }};
          </li>
        </ul>
        <ul class="info__list" v-else>
          <li v-for="item in selected.description.en" :key="item.index">
            {{ item }};
          </li>
        </ul>
        <a :href="selected.link" class="info__link" target="_blank">
          {{ "portfolioPageLink" | localize }}
        </a>
      </div>
      <carousel
        class="carousel"
        :perPage="4"
        :paginationEnabled="false"
        :navigationEnabled="true"
      >
        <slide
          class="carousel__slide"
          v-for="project in portfolio"
          :key="project.index"
          ><img
            @click="selectProject(project.name)"
            :src="
              require('../assets/images/portfolio/slide/' +
                project.name +
                '.jpg')
            "
            :alt="project.name"
            class="carousel__img"
        /></slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },
  metaInfo: {
    title: "Portfolio",
  },
  data() {
    return {
      selected: null,
      info: false,
    };
  },
  computed: {
    language() {
      return this.$store.getters.getLanguage;
    },
    portfolio() {
      return this.$store.getters.getPortfolio;
    },
  },
  methods: {
    selectProject(name) {
      this.selected = this.portfolio.find((project) => project.name === name);
    },
  },
  created() {
    this.selectProject("Thread-Master");
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
  background-position: center -50px;
  background-size: cover;
  padding: 25px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 150px;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
.info-open,
.info {
  position: absolute;
  top: 40px;
  left: 40px;
  text-align: center;
  box-sizing: border-box;
  background-color: #2a2b2f;
  border: 2px solid #1e1f23;
  border-radius: 15px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}
.info {
  width: 275px;
  padding: 10px;
  transition-duration: 0.5s;

  &__name {
    font-size: 20px;
    color: rgba(255, 255, 255, 1);
    margin-bottom: 10px;
  }
  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;
    margin-bottom: 15px;

    & li {
      font-size: 14px;
      font-weight: 300;
      color: rgba(255, 255, 255, 0.5);
      margin-bottom: 5px;
    }
  }
  &__link {
    display: inline-block;
    min-width: 90px;
    box-sizing: border-box;
    padding: 8px 20px;
    background-color: #2196f3;
    border-radius: 20px;
    font-size: 16px;
    color: #fff;
    text-decoration: none;
  }
  &__btn {
    position: absolute;
    top: 2px;
    right: 2px;
    width: 20px;
    height: 20px;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 100%;
      height: 2px;
      background-color: #2196f3;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}
.info-open {
  width: 24px;
  height: 24px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
  color: #2196f3;
  cursor: pointer;
  box-shadow: 0 0 5px 0px #2196f3;
  animation: info 2s linear infinite;
}
.carousel {
  position: absolute;
  left: 50px;
  right: 50px;
  bottom: 25px;

  &__img {
    display: block;
    width: 100px;
    margin: 0 auto;
    border: 1px solid #fff;
    cursor: pointer;
  }
}

@keyframes info {
  to {
    box-shadow: 0 0 15px 1px #2196f3;
  }
}
</style>