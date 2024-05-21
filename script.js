let containerEle = document.getElementById('product_details_container')

const handleRequest = async() => {
    let response = await fetch('https://fakestoreapi.com/products')
    // console.log(response);
    let result = await response.json()
    // console.log(result);
    result.forEach((value) => {

        // CARD CONTAINER
        let cardContainer = document.createElement('div');
        cardContainer.classList.add('product_card')
        containerEle.appendChild(cardContainer)

        // Image Container
        let imagesConatiner = document.createElement('div')
        imagesConatiner.classList.add('product_card_image')

        cardContainer.appendChild(imagesConatiner)

        // Images
        let imageEle = document.createElement('img')
        imageEle.srcset = value.image
        imageEle.style.height = '150px'
        imageEle.style.width = '150px'
        imageEle.style.position='relative'
        imagesConatiner.appendChild(imageEle)

        // let wishlistEle = document.createElement('i');
        // wishlistEle.classList.add('fa', 'fa-star')
        // wishlistEle.style.position = 'absolute'
        // cardDetailsEle.appendChild(wishlistEle)

        //Card Detals Container
        let cardDetailsEle = document.createElement('div')
        cardDetailsEle.classList.add('product_card_details')
        cardContainer.appendChild(cardDetailsEle)
        // Title
        let h4Ele = document.createElement('h4')
        h4Ele.textContent = value.title
        h4Ele.classList.add('para_style1')
        cardDetailsEle.appendChild(h4Ele)
        // Description
        let pEle = document.createElement('p')
        pEle.textContent = value.description
        pEle.classList.add('para_style')
        cardDetailsEle.appendChild(pEle)
        // Price
        let h3Ele = document.createElement('h3')
        h3Ele.textContent = '₹  ' + value.price + ' Only'
        cardDetailsEle.appendChild(h3Ele)
        // Rating Container
        let ratingContainer = document.createElement('div')
        ratingContainer.classList.add('rating_stars')
        cardDetailsEle.appendChild(ratingContainer)

        let ratingStars = document.createElement('div')
        ratingStars.classList.add('stars')
        ratingStars.innerHTML = 'Ratings : '
        ratingContainer.appendChild(ratingStars)
        // stars
        // 1
        let starEle1 = document.createElement('i')
        starEle1.classList.add('fa', 'fa-star')
        starEle1.style.paddingRight = '2px'
        starEle1.style.color = 'rgb(253, 122, 0)'
        ratingStars.appendChild(starEle1)
        /*
        //2
        let starEle2 = document.createElement('i')
        starEle2.classList.add('fa', 'fa-star')
        starEle2.style.paddingRight = '2px'
        ratingStars.appendChild(starEle2)
        // 3
        let starEle3 = document.createElement('i')
        starEle3.classList.add('fa', 'fa-star')
        starEle3.style.paddingRight = '2px'
        ratingStars.appendChild(starEle3)
        // 4
        let starEle4 = document.createElement('i')
        starEle4.classList.add('fa', 'fa-star')
        starEle4.style.paddingRight = '2px'
        ratingStars.appendChild(starEle4)
        // 5
        let starEle5 = document.createElement('i')
        starEle5.classList.add('fa', 'fa-star-half-o')
        starEle5.style.paddingRight = '2px'
        ratingStars.appendChild(starEle5)
        */
        // Rating
        let h6Ele = document.createElement('span')
        h6Ele.textContent = ' '+ value.rating.rate
        h6Ele.style.color='black'
        ratingStars.appendChild(h6Ele)

        let btnContainer = document.createElement('div')
        btnContainer.classList.add('button')
        cardDetailsEle.appendChild(btnContainer)

        let buttonEle = document.createElement('button')
        buttonEle.innerHTML = 'Add to Cart'
        buttonEle.style.padding = '10px'
        buttonEle.style.borderRadius = '12px'
        buttonEle.style.border = 'none'
        buttonEle.style.backgroundColor = '#f5d90a'
        buttonEle.style.boxShadow = '0 0 5px black'
        ratingContainer.appendChild(buttonEle)
        
    })
}
handleRequest()