const dataC = "https://api.exchangeratesapi.io/latest";
fetch(dataC)
.then(res => res.json())
.then(dataC => console.log(dataC))
.catch(err => console.log(err))

var eur,usd,cad,aud,bgn
function currency() 
{
    usd= document.getElementById("USD");
    cad= document.getElementById("CAD");
    aud= document.getElementById("AUD");
    bgn= document.getElementById("BGN")

}
function usd () {
    
    
}
