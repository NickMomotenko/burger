const openButtons = document.querySelectorAll(".button_together");
const popupRewies = document.querySelector(".popup");
const crossPopup = document.querySelector(".popup__cross");


function openRewies() {
	for(var button of openButtons){
		button.addEventListener("click", function(event){
			event.preventDefault();
			popupRewies.classList.remove("non-open");
		});
	}
};

crossPopup.addEventListener("click", function(e){
	e.preventDefault();
	popupRewies.classList.add("non-open");
})

openRewies();