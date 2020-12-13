<template>
  <div class="page">
    <h1 class="page__caption">About<span>channel</span></h1>

    <div class="about">
      <div class="row">
        <div class="col-8">
          <div class="text">
            <h6>
              <span class="animate animate-1">
                {{ "aboutPageHello" | localize }}
              </span>
            </h6>
            <br />
            <div class="braces colored">
              <span class="animate animate-2">{</span>
            </div>
            <p>
              <span class="animate animate-3">
                {{ "aboutPageP1" | localize }}
                <span class="colored">&#60; web-CV &#62;</span>.
              </span>
            </p>
            <p>
              <span class="animate animate-4">
                {{ "aboutPageP2-1" | localize }}
                <span class="important">
                  {{ "aboutPageP2-name" | localize }}
                </span>
                {{ "aboutPageP2-2" | localize }}
                <span class="important">Front-end Developer</span>.
              </span>
            </p>
            <div class="braces colored">
              <span class="animate animate-5">}, {</span>
            </div>
            <p>
              <span class="animate animate-6">
                {{ "aboutPageP3-1" | localize }}
                <a href="https://beetroot.academy/" target="_blank">
                  Beetroot Academy
                </a>
                {{ "aboutPageP3-2" | localize }}
              </span>
              <span class="animate animate-7">
                {{ "aboutPageP3-3" | localize }}
                <span class="important">{{ "aboutPageP3-4" | localize }}</span>
                {{ "aboutPageP3-5" | localize }}
                <span class="important">{{ "aboutPageP3-6" | localize }}</span>
                .
              </span>
              <span class="animate animate-8">
                {{ "aboutPageP3-7" | localize }}
              </span>
              <span class="animate animate-9">
                {{ "aboutPageP3-8" | localize }}.
              </span>
            </p>
            <div class="braces colored">
              <span class="animate animate-10">}, {</span>
            </div>
            <p>
              <span class="animate animate-11">
                {{ "aboutPageP4-1" | localize }}
                <a
                  :href="language === 'ru' ? ruCV : enCV"
                  target="_blank"
                  class="colored"
                  >PDF</a
                >,
              </span>
              <span class="animate animate-12">
                {{ "aboutPageP4-2" | localize }}.
              </span>
            </p>
            <div class="braces colored">
              <span class="animate animate-13">}</span>
            </div>
          </div>
        </div>
        <div class="col-4">
          <img src="../assets/images/about/me.png" alt="me" class="about-img" />
        </div>
      </div>
    </div>
    <!-- end .about -->
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "About",
  },
  data() {
    return {
      ruCV:
        "https://drive.google.com/file/d/1hCy7YYqwSO6wYcIyOK05njGSE5ftlahd/view?usp=sharing",
      enCV:
        "https://drive.google.com/file/d/1hTu01SF6qtA1HkLINVhVpUSxXRmEihXL/view?usp=sharing",
    };
  },
  computed: {
    language() {
      return this.$store.getters.getLanguage;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap-4-grid/scss/grid";

.about {
  padding: 25px 25px 0 25px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-image: url("~@/assets/images/about/bg.png");
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  position: relative;
}
.about-img {
  display: block;
  width: 80%;
}
.row {
  flex-grow: 1;
}
.text {
  position: relative;
  z-index: 5;
  width: 100%;
  font-size: 18px;
  color: #fff;
  font-weight: 300;
  margin-top: 80px;

  h6 {
    font-size: inherit;
    color: inherit;
    font-weight: inherit;
  }
  p {
    font-size: inherit;
    font-weight: inherit;
    line-height: 160%;
    color: inherit;
    margin-left: 10px;
  }
  a {
    font-size: inherit;
    font-weight: inherit;
    color: #94ceb9;
  }
}
.animate {
  display: block;
  width: 0;
  overflow: hidden;
  white-space: nowrap;
  animation: typing 1s steps(30, end) forwards;

  @for $i from 1 through 13 {
    &-#{$i} {
      animation-delay: #{$i}s;
    }
  }
}
.braces {
  font-size: inherit;
}
.important {
  color: rgb(255, 203, 103);
}
.colored {
  color: rgb(0, 166, 255) !important;
}

@keyframes typing {
  to {
    width: 100%;
  }
}
</style>