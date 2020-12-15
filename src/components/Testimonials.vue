<template>
  <div layout="column center u4">
    <div layout="column" layout-lg="row" class="testimonials-wrap">
      <div
        v-for="t in testimonials"
        :key="t.name"
        flex
        layout="column u20"
        class="testimonial"
      >
        <div flex class="testimonial-text">
          <i>“{{ t.text }}”</i>
        </div>
        <div class="testimonial-sub" layout="row u4">
          <div
            class="testimonial-img"
            :style="{ backgroundImage: `url(${t.photo})` }"
          />
          <div flex layout="column middle">
            <span class="testimonial-name">{{ t.name }}</span>
            <span class="testimonial-origin">{{ t.institute }}</span>
            <a
              v-if="t.link"
              :href="t.link.url"
              _target="blank"
              class="testimonial-link"
              >{{ t.link.text }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonials",
  data() {
    return {
      testimonials: [
        {
          name: "Scott Aaronson",
          institute: "University of Texas at Austin",
          photo: require("~/imgs/faces/scott_aaronson.jpg"),
          link: {
            text: "Shtetl-Optimized Blog - scottaaronson.com",
            url: "https://www.scottaaronson.com/blog/?p=3597",
          },
          text:
            "I tried it and it’s excellent, and best of all clear: unlike virtually every other “quantum game” I’ve tried, it took me only a minute to figure this one out.",
        },
        {
          name: "James Wootton",
          institute: "IBM Research",
          photo: require("~/imgs/faces/james_wootton.jpg"),
          link: {
            text: "Twitter",
            url: "https://twitter.com/decodoku/status/1287758921654992899",
          },
          text:
            "I”ve been playing around with the new “Quantum Game with Photons”. So far it feels like all the fun parts of doing undergraduate physics experiments, while also being a really nice puzzle game!",
        },
        {
          name: "Monika Schleier-Smith",
          institute: "Stanford University",
          photo: require("~/imgs/faces/monika_schleier_smith.jpg"),
          text:
            "Even when it becomes possible to teach my class in person again, your website could help me scale to a larger class size than is possible when I require equipment for hands-on demonstrations.",
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
a {
  color: #eab5ff;
  text-decoration: none;
}
a:hover {
  color: white;
}

.testimonials-wrap {
  text-align: left;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
}

.testimonial {
  padding: 20px 20px;
}

.testimonial-img {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-size: cover;
  background-position: 50% 50%;
}

.testimonial-name {
  display: block;
  text-align: left;
}

.testimonial-origin {
  display: block;
  font-weight: bold;
}

a.testimonial-link {
  color: white;
  text-decoration: underline;
  font-size: 0.8rem;
}

.extra-text {
  width: 35%;
  line-height: 1.5;
}
</style>
