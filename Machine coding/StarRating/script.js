var StarRatingApp = (function () {
    var currentRating;
    const stars = document.querySelectorAll(".star");
    const starContainer = document.querySelector(".star-container");
    const count = document.querySelector("#count");
    const emojis=document.querySelectorAll(".emoji");
    const slider=document.querySelector(".silder");
    
    function init() {
        attachEventListner();
    }

    function attachEventListner() {
        starContainer.addEventListener("click", (e) => {
            const rating = extractStarRating(e);
            if(!rating){
                return;
            }
            fillStars(rating);
            currentRating = rating;
            renderValue(rating);
            renderSlider(rating);
            displayEmoji(rating);
        });
        starContainer.addEventListener("mouseover", (e) => {
            
            const rating = extractStarRating(e);
            resetStars();
            if(!rating){
                return;
            }
            fillStars(rating);
        });
        starContainer.addEventListener("mouseleave", (e) => {
            const rating=extractStarRating(e);
            resetStars();
            if(!rating){
                fillStars(currentRating);
            }
        
            fillStars(rating);
        });
        slider.addEventListener("input",(e)=>{
            // console.log(e.target.value);
            let rating=e.target.value;
            if(rating==0){
                rating++;
            }
            resetStars();
            fillStars(rating);
            renderValue(rating);
            displayEmoji(rating);
        });
    }
    function renderSlider(rating){
        slider.value=rating;
    }
    function displayEmoji(rating){
        for(var i=0;i<emojis.length;i++){
            emojis[i].style.display="none";
        }
        console.log(emojis[rating-1]);
        emojis[rating-1].style.display="block";
    }
    function extractStarRating(e) {
        let elem = e.target;
        let isStarClicked = elem.hasAttribute("rating");
        if (!isStarClicked) {
            return;
        }
    
        return elem.getAttribute("rating");
    }
    function renderValue(rating) {
        count.innerHTML = rating;
    }
    function fillStars(rating) {
        for (var i = 0; i < rating; i++) {
            stars[i].classList.add("yellow");
        }
    }
    function resetStars() {
        for (var i = 0; i < stars.length; i++) {
            stars[i].classList.remove("yellow");
        }
    }


    return {
        initialize: init
    }

})();

StarRatingApp.initialize();