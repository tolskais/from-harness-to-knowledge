<script setup>
import { computed } from 'vue'
const props = defineProps({ chapter: String, section: String, page: String, appendix: Boolean })
const label = computed(() => props.appendix ? 'Q&A Appendix' : (props.section || 'Opening'))
</script>

<template>
  <div class="slide-shell">
    <main class="slide-body"><slot /></main>
    <footer><span>{{ label }}</span><span>{{ page }}</span></footer>
  </div>
</template>
