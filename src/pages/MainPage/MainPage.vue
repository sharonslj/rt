<template>
  <div class="nav">
    <a-layout id="components-layout-demo-responsive">
      <!-- 侧边栏 -->
      <a-layout-sider
        class="sider"
        breakpoint="lg"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
        v-model="collapsed"
      >
        <a-menu
          theme="dark"
          mode="inline"
          :selected-keys="[$route.path]"
          @click="({ key }) => goTo(key)"
        >
          <a-menu-item key="/mainpage/dashboard">
            <a-icon type="user" />
            <span class="nav-text">仪表板</span>
          </a-menu-item>
          <a-menu-item key="/mainpage/routes/list">
            <a-icon type="video-camera" />
            <span class="nav-text">路由</span>
          </a-menu-item>
          <a-menu-item key="/mainpage/upstream/list">
            <a-icon type="upload" />
            <span class="nav-text">上游</span>
          </a-menu-item>
          <a-menu-item key="/mainpage/service/list">
            <a-icon type="user" />
            <span class="nav-text">服务</span>
          </a-menu-item>
          <a-menu-item key="/mainpage/consumer/list">
            <a-icon type="user" />
            <span class="nav-text">消费者</span>
          </a-menu-item>
          <a-menu-item key="/mainpage/plugin/list">
            <a-icon type="user" />
            <span class="nav-text">插件</span>
          </a-menu-item>
          <a-menu-item key="/mainpage/ssl/list">
            <a-icon type="user" />
            <span class="nav-text">证书</span>
          </a-menu-item>
          <a-menu-item key="/mainpage/serverinfo">
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
      <!-- 顶部 内容 底部区域 -->
      <a-layout>
        <!-- 顶部 -->
        <a-layout-header
          :style="{ background: 'dark', padding: 0 }"
          class="header-nav"
        >
          <!-- 顶部导航左侧 -->
          <a href="javascript:;" class="header-left">
            <img src="./images/logo.png" alt="" />
            <h4>APISIX Dashboard</h4>
          </a>
          <!-- 顶部导航中间 -->
          <div class="header-middle"></div>
          <!-- 顶部导航右侧 -->
          <div class="header-right">
            <!-- 问号 -->
            <div id="components-a-tooltip-demo-placement">
              <div
                :style="{
                  marginLeft: `${buttonWidth}px`,
                  whiteSpace: 'nowrap',
                }"
              >
                <a-tooltip placement="bottom">
                  <template slot="title">
                    <span>Documentation </span>
                  </template>
                  <a-button><a-icon type="question-circle" /></a-button>
                </a-tooltip>
              </div>
            </div>
            <!-- 标志两行显示 -->
            <div class="logo">
              <a href="javascript:;">
                <img src="./images/logo.png" alt="" />
                <span>APISIX User</span>
              </a>
              <ul class="textshow" style="display: none">
                <li><a href="javascript:;">系统设置</a></li>
                <li><a href="javascript:;">退出登录</a></li>
              </ul>
            </div>
            <!-- 中英文切换 两行显示 -->
            <div class="changelange">
              <a href="javascript:;">
                <a-icon type="interaction" />
              </a>
              <ul class="textshow" style="display: none">
                <li><a href="javascript:;">系统设置</a></li>
                <li><a href="javascript:;">退出登录</a></li>
              </ul>
            </div>

            <span> </span>
          </div>
        </a-layout-header>
        <!-- 内容区 -->
        <a-layout-content :style="{ margin: '60px 0 0' }">
          <div :style="{ padding: '24px', background: '#fff' }">
            <router-view></router-view>
          </div>
        </a-layout-content>

        <!-- 底部 -->
        <a-layout-footer class="footercontent">
          <img src="./images/git.logo.png" alt="" />
          <div>
            Copyright <i class="iconfont icon-banquan"></i> 2021 Apache APISIX
          </div>
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
      buttonWidth: 70,
    };
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
    goTo(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.nav {
  height: 100%;
}
#components-layout-demo-responsive {
  height: 100%;
}
.sider {
  margin-top: 60px;
}
#components-layout-demo-responsive .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  color: #fff;
}
.header-nav {
  display: flex;
  position: fixed;
  width: 100%;
  left: 0;
}
.header-left {
  display: flex;
  align-items: center;
  margin: 5px 0 15px 10px;
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
.header-right {
  display: flex;
  color: #fff;
  margin-right: 50px;
  justify-content: center;
}
#components-a-tooltip-demo-placement .ant-btn {
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
.logo {
  display: block;
  width: 200px;
  height: 30px;
  padding: 0 20px;
}
.logo a {
  color: #fff;
}
.header-middle {
  flex: 1;
}
.changelange a {
  color: #fff;
}
.logo a:hover {
  color: #fff;
}
.changelange a:hover {
  color: #fff;
}
.textshow {
  background: #fff;
}
.textshow li {
  width: 100px;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #ccc;
  text-align: center;
}
.textshow li a {
  color: black;
}
.footercontent {
  text-align: center;
}
.footercontent img {
  width: 30px;
  height: 30px;
  text-align: center;
}
</style>