// VueJs Settings
new Vue({
  el: "#app",

  data: {

    // header
    logoImg: {
      name: "logo",
      path: "avadabarbers-logo-x1.png"
    },

    navIcons: [
      {
        class: "fas fa-shopping-cart",
        closeClass: "fas fa-times",
        active: false
      },
      {
        class: "fas fa-bars",
        closeClass: "fas fa-times",
        active: false
      }
    ],

    hambLayover: {
      navHambLayover: [
        {
          text: "Home",
          bg: "url('img/avadabarbers-homepage-hero-bg.jpg')"
        },
        {
          text: "About Us",
          bg: "url('img/about_bg.jpg')"
        },
        {
          text: "Services",
          bg: "url('img/services_bg.jpg')"
        },
        {
          text: "Shop",
          bg: "url('img/shop_bg.jpg')"
        },
        {
          text: "Our Team",
          bg: "url('img/team_bg.jpg')"
        },
        {
          text: "Blog",
          bg: "url('img/blog_bg.jpg')"
        },
        {
          text: "Contact Us",
          bg: "url('img/contact_bg.jpg')"
        }
      ]
    },

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

    // sezione services
    services: [
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


    // sezione products
    products: [
      {
        name: "Brush",
        img: "brush_dark-800x800.png",
        price: "$15.00"
      },
      {
        name: "Scissors",
        img: "scissors-600x600.png",
        price: "$85.00"

      },
      {
        name: "Hot oil",
        img: "hot_oil_dark-400x400.png",
        price: "$15.00"

      },
      {
        name: "Straight Razor",
        img: "straight_razor_dark-600x600.png",
        price: "$30.00"

      },
    ],

    // sezione productMonth
    productMonth: {
      name: "Shaving Butter",
      img: "shaving_butter-400x400.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },

    // sezione reviews
    reviews: [
      {
        name: "John Doe",
        avatar: "avadabarbers-trimcut-gallery6-200x200.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu."
      },
      {
        name: "Pete Jones",
        avatar: "avadabarbers-trimcut-gallery7-200x201.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu."

      },
      {
        name: "Mark Wilson",
        avatar: "avadabarbers-trimcut-gallery3-200x201.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu."
      },
    ],

    // sezione blog
    blogs: [
      {
        title: "Avada Barbers Now Open",
        cover: "avadabarbers-second-blog-700x441.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper."
      },
      {
        title: "Choosing The Right Barber",
        cover: "avadabarbers-choosing-blog-700x441.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper."
      },
      {
        title: "Quick Service Guide",
        cover: "avadabarbers-ourservice-blog-700x441.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper."
      }
    ],

    // footer
    company: [
      "Avada Barbers",
      "123 New York Street",
      "New York City",
      "info@yourwebsite.com",
      "+1 (555) 555-1212",
    ],

    social: [
      {
        prefix: "fab ",
        social: "fa-facebook-f",
      },
      {
        prefix: "fab ",
        social: "fa-twitter",
      },
      {
        prefix: "fab ",
        social: "fa-youtube",
      },
      {
        prefix: "fab ",
        social: "fa-instagram",
      },
    ],
  },

  methods: {

    // funzione per fare il menu al click
    toogleActiveClass(navIcons, index) {
      this.navIcons[index].active = !this.navIcons[index].active;
    },
  },
});
Vue.config.devtools = true;
