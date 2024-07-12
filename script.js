$(document).ready(function() {
    const images = [
        { src: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-8moments-1266810.jpg&fm=jpg', category: 'category1' },
        { src: 'https://i.pinimg.com/474x/6b/cc/cc/6bccccb4750ea5135e8ce1ab886f976f.jpg', category: 'category2' },
        { src: 'https://pathways.org/wp-content/uploads/2019/07/dad_baby_daughter_playing_with_blocks-600x400.jpg', category: 'category3' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx58mieXv6nG3F9y2dcm_KMK1tAqXu3Bv6BQ&s', category: 'category1' },
        { src: 'https://t4.ftcdn.net/jpg/05/50/61/75/360_F_550617518_Eu3U6kTl3mODPvnfTMFHQ88z1y5KNfNQ.jpg', category: 'category2' },
        { src: 'https://pics.craiyon.com/2023-06-20/7f9a15a54868484cb758093340ddb0e1.webp', category: 'category3' },
    ];

    function displayImages(filter) {
        $('#gallery').empty();
        const filteredImages = filter === 'all' ? images : images.filter(image => image.category === filter);
        filteredImages.forEach(image => {
            $('#gallery').append(`<img src="${image.src}" data-category="${image.category}" alt="Image">`);
        });
    }

    displayImages('all');

    $('nav button').on('click', function() {
        const filter = $(this).data('filter');
        displayImages(filter);
    });

    $('#gallery').on('click', 'img', function() {
        const src = $(this).attr('src');
        $('#lightbox-img').attr('src', src);
        $('#lightbox').fadeIn();
    });

    $('.close, #lightbox').on('click', function() {
        $('#lightbox').fadeOut();
    });

    $('.lightbox-content').on('click', function(e) {
        e.stopPropagation();
    });
});
