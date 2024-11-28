const timeLi = document.querySelector(".hero-clock-item")
const locationLi = document.querySelector(".hero-location-item")
const batteryLi = document.querySelector(".hero-battery-item")
const listUl = document.querySelector(".hero-list")
const exitBtn = document.querySelector(".exit")
const info = document.querySelector(".information")
const screenSize = document.querySelector(".hero-screen-size-item")
const footer = document.querySelector(".footer")

  footer.style.display = "none"

batteryLi.addEventListener("click", function(evt) {
    evt.preventDefault()
    
    window.navigator.getBattery().then((bat) => {
      let newBattery = (bat.level * 100).toFixed(2)
      info.textContent = `Battery status: ${newBattery}%`
      info.style.fontFamily = "Calibri"
    info.style.color = "blue"
    info.style.fontSize = "3.5rem"
   footer.style.display = "block"
    })
    
})   


timeLi.addEventListener("click", function(evt) {
    evt.preventDefault()

    info.textContent = `Current time: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    info.style.fontFamily = "Calibri"
    info.style.color = "blue"
    info.style.fontSize = "3.5rem"
    footer.style.display = "block"
})

screenSize.addEventListener("click", function(evt) {

  evt.preventDefault()
  
  let width = window.screen.width
  let height = window.screen.height

  info.textContent = `Width: ${width} / Height: ${height}`
  info.style.fontFamily = "Calibri"
    info.style.color = "blue"
    info.style.fontSize = "3.5rem"
    footer.style.display = "block"
})



locationLi.addEventListener("click", function(evt) {
  evt.preventDefault()
footer.style.display = "block"
  window.navigator.geolocation.watchPosition((position) => {
    console.log(position.coords);
  
  }, (error) => {
    console.error(error)
    
  })
})

exitBtn.addEventListener("click", function(evt) {

  footer.style.display = "none"

})

window.addEventListener("keydown", function(evt){
if(evt.key === "Escape"){
  footer.style.display = "none";
}
})

window.addEventListener("keydown", function(evt){
  if(evt.key === "Enter"){
      footer.style.display = "block"
  }
})
