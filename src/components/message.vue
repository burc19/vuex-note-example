<template>
  <div>
	<div id="login" class="alert alert-danger" v-if="getLoginMessage">
		
	</div>
	<div id="logout" class="alert alert-success" v-if="getIsLogin">
		Login successfully!
	</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters(['getIsLogin', 'getLoginMessage'])
	}
}
</script>

<style>
</style>