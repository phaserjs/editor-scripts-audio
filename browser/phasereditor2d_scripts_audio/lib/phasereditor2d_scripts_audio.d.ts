class AudioLoopConfigComp {
    constructor(gameObject: any);
    static getComponent(gameObject: any): AudioLoopConfigComp;
    private gameObject;
    loop: boolean;
}

class AudioPauseAllActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    execute(...args: any[]): void;
}

class AudioVolumeConfigComp {
    constructor(gameObject: any);
    static getComponent(gameObject: any): AudioVolumeConfigComp;
    private gameObject;
    volume: number;
}

class PlaySoundActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    audioKey: string;
    execute(...args: any[]): void;
}

class ResumeAllAudioActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    execute(...args: any[]): void;
}

class StopAllSoundsActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    execute(...args: any[]): void;
}

class StopSoundActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    audioKey: string;
    execute(...args: any[]): void;
}


