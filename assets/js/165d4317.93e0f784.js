"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[64158],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69251:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={title:"Resource Quota Type Reference"},i=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types",title:"Resource Quota Type Reference",description:"When you create a resource quota, you are configuring the pool of resources available to the project. You can set the following resource limits for the following resource types.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas",slug:"/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Resource Quota Type Reference"},sidebar:"tutorialSidebar",previous:{title:"Setting Container Default Resource Limits",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits"},next:{title:"Setup Guide",permalink:"/v2.0-v2.4/pages-for-subheaders/istio-setup-guide"}},u={},l=[],c={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When you create a resource quota, you are configuring the pool of resources available to the project. You can set the following resource limits for the following resource types."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Resource Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CPU Limit*"),(0,n.kt)("td",{parentName:"tr",align:null},"The maximum amount of CPU (in ",(0,n.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#meaning-of-cpu"},"millicores"),") allocated to the project/namespace.",(0,n.kt)("sup",null,"1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CPU Reservation*"),(0,n.kt)("td",{parentName:"tr",align:null},"The minimum amount of CPU (in millicores) guaranteed to the project/namespace.",(0,n.kt)("sup",null,"1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Memory Limit*"),(0,n.kt)("td",{parentName:"tr",align:null},"The maximum amount of memory (in bytes) allocated to the project/namespace.",(0,n.kt)("sup",null,"1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Memory Reservation*"),(0,n.kt)("td",{parentName:"tr",align:null},"The minimum amount of memory (in bytes) guaranteed to the project/namespace.",(0,n.kt)("sup",null,"1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Storage Reservation"),(0,n.kt)("td",{parentName:"tr",align:null},"The minimum amount of storage (in gigabytes) guaranteed to the project/namespace.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Services Load Balancers"),(0,n.kt)("td",{parentName:"tr",align:null},"The maximum number of load balancers services that can exist in the project/namespace.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Services Node Ports"),(0,n.kt)("td",{parentName:"tr",align:null},"The maximum number of node port services that can exist in the project/namespace.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Pods"),(0,n.kt)("td",{parentName:"tr",align:null},"The maximum number of pods that can exist in the project/namespace in a non-terminal state (i.e., pods with a state of ",(0,n.kt)("inlineCode",{parentName:"td"},".status.phase in (Failed, Succeeded)")," equal to true).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Services"),(0,n.kt)("td",{parentName:"tr",align:null},"The maximum number of services that can exist in the project/namespace.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ConfigMaps"),(0,n.kt)("td",{parentName:"tr",align:null},"The maximum number of ConfigMaps that can exist in the project/namespace.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Persistent Volume Claims"),(0,n.kt)("td",{parentName:"tr",align:null},"The maximum number of persistent volume claims that can exist in the project/namespace.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Replications Controllers"),(0,n.kt)("td",{parentName:"tr",align:null},"The maximum number of replication controllers that can exist in the project/namespace.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Secrets"),(0,n.kt)("td",{parentName:"tr",align:null},"The maximum number of secrets that can exist in the project/namespace.")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("sup",null,"*"))," When setting resource quotas, if you set anything related to CPU or Memory (i.e. limits or reservations) on a project / namespace, all containers will require a respective CPU or Memory field set during creation. As of v2.2.0, a container default resource limit can be set at the same time to avoid the need to explicitly set these limits for every workload. See the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/#requests-vs-limits"},"Kubernetes documentation")," for more details on why this is required.")))}p.isMDXComponent=!0}}]);