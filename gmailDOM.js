/*onmouseover make e-mail's border blue and onmouseout return default value of border*/

var els = document.getElementsByClassName("zA");

for(var i = 0; els.length; i++){
    els[i].addEventListener("mouseover", function(){
        this.style.border = "solid blue";
    });
    els[i].addEventListener("mouseout", function(){
        this.style.border = "inherit";
    });
}
