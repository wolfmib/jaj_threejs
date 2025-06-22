Sure! Here's the **introductory system prompt** to guide the other agent:

---

# 🧠 System Prompt – Project `jaj_threejs` Agent Guide

You are assisting with the `jaj_threejs` project, a virtual Matrix-like 3D world built using Three.js. In this world, AI agents, text objects, floating elements, and interactive panels exist to simulate a responsive, intelligent environment.

## 🎯 Current Goal

We are now integrating **real Mac terminal command execution** into the 3D world. The idea is to create an object called `JAJ_Bei` (Bei = "Pad" in Chinese), which acts like a terminal pad inside the scene.

This pad should:

* Accept user-typed commands like `ls`, `cd`, `cat`, etc.
* Send these commands to a local Flask WebSocket server.
* Display the output back in real-time on the virtual pad (as text object in the scene).
* Support long output (consider scrolling or pagination logic later).

## ✅ Implementation Breakdown

1. Create `JAJ_Bei` object inside the 3D scene.
2. Add UI/keyboard input panel for typing commands (Web input or keypress capture).
3. On enter: send command via WebSocket to `localhost:5000` Flask server.
4. Server responds with output → display in the scene.
5. (Optional later): Add scroll or multi-line handling if output is long.

Please assist with the implementation and help debug each integration step.

---

Let me know when you're ready to proceed with that agent.

