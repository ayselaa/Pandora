const submit = document.querySelector(".submit");
const activForgetPassword = document.querySelector(".activForgetPassword");
const activRegister = document.querySelector(".setup__box-register");

const activeLogin = document.querySelector(".activeLogin");
const setup = document.querySelector(".setup");
const forgotPass = document.querySelector(".forgotPass");

const registerPass = document.querySelector(".registerPass");
const accordionItems = document.querySelectorAll(".accordion-item");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const loader = document.querySelector(".loader");
const searchInput = document.getElementById("searchInput");
const searchInputMob = document.getElementById("searchInputMob");
const clearAllButton = document.getElementById("clearAllButton");

const searchFind = document.querySelector(".header__searchFind");
const searchFindMob = document.querySelector(".header__searchFindMob");

const searchIconMob = document.querySelector(".header__box-form-mobIcon");
const subDropdownButtons = document.querySelectorAll(".dropdown__subbutton");

const galleryItem = document.getElementsByClassName("detail-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

const navbarIcon = document.querySelector(".header__box-icon-mob");
const dropdownButtons = document.querySelectorAll(".dropdown__button");
const sidebar = document.querySelector(".sidebar");
const favoritIcon = document.querySelectorAll(".grid-heart");

const icon = document.querySelector(".contactMe i");

if (searchIconMob && searchFindMob) {
  searchIconMob.addEventListener("click", (e) => {
    searchFindMob.style.display = "block";
  });

  document
    .querySelector(".header__searchFindMob-bg")
    .addEventListener("click", () => {
      searchFindMob.style.display = "none";
    });
}

if (icon) {
  icon.addEventListener("click", (e) => {
    document
      .querySelector(".contactMe__box")
      .classList.toggle("contactMe__boxOpen");
    icon.classList.toggle("fa-times");
  });
}

if (submit) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
  });
}

if (activForgetPassword) {
  activForgetPassword.addEventListener("click", () => {
    setup.style.display = "none";
    forgotPass.style.display = "block";
    registerPass.style.display = "none";

  });
}

if (activRegister) {
  activRegister.addEventListener("click", () => {
    setup.style.display = "none";
    registerPass.style.display = "block";
        forgotPass.style.display = "none";

  });
}

if (activeLogin) {
  activeLogin.addEventListener("click", () => {
    setup.style.display = "block";
    forgotPass.style.display = "none";
    registerPass.style.display = "none";

  });
}

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  header.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// Get all the checkboxes
const filterLeftSide = document.querySelector('.filter__leftSide')

// Add an event listener to each checkbox
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    // Get the selected checkboxes
    const selectedCheckboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );


    if (selectedCheckboxes.length > 0) {
        clearAllButton.style.display = "block";
        filterLeftSide.classList.add('activeBorder')

      } else {
        clearAllButton.style.display = "none";
        filterLeftSide.classList.remove('activeBorder')

      }


    clearAllButton.addEventListener("click", () => {
      // Uncheck all checkboxes
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
      // Remove all selected tags
      selectedItems.innerHTML = "";

      selectedItemsMob.innerHTML = "";
      clearAllButton.style.display = "none";
      filterLeftSide.classList.remove('activeBorder')

    });

    // Create an array of selected checkbox values
    const selectedValues = [];

    selectedCheckboxes.forEach((selectedCheckbox) => {
      selectedValues.push(selectedCheckbox.value);
      filterLeftSide.classList.add('activeBorder')

    });

    // Display the selected checkbox values
    const selectedItems = document.getElementById("selectedItems");

    selectedItems.innerHTML = selectedValues
      .map(
        (value) => `
        <span class='filter__tag' data-value='${value}'>${value} <span class='closeItem'>X</span></span> 
        `
      )
      .join(" ");

      selectedItems.addEventListener("click", function (event) {
        if (event.target.classList.contains("closeItem")) {
          const itemToRemove = event.target.parentElement;
          const valueToRemove = itemToRemove.dataset.value; // Get the value of the item being removed
          // Uncheck the corresponding checkbox
          const checkboxToRemove = document.querySelector(
            `input[type="checkbox"][value="${valueToRemove}"]`
          );
          checkboxToRemove.checked = false;
  
          // Remove the item from the selected items list
          itemToRemove.remove();

          // Show or hide the clearAllButton based on whether any checkboxes are checked or not
          const selectedCheckboxes = document.querySelectorAll(
            'input[type="checkbox"]:checked'
          );
          if (selectedCheckboxes.length > 0) {
            clearAllButton.style.display = "block";
            filterLeftSide.classList.add('activeBorder')

          } else {
            clearAllButton.style.display = "none";
            filterLeftSide.classList.remove('activeBorder')


          }
        }
      });

    const selectedItemsMob = document.getElementById("selectedItemsMob");
    selectedItemsMob.innerHTML = selectedValues
      .map(
        (value) =>
          `<span class='filter__tag'>${value} <span class='closeItem'>✕</span></span> `
      )
      .join(" ");
  });
});

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);

