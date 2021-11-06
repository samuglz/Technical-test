<template>
    <figure class="card">
        <img
            v-show="isLoad"
            :src="src"
            :alt="alt"
            class="imgCard"
            :class="{
                'fadeIn': isLoad
            }"
            @load="handleLoad"
        >
        <Spinner v-show="!isLoad" />
    </figure>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import Spinner from '@/components/Spinner.vue';

const isLoad = ref(false);

const handleLoad = () => {
    isLoad.value = true;
};

defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    }
});
</script>

<style scoped>
.card{
  @apply cursor-pointer md:w-72
}

.imgCard{
  @apply rounded-md shadow-md md:w-72
}

.fadeIn{
  animation: fadein 1.5s;
}

@keyframes fadein {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

</style>
