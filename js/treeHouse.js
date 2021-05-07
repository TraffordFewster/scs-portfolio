
const table = document.getElementById("treeHouseTable")
const url = "https://teamtreehouse.com/traffordfewster2.json"
$.getJSON( url , function(data) {
    console.log(data.points)
    for (var k in data.points){
        var amount = data.points[k]
        if (amount > 0  && k != "total"){
            table.innerHTML +=
            "<tr><td>"+ k +"</td><td class='textCent'>"+ amount +"</td></tr>"
        }
    }
    table.innerHTML +=
        "<tr><td>"+ "<strong>Total</strong>" +"</td><td class='textCent'><strong>"+ data.points["total"] +"</strong></td></tr>"
})
