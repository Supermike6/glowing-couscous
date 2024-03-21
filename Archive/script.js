let pageCount = 3;
let currentPage = 0;
let pages;

let pageCountEL= document.getElementById('total-pages');
let pageNumberEL = document.getElementById('current-page');

initializePages();

function initializePages()
{
    pages = document.getElementsByClassName("page");
    pageCountEL.textContent = pageCount;
}

function nextPage(){
    if(currentPage +1 >=pageCount)
        return;

    pages[currentPage].classList.toggle('hidden');

    currentPage++;

    pageNumberEL.textContent = currentPage + 1;

    pages[currentPage].classList.toggle('hidden');
}

function prevPage(){
    if(currentPage - 1 < 0)
        return;

    pages[currentPage].classList.toggle('hidden');

    currentPage--;

    pageNumberEL.textContent = currentPage + 1;

    pages[currentPage].classList.toggle('hidden');
}

function toggleNav(){
    let navbar = document.getElementById('sidebar-nav');
    navbar.classList.toggle('sidebar-nav-shown');
}


