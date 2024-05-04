let array = prompt["banan","qulupnay","olma","tarvuz"]
let long = array.lenght
console.log("Arrayning uzunlig 4 = " + long);
alert("Arrayning uzunlig 4 = " + long);

let result = confirm("Siz jarayon etishni hohlaysizmi")

if (result) {
    array.pop()
    let l = array.length
    alert("Kesilgan arraynin uzunligi = 1 " + l)
    console.log("Kesilgan arraynin uzunligi = 1 " + l);
    
}else{
    let l = array.lenght;
    console.log("siz jarrayon toxtatganiz uchun l" + l );
}
