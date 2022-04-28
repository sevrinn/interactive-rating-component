const submitRating = () => {
	console.log('submitting your rating...')
}

const star1 = document.getElementById('1')
const star2 = document.getElementById('2')
const star3 = document.getElementById('3')
const star4 = document.getElementById('4')
const star5 = document.getElementById('5')

const rating = 0

const submitBtn = document.querySelector('.submit-btn')

const orangeBackground = 'background-color: hsl(25, 97%, 53%)'

star1.addEventListener('click', (e) => {
	const el = e.target
	el.setAttribute('style', orangeBackground)
	star2.removeAttribute('style', orangeBackground)
	star3.removeAttribute('style', orangeBackground)
	star4.removeAttribute('style', orangeBackground)
	star5.removeAttribute('style', orangeBackground)
	rating = 1
})

star2.addEventListener('click', (e) => {
	const el = e.target
	el.setAttribute('style', orangeBackground)
	star1.setAttribute('style', orangeBackground)
	star3.removeAttribute('style', orangeBackground)
	star4.removeAttribute('style', orangeBackground)
	star5.removeAttribute('style', orangeBackground)
	rating = 2
})

star3.addEventListener('click', (e) => {
	const el = e.target
	el.setAttribute('style', orangeBackground)
	star1.setAttribute('style', orangeBackground)
	star2.setAttribute('style', orangeBackground)
	star4.removeAttribute('style', orangeBackground)
	star5.removeAttribute('style', orangeBackground)
	rating = 3
})

star4.addEventListener('click', (e) => {
	const el = e.target
	el.setAttribute('style', orangeBackground)
	star1.setAttribute('style', orangeBackground)
	star2.setAttribute('style', orangeBackground)
	star3.setAttribute('style', orangeBackground)
	star5.removeAttribute('style', orangeBackground)
	rating = 4
})

star5.addEventListener('click', (e) => {
	const el = e.target
	el.setAttribute('style', orangeBackground)
	star1.setAttribute('style', orangeBackground)
	star2.setAttribute('style', orangeBackground)
	star3.setAttribute('style', orangeBackground)
	star4.setAttribute('style', orangeBackground)
	rating = 5
})

submitBtn.addEventListener('click', (e) => {
	console.log('submitting your rating...')
})