document.body.appendChild(lightBoxContainer);

let index = 1;

function showLingBox(n) {
  if (n > galleryItem.length) {
    index = 1;
  } else if (n < 1) {
    index = galleryItem.length;
  }

  let imageLocation = galleryItem[index - 1].children[0].getAttribute("src");
  lightBoxImg.setAttribute("src", imageLocation);
}

function currentImg() {
  lightBoxContainer.style.display = "block";

  let imageIndex = parseInt(this.getAttribute("data-index"));
  showLingBox((index = imageIndex));
}

for (let i = 0; i < galleryItem.length; i++) {
  galleryItem[i].addEventListener("click", currentImg);
}

function sliderImage(n) {
  showLingBox((index += n));
}

function prevImg() {
  sliderImage(-1);
}

function nexImg() {
  sliderImage(1);
}

lightBoxPrev.addEventListener("click", prevImg);
lightBoxNext.addEventListener("click", nexImg);

function closeLightBox() {
  if (this === event.target) {
    lightBoxContainer.style.display = "none";
  }
}

lightBoxContainer.addEventListener("click", closeLightBox);

if (navbarIcon) {
  navbarIcon.addEventListener("click", () => {
    sidebar.classList.toggle("activeMob");

    navbarIcon.classList.toggle("activeMob");
  });
}
dropdownButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const dropdownList = button.nextElementSibling;
    dropdownList.classList.toggle("show");

    button.classList.toggle("active");
  });
});

favoritIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("activeIcon");
  });
});


subDropdownButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const subDropdownList = button.nextElementSibling;
    subDropdownList.classList.toggle("show");
    button.classList.toggle("active");
  });
});

