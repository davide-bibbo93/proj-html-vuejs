var header = new Vue({
  el: "header",

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
    ]
  },

  methods: {


  }
});
Vue.config.devtools = true;
