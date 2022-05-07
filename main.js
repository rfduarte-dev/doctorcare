window.addEventListener('scroll', onScroll)
onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  //activateMenuAtCurrentSection(comments)
  activateMenuAtCurrentSection(contact)
}

function showNavOnScroll() {
  var nav = document.querySelector('#navigation')
  if (scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}

function activateMenuAtCurrentSection(section) {
  //target linha imaginaria
  const targetLing = scrollY + innerHeight / 2

  //top da section
  const sectionTop = section.offsetTop
  //altura da section
  const sectionHeight = section.offsetHeight

  //verificando se o topo da section passou do target
  const sectioTopReachOrPassedTargetLine = targetLing >= sectionTop

  //console.log('o topo da section passou?' + sectioTopReachOrPassedTargetLine)

  //verificando final da section
  const sectionEndAt = sectionTop + sectionHeight

  //verificando se o final da section passou do target
  const sectioEndPassedTargetLine = sectionEndAt <= targetLing
  //console.log('a section passou da linha?' + sectioEndPassedTargetLine)

  //limites da section
  const sectionBoundaries =
    sectioTopReachOrPassedTargetLine && !sectioEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
    //console.log('estou na section HOME')
  }
}

function showBackToTopButtonOnScroll() {
  var backToTop = document.querySelector('#backToTopButton')
  if (scrollY > 600) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

/* Scroll Reveal */
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  delay: 50,
  interval: 3000,
  reset: true,
  viewOffset: {
    bottom: 100
  }
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about header,
#about .content p,
#about .content img`)

function sayMyName(name) {
  console.log(name)
}
