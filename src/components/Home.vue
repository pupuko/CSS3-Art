<template>
    <div class="main-window">
        <h3>1.4.1</h3>
        <figure class="traffic-lights">
            <div class="light red" />
            <div class="light yellow" />
            <div class="light green" />
        </figure>
        <h3>1.4.3</h3>
        <figure class="tree">
            <div class="branch">
                <span class="leaf" v-for="item in 3" :key="item" />
            </div>
            <div class="branch">
                <span class="leaf" v-for="item in 2" :key="item" />
            </div>
        </figure>
        <h3>1.4.4</h3>
        <figure class="triangle">
            <div v-for="item in 6" :key="item">
                <span v-for="ball in item" :key="ball" />
            </div>
        </figure>
        <figure class="chessboard">
            <div v-for="item in 4" :key="item">
                <span v-for="grid in 4" :key="grid" />
            </div>
        </figure>
        <figure class="ball">
            <div v-for="item in 18" :key="item">{{ item }}</div>
        </figure>
        <figure class="matrix">
            <div v-for="item in 10" :key="item">
                <span
                    v-for="child in 10"
                    :key="child"
                    :class="
                        isPrime(item, child) ? 'primeStyle' : 'compositeStyle'
                    "
                >
                    {{ (item - 1) * 10 + child }}
                </span>
            </div>
        </figure>
        <figure class="hover">
            <div v-for="item in words" :key="item">
                {{ item }}
            </div>
        </figure>
    </div>
</template>
<script>
export default {
    data() {
        return {
            words: ['E', 'L', 'E', 'M', 'E', 'N', 'T']
        }
    },

    methods: {
        isPrime(row, column) {
            let num = (row - 1) * 10 + column
            if (
                num == 2 ||
                num == 3 ||
                num == 5 ||
                num == 7 ||
                (num % 2 != 0 &&
                    num % 3 != 0 &&
                    num % 5 != 0 &&
                    num % 7 != 0 &&
                    num != 1)
            ) {
                return false
            } else {
                return true
            }
        }
    }
}
</script>
<style scoped>
.main-window {
    text-align: center;
}
figure {
    margin: 20px;
}
.traffic-lights {
    margin: auto;
    background: #eeeeee;
    width: 350px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
}
.light {
    width: 100px;
    height: 100px;
    border: 1px solid #000000;
    border-radius: 50%;
}
.red {
    background: coral;
}
.yellow {
    background: gold;
}
.green {
    background: lightgreen;
}
.tree {
    margin: auto;
    width: 30px;
    height: 300px;
    background: saddlebrown;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.tree .branch {
    width: 160px;
    height: 20px;
    background: peru;
    border-radius: 10px;
    display: flex;
    justify-content: flex-end;
    transform: rotate(-30deg);
}
.tree .branch .leaf {
    width: 40px;
    height: 40px;
    border-radius: 100% 0 100% 0;
    background: green;
    transform: translateY(-100%);
}
.triangle {
    margin: auto;
    width: 500px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.triangle div {
    height: 50px;
    margin: 5px;
    display: flex;
    justify-content: space-between;
}
.triangle div span {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 10px;
    background: lightgreen;
}
.triangle div span:first-child,
.triangle div span:last-child {
    background: lightcoral;
}
.chessboard {
    margin: auto;
    width: 400px;
    height: 400px;
    background: burlywood;
    border: 10px solid darkgray;
}
.chessboard div {
    height: 100px;
    display: flex;
}
.chessboard div span {
    width: 100px;
    height: 100px;
}
.chessboard div:nth-child(odd) span:nth-child(odd),
.chessboard div:nth-child(even) span:nth-child(even) {
    background: rgba(0, 0, 0, 0.3);
}
.ball {
    margin: auto;
    display: flex;
    justify-content: space-between;
    width: 600px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.ball div {
    background: lightgreen;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    font-size: 0.75em;
    line-height: 20px;
    /* margin: 10px; */
}
.ball div:nth-child(8n + 1) {
    background: lightpink;
}
.matrix {
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
    margin: auto;
}
.matrix div {
    width: 500px;
    height: 50px;
    display: flex;
    justify-content: space-between;
}
.matrix div span {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    line-height: 40px;
}
.matrix .primeStyle {
    background: lightgreen;
}
.matrix .compositeStyle {
    background: orange;
}
.hover {
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    width: 210px;
    font-size: 1.5em;
    justify-content: space-between;
}
.hover div {
    background: lightgreen;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px dashed;
    cursor: pointer;
    transition: .2s .3s ease-out;
}
.hover div:hover {
    background: gold;
    transform: scale(1.5);
    transition: .3s ease-out;
}
</style>
