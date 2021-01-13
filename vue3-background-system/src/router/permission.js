// 路由权限
import router from './index'
import store from '../store/index'
import { getToken } from '@/util/auth'

// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach(async (to, from, next) => {
    //显示进度条
    NProgress.start()

    //判断是否有token
    if (getToken()) {
        if (to.path === '/login') {
            next({ path: '/login' })
        } else {
            //判断store中是否存在userInfo  同过异步分发的方式Action
            // 不存在就去获取再next()
            // 存在就直接通过next()
        }
    } else {
        next()
    }
})