if (searchInputMob) {
  searchInputMob.addEventListener("input", () => {
    const searchTerm = searchInputMob.value.toLowerCase();
    const searchBoxesMob = searchFindMob.querySelectorAll(
      ".header__searchFind-box"
    );
    if (searchTerm === "") {
      searchFindMob.style.display = "none";
      return;
    } else {
      searchFindMob.style.display = "block";
    }

    searchBoxesMob.forEach((box) => {
      const title = box
        .querySelector(".header__searchFind-title")
        .textContent.toLowerCase();
      const price = box
        .querySelector(".header__searchFind-price")
        .textContent.toLowerCase();

      if (title.includes(searchTerm) || price.includes(searchTerm)) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });
  });
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const searchBoxes = searchFind.querySelectorAll(".header__searchFind-box");
    if (searchTerm === "") {
      searchFind.style.display = "none";

      return;
    } else {
      searchFind.style.display = "block";
    }

    searchBoxes.forEach((box) => {
      const title = box
        .querySelector(".header__searchFind-title")
        .textContent.toLowerCase();
      const price = box
        .querySelector(".header__searchFind-price")
        .textContent.toLowerCase();

      if (title.includes(searchTerm) || price.includes(searchTerm)) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const decrement = document.querySelectorAll(".order__card-count-decimal"),
    increment = document.querySelectorAll(".order__card-count-incurute"),
    remove = document.querySelectorAll(".order__card-close");
  subremove = document.querySelectorAll(".order__card-closeSub");
  let price = document.querySelectorAll(".price");
  if (price !== null) {
    price.forEach(
      (item) => (item.textContent = `${item.getAttribute("data-price")} azn`)
    );
  }
  (fullTotal = document.querySelector(".fullTotal")),
    (allPrice = document.querySelectorAll(".price")),
    (discount = document.querySelector(".discount")),
    (total = 0);

  //   discount.textContent = `${discount.getAttribute("data-discount")}AZN`;

  allPrice.forEach((item) => {
    total += Number(item.getAttribute("data-total"));
    if (fullTotal !== null) {
      fullTotal.textContent = `${total} AZN`;
    }
  });
  remove.forEach((item) => {
    item.addEventListener("click", (e) => {
      const price = e.target.closest(".order__card").querySelector(".price");
      price.setAttribute("data-total", 0);
      e.target.parentElement.parentElement.parentElement.remove();
      total = 0;

      allPrice.forEach((item) => {
        total += Number(item.getAttribute("data-total"));
        fullTotal.textContent = `${total} AZN`;
      });

      console.log(fullTotal.textContent);
    });
  });

  subremove.forEach((item) => {
    item.addEventListener("click", (e) => {
      const price = e.target.closest(".order__card").querySelector(".price");
      price.setAttribute("data-total", 0);
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
      total = 0;

      allPrice.forEach((item) => {
        total += Number(item.getAttribute("data-total"));
        fullTotal.textContent = `${total} AZN`;
      });

      console.log(fullTotal.textContent);
    });
  });

  decrement.forEach((item) => {
    item.addEventListener("click", (e) => {
      const parent = e.target.closest(".order__card-count"),
        qty = parent.querySelector(".qty"),
        price = parent.querySelector(".price");

      if (qty.value > 1) {
        qty.value--;
        price.setAttribute(
          "data-total",
          qty.value * price.getAttribute("data-price")
        );
        price.textContent = `${price.getAttribute("data-total")} azn`;

        total = 0;
        allPrice.forEach((item) => {
          total += Number(item.getAttribute("data-total"));
          fullTotal.textContent = `${total} AZN`;
        });
      }
    });
  });

  increment.forEach((item) => {
    item.addEventListener("click", (e) => {
      const parent = e.target.closest(".order__card-count"),
        qty = parent.querySelector(".qty"),
        price = parent.querySelector(".price");

      qty.value++;
      price.setAttribute(
        "data-total",
        qty.value * price.getAttribute("data-price")
      );
      price.textContent = `${price.getAttribute("data-total")} azn`;

      total = 0;
      allPrice.forEach((item) => {
        total += Number(item.getAttribute("data-total"));
        fullTotal.textContent = `${total} AZN`;
      });
    });
  });
});

const decrementBtn = document.querySelector(".decrement-btn");
const incrementBtn = document.querySelector(".increment-btn");
const countInput = document.querySelector(".count-input");

if (decrementBtn) {
  // add event listeners to the buttons
  decrementBtn.addEventListener("click", () => {
    // decrement the count input value and ensure it is at least 1
    countInput.value = Math.max(parseInt(countInput.value) - 1, 1);
  });
}
if (incrementBtn) {
  incrementBtn.addEventListener("click", () => {
    // increment the count input value
    countInput.value = parseInt(countInput.value) + 1;
  });
}

const images = document.querySelectorAll("img[data-hover]");

images.forEach((img) => {
  const originalSrc = img.src;
  const hoverSrc = img.getAttribute("data-hover");
  img.style.transition = "opacity 0.3s ease-in-out";

  img.onmouseover = () => {
    img.src = hoverSrc;
    img.style.opacity = "1"; // set opacity to 0.7 on hover
  };

  img.onmouseout = () => {
    img.src = originalSrc;
    img.style.opacity = "1"; // set opacity to 0.7 on hover
  };
});

const header = document.querySelectorAll(".header")[0];
const headerInfo = document.querySelectorAll(".header__info")[0];

if (header && headerInfo) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scrollHeader");
      headerInfo.classList.add("active");
    } else {
      header.classList.remove("scrollHeader");
      headerInfo.classList.remove("active");
    }
  });
}

