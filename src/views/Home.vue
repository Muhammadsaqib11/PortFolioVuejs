<template>
  <div>
    <v-carousel class="mainDiv">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        class="imageContain"
      >
      </v-carousel-item>
    </v-carousel>
    <v-row class="fill-height w-100 homeCardView" justify="space-between">
      <v-col md="3">
        <v-hover v-slot="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" max-width="600">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="
                    d-flex
                    transition-fast-in-fast-out
                    blue
                    darken-2
                    v-card--reveal
                    text-h2
                    white--text
                  "
                  style="height: 100%"
                ></div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-6" style="position: relative">
              <v-btn
                absolute
                color="blue"
                class="white--text"
                fab
                large
                right
                top
              >
                <v-icon>mdi-cart</v-icon>
              </v-btn>
              <div class="font-weight-light grey--text text-h6 mb-2">
                For the perfect meal
              </div>
              <h3 class="text-h4 font-weight-light blue--text mb-2">
                React Native Mobile Application
              </h3>
              <div class="font-weight-light text-h6 mb-2">
                Our Vintage kitchen utensils delight any chef.<br />
                Made of bamboo by hand
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col md="3">
        <v-hover v-slot="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" max-width="600">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="
                    d-flex
                    transition-fast-in-fast-out
                    green
                    darken-2
                    v-card--reveal
                    text-h2
                    white--text
                  "
                  style="height: 100%"
                ></div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-6" style="position: relative">
              <v-btn
                absolute
                color="green"
                class="white--text"
                fab
                large
                right
                top
              >
                <v-icon>mdi-cart</v-icon>
              </v-btn>
              <div class="font-weight-light grey--text text-h6 mb-2">
                For the perfect meal
              </div>
              <h3 class="text-h4 font-weight-light green--text mb-2">
                Vue Js Application
              </h3>
              <div class="font-weight-light text-h6 mb-2">
                Our Vintage kitchen utensils delight any chef.<br />
                Made of bamboo by hand
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col md="3">
        <v-hover v-slot="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" max-width="600">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="
                    d-flex
                    transition-fast-in-fast-out
                    orange
                    darken-2
                    v-card--reveal
                    text-h2
                    white--text
                  "
                  style="height: 100%"
                ></div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-6" style="position: relative">
              <v-btn
                absolute
                color="orange"
                class="white--text"
                fab
                large
                right
                top
              >
                <v-icon>mdi-cart</v-icon>
              </v-btn>
              <div class="font-weight-light grey--text text-h6 mb-2">
                For the perfect meal
              </div>
              <h3 class="text-h4 font-weight-light orange--text mb-2">
                React Js Web Application
              </h3>
              <div class="font-weight-light text-h6 mb-2">
                Our Vintage kitchen utensils delight any chef.<br />
                Made of bamboo by hand
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <template>
      <v-toolbar class="mt-2 footermainfooter" dark flat style="height: 280px">
        <v-row
          class="fill-height w-100 homeCardView pa-8"
          justify="space-between"
        >
          <v-col md="3" class="ContactInfo">
            <h1>Contact</h1>
            <div class="contactInfoNested">
              <h5>
                Village , Dhoke Mohka PO gagger Kalan Tehsil Dina Distict Jhelum
              </h5>
            </div>
            <div class="contactInfoNested">
              <h5>03125855132</h5>
            </div>
            <div class="contactInfoNested">
              <h5>Saqibbutt640@gmail.com</h5>
            </div>
            <div class="contactInfoNested">
              <h5>muhammadbinumaid@gmail.com</h5>
            </div>
          </v-col>
          <v-col md="3" class="ContactInfo">
            <h1>PROFESSIONAL SERVICES</h1>
            <div class="contactInfoNested">
              <h5>React Js Web Application</h5>
            </div>
            <div class="contactInfoNested">
              <h5>Vue Js Web Application</h5>
            </div>
            <div class="contactInfoNested">
              <h5>React Native Mobile Application</h5>
            </div>
            <div class="contactInfoNested">
              <h5>Node js With Express and Sequlize</h5>
            </div>

            <div class="contactInfoNested">
              <h5>IT & INFRASTRUCTURE SUPPORT</h5>
            </div>
            <div class="contactInfoNested">
              <h5>QA & TESTING</h5>
            </div>
          </v-col>
          <v-col md="3" class="ContactInfo">
            <h1>WHO WE ARE</h1>
            <div class="contactInfoNested">
              <h5>
                We serve to satisfy our clients in the best possible way here
                you will find a unique use of technology for challenging issues.
                Our aim is to provide service which is one of a kind. Our
                quality is our commitment towards our customers as we never stop
                until the job is done.
              </h5>
            </div>
          </v-col>
        </v-row>
        <v-btn elevation="2" v-on:click="emitMethod()">buss Event</v-btn>
      </v-toolbar>
    </template>
  </div>
</template>

<script>
import mdd from "../assets/mdd.png";
import ndma from "../assets/ndma.png";
import Mobile from "../assets/Mobile.png";
import CleanGreen from "../assets/CleanGreen.png";
import kalsoft from "../assets/kalsoft.png";
import urban from "../assets/urban.png";
import EventBus from "./Event-bus.js";

export default {
  data() {
    return {
      items: [
        {
          src: "https://40bbi51e931p2ilbi544mkcl-wpengine.netdna-ssl.com/wp-content/uploads/bb-plugin/cache/RXNT_Column_960px_Billing-LP-landscape.jpg  ",
        },

        {
          src: CleanGreen,
        },
        {
          src: ndma,
        },
        {
          src: mdd,
        },
        {
          src: Mobile,
        },
        {
          src: kalsoft,
        },
        {
          src: urban,
        },
      ],
      isLandscape: false,
    };
  },
  methods: {
    emitMethod() {
      EventBus.$emit("EVENT", "payLoad");
      this.$router.push("/Add");
    },
  },
};
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.homeCardView {
  padding: 4%;
}
.imageContain {
  display: block;
  width: 100%;
  height: 120vh !important;
  object-fit: cover;
}

.v-image__image--cover {
  background-size: contain;
}
.footerMain {
  height: 500px;
}
.ContactInfo {
  display: flex;
  flex-direction: column;
}
.contactInfoNested {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.footermainfooter {
  background-image: linear-gradient(to right, #2196f3, #4caf50, #ff9800);
}
</style>
