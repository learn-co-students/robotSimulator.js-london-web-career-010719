class Robot {
	constructor(coordinates=[0,0], bearing='north') {
    this.coordinates = coordinates
    this.bearing = bearing
  }

  setCoordinates(x, y) {
    this.coordinates[0] = x
    this.coordinates[1] = y
  }

  setBearing(bearing) {

    if (["north", "south", "east", "west"].includes(bearing)){
        this.bearing = bearing
    } else {
      throw "Invalid Robot Bearing"
      }
    }

    place(place) {
      this.setCoordinates(place.x, place.y)
      this.setBearing(place.direction)
    }

    turnRight(){
      switch(this.bearing) {
      case "north":
        this.bearing = "east"
      break;
      case "east":
        this.bearing = "south"
      break;
      case "south":
        this.bearing = "west"
      break;
      case "west":
        this.bearing = "north"
      break;
      }
    }

    turnLeft(){
      switch(this.bearing) {
      case "north":
        this.bearing = "west"
      break;
      case "west":
        this.bearing = "south"
      break;
      case "south":
        this.bearing = "east"
      break;
      case "east":
        this.bearing = "north"
      break;
      }
    }

    advance() {
      switch(this.bearing) {
      case "north":
        this.coordinates[1]++
      break;
      case "west":
        this.coordinates[0]--
      break;
      case "south":
        this.coordinates[1]--
      break;
      case "east":
        this.coordinates[0]++
      break;
      }
    }

  translateInstructions(letter) {
    for (let i = 0; i < letter.length; i++) {
      switch(letter.charAt(i)) {
      case "L":
        this.turnLeft()
      break;
      case "R":
        this.turnRight()
      break;
      case "A":
        this.advance()
      break;
      }
    }
  }


}
