<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div class="bg-white rounded-md h-28 border-neutral-400"></div>
      <div class="bg-white rounded-md h-28 border-neutral-400"></div>
      <div class="bg-white rounded-md h-28 border-neutral-400"></div>
      <div class="bg-white rounded-md h-28 border-neutral-400"></div>
    </div>

    <div class="grid grid-flow-col grid-rows-3 gap-5 my-5 h-96">
      <div class="col-span-2 row-span-3 bg-white rounded-md"></div>
      <div class="col-span-2 bg-white rounded-md"></div>
      <div class="col-span-2 row-span-2 bg-white rounded-md"></div>
    </div>

    <div class="grid grid-flow-col grid-rows-2 gap-5 my-5 h-96">
      <div class="row-span-2 bg-white rounded-md"></div>
      <div class="row-span-2 bg-white rounded-md"></div>
    </div>
  </div>
</template>

<script setup lang="ts" name="home"></script>

<style scoped lang="scss">
@import "./index.scss";
</style>
