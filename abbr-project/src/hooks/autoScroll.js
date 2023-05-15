
export function useAutoScroller(){
    
    var mainElement = document.getElementById("mainForTable")
    var Height = 0
    var currentHeight = 0;
    var bool = true;
    var step = 1;
    var speed = 10;
    var interval = setInterval(scrollElement, speed)
    
    function scrollElement() {
        if (currentHeight < 0 || currentHeight > Height) 
            bool = !bool;
        if (bool) {
            mainElement.scrollTo(0, currentHeight += step);
        } else {
            mainElement.scrollTo(0, currentHeight -= step);
        }
    }

    console.log(mainElement);
    
}