declare class AudioLoopConfigComp {
    constructor(gameObject: any);
    static getComponent(gameObject: any): AudioLoopConfigComp;
    private gameObject;
    loop: boolean;
}

declare class AudioPauseAllActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    execute(...args: any[]): void;
}

declare class AudioVolumeConfigComp {
    constructor(gameObject: any);
    static getComponent(gameObject: any): AudioVolumeConfigComp;
    private gameObject;
    volume: number;
}

declare class PlaySoundActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    audioKey: string;
    execute(...args: any[]): void;
}

declare class ResumeAllAudioActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    execute(...args: any[]): void;
}

declare class StopAllSoundsActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    execute(...args: any[]): void;
}

declare class StopSoundActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    audioKey: string;
    execute(...args: any[]): void;
}


