"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[5370],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},20169:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={title:"Rancher Deployment Strategy"},i=void 0,s={unversionedId:"reference-guides/best-practices/rancher-server/rancher-deployment-strategy",id:"version-2.6/reference-guides/best-practices/rancher-server/rancher-deployment-strategy",title:"Rancher Deployment Strategy",description:"There are two recommended deployment strategies for a Rancher instance that manages downstream Kubernetes clusters. Each one has its own pros and cons. Read more about which one would fit best for your use case:",source:"@site/versioned_docs/version-2.6/reference-guides/best-practices/rancher-server/rancher-deployment-strategy.md",sourceDirName:"reference-guides/best-practices/rancher-server",slug:"/reference-guides/best-practices/rancher-server/rancher-deployment-strategy",permalink:"/v2.6/reference-guides/best-practices/rancher-server/rancher-deployment-strategy",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/best-practices/rancher-server/rancher-deployment-strategy.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"Rancher Deployment Strategy"},sidebar:"tutorialSidebar",previous:{title:"Installing Rancher in a vSphere Environment",permalink:"/v2.6/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere"},next:{title:"Tips for Running Rancher",permalink:"/v2.6/reference-guides/best-practices/rancher-server/tips-for-running-rancher"}},l={},c=[{value:"Hub &amp; Spoke Strategy",id:"hub--spoke-strategy",level:2},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3},{value:"Regional Strategy",id:"regional-strategy",level:2},{value:"Pros",id:"pros-1",level:3},{value:"Cons",id:"cons-1",level:3}],u={toc:c};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are two recommended deployment strategies for a Rancher instance that manages downstream Kubernetes clusters. Each one has its own pros and cons. Read more about which one would fit best for your use case:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#hub-and-spoke-strategy"},"Hub and Spoke")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#regional-strategy"},"Regional"))),(0,a.kt)("h2",{id:"hub--spoke-strategy"},"Hub & Spoke Strategy"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In this deployment scenario, there is a single Rancher instance managing Kubernetes clusters across the globe. The Rancher instance would be run on a high-availability Kubernetes cluster, and there would be impact due to latencies."),(0,a.kt)("h3",{id:"pros"},"Pros"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Single control plane interface to view/see all regions and environments."),(0,a.kt)("li",{parentName:"ul"},"Kubernetes does not require Rancher to operate and can tolerate losing connectivity to the Rancher instance.")),(0,a.kt)("h3",{id:"cons"},"Cons"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Subject to network latencies."),(0,a.kt)("li",{parentName:"ul"},"If Rancher goes down, global provisioning of new services is unavailable until it is restored. However, each Kubernetes cluster can continue to be managed individually.")),(0,a.kt)("h2",{id:"regional-strategy"},"Regional Strategy"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In the regional deployment model a Rancher instance is deployed in close proximity to the downstream Kubernetes clusters."),(0,a.kt)("h3",{id:"pros-1"},"Pros"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rancher functionality in regions stay operational if a Rancher instance in another region goes down."),(0,a.kt)("li",{parentName:"ul"},"Network latency between Rancher and downstream clusters is greatly reduced, improving the performance of functionality in Rancher."),(0,a.kt)("li",{parentName:"ul"},"Upgrades of Rancher can be done independently per region.")),(0,a.kt)("h3",{id:"cons-1"},"Cons"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Overhead of managing multiple Rancher installations."),(0,a.kt)("li",{parentName:"ul"},"Visibility into Kubernetes clusters in different regions requires multiple interfaces/panes of glass."),(0,a.kt)("li",{parentName:"ul"},"Deploying multi-cluster apps in Rancher requires repeating the process for each Rancher server.")))}p.isMDXComponent=!0}}]);