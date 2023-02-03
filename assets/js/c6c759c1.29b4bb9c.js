"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[88205],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>h});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),h=a,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return t?n.createElement(g,s(s({ref:r},p),{},{components:t})):n.createElement(g,s({ref:r},p))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},73765:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={title:"Rancher Deployment Strategy"},s=void 0,i={unversionedId:"reference-guides/best-practices/rancher-server/rancher-deployment-strategy",id:"version-2.5/reference-guides/best-practices/rancher-server/rancher-deployment-strategy",title:"Rancher Deployment Strategy",description:"There are two recommended deployment strategies for a Rancher server that manages downstream Kubernetes clusters. Each one has its own pros and cons. Read more about which one would fit best for your use case:",source:"@site/versioned_docs/version-2.5/reference-guides/best-practices/rancher-server/rancher-deployment-strategy.md",sourceDirName:"reference-guides/best-practices/rancher-server",slug:"/reference-guides/best-practices/rancher-server/rancher-deployment-strategy",permalink:"/v2.5/reference-guides/best-practices/rancher-server/rancher-deployment-strategy",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/best-practices/rancher-server/rancher-deployment-strategy.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Rancher Deployment Strategy"},sidebar:"tutorialSidebar",previous:{title:"Installing Rancher in a vSphere Environment",permalink:"/v2.5/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere"},next:{title:"Tips for Running Rancher",permalink:"/v2.5/reference-guides/best-practices/rancher-server/tips-for-running-rancher"}},l={},c=[{value:"Hub &amp; Spoke Strategy",id:"hub--spoke-strategy",level:2},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3},{value:"Regional Strategy",id:"regional-strategy",level:2},{value:"Pros",id:"pros-1",level:3},{value:"Cons",id:"cons-1",level:3}],p={toc:c};function u(e){let{components:r,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are two recommended deployment strategies for a Rancher server that manages downstream Kubernetes clusters. Each one has its own pros and cons. Read more about which one would fit best for your use case:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#hub-and-spoke-strategy"},"Hub and Spoke")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#regional-strategy"},"Regional"))),(0,a.kt)("h2",{id:"hub--spoke-strategy"},"Hub & Spoke Strategy"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In this deployment scenario, there is a single Rancher control plane managing Kubernetes clusters across the globe. The control plane would be run on a high-availability Kubernetes cluster, and there would be impact due to latencies."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(56904).Z,width:"1332",height:"749"})),(0,a.kt)("h3",{id:"pros"},"Pros"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Environments could have nodes and network connectivity across regions."),(0,a.kt)("li",{parentName:"ul"},"Single control plane interface to view/see all regions and environments."),(0,a.kt)("li",{parentName:"ul"},"Kubernetes does not require Rancher to operate and can tolerate losing connectivity to the Rancher control plane.")),(0,a.kt)("h3",{id:"cons"},"Cons"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Subject to network latencies."),(0,a.kt)("li",{parentName:"ul"},"If the control plane goes out, global provisioning of new services is unavailable until it is restored. However, each Kubernetes cluster can continue to be managed individually.")),(0,a.kt)("h2",{id:"regional-strategy"},"Regional Strategy"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In the regional deployment model a control plane is deployed in close proximity to the compute nodes."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(38039).Z,width:"1331",height:"557"})),(0,a.kt)("h3",{id:"pros-1"},"Pros"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rancher functionality in regions stay operational if a control plane in another region goes down."),(0,a.kt)("li",{parentName:"ul"},"Network latency is greatly reduced, improving the performance of functionality in Rancher."),(0,a.kt)("li",{parentName:"ul"},"Upgrades of the Rancher control plane can be done independently per region.")),(0,a.kt)("h3",{id:"cons-1"},"Cons"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Overhead of managing multiple Rancher installations."),(0,a.kt)("li",{parentName:"ul"},"Visibility across global Kubernetes clusters requires multiple interfaces/panes of glass."),(0,a.kt)("li",{parentName:"ul"},"Deploying multi-cluster apps in Rancher requires repeating the process for each Rancher server.")))}u.isMDXComponent=!0},56904:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/hub-and-spoke-e5f8b93bb0f2caaa2932942b77ac2a2f.png"},38039:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/regional-85aa0ca404aa35cee043f324fdbdd3cb.png"}}]);