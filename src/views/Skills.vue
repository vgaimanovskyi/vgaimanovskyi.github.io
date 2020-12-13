<template>
  <div class="page">
    <h1 class="page__caption">Skills<span>channel</span></h1>

    <div class="table">
      <div class="row">
        <div class="col-3 move" v-for="skill in skills" :key="skill.index">
          <div class="card">
            <div class="card__front"></div>
            <div class="card__back">
              <img
                class="skill"
                :src="require('../assets/images/skills/svg/' + skill + '.svg')"
                :alt="skill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Skills",
  },
  data() {
    return {
      skills: [
        "html",
        "css",
        "sass",
        "javascript",
        "jquery",
        "vuejs",
        "bootstrap",
        "webpack",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap-4-grid/scss/grid";

$delay: 2s;

.table {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: calc(100% - 50px);
  width: calc(100% - 50px);
  padding: 200px 15px 15px 15px;
  background-color: green;
  background-image: url("~@/assets/images/bg-tv.png");
  border: 10px solid rgb(49, 5, 5);
  border-radius: 120px;
  box-sizing: border-box;
}
.row {
  animation: rowTop 0.5s linear $delay + 3.4s forwards;
}
.move {
  animation: move 0.3s linear forwards;

  &:nth-child(1) {
    animation-delay: $delay;
    transform: translate(150%, -100%);
  }
  &:nth-child(2) {
    animation-delay: $delay + 0.3s;
    transform: translate(50%, -100%);
  }
  &:nth-child(3) {
    animation-delay: $delay + 0.6s;
    transform: translate(-50%, -100%);
  }
  &:nth-child(4) {
    animation-delay: $delay + 0.9s;
    transform: translate(-150%, -100%);
  }
  &:nth-child(5) {
    animation-delay: $delay + 1.2s;
    transform: translate(150%, -200%);
  }
  &:nth-child(6) {
    animation-delay: $delay + 1.5s;
    transform: translate(50%, -200%);
  }
  &:nth-child(7) {
    animation-delay: $delay + 1.8s;
    transform: translate(-50%, -200%);
  }
  &:nth-child(8) {
    animation-delay: $delay + 2.1s;
    transform: translate(-150%, -200%);
  }
}
.card {
  width: 130px;
  height: 180px;
  position: relative;
  perspective: 1000px;
  margin: 0 auto 15px auto;
  animation: cardRotate 1s ease $delay + 2.2s;

  &__front,
  &__back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #000;
    backface-visibility: hidden;
    box-sizing: border-box;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-delay: $delay + 2.2s;
    animation-fill-mode: forwards;
  }
  &__front {
    background-image: url("~@/assets/images/skills/rubashka.jpg");
    background-size: cover;
    background-position: center;
    animation-name: frontRotate;
  }
  &__back {
    padding: 10px;
    background-image: linear-gradient(
      45deg,
      rgba(133, 133, 133, 1) 0%,
      rgba(170, 180, 181, 1) 15%,
      rgba(235, 241, 254, 1) 50%,
      rgba(170, 180, 181, 1) 85%,
      rgba(133, 133, 133, 1) 100%
    );
    transform: rotateY(180deg);
    position: relative;
    display: flex;
    align-items: center;
    animation-name: backRotate;
  }
}
.skill {
  display: block;
  width: 100%;
}

@keyframes move {
  to {
    transform: translate(0, 0);
  }
}
@keyframes cardRotate {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-40px, -20px);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes frontRotate {
  to {
    transform: rotateY(180deg);
  }
}
@keyframes backRotate {
  to {
    transform: rotateY(360deg);
  }
}
@keyframes rowTop {
  to {
    transform: translateY(-80px);
  }
}
</style>