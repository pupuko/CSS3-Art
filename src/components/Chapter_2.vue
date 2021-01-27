<template>
    <div>
        <h3>2.1</h3>
        <figure class="e1">
            <div />
            <div />
            <div />
        </figure>
        <h3>2.2</h3>
        <figure class="e2">
            <div>
                <p class="html">html</p>
                <p class="css">css</p>
                <p class="js">javascript</p>
            </div>
        </figure>
        <h3>2.3</h3>
        <figure class="e3">
            <p>Error 404</p>
        </figure>
        <h3>2.4</h3>
        <figure class="e4"></figure>
        <h3>2.5</h3>
        <figure class="e5">
            <div v-for="item in 5" :key="item" />
        </figure>
        <h3>2.6</h3>
        <figure class="e6">
            <div class="monitor" />
            <div class="host" />
        </figure>
        <h3>2.7</h3>
        <figure class="e7"></figure>
        <h3>2.8</h3>
        <figure class="e8">
            <div class="lid" />
            <div class="pot" />
        </figure>
        <h3>2.9</h3>
        <figure class="e9">
            <div class="ear left" />
            <div class="ear right" />
            <div class="eye" />
            <div class="mouth" >
                <div class="teeth" />
            </div>
        </figure>
    </div>
</template>
<script>
export default {}
</script>
<style scoped>
figure {
    margin: auto;
    margin-bottom: 50px;
}
.e1 {
    font-size: 10px;
    width: 15em;
    height: 15em;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.e1 div {
    position: absolute;
    box-sizing: border-box;
    border: 1em solid dimgray;
}
.e1 div:nth-child(1) {
    width: 100%;
    height: 100%;
}
.e1 div:nth-child(2) {
    width: 70%;
    height: 70%;
}
.e1 div:nth-child(3) {
    width: 40%;
    height: 40%;
}
.e1 div::before,
.e1 div::after {
    content: '';
    position: absolute;
    width: 1em;
    height: calc(50% + 1em);
    background: gold;
}
.e1 div::before {
    top: -1em;
    left: -1em;
}
.e1 div::after {
    bottom: -1em;
    right: -1em;
}
.e2 {
    width: 300px;
}
.e2 div {
    /* padding: 0; */
    padding: 10px;
    border-radius: 1em;
    background: lavender;
    box-shadow: 0.3em 0.3em 1em hsla(0, 0%, 70%, 0.8);
}
.e2 div p {
    margin: 10px 0;
    font-size: 30px;
    font-family: sans-serif;
    font-weight: bold;
    color: slateblue;
}
.e2 div p::before,
.e2 div p::after {
    color: tomato;
}
.e2 div .html::before {
    content: '<';
}
.e2 div .html::after {
    content: '/>';
}
.e2 div .css::before {
    content: '.';
}
.e2 div .css::after {
    content: '::';
}
.e2 div .js::before {
    content: '{';
}
.e2 div .js::after {
    content: '}';
}
.e3 {
    width: 280px;
    display: flex;
    justify-content: center;
}
.e3 p {
    font-size: 50px;
    width: 5.6em;
    color: slategray;
    font-family: sans-serif;
    font-weight: bold;
    position: relative;
    padding: 0.6em 0.4em;
    box-sizing: border-box;
    margin: 80px 0;
}
.e3 p::before,
.e3 p::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0.2em solid orange;
    box-sizing: border-box;
    box-shadow: 0.3em 0.3em 0.3em hsl(0, 0%, 35%, 0.8);
    transform: rotate(45deg);
}
.e3 p::before {
    border-style: solid solid none none;
    z-index: -1;
}
.e3 p::after {
    border-style: none none solid solid;
}
.e4,
.e4::before,
.e4::after {
    width: 10em;
    height: 10em;
    box-sizing: border-box;
    border-top: 0.3em solid currentColor;
    border-radius: 50%;
    position: relative;
}
.e4::before,
.e4::after {
    content: '';
    position: absolute;
    top: -0.3em;
    left: 0;
}
.e4 {
    color: hotpink;
}
.e4::before {
    color: dodgerblue;
    transform: rotate(120deg);
}
.e4::after {
    color: gold;
    transform: rotate(240deg);
}
.e5 {
    font-size: 10px;
    width: 30em;
    height: 30em;
    border-top: 0.3em solid cadetblue;
    position: relative;
}
.e5 div {
    position: absolute;
    width: 0.2em;
    background: cadetblue;
    left: 50%;
    transform-origin: 50% top;
}
.e5 div::before {
    content: '';
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    background: radial-gradient(
        circle at 70% 35%,
        white,
        darkturquoise 30%,
        steelblue 50%
    );
    border-radius: 50%;
    top: 100%;
    left: -0.625em;
    box-shadow: -1em 4em 1em rgba(0, 0, 0, 0.1);
}
.e5 div:nth-child(1) {
    height: 15em;
    transform: rotate(30deg);
}
.e5 div:nth-child(2) {
    height: 17em;
    transform: rotate(20deg);
}
.e5 div:nth-child(3) {
    height: 19em;
    transform: rotate(10deg);
}
.e5 div:nth-child(4) {
    height: 21em;
    transform: rotate(0deg);
}
.e5 div:nth-child(5) {
    height: 23em;
    transform: rotate(-10deg);
}
.e6 {
    font-size: 10px;
    width: 25em;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    color: darkorange;
}
.e6 > * {
    position: relative;
    box-sizing: border-box;
}
.e6 > *::before,
.e6 > *::after {
    content: '';
    position: absolute;
    box-sizing: border-box;
}
.e6 .monitor {
    width: 17em;
    height: 10em;
    border: 0.5em solid;
    border-radius: 0.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-top: -4em; */
}
.e6 .monitor::before {
    width: 1.5em;
    height: 3em;
    background: currentColor;
    top: 9.5em;
}
.e6 .monitor::after {
    width: 5em;
    height: 1em;
    background: currentColor;
    top: 12.5em;
    border-radius: 0.3em;
}
.e6 .host {
    width: 7em;
    height: 14em;
    border: 0.5em solid;
    border-radius: 0.5em;
}
.e6 .host::before {
    width: 5em;
    height: 1em;
    background: currentColor;
    border-radius: 0.2em;
    top: 8em;
    left: 0.5em;
    box-shadow: 0 1.5em 0;
}
.e6 .host::after {
    width: 0.6em;
    height: 0.6em;
    background: currentColor;
    border-radius: 50%;
    right: 1.5em;
    bottom: 0.5em;
    box-shadow: 1em 0 0 0.1em;
}
.e7 {
    font-size: 10px;
    width: 12em;
    position: relative;
    display: flex;
    color: hsl(0, 79%, 72%);
}
.e7::before,
.e7::after {
    content: '';
    position: relative;
    width: 6em;
    height: 10em;
    border-radius: 3em 3em 0.5em 0.5em;
}
.e7::before {
    background: currentColor;
    transform: rotate(45deg);
    transform-origin: right bottom;
}
.e7::after {
    background: currentColor;
    transform: rotate(-45deg);
    transform-origin: left bottom;
}
.e8 {
    font-size: 10px;
    width: 30em;
    height: 30em;
    background: white;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
}
.e8 .lid {
    width: 17em;
    height: 6em;
    background: gold;
    border-radius: 6em 6em 0 0;
    border-right: 1.5em solid goldenrod;
    border-bottom: 1.2em solid goldenrod;
    /* top: 0.5em; */
    position: relative;
}
.e8 .lid::before {
    content: '';
    position: absolute;
    width: 4em;
    height: 4em;
    background: tomato;
    border-radius: 50%;
    top: -2em;
    left: calc(14.5em / 2);
}
.e8 .lid::after {
    content: '';
    position: absolute;
    width: 8em;
    height: 8em;
    border: 0.6em solid;
    border-color: white transparent transparent transparent;
    border-radius: 50%;
    top: 0.5em;
    left: 2.5em;
    transform: rotate(-50deg);
}
.e8 .pot {
    width: 16em;
    height: 12em;
    background: darkslateblue;
    border-radius: 0em 0em 6.5em 6.5em;
    border-right: 1.5em solid midnightblue;
    position: relative;
}
.e8 .pot::before {
    content: '';
    position: absolute;
    width: 27em;
    height: 2.5em;
    background: tomato;
    left: calc((17.5em - 27em) / 2);
    top: 10%;
    border-radius: 1.25em;
    z-index: -1;
}
.e8 .pot::after {
    content: '';
    position: absolute;
    width: 8em;
    height: 8em;
    border: 0.6em solid;
    border-color: transparent transparent white transparent;
    border-radius: 50%;
    bottom: 1em;
    left: 2em;
    transform: rotate(40deg);
}
.e9 {
    width: 10em;
    height: 13em;
    color: limegreen;
    background: currentColor;
    border-radius: 5em 5em 5% 5%/6em 6em 5% 5%;
    position: relative;
    margin-top: 80px;
}
.e9 .eye {
    position: absolute;
    width: 6.5em;
    height: 6.5em;
    background: radial-gradient(
        circle at 50% 25%,
        white 0.4em,
        transparent 0.4em
    ), 
    radial-gradient(
        circle at 50% 40%,
        black 1.7em,
        transparent 1.7em
    ),
    white;
    border-radius: 77% 77% 77% 77% / 92% 92% 60% 60%;
    top: 2em;
    left: 1.75em;
    box-shadow: 0.2em 0.5em 0 hsla(0, 0%, 0%, 0.1);
}
.e9 .mouth {
    position: absolute;
    width: 3em;
    height: 2.1em;
    background: black;
    bottom: 0.9em;
    left: 3.5em;
    border-radius: 70% 70% 3.5em 3.5em;
    overflow: hidden;
}
.e9 .mouth::before {
    content: '';
    position: absolute;
    width: inherit;
    height: 0.6em;
    background: tomato;
    border-radius: 50% 50% 0 0;
    bottom: 0;
    left: 0;
}
.e9 .mouth .teeth,
.teeth::before,
.teeth::after {
    content: '';
    position: absolute;
    border-top: 0.8em solid white;
    border-left: 0.4em solid transparent;
    border-right: 0.4em solid transparent;
    left: 1.1em;
}
.teeth::before {
    top: -0.8em;
    left: -1.1em
}
.teeth::after {
    top: -0.8em;
    left: 0.3em;
}
.ear {
    position: absolute;
    width: 2.4em;
    height: 4.5em;
    top: -3em;
    display: flex;
    justify-content: center;
    transform-origin: bottom;
}
.ear::before,
.ear::after {
    content: '';
    position: absolute;
    background: currentColor;
}
.ear::before {
    width: 0.9em;
    height: inherit
}
.ear::after {
    width: 2.4em;
    height: 2.4em;
    border-radius: 50%;
    box-shadow: inset -0.3em -0.2em 0 hsla(0, 0%, 0%, 0.1);
    top: -0.5em;
}
.ear.left {
    left: 2em;
    transform: rotate(-20deg);
}
.ear.right {
    right: 2em;
    transform: rotate(20deg)
}
</style>
