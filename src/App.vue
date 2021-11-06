<template>
    <div
        v-if="allImages.length > 0"
        class="gallery-container"
    >
        <ImageCard
            v-for="({id, url, title}) in allImages"
            :key="id"
            :src="url"
            :alt="title"
            @click="deleteImage(id)"
        />
        <Observer @intersect="loadMoreImages" />
    </div>
    <div
        v-if="loading"
        class="w-screen h-screen flex justify-center items-center"
    >
        <Spinner />
    </div>
</template>

<script setup>
import {
    ref, watch
} from 'vue';
import { useFetch } from '@/hooks';
import ImageCard from '@/components/ImageCard.vue';
import Observer from '@/components/Observer.vue';
import Spinner from '@/components/Spinner.vue';

const startImage = ref(0);
const limit = ref(20);

const { data: images, loading } = useFetch(`https://jsonplaceholder.typicode.com/photos?_start=${startImage.value}&_limit=${limit.value}`);
const allImages = ref([]);

watch(images, () => {
    allImages.value = [...images.value];
});

const deleteImage = id => {
    allImages.value = allImages.value.filter(image => image?.id !== id);
};

const loadMoreImages = () => {
    startImage.value += 20;
    fetch(`https://jsonplaceholder.typicode.com/photos?_start=${startImage.value}&_limit=${limit.value}`)
        .then(res => res.json())
        .then(newImages => {
            allImages.value = [...allImages.value, ...newImages];
        });
};

</script>

<style scoped>
.gallery-container {
  @apply grid grid-cols-2 md:grid-cols-auto-fit gap-2 p-2 place-content-center
}
</style>
