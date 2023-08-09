"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6650],{3905:(t,e,o)=>{o.d(e,{Zo:()=>s,kt:()=>m});var r=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function p(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},a=Object.keys(t);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var u=r.createContext({}),l=function(t){var e=r.useContext(u),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},s=function(t){var e=l(t.components);return r.createElement(u.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var o=t.components,n=t.mdxType,a=t.originalType,u=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),c=l(o),f=n,m=c["".concat(u,".").concat(f)]||c[f]||d[f]||a;return o?r.createElement(m,i(i({ref:e},s),{},{components:o})):r.createElement(m,i({ref:e},s))}));function m(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=o.length,i=new Array(a);i[0]=f;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p[c]="string"==typeof t?t:n,i[1]=p;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},71734:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var r=o(87462),n=(o(67294),o(3905)),a=o(44996);const i={title:"Introduction"},p=void 0,u={unversionedId:"tutorials/todo-app",id:"tutorials/todo-app",title:"Introduction",description:"If you want to run Wasp locally and haven't yet set it up, check out Quick Start first for installation instructions, and then continue with the tutorial.",source:"@site/docs/tutorials/todo-app.md",sourceDirName:"tutorials",slug:"/tutorials/todo-app",permalink:"/docs/tutorials/todo-app",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/docs/tutorials/todo-app.md",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"docs",previous:{title:"Quick Start",permalink:"/docs/quick-start"},next:{title:"Creating a new project",permalink:"/docs/tutorials/todo-app/01-creating-new-project"}},l={},s=[],c={toc:s},d="wrapper";function f(t){let{components:e,...o}=t;return(0,n.kt)(d,(0,r.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If you want to run Wasp locally and haven't yet set it up, check out ",(0,n.kt)("a",{parentName:"p",href:"/docs/quick-start"},"Quick Start")," first for installation instructions, and then continue with the tutorial.")),(0,n.kt)("p",null,"Let's build a simple Todo App in Wasp!"),(0,n.kt)("img",{alt:"How Todo App will work once it is done",src:(0,a.Z)("img/todo-app-tutorial-intro.gif"),style:{border:"1px solid black"}}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"This tutorial will take you step by step through the most important features of Wasp."),(0,n.kt)("p",null,"If you get stuck at any point (or just want to chat), reach out to us on ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord")," and we will help you!"),(0,n.kt)("p",null,"You can check out the complete code of the app we are about to build with Wasp ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/release/examples/tutorials/TodoApp"},"here"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you are interested at any moment in what is Wasp actually generating in the background, take a look at ",(0,n.kt)("inlineCode",{parentName:"p"},".wasp/out/")," directory in your project.")),(0,n.kt)("admonition",{title:"See Wasp in Action",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Prefer Videos? We have a YouTube tutorial which walks you through building this Todo App step by step. Check it out ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/R8uOu6ZEr5s"},"here"),"."),(0,n.kt)("p",{parentName:"admonition"},"We've also set up an in-browser dev environment for you on Gitpod, which allows you to see and edit the finished ToDo app with no setup required. "),(0,n.kt)("p",{align:"center"},(0,n.kt)("a",{href:"https://gitpod.io/#https://github.com/wasp-lang/gitpod-template"},(0,n.kt)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg"})))))}f.isMDXComponent=!0}}]);