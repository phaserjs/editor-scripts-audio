
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-core";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class StopSoundActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public audioKey: string = "";

	/* START-USER-CODE */

	execute(...args: any[]): void {

		this.scene.sound.stopByKey(this.audioKey);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
