const products = document.querySelectorAll('.product');

products.forEach((product) => {
    const productContainer = product.querySelector('.product-container');
    const img = productContainer.querySelector('img');  

    productContainer.addEventListener('mouseenter', function() {
        img.src = 'img/product_background_02.png'; 
    });

    productContainer.addEventListener('mouseleave', function() {
        img.src = 'img/product_background_01.png';
    });
});

const contacts = document.querySelectorAll('.way-of-contact');

contacts.forEach((contact) => {
    let imgWrapper;
    let img;

    if(contact.querySelector('.mail')) {
        imgWrapper = contact.querySelector('.mail');
        img = imgWrapper.querySelector('img');

        imgWrapper.addEventListener('mouseenter', function() {
            img.src = 'img/icon_mail_02.png';
        });

        imgWrapper.addEventListener('mouseleave', function() {
            img.src = 'img/icon_mail_01.png';
        });
    }

    if(contact.querySelector('.call')) {
        imgWrapper = contact.querySelector('.call');
        img = imgWrapper.querySelector('img');

        imgWrapper.addEventListener('mouseenter', function() {
            img.src = 'img/icon_call_02.png';
        });

        imgWrapper.addEventListener('mouseleave', function() {
            img.src = 'img/icon_call_01.png';
        });
    }

    if(contact.querySelector('.address')) {
        imgWrapper = contact.querySelector('.address');
        img = imgWrapper.querySelector('img');

        imgWrapper.addEventListener('mouseenter', function() {
            img.src = 'img/icon_address_02.png';
        });

        imgWrapper.addEventListener('mouseleave', function() {
            img.src = 'img/icon_address_01.png';
        });
    }
    
});

const socialMediaData = [
    { id: 'facebook', hoverImg: 'img/icon_fb_02.png', originalImg: 'img/icon_fb_01.png', bgColor: '#5366B1', hoverBorderColor: '#5366B1', originalBorderColor: '#353535' },
    { id: 'twitter', hoverImg: 'img/icon_twitter_02.png', originalImg: 'img/icon_twitter_01.png', bgColor: '#44A6E4', hoverBorderColor: '#44A6E4', originalBorderColor: '#353535' },
    { id: 'gplus', hoverImg: 'img/icon_gplus_02.png', originalImg: 'img/icon_gplus_01.png', bgColor: '#D16252', hoverBorderColor: '#D16252', originalBorderColor: '#353535' },
    { id: 'instagram', hoverImg: 'img/icon_instagram_02.png', originalImg: 'img/icon_instagram_01.png', bgColor: '#59453B', hoverBorderColor: '#59453B', originalBorderColor: '#353535' },
    { id: 'pinterest', hoverImg: 'img/icon_pinterest_02.png', originalImg: 'img/icon_pinterest_01.png', bgColor: '#C03631', hoverBorderColor: '#C03631', originalBorderColor: '#353535' },
    { id: 'tumblr', hoverImg: 'img/icon_tumblr_02.png', originalImg: 'img/icon_tumblr_01.png', bgColor: '#394559', hoverBorderColor: '#394559', originalBorderColor: '#353535' },
    { id: 'vimeo', hoverImg: 'img/icon_vimeo_02.png', originalImg: 'img/icon_vimeo_01.png', bgColor: '#4CB4E3', hoverBorderColor: '#4CB4E3', originalBorderColor: '#353535' }
];

socialMediaData.forEach(function(socialMedia) {
    const element = document.getElementById(socialMedia.id);
    const img = element.querySelector('img');
    
    element.addEventListener('mouseenter', function() {
        element.style.backgroundColor = socialMedia.bgColor;
        element.style.borderColor = socialMedia.hoverBorderColor;
        img.src = socialMedia.hoverImg;
    });

    element.addEventListener('mouseleave', function() {
        element.style.backgroundColor = '';  
        element.style.borderColor = socialMedia.originalBorderColor;
        img.src = socialMedia.originalImg;  
    });
});

document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', function() {
        const sectionId = this.getAttribute('data-section');
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});