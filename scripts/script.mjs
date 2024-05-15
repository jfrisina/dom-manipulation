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

// Part 4 -------------------------------------------
console.log("Part 4 -----------------------------------")

console.log("It looks like this doesn't actually have a fourth part? Please let me know if I misunderstood this!")
