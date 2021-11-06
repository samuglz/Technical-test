import { ref } from 'vue';

export const useFetch = (url, config = {}) => {
    const data = ref(null);
    const loading = ref(null);
    const error = ref(null);

    (async () => {
        try {
            loading.value = true;
            data.value = await fetch(url, config).then(res => res.json());
        } catch (err) {
            error.value = err;
        } finally {
            loading.value = false;
        }
    })();

    return { data, loading, error };
};
