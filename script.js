const btnPlus = document.querySelectorAll('#plus')


btnPlus.forEach( (btn) => {
  btn.addEventListener('click', () => {
    console.log('Im cicked')
  })
})