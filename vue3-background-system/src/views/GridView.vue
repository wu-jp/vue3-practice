<template>
    <div>
        <h1>Grid</h1>

        <div class="grid-view">
            <div class="item view1">
                <h2>简单用法</h2>
                <div class="view1-box">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </div>
            </div>
            <div class="item view2">
                <h2>repeat用法</h2>
                <div class="view2-box">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                </div>
            </div>
            <div class="item view3">
                <h2>auto-fill用法</h2>
                <div class="view3-box">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                </div>
            </div>
            <div class="item view4">
                <h2>fr用法</h2>
                <div class="view4-box">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </div>
            </div>
            <div class="item view5">
                <h2>grid-auto-flow</h2>
                <div class="btn-box">
                    <button @click="changeAutoFlow('row')">row 先行后列</button>
                    <button @click="changeAutoFlow('column')">column 先列后行</button>
                </div>
                <div class="view5-box" :style="flowStyle">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                </div>
            </div>

            <div class="item view6">
                <h2>grid-auto-flow</h2>
                <div class="btn-box">
                    <button @click="changeAutoFlow1('row')">row 先行后列</button>
                    <button @click="changeAutoFlow1('row dense')">row dense 尽量填满空格</button>
                </div>
                <div class="view6-box" :style="flwoStyle1">
                    <div class="item1">1</div>
                    <div class="item2">2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </div>
            </div>

            <div class="item view7">
                <h2>grid-auto-flow</h2>
                <div class="btn-box">
                    <button @click="changeAutoFlow2('column')">column 先列后行</button>
                    <button @click="changeAutoFlow2('column dense')">column dense 尽量填满空格</button>
                </div>
                <div class="view7-box" :style="flwoStyle2">
                    <div class="item1">1</div>
                    <div class="item2">2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </div>
            </div>

            <div class="item view8">
                <h2>实例</h2>
                <div class="view8-box">
                    <div class="item1">1</div>
                    <div class="item2">2</div>
                    <div>3</div>
                </div>
            </div>
        </div>
        <div class="minmax">
            <h2>搭配 minmax() 使用 auto-full 和 auto-fit</h2>
            <div class="mm-box">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
    name: 'GridView.vue',
    setup() {
        const state = reactive({
            flowStyle: {
                gridAutoFlow: 'column',
            },
            flwoStyle1: {
                gridAutoFlow: 'row',
            },
            flwoStyle2: {
                gridAutoFlow: 'column',
            },
        })
        function changeAutoFlow(text) {
            state.flowStyle.gridAutoFlow = text
        }

        function changeAutoFlow1(text) {
            state.flwoStyle1.gridAutoFlow = text
        }

        function changeAutoFlow2(text) {
            state.flwoStyle2.gridAutoFlow = text
        }
        return {
            ...toRefs(state),
            changeAutoFlow,
            changeAutoFlow1,
            changeAutoFlow2,
        }
    },
}
</script>

<style lang="scss" scoped>
.grid-view {
    display: grid;
    grid-template-columns: repeat(auto-fill, 400px);
    grid-column-gap: 20px;

    .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .view1 {
        .view1-box {
            display: grid;
            grid-template-columns: 100px 100px 100px;
            grid-template-rows: repeat(2, 100px);
            grid-column-gap: 10px;
            grid-row-gap: 10px;

            div {
                font-size: 2em;
                text-align: center;
                background-color: palevioletred;
            }
        }
    }

    .view2 {
        .view2-box {
            display: grid;
            grid-template-columns: repeat(2, 50px 120px);
            // grid-template-columns: repeat(2, 100px 200px);
            grid-template-rows: repeat(2, 100px);
            grid-column-gap: 10px;
            grid-row-gap: 10px;

            div {
                font-size: 2em;
                text-align: center;
                background-color: palevioletred;
            }
        }
    }

    .view3 {
        .view3-box {
            width: 300px;
            display: grid;
            grid-template-columns: repeat(auto-fit, 90px);
            grid-template-rows: repeat(2, 100px);
            grid-gap: 10px;

            div {
                font-size: 2em;
                text-align: center;
                background-color: palevioletred;
            }
        }
    }
    .view4 {
        .view4-box {
            width: 300px;
            display: grid;
            grid-template-columns: 40px 1fr 1fr;
            grid-template-rows: repeat(2, 100px);
            grid-gap: 10px;

            div {
                font-size: 2em;
                text-align: center;
                background-color: palevioletred;
            }
        }
    }
    .view5 {
        .btn-box {
            display: flex;
            align-content: center;
            justify-content: space-evenly;
            margin-bottom: 30px;
        }
        .view5-box {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            grid-template-rows: repeat(3, 100px);
            grid-gap: 10px;
            // grid-auto-flow: column;

            div {
                font-size: 2em;
                text-align: center;
                background-color: palevioletred;
            }
        }
    }

    .view6 {
        .btn-box {
            display: flex;
            align-content: center;
            justify-content: space-evenly;
            margin-bottom: 30px;
        }
        .view6-box {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            grid-template-rows: repeat(3, 100px);
            grid-gap: 10px;
            // grid-auto-flow: row;

            div {
                font-size: 2em;
                text-align: center;
                background-color: palevioletred;
            }
            .item1 {
                grid-column-start: 1;
                grid-column-end: 3;
                background-color: fuchsia;
            }
            .item2 {
                grid-column-start: 1;
                grid-column-end: 3;
                background-color: rgb(0, 255, 145);
            }
        }
    }

    .view7 {
        .btn-box {
            display: flex;
            align-content: center;
            justify-content: space-evenly;
            margin-bottom: 30px;
        }
        .view7-box {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            grid-template-rows: repeat(3, 100px);
            grid-gap: 10px;
            // grid-auto-flow: column;

            div {
                font-size: 2em;
                text-align: center;
                background-color: palevioletred;
            }
            .item1 {
                grid-row-start: 1;
                grid-row-end: 3;
                background-color: fuchsia;
            }
            .item2 {
                grid-row-start: 1;
                grid-row-end: 3;
                background-color: rgb(0, 255, 145);
            }
        }
    }

    .view8 {
        .view8-box {
            display: grid;
            grid-template-columns: 150px 150px;
            grid-template-rows: repeat(2, 150px);
            grid-gap: 10px;
            // justify-items: stretch;
            // align-items: stretch;

            // justify-content: stretch;
            // align-content: stretch;
            div {
                font-size: 2em;
                // text-align: center;
                background-color: palevioletred;
            }
            .item1 {
                grid-row-start: 1;
                grid-row-end: 3;
                background-color: fuchsia;
            }
            .item2 {
                background-color: rgb(0, 255, 145);
            }
        }
    }
}

.minmax {
    margin-top: 50px;
    .mm-box {
        display: grid;
        grid-gap: 30px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-flow: 200px;

        div {
            font-size: 2em;
            text-align: center;
            background-color: palevioletred;
        }
    }
}
</style>
