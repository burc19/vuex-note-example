<template>
  <div>
    <div v-if="!getIsLogin" id="logout">
      <b-button-group>
        <b-button type="submit" class="btn btn-danger" v-on:click="logout"
          >çıkış</b-button
        >
      </b-button-group>
    </div>

    Test
    <div class="row align-items-center" >
      <h1>Ana sayfa</h1>
      <b-button-group>
      <b-button id="add" type="button" class="btn btn-add" v-on:click="addNote"
        >Ekle</b-button
      >
    </b-button-group>
      <div :key="index" v-for="(item, index) in getAllNotes">
        <note-card :notes="item"></note-card>
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  created() {
    console.log(this.getAllNotes);
    this.noteList = this.getAllNotes;
    console.log(this.noteList);
  },
  data() {
    return {
      noteList: [],
      noteFirst: { title: "deneme başlık ", body: "deneme içerik" },
    };
  },
  computed: {
    ...mapGetters(["getIsLogin", "getUserInfo", "getAllNotes"]),
  },
  methods: {
    ...mapActions(["logoutStore"]),
    logout() {
      this.logoutStore();
      this.$store.commit("logoutStore", this.logOut);
      console.log(this.logoutStore);
      this.$router.push("/login");
      this.$store.commit("");
    },
    goNote() {
      this.$router.push("/note");
    },
    addNote() {
      this.$router.push("/addNote");
    },
  },
};
</script>

<style>
#logout {
  text-align: end;
}
#add{
  margin-right: 72% ;
  margin-left:2%;
}
h1{
  text-align: center;
}
</style>
