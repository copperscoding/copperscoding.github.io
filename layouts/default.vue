<template>
  <v-app dark>
    <v-main>
      <custom-header />
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <custom-footer />
  </v-app>
</template>

<script>
import CustomFooter from '~/components/customFooter.vue'
import customHeader from '~/components/customHeader.vue'
export default {
  components: { customHeader, CustomFooter },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
$copper-blue: #76a4d5;

.test {
  background: $copper-blue;
}
</style>