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
const productQuantityList = document.querySelectorAll('.product-quantity')

productQuantityList.forEach(item => item.addEventListener('click', function(e) {
    const pqTextInput = item.querySelector('.product-quantity__text-input')
    const target = e.target;
    if (target.classList.contains('product-quantity__button')) {
        const oldVal = +pqTextInput.getAttribute("value")
        switch (target.innerText) {
            case '+':                
                pqTextInput.setAttribute("value", oldVal + 1)
                break
            case '-':
                if (oldVal > 1) {
                    pqTextInput.setAttribute("value", oldVal - 1)
                }
                break
        }
        console.log(pqTextInput.getAttribute("value"))
    }
}))