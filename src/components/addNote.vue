<template>
   <div class="addNote" >
            <div class="card-body">
                <label>Not Başlığı</label>
                <input type="text" class="baslık" v-model="note.title">
                <p>Notunuz</p>
                <textarea rows="8" cols="30" class="write " v-model="note.body"></textarea>
                <p class="card-text"></p>
                <a class="btn btn-primary" v-on:click="setAddNote">kaydet</a>
            
            </div>   
    </div>          
</template>
<script>
import { mapGetters } from 'vuex';


export default {
    name:"addNote",
    
  data(){
      return{
        editAddNote:"",
        insertDate:"",
        note: {
            id: '',
            body: '',
            title: '',
            insertDate: '',
            updateDate: ''
        }
      }
  },
  methods:{
      getInsertDate: function(){
          return new Date().toLocaleDateString();
      },
      setAddNote(){
          this.note.insertDate = new Date();
          this.$store.commit('setAddNote', this.note)
          this.$router.push("/home"); 
      },
  },
  computed:{
      ...mapGetters(["getAddNote"]),
      
  },
};
</script>
<style  scoped>
.addNote{
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;
    border: 2px solid;
    width: 30%;   
}
.card-body{
    background: rgb(216, 231, 132);
     border-style: solid;
}
.write{
    background: rgb(236, 189, 238);
    border-radius: 5px;
}
.baslık{
    margin-bottom:5px;
    border-radius: 5px;
    width: 85%;
    background-color: rgb(206, 206, 245);
}
</style>
