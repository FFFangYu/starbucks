import Vue from "vue";
import VueRouter from "vue-router";

// 实现路由懒加载
const Home = () => import("@/views/home/Home");
const Card = () => import("@/views/card/Card");
const Message = () => import("@/views/message/Message");
const User = () => import("@/views/user/User");
const News = () => import("@/views/message/News");
const MyMsg = () => import("@/views/message/MyMsg");
// 安装插件
Vue.use(VueRouter);

// 创建路由对象
const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/card", component: Card },
  {
    path: "/message",
    component: Message,
    children: [
      { path: "/message/news", component: News },
      { path: "/message/mymsg", component: MyMsg },
    ],
    linkActiveClass:"slider-color"
  },
  { path: "/user", component: User },
  
];

const router = new VueRouter({
  routes,
  mode: "history",
  linkActiveClass: "mui-active", //覆盖默认的路由高亮类
});

router.beforeEach((to, from, next) => {
  if((from.path==='/message/news'||from.path==='/message/mymsg')&&to.path=='/message'){
    return
  } 
  next()
})

export default router;
