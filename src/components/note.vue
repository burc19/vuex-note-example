<template>
  <div class="notes">
    <div v-if="getAllNotes" id="notes" class="card-header" style="height: 60px">
      <span> {{ notes.title }}</span>
      
      <b-button
        style="float: right; margin-left: 10px"
        class="btn btn-success"
        v-if="notes"
        v-on:click="editNotes"
      >
        Düzenle
      </b-button>

      <b-button
        style="float: right"
        class="btn btn-danger"
        v-if="notes"
        v-on:click="deleteButtonClick(notes)"
      >
        Sil
      </b-button>
    </div>
    <div class="card-body">
      <!--düzenle butonuna bastığımızda metin alanı ve kaydet butonunu getirdik -->
      <span v-if="isEdit == false"></span>
      <textarea v-else v-model="editBody" ></textarea>
      <b-button
        type="text"
        style="float: right"
        class="btn btn-info"
        v-if="isEdit"
        v-on:click="setAllNotes"
        >kaydet</b-button
      >

      <span v-if="isEdit == true" ></span>
      <!--kaydet butonuna basıldığında metin bölümü ve butonun kaybolmasını sağladık -->

      <ul>{{notes.id}}</ul>
      <ul>{{notes.body}}</ul>
      <ul>{{notes.insertDate}}</ul>
      <ul>{{notes.updateDate}}</ul>
    </div>
  </div>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  
  name: "notes",
  props: ["notes"],
  data() {
    return {
      isEdit: false,
      editBody: "",
    };
  },
  methods: {
    getUpdateDate: function () {
      return new Date().toLocaleDateString(); //güncelleme tarihi kodları
    },
    editNotes() {
      this.isEdit = true;
      this.editBody= this.notes.body;

    },
    deleteButtonClick(notes) {
      this.$store.commit("deleteButtonClick", notes); // silme işlemleri için commit ediyoruz
      for (var i = 0; i < this.getAllNotes.length; i++) {
        //id ler eşit mi diye kontrolleri sağlandı ve idler getirildi.Silme iişlemi tamamlandı
        if (this.getAllNotes[i].id == this.notes.id) {
          var index = i;
          
          this.$store.commit("deleteButtonClick", index);
        }
      }
    },
    setAllNotes() {
      this.isEdit = false;
      console.log("İlk hali");
      console.log(this.getAllNotes);

      for (var i = 0; i < this.getAllNotes.length; i++) {
        //id ler eşit mi diye kontrolleri sağlandı ve idler getirildi.aynı şekilde tarih işlemi yapıldı index tanımlama ile
        if (this.getAllNotes[i].id == this.notes.id) {
          var date = new Date();
          var data = { index: i, body: this.editBody };
          var updateData = {
            index: i,
            updateDate: date.toLocaleDateString(),
          };

          this.$store.commit("setNoteBody", data);
          this.$store.commit("setNoteDate", updateData); //gn bilgilerin getirilme işlemi yapıldı
        }
      }
      console.log("Sonraki hali");
      console.log(this.getAllNotes);
    },
  },

  computed: {
    ...mapGetters(["getAllNotes"]),
  },
  created() {},
};
</script>
<style scoped>
.notes {
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;

  border: 2px solid;
  max-width: 400px;
  border-radius: 30px;
  background-color: darkturquoise;
}
</style>
