// const current = document.querySelector('.current');
// const total = document.querySelector('.total');

// const swiper = new Swiper('.swiper', {
// 	direction: 'horizontal',
// 	loop: true,

// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// });

// const totalSlides = swiper.slides.length;
// total.textContent = totalSlides < 10 ? '0' + totalSlides : totalSlides;

// document.querySelector('.custom-prev-btn').addEventListener('click', () => {
// 	swiper.slidePrev();
// });

// document.querySelector('.custom-next-btn').addEventListener('click', () => {
// 	swiper.slideNext();
// });

// swiper.on('slideChange', () => {
// 	let realIndex = swiper.realIndex + 1;
// 	current.textContent = (realIndex < 10 ? '0' + realIndex : realIndex);
// });