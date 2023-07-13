let count = 0;

document.getElementById("decrises").onclick = function(){
    count --;
    document.getElementById("value").innerHTML = count;
}
document.getElementById("reset").onclick = function(){
    count =0;
    document.getElementById("value").innerHTML = count;
}
document.getElementById("incrises").onclick = function(){
    count ++;
    document.getElementById("value").innerHTML = count;
}
