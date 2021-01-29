 
const ballKeyframes = [
    {transform: "translateY(0px)"},
    {transform: "translateY(-100px)", offset: 0.35},
    {transform: "translateY(-120px)", offset: 0.6},
    {transform: "translateY(-120px)", offset: 0.7},
    {transform: "translateY(0px)"}
]
 
const shadowKeyframes = [
    {transform: "scale(1)"},
    {transform: "scale(0.5)", offset: 0.35},
    {transform: "scale(0.35)", offset: 0.6},
    {transform: "scale(0.35)", offset: 0.7},
    {transform: "scale(1)"}
]
 
const config = {
    duration: 800,
    iterations: Infinity
}

window.addEventListener("load",start)

function start(){
    const animation = document.querySelector(".ball").animate(ballKeyframes,config)

    const shadowAnimation = document.querySelector(".shadow").animate(shadowKeyframes,config)
} 