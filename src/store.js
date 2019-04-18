// https://www.google.com/search?q=vuex+codesandbox&rlz=1C1GCEA_enGB844GB844&oq=vuex+codesandbox&aqs=chrome..69i57.11172j0j7&sourceid=chrome&ie=UTF-8
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  match: {
    team1: { name: "psg", goals: 0 },
    team2: { name: "manchester", goals: 2 },
    start_time: 1555343697,
    ellapsed_seconds: 0,
    miTemps: "2",
    events: [
      {
        id: 0,
        type: "Mi-temps",
        message: "D&eacute;but de la premi&egrave;re mi-temps!"
      },
      {
        id: 5,
        type: "Expulsion!",
        message: "&Eacute;norme faute de Hummany sur Ricdoski! Carton rouge!"
      },
      {
        id: 7,
        type: "Changement",
        message: "Changement. Gustavaldino remplace Xavdoski."
      },
      {
        id: 10,
        type: "Changement",
        message: "Changement. Xavdoski remplace Cavey."
      },
      {
        id: 12,
        type: "Goal!!",
        message:
          "Buuuuuuuttttt!!! Magnifique passe de Pirlaldino &agrave; Pirlskiqui assure la finition."
      },
      {
        id: 15,
        type: "Touche",
        message: "Le ballon file en touche. Hummels va remettre en jeu."
      },
      {
        id: 18,
        type: "Goal!!",
        message:
          "Buuuuuuuttttt!!! Magnifique passe de Ibrahime &agrave; Messeyqui assure la finition."
      },
      {
        id: 21,
        type: "Hors-jeu",
        message: "Lewanany est hors-jeu. Le gardien va d&eacute;gager."
      },
      { id: 23, type: "Striker!" },
      {
        id: 27,
        type: "Hors-jeu",
        message: "Cave est hors-jeu. Le gardien va d&eacute;gager."
      },
      {
        id: 30,
        type: "Expulsion!",
        message: "&Eacute;norme faute de Ronaldey sur Cavi! Carton rouge!"
      },
      {
        id: 33,
        type: "Touche",
        message: "Le ballon file en touche. Gustavaldino va remettre en jeu."
      },
      { id: 35, type: "Striker!" },
      {
        id: 38,
        type: "Goal!!",
        message:
          "Buuuuuuuttttt!!! Magnifique passe de Pirli &agrave; Xaviqui assure la finition."
      },
      {
        id: 43,
        type: "Expulsion!",
        message: "&Eacute;norme faute de Tourino sur Ibrahimey! Carton rouge!"
      },
      { id: 45, type: "Fin", message: "Fin de la premi&eagrave;re mi-temps." },
      {
        id: 46,
        type: "Mi-temps",
        message: "D&eacute;but de la deuxi&egrave;me mi-temps!"
      },
      {
        id: 51,
        type: "Faute",
        message: "A&iuml;e a&iuml;e a&iuml;e! Faute de Gustavany sur Cavaldino!"
      },
      {
        id: 53,
        type: "Changement",
        message: "Changement. Hummey remplace Ibrahimi."
      },
      {
        id: 58,
        type: "Expulsion!",
        message: "&Eacute;norme faute de Hazaldino sur Ronaldels! Carton rouge!"
      },
      {
        id: 61,
        type: "Touche",
        message: "Le ballon file en touche. Roonaldino va remettre en jeu."
      },
      {
        id: 64,
        type: "Touche",
        message: "Le ballon file en touche. Hazegas va remettre en jeu."
      },
      {
        id: 66,
        type: "Expulsion!",
        message: "&Eacute;norme faute de Hummdoski sur Roonels! Carton rouge!"
      },
      {
        id: 69,
        type: "Goal!!",
        message:
          "Buuuuuuuttttt!!! Magnifique passe de Messey &agrave; Hummelsqui assure la finition."
      },
      {
        id: 72,
        type: "Touche",
        message: "Le ballon file en touche. Messi va remettre en jeu."
      },
      {
        id: 75,
        type: "Changement",
        message: "Changement. Hazona remplace Maradaldino."
      },
      {
        id: 78,
        type: "Touche",
        message: "Le ballon file en touche. Cavegas va remettre en jeu."
      },
      {
        id: 80,
        type: "Changement",
        message: "Changement. Pirlany remplace Touri."
      },
      {
        id: 82,
        type: "Goal!!",
        message:
          "Buuuuuuuttttt!!! Magnifique passe de Ricey &agrave; Roondoskiqui assure la finition."
      },
      {
        id: 84,
        type: "Expulsion!",
        message: "&Eacute;norme faute de Maradi sur Tourany! Carton rouge!"
      },
      { id: 86, type: "Striker!" },
      {
        id: 89,
        type: "Changement",
        message: "Changement. Xavdoski remplace Maradegas."
      },
      { id: 90, type: "Fin", message: "Fin du match!" }
    ],
    "1": { goals: 2 },
    "2": { goals: 1 }
  }
};

const mutations = {
  SET_MATCH(state, match) {
    state.match = match;
  }
};

const actions = {
  setMatch(context, match) {
    context.commit("SET_MATCH", match);
  }
};

const getters = {
  getMatch(state) {
    return state.match;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
