class Robot {
	constructor(){
		this.coordinates = [0,0]
		this.bearing = 'north'
	}
	setCoordinates (x, y) {
		this.coordinates = [x, y]
	}
	setBearing(bearing){
		const allowedBearings = ['north', 'south', 'east', 'west']
		if (allowedBearings.includes(bearing)){
			this.bearing = bearing
		} else {
			throw `Invalid Robot Bearing, please pick from: ${allowedBearings}`
		}
	}
	place(args){
		if(args.x !== undefined && args.y !== undefined){
			this.setCoordinates(args.x, args.y)
		} else {
			throw 'x or y value undefined'
		}
		if (args.direction){
			this.setBearing(args.direction)
		} else {
			throw 'direction not defined'
		}
	}
	turnRight(){
		switch (this.bearing){
			case 'north':
				this.setBearing('east')
				break
			case 'east':
				this.setBearing('south')
				break
			case 'south':
				this.setBearing('west')
				break
			case 'west':
				this.setBearing('north')
				break
		}
	}
	turnLeft() {
		switch (this.bearing) {
			case 'north':
				this.setBearing('west')
				break
			case 'west':
				this.setBearing('south')
				break
			case 'south':
				this.setBearing('east')
				break
			case 'east':
				this.setBearing('north')
				break
		}
	}
	advance() {
		switch (this.bearing) {
			case 'north':
				this.setCoordinates(this.coordinates[0], ++this.coordinates[1])
				break
			case 'west':
				this.setCoordinates(--this.coordinates[0], this.coordinates[1])
				break
			case 'south':
				this.setCoordinates(this.coordinates[0], --this.coordinates[1])
				break
			case 'east':
				this.setCoordinates(++this.coordinates[0], this.coordinates[1])
				break
		}
	}
	translateInstructions(instructions){
		if (instructions.length > 1){
			for (const instruction of instructions){
				this.translateInstructions(instruction)
			}
		} else {
			switch (instructions) {
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
