
const ratingForm = document.querySelector("#rating-form")

// ratings 1 - 5
// const star1 = document.getElementById('1')
// const star2 = document.getElementById('2')
// const star3 = document.getElementById('3')
// const star4 = document.getElementById('4')
// const star5 = document.getElementById('5')

const ratingBtns = document.querySelectorAll('.rating-btn')



const thankyou = document.querySelector("#rating-thankyou")

// user rating feedback
const userRating = document.querySelector("#user-rating")

//rating is initially set to zero
let rating = 0

const submitBtn = document.querySelector('.submit-btn')

/** 
 * I know there is a better way to do this because i'm seeing a lot of replicated code.
 * 
 */
// star1.addEventListener('click', (e) => {
// 	const el = e.target
// 	el.classList.add('selected')
// 	el.classList.remove('rating-btn:hover')
// 	star2.classList.remove('selected')
// 	star3.classList.remove('selected')
// 	star4.classList.remove('selected')
// 	star5.classList.remove('selected')
// 	rating = 1
// })

// star2.addEventListener('click', (e) => {
// 	const el = e.target
// 	el.classList.add('selected')
// 	star1.classList.add('selected')
// 	star3.classList.remove('selected')
// 	star4.classList.remove('selected')
// 	star5.classList.remove('selected')
// 	rating = 2
// })

// star3.addEventListener('click', (e) => {
// 	const el = e.target
// 	el.classList.add('selected')
// 	star1.classList.add('selected')
// 	star2.classList.add('selected')
// 	star4.classList.remove('selected')
// 	star5.classList.remove('selected')
// 	rating = 3
// })

// star4.addEventListener('click', (e) => {
// 	const el = e.target
// 	el.classList.add('selected')
// 	star1.classList.add('selected')
// 	star2.classList.add('selected')
// 	star3.classList.add('selected')
// 	star5.classList.remove('selected')
// 	rating = 4
// })

// star5.addEventListener('click', (e) => {
// 	const el = e.target
// 	el.classList.add('selected')
// 	star1.classList.add('selected')
// 	star2.classList.add('selected')
// 	star3.classList.add('selected')
// 	star4.classList.add('selected')
// 	rating = 5
// })

ratingBtns.forEach((item, idx) => {
	item.addEventListener('click', (e) => {
		//grabs clicked btn and adds .selected styles
		const el = e.target
		el.classList.add('selected')
		
		//turns nodeList into array.
		const btnArr = Array.from(ratingBtns)
		
		//updates rating
		rating = el.id
		// goes thru array of btns adding and removing classnames as necessary
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
