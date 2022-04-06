// 1.注册svg-icon组件
import Vue from 'vue';
import SvgIcon from '@/components/SvgIcon.vue';

Vue.component('svg-icon', SvgIcon);

// 2.自动加载svg目录下所有图标
const req = require.context('./svg', false, /\.svg$/);
console.dir(req);
// 返回数组的名称就是图标文件的名称
req.keys().map(req);
