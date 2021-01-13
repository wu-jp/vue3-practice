<template>
    <div>
        <h1>抽奖啦</h1>
        <div class="award-box">
            <div class="item0">0</div>
            <div class="item1">1</div>
            <div class="item2">2</div>
            <div class="item3">3</div>
            <div class="item4">4</div>
            <div class="item5">5</div>
            <div class="item6">6</div>
            <div class="item7">7</div>
            <div class="item8">go</div>
        </div>
        <h1>canvas</h1>
        <canvas id="drawing" width="200" height="200"></canvas>
    </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
    setup() {
        onMounted(() => {
            // document.getElementById('drawing')
            let canvas = document.getElementById('drawing')
            console.log(canvas)
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d')
                ctx.beginPath()
                ctx.arc(75, 75, 50, 0, Math.PI * 2, true) // 绘制
                ctx.moveTo(110, 75)
                ctx.arc(75, 75, 35, 0, Math.PI, false) // 口(顺时针)
                ctx.moveTo(65, 65)
                ctx.arc(60, 65, 5, 0, Math.PI * 2, true) // 左眼
                ctx.moveTo(95, 65)
                ctx.arc(90, 65, 5, 0, Math.PI * 2, true) // 右眼
                ctx.stroke()
            }
        })
    },
}
</script>

<style lang="scss" scoped>
.award-box {
    display: grid;
    grid-gap: 10px;
    grid-template-areas:
        'first second thrid'
        'eight middle four'
        'seven six five';
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    color: #fff;
    font-size: 3em;

    justify-content: center;

    .item0 {
        grid-area: first;
        background-color: goldenrod;
    }
    .item1 {
        grid-area: second;
        background-color: rgb(67, 233, 52);
    }
    .item2 {
        grid-area: thrid;
        background-color: rgb(18, 167, 204);
    }
    .item3 {
        grid-area: four;
        background-color: rgb(84, 19, 138);
    }
    .item4 {
        grid-area: five;
        background-color: rgb(176, 238, 118);
    }
    .item5 {
        grid-area: six;
        background-color: rgb(14, 168, 109);
    }
    .item6 {
        grid-area: seven;
        background-color: rgb(17, 26, 153);
    }
    .item7 {
        grid-area: eight;
        background-color: rgb(186, 15, 135);
    }
    .item8 {
        grid-area: middle;
        background-color: rgb(184, 27, 10);
    }
}</style
>>
