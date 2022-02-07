// getter- setter işlemleri yapıldı. getter işleminde state içinde bulunan parametreler getirildi.commit yapılarak state içindeki parametrelere erişim sağlandı.
import Vue from "vue";
import Vuex from "vuex";
import * as VeeValidate from "vee-validate";

Vue.use(Vuex);

Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: "veeFields",
  errorBagName: "veeErrors",
});
const state = {
  userInfo: {
    username: "",
    Name: "",
    surName: "",
    password: "",
    rePassword: "",
  },
  login: {
    username: "admin",
    password: "admin",
    isLogin: false,
    loginMessage: false,
  },

  notes: [
    {
      id: 1,
      title: "Not1 başlık",
      body: "aasasasas",
      insertDate: "2022",
      updateDate: "",
    },
    {
      id: 2,
      title: "Not-2 başlık",
      body: "asdsdasdsdadsdads",
      insertDate: "2022",
      updateDate: "",
    },
    {
      id: 3,
      title: "Not-3 başlık",
      body: "asdadsdadsasdsadaddsdadadd",
      insertDate: "2022",
      updateDate: "",
    },
    {
      id: 4,
      title: "Note-4 Başlık ",
      body: "kskskskksks",
      insertDate: "2022",
      updateDate: "",
    },
    {
      id: 5,
      title: "Note-5 Başlık",
      body: "asdasdasdasd",
      insertDate: "2022",
      updateDate: "",
    },
  ],
  addNote:{
    id:221,
      title: "skskks",
      body: "slslls",
      insertDate: "",
      updateDate: "",

  }
};
const getters = {
  getIsLogin: (state) => {
    return state.login.isLogin;
  },
  getLoginMessage: (state) => {
    return state.login.loginMessage;
  },
  getUserName: (state) => {
    return state.userInfo.username;
  },
  getName: (state) => {
    return state.userInfo.Name;
  },
  getSurName: (state) => {
    return state.userInfo.surName;
  },
  getPassword: (state) => {
    return state.userInfo.password;
  },
  getRePassword: (state) => {
    return state.userInfo.rePassword;
  },
  getUserInfo: (state) => {
    return state.userInfo;
  },
  getLoginUsername: (state) => {
    return state.login.username;
  },
  getLoginPassword: (state) => {
    return state.login.password;
  },
  getLogin: (state) => {
    return state.login;
  },
  getLogoutStore: (state) => {
    return state.logout;
  },
  getAllNotes: (state) => {
    return state.notes;
  },
  getAddNote: (state) =>{
    console.log(state.addNote)
    return state.addNote;
  },
};
const actions = {
  updateIsLogin: ({ commit }, [Username, Password]) => {
    commit("setIsLogin", [Username, Password]);
  },
  logoutStore: ({ commit }) => {
    commit("logoutStore");
  },
  UserName: ({ commit }) => {
    commit("setUserName");
  },
  Name: ({ commit }) => {
    commit("setName");
  },
  surName: ({ commit }) => {
    commit("setSurName");
  },
  password: ({ commit }) => {
    commit("setPassword");
  },
  rePassword: ({ commit }) => {
    commit("setRePassword");
  },
  loginUsername: ({ commit }) => {
    commit("setLoginUsername");
  },
  loginPassword: ({ commit }) => {
    commit("setLoginPassword");
  },
  allNotes: ({ commit }) => {
    commit("setAllNotes");
  },
  addNote :({commit})=>{
    commit("setAddNote");
  }
};

const mutations = {
  setIsLogin: (state, [loginUsername, loginPassword]) => {
    if (state.username == loginUsername && state.password == loginPassword) {
      state.isLogin = true;
      state.loginMessage = false;
    } else {
      state.isLogin = false;
      state.loginMessage = true;
    }
  },
  logoutStore: (state) => {
    state.isLogin = false;
    state.loginMessage = false;
  },
  setName: (state, [name]) => {
    state.userInfo.name = name;
  },
  userInfo(state, login) {
    state.push(login);
  },
  setUserInfo(state, data) {
    state.userInfo = data;
  },
  setLogin(state, userData) {
    state.login.username = userData.userName;
    state.login.password = userData.password;
  },
  deleteButtonClick(state, index) {
    state.notes.splice(index, 1);
    console.log("silindi");
  }, //state içerisine yazdığım bilgileri index içinde id'lerin 1 eksiğini alıyoruz
  setNoteBody(state, data) {
    console.log(data);
    state.notes[data.index].body = data.body;
  },
  setNoteDate(state, data) {
    console.log(data);
    state.notes[data.index].updateDate = data.updateDate;
  },
  setAddNoteDate(state, data){
    console.log(data);
    state.addNote[data.index].insertDate = data.insertDate;
  },
  setAddNoteBody(state,data){
    console.log(data);
    state.addNote[data.index].body= data.body;
  },
  setAddNote(state, data){
    state.notes = [...state.notes, data];
  }
 

};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});

export default store;
