var btnCounter = document.querySelectorAll('.btn-qty');
var totalItem = document.querySelector('.total-item');
function countItems() {
    for (var i = 0; i < btnCounter.length; i++) {
        btnCounter[i].addEventListener('click', function () {
            var oldValue = totalItem.value;
            if (this.value === '+') {
                var newValue = parseInt(oldValue, 10) + 1;
            } else {
                if (oldValue > 1) {
                    var newValue = parseInt(oldValue, 10) - 1;
                } else {
                    newValue = 1;
                }
            }
            newValue = isNaN(newValue) ? 1 : newValue;
            totalItem.value = newValue;
        });
    }
}
countItems();

/// slick
$(document).ready(function () {
    $('.items').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow:
            '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
        nextArrow:
            '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>'
    });
});

/// show more product
$(document).ready(function () {
    $("#more").click(function () {
        var elem = $("#more").text();
        if (elem == "Xem thêm") {
            //Stuff to do when btn is in the read more state
            $("#more").text("Rút gọn");
            $("#content").slideDown();
        } else {
            //Stuff to do when btn is in the read less state
            $("#more").text("Xem thêm");
            $("#content").slideUp();
        }
    });
});

/// order
$(document).ready(function () {
    $("#showmenu").click(function () {
        if ($(window).width() <= 480) {
            $('.menu').slideToggle("fast");
            $('.nothing').addClass("d-none");
            $('.orders').addClass("d-none");
        } else if ($(window).width() <= 1440) {
            $('.menu').slideToggle("fast");
            $('.nothing').addClass("d-none");
        }
    });
});

/// sidebar menu
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
