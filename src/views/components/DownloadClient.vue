<template>
  <a-table :columns="columns" :data="data">
    <template #fileName="{ record }">
        <span v-if="record.icon" class="logoBox">
            <img :src="record.icon" />
          </span>
          <span>{{ record.fileName }}</span>
    </template>
     <template #action="{ record }">
      <a-button type="primary" @click="downloadFile(record)">
        下载
      </a-button>
  </a-table>
</template>

<script setup>
import { onMounted, ref } from "vue";
import yaml from "js-yaml";

const columns = ref([
  {
    title: "文件名",
    slotName:  "fileName" ,
  },
  {
    title: "操作",
    slotName: "action" ,
  },
]);
const downloadInfo = ref([]);
const downloadAppMeta = () => {
  this.fetchMeta("latest-mac.yml", "macOS");
  this.fetchMeta("latest.yml", "windows");
};
const fetchMeta = (path, os) => {
  const url = import.meta.env.VITE_APP_DOWNLOADURL + "/" + path;
  fetch(url, { cache: "no-store" })
    .then((res) => {
      if (res.status !== 200) {
        return null;
      } else {
        return res.text();
      }
    })
    .then((res) => {
      if (!res) return;
      let cfg = yaml.load(res);
      let downloadURL = import.meta.env.VITE_APP_DOWNLOADURL + "/";
      if (cfg.files.length == 0) {
        return;
      } else if (cfg.files.length == 1) {
        downloadURL += cfg.files[0].url;
      } else if (cfg.files.length > 1) {
        downloadURL += cfg.files[1].url;
      }
      downloadInfo.value.unshift({
        url: downloadURL,
        icon: new URL("../../assets/icons/logo.png", import.meta.url).href,
        fileName: `链贸通【${this.appNamerVsion}】- ${os}  版本号:${
          cfg.version
        } 发布时间:${new Date(cfg.releaseDate).toLocaleString()}`,
      });
    });
};
const downloadFile = (record) => {
    const link = document.createElement('a')
    if (file.url.includes('https://') || file.url.includes('http://')) {
    link.href = file.url
    } else {
    link.href = this.origin + '/api/file/' + file.url
    }
    link.download = file.fileName
    link.click()
};
onMounted(() => {
  //   downloadAppMeta();
});
</script>

<style></style>
