class OVNI {
  constructor() {
    this.backgroundColor = "black"
    this.textColor = "white"
    this.x = 0
    this.y = 0
    
    this.transitionTime = '0'
    this.backgroundColor = 'lightgrey'
    this.textColor = 'black'
    this.text = 'off'
  }

  move(mode) {
    const modes = {
      flying: {
        transitionTime: 1,
        backgroundColor: 'red',
        textColor: 'black',
        text: 'I am flying'
      },
      walking: {
        transitionTime: 6,
        backgroundColor: 'yellow',
        textColor: 'black',
        text: 'I am walking'
      },
      swimming: {
        transitionTime: 3,
        backgroundColor: 'lightblue',
        textColor: 'black',
        text: 'I am swimming'
      },
    } 
    const selectedMode = modes[mode]
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

const vehicle = document.getElementById('vehicle')

const vehicleObject = new OVNI(vehicle)
print(vehicle, vehicleObject)

document.onkeydown = (e) => {

  if(e.key== '1'){
    // flying
    vehicleObject.move('walking')
  }
  else if(e.key == '2'){
    vehicleObject.move('flying')
  }
  else if(e.key == '3'){
    vehicleObject.move('swimming')
  }

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

  vehicleObject.updatePos(x,y)
  const { x: vehicleX, y: vehicleY } = vehicleObject

  vehicle.style.setProperty('left', vehicleX + 'px')
  vehicle.style.setProperty('top', vehicleY + 'px')
}




