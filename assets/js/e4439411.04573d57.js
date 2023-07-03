"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7902],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(k,s(s({ref:t},u),{},{components:n})):r.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46300:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(50012);function i(e){let{path:t}=e;const[n]=(0,a.Nk)("docusaurus.tab.js-ts"),i=t.lastIndexOf("{"),s=t.slice(i+1,t.length-1),[o,l]=s.split(","),p=t.slice(0,i);return r.createElement("code",null,p+("js"===n?o:l))}},75281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));n(46300),n(44996);const i={title:"Testing"},s=void 0,o={unversionedId:"guides/testing",id:"guides/testing",title:"Testing",description:"Wasp is in beta, so keep in mind there might be some kinks / bugs, and possibly some changes with testing support in the future.",source:"@site/docs/guides/testing.md",sourceDirName:"guides",slug:"/guides/testing",permalink:"/docs/guides/testing",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/guides/testing.md",tags:[],version:"current",frontMatter:{title:"Testing"},sidebar:"docs",previous:{title:"TypeScript Support",permalink:"/docs/typescript"},next:{title:"Sending Emails",permalink:"/docs/guides/sending-emails"}},l={},p=[{value:"Test File Structure",id:"test-file-structure",level:2},{value:"Running Tests",id:"running-tests",level:2},{value:"Examples",id:"examples",level:2},{value:"Unit Tests",id:"unit-tests",level:3},{value:"React Component Tests",id:"react-component-tests",level:3},{value:"React Testing Helpers",id:"react-testing-helpers",level:4}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Wasp is in beta, so keep in mind there might be some kinks / bugs, and possibly some changes with testing support in the future.\nIf you encounter any issues, reach out to us on ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord")," and we will make sure to help you out!")),(0,a.kt)("h1",{id:"testing-your-react-app"},"Testing your React app"),(0,a.kt)("p",null,"Wasp enables you to quickly and easily write both unit tests and React component tests for your frontend code. Because we already use ",(0,a.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite"),", we also support testing the web app by giving you an integrated ",(0,a.kt)("a",{parentName:"p",href:"https://vitest.dev/"},"Vitest")," experience out of the box."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Included Libraries"),(0,a.kt)("div",null,(0,a.kt)("p",null,"  ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/vitest"},(0,a.kt)("inlineCode",{parentName:"a"},"vitest")),": Unit test framework with native Vite support."),(0,a.kt)("p",null,"  ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@vitest/ui"},(0,a.kt)("inlineCode",{parentName:"a"},"@vitest/ui")),": A nice UI for seeing your test results."),(0,a.kt)("p",null,"  ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jsdom"},(0,a.kt)("inlineCode",{parentName:"a"},"jsdom")),": A web browser test environment for Node.js."),(0,a.kt)("p",null,"  ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@testing-library/react"},(0,a.kt)("inlineCode",{parentName:"a"},"@testing-library/react"))," / ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@testing-library/jest-dom"},(0,a.kt)("inlineCode",{parentName:"a"},"@testing-library/jest-dom")),": Testing helpers."),(0,a.kt)("p",null,"  ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/msw"},(0,a.kt)("inlineCode",{parentName:"a"},"msw")),": A server mocking library."))),(0,a.kt)("h2",{id:"test-file-structure"},"Test File Structure"),(0,a.kt)("p",null,"Unit tests should live under your ",(0,a.kt)("inlineCode",{parentName:"p"},"src/client")," directory and have an extension that is compatible with ",(0,a.kt)("a",{parentName:"p",href:"https://vitest.dev/config/#include"},"these glob pattern defaults"),". Some of the files Vitest would pick up automatically: ",(0,a.kt)("inlineCode",{parentName:"p"},"yourFile.test.ts")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"YourComponent.test.jsx"),"."),(0,a.kt)("p",null,"Within test files, you can import things to test using relative paths. For example, if you made a component called ",(0,a.kt)("inlineCode",{parentName:"p"},"Counter.jsx"),", now you can test it by adding a file alongside it called ",(0,a.kt)("inlineCode",{parentName:"p"},"Counter.test.jsx"),", which would just import from ",(0,a.kt)("inlineCode",{parentName:"p"},"'./Counter'"),"."),(0,a.kt)("h2",{id:"running-tests"},"Running Tests"),(0,a.kt)("p",null,"Running ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp test client")," will execute Vitest in watch mode, and watch your Wasp source tree for any changes to compile as well."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you want to see a live-updating UI, you can pass a ",(0,a.kt)("inlineCode",{parentName:"li"},"--ui")," option, like so: ",(0,a.kt)("inlineCode",{parentName:"li"},"wasp test client --ui")),(0,a.kt)("li",{parentName:"ul"},"If you'd like to just run the tests once and exit (for example, in CI), you can pass ",(0,a.kt)("inlineCode",{parentName:"li"},"run"),", like so: ",(0,a.kt)("inlineCode",{parentName:"li"},"wasp test client run"))),(0,a.kt)("p",null,"In fact, anything after ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp test client")," gets passed to Vitest directly, so check out ",(0,a.kt)("a",{parentName:"p",href:"https://vitest.dev/guide/cli.html"},"their CLI docs")," for more."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"You should not run ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp test")," while running ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp start"),", as both will attempt to compile and write your project to ",(0,a.kt)("inlineCode",{parentName:"p"},".wasp/out"),".")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"unit-tests"},"Unit Tests"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/client/Todo.test.ts",title:"src/client/Todo.test.ts"},"import { test, expect } from 'vitest'\n\nimport { areThereAnyTasks } from './Todo'\n\ntest('areThereAnyTasks', () => {\n  expect(areThereAnyTasks([])).toBe(false)\n})\n")),(0,a.kt)("h3",{id:"react-component-tests"},"React Component Tests"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/client/Todo.test.tsx",title:"src/client/Todo.test.tsx"},"import { test, expect } from 'vitest'\nimport { screen } from '@testing-library/react'\n\nimport { mockServer, renderInContext } from '@wasp/test'\nimport getTasks from '@wasp/queries/getTasks'\nimport Todo from './Todo'\n\nconst { mockQuery } = mockServer()\n\nconst mockTasks = [{\n  id: 1,\n  description: 'test todo 1',\n  isDone: true,\n  userId: 1\n}]\n\ntest('handles mock data', async () => {\n  mockQuery(getTasks, mockTasks)\n\n  renderInContext(<Todo />)\n\n  await screen.findByText('test todo 1')\n\n  expect(screen.getByRole('checkbox')).toBeChecked()\n\n  screen.debug()\n})\n")),(0,a.kt)("h4",{id:"react-testing-helpers"},"React Testing Helpers"),(0,a.kt)("p",null,"Wasp provides two React testing helpers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mockQuery"),": Takes a Wasp Query to mock and the JSON data to return.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This is helpful if your Query uses ",(0,a.kt)("inlineCode",{parentName:"li"},"useQuery"),"."),(0,a.kt)("li",{parentName:"ul"},"Behind the scenes, this uses ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/msw"},(0,a.kt)("inlineCode",{parentName:"a"},"msw"))," to create a server request handler that responds with the provided JSON to an HTTP request for the operation's endpoint."),(0,a.kt)("li",{parentName:"ul"},"Request handlers are cleared after each test."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mockApi"),": Similar to ",(0,a.kt)("inlineCode",{parentName:"li"},"mockQuery"),", but for mocking ",(0,a.kt)("inlineCode",{parentName:"li"},"api"),"s instead.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Instead of a Wasp Query, it takes a route of the shape: ",(0,a.kt)("inlineCode",{parentName:"li"},"mockApi({ method: HttpMethod.Get, path: '/foo/bar' }, { res: 'hello' })"),"."),(0,a.kt)("li",{parentName:"ul"},"You can import ",(0,a.kt)("inlineCode",{parentName:"li"},"HttpMethod")," like so: ",(0,a.kt)("inlineCode",{parentName:"li"},"import { HttpMethod } from '@wasp/types'"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"renderInContext"),": Takes a React component, wraps it inside a ",(0,a.kt)("inlineCode",{parentName:"li"},"QueryClientProvider")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Router"),", and renders it.")),(0,a.kt)("h1",{id:"testing-your-server-side-code"},"Testing your server-side code"),(0,a.kt)("p",null,"Coming soon!"))}m.isMDXComponent=!0}}]);