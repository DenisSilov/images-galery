const photos = document.querySelector(".photos");
let images = [
{src:"https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
alt:"nebula cloud",
},
{src:"https://images.unsplash.com/photo-1570032257806-7272438f38da",
alt:"mountains reflection on water",
},
{src:"https://images.unsplash.com/photo-1525054098605-8e762c017741", 
alt:"strong waves", 
},
{src:"https://images.unsplash.com/photo-1562207520-19c0ebd8264f",
alt:"green mountains and blue sky",
},
{src:"https://images.unsplash.com/photo-1617191519105-d07b98b10de6",
alt:"blue and purple galaxy",
},
{src:"https://images.unsplash.com/photo-1441829266145-6d4bfbd38eb4",
alt:"blue wavy ocean with horizon",
},
{src:"https://images.unsplash.com/photo-1615114814213-a245ffc79e9a",
alt:"brown and black galaxy",
},
{src:"https://images.unsplash.com/photo-1552604660-a8c4dde15b2e",
alt:"person on clif in canyon",
},
{src:"https://images.unsplash.com/photo-1564295644023-16f14ac50b93",
alt:"whale tale above water surface",
},];


let popup = document.querySelector(".popup");
let selectedImg = document.querySelector(".selectedImg");
let arrows = document.querySelector(".arrows");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

window.addEventListener("DOMContentLoaded", loadedImages);
function loadedImages() {
  images.forEach((image, i) => {
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
  
    img.addEventListener("click", () => {
        selectedImg.src = image.src;
        popup.classList.add("active");
        arrows.classList.add("active");
        selectedImg.classList.add("selectedImg");

        let imageIndex = 0;
        imageIndex = i;
        prev.addEventListener("click", prevImage);
        function prevImage() {
          if (imageIndex === 0) {
            imageIndex = images.length - 1;
            selectedImg.src = images[imageIndex].src;
          } else {
            imageIndex -= 1;
            selectedImg.src = images[imageIndex].src;
          }
        }
   
        next.addEventListener("click", nextImage);
        function nextImage() {
          if (imageIndex === images.length - 1) {
            imageIndex = 0;
            selectedImg.src = images[imageIndex].src;
          } else {
            imageIndex += 1;
            selectedImg.src = images[imageIndex].src;
          }
        }

        popup.addEventListener("click", () => {
          popup.classList.remove("active");
          selectedImg.classList.remove("selectedImg");
          arrows.classList.remove("active");
          removeEvents();
        });
  
        function removeEvents() {
          next.removeEventListener("click", nextImage);
          prev.removeEventListener("click", prevImage);
        }
      });
  
      photos.appendChild(img);
    });
  }
