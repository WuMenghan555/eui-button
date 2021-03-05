import Button from './button';
import './fonts/font.scss'
// 存储组件列表
const components = [
  Button
]

// 定义install方法，接受Vue作为参数，如果使用use注册插件，则所有的组件都得被注册

const install = function(Vue) {
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name,component)
  })
}

// 判断是否直接引入文件
if(typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须有install，才能被Vue.use() 方法安装
  install, 
  Button
}

