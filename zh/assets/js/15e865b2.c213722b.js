"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[2181],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=a,m=d["".concat(o,".").concat(h)]||d[h]||u[h]||i;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42080:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"\u5728 vSphere \u63a7\u5236\u53f0\u4e2d\u521b\u5efa\u51ed\u8bc1"},l=void 0,s={unversionedId:"how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials",id:"how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials",title:"\u5728 vSphere \u63a7\u5236\u53f0\u4e2d\u521b\u5efa\u51ed\u8bc1",description:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u521b\u5efa vSphere \u7528\u6237\u540d\u548c\u5bc6\u7801\u3002\u4f60\u9700\u8981\u5c06\u8fd9\u4e9b vSphere \u51ed\u8bc1\u63d0\u4f9b\u7ed9 Rancher\uff0cRancher \u624d\u80fd\u5728 vSphere \u4e2d\u914d\u7f6e\u8d44\u6e90\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials.md",sourceDirName:"how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere",slug:"/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials",permalink:"/zh/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",frontMatter:{title:"\u5728 vSphere \u63a7\u5236\u53f0\u4e2d\u521b\u5efa\u51ed\u8bc1"},sidebar:"tutorialSidebar",previous:{title:"\u5728 vSphere \u4e2d\u914d\u7f6e Kubernetes \u96c6\u7fa4",permalink:"/zh/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere"},next:{title:"\u521b\u5efa vSphere \u865a\u62df\u673a\u6a21\u677f",permalink:"/zh/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-a-vm-template"}},o={},p=[],c={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u521b\u5efa vSphere \u7528\u6237\u540d\u548c\u5bc6\u7801\u3002\u4f60\u9700\u8981\u5c06\u8fd9\u4e9b vSphere \u51ed\u8bc1\u63d0\u4f9b\u7ed9 Rancher\uff0cRancher \u624d\u80fd\u5728 vSphere \u4e2d\u914d\u7f6e\u8d44\u6e90\u3002"),(0,a.kt)("p",null,"\u4e0b\u8868\u5217\u51fa\u4e86 vSphere \u7528\u6237\u8d26\u53f7\u6240\u9700\u7684\u6743\u9650\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7279\u6743\u7ec4"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u64cd\u4f5c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Datastore"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AllocateSpace ",(0,a.kt)("br",null)," Browse ",(0,a.kt)("br",null)," FileManagement (Low level file operations) ",(0,a.kt)("br",null)," UpdateVirtualMachineFiles ",(0,a.kt)("br",null)," UpdateVirtualMachineMetadata")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5168\u5c40"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Set custom attribute")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u7f51\u7edc"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Assign")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8d44\u6e90"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AssignVMToPool")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u865a\u62df\u673a"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Config (All) ",(0,a.kt)("br",null)," GuestOperations (All) ",(0,a.kt)("br",null)," Interact (All) ",(0,a.kt)("br",null)," Inventory (All) ",(0,a.kt)("br",null)," Provisioning (All)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"vSphere \u6807\u7b7e"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Assign or Unassign vSphere Tag ",(0,a.kt)("br",null)," Assign or Unassign vSphere Tag on Object")))),(0,a.kt)("p",null,"\u4ee5\u4e0b\u6b65\u9aa4\u521b\u5efa\u5177\u6709\u6240\u9700\u6743\u9650\u7684\u89d2\u8272\uff0c\u7136\u540e\u5728 vSphere \u63a7\u5236\u53f0\u4e2d\u5c06\u89d2\u8272\u5206\u914d\u7ed9\u65b0\u7528\u6237\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728 ",(0,a.kt)("strong",{parentName:"p"},"vSphere")," \u63a7\u5236\u53f0\u4e2d\u8f6c\u5230 ",(0,a.kt)("strong",{parentName:"p"},"Administration")," \u9875\u9762\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8f6c\u5230 ",(0,a.kt)("strong",{parentName:"p"},"Roles")," \u9009\u9879\u5361\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u89d2\u8272\u3002\u4e3a\u65b0\u89d2\u8272\u547d\u540d\uff0c\u5e76\u9009\u62e9\u4e0a\u9762\u6743\u9650\u8868\u4e2d\u5217\u51fa\u7684\u6743\u9650\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(49802).Z,width:"3360",height:"2100"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8f6c\u5230 ",(0,a.kt)("strong",{parentName:"p"},"Users and Groups")," \u9009\u9879\u5361\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u7528\u6237\u3002\u586b\u5199\u8868\u5355\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"OK"),"\u3002\u8bf7\u52a1\u5fc5\u8bb0\u4e0b\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u56e0\u4e3a\u5728 Rancher \u4e2d\u914d\u7f6e\u8282\u70b9\u6a21\u677f\u65f6\u5c06\u9700\u8981\u7528\u5230\u8fd9\u4e9b\u4fe1\u606f\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(31221).Z,width:"3360",height:"2100"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8f6c\u5230 ",(0,a.kt)("strong",{parentName:"p"},"Global Permissions")," \u9009\u9879\u5361\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5168\u5c40\u6743\u9650\u3002\u6dfb\u52a0\u4e4b\u524d\u521b\u5efa\u7684\u7528\u6237\uff0c\u5e76\u4e3a\u5176\u5206\u914d\u4e4b\u524d\u521b\u5efa\u7684\u89d2\u8272\u3002\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"OK"),"\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(20399).Z,width:"3360",height:"2100"})),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(41489).Z,width:"3360",height:"2100"})))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u4f60\u5df2\u62e5\u6709 Rancher \u6240\u9700\u7684\u64cd\u4f5c vSphere \u8d44\u6e90\u7684\u51ed\u8bc1\u3002"))}u.isMDXComponent=!0},41489:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/globalpermissionrole-75b571d28828939a3a5b9b133cd0e7f4.png"},20399:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/globalpermissionuser-6629c43e22f678b8197ec3775b82ab20.png"},49802:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancherroles1-45cbc752f9456c0a0dc646e79bf3e4a0.png"},31221:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancheruser-cc7f8540d23135de045bf01a67b35abd.png"}}]);