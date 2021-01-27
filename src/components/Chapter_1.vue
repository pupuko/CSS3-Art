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
        <h3>1.5.1</h3>
        <figure class="magnifer">
            <div class="len" />
            <div class="handle" />
        </figure>
        <figure class="seasons">
            <div>spring</div>
            <div>summer</div>
            <div>fall</div>
            <div>winter</div>
        </figure>
        <figure class="hashtag">
            <div v-for="item in 4" :key="item" />
        </figure>
        <h3>1.7.1</h3>
        <figure class="eight">
            <div></div>
            <div></div>
        </figure>
        <h3>1.7.2</h3>
        <figure class="man">
            <div class="head" />
            <div class="body" />
            <div class="feet" />
        </figure>
        <h3>1.8.1</h3>
        <figure class="box">
            <div>
                <span />
            </div>
            <div>
                <span />
            </div>
            <div>
                <span />
            </div>
        </figure>
        <figure class="ball-div">
            <div v-for="item in 4" :key="item" class="container">
                <span v-for="child in 3" :key="child" />
            </div>
        </figure>
        <figure class="ball-div-2">
            <div v-for="item in 4" :key="item" class="container">
                <span v-for="child in 3" :key="child" />
            </div>
        </figure>
        <h3>1.8.2</h3>
        <figure class="grid-div">
            <div class="container" v-for="item in 3" :key="item">
                <span v-for="child in 12" :key="child" />
            </div>
        </figure>
        <h3>1.9.1</h3>
        <figure class="color">
            <div>
                <span v-for="item in 4" :key="item" />
            </div>
        </figure>
        <figure class="word">
            <div>c</div>
            <div>s</div>
            <div>s</div>
        </figure>
        <h3>1.10.2</h3>
        <figure class="e10">
            <div>
                <span />
                <span />
                <span />
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
    margin: auto;
    margin-bottom: 40px;
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
    transition: 0.2s 0.3s ease-out;
}
.hover div:hover {
    background: gold;
    transform: scale(1.5);
    transition: 0.3s ease-out;
}
.magnifer {
    position: relative;
    color: dodgerblue;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 200px;
}
.magnifer .len {
    width: 100px;
    height: 100px;
    border: 10px solid;
    border-radius: 50%;
    /* position: absolute */
}
.magnifer .handle {
    width: 20px;
    height: 100px;
    border-radius: 0 0 10px 10px;
    background: dodgerblue;
    transform: rotate(-50deg);
    transform-origin: top;
    left: 100px;
    top: 100px;
    position: absolute;
    margin-bottom: 20px;
}
.seasons {
    width: 20em;
    height: 20em;
    margin: auto;
    margin-top: 80px;
    font-size: 14px;
    position: relative;
}
.seasons div {
    width: 50%;
    height: 50%;
    line-height: 10em;
    position: absolute;
    border: 0.1em solid gray;
}

.seasons div:nth-child(1) {
    border-radius: 100% 0 0 0;
    background: springgreen;
}
.seasons div:nth-child(2) {
    border-radius: 0 100% 0 0;
    background: #ff4500;
    left: 10.5em;
}
.seasons div:nth-child(3) {
    border-radius: 0 0 100% 0;
    background: rgb(255, 215, 0);
    top: 10.5em;
    left: 10.5em;
}
.seasons div:nth-child(4) {
    border-radius: 0 0 0 100%;
    background: hsla(195, 100%, 50%);
    top: 10.5em;
}
.hashtag {
    width: 200px;
    height: 200px;
    margin: auto;
    margin-top: 80px;
    margin-bottom: 50px;
    position: relative;
}
.hashtag div {
    position: absolute;
}
.hashtag div:nth-child(odd) {
    width: 20%;
    height: 100%;
}
.hashtag div:nth-child(even) {
    width: 100%;
    height: 20%;
}
.hashtag div:nth-child(1) {
    left: 10%;
    background: hsla(197, 71%, 73%, 0.8);
}
.hashtag div:nth-child(2) {
    top: 10%;
    background: hsla(300, 47%, 75%, 0.8);
}
.hashtag div:nth-child(3) {
    right: 10%;
    background: hsla(0, 79%, 72%, 0.8);
}
.hashtag div:nth-child(4) {
    bottom: 10%;
    background: hsla(28, 100%, 86%, 0.8);
}
.eight {
    /* width: 200px;
    height: 200px; */
    width: 150px;
    background: lightyellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}
