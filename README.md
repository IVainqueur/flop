# FLOP
This is a react-native **wrapper** for the [Flop](https://github.com/IVainqueur/flop-unity) Unity game.

![Flop Demo](/screenshots/flopWrapperDemo.gif)

## How to run
Before running the app you'll have to:
1. Clone the [Flop](https://github.com/IVainqueur/flop-unity) repository
2. Build the project for Android/iOS (depending on your target) and export the build folder the corresponding [unity builds](/unity/builds/) folder
   
   > **Note:** Make sure to consider the device you want to run the app on and select the appropriate build settings in Unity like the target architecture (ARMv7, ARM64, x86, x86_64) and the graphics API (OpenGL ES 2.0, OpenGL ES 3.0, Vulkan, Metal). Getting it wrong may result in the Unity build not running on the device.

3. Run the app with `yarn android` or `yarn ios` depending on your target device

## How to play

There are 3 ways to make the bird move:
- Press the space bar
- Click the screen (left click)
- Touching the screen