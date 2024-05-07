const array = ["banan","qulupnay","olma","tarvuz"]
let long = array.lenght;
console.log("Arrayning uzunlig 1 " + long + " teng");
alert("Arrayning uzunlig " + long + " teng");

let result = confirm("Siz jarayon etishni hohlaysizmi")

if (result) {
    array.pop()
    let l = array.lenght;
    alert("Kesilgan arraynin uzunligi = 1 " + l)
    console.log("Kesilgan arraynin uzunligi = 1 " + l);
    
    
}else{
    let l = array.lenght;
    alert("siz jarrayon toxtatganiz uchun l" + l )
    console.log("siz jarrayon toxtatganiz uchun l" + l );
}
