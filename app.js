const start = document.querySelector('#start')
const pause = document.querySelector('#pause')
const slider = document.querySelector('.slider')
const video = document.querySelector('#video')

pause.addEventListener('click', () => {
  video.pause()
  slider.classList.add('slide-right')
})

start.addEventListener('click', () => {
  video.play()
  slider.classList.remove('slide-right')
})
