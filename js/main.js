// getting all elements with the 'product' class
const products = document.querySelectorAll('.product');

products.forEach((product) => {
    // selecting all the element within the products with 'product-container' class 
    const productContainer = product.querySelector('.product-container');
    
    // selecting all the first img within the productContainer
    const img = productContainer.querySelector('img');  

    // once mouse hovers or enters the element change pic
    productContainer.addEventListener('mouseenter', function() {
        img.src = 'img/product_background_02.png'; 
    });

    // once mouse exits or not hovering over the element anymore revert back to original pic
    productContainer.addEventListener('mouseleave', function() {
        img.src = 'img/product_background_01.png';
    });
});

// getting all elements with 'way-of-contact' class
const contacts = document.querySelectorAll('.way-of-contact');

contacts.forEach((contact) => {
    let imgWrapper;
    let img;

    // if the subelement of the contacts has the 'mail' class
    if(contact.querySelector('.mail')) {
        // selecting the 'mail' class then its respective img element
        imgWrapper = contact.querySelector('.mail');
        img = imgWrapper.querySelector('img');

        // changing the photo once cursor hovers over the imgWrapper
        imgWrapper.addEventListener('mouseenter', function() {
            img.src = 'img/icon_mail_02.png';
        });

        // reverting the photo once the cursor leaves
        imgWrapper.addEventListener('mouseleave', function() {
            img.src = 'img/icon_mail_01.png';
        });
    }

    // if the subelement of the contacts has the 'call' class
    if(contact.querySelector('.call')) {
        // selecting the 'call' class then its respective img element
        imgWrapper = contact.querySelector('.call');
        img = imgWrapper.querySelector('img');

        // changing the photo once cursor hovers over the imgWrapper
        imgWrapper.addEventListener('mouseenter', function() {
            img.src = 'img/icon_call_02.png';
        });

        // reverting the photo once the cursor leaves
        imgWrapper.addEventListener('mouseleave', function() {
            img.src = 'img/icon_call_01.png';
        });
    }

    // if the subelement of the contacts has the 'address' class
    if(contact.querySelector('.address')) {
        // selecting the 'address' class then its respective img element
        imgWrapper = contact.querySelector('.address');
        img = imgWrapper.querySelector('img');

        // changing the photo once cursor hovers over the imgWrapper
        imgWrapper.addEventListener('mouseenter', function() {
            img.src = 'img/icon_address_02.png';
        });

        // reverting the photo once the cursor leaves
        imgWrapper.addEventListener('mouseleave', function() {
            img.src = 'img/icon_address_01.png';
        });
    }
    
});

// array of objects containing information for each social media platform
// hoevrImg = image to show on hover
// originalImg = original image before hover
// bgColor = background color to set on hover
// hoverBorderColor = border color to set on hover
// originalBorderColor = original border color
const socialMediaData = [
    { id: 'facebook', hoverImg: 'img/icon_fb_02.png', originalImg: 'img/icon_fb_01.png', bgColor: '#5366B1', hoverBorderColor: '#5366B1', originalBorderColor: '#353535' },
    { id: 'twitter', hoverImg: 'img/icon_twitter_02.png', originalImg: 'img/icon_twitter_01.png', bgColor: '#44A6E4', hoverBorderColor: '#44A6E4', originalBorderColor: '#353535' },
    { id: 'gplus', hoverImg: 'img/icon_gplus_02.png', originalImg: 'img/icon_gplus_01.png', bgColor: '#D16252', hoverBorderColor: '#D16252', originalBorderColor: '#353535' },
    { id: 'instagram', hoverImg: 'img/icon_instagram_02.png', originalImg: 'img/icon_instagram_01.png', bgColor: '#59453B', hoverBorderColor: '#59453B', originalBorderColor: '#353535' },
    { id: 'pinterest', hoverImg: 'img/icon_pinterest_02.png', originalImg: 'img/icon_pinterest_01.png', bgColor: '#C03631', hoverBorderColor: '#C03631', originalBorderColor: '#353535' },
    { id: 'tumblr', hoverImg: 'img/icon_tumblr_02.png', originalImg: 'img/icon_tumblr_01.png', bgColor: '#394559', hoverBorderColor: '#394559', originalBorderColor: '#353535' },
    { id: 'vimeo', hoverImg: 'img/icon_vimeo_02.png', originalImg: 'img/icon_vimeo_01.png', bgColor: '#4CB4E3', hoverBorderColor: '#4CB4E3', originalBorderColor: '#353535' }
];

// loop through each social media platform in the array
socialMediaData.forEach(function(socialMedia) {
    // getting the element by ID and selecting the img inside
    const element = document.getElementById(socialMedia.id);
    const img = element.querySelector('img');
    
    // change styles when cursor hovers over the socialMedia
    element.addEventListener('mouseenter', function() {
        element.style.backgroundColor = socialMedia.bgColor;
        element.style.borderColor = socialMedia.hoverBorderColor;
        img.src = socialMedia.hoverImg;
    });

    // revert to original style when cursor leaves
    element.addEventListener('mouseleave', function() {
        element.style.backgroundColor = '';  
        element.style.borderColor = socialMedia.originalBorderColor;
        img.src = socialMedia.originalImg;  
    });
});

// add smooth scroll functionality to elements with class 'circle'
document.querySelectorAll('.circle').forEach(circle => {
    // add a click event listener to each circle element
    circle.addEventListener('click', function() {
        // get the data-section attribute which corresponds to the section id to scroll to
        const sectionId = this.getAttribute('data-section');
        // scroll to the section smoothly
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});