<template>
  <div class="table_box"></div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import $ from "jquery";

const table = reactive({
  data: [],
  columns: [],
});
// (function ($) {})(jQuery);
</script>

<style lang="less" scoped></style>
