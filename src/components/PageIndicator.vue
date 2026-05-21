<template>
  <div class="indicator-shell">
    <button
      class="direction-button"
      type="button"
      :disabled="currentIndex <= 0"
      @click="$emit('select', currentIndex - 1)"
      aria-label="上一屏"
    >
      <span class="arrow up">↑</span>
    </button>

    <nav class="page-indicator" aria-hidden="false">
      <button
        v-for="index in pages"
        :key="index - 1"
        type="button"
        :class="{ active: currentIndex === index - 1 }"
        @click="$emit('select', index - 1)"
        :aria-label="`第 ${index} 屏`"
      />
    </nav>

    <button
      class="direction-button"
      type="button"
      :disabled="currentIndex >= pages - 1"
      @click="$emit('select', currentIndex + 1)"
      aria-label="下一屏"
    >
      <span class="arrow down">↓</span>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  pages: number
  currentIndex: number
}>()
defineEmits<{
  (e: 'select', index: number): void
}>()
</script>

<style scoped>
.indicator-shell {
  position: fixed;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 12;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 12px 10px;
  background: rgba(8, 12, 24, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 28px;
  backdrop-filter: blur(10px);
}

.page-indicator {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 42px;
}

.direction-button {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(8, 12, 24, 0.9);
  color: #79c8ff;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.18s ease,
    background 0.18s ease,
    opacity 0.18s ease;
}

.direction-button:hover:not(:disabled) {
  transform: scale(1.05);
}

.direction-button:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.arrow {
  font-size: 1rem;
  animation: wave 1.6s ease-in-out infinite;
  display: inline-block;
}

.arrow.up {
  animation-delay: 0s;
}

.arrow.down {
  animation-delay: 0.3s;
}

.page-indicator button {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  border: none;
  padding: 0;
  cursor: pointer;
  transition:
    transform 0.18s ease,
    background 0.18s ease,
    opacity 0.18s ease;
  opacity: 0.85;
}

.page-indicator button.active {
  background: #79c8ff;
  transform: scale(1.2);
  box-shadow: 0 10px 22px rgba(121, 200, 255, 0.22);
}

@keyframes wave {
  0%,
  100% {
    color: #79c8ff;
    transform: translateY(0);
  }
  50% {
    color: #a8f0ff;
    transform: translateY(-2px);
  }
}
</style>
