<template>
  <div class="page">
    <h1 class="page__caption">Contact<span>channel</span></h1>
    <div class="contact" id="fild">
      <div class="space-ship"></div>
      <form
        action="../assets/php/mail.php"
        method="POST"
        class="form"
        @submit.prevent="submit"
      >
        <div class="row">
          <div class="col-6">
            <input
              :class="{ dirty: email.length }"
              type="email"
              name="email"
              id="email"
              v-model="email"
              minlength="7"
              maxlength="40"
              required
            />
            <label for="email">Email</label>
          </div>
          <div class="col-6">
            <input
              :class="{ dirty: name.length }"
              type="text"
              name="yourname"
              id="yourname"
              v-model="name"
              minlength="3"
              maxlength="40"
              required
            />
            <label for="yourname">{{ "contactPageName" | localize }}</label>
          </div>
          <div class="col-12">
            <textarea
              :class="{ dirty: text.length }"
              name="textarea"
              id="textarea"
              v-model="text"
              rows="10"
              minlength="3"
              maxlength="500"
              required
            ></textarea>
            <label for="textarea">{{ "contactPageTextarea" | localize }}</label>
          </div>
          <div class="col-12">
            <button type="submit">
              {{ "contactPageSubmit" | localize }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact",
  },
  data() {
    return {
      name: "",
      email: "",
      text: "",
    };
  },
  methods: {
    submit() {
      console.log(this.name);
      console.log(this.email);
      console.log(this.text);
      this.name = "";
      this.email = "";
      this.text = "";
    },
    stars() {
      const count = 100;
      const fild = document.getElementById("fild");
      let i = 0;

      while (i < count) {
        let star = document.createElement("i");
        let x = Math.floor(Math.random() * fild.clientWidth);
        let y = Math.floor(Math.random() * fild.clientHeight);
        let duration = Math.random() * 10;
        let size = Math.random() * 2;

        star.style.left = x + "px";
        star.style.top = y + "px";
        star.style.width = 1 + size + "px";
        star.style.height = 1 + size + "px";

        star.style.animationDuration = 1 + duration + "s";
        star.style.animationDelay = duration + "s";
        fild.appendChild(star);
        i++;
      }
    },
  },
  created() {
    setTimeout(() => {
      this.stars();
    }, 0);
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap-4-grid/scss/grid";

.contact {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  width: 80%;
  position: relative;
  z-index: 1;

  label {
    position: absolute;
    top: 30px;
    left: 20px;
    display: block;
    padding: 0 10px;
    font-size: 18px;
    line-height: 40px;
    color: #45f3ff;
    transition-duration: 0.3s;
    pointer-events: none;
  }
  input,
  textarea {
    display: block;
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #45f3ff;
    outline: none;
    font-size: 18px;
    color: #000;
    margin-top: 30px;

    &:focus,
    &.dirty {
      background-color: #45f3ff;
    }
    &:invalid.dirty {
      border-bottom-color: #ff6a45;
    }
    &:focus + label,
    &:valid + label,
    &.dirty + label {
      top: 0;
      left: 0;
      font-size: 14px;
    }
    &:invalid.dirty + label {
      color: #ff6a45;
    }
  }
  textarea {
    height: auto;
    resize: none;
  }
  button {
    padding: 7px 35px;
    background-color: #45f3ff;
    border: none;
    outline: none;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    color: #000;
    margin-top: 30px;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: darken(#45f3ff, 10%);
    }
  }
}

.space-ship {
  width: 100px;
  height: 100px;
  background-size: cover;
  position: absolute;
  // top: 50%;
  // left: 50%;
  background-image: url("~@/assets/images/contact/ship06.png");
  animation: spaceShipMoveReverse 12s linear infinite;

  &::before {
    display: block;
    content: "";
    width: 100%;
    height: 110%;
    background-image: url("~@/assets/images/contact/ship06a.png");
    background-size: cover;
    position: relative;
    transform: translate(-100%, -100%);
  }
  &::after {
    display: block;
    content: "";
    width: 20px;
    height: 25%;
    position: relative;
    border-top: 2px solid red;
    border-bottom: 2px solid red;
    transform: translate(-55px, -160px) rotate(45deg) skewX(-35deg);
    animation: starWarsFire 0.3s linear infinite;
  }
}

@keyframes spaceShipMoveReverse {
  0% {
    top: 20%;
    left: 200%;
    transform: scaleX(-1);
  }
  50% {
    top: 50%;
    left: -100%;
    transform: scaleX(-1);
  }
  51% {
    transform: scaleX(1);
  }
  100% {
    top: 80%;
    left: 200%;
    transform: scaleX(1);
  }
}
@keyframes starWarsFire {
  to {
    transform: translate(0, -100px) rotate(45deg) skewX(-35deg);
  }
}
</style>