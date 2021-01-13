<template>
    <div class="picket-list" ref="list">
        <div v-for="item in min" :key="item">{{ item }}</div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
    setup() {
        const min = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        const value = [0, 0, 0]

        const list = ref(null)
        const itemHeight = -30
        var startHeight = value[0] * itemHeight + 60 //默认活动的高度
        var gapHeight = 0 //触发滑动的差值高度
        let startObj = {
            startY: 0,
        }
        let endObj = {
            endY: 0,
        }
        onMounted(() => {
            list.value.style.transform = `translateY(${startHeight}px)`

            list.value.addEventListener('touchstart', (e) => {
                // console.log(e.touches[0])
                startObj.startY = e.touches[0].pageY
                // console.log('startHeight: ' + startHeight)
                list.value.style.transform = `translateY(${startHeight}px)`
            })

            list.value.addEventListener('touchmove', (e) => {
                // console.log(e)
                endObj.endY = e.touches[0].pageY
                gapHeight = -(startObj.startY - endObj.endY)
                // console.log(gapHeight)
                // if()
                // console.log(gapHeight / itemHeight)
                list.value.style.transform = `translateY(${startHeight + gapHeight}px)`
            })

            list.value.addEventListener('touchend', (e) => {
                endObj.endY = e.changedTouches[0].pageY
                gapHeight = -(startObj.startY - endObj.endY)

                startHeight = gapHeight + startHeight
                console.log('滑动的距离: ' + gapHeight)
                console.log('默认值: ' + startHeight)

                if (gapHeight <= 0) {
                    //向上划
                    let len = min.value.length - 1
                    // let deHeight = abs(gapHeight)
                    // len * abs(itemHeight) - deHeight
                    console.log(len * Math.abs(itemHeight) + startHeight)
                    if (len * Math.abs(itemHeight) + startHeight < 60) {
                        console.log(60 - (len * Math.abs(itemHeight) + startHeight))
                        //划完了 超出回滚
                        list.value.style.transform = `translateY(${60 - len * Math.abs(itemHeight) + startHeight}px)`
                    }
                }
            })
        })

        return {
            list,
            min,
        }
    },
}
</script>

<style lang="scss" scoped>
.picket-list {
    height: 150px;
    // border: 1px solid palevioletred;

    div {
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
