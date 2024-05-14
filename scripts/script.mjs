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

  function links (link) {
    for (i = 0; i < menuLinks.length; i++) {
        if menuLinks != 
        menuLinks.createElement("<a></a>");
        menuLinks.setAttribute("href", href);
        menuLinks.textContent = menuLinks.text;
        topMenuEl.append(menuLinks);
    }
  }