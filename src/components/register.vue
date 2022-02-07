<!--kullanıcıların ad soyad şifre kullanıcı bilgilerini girilmesi sağlandı. v- if kod ları ile validation işlemleri yapıldı.
    console işlemlerinde verilerin çekilmesi işlemleri sağlandı.
 -->
<template>
  <div class="register">
    <b-form>
      <b-form-group
        id="adi"
        label="Adınız:"
        label-for="feedback-user"
        class="w-25 p-3 mb-1 bg-secondary text-light mx-auto bg-info"
      >
        <b-form-input
          v-model="userInfo.name"
          id="adi"
          placeholder="Enter name"
          required
        ></b-form-input>
        <div v-if="validation.nameIsNull == true && userInfo.name == ''">
          Lütfen adınızı girin
        </div>
        <div
          v-else-if="validation.nameLength == true && userInfo.name.length < 3"
        >
          Lütfen geçerli bir isim girin
        </div>
      </b-form-group>

      <b-form-group
        id="soy"
        label="Soy Adınız:"
        label-for="soyadı"
        class="w-25 p-3 mb-1 bg-secondary text-light mx-auto bg-info"
      >
        <b-form-input
          v-model="userInfo.surName"
          id="soy"
          placeholder="Enter surname"
          required
        ></b-form-input>
        <div v-if="validation.surNameIsNull == true && userInfo.surName == ''">
          Lütfen Soy adınızı giriniz
        </div>
        <div
          v-else-if="
            validation.surNameLength == true && userInfo.surName.length < 3
          "
        >
          Geçerli bir soy ad giriniz
        </div>
      </b-form-group>
      <b-form class="w-25 p-3 mb-1 bg-secondary text-light mx-auto bg-info">
        <label for="feedback-user">Kullanıcı Adı</label>
        <b-form-input
          v-model="userInfo.userName"
          id="feedback-user"
          placeholder="Enter username"
        ></b-form-input>
        <div
          v-if="validation.userNameIsNull == true && userInfo.userName == ''"
        >
          Lütfen Kullanıcı Adınızı Giriniz
        </div>
        <div
          v-else-if="
            validation.userNameLength == true && userInfo.userName.length < 3
          "
        >
          Lütfen Geçerli Kullanıcı Adınızı Giriniz
        </div>
        <b-form-invalid-feedback> </b-form-invalid-feedback>
        <b-form-valid-feedback> </b-form-valid-feedback>
      </b-form>

      <b-form class="w-25 p-3 mb-1 bg-secondary text-light mx-auto bg-info">
        <label for="text-password">Şifre</label>
        <b-form-input
          v-model="userInfo.password"
          type="password"
          id="text-password"
          aria-describedby="password-help-block"
          placeholder="Enter password"
        ></b-form-input>
        <div v-if="validation.passwordNull == true && userInfo.password == ''">
          Boş bırakmayınız
        </div>
        <div
          v-else-if="
            validation.passwordLength == true && userInfo.password.length < 6
          "
        >
          En az 6 haneli giriniz
        </div>
        <b-form-text id="password-help-block"> </b-form-text>
      </b-form>

      <b-form class="w-25 p-3 mb-1 bg-secondary text-light mx-auto bg-info">
        <label for="text-password">Şifre Tekrarı</label>
        <b-form-input
          v-model="userInfo.rePassword"
          type="password"
          id="text-rePassword"
          aria-describedby="password-help-block"
          placeholder="Enter password"
        ></b-form-input>
        <b-form-text id="password-help-block"> </b-form-text>
        <div v-if="validation.rePasswordIsSame == true">
          Şifreler eşit değil
        </div>
      </b-form>
      <b-button-group class="d-grid gap-2 col-3 mx-auto">
        <b-button class="kayit" v-on:click="setUser" variant="info" size="lg" 
          >Kayıt ol</b-button
        >
      </b-button-group>
    </b-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "register",
  data() {
    return {
      userInfo: {
        userId: "",
        userName: "",
        name: "",
        surName: "",
        password: "",
        rePassword: "",
      },
      validation: {
        userNameLength: false,
        userNameIsNull: false,
        nameLength: false,
        nameIsNull: false,
        surNameLength: false,
        surNameIsNull: false,
        passwordLength: false,
        passwordNull: false,
        rePasswordIsSame: false,
      },
    };
  },
  computed: {
    ...mapGetters(["getUserInfo"]),
  },
  methods: {
    setUser() {
      console.log("Butona bastı");

      if (this.userInfo.name == "") {
        this.validation.nameIsNull = true;
        return false;
      }

      if (this.userInfo.name.length < 3) {
        this.validation.nameLength = true;
        return false;
      }
      if (this.userInfo.surName == "") {
        this.validation.surNameIsNull = true;
        return false;
      }
      if (this.userInfo.surName.length < 3) {
        this.validation.surNameLength = true;
        return false;
      }
      if (this.userInfo.userName == "") {
        this.validation.userNameIsNull = true;
        return false;
      }
      if (this.userInfo.userName.length < 3) {
        this.validation.userNameLength = true;
        return false;
      }
      if (this.userInfo.password == "") {
        this.validation.passwordNull = true;
        return false;
      }
      if (this.userInfo.password.length < 6) {
        this.validation.passwordLength = true;
        return false;
      }
      if (this.userInfo.rePassword != this.userInfo.password) {
        this.validation.rePasswordIsSame = true;
        return true;
      } else {
        this.validation.rePasswordIsSame = false;
        this.$store.commit("setUserInfo", this.userInfo);
        this.$store.commit("setLogin", this.userInfo);
        console.log(this.getUserInfo);

        this.$router.push("/login");
      }
    },
  },
};
</script>
<style >
.register{
  margin-top:60px ;
}
</style>
