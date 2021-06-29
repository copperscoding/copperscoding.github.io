<template>
  <v-app-bar>
    <v-row class="align-center">
      <v-col cols="2">
        <v-img
        width="75"
        height="75"
        contain
        :src="require('~/static/favicon.png')" />
      </v-col>
      <v-col cols="1" />
      <v-col cols="2">
        <NuxtLink to="/">MAIN PAGE</NuxtLink>
      </v-col>
      <v-col cols="2">
        <NuxtLink to="/csharp">C# TUTORIAL</NuxtLink>
      </v-col>
      <v-col cols="2">
        <a>ABOUT</a>
      </v-col>
      <v-col cols="2">
        <a>LOG IN</a>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
<script>
export default {

}
</script>
<style lang="sass" scoped>
a
  text-decoration: none

a:hover
  color: $copper-pale

a:active
  color: $copper-deep-blue

</style>
