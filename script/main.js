// define HTML elements as variables
const div1=document.getElementById("nav-mobile-button-div1");
const div2=document.getElementById("nav-mobile-button-div2");
const div3=document.getElementById("nav-mobile-button-div3");
const div4=document.getElementById("nav-mobile-button-div4");
const menu=document.getElementById("nav-mobile-list");

// change the style of the menu button by adding and removing class
function toggleButton() {
	if(div1.classList.contains("nav-mobile-button-1and4-activated")===false) {
		div1.classList.add("nav-mobile-button-1and4-activated");
		div2.classList.add("nav-mobile-button-2-activated");
		div3.classList.add("nav-mobile-button-3-activated");
		div4.classList.add("nav-mobile-button-1and4-activated");
		div1.classList.remove("nav-mobile-button-1and4-deactivated");
		div2.classList.remove("nav-mobile-button-2-deactivated");
		div3.classList.remove("nav-mobile-button-3-deactivated");
		div4.classList.remove("nav-mobile-button-1and4-deactivated");
	} else {
		div1.classList.add("nav-mobile-button-1and4-deactivated");
		div2.classList.add("nav-mobile-button-2-deactivated");
		div3.classList.add("nav-mobile-button-3-deactivated");
		div4.classList.add("nav-mobile-button-1and4-deactivated");
		div1.classList.remove("nav-mobile-button-1and4-activated");
		div2.classList.remove("nav-mobile-button-2-activated");
		div3.classList.remove("nav-mobile-button-3-activated");
		div4.classList.remove("nav-mobile-button-1and4-activated");

	}
}

// show/hide drawer menu
function toggleMenu() {
	if(menu.classList.contains("nav-mobile-list-hidden")) {
		menu.classList.add("nav-mobile-list-shown");
		menu.classList.remove("nav-mobile-list-hidden");
	} else {
		menu.classList.add("nav-mobile-list-hidden");
		menu.classList.remove("nav-mobile-list-shown");
	}
}

// combine both functions above
function toggleButtonAndMenu() {
	toggleButton();
	toggleMenu();
}

// in blog.html, when user type email and click button, system will say thank you
function thanksForSubscribe() {
	let email=document.getElementById("blog-subscribe-email-input").value;
	alert(`${email} added to mailing list. Thanks for subscribing!`)
}
// Slideshow Carousel (automatic)

// Catering Slideshow Carousel (automatic)
let slideCount=0
let intervalTime=3500
showSlides()

function showSlides() {
	let i;
	let slides=document.getElementsByClassName("mySlide")
	for(i=0; i<slides.length; i++) {
		slides[i].style.display="none";
	}

	slideCount++;
	if(slideCount>slides.length) { slideCount=1 }
	slides[slideCount-1].style.display="inherit";
	setTimeout(showSlides,intervalTime)
}

// Dine in review carousel
let reviewCount=0
showReviews()

function showReviews() {
	let i;
	let reviews=document.getElementsByClassName("myReview")
	for(i=0; i<reviews.length; i++) {
		reviews[i].style.display="none";
	}

	reviewCount++;
	if(reviewCount>reviews.length) { reviewCount=1 }
	reviews[reviewCount-1].style.display="inherit";
	setTimeout(showReviews,intervalTime)
}

// Confirmation popup

function SubmitBtn() {
	document.getElementById("confirmation").style.display="none";
	document.getElementById("success").style.display="block";
}