
/* header dropdown popup */

const materialsSupply = document.getElementById("materialsSupply");
const facilityServices = document.getElementById("facilityServices");
const dropdown1 = document.getElementById("dropdown1");
const dropdown2 = document.getElementById("dropdown2");

// materialsSupply.addEventListener("mouseenter", () => {
//    dropdown1.style.display = "block";
// });

// facilityServices.addEventListener("mouseenter", () => {
//    dropdown2.style.display = "block";
// });

// dropdown1.addEventListener("mouseleave", () => {
//   setTimeout(() => {
//     if (!dropdown1.matches(':hover')) {
//       dropdown1.style.display = "none";
//     }
//   }, 100);
// });

// dropdown2.addEventListener("mouseleave", () => {
//   setTimeout(() => {
//     if (!dropdown2.matches(':hover')) {
//       dropdown2.style.display = "none";
//     }
//   }, 100);
// });

// dropdown1.addEventListener("mouseleave", () => {
//    dropdown1.style.display = "none";
// });
// dropdown2.addEventListener("mouseleave", () => {
//    dropdown2.style.display = "none";
// });

// dropdown1.addEventListener("mouseenter", () => {
//    dropdown1.style.display = "block";
// });
// dropdown2.addEventListener("mouseenter", () => {
//    dropdown2.style.display = "block";
// });


/* two text fade down */

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");

function animate() {
// Show first text
   text1.classList.add("show");

   setTimeout(() => {
       text1.classList.remove("show");
   }, 1500);

// Show second text after first disappears
   setTimeout(() => {
      text2.classList.add("show");
   }, 1600);

   setTimeout(() => {
      text2.classList.remove("show");
    }, 3000);
}

// Loop animation
setInterval(animate, 3200);

// carousel implementation

    const track = document.getElementById("track");

    // Clone first 5 items for infinite effect
    const items = document.querySelectorAll(".item");
    const visibleCount = 5;

    for (let i = 0; i < visibleCount; i++) {
      track.appendChild(items[i].cloneNode(true));
    }

    let index = 0;

    function slide() {
      index++;

      track.style.transition = "transform 0.6s ease";
      track.style.transform = `translateX(-${index * 20}%)`;

      // Reset after reaching cloned items
      if (index === items.length) {
        setTimeout(() => {
          track.style.transition = "none";
          track.style.transform = "translateX(0)";
          index = 0;
        }, 600);
      }
    }

    setInterval(slide, 2000);

// counter implementation
const counter = document.querySelectorAll("#counter");

    counter.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const duration = 2000;
      const stepTime = 20;
      const increment = target / (duration / stepTime);

      let count = 0;

      const updateCounter = () => {
        count += increment;

        if (count >= target) {
          counter.innerText = target;
        } else {
          counter.innerText = Math.floor(count);
          setTimeout(updateCounter, stepTime);
        }
      };

      updateCounter();
    });