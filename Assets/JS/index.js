function openOverlay() {
  var navOverlayOpen = document.getElementById("nav--overlay");
  navOverlayOpen.style.display = "flex";

  // var openOverlay = document.getElementById("openOverlay");
  // if (openOverlay) {
  //   openOverlay.style.display = "none";
  // }

  // document.getElementById("nav--overlay").style.display = "flex";
  // document.getElementById("openOverlay").style.display = "none";
}

function closeOverlay() {
  var navOverlayClose = document.getElementById("nav--overlay");
  navOverlayClose.style.display = "none";

  // var openOverlay = document.getElementById("openOverlay");
  // if (openOverlay) {
  //   openOverlay.style.display = "block";
  // }

  // document.getElementById("nav--overlay").style.display = "none";
  // document.getElementById("openOverlay").style.display = "block";
}

// Either the top one or the bottom works
// toggle overlay with class
// function closeMenu(){
//     document.querySelector('.overlay-nav').classList.remove('active')
// }
// function openMenu(){
//     console.log(
//         document.querySelector('.overlay-nav').classList.add('active')
//     );
// }

// optimised class toggle

// function toggleOverlay(){
//     document.querySelector('.overlay-nav').classList.toggle('active')
// }

// toggle overlay with styling

// function closeMenu(){
//     document.querySelector('.overlay-nav').style.display='none'
// }
// function openMenu(){

//         document.querySelector('.overlay-nav').style.display='block'

// }

// Get all anchor elements within the overlay menu
const overlayMenuLinks = document.querySelectorAll(
  ".nav--overlay .overlay--menu--items a"
);

// Function to close the overlay
function closeOverlay() {
  document.getElementById("nav--overlay").style.display = "none";
}

// Add click event listeners to each anchor element
overlayMenuLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    // Prevent default anchor behavior
    event.preventDefault();

    // Get the target section's ID from the href attribute of the clicked link
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    // Smoothly scroll to the target section
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Close the overlay after clicking a menu item
    closeOverlay();
  });
});

// window.addEventListener("resize", function () {
//   if (window.innerWidth >= 1025) {
//     document.querySelector(".contactUs--links--and--social ").style.display =
//       "flex";
//   } else {
//     document.querySelector(".contactUs--links--and--social ").style.display =
//       "none";
//   }
// });

// Function to scroll smoothly to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Enables smooth scrolling behavior
  });
}

// Get the back-to-top button element
const backToTopBtn = document.getElementById("backToTopBtn");

// Attach a click event listener to the button to trigger smooth scrolling
backToTopBtn.addEventListener("click", scrollToTop);
