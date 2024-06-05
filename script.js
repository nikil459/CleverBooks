
function showTab(tabId) {
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');

    var buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(function (button) {
        button.classList.remove('active');
    });
    document.querySelector('[onclick="showTab(\'' + tabId + '\')"]').classList.add('active');
}
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        
        burger.classList.toggle('toggle');
    });
});
let lastScrollTop = 0;




