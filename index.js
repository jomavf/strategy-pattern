const vehicle = document.getElementById('vehicle')
let positions = vehicle.getBoundingClientRect()

const { x,y } = positions
let _x = x, _y = y;

let mode = 'flying'
vehicle.innerHTML = `I am a vehicle ${mode}`

document.onkeydown = (e) => {
  
  if(e.key== 'ArrowUp'){
    _y-=1
  }
  else if(e.key == 'ArrowDown'){
    _y+=1
  }
  else if(e.key == 'ArrowLeft'){
    _x-=1
  }
  else if(e.key == 'ArrowRight'){
    _x+=1
  }
  
  vehicle.style.setProperty('left', _x + 'px')
  vehicle.style.setProperty('top', _y + 'px')
}



