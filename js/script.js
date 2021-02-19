// VueJs Settings
new Vue({
  el: "#app",

  data: {

    logoImg: {
      name: "logo",
      path: "avadabarbers-logo-x1.png"
    },

    navIcons: [
      {
        prefix: "fas ",
        type: "fa-shopping-cart",
        active: false
      },
      {
        prefix: "fas ",
        type: "fa-bars",
        active: false
      }
    ],

    headerImg: {
      name: "header img",
      path: "avadabarbers_hero_focalmirror-600x825.png"
    },

    squareItem: [
      {
        icon: "fas fa-desktop",
        text: "Demos"
      },
      {
        icon: "fas fa-shopping-cart",
        text: "On Sale"
      }
    ],

    Services: [
      {
        path: "avadabarbers-trimcut-icon-before.png",
        alt: "trim",
        title: "Trim & Cut",
        paragraph: "Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculously good looking"
      },
      {
        path: "avadabarbers-washndry-icon.png",
        alt: "wash",
        title: "Wash & Dry",
        paragraph: "Take a seat in our fine leather chairs, lean back and let us lather you a fresh head in a luxurious fashion."

      },
      {
        path: "avadabarbers-beardtrim-icon.png",
        alt: "beard",
        title: "Beard Tidy",
        paragraph: "Tame the tangles and untidy facial hairs like a gentleman with our Beard Tidy services from Avada Barbers."

      }
    ],
  },

  methods: {

  }
});
Vue.config.devtools = true;
