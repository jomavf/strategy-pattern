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

document.onkeydown = (e) => {
  if(e.key== '1'){
    // flying
    isFlying = true
    isWalking = false

    vehicle.style.transition = '6s' // takes 6 seconds to arrive
  }
  else if(e.key == '2'){
    // walking
    isWalking = true
    isFlying = false

    vehicle.style.transition = '1s' // takes 2 seconds to arrive
  }

  vehicle.innerHTML = `I am a vehicle ${!isFlying ? 'flying' : 'walking' }`
}

document.onmousedown = (e) => {
  const x = e.x
  const y = e.y

  if(!isWalking && !isFlying) return

  vehicle.style.setProperty('left', x + 'px')
  vehicle.style.setProperty('top', y + 'px')
}



