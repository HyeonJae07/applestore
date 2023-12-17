window.onload = function() {
    let currentSectionIndex = 0;
    const screens = document.querySelectorAll('.screen');

    let scrolling = false;

    window.addEventListener('wheel', (event) => {
        if (scrolling) return;
        
        scrolling = true;
        event.preventDefault();
        
        if (event.deltaY > 0) {
            currentSectionIndex = Math.min(currentSectionIndex + 1, screens.length - 1);
        } else {
            currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
        }
        
        $('html, body').animate({
            scrollTop: screens[currentSectionIndex].offsetTop
        }, 500, function() {
            scrolling = false;
        });
    }, { passive: false });

    $('#sc-1-bnt-1').click(function(){
        if (!scrolling) {
            $('html, body').animate({
                scrollTop: screens[1].offsetTop
            }, 500);
        }
    });
    var index = 1;
    $('.sc-2-page').hide();
    $('#sc-2-page-1').show();
    $('#con-1-s').css('width', '75px')
    $('.con-s').click(function() {
        index = $(this).index() + 1;
        $('.con-s').animate({width: '10px'}, {duration: 500, queue: false});
        $('#con-' + index + '-s').animate({width: '75px'}, {duration: 500, queue: false});
        $('.sc-2-page').hide();
        $('#sc-2-page-' + index).show();
    });
    var playToggle = false;
    $('#sc-2-play-toggle').click(function () {
        if (playToggle) {
            $("#sc-2-play-toggle").removeClass("fa-solid fa-pause").addClass("fa-solid fa-play").css('font-size', '22.5px');
        } else {
            $("#sc-2-play-toggle").removeClass("fa-solid fa-play").addClass("fa-solid fa-pause").css('font-size', '25px');
        }
        playToggle = !playToggle;
    });
    setInterval(function() {
        if (playToggle) {
            $('.con-s').animate({width: '10px'}, {duration: 500, queue: false});
            $('#con-' + index + '-s').animate({width: '75px'}, {duration: 500, queue: false});
            $('.sc-2-page').hide();
            $('#sc-2-page-' + index).show();
            index++;
            if(index > $('.con-s').length) {
                index = 1;
            }
        }
    }, 4000);
    $('.con-3-img').hide();
    $('#con-3-img-1').show();
    $('#con-3-bnt-1').addClass('sc-3-ac');

    $('.con-3-bnt').click(function() {
        var index2 = $(this).index() + 1;
        var textarr = [
            '내추럴 티타늄 색상 17.0cm iPhone 15 Pro Max 및 15.5cm iPhone 15 Pro',
            '블루 티타늄 색상 17.0cm iPhone 15 Pro Max 및 15.5cm iPhone 15 Pro',
            '화이트 티타늄 색상 17.0cm iPhone 15 Pro Max 및 15.5cm iPhone 15 Pro',
            '블랙 티타늄 색상 17.0cm iPhone 15 Pro Max 및 15.5cm iPhone 15 Pro',
        ]
        
        $('.con-3-bnt').removeClass('sc-3-ac');
        $(this).addClass('sc-3-ac');
            
        $('.con-3-img').not('#con-3-img-' + index2).fadeOut(500, function() {
            $('#con-3-img-' + index2).fadeIn(500);
        });
        $('#sc-3-txt').text(textarr[index2]);
    });

    $('video').click(function () {
        $("#video")[0].play();
    });
}