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
        likeIconList[i].classList.toggle("icon-like-selected");
    })
}