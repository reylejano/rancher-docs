"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[28823],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Setting Container Default Resource Limits"},i=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits",title:"Setting Container Default Resource Limits",description:"Available as of v2.2.0",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas",slug:"/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Setting Container Default Resource Limits"},sidebar:"tutorialSidebar",previous:{title:"Overriding the Default Limit for a Namespace",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces"},next:{title:"Resource Quota Type Reference",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types"}},l={},c=[{value:"Editing the Container Default Resource Limit",id:"editing-the-container-default-resource-limit",level:3},{value:"Resource Limit Propagation",id:"resource-limit-propagation",level:3},{value:"Container Resource Quota Types",id:"container-resource-quota-types",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,n.kt)("p",null,"When setting resource quotas, if you set anything related to CPU or Memory (i.e. limits or reservations) on a project / namespace, all containers will require a respective CPU or Memory field set during creation. See the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/#requests-vs-limits"},"Kubernetes documentation")," for more details on why this is required."),(0,n.kt)("p",null,"To avoid setting these limits on each and every container during workload creation, a default container resource limit can be specified on the namespace."),(0,n.kt)("h3",{id:"editing-the-container-default-resource-limit"},"Editing the Container Default Resource Limit"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,n.kt)("p",null,"Edit ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/manage-project-resource-quotas"},"container default resource limit")," when:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You have a CPU or Memory resource quota set on a project, and want to supply the corresponding default values for a container."),(0,n.kt)("li",{parentName:"ul"},"You want to edit the default container resource limit.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the ",(0,n.kt)("strong",{parentName:"li"},"Global")," view, open the cluster containing the project to which you want to edit the container default resource limit."),(0,n.kt)("li",{parentName:"ol"},"From the main menu, select ",(0,n.kt)("strong",{parentName:"li"},"Projects/Namespaces"),"."),(0,n.kt)("li",{parentName:"ol"},"Find the project that you want to edit the container default resource limit. From that project, select ",(0,n.kt)("strong",{parentName:"li"},"\u22ee"," > Edit"),"."),(0,n.kt)("li",{parentName:"ol"},"Expand ",(0,n.kt)("strong",{parentName:"li"},"Container Default Resource Limit")," and edit the values.")),(0,n.kt)("h3",{id:"resource-limit-propagation"},"Resource Limit Propagation"),(0,n.kt)("p",null,"When the default container resource limit is set at a project level, the parameter will be propagated to any namespace created in the project after the limit has been set. For any existing namespace in a project, this limit will not be automatically propagated. You will need to manually set the default container resource limit for any existing namespaces in the project in order for it to be used when creating any containers."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," Before v2.2.0, you could not launch catalog applications that did not have any limits set. With v2.2.0, you can set a default container resource limit on a project and launch any catalog applications.")),(0,n.kt)("p",null,"Once a container default resource limit is configured on a namespace, the default will be pre-populated for any containers created in that namespace. These limits/reservations can always be overridden during workload creation."),(0,n.kt)("h3",{id:"container-resource-quota-types"},"Container Resource Quota Types"),(0,n.kt)("p",null,"The following resource limits can be configured:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Resource Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CPU Limit"),(0,n.kt)("td",{parentName:"tr",align:null},"The maximum amount of CPU (in ",(0,n.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#meaning-of-cpu"},"millicores"),") allocated to the container.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CPU Reservation"),(0,n.kt)("td",{parentName:"tr",align:null},"The minimum amount of CPU (in millicores) guaranteed to the container.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Memory Limit"),(0,n.kt)("td",{parentName:"tr",align:null},"The maximum amount of memory (in bytes) allocated to the container.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Memory Reservation"),(0,n.kt)("td",{parentName:"tr",align:null},"The minimum amount of memory (in bytes) guaranteed to the container.")))))}p.isMDXComponent=!0}}]);