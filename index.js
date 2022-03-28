class Fly {
  move(){
    return {
      transitionTime: 1,
      backgroundColor: 'red',
      textColor: 'black',
      text: 'I am flying'
    }
  }
}
class Walking {
  move(){
    return {
      transitionTime: 6,
      backgroundColor: 'yellow',
      textColor: 'black',
      text: 'I am walking'
    }
  }
}
class Swimming {
  move(){
    return {
        transitionTime: 3,
        backgroundColor: 'lightblue',
        textColor: 'black',
        text: 'I am swimming'
    }
  }
}

class Vehicle {

  constructor() {
    this.moveBehaviour = null
  }

  move() {
    // const modes = {
    //   flying: {
    //     transitionTime: 1,
    //     backgroundColor: 'red',
    //     textColor: 'black',
    //     text: 'I am flying'
    //   },
    //   walking: {
    //     transitionTime: 6,
    //     backgroundColor: 'yellow',
    //     textColor: 'black',
    //     text: 'I am walking'
    //   },
    //   swimming: {
    //     transitionTime: 3,
    //     backgroundColor: 'lightblue',
    //     textColor: 'black',
    //     text: 'I am swimming'
    //   },
    // } 
    const selectedMode = this.moveBehaviour.move() 
    this.transitionTime = selectedMode.transitionTime
    this.backgroundColor = selectedMode.backgroundColor
    this.textColor = selectedMode.textColor
    this.text = selectedMode.text
  }

  updatePos(x,y){
    this.x = x
    this.y = y
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
  }
  else if(e.key == '2'){
    vehicleObject.moveBehaviour = new Fly()
  }
  else if(e.key == '3'){
    vehicleObject.moveBehaviour = new Swimming()
  }
  vehicleObject.move()

  print(vehicle, vehicleObject)
}


function print(vehicleRef, vehicleObject){
  const { textColor, text, backgroundColor, transitionTime } = vehicleObject
  
  vehicleRef.style.backgroundColor = backgroundColor
  vehicleRef.style.color = textColor
  vehicleRef.innerText = text
  vehicleRef.style.transition = transitionTime + 's'
  vehicleRef.style.transitionProperty = 'left, top'
} 

document.onmousedown = (e) => {
  const x = e.x
  const y = e.y

  if(vehicleObject.moveBehaviour != null){
    vehicleObject.updatePos(x,y)
  }
  const { x: vehicleX, y: vehicleY } = vehicleObject

  vehicle.style.setProperty('left', vehicleX + 'px')
  vehicle.style.setProperty('top', vehicleY + 'px')
}




