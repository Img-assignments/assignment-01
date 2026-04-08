// Slider logic 


const scroller = document.getElementById("achievements-scroller");
const prevBtn = document.getElementById("achievements-prev");
const nextBtn = document.getElementById("achievements-next");

let scrollAmount = 0;

if (scroller) {
    const firstItem = scroller.children[0];
    if (firstItem) {
        scrollAmount = firstItem.offsetWidth + 10;
    }
}

nextBtn.onclick = function () {
    scroller.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
};

prevBtn.onclick = function () {
    scroller.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
};


// Top drop down menu logic 

const dropdownmenu = document.getElementById("menu-dropdown");
const dropdownBtn = document.getElementById("menubtn");

if(dropdownmenu && dropdownBtn) {
    let isOpen = false;

    function openDropdown() {
        dropdownmenu.classList.remove("opacity-0", "-translate-y-2", "scale-y-95", "pointer-events-none");
        dropdownmenu.classList.add("opacity-100", "translate-y-0", "scale-y-100", "pointer-events-auto");
        dropdownmenu.setAttribute("aria-hidden", "false");
        isOpen = true;
    }

    function closeDropdown() {
        dropdownmenu.classList.remove("opacity-100", "translate-y-0", "scale-y-100", "pointer-events-auto");
        dropdownmenu.classList.add("opacity-0", "-translate-y-2", "scale-y-95", "pointer-events-none");
        dropdownmenu.setAttribute("aria-hidden", "true");
        isOpen = false;
    }

    closeDropdown();

    dropdownBtn.onclick = function(event) {
        event.stopPropagation();
        if (isOpen) {
            closeDropdown();
        } else {
            openDropdown();
        }
    };

    document.addEventListener("click", function(event) {
        if (!dropdownmenu.contains(event.target) && !dropdownBtn.contains(event.target)) {
            closeDropdown();
        }
    });
}


const menuOptions = document.querySelectorAll(".menu-opt");

menuOptions.forEach(option => {
    option.addEventListener("click", function() {
        const selectedOption = this.innerText;
        document.getElementById("top-menu-selected").innerText = selectedOption;
        closeDropdown();
    });
});


// Below menu drop down logic 
const belowMenuDropdown = document.getElementById("below-menu-dropdown");
const belowMenuBtn = document.getElementById("below-menubtn");

if (belowMenuDropdown && belowMenuBtn) {
    let isBelowMenuOpen = false;

    function openBelowMenuDropdown() {
        belowMenuDropdown.classList.remove("opacity-0", "-translate-y-2", "scale-y-95", "pointer-events-none");
        belowMenuDropdown.classList.add("opacity-100", "translate-y-0", "scale-y-100", "pointer-events-auto");
        belowMenuDropdown.setAttribute("aria-hidden", "false");
        isBelowMenuOpen = true;
    }

    function closeBelowMenuDropdown() {
        belowMenuDropdown.classList.remove("opacity-100", "translate-y-0", "scale-y-100", "pointer-events-auto");
        belowMenuDropdown.classList.add("opacity-0", "-translate-y-2", "scale-y-95", "pointer-events-none");
        belowMenuDropdown.setAttribute("aria-hidden", "true");
        isBelowMenuOpen = false;
    }

    closeBelowMenuDropdown();

    belowMenuBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        if (isBelowMenuOpen) {
            closeBelowMenuDropdown();
        } else {
            openBelowMenuDropdown();
        }
    });

    document.addEventListener("click", function (event) {
        if (!belowMenuDropdown.contains(event.target) && !belowMenuBtn.contains(event.target)) {
            closeBelowMenuDropdown();
        }
    });
}