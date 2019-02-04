/**
 * propriétés de bas niveau disponible pour tous les composants dans le besoin
 * déclaration dans le template de la vue, idéal depuis le PHP
 * @param {String} varName le nom de la future variable
 * @param {Mixed} data ls valeurs à assigner ou à lire
 */
export default {
  methods: {
    assignData: function(varName, data) {
      store.vars = { ...store.vars, [varName]: data };
    },
    readData: function(varName) {
      if (store.vars.hasOwnProperty(varName)) return JSON.parse(store.vars[varName]);
      else false;
    }
  }
};
