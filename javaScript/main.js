const pageTurnBtn = document.querySelectorAll(".nextprev-btn");

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute("data-page");
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains("turn")) {
            pageTurn.classList.remove("turn");
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        } else {
            pageTurn.classList.add("turn");
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    };
});

const pages = document.querySelectorAll(".book-page.page-right");
const contactMeBtn = document.querySelector(".btn.contact-me");

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add("turn");

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
};

let totalPages = pages.length;
let pageNumber = 0;

const backProfileButton = document.querySelector(".back-profile");

backProfileButton.onclick = (e) => {
    e.preventDefault();
    pages.forEach((_, index) => {
        setTimeout(() => {
            let reverseId = pages.length - 1 - index;
            pages[reverseId].classList.remove("turn");

            setTimeout(() => {
                pages[reverseId].style.zIndex = 20 - reverseId;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
};

const coverRight = document.querySelector(".cover.cover-right");
const pageLeft = document.querySelector(".book-page.page-left");

setTimeout(() => {
    coverRight.classList.add("turn");
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);

setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200);

pages.forEach((_, index) => {
    setTimeout(() => {
        let reverseId = pages.length - 1 - index;
        pages[reverseId].classList.remove("turn");

        setTimeout(() => {
            pages[reverseId].style.zIndex = 20 - reverseId;
        }, 500);
    }, (index + 1) * 200 + 2100);
});

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('.btn');
        const originalBtnText = submitBtn.value;

        submitBtn.value = "Sending...";
        submitBtn.disabled = true;

        fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    const contactBox = document.querySelector(".contact-box");
                    contactBox.innerHTML = "<h2 style='text-align: center; color: var(--main-color); margin-top: 50px;'>Thank you for connecting with me!</h2><p style='text-align: center; margin-top: 10px;'>I will get back to you shortly.</p>";
                } else {
                    alert("There was a problem sending your message. Please try again.");
                    submitBtn.value = originalBtnText;
                    submitBtn.disabled = false;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("There was a problem sending your message. Please try again.");
                submitBtn.value = originalBtnText;
                submitBtn.disabled = false;
            });
    });
}