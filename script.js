const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

const blurring = () => {
  load++

  if (load > 99) {
    clearInterval(int)
    loadText.style.display = 'none'
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = 1 - load / 100

  bg.style.filter = `blur(${30 * (1 - load / 100)}px)`
}

let int = setInterval(blurring, 30)
