$(document).ready(function() {
    $(".header").load("header.html");
    $(".footer").load("footer.html");
})

// -------------------------- products ---------------------------
// sale banner
$(document).ready(function() {
    $('#sale').modal('show');
});
// data-filter
$(document).ready(function() {
    $(".filter-button").click(function() {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            $('.filter').show();
        } else {
            $(".filter").not('.' + value).hide();
            $('.filter').filter('.' + value).show();
        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");
});
$(function() {
    let btnActive = document.getElementById("button-group");
    let btns = btnActive.getElementsByClassName("btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("activated");
            current[0].className = current[0].className.replace(" activated", "");
            this.className += " activated";
        });
    }
});
$(function() {
    let btnActive = document.getElementById("button-group2");
    let btns = btnActive.getElementsByClassName("btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("activated2");
            current[0].className = current[0].className.replace(" activated2", "");
            this.className += " activated2";
        });
    }
});
// sorting
$(document).on("change", ".sorting", function() {
    var sortingMethod = $(this).val();

    if (sortingMethod == 'l2h') {
        sortProductsPriceAscending();
    } else if (sortingMethod == 'h2l') {
        sortProductsPriceDescending();
    } else if (sortingMethod = 'promotion') {
        sortProductsPromotion();
    }
});


function sortProductsPromotion() {
    var products = $('.filter');
    products.sort(function(a, b) {
        return $(b).data("percent") - $(a).data("percent")
    });
    $(".products").html(products);
}

function sortProductsPriceAscending() {
    var products = $('.filter');
    products.sort(function(a, b) {
        return $(a).data("price") - $(b).data("price")
    });
    $(".products").html(products);
}

function sortProductsPriceDescending() {
    var products = $('.filter');
    products.sort(function(a, b) {
        return $(b).data("price") - $(a).data("price")
    });
    $(".products").html(products);
}
// sticky sidebar

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top - 150;
    var div_height = $(".sidebar").height();
    var leftHeight = $('.box-left').height();
    var footer_top = $(".footer").offset().top - 200;
    if (window_top + div_height > footer_top) {
        $('.sidebar').removeClass('stick');
        $('.sidebar').addClass('abs');
        $('.sidebar-box').css('min-height', leftHeight + 'px');
    } else if (window_top > div_top) {
        $('.sidebar').addClass('stick');
        $('.sidebar').removeClass('abs');
    } else {
        $('.sidebar').removeClass('stick');
        $('.sidebar').removeClass('abs');
    }
}
$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});
$(function() {
    for (var i = 0; i < document.getElementsByClassName("color").length; i++) {
        let size = document.getElementsByClassName("color")[i];

        size.addEventListener("click", () => {
            size.classList.toggle('choose-color');
        })
    }
})
$(function() {
    for (var i = 0; i < document.getElementsByClassName("size").length; i++) {
        let size = document.getElementsByClassName("size")[i];

        size.addEventListener("click", () => {
            size.classList.toggle('clicked');
        })
    }
})
$(document).ready(function() {
    $(".size-clothes").show();
    $(".size-shoes").hide();
});

function clothesSize() {
    $(".size-clothes").show();
    $(".size-shoes").hide();
}

function shoesSize() {
    $(".size-clothes").hide();
    $(".size-shoes").show();
}

// -------------------------- cart ---------------------------

$(document).ready(function() {
    $(".dd")[0].innerText = new Date().getDate() + 1;
    $(".mm")[0].innerText = new Date().getMonth() + 1;
    $(".yyyy")[0].innerText = new Date().getFullYear();
    $(".dd")[1].innerText = new Date().getDate() + 2;
    $(".mm")[1].innerText = new Date().getMonth() + 1;
    $(".yyyy")[1].innerText = new Date().getFullYear();
});

// -------------------------- products details ---------------------------

$(document).ready(function() {
    var url = $("#video-Review").attr('src');

    $("#videoReview").on('hide.bs.modal', function() {
        $("#video-Review").attr('src', '');
    });

    $("#videoReview").on('show.bs.modal', function() {
        $("#video-Review").attr('src', url);
    });
});


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

function arlet() {
    alert("Đánh giá của bạn đã được gửi đi");
}
