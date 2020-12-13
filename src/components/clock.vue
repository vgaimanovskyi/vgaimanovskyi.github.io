<template>
  <div class="clock">
    <div class="hour" :style="{ transform: 'rotate(' + hour + 'deg)' }"></div>
    <div class="min" :style="{ transform: 'rotate(' + min + 'deg)' }"></div>
    <div class="sec" :style="{ transform: 'rotate(' + sec + 'deg)' }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      hour: null,
      min: null,
      sec: null,
    };
  },
  mounted() {
    setInterval(() => {
      this.date = new Date();
      this.clock();
    }, 1000);
  },
  methods: {
    clock() {
      const deg = 6;

      this.sec = this.date.getSeconds() * deg;
      this.min = this.date.getMinutes() * deg;
      this.hour = this.date.getHours() * 30 + this.date.getMinutes() / 2;
    },
  },
  created() {
    this.clock();
  },
};
</script>

<style lang="scss" scoped>
.clock {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  background-image: url("~@/assets/images/clock.png");
  background-position: center;
  background-size: cover;
  border: 10px solid #091921;
  border-radius: 50%;
  box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
    inset 0 -15px 15px rgba(255, 255, 255, 0.05), 0 15px 15px rgba(0, 0, 0, 0.3),
    inset 0 15px 15px rgba(0, 0, 0, 0.3);

  &::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #222;
    border-radius: 50%;
    z-index: 1;
  }
}
.hour,
.min,
.sec {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  &::before {
    content: "";
    display: block;
    height: 50%;
    border-radius: 6px;
  }
}
.hour {
  width: 60%;
  height: 60%;

  &::before {
    width: 8px;
    background-color: #000;
  }
}
.min {
  width: 85%;
  height: 85%;

  &::before {
    width: 4px;
    background-color: #222;
  }
}
.sec {
  width: 90%;
  height: 90%;

  &::before {
    width: 2px;
    background-color: red;
  }
}
</style>