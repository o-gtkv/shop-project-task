//--------------------------------------------------------------------
const addToCartBtnList = document.querySelectorAll(".btn-add-to-cart")
for (let i = 0; i < addToCartBtnList.length; ++i) {
    addToCartBtnList[i].addEventListener("click", () => {
        const productCount = document.getElementById("product-count")
        productCount.innerText = +productCount.innerText + 1
    })
}

//--------------------------------------------------------------------
const likeIconList = document.querySelectorAll(".icon-like")
for (let i = 0; i < likeIconList.length; ++i) {
    likeIconList[i].addEventListener("click", () => {
        likeIconList[i].classList.toggle("icon-like-selected")
    })
}

//--------------------------------------------------------------------
function show(btn) {
    btn.addEventListener("click", () => {
        form.classList.add("show");
        form.classList.remove("hide") 
    })
}

function hide() {
    const form = document.querySelector(".modal");
    form.classList.add("hide");
    form.classList.remove("show");
}

const moreDetailsButtons = document.querySelectorAll(".btn-more-details")
const form = document.querySelector(".modal")
moreDetailsButtons.forEach(show);

const formCloseBtn = document.querySelector('.btn-close');
formCloseBtn.addEventListener('click', hide)

form.addEventListener('click', function(e) {
    if (e.target === form) {
        hide()
    }
})

//--------------------------------------------------------------------
// function onProductQuantityChange(e) {
//     const pqTextInput = this.querySelector('.product-quantity__text-input')
//     const target = e.target
//     if (target.classList.contains('product-quantity__button')) {
//         const oldVal = +pqTextInput.getAttribute('value')
//         switch (target.innerText) {
//             case '+':                
//                 pqTextInput.setAttribute('value', oldVal + 1)
//                 break
//             case '-':
//                 if (oldVal > 1) {
//                     pqTextInput.setAttribute('value', oldVal - 1)
//                 }
//                 break
//         }        
//     }
// }

// const productQuantityList = document.querySelectorAll('.product-quantity')
// productQuantityList.forEach(item => item.addEventListener('click', onProductQuantityChange))

//--------------------------------------------------------------------
function Counter(incBtn, decBtn, inputField) {
    this.domRefs = {
        incBtn,
        decBtn,
        inputField
    }

    this.toggleButtonState = function() {
        const count = this.domRefs.inputField.value
        this.domRefs.decBtn.disabled = count <= 1
        this.domRefs.incBtn.disabled = count >= 5
    }

    this.inc = function() {
        const currentCount = +this.domRefs.inputField.value
        const nextCount = currentCount + 1
        this.domRefs.inputField.value = nextCount    
        this.toggleButtonState()
    }

    this.dec = function() {
        const currentCount = +this.domRefs.inputField.value
        const nextCount = currentCount - 1
        this.domRefs.inputField.value = nextCount    
        this.toggleButtonState()
    }

    this.inc = this.inc.bind(this)
    this.dec = this.dec.bind(this)
    this.toggleButtonState = this.toggleButtonState.bind(this)

    this.toggleButtonState()
    this.domRefs.incBtn.addEventListener('click', this.inc)
    this.domRefs.decBtn.addEventListener('click', this.dec)
}

const productQuiantityElList = document.querySelectorAll('.product-quantity');
const counters = [];
productQuiantityElList.forEach(productQuiantity => {
     const incBtn = productQuiantity.querySelector('.increment-button')
     const decBtn = productQuiantity.querySelector('.decrement-button')
     const input = productQuiantity.querySelector('input')
     counters.push(new Counter(incBtn, decBtn, input))
})


$('.slider-block').slick({
    dots: true
})