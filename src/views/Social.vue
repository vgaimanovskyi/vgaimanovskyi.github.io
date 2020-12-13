<template>
  <div class="page">
    <h1 class="page__caption">Social<span>channel</span></h1>

    <div class="game">
      <div class="box">
        <img class="coin" src="../assets/images/social/coin.gif" alt="coin" />
      </div>
      <div class="mario"></div>
      <div class="social">
        <a
          href="https://www.linkedin.com/in/vadym-haimanovskyi/"
          target="_blank"
          class="social__link"
        ></a>
        <a
          href="https://github.com/vgaimanovskyi"
          target="_blank"
          class="social__link"
        ></a>
        <a
          href="https://t.me/Vadym_Haimanovskyi"
          target="_blank"
          class="social__link"
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Social",
  },
};
</script>

<style lang="scss" scoped>
.game {
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/images/social/level.jpeg");
  background-position: center;
  background-size: cover;
}
.box {
  width: 50px;
  height: 50px;
  position: absolute;
  right: 100px;
  bottom: 250px;
  animation: boxMove 6s linear 1s infinite;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("~@/assets/images/social/box.png");
    background-position: center;
    background-size: cover;
  }
}
.coin {
  display: block;
  width: 100%;
  position: relative;
  animation: coinMove 6s linear 1s infinite;
}
.mario {
  position: absolute;
  left: -200px;
  bottom: 100px;
  width: 50px;
  height: 50px;
  background-image: url("~@/assets/images/social/mario.gif");
  background-position: center;
  background-size: contain;
  animation: marioMove 6s linear 1s infinite;
}
.social {
  position: absolute;
  left: 50%;
  bottom: 100px;
  transform: translateX(-50%);
  display: flex;

  &__link {
    display: block;
    width: 50px;
    height: 50px;
    background-position: center;
    background-size: contain;
    margin: 0 50px;
    animation: linkMove 0.8s linear forwards;

    &:nth-child(1) {
      animation-delay: 2.3s;
      background-image: url("~@/assets/images/social/svg/linkedin.svg");
    }
    &:nth-child(2) {
      animation-delay: 2.8s;
      background-image: url("~@/assets/images/social/svg/github.svg");
    }
    &:nth-child(3) {
      animation-delay: 3.3s;
      background-image: url("~@/assets/images/social/svg/telegram.svg");
    }
  }
}
@keyframes boxMove {
  48% {
    bottom: 250px;
  }
  50% {
    bottom: 260px;
  }
  55% {
    bottom: 250px;
  }
}
@keyframes coinMove {
  50% {
    transform: translateY(0);
  }
  55% {
    transform: translateY(-100%);
  }
  70% {
    transform: translateY(-100%) scale(1);
  }
  80% {
    transform: translateY(-100%) scale(0);
  }
  100% {
    transform: translateY(-100%) scale(0);
  }
}
@keyframes marioMove {
  45% {
    bottom: 100px;
  }
  48% {
    bottom: 200px;
  }
  55% {
    bottom: 100px;
    background-image: url("~@/assets/images/social/mario-jump.png");
  }
  60% {
    background-image: url("~@/assets/images/social/mario.gif");
  }
  100% {
    transform: translateX(2000px);
  }
}
@keyframes linkMove {
  to {
    transform: translateY(-250px) rotateX(360deg * 4);
  }
}
</style>