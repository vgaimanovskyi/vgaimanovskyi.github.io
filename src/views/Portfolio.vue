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
        <ul class="info__list">
          <li v-for="item in selected.description" :key="item.index">
            {{ item }};
          </li>
        </ul>
        <a :href="selected.link" class="info__link" target="_blank">Перейти</a>
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
      portfolio: [
        {
          name: "Thread-Master",
          link: "https://vgaimanovskyi.github.io/thread-master/",
          description: [
            "Сайт реализован как SPA на Vue JS",
            "Сделан адаптив и кроссбраузерность (IE11)",
            "Контент хранится на Firebase",
            "Использована SVG-анимация",
          ],
        },
        {
          name: "SpaceX",
          link: "https://vgaimanovskyi.github.io/project/index.html",
          description: [
            "Реализован на Vue JS",
            "Сделан адаптив и кроссбраузерность",
            "Использована анимация",
          ],
        },
        {
          name: "CBD",
          link: "https://vgaimanovskyi.github.io/47-Exam/index.html",
          description: [
            "Landing page",
            "Написан по БЭМ",
            "Сделан адаптив и кроссбраузерность",
            "Использован jQuery",
          ],
        },
        {
          name: "Daisy",
          link: "https://vgaimanovskyi.github.io/practice-Daisy/index.html",
          description: [
            "Landing page",
            "Написан по БЭМ",
            "Сделан адаптив и кроссбраузерность",
          ],
        },
        {
          name: "Design-LAB",
          link: "https://vgaimanovskyi.github.io/15-2-Homework/index.html",
          description: [
            "Landing page",
            "Написан по БЭМ",
            "Сделан адаптив и кроссбраузерность",
          ],
        },
        {
          name: "BHROMAON",
          link: "https://vgaimanovskyi.github.io/21-1-Homework/dist/index.html",
          description: [
            "Landing page",
            "Написан по БЭМ",
            "Сделан адаптив и кроссбраузерность",
          ],
        },
        {
          name: "Monticello",
          link: "https://vgaimanovskyi.github.io/36-exam/index.html",
          description: [
            "Landing page",
            "Написан по БЭМ",
            "Сделан адаптив и кроссбраузерность",
            "Использован jQuery",
          ],
        },
        {
          name: "Cahee",
          link: "https://vgaimanovskyi.github.io/13-1-Homework/index.html",
          description: [
            "Landing page",
            "Написан по БЭМ",
            "Сделан адаптив и кроссбраузерность",
          ],
        },
      ],
      selected: {
        name: "Thread-Master",
        link: "https://vgaimanovskyi.github.io/thread-master/",
        description: [
          "Сайт реализован как SPA на Vue JS",
          "Сделан адаптив и кроссбраузерность (IE11)",
          "Контент хранится на Firebase",
          "Использована SVG-анимация",
        ],
      },
      info: false,
    };
  },
  methods: {
    selectProject(name) {
      this.selected = this.portfolio.find((project) => project.name === name);
    },
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
  background-position: center;
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
  left: 50%;
  bottom: 25px;
  transform: translateX(-50%);

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