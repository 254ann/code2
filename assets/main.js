  const button5=document.querySelector("#plusFive") 
  const indicator=document.querySelector("#number-indicator")
  const show=document.querySelector("#display-heading")

  button5.addEventListener('click', () =>{
    show.textContent="added 5"
    indicator.textContent=(parseInt(indicator.textContent) +5).toString()
  })