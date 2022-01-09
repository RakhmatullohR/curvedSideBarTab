"use scrick";
//* ==== phrase ====
// replace OLD ones with NEW ones --- 
// almashtiring ESKI-larini YANGI-lariga
//*_________________
// ==== selecting from HTML Document ====
const lists = document.querySelectorAll(".list");
const menuToggle = document.querySelector(".toggle-bar");
const navigation = document.querySelector(".navigation");

// 1: add active class in selected list item
lists.forEach((list, i) => {
    list.addEventListener("click", function() {
        // replace "lists" and "list active" with "list";
        lists.forEach((list, i) => {
            lists[i].className = "list";
        });
        // replace "list" with "list active";
        list.className = "list active";
    });
});
// 2: add "active" class to "navigation" and "toggle-bar"
menuToggle.addEventListener("click", function() {
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
});
