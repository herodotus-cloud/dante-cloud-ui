<template>
  <router-view v-if="isRouterAlive"></router-view>
</template>

<script lang="ts">
import { defineComponent, watch, provide, ref, onMounted, onUnmounted } from 'vue';
import { useQuasar } from 'quasar';
import { echarts } from '@/plugins';
import {
  useSettingsStore,
  useAuthenticationStore,
  useWebSocketStore,
  useApplicationStore,
} from '@/stores';
import { variables } from '@/lib/utils';
import { echartsInjectionKey } from '@/lib/symbol';

export default defineComponent({
  name: 'App',

  setup() {
    const settings = useSettingsStore();
    const authentication = useAuthenticationStore();
    const webSocket = useWebSocketStore();
    const app = useApplicationStore();
    const { isRouterAlive } = storeToRefs(app);
    const $q = useQuasar();
    const gapTime = ref(0);
    const beforeUnloadTime = ref(0);

    provide(echartsInjectionKey, echarts);

    watch(
      () => settings.isDark,
      (newValue: boolean) => {
        $q.dark.set(newValue);
      },
    );

    const beforeUnloadHandler = (e: any) => {
      beforeUnloadTime.value = new Date().getTime();
      webSocket.disconnect();
    };

    const unloadHandler = (e: any) => {
      gapTime.value = new Date().getTime() - beforeUnloadTime.value;
      // 刷新时onbeforeunload与onunload的时间差一般都远大于5
      // 浏览器关闭
      // 判断是窗口关闭还是刷新 毫秒数判断 网上大部分写的是5
      if (gapTime.value <= 10) {
        if (authentication.token) {
          authentication.signOut();
        }
        localStorage.clear();
        sessionStorage.clear();
      } else {
        return confirm('确定要离开本系统么？');
      }
    };

    onMounted(() => {
      if (!variables.getAutoRefreshToken()) {
        // 监听浏览器关闭
        window.addEventListener('beforeunload', (e) => beforeUnloadHandler(e));
        window.addEventListener('unload', (e) => unloadHandler(e));
      }
    });

    onUnmounted(() => {
      if (!variables.getAutoRefreshToken()) {
        window.removeEventListener('beforeunload', (e) => beforeUnloadHandler(e));
        window.removeEventListener('unload', (e) => unloadHandler(e));
      }
    });

    return {
      isRouterAlive,
    };
  },
});
</script>

<style lang="scss">
h2 {
  line-height: unset !important;
}

.swal2-container {
  z-index: 10000 !important;
}
</style>
