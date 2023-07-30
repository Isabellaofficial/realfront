import {ref, computed} from 'vue'

export const collapsed = ref(true)
export const toggleSidebar = () => (collapsed.value =! collapsed.value)

export const SIDEBAR_WIDTH = 500
export const SIDEBAR_HEIGHT = 5000
export const SIDEBAR_WIDTH_COLLAPSED = 100
export const SIDEBAR_HEIGHT_COLLAPSED =100
export const sidebarWidth = computed(
    () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)
export const sidebarHeight = computed(
    () => `${collapsed.value ? SIDEBAR_HEIGHT_COLLAPSED : SIDEBAR_HEIGHT}px`
)
