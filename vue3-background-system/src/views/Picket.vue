<template>
    <div id="picket">
        <!-- <div class="picket-list" ref="list">
            <div v-for="item in day" :key="item">{{ item }}</div>
        </div>
        <div class="picket-list">
            <div v-for="item in hour" :key="item">{{ item }}</div>
        </div>
        <div class="picket-list">
            <div v-for="item in min" :key="item">{{ item }}</div>
        </div> -->
        <picket-item />
        <picket-item />
        <picket-item />
    </div>
</template>

<script>
// import { onMounted, ref } from 'vue'
import PicketItem from '@/components/PicketItem.vue'

export default {
    components: {
        PicketItem,
    },
    setup() {
        // const day = ref(['20', '21', '22', '23', '24', '25', 26, 27, 28, 29, 30])
        // const hour = ref(['01', '02', '03', '04', '05', '06', '07', '08'])
        // const min = ref(['1', '2', '3', '4', '5', '6', '7', '8'])
        // const value = [0, 0, 0]
        // const el = ref(null)
        // const list = ref(null)
        // const itemHeight = -30
        // var startHeight = value[0] * itemHeight + 60 //默认活动的高度
        // var gapHeight = 0 //触发滑动的差值高度
        // let startObj = {
        //     startY: 0,
        // }
        // let endObj = {
        //     endY: 0,
        // }
        // onMounted(() => {
        //     // el.value.innerHTML = '改变了内容'
        //     // console.log(el.value)
        //     list.value.style.transform = `translateY(${startHeight}px)`
        //     el.value.addEventListener('click', () => {
        //         console.log('点击了我')
        //     })
        //     list.value.addEventListener('touchstart', (e) => {
        //         // console.log(e.touches[0])
        //         startObj.startY = e.touches[0].pageY
        //         console.log('startHeight: ' + startHeight)
        //         list.value.style.transform = `translateY(${startHeight}px)`
        //     })
        //     list.value.addEventListener('touchmove', (e) => {
        //         // console.log(e)
        //         endObj.endY = e.touches[0].pageY
        //         gapHeight = -(startObj.startY - endObj.endY)
        //         // console.log(gapHeight)
        //         // console.log(gapHeight / itemHeight)
        //         list.value.style.transform = `translateY(${startHeight + gapHeight}px)`
        //     })
        //     list.value.addEventListener('touchend', () => {
        //         startHeight = gapHeight + startHeight
        //     })
        // })
        // return {
        //     day,
        //     hour,
        //     min,
        //     el,
        //     list,
        // }
    },
}
</script>

<style lang="scss" scoped>
#picket {
    position: relative;
    width: 100%;
    // border: 1px solid blue;
    height: 150px;
    display: grid;
    grid-template-columns: repeat(3, 33.33%);
    overflow: hidden;

    // .picket-list {
    //     height: 150px;
    //     border: 1px solid palevioletred;

    //     div {
    //         height: 30px;
    //         display: flex;
    //         align-items: center;
    //         justify-content: center;
    //     }
    // }
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 60px;
        width: 100%;
        background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.2));
        border-bottom: 1px solid #f4f4f2;
        pointer-events: none;
        z-index: 999;
    }
    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 60px;
        width: 100%;
        background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.7));
        border-top: 1px solid #f4f4f2;
        pointer-events: none;
        z-index: 999;
    }
}
</style>
