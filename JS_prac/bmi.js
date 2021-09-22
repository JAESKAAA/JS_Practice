document.getElementById("button").onclick = function(){

    let h = parseFloat(document.getElementById("height").value);
    let w = parseFloat(document.getElementById("weight").value);

    let bmi = document.getElementById("bmi");
    //toFixed는 소수점 아래 매개변수자리까지만 반환해줌
    bmi.innerHTML=(w/h/h).toFixed(1);
};