<template>
    <div ref="el" />
</template>

<script setup>
import {
    onMounted, ref, defineEmits, defineProps, onUnmounted
} from 'vue';

const emit = defineEmits(['intersect']);
const props = defineProps({
    options: {
        type: Object,
        default: () => {}
    }
});

const observer = ref(null);
const el = ref(null);

onMounted(() => {
    const opt = props.options || {};
    observer.value = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
            emit('intersect');
        }
    }, opt);

    observer.value.observe(el.value);
});

onUnmounted(() => {
    observer.value.disconnect();
});

</script>

<style scoped>
</style>
