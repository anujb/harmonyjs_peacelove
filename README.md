# ES6 - Peace, Love, & Harmony
> Template project for testing out Javascript vNext (ECMAScript 6 aka "Harmony") via the Google Traceur Compiler with a simple Express service.

## Getting Started

#### Dependencies
First, you'll have to pull down the dependencies defined on the [package.json](https://github.com/anujb/harmonyjs_peacelove/blob/master/package.json) via npm using the command below:

```
npm install
```

#### Build & Run

Next, I've setup the necessary plumbing in the [Gruntfile.js](https://github.com/anujb/harmonyjs_peacelove/blob/master/Gruntfile.js):

- New Hawtness -> Old and Busted Javascript Compiler (grunt-traceur)
- Automatically watch for changes & recompile (grunt-contrib-watch) 
- Monitor & Restart Server (grunt-nodemon)
- Chrome Debugger Window (grunt-shell)
- Big Ballin' and related bidness (grunt-concurrent*)

If you haven't used grunt before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a Gruntfile as well as install and use grunt plugins. 

Once you're familiar with that process, simply run the command to start the project:

```
	grunt
```

***Big shouts out to Sindre Sorhus for [grunt-concurrent](https://github.com/sindresorhus/grunt-concurrent "grunt-concurrent"). Super useful for secondary/tertiary assets that needed to be recompiled.**

#### What do you get?

1) Node-Inspector Debugger: Assuming you use Chrome, which you should...you will see a browser automatically pop up with the Chrome Dev Tools at the following address:

```
http://localhost:8080/debug?port=5858
```

2) Express Service: Simple express.js service that is defined in the app.js file.

```
http://localhost:8181?name=Anuj
```