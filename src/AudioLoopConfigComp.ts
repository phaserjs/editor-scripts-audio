
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class AudioLoopConfigComp {

	constructor(gameObject: any) {
		this.gameObject = gameObject;
		(gameObject as any)["__AudioLoopConfigComp"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: any): AudioLoopConfigComp {
		return (gameObject as any)["__AudioLoopConfigComp"];
	}

	private gameObject: any;
	public loop: boolean = true;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
