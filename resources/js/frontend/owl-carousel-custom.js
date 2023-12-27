
$(document).ready(function () {
    // $('#quote-carousel').carousel({
    //         pause: true,
    //         interval: false,
    // });
    $('#mgt-carousel').owlCarousel({
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            600: {
                items: 3,
                margin: 10
            },
            1000: {
                items: 5,
                margin: 80,
                mouseDrag: false
            }
        }
    });
    $('#mgtteam-carousel').owlCarousel({
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            600: {
                items: 3,
                margin: 10
            },
            1000: {
                items: 4,
                mouseDrag: false
            }
        }
    });
    $('#board-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<svg width="15px" height="15px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="15px" height="15px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
        margin: 0,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2
            },
            640: {
                items: 3
            },
            1000: {
                items: 4,
                mouseDrag: false
            }
        }
    });

    var bannerCarousel = $("#banner-carousel");
    $(bannerCarousel).owlCarousel({

        items: 1,
        singleItem: true,
         autoplay: true,
        autoplayTimeout: 4000,
        //autoplaySpeed:5000,
         smartSpeed: 1200,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        //transitionStyle: "fade",
        //animateOut: 'fadeOut',
        //singleItem:true, //is a shortcut for:
        //itemsDesktop : false,
        //itemsDesktopSmall : false,
        //itemsTablet: false,
        //itemsMobile : false,
        loop: true,
        dots: true,
        nav: false,
        //autoplayHoverPause: true,
        mouseDrag: false
    });
    $('.play').on('click', function () {
       bannerCarousel.trigger('next.owl.carousel');
       bannerCarousel.trigger('play.owl.autoplay',[1000]);
    });
    $('.stop').on('click', function () {
        bannerCarousel.trigger('stop.owl.autoplay');
    });


    /*
     $(bannerCarousel).on('mouseover', function (e) {
     //alert('play');
     bannerCarousel.trigger('stop.owl.autoplay');
     })
     $(bannerCarousel).on('mouseleave', function (e) {
     //alert('pause');
     bannerCarousel.trigger('play.owl.autoplay');
     })*/
    /*$("#diversity-carousel").owlCarousel({
     animateOut: 'fadeOut',
     items: 1,
     singleItem: true,
     loop: false,
     dots: false,
     nav: false,
     autoplay: false,
     autoplayHoverPause: false,
     mouseDrag: false
     });*/
    $("#testimonial-carousel").owlCarousel({
// animateOut: 'fadeOut',
        items: 1,
        singleItem: true,
        //transitionStyle: "fade",
        //animateOut: 'fadeOut',
        //singleItem:true, //is a shortcut for:
        //itemsDesktop : false,
        //itemsDesktopSmall : false,
        //itemsTablet: false,
        //itemsMobile : false,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<svg width="15px" height="15px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="15px" height="15px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        mouseDrag: true
    });
    $("#footer-testimonial-carousel").owlCarousel({
// animateOut: 'fadeOut',
        items: 1,
        singleItem: true,
        //transitionStyle: "fade",
        //animateOut: 'fadeOut',
        //singleItem:true, //is a shortcut for:
        //itemsDesktop : false,
        //itemsDesktopSmall : false,
        //itemsTablet: false,
        //itemsMobile : false,
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        mouseDrag: true
    });
    $("#achievementsCarousel").owlCarousel({
        //animateOut: 'fadeOut',
        items: 1,
        singleItem: true,
        navText: ['<svg width="15px" height="15px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="15px" height="15px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
        loop: true,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        mouseDrag: true,
    });
    $('.media-carousel').owlCarousel({
// loop: true,
        margin: 30,
        nav: false,
        autoplay: false,
        mouseDrag: false,
        video: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            640: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $('#highlight-carousel,#academic-carousel').owlCarousel({
        loop: true,
        margin: 60,
        nav: false,
        autoplay: false,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    $('#our-boards-carousel').owlCarousel({
        //loop: true,
        //margin: 60,
        nav: false,
        autoplay: false,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    $('#school-achievements-carousel').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
                margin: 0,
            },
            640: {
                items: 2,
                margin: 20,
                mouseDrag: false,
            },
            992: {
                items: 3,
                margin: 20,
                mouseDrag: false,
            }
        }
    });
    $('#highlight-carousel-2').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1,
                margin: 60,
            },
            640: {
                margin: 0,
                items: 2
            },
            768: {
                margin: 0,
                items: 3
            }
        }
    });
    $('#news-events-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ['<svg width="15px" height="15px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="15px" height="15px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
        autoplay: false,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
    /*gallery carousel*/
    var owlGallery = $(".owl-gallery-carousel");
    var owlThumbGallery = $(".owl-thumb-gallery-carousel");
    var facilitiesThumbGallery = $("#facilities-thumb-carousel");
    var schollThumbGallery = $("#school-gallery-thumb-carousel");
    var mediaThumbGallery = $("#media-gallery-thumb-carousel");
    var academicThumbGallery = $("#academic-thumb-carousel");
    var academicSchoolThumbGallery = $("#academic-school-thumb-carousel");
    var corporateNewsEventsThumbGallery = $("#corporate-news-events-thumb-carousel");
    var aboutUsThumbGallery = $("#about-us-thumb-carousel");
    var teamThumbGallery = $("#team-thumb-carousel");
    //var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;
    owlGallery.owlCarousel({
        items: 1,
        loop: false,
        singleItem: true,
        smartSpeed: 600,
        //startPosition: 1,
        //animateOut: 'fadeOut',
        //animateIn: 'slideInLeft',
        animateIn: 'fadeIn',
        nav: false,
        autoplay: false,
        dots: false,
        autoHeight: true,
        responsiveRefreshRate: 200,
        mouseDrag: false,
        navText: ['<svg width="15px" height="15px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="15px" height="15px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);
    $(owlGallery).find('.owl-height').css({'height': 'auto'});
    /*school gallery carousel*/
    schollThumbGallery
            .on('initialized.owl.carousel', function () {
                $(this).find(".owl-item").eq(0).addClass("current");
                //alert('1');
            })
            .owlCarousel({
                //items : slidesPerPage,
                dots: false,
                nav: false,
                items: 2,
                smartSpeed: 200,
                slideSpeed: 500,
                //slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                responsiveRefreshRate: 100,
            })
            .on('changed.owl.carousel', syncPosition2);
    mediaThumbGallery
            .on('initialized.owl.carousel', function () {
                $(this).find(".owl-item").eq(0).addClass("current");
                //alert('1');
            })
            .owlCarousel({
                //items : slidesPerPage,
                dots: false,
                nav: true,
                navText: ['<svg width="15px" height="15px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="15px" height="15px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
                smartSpeed: 200,
                slideSpeed: 500,
                URLhashListener: true,
                autoplayHoverPause: true,
                startPosition: 'URLHash',
                responsive: {
                    /*bootstrap breakpoints*/
                    0: {
                        items: 1, /*slideBy should be equal to no of items*/
                        slideBy: 1, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                    },
                    480: {
                        items: 2, /*slideBy should be equal to no of items*/
                        slideBy: 2, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                    },
                    768: {
                        items: 3, /*slideBy should be equal to no of items*/
                        slideBy: 3, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                    }
                },
                mouseDrag: false,
            })
            .on('changed.owl.carousel', syncPosition2);
    /*facilities carousel*/
    facilitiesThumbGallery
            .on('initialized.owl.carousel', function () {
                $(this).find(".owl-item").eq(0).addClass("current");
            })
            .owlCarousel({
                //items : slidesPerPage,
                dots: false,
                nav: true,
                navText: ['<svg width="15px" height="15px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="15px" height="15px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
                smartSpeed: 200,
                slideSpeed: 500,
                //slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                responsiveRefreshRate: 100,
                responsive: {
                    /*bootstrap breakpoints*/
                    0: {
                        items: 1, /*slideBy should be equal to no of items*/
                        slideBy: 1, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                    },
                    480: {
                        items: 2, /*slideBy should be equal to no of items*/
                        slideBy: 2, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                    },
                    768: {
                        items: 3, /*slideBy should be equal to no of items*/
                        slideBy: 3, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                    },
                    992: {
                        items: 4, /*slideBy should be equal to no of items*/
                        slideBy: 4, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                    },
                    1200: {
                        items: 6, /*slideBy should be equal to no of items*/
                        slideBy: 6, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                        mouseDrag: false,
                    }
                }
            }).on('changed.owl.carousel', syncPosition2);
    /* academic carousel */
    academicThumbGallery
            .on('initialized.owl.carousel', function () {
                $(this).find(".owl-item").eq(0).addClass("current");
            })
            .owlCarousel({
                //items : slidesPerPage,
                dots: false,
                nav: true,
                navText: ['<svg width="15px" height="15px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="15px" height="15px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
                smartSpeed: 200,
                slideSpeed: 500,
                //slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                responsiveRefreshRate: 100,
                responsiveClass: true,
                responsive: {
                    /*bootstrap breakpoints*/
                    0: {
                        items: 1, /*slideBy should be equal to no of items*/
                        slideBy: 1, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                    },
                    768: {
                        items: 2, /*slideBy should be equal to no of items*/
                        slideBy: 2, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                    },
                    1200: {
                        items: 3, /*slideBy should be equal to no of items*/
                        slideBy: 3, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                        mouseDrag: false,
                    }
                }
            }).on('changed.owl.carousel', syncPosition2);
    /* academic carousel */
    academicSchoolThumbGallery
            .on('initialized.owl.carousel', function () {
                $(this).find(".owl-item").eq(0).addClass("current");
            })
            .owlCarousel({
                //items : slidesPerPage,
                dots: false,
                nav: true,
                navText: ['<svg width="15px" height="15px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="15px" height="15px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
                smartSpeed: 200,
                slideSpeed: 500,
                //slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                responsiveRefreshRate: 100,
                responsiveClass: true,
                responsive: {
                    /*bootstrap breakpoints*/
                    0: {
                        items: 1, /*slideBy should be equal to no of items*/
                        slideBy: 1, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                    },
                    600: {
                        items: 2, /*slideBy should be equal to no of items*/
                        slideBy: 2, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel

                    },
                    768: {
                        items: 3, /*slideBy should be equal to no of items*/
                        slideBy: 3, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                        mouseDrag: false,
                    }
                }
            }).on('changed.owl.carousel', syncPosition2);
    corporateNewsEventsThumbGallery
            .on('initialized.owl.carousel', function () {
                $(this).find(".owl-item").eq(0).addClass("current");
            })
            .owlCarousel({
                //items : slidesPerPage,
                dots: false,
                nav: true,
                navText: ['<svg width="15px" height="15px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="15px" height="15px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
                smartSpeed: 200,
                slideSpeed: 500,
                //slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                responsiveRefreshRate: 100,
                responsiveClass: true,
                responsive: {
                    /*bootstrap breakpoints*/
                    0: {
                        items: 1, /*slideBy should be equal to no of items*/
                        slideBy: 1, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                    },
                    600: {
                        items: 2, /*slideBy should be equal to no of items*/
                        slideBy: 2, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel

                    },
                    768: {
                        items: 5, /*slideBy should be equal to no of items*/
                        slideBy: 5, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                        mouseDrag: false,
                    }
                }
            }).on('changed.owl.carousel', syncPosition2);
    /* about us carousel */
    aboutUsThumbGallery
            .on('initialized.owl.carousel', function () {
                $(this).find(".owl-item").eq(0).addClass("current");
            })
            .owlCarousel({
                //items : slidesPerPage,
                dots: false,
                loop: false,
                nav: true,
                navText: ['<svg width="15px" height="15px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="15px" height="15px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
                smartSpeed: 200,
                slideSpeed: 500,
                //slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                responsiveRefreshRate: 100,
                responsiveClass: true,
                responsive: {
                    /*bootstrap breakpoints*/
                    0: {
                        items: 5, /*slideBy should be equal to no of items*/
                        slideBy: 5, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
						mouseDrag: false,
                    },
                    600: {
                        items: 5, /*slideBy should be equal to no of items*/
                        slideBy: 5, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
						mouseDrag: false,

                    },
                    768: {
                        items: 5, /*slideBy should be equal to no of items*/
                        slideBy: 5, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                        mouseDrag: false,
                    }
                }
            }).on('changed.owl.carousel', syncPosition2);
    /* academic carousel */
    teamThumbGallery
            .on('initialized.owl.carousel', function () {
                $(this).find(".owl-item").eq(0).addClass("current");
            })
            .owlCarousel({
                //items : slidesPerPage,
                dots: false,
                nav: true,
                navText: ['<svg width="15px" height="15px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="15px" height="15px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
                smartSpeed: 200,
                slideSpeed: 500,
                //slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                responsiveRefreshRate: 100,
                responsiveClass: true,
                responsive: {/*bootstrap breakpoints*/
                    0: {
                        items: 3, /*slideBy should be equal to no of items*/
                        slideBy: 3, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
						mouseDrag: false,
                    },
                    600: {
                        items: 3, /*slideBy should be equal to no of items*/
                        slideBy: 3, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
						mouseDrag: false,

                    },
                    768: {
                        items: 3, /*slideBy should be equal to no of items*/
                        slideBy: 3, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                        mouseDrag: false,
                    }
                },
            }).on('changed.owl.carousel', syncPosition2);
    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        var current = el.item.index;
        //if you disable loop you have to comment this block
        /*
         var count = el.item.count - 1;
         var current = Math.round(el.item.index - (el.item.count / 2) - .5);
         if (current < 0) {
         current = count;
         }
         if (current > count) {
         current = 0;
         }
         */
        //end block
        owlThumbGallery
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
        var onscreen = owlThumbGallery.find('.owl-item.active').length - 1;
        var start = owlThumbGallery.find('.owl-item.active').first().index();
        var end = owlThumbGallery.find('.owl-item.active').last().index();
        if (current > end) {
            owlThumbGallery.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            owlThumbGallery.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }
    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            owlGallery.data('owl.carousel').to(number, 100, true);
        }
    }
    owlThumbGallery.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        owlGallery.data('owl.carousel').to(number, 300, true);
    });
    var thumbCarousel = $(".owl-thumb-gallery-carousel-2");
    var customDots = $("#owl-thumb-gallery-custom-dots .owl-dot");
    thumbCarousel.owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        items: 1,
        //singleItem: true,
        startPosition: 1,
        touchDrag: false,
        mouseDrag: false,
        dots: true,
        dotsContainer: "#owl-thumb-gallery-custom-dots",
    });
    var facilitiesOwlGalleryCarousel = $(".facilities-owl-gallery-carousel");
    facilitiesOwlGalleryCarousel.owlCarousel()
            .on('translate.owl.carousel', function () {
                //alert('1');
                // $('.facilities-carousel').carousel();
            });
    /* custom bullets */
    $(customDots).click(function () {
        alert("1");
        thumbCarousel.trigger("to.owl.carousel", [$(this).index(), 300]);
    });
    /*
     $('#users-carousel,#highlights-carousel').owlCarousel({
     loop: true,
     margin: 30,
     nav: false,
     responsive: {
     0: {
     items: 1,
     mouseDrag: true,
     },
     480: {
     items: 2,
     mouseDrag: true,
     },
     768: {
     items: 3,
     mouseDrag: true,
     },
     900: {
     items: 4,
     mouseDrag: true,
     }
     }
     });
     var setGoalCarousel = $('#set-goal-carousel');
     setGoalCarousel.owlCarousel({
     //callbacks: true,
     autoplay: true,
     dots: true,
     nav: false,
     autoplayTimeout: 4000,
     autoplayHoverPause: false,
     center: true,
     //startPosition: 3,
     loop: true,
     margin: 0,
     responsive: {
     320: {
     items: 1
     },
     480: {
     items: 3
     }
     }
     });
     setGoalCarousel.on('mousewheel', '.owl-stage', function (e) {
     if (e.deltaY > 0) {
     $(this).trigger('next.owl');
     } else {
     $(this).trigger('prev.owl');
     }
     e.preventDefault();
     });
     if ($(window).width() > 480) {
     //should be after start of owl carousel*
     $(setGoalCarousel).find(".active.center").addClass('zoom');
     setGoalCarousel.on('translated.owl.carousel', function (event) {
     //reset transform for all item
     $(this).find(".owl-item").removeClass('zoom');
     //add transform for 2nd active slide
     $(this).find(".active.center").addClass('zoom');
     });
     }*/
    /*owl carousel enable mousewheel*/
    /*features carousel*/
    /*
     var featuresCarousel = $('#app-features-carousel');
     featuresCarousel.owlCarousel({
     loop: true,
     margin: 0,
     nav: false,
     dots: true,
     responsive: {
     0: {
     items: 1,
     },
     768: {
     items: 3
     }
     },
     autoplay: true,
     autoplayTimeout: 3000,
     autoplayHoverPause: false,
     smartSpeed: 1000,
     });
     featuresCarousel.on('mousewheel', '.owl-stage', function (e) {
     if (e.deltaY > 0) {
     $(this).trigger('next.owl');
     } else {
     $(this).trigger('prev.owl');
     }
     e.preventDefault();
     });
     */
    /* copy loaded thumbnails into carousel */
    /* var owlExample = $("#owl-example");
     $(owlExample).owlCarousel({

     items: 1,
     singleItem: true


     });*/

    /* diversity page carousel custom navigations */

    $('#team-thumb-carousel').on('click', '.item', function () {
        var $this = $(this);
        var slideNum = $(this).data('slide');
        $('#banner-carousel').trigger('to.owl.carousel', slideNum);
    });
    $('#team-thumb-carousel').on('click', '.owl-next', function () {
        $('#banner-carousel').trigger('next.owl.carousel');
    });
    $('#team-thumb-carousel').on('click', '.owl-prev', function () {
        $('#banner-carousel').trigger('prev.owl.carousel');
    });

	$("#facilities-thumb-carousel .owl-item:nth-child(2)").trigger("click");
	$("#facilities-thumb-carousel .owl-item:nth-child(1)").trigger("click");

});
