
$(".animateText").each( (i,e) => {
    let currentText = $(e).text();
    let count = 0;
    let speed = $(e).attr("data-typing-speed") || 100;
    let delay = $(e).attr("data-typing-delay") || 0;

    $(e).text("")
    setTimeout(() => {
        while (count <= currentText.length){
            let thisRun = currentText.substr(0,count);
            let delay = count * speed;
            setTimeout(() => {
                $(e).text(thisRun);
            }, delay);
            count++
        }
    }, delay);
    
})