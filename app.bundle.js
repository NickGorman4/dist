!function(t){var o={};function e(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var i in t)e.d(n,i,function(o){return t[o]}.bind(null,i));return n},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=0)}([function(t,o){var e=this&&this.__awaiter||function(t,o,e,n){return new(e||(e=Promise))((function(i,s){function c(t){try{a(n.next(t))}catch(t){s(t)}}function r(t){try{a(n.throw(t))}catch(t){s(t)}}function a(t){var o;t.done?i(t.value):(o=t.value,o instanceof e?o:new e((function(t){t(o)}))).then(c,r)}a((n=n.apply(t,o||[])).next())}))};console.log("RUNNING RIGHT NOW2");const n=document.getElementById("showcase");n.addEventListener("load",(function(){return e(this,void 0,void 0,(function*(){let t;try{t=yield n.contentWindow.MP_SDK.connect(n,"96296aaaf1964968ad92128f7469bd99","3.2")}catch(t){return void console.error(t)}console.log("%c  Hello Bundle SDK! ","background: #333333; color: #00dd00"),console.log(t);const o=yield t.Scene.createNode();function i(){this.inputs={augend:0,addend:0},this.outputs={sum:0},this.onInputsUpdated=function(){this.outputs.sum=this.inputs.augend+this.inputs.addend}}function s(){return new i}o.addComponent("mp.lights"),o.start();var c=s();c.inputs.augend=1,c.inputs.addend=99,c.onInputsUpdated(),console.log(c.outputs.sum),t.Scene.register("sum",s);var r=yield t.Scene.createNode(),a=r.addComponent("sum"),l=r.addComponent("sum"),u=r.addComponent("sum");function d(){var o=[];return t.Pointer.intersection.subscribe((function(t){o=[t.position.x,t.position.y,t.position.z,t.normal.x,t.normal.y,t.normal.z]})),o}function p(){this.inputs={visible:!0},this.onInit=function(){var t=this.context.three,o=new t.BoxGeometry(1,1,1);this.material=new t.MeshPhongMaterial,this.material.color=new t.Color("skyblue");var e=new t.Mesh(o,this.material);this.outputs.objectRoot=e,this.outputs.collider=e},this.onEvent=function(t,o){},this.onInputsUpdated=function(t){},this.onTick=function(t){},this.onDestroy=function(){this.material.dispose()}}a.bind("augend",l,"sum"),a.bind("addend",u,"sum"),r.start(),l.inputs.augend=5,u.inputs.addend=6,l.onInputsUpdated(),u.onInputsUpdated(),a.onInputsUpdated(),console.log("%c  "+a.outputs.sum+"  ","background: #333333; color: #00dd00");var I=0,f=0;function h(){this.inputs={name:null,visible:!1,color:"yellow",opacity:1},this.update=function(){const t=this.context.three;this.material.color=new t.Color(this.inputs.color),this.material.opacity=this.inputs.opacity},this.onInit=function(){const t=this.context.three;var o=new t.BoxGeometry(.5,.5,.5);this.material=new t.MeshLambertMaterial,this.material.color=new t.Color(this.inputs.color),this.material.transparent=!0,this.material.opacity=this.inputs.opacity;var e=new t.Mesh(o,this.material);this.outputs.objectRoot=e,this.outputs.collider=e},this.onEvent=function(t){const o=this.context.three;if("INTERACTION.HOVER"==t&&I%2==0?(this.material.color=new o.Color(this.inputs.color),I++):"INTERACTION.HOVER"==t&&I%2!=0&&(this.inputs.color="royalblue",this.material.color=new o.Color(this.inputs.color),I++),"INTERACTION.DRAG"==t){var e=d();k.obj3D.position.set(e[0],.5,e[2])}},this.onTick=function(t){}}t.Scene.register("testy",(function(){return new h}));var N=[];function m(){this.inputs={name:null,visible:!1,color:"white",opacity:1},this.update=function(){const t=this.context.three;this.material.color=new t.Color(this.inputs.color),this.material.opacity=this.inputs.opacity},this.onInit=function(){const t=this.context.three;var o=new t.CylinderGeometry(.5,.5,.01,50);this.material=new t.MeshLambertMaterial,this.material.color=new t.Color(this.inputs.color),this.material.transparent=!0,this.material.opacity=this.inputs.opacity;var e=new t.Mesh(o,this.material);this.outputs.objectRoot=e,this.outputs.collider=e},this.onEvent=function(t){if("INTERACTION.DRAG"==t){var o=d();T.obj3D.position.set(o[0],0,o[2]),N=o}},this.onTick=function(t){}}t.Scene.register("spawn",(function(){return new m}));const T=yield t.Scene.createNode(),R=T.addComponent("spawn");R.events["INTERACTION.HOVER"]=!0,R.events["INTERACTION.DRAG"]=!0,R.events["INTERACTION.CLICK"]=!0,T.obj3D.position.set(-6,0,5.5),R.inputs.opacity=1,T.start(),document.getElementById("clickMe").onclick=function(){console.log("color change"),B.inputs.color="green"},document.getElementById("clickMe2").onclick=function(){if(1!=B.inputs.opacity)for(;B.inputs.opacity<1;)B.inputs.opacity=B.inputs.opacity+1e-4,B.update(),console.log("while "+B.inputs.opacity)},document.getElementById("clickMe3").onclick=function(){B.inputs.opacity=0};var v=[],C=[],E=0,y=0,b=0;document.getElementById("clickMe4").onclick=function(){return e(this,void 0,void 0,(function*(){console.log("Box Selected: "+y+"\nBox Index: "+E),C[E]=yield t.Scene.createNode(),v[E]=C[E].addComponent("testy"),C[E].obj3D.position.set(N[0],.5,N[2]),v[E].inputs.color="yellow",v[E].events["INTERACTION.HOVER"]=!0,v[E].events["INTERACTION.DRAG"]=!0,v[E].events["INTERACTION.CLICK"]=!0,v[E].inputs.name=E,v[E].onEvent=function(t){if("INTERACTION.CLICK"==t&&(b=y,y=this.inputs.name,console.log(y)),"INTERACTION.DRAG"==t){console.log(E);var o=d();C[y].obj3D.position.set(o[0],.5,o[2])}},C[E].start(),E++}))},document.getElementById("clickMe5").onclick=function(){return e(this,void 0,void 0,(function*(){console.log(C),C[y].stop(),console.log(C)}))};var A=[],O=[],D=0,g=0,j=0;document.getElementById("clickMe6").onclick=function(){return e(this,void 0,void 0,(function*(){O[D]=yield t.Scene.createNode(),A[D]=O[D].addComponent(t.Scene.Component.FBX_LOADER,{url:"./fbx/Telecom/Telecom.fbx"}),A[D].inputs.localScale={x:.022,y:.022,z:.022},O[D].obj3D.position.set(N[0],0,N[2]),A[D].events["INTERACTION.HOVER"]=!0,A[D].events["INTERACTION.DRAG"]=!0,A[D].events["INTERACTION.CLICK"]=!0,A[D].name=D,console.log(A[D].name),console.log(A[D]),A[D].onEvent=function(o){if("INTERACTION.CLICK"==o&&(j=g,console.log(j),g=this.name,console.log(g)),"INTERACTION.DRAG"==o){var e=d();1!=e[3]&&-1!=e[3]||(O[g].obj3D.position.z=e[2]),1==e[4]&&O[g].obj3D.position.set(e[0],0,e[2]),1!=e[5]&&-1!=e[5]||(O[g].obj3D.position.x=e[0]),console.log(D),console.log(t.Pointer)}},O[D].start(),D++}))},document.getElementById("clickMe7").onclick=function(){return e(this,void 0,void 0,(function*(){console.log(A),O[g].stop(),console.log(A)}))},t.Scene.register("box",(function(){return new p}));const x=yield t.Scene.createNode(),S=yield t.Scene.createNode(),w=yield t.Scene.createNode(),G=yield t.Scene.createNode(),M=yield t.Scene.createNode(),k=yield t.Scene.createNode(),B=k.addComponent("testy");k.obj3D.position.set(-5,.5,5.5),k.start();const H=x.addComponent(t.Scene.Component.FBX_LOADER,{url:"./fbx/Telecom/Telecom.fbx"}),L=S.addComponent(t.Scene.Component.FBX_LOADER,{url:"./fbx/Nokia/Nokia.fbx"}),_=w.addComponent(t.Scene.Component.FBX_LOADER,{url:"./fbx/Sageon/Sageon.fbx"}),P=G.addComponent(t.Scene.Component.FBX_LOADER,{url:"./fbx/Wall/Wall.fbx"}),V=M.addComponent(t.Scene.Component.FBX_LOADER,{url:"./fbx/randy/voltage.fbx"});M.obj3D.transparent=!0,M.obj3D.opacity=.5,P.inputs.localScale={x:1,y:1,z:1},H.inputs.localScale={x:.022,y:.022,z:.022},L.inputs.localScale={x:.02,y:.02,z:.02},_.inputs.localScale={x:.001,y:.001,z:.001},P.onEvent=function(t){if("INTERACTION.DRAG"==t&&"INTERACTION.DRAG"==t){var o=d();G.obj3D.position.set(o[0],0,5.2)}},L.onEvent=function(t){if("INTERACTION.DRAG"==t&&"INTERACTION.DRAG"==t){var o=d();S.obj3D.position.set(o[0],.75,o[2])}},_.onEvent=function(t){if("INTERACTION.DRAG"==t&&"INTERACTION.DRAG"==t){var o=d();w.obj3D.position.set(-10.6,0,o[2])}},V.onEvent=function(t){if("INTERACTION.DRAG"==t&&"INTERACTION.DRAG"==t){var o=d();M.obj3D.position.set(-2.75,o[1],4.8)}},M.obj3D.castShadow=!0,console.log(M),H.onEvent=function(t){if(("INTERACTION.HOVER"==t&&f%2==0||"INTERACTION.HOVER"==t&&f%2!=0)&&f++,"INTERACTION.DRAG"==t&&"INTERACTION.DRAG"==t){var o=d();x.obj3D.position.set(o[0],0,o[2])}},S.obj3D.position.set(-1.135,.763,.777),x.obj3D.position.set(-7,0,7),x.obj3D.rotation.y=90*Math.PI/180,G.obj3D.position.set(-2.559,0,5.2),w.obj3D.position.set(-10.6,0,4.097),w.obj3D.rotation.y=90*Math.PI/180,S.obj3D.rotation.y=180*Math.PI/180,M.obj3D.rotation.y=0*Math.PI/180,M.obj3D.position.set(-2.75,1,4.8),x.obj3D.visible=!1,S.obj3D.visible=!1,w.obj3D.visible=!1,G.obj3D.visible=!1,M.start(),B.events["INTERACTION.CLICK"]=!0,B.events["INTERACTION.HOVER"]=!0,B.events["INTERACTION.DRAG"]=!0,H.events["INTERACTION.HOVER"]=!0,H.events["INTERACTION.DRAG"]=!0,_.events["INTERACTION.HOVER"]=!0,_.events["INTERACTION.DRAG"]=!0,L.events["INTERACTION.HOVER"]=!0,L.events["INTERACTION.DRAG"]=!0,P.events["INTERACTION.HOVER"]=!0,P.events["INTERACTION.DRAG"]=!0,V.events["INTERACTION.HOVER"]=!0,V.events["INTERACTION.DRAG"]=!0;const z=function(){requestAnimationFrame(z),B.update(),0!=E&&(v[b].inputs.color="yellow",v[b].update(),v[y].inputs.color="orange",v[y].update())};z()}))}))}]);
//# sourceMappingURL=app.bundle.js.map