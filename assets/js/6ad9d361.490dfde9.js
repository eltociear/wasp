"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6650],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,i(i({ref:e},u),{},{components:r})):n.createElement(m,i({ref:e},u))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1734:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905)),a=r(4996);const i={title:"Introduction"},p=void 0,l={unversionedId:"tutorials/todo-app",id:"tutorials/todo-app",title:"Introduction",description:"If you haven't yet set up Wasp, check out Getting Started first for installation instructions, and then continue with the tutorial.",source:"@site/docs/tutorials/todo-app.md",sourceDirName:"tutorials",slug:"/tutorials/todo-app",permalink:"/docs/tutorials/todo-app",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/tutorials/todo-app.md",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"docs",previous:{title:"Pick a Tutorial",permalink:"/docs/pick-a-tutorial"},next:{title:"Creating new project",permalink:"/docs/tutorials/todo-app/01-creating-new-project"}},c={},u=[],s={toc:u};function d(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you haven't yet set up Wasp, check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/"},"Getting Started")," first for installation instructions, and then continue with the tutorial.")),(0,o.kt)("p",null,"Let's build together a simple Todo App in Wasp!"),(0,o.kt)("img",{alt:"How Todo App will work once it is done",src:(0,a.Z)("img/todo-app-tutorial-intro.gif"),style:{border:"1px solid black"}}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"This tutorial will take you step by step through the most important features of Wasp."),(0,o.kt)("p",null,"If you get stuck at any point (or just want to chat), reach out to us on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord")," and we will help you!"),(0,o.kt)("p",null,"You can check out the complete code of the app we are about to build with Wasp ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/main/examples/tutorials/TodoApp"},"here"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you are interested at any moment in what is Wasp actually generating in the background, take a look at ",(0,o.kt)("inlineCode",{parentName:"p"},".wasp/out/")," directory in your project.")))}d.isMDXComponent=!0}}]);