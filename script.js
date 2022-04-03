console.log("helloe")
const left = document.getElementById('btn-left');
const right = document.getElementById('btn-right');

let widgetId = 0;
let popupArray = new Array();


const TopRightPopup = ()=>{

    console.log('click')
    // document.getElementById("popup").style = "display:flex;";
    document.getElementById("popup").style = "align-items:end;flex-direction:column;display:flex;";
    const e1 = document.createElement('div');
    e1.classList.add('widget-right')
    e1.id = `widget-right-${widgetId++}`
    popupArray.push(e1);
    console.log(popupArray);
    e1.innerHTML = `<div style="display:flex" >
    <li style="align-self:center"><img src="./Assests/shoes.png" /></li>
    <div style="padding:0.5rem" >
        <li>Someone buys this from Mankapur </li>
        <li>Nike Jordan AIR 1</li>
        <li>Just Now</li>
    <div> 
    </div>`;
    document.getElementById('popup').appendChild(e1)
    removeElement(e1.id);
}
const TopLeftPopup = ()=>{

    console.log('click')
    document.getElementById("popup").style = "";

    const e1 = document.createElement('div');
    e1.classList.add('widget-left')
    e1.id = `widget-left-${widgetId++}`
    popupArray.push(e1);
    console.log(popupArray);
    e1.innerHTML = `<div style="display:flex"  >
    <li style="align-self:center"><img src="./Assests/shoes.png" /></li>
    <div style="padding:0.5rem" >
        <li>Someone buys this from Mankapur </li>
        <li>Nike Jordan AIR 1</li>
        <li>Just Now</li>
    <div> 
    </div>`;
    document.getElementById('popup').appendChild(e1)
    removeElement(e1.id);
}



const removeElement = (el) => {
    setTimeout(() => {
        console.log(el)
        Delete(el)
    },3000)
}

const Delete = (el) => {
        document.getElementById(el).classList.add('hide');
        setTimeout(() => {
                    document.getElementById(el).classList.add('hidden');
        },500)
}
right.addEventListener('click',TopRightPopup)

left.addEventListener('click',TopLeftPopup)
