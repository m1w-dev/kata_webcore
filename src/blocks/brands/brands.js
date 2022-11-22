const windowInnerWidth = window.innerWidth;
	console.log(windowInnerWidth);

if (windowInnerWidth < 560) {
	console.log(true);
	const swiper__brands = new Swiper('.swiper__brands', {
	  direction: 'horizontal',
	  loop: true,
	  pagination: {
	    el: '.swiper-pagination',
	  }
	});
}