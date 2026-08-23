/*=========================================
    MOBILE MENU
=========================================*/

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const navClose = document.getElementById("navClose");
const overlay = document.getElementById("menuOverlay");
const body = document.body;

/*=========================================
OPEN MENU
=========================================*/

function openMenu() {
  nav.classList.add("active");
  overlay.classList.add("active");
  body.classList.add("menu-open");
}

/*=========================================
CLOSE MENU
=========================================*/

function closeMenu() {
  nav.classList.remove("active");
  overlay.classList.remove("active");
  body.classList.remove("menu-open");
}

/*=========================================
EVENTS
=========================================*/

menuToggle.addEventListener("click", openMenu);

navClose.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);

/*=========================================
ESC CLOSE
=========================================*/

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeMenu();
  }
});


/*=========================================
SUB MENU
=========================================*/

document.querySelectorAll(".submenu > button").forEach(button => {

    button.addEventListener("click", function(e){

        e.preventDefault();

        const parent = this.parentElement;

        parent.classList.toggle("open");

    });

});



/*=========================================
NESTED SUB MENU
=========================================*/

document.querySelectorAll(".submenu ul").forEach(function (menu) {
  menu.style.maxHeight = null;
});

/*=========================================
OPTIONAL
AUTO CLOSE MENU AFTER CLICK
=========================================*/

document.querySelectorAll(".mobile-nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    closeMenu();
  });
});



// faq

document.querySelectorAll('.faq-rat-title').forEach(title => {

    title.addEventListener('click', () => {

        const item = title.parentElement;

        document.querySelectorAll('.faq-rat-item').forEach(faq => {

            if(faq !== item){

                faq.classList.remove('active');

                faq.querySelector('i').className =
                'fa-solid fa-chevron-down';

            }

        });

        item.classList.toggle('active');

        const icon = item.querySelector('i');

        if(item.classList.contains('active')){

            icon.className = 'fa-solid fa-chevron-up';

        }else{

            icon.className = 'fa-solid fa-chevron-down';

        }

    });

});


//blog detail page css faq


document.querySelectorAll('.blog-faq-question').forEach(question => {

    question.addEventListener('click', () => {

        const item = question.parentElement;

        document.querySelectorAll('.blog-faq-item').forEach(faq => {

            if(faq !== item){
                faq.classList.remove('active');
            }

        });

        item.classList.toggle('active');

    });

});


//load more 

const posts = document.querySelectorAll(".extra-post");
const btn = document.getElementById("loadMore");

let current = 0;
const perClick = 2;

btn.addEventListener("click", () => {

    for (let i = current; i < current + perClick && i < posts.length; i++) {
        posts[i].style.display = "block";
    }

    current += perClick;

    if (current >= posts.length) {
        btn.style.display = "none";
    }

});