const btnPlus = document.querySelectorAll('#plus')
const btnMinus = document.querySelectorAll('#minus')

const label = document.querySelectorAll('.faq__answer')



btnPlus.forEach( (btn) => {
  btn.addEventListener('click', () => {
    console.log('Im cicked')
    btn.classList.toggle('hidden')
    
    
    
    const closestContainer = btn.closest('.faq')
    
    const btnMinusInSameCont = closestContainer.querySelector('#minus')
    
   // const closestToAnswer = btn.closest('.faq-answer')
    const closestAnswer = closestContainer.querySelector('.faq__answer')
  
  
    btnMinusInSameCont.classList.toggle('hidden')
    closestAnswer.classList.toggle('hidden')
  
  })
})

btnMinus.forEach (btn => {
  btn.addEventListener('click', () => {
    console.log('Im cicked')
btn.classList.toggle('hidden')



const closestContainer = btn.closest('.faq')

const btnPlusInSameCont = closestContainer.querySelector('#plus')

// const closestToAnswer = btn.closest('.faq-answer')
const closestAnswer = closestContainer.querySelector('.faq__answer')


btnPlusInSameCont.classList.toggle('hidden')
closestAnswer.classList.toggle('hidden')
  })
})