var clip = document.querySelector('.clip');
var quote = document.querySelector('.quote .text-center h1');

window.addEventListener('scroll', function() {
    var value = window.scrollY;
    clip.style.left = value + 'px';

    var opValue = value/10000 * 2 + 1;
    if(opValue <= .7){
        opValue === 0;
    }

    quote.style.color = `rgba( 255, 255, 255, ${opValue})`;


});

AOS.init();