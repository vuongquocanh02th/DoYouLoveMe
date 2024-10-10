function yes(){
    alert("<3");
}
function no(){
    var x=Math.round(Math.random()*window.innerWidth);
    var y=Math.round(Math.random()*window.innerHeight);
    document.getElementById('btnNo').style.left=x + "px";
    document.getElementById('btnNo').style.top=y + "px";
}