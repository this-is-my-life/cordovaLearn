window.addEventListener('load', () => {
  anime({ targets: ['.img-thumb'], opacity: 1, delay: 500 })
  anime({  easing: 'easeOutElastic', targets: ['.text'], rotate: '360deg', delay: anime.stagger(50) })
})