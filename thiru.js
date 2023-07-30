let input1=document.getElementById("btn");
let input2=document.getElementById("inp_box");

input1.addEventListener("click",()=>{
let number=input2.value
let myPromise = new Promise(function(myResolve, myReject) {
    let url=`https://api-thirukkural.vercel.app/api?num=${number}`;
    fetch(url).then((res)=>res.json()).then((data)=>myResolve(data));
    });
    console.log(myPromise);
if((number<=1330) && (number>=1)){  
myPromise.then((data)=>{
document.getElementById("kural").innerHTML=`<h2>குறள் :</h2>${data.line1}<br>${data.line2}`  
document.getElementById("eng_mn").innerHTML=`<h2>English meaning :</h2>${data.eng_exp}`
document.getElementById("tam_mn").innerHTML=`<h2>Tamil meaning :</h2>${data.tam_exp}`})
.catch((err)=>{console.log(err)})
}
else
{
    alert("Please Enter Number between 1 to 1330")
}

})



