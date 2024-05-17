// Part 1 -------------------------------------------
console.log("Part 1 -----------------------------------")

let mainEl = document.getElementsByTagName("main");
console.log(mainEl);

mainEl[0].style.backgroundColor = 'var(--main-bg)';

mainEl[0].innerHTML = "<h1>DOM Manipulation</h1>"
mainEl[0].classList.add("flex-ctr");


// Part 2 -------------------------------------------
console.log("Part 2 -----------------------------------")

let topMenuEl = document.getElementById("top-menu");
console.log(topMenuEl);
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Part 3 -------------------------------------------
console.log("Part 3 -----------------------------------")

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];


menuLinks.forEach(function(link) {
  let a = document.createElement("a");
  a.href = link.href;
  a.innerText = link.text;
  topMenuEl.appendChild(a);
});

// Creating the Submenu -------------------------------------------
console.log("Creating the Submenu -----------------------------------")

let subMenuEl = document.getElementById("sub-menu");

subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// Adding Menu + Submenu Interaction -------------------------------------------
console.log("Adding Menu + Submenu Interaction -----------------------------------")

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = "";
  for (let link of subLinks) {
    let a = document.createElement("a");
    a.setAttribute("href", link.href);
    a.textContent = link.text;
    subMenuEl.appendChild(a);
  }
};

// event delegation!!
topMenuEl.addEventListener("mouseover", function(event) {
  if (event.target.tagName === "A" || event.target.textContent === "about") {
    event.preventDefault();
    mainEl[0].innerHTML = `<h1>${event.target.textContent}</h1>`
    topMenuEl.querySelectorAll("a").forEach(function(link) {
      link.classList.remove("active");
    });

    if (!event.target.classList.contains("active")) {
      let linkObject = menuLinks.find(link =>link.text === event.target.textContent);
      if (linkObject && linkObject.subLinks) {
        subMenuEl.style.top = "100%";
        event.target.classList.toggle("active");
        buildSubmenu(linkObject.subLinks);
      } else
      subMenuEl.style.top = "0";
    }
  }
});

subMenuEl.addEventListener("mouseover", function(event) {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  } else {
      subMenuEl.style.top = "0";
      console.log(event.target.textContent);
      document.querySelectorAll("a").forEach(function(link) {
    topMenuEl.classList.remove("active");
  });
    mainEl[0].innerHTML = `<h1>${event.target.textContent}</h1>`;
  }
});