.eight div {
    border-radius: 50%;
    border: 10px solid lightgreen;
}
.eight div:nth-child(1) {
    width: 50px;
    height: 50px;
}
.eight div:nth-child(2) {
    width: 60px;
    height: 60px;
    position: relative;
    top: -8px;
}
.man {
    width: 150px;
    height: 170px;
    position: relative;
    color: gray;
}
.man .head {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: currentColor;
    top: 0;
    left: 50%;
}
.man .body {
    position: absolute;
    width: 30px;
    height: 60px;
    top: 40px;
    left: 35%;
    border-radius: 100% 20% 0 0;
    background: currentColor;
}
.man .feet::before,
.man .feet::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 7px;
    background: currentColor;
    bottom: 0;
    border-radius: 5px 80% 2px 2px;
    left: 30%;
}
.man .feet::after {
    transform: translateX(25px) translateY(-4px) rotate(5deg);
}
.box {
    display: flex;
    justify-content: space-between;

    width: 400px;
}
.box div {
    width: 100px;
    height: 100px;
    background: skyblue;
    display: flex;
    background-image: linear-gradient(
            transparent 50%,
            darkgreen calc(50% + 1px),
            transparent calc(50% + 1px)
        ),
        linear-gradient(
            to right,
            transparent 50%,
            darkgreen calc(50% + 1px),
            transparent calc(50% + 1px)
        );
    background-size: 100px 100px;
}
.box div span {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: hsl(0, 100%, 72%, 0.8);
}
.box div:nth-child(1) {
    align-items: center;
}
.box div:nth-child(2) {
    justify-content: center;
}
.box div:nth-child(3) {
    align-items: center;
    justify-content: center;
}
.ball-div {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.ball-div div {
    width: 100%;
    height: 60px;
    background: lightblue;
    display: flex;
    align-items: center;
}
.ball-div div span {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: darkcyan;
}
.ball-div div:nth-child(1),
.ball-div-2 div:nth-child(1) {
    justify-content: flex-start;
}
.ball-div div:nth-child(2),
.ball-div-2 div:nth-child(2) {
    justify-content: flex-end;
}
.ball-div div:nth-child(3),
.ball-div-2 div:nth-child(3) {
    justify-content: space-between;
}
.ball-div div:nth-child(4),
.ball-div-2 div:nth-child(4) {
    justify-content: space-around;
}
.ball-div-2 {
    display: flex;
    width: 300px;
    height: 300px;
    justify-content: space-between;
}
.ball-div-2 div {
    width: 60px;
    height: 100%;
    background: lightblue;
    display: flex;
    align-items: center;
    display: flex;
    flex-direction: column;
}
.ball-div-2 div span {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: darkcyan;
}
.grid-div {
    width: 400px;
    display: flex;
    justify-content: space-between;
    /* height: 400px; */
}
.grid-div div {
    display: grid;
    grid-gap: 3px;
    background: lightblue;
}
.grid-div div:nth-child(1) {
    grid-template-columns: repeat(4, 1fr);
}
.grid-div div:nth-child(2) {
    grid-template-columns: repeat(3, 1fr);
}
.grid-div div:nth-child(3) {
    grid-template-columns: repeat(2, 1fr);
}
.grid-div div span {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: darkcyan;
}
.color {
    width: 250px;
}
.color div {
    height: 100px;
    display: flex;
    position: relative;
}
.color div span {
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
}
.color div span:nth-child(1) {
    left: 0;
    background: hsl(0, 90%, 70%);
}
.color div span:nth-child(2) {
    left: 50px;
    background: hsl(30, 90%, 70%);
}
.color div span:nth-child(3) {
    left: 100px;
    background: hsl(60, 90%, 70%);
}
.color div span:nth-child(4) {
    left: 150px;
    background: hsl(90, 90%, 70%);
}
.word {
    font-family: monospace;
    font-size: 100px;
    color: orange;
    text-transform: uppercase;
    width: 2em;
    display: flex;
    justify-content: space-between;
}
.word div {
    position: relative;
}
.word div::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 130%;
    left: -15%;
    background: moccasin;
    border-radius: 0.1em;
    z-index: -1;
    transform: rotate(-25deg);
}
.e10 {
    width: 500px;
}
.e10 div {
    display: flex;
    justify-content: space-between;
    color: lightblue;
}
.e10 div span {
    width: 8em;
    height: 8em;
    /* margin: 1em; */
    border-radius: 50%;
    background: repeating-radial-gradient(currentColor, lightYellow);
    background-size: 10% 10%;
}
.e10 div span:nth-child(1) {
    color: orange;
}
.e10 div span:nth-child(2) {
    color: hotpink;
}
.e10 div span:nth-child(3) {
    color: limegreen;
}
</style>
