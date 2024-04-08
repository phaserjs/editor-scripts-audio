import { ScriptNode } from "@phaserjs/editor-scripts-core";
import Phaser from "phaser";
export default class StopSoundActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    audioKey: string;
    execute(...args: any[]): void;
}
