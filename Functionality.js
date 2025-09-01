const ele = document.getElementById("text")
const ele2 = document.getElementById("btn")

function changeText(){
    ele.innerHTML = "Stop Hovering Me!"
    ele.style.color='#ffee00ff'
    ele.style.background='linear-gradient(45deg, #649af6ff , #00c278ff)'
}

function backNormal(){
    ele.innerHTML="Heading"
    ele.style.color='rgb(55, 0, 106)'
    ele.style.background='white'
}

ele2.addEventListener("click",()=>{
    const Body = document.body
    Body.style.background='black'
    const newEle=document.createElement("div")
    newEle.style.background='linear-gradient(135deg, #f22540, #a92bbc)'
    newEle.style.width='50vw'
    newEle.style.height='50vh'
    Body.appendChild(newEle)
})