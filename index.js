const vehicle = document.getElementById('vehicle')
let positions = vehicle.getBoundingClientRect()

const { x,y } = positions
console.log('current positions', x, y)
let _x = x, _y = y;
let acceleration = 4 // walking
// let acceleration = 2 // flying

// Walking true by default
let isWalking = false
let isFlying = false
let isSwimming = false
let modeName = ''

document.onkeydown = (e) => {
  if(e.key== '1'){
    // flying
    isFlying = true
    isWalking = false
    isSwimming = false
    modeName = 'flying'

    // move stuff
    vehicle.style.transition = '1s' // takes 6 seconds to arrive
  }
  else if(e.key == '2'){
    isWalking = true
    isFlying = false
    isSwimming = false
    modeName = 'walking'


    // move stuff
    vehicle.style.transition = '6s' // takes 2 seconds to arrive
  }
  else if(e.key == '3'){
    isWalking = false
    isFlying = false
    isSwimming = true
    modeName = 'swimming'

    // move stuff
    vehicle.style.transition = '3s' // takes 3 seconds to arrive
    vehicle.style.backgroundColor = 'blue'
    vehicle.style.color = 'white'
  }

  vehicle.innerHTML = `I am a vehicle ${modeName}`
}

document.onmousedown = (e) => {
  const x = e.x
  const y = e.y

  if(!isWalking && !isFlying && !isSwimming) return

  vehicle.style.setProperty('left', x + 'px')
  vehicle.style.setProperty('top', y + 'px')
}



