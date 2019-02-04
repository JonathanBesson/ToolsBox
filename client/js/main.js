/**
 * Chargement des dépendances du projet jS|CSS en ECMAScript 6 modules (Native JavaScript)
 * ? [ECMAScript 6 modules](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/import)
 */

/* J q u e r y */
// ? import by webpack

/* B o o t s t r a p */
import Bootstrap from "bootstrap";

/* A p p  C S S */
import appCss from "../sass/main.scss";

/* V u e   F r a m e w o r k */
import Vue from "vue";

new Vue({
  el: "#app-main",
  data: {
    toolsList: [
      {
        id: 1,
        title: "Google",
        description: "A search engine ?",
        label: "Google it!",
        dir: `http://www.google.com`
      },
      {
        id: 2,
        title: "GitHub",
        description: "Just GitHub",
        label: "Commit and share !",
        dir: "https://github.com"
      },
      {
        id: 3,
        title: "Best blog ever !",
        description: "It's mine :)",
        label: "Read some great content !",
        dir: "https://www.jonathan-besson.fr"
      }
    ],
    search: ""
  },
  computed: {
    filteredToolsList: function() {
      let regex = new RegExp(`${this.search}`, "gi");
      return this.toolsList.filter(tool => tool.title.match(regex) || tool.description.match(regex));
    }
  },
  methods: {
    cleanSearch: function() {
      this.search = "";
      return;
    }
  }
});
