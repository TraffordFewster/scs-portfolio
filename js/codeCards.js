
const projHolder = document.getElementById("projectHolder")
const projects = [
    {
        title: "Netmatters Clients Hover",
        desc: "One of the issues I had when creating the <a href='https://www.netmatters.co.uk/'>Netmatters</a> home page was the clients going from greyscale to coloured at first I tried to just use CSS filters but that wouldn't work as we needed it to work as <a href='https://caniuse.com/?search=filter'>Internet Explorer does not support filters</a> so I ended up having to use two different images and swap them in and out.",
        img: "img/codeExamples/udido.png",
        github: "https://github.com/TraffordFewster/HTML---CSS-Reflection/blob/master/scss/content/_client-footer.scss#L6",
        link: "https://netmatters.trafford-fewster.netmatters-scs.co.uk"
    },
    {
        title: "Placeholder",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim, arcu vel tempor luctus, justo ante gravida turpis, sit amet scelerisque dolor erat id ipsum. Etiam a est vel elit semper consectetur non ac diam. Integer turpis sapien, congue sed quam ut, blandit porta risus. Suspendisse urna mi, faucibus at facilisis a, facilisis nec erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam ex dui, finibus ultrices.",
        img: "img/projPlaceholder.jpg",
        github: "https://github.com",
        link: "https://example.com"
    },
    {
        title: "Placeholder",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim, arcu vel tempor luctus, justo ante gravida turpis, sit amet scelerisque dolor erat id ipsum. Etiam a est vel elit semper consectetur non ac diam. Integer turpis sapien, congue sed quam ut, blandit porta risus. Suspendisse urna mi, faucibus at facilisis a, facilisis nec erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam ex dui, finibus ultrices.",
        img: "img/projPlaceholder.jpg",
        github: "https://github.com",
        link: "https://example.com"
    },
    {
        title: "Placeholder",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim, arcu vel tempor luctus, justo ante gravida turpis, sit amet scelerisque dolor erat id ipsum. Etiam a est vel elit semper consectetur non ac diam. Integer turpis sapien, congue sed quam ut, blandit porta risus. Suspendisse urna mi, faucibus at facilisis a, facilisis nec erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam ex dui, finibus ultrices.",
        img: "img/projPlaceholder.jpg",
        github: undefined,
        link: undefined
    },
    {
        title: "Placeholder",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim, arcu vel tempor luctus, justo ante gravida turpis, sit amet scelerisque dolor erat id ipsum. Etiam a est vel elit semper consectetur non ac diam. Integer turpis sapien, congue sed quam ut, blandit porta risus. Suspendisse urna mi, faucibus at facilisis a, facilisis nec erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam ex dui, finibus ultrices.",
        img: "img/projPlaceholder.jpg",
        github: "https://github.com",
        link: undefined
    },
    {
        title: "Placeholder",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim, arcu vel tempor luctus, justo ante gravida turpis, sit amet scelerisque dolor erat id ipsum. Etiam a est vel elit semper consectetur non ac diam. Integer turpis sapien, congue sed quam ut, blandit porta risus. Suspendisse urna mi, faucibus at facilisis a, facilisis nec erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam ex dui, finibus ultrices.",
        img: "img/projPlaceholder.jpg",
        github: undefined,
        link: "https://example.com"
    },
];
var htmlStr = ""
for (var data in projects){
    var key = data;
    data = projects[data];

    htmlStr += 
        "<div class='projectCard codeCard'  onclick='projectPopup("+ key +")'>" +
            "<div class='imgHolder'>"+
                "<img src='" + data.img + "' alt='" + data.title + " preview image'>"+
            "</div>"+
            "<div class='textHolder'>"+
                "<h1>"+data.title+"</h1>"+
                "<h4>View Project <i class='fas fa-arrow-right'></i></h4>"+
            "</div>"+
        "</div>" // Thanks IE for not support multiline strings so fun :)
}
const projH = document.getElementById("projectPopupHolder");
const projImage = document.getElementById("projPopupImg");
const projTitle = document.getElementById("projPopupTitle");
const projDesc = document.getElementById("projPopupDesc");
const projGithub = document.getElementById("projPopupGithubIcon");
const projLink = document.getElementById("projPopupLinkIcon");
const projClose = document.getElementById("projPopupClose");
function projectPopup(dataKey){
    var data = projects[dataKey];
    projH.classList.add("showPopup");
    projImage.src = data.img;
    projTitle.innerText = data.title;
    projDesc.innerHTML = data.desc;
    if (data.github !== undefined){
        projGithub.classList.remove("projDNone")
        projGithub.href = data.github;
    } else{
        projGithub.classList.add("projDNone")
    }
    if (data.link !== undefined){
        projLink.classList.remove("projDNone")
        projLink.href = data.link;
    } else {
        projLink.classList.add("projDNone")
    }
}
projClose.onclick = function(){
    projH.classList.remove("showPopup");
}
projHolder.innerHTML = htmlStr;