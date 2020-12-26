# vue3-practice
vue3.0练习项目
## vue3-check-editor
vue3+vite构建，用于熟悉3.0新的api和响应式数据的变化

启动项目:
```npm
yarn dev
```

## vue3-vite-demo
vue3+vite构建的todoList项目，用于熟悉3.0中模板的变化

启动项目:
```npm
yarn dev
```

## vue-vite-async-template
vue3+vite构建的异步组件加载的项目，用于熟悉3.0中组件的变化

启动项目:
```npm
yarn dev
```

## 一些笔记

### 1. vue3.0中，异步组件的导入
#### 导入
`defineAsyncComponent`方法需要具名导入
```js
import { defineAsyncComponent} from 'vue' 
```
#### 使用
`defineAsyncComponent()`参数为一个对象，`loading`属性值为一个promise实例
```js
defineAsyncComponent({
    loader: async () => {
        // await...
    },
    // loadingComponent: ... 加载中的组件
    // errorComponent: ... 加载失败的组件
})
```

### 2. vue3中 render函数中的h函数需要具名导入
``` js
import { h} from 'vue' 
```

### 3. Teleport标签
Teleport 标签为vue3.0的内置标签，用于将内部元素移动到某个元素的内部，to属性值表示移动到目标标签内
```vue
<Teleport to="body">
    <Modal v-if="modalVisibleRef">
        <button @click="modalVisibleRef = false">关闭蒙层</button>
    </Modal>
</Teleport>
```
