<template>
  <div class="container-fluid p-3">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <b-breadcrumb>
        <b-breadcrumb-item>Gestion de stock OBF</b-breadcrumb-item>
        <b-breadcrumb-item>Tableau de bord</b-breadcrumb-item>
      </b-breadcrumb>
    </div>

    <template v-if="isLoading === false">
      <div class="row">
        <div class="col-md-12">
          <div class="text-center">
            <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
            <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow"></b-spinner>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
    </template>
  </div>
</template>

<script>
const axios = require('axios')
//import moment from "moment";
export default {
  name: "index",
  data(){
    return {
      isLoading : false,
    }
  },
  methods:{
    async fetchdata(){
      this.isLoading = false
      this.isLoading = true
    },
  },
  created() {
    this.fetchdata()
  },

}
</script>

<style scoped>
.border-left-success-perso {
  border-left: 0.50rem solid #1cc88a !important;
}
.text-xs-perso {
  font-size: .8rem;
}

</style>
