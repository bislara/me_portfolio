$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	autoplay: 4000,
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		900: {
			items: 2,
			nav: false,
		},
		1300: {
			items: 3,
            nav: false,
            
		},
	},
});