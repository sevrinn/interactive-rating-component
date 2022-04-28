

const star1 = document.getElementById('1')
const star2 = document.getElementById('2')
const star3 = document.getElementById('3')
const star4 = document.getElementById('4')
const star5 = document.getElementById('5')

let rating = 0

const submitBtn = document.querySelector('.submit-btn')

const orangeBackground = 'background-color: hsl(25, 97%, 53%)'

star1.addEventListener('click', (e) => {
	const el = e.target
	el.classList.add('selected')
	star2.classList.remove('selected')
	star3.classList.remove('selected')
	star4.classList.remove('selected')
	star5.classList.remove('selected')
	rating = 1
})

star2.addEventListener('click', (e) => {
	const el = e.target
	el.classList.add('selected')
	star1.classList.add('selected')
	star3.classList.remove('selected')
	star4.classList.remove('selected')
	star5.classList.remove('selected')
	rating = 2
})

star3.addEventListener('click', (e) => {
	const el = e.target
	el.classList.add('selected')
	star1.classList.add('selected')
	star2.classList.add('selected')
	star4.classList.remove('selected')
	star5.classList.remove('selected')
	rating = 3
})

star4.addEventListener('click', (e) => {
	const el = e.target
	el.classList.add('selected')
	star1.classList.add('selected')
	star2.classList.add('selected')
	star3.classList.add('selected')
	star5.classList.remove('selected')
	rating = 4
})

star5.addEventListener('click', (e) => {
	const el = e.target
	el.classList.add('selected')
	star1.classList.add('selected')
	star2.classList.add('selected')
	star3.classList.add('selected')
	star4.classList.add('selected')
	rating = 5
})

submitBtn.addEventListener('click', (e) => {
	console.log('submitting your rating...')
	console.log(rating)
})
