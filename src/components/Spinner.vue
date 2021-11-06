<template>
    <div
        class="spinner-container"
    >
        <div class="spiner" />
    </div>
</template>

<style scoped>
.spinner-container {
  @apply flex justify-center items-center w-20 h-20 md:w-72 md:h-72
}

.spiner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #09f;

  animation: spin 1s ease infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
