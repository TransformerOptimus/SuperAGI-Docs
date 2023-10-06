"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4479],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(s,".").concat(f)]||u[f]||b[f]||a;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8680:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={},i="Web Scraper",l={unversionedId:"Toolkit/SuperAGI Toolkits/webscraper",id:"Toolkit/SuperAGI Toolkits/webscraper",title:"Web Scraper",description:"The SuperAGI Webscraper Tool lets users perform web scraping, extracting URLs and retrieving the textual content from websites.",source:"@site/docs/Toolkit/SuperAGI Toolkits/webscraper.md",sourceDirName:"Toolkit/SuperAGI Toolkits",slug:"/Toolkit/SuperAGI Toolkits/webscraper",permalink:"/docs/Toolkit/SuperAGI Toolkits/webscraper",draft:!1,editUrl:"https://github.com/TransformerOptimus/SuperAGI-Docs/tree/main/docs/Toolkit/SuperAGI Toolkits/webscraper.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Twitter",permalink:"/docs/Toolkit/SuperAGI Toolkits/twitter"},next:{title:"How to add a Custom Toolkit",permalink:"/docs/Toolkit/custom_toolkit"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Running SuperAGI Web Scraper Tool",id:"running-superagi-web-scraper-tool",level:2}],c={toc:p},u="wrapper";function b(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"web-scraper"},"Web Scraper"),(0,n.kt)("p",null,"The SuperAGI Webscraper Tool lets users perform web scraping, extracting URLs and retrieving the textual content from websites."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"URL Extraction:")," The SuperAGI Web Scraper Tool can extract URLs from web pages, allowing users to collect and analyze links for further processing.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Text Retrieval:")," The tool is capable of retrieving textual content from websites, enabling users to gather and analyze data from various sources."))),(0,n.kt)("p",null,"You'll be able to use the Web Scraper Tool on the fly once you have setup SuperAGI."),(0,n.kt)("h2",{id:"running-superagi-web-scraper-tool"},"Running SuperAGI Web Scraper Tool"),(0,n.kt)("p",null,"You can simply ask your agent to read or go through a certain website or URL, and it'll be able to retrieve it's textual information from there."))}b.isMDXComponent=!0}}]);