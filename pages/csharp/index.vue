<template>
  <v-container class="contain-sides">
    <v-card class="text-center blue-bg">
      <h1>Welcome to the C# Tutorial main page!</h1>
    </v-card>
  </v-container>
</template>
<script>
export default {

}
</script>
<style lang="sass" scoped>
.blue-bg
  background-color: $copper-dark-blue !important

.contain-sides
  margin-left: 300px
  margin-right: 300px

@media (max-width: 1000px)
  .contain-sides
    margin-left: 100px
    margin-right: 100px

</style>
