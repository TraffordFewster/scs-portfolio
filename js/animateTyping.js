
$(".animateText").each( (i,e) => {
    let currentText = $(e).text();
    let count = 0;
    let speed = $(e).attr("data-typing-speed") || 50;
    let delay = $(e).attr("data-typing-delay") || 0;

    $(e).text("")
    setTimeout(function() {
        while (count <= currentText.length){
            let thisRun = currentText.substr(0,count);
            let delay = count * speed;
            setTimeout(function() {
                $(e).text(thisRun);
            }, delay);
            count++
        }
    }, delay);
    
})