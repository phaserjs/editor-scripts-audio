
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class AudioVolumeConfigComp {

	constructor(gameObject: any) {
		this.gameObject = gameObject;
		(gameObject as any)["__AudioVolumeConfigComp"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: any): AudioVolumeConfigComp {
		return (gameObject as any)["__AudioVolumeConfigComp"];
	}

	private gameObject: any;
	public volume: number = 1;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
