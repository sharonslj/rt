<template>
  <div id="app">
    <a-layout id="components-layout-demo-responsive">
      <a-layout-sider
        breakpoint="lg"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
        v-model="collapsed"
      >
        <div class="logo" />
        <a href="javascript:;" class="header-left">
          <img src="./images/logo.png" alt="" />
          <h4>APISIX Dashboard</h4>
        </a>
        <a-menu theme="dark" mode="inline" :default-selected-keys="['0']">
          <a-menu-item key="1">
            <a-icon type="user" />
            <span class="nav-text">仪表板</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="video-camera" />
            <span class="nav-text">路由</span>
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="upload" />
            <span class="nav-text">上游</span>
          </a-menu-item>
          <a-menu-item key="4">
            <a-icon type="user" />
            <span class="nav-text">服务</span>
          </a-menu-item>
          <a-menu-item key="5">
            <a-icon type="user" />
            <span class="nav-text">消费者</span>
          </a-menu-item>
          <a-menu-item key="6">
            <a-icon type="user" />
            <span class="nav-text">插件</span>
          </a-menu-item>
          <a-menu-item key="7">
            <a-icon type="user" />
            <span class="nav-text">证书</span>
          </a-menu-item>
          <a-menu-item key="8">
            <a-icon type="user" />
            <span class="nav-text">系统信息</span>
          </a-menu-item>
        </a-menu>
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-sider>
      <a-layout>
        <a-layout-header :style="{ background: 'dark', padding: 0 }">
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px 0' }">
          <div
            :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
          >
            content
          </div>
        </a-layout-content>
        <a-layout-footer style="textalign: center">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
  },
};
</script>

<style>
body {
  height: 100%;
}
#app {
  height: 100%;
}
#components-layout-demo-responsive {
  height: 100%;
}

#components-layout-demo-responsive .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  color: #fff;
}
.header-left {
  display: flex;
  align-items: center;
  margin: 20px 0 15px 10px;
  justify-content: left;
}
.header-left img {
  display: block;
  width: 30px;
  height: 30px;
  margin-right: 5px;
}
.header-left h4 {
  color: #fff;
  font-size: 18px;
  margin: 0;
}
</style>

 