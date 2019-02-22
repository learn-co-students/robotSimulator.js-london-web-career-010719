class Robot {
	constructor(x=0, y=0, bearing="north") {
		this.coordinates = [x, y]
		this.bearing = bearing
	}

	setCoordinates(x, y) {
		this.coordinates = [x, y]
	}

	setBearing(bearing) {
		const directions = ["north", "south", "east", "west"]
		if (directions.includes(bearing)) {
			this.bearing = bearing
		} else {
			throw "Invalid Robot Bearing"
		}
	}
	
	place({ x: x, y: y, direction: bearing }) {
		this.setCoordinates(x, y)
		this.setBearing(bearing)
	}

	turnRight() {
		switch(this.bearing) {
			case 'north':
			return this.setBearing('east')
			case 'east':
			return this.setBearing('south')
			case 'south':
			return this.setBearing('west')
			case 'west':
			return this.setBearing('north')
		}
	}

	turnLeft() {
		switch(this.bearing) {
			case 'north':
			return this.setBearing('west')
			case 'east':
			return this.setBearing('north')
			case 'south':
			return this.setBearing('east')
			case 'west':
			return this.setBearing('south')
		}
	}

	advance() {
		switch(this.bearing) {
			case 'north':
			this.coordinates[1]++
			break
			case 'east':
			this.coordinates[0]++
			break
			case 'south':
			this.coordinates[1]--
			break
			case 'west':
			this.coordinates[0]--
			break
		}
	}

	translateInstructions(instruction) {
		for (let i = 0; i < instruction.length; i++) {
			switch(instruction.charAt(i)) {
				case 'L':
				this.turnLeft()
				break
				case 'R':
				this.turnRight()
				break
				case 'A':
				this.advance()
				break
			}
		}
	}

}
