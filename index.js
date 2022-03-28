class Fly {
  move(ref){
    ref.style.backgroundColor = 'red'
    ref.style.color = 'black'
    ref.innerText = 'I am flying'
    ref.style.transition =  '1s'
    ref.style.transitionProperty = 'left, top'
    ref.style.opacity = '1'
  }
}
class Walking {
  move(ref){
    ref.style.backgroundColor = 'yellow'
    ref.style.color = 'black'
    ref.innerText = 'I am walking'
    ref.style.transition =  '6s'
    ref.style.transitionProperty = 'left, top'
    ref.style.opacity = '1'
  }
}
class Swimming {
  move(ref){
    ref.style.backgroundColor = 'lightblue'
    ref.style.color = 'black'
    ref.innerText = 'I am swimming'
    ref.style.opacity = '1'
    ref.style.transition =  '3s'
    ref.style.transitionProperty = 'left, top'
  }
}
class Teleport {
  move(ref){
    ref.style.backgroundColor = 'black'
    ref.style.color = 'white'
    ref.innerText = 'I am teleporting'
    ref.style.transition =  '0s'
    ref.style.opacity = '1'
    ref.style.transitionProperty = 'left, top'
  }
}
class Magitian {
  move(ref){
    ref.style.backgroundColor = 'darkblue'
    ref.style.color = 'white'
    ref.innerText = 'I am magitian'
    ref.style.transition = '2s'
    ref.style.opacity = '0.5'
    ref.style.transitionProperty = 'opacity, backgroundColor, color'
    ref.style.borderRadius = '50%'
  }
}

class Vehicle {

  constructor() {
    this.moveBehaviour = null
  }

  move(ref) {
    this.moveBehaviour.move(ref) 

    ref.style.setProperty('left', this.x + 'px')
    ref.style.setProperty('top', this.y + 'px')
  }

  updatePos(x,y, ref){
    this.x = x
    this.y = y
    this.move(ref)
  }
}

class OVNI extends Vehicle {
  constructor() {
    super()
    this.backgroundColor = "black"
    this.textColor = "white"
    this.x = 0
    this.y = 0
    
    this.transitionTime = '0'
    this.backgroundColor = 'lightgrey'
    this.textColor = 'black'
    this.text = 'off'
  }

}

const vehicle = document.getElementById('vehicle')

const vehicleObject = new OVNI(vehicle)
print(vehicle, vehicleObject)

document.onkeydown = (e) => {

  if(e.key== '1'){
    vehicleObject.moveBehaviour = new Walking()
    vehicleObject.move(vehicle)
  }
  else if(e.key == '2'){
    vehicleObject.moveBehaviour = new Fly()
    vehicleObject.move(vehicle)
  }
  else if(e.key == '3'){
    vehicleObject.moveBehaviour = new Swimming()
    vehicleObject.move(vehicle)
  }
  else if(e.key == '4'){
    vehicleObject.moveBehaviour = new Teleport()
    vehicleObject.move(vehicle)
  }
  else if(e.key == '5'){
    vehicleObject.moveBehaviour = new Magitian()
    vehicleObject.move(vehicle)
  }
}

document.onmousedown = (e) => {
  const x = e.x
  const y = e.y

  if(!vehicleObject.moveBehaviour) return
  
  vehicleObject.updatePos(x,y, vehicle)
}




