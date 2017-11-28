<template>
    <div v-loading.fullscreen.lock="storeLoading" element-loading-text="Loading Store"><img id="logo" src="~@/assets/bell.svg" alt="electron-vue"></div>
</template>

<script>
  export default {
    name: 'loader',
  };
</script>