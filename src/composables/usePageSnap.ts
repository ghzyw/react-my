import { onMounted, onBeforeUnmount, reactive } from 'vue'

export function usePageSnap() {
  const state = reactive({
    currentIndex: 0,
    sections: [] as HTMLElement[],
    isAnimating: false,
  })

  const updateSections = () => {
    state.sections = Array.from(document.querySelectorAll('.section')) as HTMLElement[]
  }

  const scrollToIndex = (index: number) => {
    if (index < 0 || index >= state.sections.length) return

    const section = state.sections[index]
    if (!section) return

    state.isAnimating = true
    state.currentIndex = index

    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    })

    window.setTimeout(() => {
      state.isAnimating = false
    }, 600)
  }

  const handleWheel = (event: WheelEvent) => {
    if (state.isAnimating) return

    const target = event.deltaY > 0 ? state.currentIndex + 1 : state.currentIndex - 1
    if (target === state.currentIndex) return

    scrollToIndex(target)
  }

  const handleScroll = () => {
    if (state.isAnimating) return
    state.currentIndex = Math.round(window.scrollY / window.innerHeight)
  }

  onMounted(() => {
    updateSections()
    window.addEventListener('resize', updateSections)
    window.addEventListener('scroll', handleScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateSections)
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    handleWheel,
    state,
    scrollToIndex,
  }
}
