<template>
  <div class="live">
    <video controls style="width:1000px;height:500px;border:1px solid #555;" ref="video"></video>
    <div style="padding:10px 10px;">
        <a @click="start"> 开播 </a>
    </div>
  </div>
</template>
<script setup>
import { onMounted ,ref} from 'vue';
    const video = ref();

    function start(){
        navigator.mediaDevices.getUserMedia({video:true,audio:true}).then((stream) => {
            video.value.srcObject = stream
            video.value.play();
        }).catch((err) => {
            alert('获取设备失败')
        })
    }

</script>
<style>
    .live{
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
    }
</style>
