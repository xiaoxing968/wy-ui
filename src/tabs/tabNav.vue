<template>
  <div class="tab-nav__wrapper">
    <div class="tab-nav__item"
         v-for="(nav, index) in tabPanes" :key="index"
         @click="clickNavItem(nav.name)">
      {{ nav.label }}
    </div>
  </div>
</template>

<script>
import tabsMixin from "../mixins/tabsMixin";

export default {
  name: 'WTabNav',
  mixins: [tabsMixin],
  components: {},
  props: {},
  data() {
    return {}
  },
  methods: {
    clickNavItem(name) {
      this.tabsBus.selectTab = name
    }
  }
}
</script>

<style scoped lang="less">
</style>