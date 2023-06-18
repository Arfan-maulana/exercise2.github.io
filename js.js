$(document).ready(function(){
    var slider = $('.slider');

    slider.slick({
        arrows: false,
        autoplay: true, // Otomatis putar slide
        autoplaySpeed: 2000 // Kecepatan putar slide (dalam milidetik)
       
    });

    // Fungsi saat tombol "Sebelumnya" diklik
    $('#prevButton').click(function(){
        slider.slick('slickPrev'); // Pindahkan ke slide sebelumnya
    });

    // Fungsi saat tombol "Selanjutnya" diklik
    $('#nextButton').click(function(){
        slider.slick('slickNext'); // Pindahkan ke slide selanjutnya
    });
});