# Phaser Editor v4 Audio Scripts (library)

**Warning: This project is deprecated. It is now part of the [@phaserjs/editor-scripts-quick](https://www.npmjs.com/package/@phaserjs/editor-scripts-quick) library.**

This project contains a few Phaser Editor scripts for playing Phaser audios.

These script nodes are very basic and may fit on any Phaser Editor project.

The scripts are coded in TypeScript with ES modules.

## Installing (NPM)

This package depends on the following packages:

- `@phaserjs/editor-scripts-core`

To install this in your game you have to install dependencies too:

```
npm install @phaserjs/editor-scripts-core
npm install @phaserjs/editor-scripts-audio
```

Also, you should add this package to the `phasereditor2d.config.json` file in your project, in the `scripts` section:

```json
{
    "scripts": [
        "@phaserjs/editor-scripts-core",
        "@phaserjs/editor-scripts-audio",
    ]
}
```

## Installing (vanilla JavaScript)

* Get the files in the [browser](./browser/) folder and copy them into your JavaScript project. It includes Phaser Editor files, JavaScript files, and TypeScript type definitions.
* Add a `script` tag to the `index.html` file to load the `lib/phasereditor2d_scripts_core.js` file.

## Summary

This library provides a couple of actions for playback audio files. As a reminder, an action is executed by an event script or another action.

It also contains user components for configuring the actions.

The actions:

* **Play Audio Action** - Plays the given audio key.
* **Stop Audio Action** - Stops the given audio key.
* **Stop All Audios Action** - Stops all playing audios.
* **Pause All Audios Action** - Pauses all playing audios.
* **Resume All Audios Action** - Resumes all paused audios.

The user components:

* **Audio Loop Config** - To configure the **loop** property in playing action scripts.
* **Audio Volume Config** - To configure the **volume** property in playing action scripts.

## Play Audio Action

*Class: `PlayAudioActionScript`*

This action plays the audio you set in the **Audio Key** property. You can add the **Audio Loop Config** and **Audio Volume Config** components to this script for configuring the sound.

## Stop Audio Action

*Class: `StopAudioActionScript`*

This action stops the audio with the given **Audio Key**.

## Stop All Audios Action

*Class: `StopAllSoundsActionScript`*

This action stops all playing audios.

## Pause All Audios Action

*Class: `PauseAllSoundsActionScript`*

This action pauses all playing sounds.

## Resume All Audios Action

*Class: `ResumeAllSoundsActionScript`*

This action resumes all paused audios.