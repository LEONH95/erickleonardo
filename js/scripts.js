var nav = document.querySelector('nav');
var menu = document.querySelector('.menu-btn');
var navbar = document.querySelector('.navbar-nav');
var navlink = document.getElementsByClassName('nav-link');

document.addEventListener('DOMContentLoaded', () => {
	document.addEventListener('scroll', onScroll);
});

window.addEventListener('scroll', hideOnScroll);

function onScroll() {
	var scrollPos = document.scrollingElement.scrollTop;
	//utilizar el operador spread que es lo mismo que Array.from
	var elements = [...navlink];

	elements.forEach((element) => {
		var currLink = element;
		var refElement = document.querySelector(currLink.getAttribute('href'));

		if (
			refElement.offsetTop.toFixed() <= scrollPos + 2 &&
			refElement.offsetTop.toFixed() + refElement.offsetHeight > scrollPos
		) {
			elements.forEach((element) => {
				element.classList.remove('active');
			});
			currLink.classList.add('active');
		} else {
			currLink.classList.remove('active');
		}
	});
}
/*
$(document).ready(function () {
	$(document).on('scroll', onScroll);

	function onScroll(event) {
		var scrollPos = $(document).scrollTop();
		$('.nav-link').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr('href'));
			if (
				refElement.position().top.toFixed() <= scrollPos + 2 &&
				refElement.position().top.toFixed() + refElement.height() > scrollPos
			) {
				$('.nav-link').removeClass('active');
				currLink.addClass('active');
			} else {
				currLink.removeClass('active');
			}
		});
	}
});

*/

function hideOnScroll() {
	nav.classList.toggle('scrolled', document.scrollingElement.scrollTop < 200);

	if (menu.classList.contains('open')) {
		menu.classList.toggle('open');
		navbar.classList.toggle('open');
	}
}

document.querySelector('.menu-btn').addEventListener('click', () => {
	menu.classList.toggle('open');
	navbar.classList.toggle('open');
});

/*
$(window).scroll(() => {
	$('nav').toggleClass('scrolled', $(this).scrollTop() < 200);

	if ($('.menu-btn').hasClass('open')) {
		$('.menu-btn').toggleClass('open');
		$('.navbar-nav').toggleClass('open');
	}
});



$('.menu-btn').click(() => {
	$('.menu-btn').toggleClass('open');
	$('.navbar-nav').toggleClass('open');
});

*/