const selectedLang = document.querySelector(".header__box-lang__selected");
const langOptions = document.querySelector(".header__box-lang__options");
const langOptionsList = document.querySelectorAll(
  ".header__box-lang__options li"
);

if(selectedLang){

    selectedLang.addEventListener("click", function () {
        langOptions.classList.toggle("active");
      });
      
      langOptionsList.forEach((langOption) => {
        langOption.addEventListener("click", function () {
          const selectedLangText = this.textContent;
          selectedLang.textContent = selectedLangText;
          langOptions.classList.remove("active");
          langOptionsList.forEach((option) => {
            if (option.textContent === selectedLangText) {
              option.style.display = "none";
              
            } else {
              option.style.display = "block";

            }
          });
        });
      });
}

document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".commitDetail__icons .fa-star");
    const commitBtn = document.querySelector('.commit__btn');
    const commitDetail= document.querySelector('.commitDetail');


    if(commitBtn){
        commitBtn.addEventListener('click',()=>{
  
            if (commitDetail.style.display === "block") {
                commitDetail.style.display = "none";
            } else {
                commitDetail.style.display = "block";
            }
        
          })

          stars.forEach(function(star) {
            star.addEventListener("click", function() {
              let index = Array.prototype.indexOf.call(stars, this);
              stars.forEach(function(star, i) {
                if (i <= index) {
                  star.classList.add("active");
                } else {
                  star.classList.remove("active");
                }
              });
            });
          });
    }
  
    
  
  });



  const inputprice = document.querySelectorAll('.payBasketRightSide__input');
  const buttonPrice = document.querySelectorAll('.payBasketRightSide__submit');
  
  inputprice.forEach(item => {
    item.addEventListener('input', function() {
      if (item.value.length > 0) {
        buttonPrice.forEach(button => {
          button.classList.add('activePrice');
          button.removeAttribute('disabled');
        });
      } else {
        buttonPrice.forEach(button => {
          button.classList.remove('activePrice');
          button.setAttribute('disabled', true);
        });
      }
    });
  });
  
  const payBasketToggle = document.querySelector('.payBasketToggle__box')
if(payBasketToggle){
    payBasketToggle.addEventListener('click',()=>{
        document.querySelector('.payBasketToggle__bg').classList.toggle('activeToggle')
    })
}
  
const detailButton = document.querySelector('.detail__button');
const cartNotlifaction = document.querySelector('.cartNotlifaction')
const cartNotlifactionClose = document.querySelectorAll('.cartNotlifaction__hero-close')

cartNotlifactionClose.forEach(item =>{

    item.addEventListener('click',()=>{
        cartNotlifaction.classList.remove('activeCard')
    
    })
})

if(detailButton){

detailButton.addEventListener('click', ()=>{
    cartNotlifaction.classList.add('activeCard')
})
}

const sizeItems = document.querySelectorAll('.detailSize__item');
  
sizeItems.forEach(item => {
  item.addEventListener('click', () => {
    // remove active class from all items
    sizeItems.forEach(item => {
      item.classList.remove('active');
    });
    
    // add active class to selected item
    item.classList.add('active');
  });
});


const visibilityToggle = document.querySelectorAll('.visibility');
const inputs = document.querySelectorAll('.password-input');

var passwords = Array.from({ length: visibilityToggle.length }).fill(true);

visibilityToggle.forEach((toggle, index) => {
toggle.addEventListener('click', function() {
 if (passwords[index]) {
   inputs[index].setAttribute('type', 'text');
   toggle.innerHTML = 'visibility_off';
 } else {
   inputs[index].setAttribute('type', 'password');
   toggle.innerHTML = 'visibility';
 }
 passwords[index] = !passwords[index];
});
});