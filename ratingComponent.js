
const ratingForm = document.querySelector("#rating-form")

const ratingBtns = document.querySelectorAll('.rating-btn')

const thankyou = document.querySelector("#rating-thankyou")

// user rating feedback
const userRating = document.querySelector("#user-rating")

//rating is initially set to zero
let rating = 0

const submitBtn = document.querySelector('.submit-btn')


ratingBtns.forEach((item, idx) => {
	item.addEventListener('click', (e) => {
		//grabs clicked btn and adds .selected styles
		const el = e.target
		el.classList.add('selected')
		
		//turns nodeList into array.
		const btnArr = Array.from(ratingBtns)
		
		//updates rating
		rating = el.id
		// goes thru array of btns adding selected class to btn if id is LT id of current element or removing it
		// if it id is GT current element id. 
		btnArr.forEach((btn) => {
			
			if (btn.id > el.id) {
				btn.classList.remove('selected')
				
			} else {
				btn.classList.add('selected')
				
			}
		})
	})

})

submitBtn.addEventListener('click', (e) => {

	e.preventDefault();
	if (rating === 0) {
		alert("Please rate to continue")
	} else {
		console.log('submitting your rating...')

		ratingForm.classList.add('hide')
		thankyou.classList.remove('hide')

		console.log("your rating:", rating)
		userRating.innerHTML = `You selected ${rating} out of 5`
	}
	
})
