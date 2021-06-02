"use strict";

var projHolder = document.getElementById('projectHolder');
var projects = [{
  title: 'Remake Netmatters home page',
  desc: "One of the first projects in the <a href='/scs.html'>Netmatters SCS Scheme</a> was to recreate the netmatters homepage to test what we had learnt in the <a href='https://teamtreehouse.com/'>Team Treehouse courses</a>.",
  img: 'img/xq612.png',
  github: 'https://github.com/TraffordFewster/HTML---CSS-Reflection',
  link: 'https://netmatters.trafford-fewster.netmatters-scs.co.uk'
}, {
  title: 'Placeholder',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim, arcu vel tempor luctus, justo ante gravida turpis, sit amet scelerisque dolor erat id ipsum. Etiam a est vel elit semper consectetur non ac diam. Integer turpis sapien, congue sed quam ut, blandit porta risus. Suspendisse urna mi, faucibus at facilisis a, facilisis nec erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam ex dui, finibus ultrices.',
  img: 'img/projPlaceholder.jpg',
  github: 'https://github.com',
  link: 'https://example.com'
}, {
  title: 'Placeholder',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim, arcu vel tempor luctus, justo ante gravida turpis, sit amet scelerisque dolor erat id ipsum. Etiam a est vel elit semper consectetur non ac diam. Integer turpis sapien, congue sed quam ut, blandit porta risus. Suspendisse urna mi, faucibus at facilisis a, facilisis nec erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam ex dui, finibus ultrices.',
  img: 'img/projPlaceholder.jpg',
  github: 'https://github.com',
  link: 'https://example.com'
}, {
  title: 'Placeholder',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim, arcu vel tempor luctus, justo ante gravida turpis, sit amet scelerisque dolor erat id ipsum. Etiam a est vel elit semper consectetur non ac diam. Integer turpis sapien, congue sed quam ut, blandit porta risus. Suspendisse urna mi, faucibus at facilisis a, facilisis nec erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam ex dui, finibus ultrices.',
  img: 'img/projPlaceholder.jpg',
  github: undefined,
  link: undefined
}, {
  title: 'Placeholder',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim, arcu vel tempor luctus, justo ante gravida turpis, sit amet scelerisque dolor erat id ipsum. Etiam a est vel elit semper consectetur non ac diam. Integer turpis sapien, congue sed quam ut, blandit porta risus. Suspendisse urna mi, faucibus at facilisis a, facilisis nec erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam ex dui, finibus ultrices.',
  img: 'img/projPlaceholder.jpg',
  github: 'https://github.com',
  link: undefined
}, {
  title: 'Placeholder',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim, arcu vel tempor luctus, justo ante gravida turpis, sit amet scelerisque dolor erat id ipsum. Etiam a est vel elit semper consectetur non ac diam. Integer turpis sapien, congue sed quam ut, blandit porta risus. Suspendisse urna mi, faucibus at facilisis a, facilisis nec erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam ex dui, finibus ultrices.',
  img: 'img/projPlaceholder.jpg',
  github: undefined,
  link: 'https://example.com'
}];
var htmlStr = '';

for (var data in projects) {
  var key = data;
  data = projects[data];
  htmlStr += "<div class='projectCard'  onclick='projectPopup(" + key + ")'>" + "<div class='imgHolder'>" + "<img src='" + data.img + "' alt='" + data.title + " preview image'>" + '</div>' + "<div class='textHolder'>" + '<h1>' + data.title + '</h1>' + "<h4>View Project <i class='fas fa-arrow-right'></i></h4>" + '</div>' + '</div>'; // Thanks IE for not support multiline strings so fun :)
}

var projH = document.getElementById('projectPopupHolder');
var projImage = document.getElementById('projPopupImg');
var projTitle = document.getElementById('projPopupTitle');
var projDesc = document.getElementById('projPopupDesc');
var projGithub = document.getElementById('projPopupGithubIcon');
var projLink = document.getElementById('projPopupLinkIcon');
var projClose = document.getElementById('projPopupClose');

function projectPopup(dataKey) {
  var data = projects[dataKey];
  projH.classList.add('showPopup');
  projImage.src = data.img;
  projTitle.innerText = data.title;
  projDesc.innerHTML = data.desc;

  if (data.github !== undefined) {
    projGithub.classList.remove('projDNone');
    projGithub.href = data.github;
  } else {
    projGithub.classList.add('projDNone');
  }

  if (data.link !== undefined) {
    projLink.classList.remove('projDNone');
    projLink.href = data.link;
  } else {
    projLink.classList.add('projDNone');
  }
}

projClose.onclick = function () {
  projH.classList.remove('showPopup');
};

$(document.body).on('click', function (e) {
  e.stopPropagation();
  var target = $(e.target);

  if (!target.parents('#projectPopupHolder, #projectPopupHolder *, .projectCard, .projectCard *').length) {
    if (projH.classList.contains('showPopup')) {
      projH.classList.remove('showPopup');
    }
  }
});
projHolder.innerHTML = htmlStr;