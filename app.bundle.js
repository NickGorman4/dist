/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("RUNNING RIGHT NOW2");
const showcase = document.getElementById("showcase");
const key = "96296aaaf1964968ad92128f7469bd99";
showcase.addEventListener("load", function () {
    return __awaiter(this, void 0, void 0, function* () {
        let sdk;
        try {
            sdk = yield showcase.contentWindow.MP_SDK.connect(showcase, key, "3.2");
        }
        catch (e) {
            console.error(e);
            return;
        }
        console.log("%c  Hello Bundle SDK! ", "background: #333333; color: #00dd00");
        console.log(sdk);
        //This allows for what we add to actually be seen
        const lights = yield sdk.Scene.createNode();
        lights.addComponent("mp.lights");
        lights.start();
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //This is the Sum() example from the matterport.github.io page. This displays how to bind component inputs to outputs
        //This is the architecture for defining, adding, and using components
        //Define the component. I am not sure why it must be in the form of a function instead of a class
        function Sum() {
            this.inputs = {
                augend: 0,
                addend: 0,
            };
            this.outputs = {
                sum: 0,
            };
            // if any input changes, recompute the sum.
            this.onInputsUpdated = function () {
                this.outputs.sum = this.inputs.augend + this.inputs.addend;
            };
        }
        //This is the function that returns the new component. Necessary for adding it
        function SumFactory() {
            return new Sum();
        }
        //Quick display of the general structure and use of the sum component
        var sum1 = SumFactory();
        sum1.inputs.augend = 1;
        sum1.inputs.addend = 99;
        sum1.onInputsUpdated();
        console.log(sum1.outputs.sum);
        //This is how you register the component to add it later
        sdk.Scene.register("sum", SumFactory);
        //This is how you add the component. Create a node and then add components. The components need to be in the same node
        var node = yield sdk.Scene.createNode();
        var comp1 = node.addComponent("sum");
        var comp2 = node.addComponent("sum");
        var comp3 = node.addComponent("sum");
        // This binds comp2's augend to comp1's sum. The order of arguments can be a little confusing.
        comp1.bind("augend", comp2, "sum");
        comp1.bind("addend", comp3, "sum");
        node.start();
        comp2.inputs.augend = 5;
        comp3.inputs.addend = 6;
        //This is necessary and the order is important. The highest component in the architecture needs to be called alst.
        comp2.onInputsUpdated();
        comp3.onInputsUpdated();
        comp1.onInputsUpdated();
        console.log("%c  " + comp1.outputs.sum + "  ", "background: #333333; color: #00dd00");
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        function getCursorPosition() {
            var cartesian = [];
            sdk.Pointer.intersection.subscribe(function (intersectionData) {
                cartesian = [
                    intersectionData.position.x,
                    intersectionData.position.y,
                    intersectionData.position.z,
                    intersectionData.normal.x,
                    intersectionData.normal.y,
                    intersectionData.normal.z,
                ];
                //console.log(cartesian)
            });
            return cartesian;
        }
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        function Box() {
            this.inputs = {
                visible: true,
            };
            this.onInit = function () {
                var THREE = this.context.three;
                var geometry = new THREE.BoxGeometry(1, 1, 1);
                this.material = new THREE.MeshPhongMaterial();
                this.material.color = new THREE.Color("skyblue");
                var mesh = new THREE.Mesh(geometry, this.material);
                this.outputs.objectRoot = mesh;
                this.outputs.collider = mesh;
            };
            this.onEvent = function (type, data) {
                /*      var THREE = this.context.three;
                if (this.type === this.ComponentInteractionType.HOVER) {
                  this.material.color = new THREE.Color("red");
                }*/
            };
            this.onInputsUpdated = function (previous) { };
            this.onTick = function (tickDelta) { };
            this.onDestroy = function () {
                this.material.dispose();
            };
        }
        function BoxFactory() {
            return new Box();
        }
        //var clickCount = 0;
        //var hoverCount = 0;
        //var hoverCountPlant = 0;
        ////////////////////////////////////////////////////////////////////////////////////////////////////////
        //this renderable class is the box that is spawned. Also a three.js primitive
        /*  function Renderable() {
            this.inputs = {
              name: null,
              visible: false,
              color: "yellow",
              opacity: 1,
            };
        
            this.update = function () {
              const THREE = this.context.three;
              this.material.color = new THREE.Color(this.inputs.color);
              this.material.opacity = this.inputs.opacity;
            }
        
            this.onInit = function () {
              const THREE = this.context.three;
              //this.material = new THREE.MeshPhongMaterial();
              var geometry = new THREE.BoxGeometry(.5, .5, .5);
        
        
        /!*      var texture = new THREE.TextureLoader().load(
                "../BMcD/perspective-logo-large.png"
              );*!/
        
        
              this.material = new THREE.MeshLambertMaterial();
              this.material.color = new THREE.Color(this.inputs.color);
              this.material.transparent = true;
              this.material.opacity = this.inputs.opacity;
        
              var mesh = new THREE.Mesh(geometry, this.material);
              this.outputs.objectRoot = mesh;
              this.outputs.collider = mesh;
        
              /!*      var loader = new THREE.FontLoader();
        
              loader.load("../bundle/fonts/mp-font.eot", function (font) {
                var geometry = new THREE.TextGeometry("Hello three.js!", {
                  font: font,
                  size: 80,
                  height: 5,
                  curveSegments: 12,
                  bevelEnabled: true,
                  bevelThickness: 10,
                  bevelSize: 8,
                  bevelOffset: 0,
                  bevelSegments: 5,
                });
        
                this.material = new THREE.MeshLambertMaterial();
                var mesh = new THREE.Mesh(geometry, this.material);
                this.outputs.objectRoot = mesh;
                this.outputs.collider = mesh;
              });*!/
            };
            this.onEvent = function (eventType: string) {
              // console.log(eventType + " count: " + hoverCount);
              const THREE = this.context.three;
        
              //click events
        
        
              /!*if ((this.eventType = "INTERACTION.CLICK" && clickCount % 2 == 0)) {
                clickCount++;
                console.log("Clickable component was clicked!" + clickCount);
                this.material.color = new THREE.Color("royalblue");
              } else if (
                (this.eventType = "INTERACTION.CLICK" && clickCount % 2 != 0)
              ) {
                clickCount++;
                console.log("Clickable component was clicked!" + clickCount);
                this.material.color = new THREE.Color("white");
              }*!/
        
              //hover events
              if (eventType == "INTERACTION.HOVER" && hoverCount % 2 == 0) {
                this.material.color = new THREE.Color(this.inputs.color);
                hoverCount++;
              } else if (eventType == "INTERACTION.HOVER" && hoverCount % 2 != 0) {
                this.inputs.color = "royalblue"
                this.material.color = new THREE.Color(this.inputs.color);
                hoverCount++;
              }
        
              //drag events (ha)
              if (eventType == "INTERACTION.DRAG") {
                //changeColor();
                //var cartesian = getCursorPosition();
                //console.log(cartesian);
               // here.obj3D.position.set(cartesian[0], 0.5, cartesian[2]);
              }
            };
        
            this.onTick = function (tickDelta) {};
        
          }
        
        
          function rendyFactor() {
            return new Renderable();
          }
          sdk.Scene.register("testy", rendyFactor);*/
        ////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////
        /*  function Rack() {
            this.inputs = {
              name: null,
              visible: false,
              color: "yellow",
              opacity: 1,
            };
        
            this.update = function () {
              const THREE = this.context.three;
              this.material.color = new THREE.Color(this.inputs.color);
              this.material.opacity = this.inputs.opacity;
            }
        
            this.onInit = function () {
        
            };
            this.onEvent = function (eventType: string) {
        
              if (eventType == "INTERACTION.HOVER" && hoverCount % 2 == 0) {
                hoverCount++;
              } else if (eventType == "INTERACTION.HOVER" && hoverCount % 2 != 0) {
                hoverCount++;
              }
        
              //drag events (ha)
              if (eventType == "INTERACTION.DRAG") {
                var cartesian = getCursorPosition();
                here.obj3D.position.set(cartesian[0], 0.5, cartesian[2]);
              }
            };
        
            this.onTick = function (tickDelta) {};
        
          }
        
        
          function rackFactory() {
            return new Rack();
          }
          sdk.Scene.register("testy", rendyFactor);*/
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////
        //this spawner will be where new stuff will be spawned. This is a three.js primitives
        var spawnerPosition = [];
        function Spawner() {
            this.inputs = {
                name: null,
                visible: false,
                color: "white",
                opacity: 1,
            };
            this.update = function () {
                const THREE = this.context.three;
                this.material.color = new THREE.Color(this.inputs.color);
                this.material.opacity = this.inputs.opacity;
            };
            this.onInit = function () {
                const THREE = this.context.three;
                //this.material = new THREE.MeshPhongMaterial();
                var geometry = new THREE.CylinderGeometry(.5, .5, .01, 50);
                /*
                            var texture = new THREE.TextureLoader().load(
                              "../BMcD/target.png"
                            );
                
                */
                this.material = new THREE.MeshLambertMaterial();
                this.material.color = new THREE.Color(this.inputs.color);
                this.material.transparent = true;
                this.material.opacity = this.inputs.opacity;
                var mesh = new THREE.Mesh(geometry, this.material);
                this.outputs.objectRoot = mesh;
                this.outputs.collider = mesh;
                /*      var loader = new THREE.FontLoader();
          
                loader.load("../bundle/fonts/mp-font.eot", function (font) {
                  var geometry = new THREE.TextGeometry("Hello three.js!", {
                    font: font,
                    size: 80,
                    height: 5,
                    curveSegments: 12,
                    bevelEnabled: true,
                    bevelThickness: 10,
                    bevelSize: 8,
                    bevelOffset: 0,
                    bevelSegments: 5,
                  });
          
                  this.material = new THREE.MeshLambertMaterial();
                  var mesh = new THREE.Mesh(geometry, this.material);
                  this.outputs.objectRoot = mesh;
                  this.outputs.collider = mesh;
                });*/
            };
            this.onEvent = function (eventType) {
                // console.log(eventType + " count: " + hoverCount);
                // const THREE = this.context.three;
                //click events
                /*if ((this.eventType = "INTERACTION.CLICK" && clickCount % 2 == 0)) {
                  clickCount++;
                  console.log("Clickable component was clicked!" + clickCount);
                  this.material.color = new THREE.Color("royalblue");
                } else if (
                  (this.eventType = "INTERACTION.CLICK" && clickCount % 2 != 0)
                ) {
                  clickCount++;
                  console.log("Clickable component was clicked!" + clickCount);
                  this.material.color = new THREE.Color("white");
                }*/
                /*      //hover events
                      if (eventType == "INTERACTION.HOVER" && hoverCount % 2 == 0) {
                        this.material.color = new THREE.Color(this.inputs.color);
                        hoverCount++;
                      } else if (eventType == "INTERACTION.HOVER" && hoverCount % 2 != 0) {
                        this.inputs.color = "royalblue"
                        this.material.color = new THREE.Color(this.inputs.color);
                        hoverCount++;
                      }*/
                //drag events (ha)
                if (eventType == "INTERACTION.DRAG") {
                    //changeColor();
                    var cartesian = getCursorPosition();
                    //console.log(cartesian);
                    spawnNode.obj3D.position.set(cartesian[0], 0, cartesian[2]);
                    spawnerPosition = cartesian;
                }
            };
            this.onTick = function (tickDelta) { };
        }
        function spawnFactor() {
            return new Spawner();
        }
        sdk.Scene.register("spawn", spawnFactor);
        const spawnNode = yield sdk.Scene.createNode();
        const spawner = spawnNode.addComponent("spawn");
        spawner.events["INTERACTION.HOVER"] = true;
        spawner.events["INTERACTION.DRAG"] = true;
        spawner.events["INTERACTION.CLICK"] = true;
        spawnNode.obj3D.position.set(-7, 0, 5.5);
        spawner.inputs.opacity = 1;
        spawnNode.start();
        //end of spawner definition
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        /*
        
          document.getElementById("clickMe").onclick = function changeColor() {
            console.log("color change")
            bull.inputs.color = "green";
          }
        
        
          document.getElementById("clickMe2").onclick = function appear() {
            if(bull.inputs.opacity != 1) {
              while (bull.inputs.opacity < 1) {
                bull.inputs.opacity = bull.inputs.opacity + .0001;
                bull.update();
                console.log("while " + bull.inputs.opacity)
              }
            }
          }
        
          document.getElementById("clickMe3").onclick = function disappear() {
              bull.inputs.opacity = 0;
          }
        
          var boxArray = [];
          var nodeArray = [];
          var boxIndex = 0;
          var boxSelected = 0;
          var pastSelection = 0;
        
          document.getElementById("clickMe4").onclick = async function newBox() {
            console.log("Box Selected: " + boxSelected + "\n" + "Box Index: " + boxIndex )
        
            nodeArray[boxIndex] = await sdk.Scene.createNode();
            boxArray[boxIndex] = nodeArray[boxIndex].addComponent("testy");
            nodeArray[boxIndex].obj3D.position.set(spawnerPosition[0], .5, spawnerPosition[2]);
            boxArray[boxIndex].inputs.color = "yellow";
            boxArray[boxIndex].events["INTERACTION.HOVER"] = true;
            boxArray[boxIndex].events["INTERACTION.DRAG"] = true;
            boxArray[boxIndex].events["INTERACTION.CLICK"] = true;
            boxArray[boxIndex].inputs.name = boxIndex;
        
            boxArray[boxIndex].onEvent = function (eventType: string) {
              if (eventType == "INTERACTION.CLICK") {
                pastSelection = boxSelected;
                boxSelected = this.inputs.name;
                console.log(boxSelected)
                //boxSelected = boxIndex;
                //boxArray[boxSelected].inputs.color = "blue";
              }
        
                if (eventType == "INTERACTION.DRAG") {
                  //boxArray[boxIndex].inputs.color = "blue";
                  console.log(boxIndex)
        
                  var cartesian = getCursorPosition();
                  //console.log(cartesian);
                  nodeArray[boxSelected].obj3D.position.set(cartesian[0], .5, cartesian[2]);
                }
        
            };
        
            nodeArray[boxIndex].start()
          boxIndex++;
          }
        
          document.getElementById("clickMe5").onclick = async function deleteBox() {
            console.log(nodeArray)
            nodeArray[boxSelected].stop();
            console.log(nodeArray)
        
          }
        
            function updateSelection() {
            if(boxIndex !=0)
            {
              boxArray[pastSelection].inputs.color = "yellow";
              boxArray[pastSelection].update();
        
              boxArray[boxSelected].inputs.color = "orange"
              boxArray[boxSelected].update();
            }
        }*/
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        var rackArray = [];
        var rackNodeArray = [];
        var rackIndex = 0;
        var rackSelected = 0;
        var pastRackSelection = 0;
        document.getElementById("clickMe6").onclick = function newRack() {
            return __awaiter(this, void 0, void 0, function* () {
                rackNodeArray[rackIndex] = yield sdk.Scene.createNode();
                rackArray[rackIndex] = rackNodeArray[rackIndex].addComponent(sdk.Scene.Component.FBX_LOADER, {
                    url: "./fbx/Telecom/Telecom.fbx",
                });
                rackArray[rackIndex].inputs.localScale = {
                    x: 0.022,
                    y: 0.022,
                    z: 0.022,
                };
                rackNodeArray[rackIndex].obj3D.position.set(spawnerPosition[0], 0, spawnerPosition[2]);
                rackArray[rackIndex].events["INTERACTION.HOVER"] = true;
                rackArray[rackIndex].events["INTERACTION.DRAG"] = true;
                rackArray[rackIndex].events["INTERACTION.CLICK"] = true;
                rackArray[rackIndex].name = rackIndex;
                console.log(rackArray[rackIndex].name);
                console.log(rackArray[rackIndex]);
                rackArray[rackIndex].onEvent = function (eventType) {
                    if (eventType == "INTERACTION.CLICK") {
                        pastRackSelection = rackSelected;
                        console.log(pastRackSelection);
                        rackSelected = this.name;
                        console.log(rackSelected);
                        //boxSelected = boxIndex;
                        //boxArray[boxSelected].inputs.color = "blue";
                    }
                    if (eventType == "INTERACTION.DRAG") {
                        var cartesian = getCursorPosition();
                        if (cartesian[3] == 1 || cartesian[3] == -1) {
                            rackNodeArray[rackSelected].obj3D.position.z = cartesian[2];
                        }
                        if (cartesian[4] == 1) {
                            rackNodeArray[rackSelected].obj3D.position.set(cartesian[0], 0, cartesian[2]);
                        }
                        if (cartesian[5] == 1 || cartesian[5] == -1) {
                            rackNodeArray[rackSelected].obj3D.position.x = cartesian[0];
                        }
                        //boxArray[boxIndex].inputs.color = "blue";
                        //console.log(rackIndex)
                        //console.log(cartesian);
                        //console.log(sdk.Pointer)
                        // rackNodeArray[rackSelected].obj3D.position.set(cartesian[0], 0, cartesian[2]);
                    }
                };
                rackNodeArray[rackIndex].start();
                rackIndex++;
            });
        };
        document.getElementById("clickMe7").onclick = function deleteRack() {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(rackArray);
                rackNodeArray[rackSelected].stop();
                console.log(rackArray);
            });
        };
        document.getElementById("clickMe8").onclick = function rotateRack() {
            return __awaiter(this, void 0, void 0, function* () {
                rackNodeArray[rackSelected].obj3D.rotation.y += Math.PI / 2;
            });
        };
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /*
        
          var rackArray = [];
          var rackNodeArray = [];
          var rackIndex = 0;
          var rackSelected = 0;
          var pastRackSelection = 0;
        
          document.getElementById("clickMe4").onclick = async function newBox() {
            console.log("Box Selected: " + rackSelected + "\n" + "Box Index: " + rackIndex )
        
            rackNodeArray[rackIndex] = await sdk.Scene.createNode();
            rackArray[rackIndex] = rackNodeArray[rackIndex].addComponent("testy");
            rackNodeArray[rackIndex].obj3D.position.set(spawnerPosition[0], .5, spawnerPosition[2]);
            rackArray[rackIndex].inputs.color = "yellow";
            rackArray[rackIndex].events["INTERACTION.HOVER"] = true;
            rackArray[rackIndex].events["INTERACTION.DRAG"] = true;
            rackArray[rackIndex].events["INTERACTION.CLICK"] = true;
            rackArray[rackIndex].inputs.name = rackIndex;
        
            rackArray[rackIndex].onEvent = function (eventType: string) {
              if (eventType == "INTERACTION.CLICK") {
                pastRackSelection = rackSelected;
                rackSelected = this.inputs.name;
                console.log(rackSelected)
                //rackSelected = rackIndex;
                //rackArray[rackSelected].inputs.color = "blue";
              }
        
              if (eventType == "INTERACTION.DRAG") {
                //rackArray[rackIndex].inputs.color = "blue";
                console.log(rackIndex)
        
                var cartesian = getCursorPosition();
                //console.log(cartesian);
                rackNodeArray[rackSelected].obj3D.position.set(cartesian[0], .5, cartesian[2]);
              }
        
            };
        
            rackNodeArray[rackIndex].start()
            rackIndex++;
          }
        
        
          document.getElementById("clickMe5").onclick = async function deleteBox() {
            console.log(nodeArray)
            rackNodeArray[rackSelected].stop();
          }
        
          function updateSelection() {
            if(rackIndex !=0)
            {
              rackArray[pastRackSelection].inputs.color = "yellow";
              rackArray[pastRackSelection].update();
        
              rackArray[rackSelected].inputs.color = "orange"
              rackArray[rackSelected].update();
            }
          }
        
        */
        // Registering the component with the sdk
        sdk.Scene.register("box", BoxFactory);
        //Necessary for adding objects. This is what will actually
        //put our 3D object into our space
        /* const modelNode = await sdk.Scene.createNode();
         const littleGuy = await sdk.Scene.createNode();
         const fan = await sdk.Scene.createNode();
         const wall = await sdk.Scene.createNode();*/
        //const voltageNode = await sdk.Scene.createNode();
        // const cboNode = await sdk.Scene.createNode();
        // const test = await sdk.Scene.createNode();
        /*  const here = await sdk.Scene.createNode();
        
          const bull = here.addComponent("testy");
        
          here.obj3D.position.set(-5, .5, 5.5);
          here.start();*/
        // Store the fbx component since we will need to adjust it in the next step.
        //Object is stored inside of the project
        //The url could be some internet address where it is stored
        //this leads to a potted plant
        /* const fbxComponent = modelNode.addComponent(sdk.Scene.Component.FBX_LOADER, {
           url: "./fbx/Telecom/Telecom.fbx",
         });
         const fella = littleGuy.addComponent(sdk.Scene.Component.FBX_LOADER, {
           url: "./fbx/Nokia/Nokia.fbx",
         });
       
         const fanster = fan.addComponent(sdk.Scene.Component.FBX_LOADER, {
           url: "./fbx/Sageon/Sageon.fbx",
         });
         const powerWall = wall.addComponent(sdk.Scene.Component.FBX_LOADER, {
           url: "./fbx/Wall/Wall.fbx",
         });*/
        /*  const voltage = voltageNode.addComponent(sdk.Scene.Component.FBX_LOADER, {
            url: "./fbx/randy/voltage.fbx",
          });*/
        /*
          const cbo = cboNode.addComponent(sdk.Scene.Component.FBX_LOADER, {
            url: "./fbx/hawk/hawk+Logo.fbx",
          });
        */
        //const testtest = test.addComponent("box");
        //Adjsut the scale of the plant. I do not know any better way than tuning right now
        //voltageNode.obj3D.transparent = true;
        //voltageNode.obj3D.opacity = .5;
        /*
          cbo.inputs.localScale = {
            x: .5,
            y: .5,
            z: .5,
          };
        */
        /*
        
        
          powerWall.inputs.localScale = {
            x: 1,
            y: 1,
            z: 1,
          };
        
          fbxComponent.inputs.localScale = {
            x: 0.022,
            y: 0.022,
            z: 0.022,
          };
        
          fella.inputs.localScale = {
            x: 0.02,
            y: 0.02,
            z: 0.02,
          };
        
          fanster.inputs.localScale = {
            x: 0.001,
            y: 0.001,
            z: 0.001,
          };
        
          powerWall.onEvent = function (eventType: string) {
            //drag events (ha)
            if (eventType == "INTERACTION.DRAG") {
              //console.log(cartesian);
              if (eventType == "INTERACTION.DRAG") {
                var cartesian = getCursorPosition();
                //console.log(cartesian);
                wall.obj3D.position.set(cartesian[0], 0, 5.2);
              }
            }
          };
        
          fella.onEvent = function (eventType: string) {
            //drag events (ha)
            if (eventType == "INTERACTION.DRAG") {
              //console.log(cartesian);
              if (eventType == "INTERACTION.DRAG") {
                var cartesian = getCursorPosition();
                //console.log(cartesian);
                littleGuy.obj3D.position.set(cartesian[0], 0.75, cartesian[2]);
              }
            }
          };
        
          fanster.onEvent = function (eventType: string) {
            //drag events (ha)
            if (eventType == "INTERACTION.DRAG") {
              //console.log(cartesian);
              if (eventType == "INTERACTION.DRAG") {
                var cartesian = getCursorPosition();
                //console.log(cartesian);
                fan.obj3D.position.set(-10.6, 0, cartesian[2]);
              }
            }
          };
        */
        /*  voltage.onEvent = function (eventType: string) {
            //drag events (ha)
            if (eventType == "INTERACTION.DRAG") {
              //console.log(cartesian);
              if (eventType == "INTERACTION.DRAG") {
               var cartesian = getCursorPosition();
                //console.log(cartesian);
                voltageNode.obj3D.position.set(-2.75, cartesian[1], 4.8);
              }
            }
          };*/
        /*
          cbo.onEvent = function (eventType: string) {
            //drag events (ha)
            if (eventType == "INTERACTION.DRAG") {
              //console.log(cartesian);
              if (eventType == "INTERACTION.DRAG") {
                var cartesian = getCursorPosition();
                //console.log(cartesian);
                cboNode.obj3D.position.set(cartesian[0], 0, cartesian[2]);
              }
            }
          };*/
        //voltageNode.obj3D.castShadow = true;
        //console.log(voltageNode)
        /*
        
          fbxComponent.onEvent = function (eventType: string) {
            // console.log(eventType + " count: " + hoverCount);
        
            //click events
            /!*if ((this.eventType = "INTERACTION.CLICK" && clickCount % 2 == 0)) {
              clickCount++;
              console.log("Clickable component was clicked!" + clickCount);
              this.material.color = new THREE.Color("royalblue");
            } else if (
              (this.eventType = "INTERACTION.CLICK" && clickCount % 2 != 0)
            ) {
              clickCount++;
              console.log("Clickable component was clicked!" + clickCount);
              this.material.color = new THREE.Color("white");
            }*!/
        
            //hover events
            if (eventType == "INTERACTION.HOVER" && hoverCountPlant % 2 == 0) {
              /!* console.log("yerp");
              fbxComponent.inputs.localScale = {
                x: 0.022 * 1.1,
                y: 0.022 * 1.1,
                z: 0.022 * 1.1,
              };*!/
              hoverCountPlant++;
            } else if (eventType == "INTERACTION.HOVER" && hoverCountPlant % 2 != 0) {
              //this.material.color = new THREE.Color("royalblue");
              /!* console.log("yerp1");
              fbxComponent.inputs.localScale = {
                x: 0.022 / 1.1,
                y: 0.022 / 1.1,
                z: 0.022 / 1.1,
              };*!/
              hoverCountPlant++;
            }
        
            //drag events (ha)
            if (eventType == "INTERACTION.DRAG") {
              //console.log(cartesian);
              if (eventType == "INTERACTION.DRAG") {
                var cartesian = getCursorPosition();
                //console.log(cartesian);
                modelNode.obj3D.position.set(cartesian[0], 0, cartesian[2]);
              }
            }
          };
        
          //Location of the plant. X is "left and right", Y is "up and down", Z is "Forward and back"
          // Relative to "spawn" location of the viewer. If you move those relations will not hold
          littleGuy.obj3D.position.set(-1.135, 0.763, 0.777);
          modelNode.obj3D.position.set(-7, 0, 7);
          modelNode.obj3D.rotation.y = (90 * Math.PI) / 180;
          wall.obj3D.position.set(-2.559, 0, 5.2);
          fan.obj3D.position.set(-10.6, 0, 4.097);
          fan.obj3D.rotation.y = (90 * Math.PI) / 180;
          littleGuy.obj3D.rotation.y = (180 * Math.PI) / 180;
        /!*  voltageNode.obj3D.rotation.y = (0 * Math.PI) / 180;
          voltageNode.obj3D.position.set(-2.75, 1, 4.8)*!/
         // cboNode.obj3D.position.set(-4, 0, 6.5)
          //test.obj3D.position.set(-6.5, 0.5, 1.21);
         // cboNode.obj3D.rotation.y = Math.PI/2;
        
        
        /!*
          sdk.Pointer.intersection.subscribe(function (intersectionData) {
            // Changes to the intersection data have occurred.
            document.getElementById("demo").innerHTML =
                "X position : " +
                Number.parseFloat(intersectionData.position.x).toFixed(3) +
                " m" +
                "<br/>" +
                "Y position : " +
                Number.parseFloat(intersectionData.position.y).toFixed(3) +
                " m" +
                "<br/>" +
                "Z position : " +
                Number.parseFloat(intersectionData.position.z).toFixed(3) +
                " m";
          });
        
        *!/
        
        
        
        
        
          //Rot is for the ultra-impressive cosine rotation
          //the .start() is what will actually add the object inside the node to scene
        
          modelNode.obj3D.visible = false;
          littleGuy.obj3D.visible = false;
          fan.obj3D.visible = false;
          wall.obj3D.visible = false;
        
        /!*
          modelNode.start();
          littleGuy.start();
          fan.start();
          wall.start();
        *!/
        
          //voltageNode.start();
          //cboNode.start();
          //test.start();
        
          /!* sdk.Mattertag.add([{
             label: "New tag",
             description: "This tag was added through the Matterport SDK",
             anchorPosition : {
               x: 0,
               y: 0,
               z: 0,
             },
             stemVector: { // make the Mattertag stick straight up and make it 0.30 meters (~1 foot) tall
               x: 0,
               y: 0.30,
               z: 0,
             },
             color: { // blue disc
               r: 0.0,
               g: 0.0,
               b: 1.0,
             },
             //floorId?: number, // optional, if not specified the sdk will provide an estimate of the floor id for the anchor position provided.
           }])
         *!/
        
          //This runs constantly to allow for animation. I am still unfamiliar with this
          //It is called recursively though, so I think anything after this will not be reached
          // The above is FALSE, it will read past this function. But I think it is still recursive because
          //If a console.log() statement is put inside it is logged hundreds of times
        
          //console.log(bull.events["INTERACTION.CLICK"]);
        
        //  bull.events["INTERACTION.CLICK"] = true;
        //  bull.events["INTERACTION.HOVER"] = true;
        //  bull.events["INTERACTION.DRAG"] = true;
        
          fbxComponent.events["INTERACTION.HOVER"] = true;
          fbxComponent.events["INTERACTION.DRAG"] = true;
        
          fanster.events["INTERACTION.HOVER"] = true;
          fanster.events["INTERACTION.DRAG"] = true;
        
          fella.events["INTERACTION.HOVER"] = true;
          fella.events["INTERACTION.DRAG"] = true;
        
          powerWall.events["INTERACTION.HOVER"] = true;
          powerWall.events["INTERACTION.DRAG"] = true;
        
        //  voltage.events["INTERACTION.HOVER"] = true;
         // voltage.events["INTERACTION.DRAG"] = true;
        
        /!*
          let objects = [];
          try {
            objects = await sdk.Scene.query(['scene']);
          }
          catch(e) {
            console.log(e);
          }
        
          const node1 = await sdk.Scene.createNode();
          document.getElementById("demo").innerHTML = node1.addComponent('mp.transformControls', {
            scene: objects,
          });
          node.start();
        *!/
        
        //    setScene(objects);;
        
        
        /!*  cbo.events["INTERACTION.HOVER"] = true;
          cbo.events["INTERACTION.DRAG"] = true;*!/
        */
        const tick = function () {
            requestAnimationFrame(tick);
            //fan.obj3D.rotation.y = rot;
            // rot = rot + 0.02
            //bull.update();
            //updateSelection();
        };
        tick();
    });
});


/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map