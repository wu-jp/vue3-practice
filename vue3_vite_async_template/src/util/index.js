import { defineAsyncComponent, h } from 'vue' // defineAsyncComponent: vue异步组件的导入方式
import Error from '../components/Error.vue'
import Loading from '../components/Loading.vue'

//页面加载进度条
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
NProgress.configure({
    trickleSpeed: 50,
    showSpinner: false,
})

//返回一个Promise实例
export function delay(duration) {
    if(!duration) {
        duration = random(1000, 5000)
    }

    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, duration)
    })
}

/**
 * 获取范围内的随机数
 * @param min 最小值
 * @param max 最大值
 * @returns {*}
 */
export function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

/**
 * 加载异步页面
 * @param path 页面路径
 * @returns {{new(): ComponentPublicInstance}} 虚拟dom
 */
export function getAsyncPage(path) {
    return defineAsyncComponent({
        loader: async () => {
            NProgress.start()
            await delay()
            const comp = import(path)
            NProgress.done()
            return comp
        },
        loadingComponent: Loading,
    })
}

/**
 * 加载异步组件
 * @param path 组件路径
 * @returns {{new(): ComponentPublicInstance}|VNode} 虚拟dom
 */
export function getAsyncComponent(path) {
    return defineAsyncComponent({
        loader: async () => {
            await delay()
            if(Math.random() < 0.5) {
                throw new TypeError()
            }
            return import(path)
        },
        loadingComponent: Loading,
        errorComponent: {
            render() {
                return h(Error, '加载出错了...');
            }
        },
    })
}