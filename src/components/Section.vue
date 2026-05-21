<template>
  <section :class="['section', variant]">
    <div class="content">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ variant?: string }>()
const variant = props.variant || ''
</script>

<style scoped lang="scss">
$panel: rgba(11, 18, 42, 0.78);
$border: rgba(255, 255, 255, 0.08);
$shadow: rgba(1, 8, 24, 0.45);

.section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.hero {
    background: linear-gradient(180deg, rgba(15, 37, 84, 0.9), rgba(4, 10, 23, 0.9));
  }

  &.neon {
    background: linear-gradient(180deg, rgba(8, 20, 46, 0.96), rgba(4, 9, 29, 0.96));
  }

  &.pulse {
    background: linear-gradient(180deg, rgba(7, 16, 34, 0.98), rgba(2, 5, 12, 1));
  }
}

.content {
  max-width: 860px;
  width: 100%;
  text-align: center;
  padding: 40px;
  border-radius: 28px;
  background: $panel;
  border: 1px solid $border;
  box-shadow: 0 24px 80px $shadow;

  h1,
  h2 {
    margin: 0 0 1rem;
    letter-spacing: 0.08em;
    color: #d0e7ff;
  }

  h1 {
    font-size: clamp(3rem, 6vw, 4.8rem);
  }

  h2 {
    font-size: clamp(2.2rem, 4vw, 3.4rem);
  }

  p {
    margin: 0;
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    line-height: 1.85;
    color: rgba(248, 249, 255, 0.88);
  }
}

@media (max-width: 720px) {
  .content {
    padding: 28px 18px;

    h1 {
      font-size: clamp(2.4rem, 8vw, 3.6rem);
    }

    h2 {
      font-size: clamp(1.8rem, 6vw, 2.6rem);
    }
  }
}
</style>
