var mainitem=document.querySelector(".itemmain");
const defaultcolor=mainitem.getComputedStyle(mainitam).backgroundColor;
var items=document.querySelectorAll(".item");
items.forEach((element) => {
  element.addEventListener("mouseover",()=>{
   var col=getComputedStyle(element);
   mainitem.style.backgroundColor=col.backgroundColor;
  });
});
items.forEach((element)=>{
    element.addeventListener("mouseout",()=>{
        mainitem.style.backgroundColor=defaultcolor;
    });
});
