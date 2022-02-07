<template>
  <div v-if="!getIsLogin" id="login" class="login">
    <div class="form-group">
      <label>Kullanıcı Adı</label>
      <input
        type="text"
        v-model="login.username"
        placeholder="Enter username"
        size="20rem"
      />
    </div><br>
    <div class="form-group">
      <label>Şifre</label>
      <input
        type="password"
        v-model="login.password"
        placeholder="Enter password"
        size="20rem"
      />
      <div v-if="validation.passwordIsSame == true">
        kullanıcı bilgileri hatalı
      </div>
    </div><br>

    <b-button-group
      ><b-button v-on:click="setLogin" type="submit" variant="primary" >Giriş</b-button>
    </b-button-group>

    <b-button-group>
      <b-button v-on:click="goRegister" variant="danger">Kayıt ol</b-button>
    </b-button-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
      validation: {
        usernameIsSame: false,
        passwordIsSame: false,
      },
    };
  },
  computed: {
    ...mapGetters(["getIsLogin", "getUserInfo", "getLogin"]),
  },
  methods: {
    setLogin() {
      console.log(this.getLogin);
      if (this.login.username != this.getLogin.username) {
        this.validation.passwordIsSame = true;
        return false;
      } else if (this.login.password != this.getLogin.password) {
        this.validation.passwordIsSame = true;
        return false;
      } else {
        this.validation.passwordIsSame = false;
        this.$router.push("/home");
      }
      /*
    Kullanıcının girmiş olduğu şifreyi ve kullanıcı adını kontrol etmek için
    strodedaki kullanıcı adını ve şifreyi buraya çekeceksin ve kullanıcının girmiş olduğu bilgilerle
    kıyaslayacaksın.
    Eğer doğru ise home a gidecek
    yanlış ise kullanıcı bilgileri hatalı diyecek
    */
    },
    goRegister() {
      this.$router.push("/register");
    },
  },
};
</script>
<style>
.login {
  border-style: solid;
  margin-top:180px;
  margin-left:350px;
  margin-right:350px;
  padding-top: 50px;
  padding-right: 5px;
  padding-bottom: 50px;
  padding-left: 5px;
  border-width: 2px;
  background-color: rgb(235, 245, 151);
  text-align:center;
}
</style>
