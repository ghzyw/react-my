<template>
  <div class="page" @wheel.prevent="onWheel">
    <div class="backdrop"></div>

    <Section v-for="(item, index) in sections" :key="item.variant || index" :variant="item.variant">
      <component :is="item.component" />
    </Section>

    <!-- 右侧分页指示器 -->
    <PageIndicator
      :pages="sections.length"
      :currentIndex="state.currentIndex"
      @select="scrollToIndex"
    />
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'HomePage' })
import { usePageSnap } from '../../composables/usePageSnap'
import Section from '../Section.vue'
import PageIndicator from '../PageIndicator.vue'
import HeroContent from './sections/HeroContent.vue'
import NeonContent from './sections/NeonContent.vue'
import PulseContent from './sections/PulseContent.vue'

const sections = [
  { variant: 'hero', component: HeroContent },
  { variant: 'neon', component: NeonContent },
  { variant: 'pulse', component: PulseContent },
]

const { handleWheel, state, scrollToIndex } = usePageSnap()

function onWheel(e: WheelEvent) {
  handleWheel(e)
}
</script>

<style scoped lang="scss">
$bg-start: #05102a;
$bg-mid: #081922;
$bg-end: #0c203f;
$text: #f8f9ff;
$panel: rgba(11, 18, 42, 0.78);
$border: rgba(255, 255, 255, 0.08);
$shadow: rgba(1, 8, 24, 0.45);
$gradient-light: rgba(106, 146, 255, 0.14);
$gradient-accent: rgba(255, 105, 180, 0.12);
$gradient-fill: rgba(109, 218, 255, 0.08);

.page {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  background: linear-gradient(180deg, $bg-start 0%, $bg-mid 40%, $bg-end 100%);
  color: $text;
}

.backdrop {
  position: fixed;
  inset: 0;
  background:
    radial-gradient(circle at 20% 20%, $gradient-light, transparent 15%),
    radial-gradient(circle at 80% 30%, $gradient-accent, transparent 18%),
    radial-gradient(circle at 50% 80%, $gradient-fill, transparent 20%);
  pointer-events: none;
  z-index: 0;
}
</style>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
  background: #05102a;
}

body {
  scroll-behavior: smooth;
}

html,
body {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
html::-webkit-scrollbar,
body::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
