<template>
  <el-tabs v-model="activeName" :tab-position="tabPosition" @tab-click="handleClick" style="height: 80vh;">
    <el-tab-pane name="first">
      <span slot="label">Bell <i class="el-icon-time"></i></span>
      <bell-schedule></bell-schedule>
    </el-tab-pane>
    <el-tab-pane name="second">
      <span slot="label">Sound <i class="el-icon-service"></i></span>
      <bell-sound></bell-sound>
    </el-tab-pane>
    <el-tab-pane name="third">
      <span slot="label">Setting <i class="el-icon-setting"></i></span>
      <setting></setting>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import BellSchedule from './BellSchedule.vue';
  import BellSound from './BellSound.vue';
  import Setting from './Setting.vue';

  export default {
    name: 'landing-page',
    components: {
      BellSchedule,
      BellSound,
      Setting,
    },
    data() {
      return {
        activeName: 'first',
        tabPosition: 'left',
      };
    },
    methods: {
      handleClick(tab, event) {
        // eslint-disable-next-line no-console
        console.log(tab, event);
      },
    },
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @import '~@/assets/css/material-icons.css';

  body { font-family: 'Source Sans Pro', sans-serif; }
</style>
