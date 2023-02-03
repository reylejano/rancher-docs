"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[79095],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},o=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),k=p(r),m=n,c=k["".concat(i,".").concat(m)]||k[m]||d[m]||l;return r?a.createElement(c,s(s({ref:t},o),{},{components:r})):a.createElement(c,s({ref:t},o))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=k;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,s[1]=u;for(var p=2;p<l;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},30059:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var a=r(87462),n=(r(67294),r(3905)),l=r(5156);const s={title:"\u6982\u8ff0"},u=void 0,i={unversionedId:"getting-started/overview",id:"version-2.6/getting-started/overview",title:"\u6982\u8ff0",description:"Rancher \u662f\u4e00\u4e2a\u4e3a\u4f7f\u7528\u5bb9\u5668\u7684\u516c\u53f8\u6253\u9020\u7684\u5bb9\u5668\u7ba1\u7406\u5e73\u53f0\u3002Rancher \u4f7f\u5f97\u5f00\u53d1\u8005\u53ef\u4ee5\u968f\u5904\u8fd0\u884c Kubernetes\uff08Run Kubernetes Everywhere\uff09\uff0c\u6ee1\u8db3 IT \u9700\u6c42\u89c4\u8303\uff0c\u8d4b\u80fd DevOps \u56e2\u961f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/getting-started/overview.md",sourceDirName:"getting-started",slug:"/getting-started/overview",permalink:"/zh/v2.6/getting-started/overview",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/getting-started/overview.md",tags:[],version:"2.6",lastUpdatedAt:1669187684,formattedLastUpdatedAt:"2022\u5e7411\u670823\u65e5",frontMatter:{title:"\u6982\u8ff0"},sidebar:"tutorialSidebar",previous:{title:"\u4ec0\u4e48\u662f Rancher\uff1f",permalink:"/zh/v2.6/"},next:{title:"Rancher \u90e8\u7f72\u5feb\u901f\u5165\u95e8\u6307\u5357",permalink:"/zh/v2.6/pages-for-subheaders/quick-start-guides"}},p={},o=[{value:"Run Kubernetes Everywhere",id:"run-kubernetes-everywhere",level:2},{value:"\u6ee1\u8db3 IT \u9700\u6c42\u89c4\u8303",id:"\u6ee1\u8db3-it-\u9700\u6c42\u89c4\u8303",level:2},{value:"\u8d4b\u80fd DevOps \u56e2\u961f",id:"\u8d4b\u80fd-devops-\u56e2\u961f",level:2},{value:"Rancher API Server \u7684\u529f\u80fd",id:"rancher-api-server-\u7684\u529f\u80fd",level:2},{value:"\u6388\u6743\u548c\u57fa\u4e8e\u89d2\u8272\u7684\u6743\u9650\u63a7\u5236\uff08RBAC\uff09",id:"\u6388\u6743\u548c\u57fa\u4e8e\u89d2\u8272\u7684\u6743\u9650\u63a7\u5236rbac",level:3},{value:"\u4f7f\u7528 Kubernetes \u7684\u529f\u80fd",id:"\u4f7f\u7528-kubernetes-\u7684\u529f\u80fd",level:3},{value:"\u914d\u7f6e\u4e91\u57fa\u7840\u8bbe\u65bd",id:"\u914d\u7f6e\u4e91\u57fa\u7840\u8bbe\u65bd",level:3},{value:"\u67e5\u770b\u96c6\u7fa4\u4fe1\u606f",id:"\u67e5\u770b\u96c6\u7fa4\u4fe1\u606f",level:3},{value:"\u4f7f\u7528 Rancher \u7f16\u8f91\u4e0b\u6e38\u96c6\u7fa4",id:"\u4f7f\u7528-rancher-\u7f16\u8f91\u4e0b\u6e38\u96c6\u7fa4",level:2}],d={toc:o};function k(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Rancher \u662f\u4e00\u4e2a\u4e3a\u4f7f\u7528\u5bb9\u5668\u7684\u516c\u53f8\u6253\u9020\u7684\u5bb9\u5668\u7ba1\u7406\u5e73\u53f0\u3002Rancher \u4f7f\u5f97\u5f00\u53d1\u8005\u53ef\u4ee5\u968f\u5904\u8fd0\u884c Kubernetes\uff08Run Kubernetes Everywhere\uff09\uff0c\u6ee1\u8db3 IT \u9700\u6c42\u89c4\u8303\uff0c\u8d4b\u80fd DevOps \u56e2\u961f\u3002"),(0,n.kt)("h2",{id:"run-kubernetes-everywhere"},"Run Kubernetes Everywhere"),(0,n.kt)("p",null,"Kubernetes \u5df2\u7ecf\u6210\u4e3a\u5bb9\u5668\u7f16\u6392\u6807\u51c6\u3002\u73b0\u5728\uff0c\u5927\u591a\u6570\u4e91\u548c\u865a\u62df\u5316\u63d0\u4f9b\u5546\u90fd\u63d0\u4f9b\u5bb9\u5668\u7f16\u6392\u670d\u52a1\u3002Rancher \u7528\u6237\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528 Rancher Kubernetes Engine\uff08RKE\uff09\u6216\u4e91 Kubernetes \u670d\u52a1\uff08\u4f8b\u5982 GKE\u3001AKS \u548c EKS\uff09\u521b\u5efa Kubernetes \u96c6\u7fa4\uff0c\u8fd8\u53ef\u4ee5\u5bfc\u5165\u548c\u7ba1\u7406\u4f7f\u7528\u4efb\u4f55 Kubernetes \u53d1\u884c\u7248\u6216\u5b89\u88c5\u7a0b\u5e8f\u521b\u5efa\u7684\u73b0\u6709 Kubernetes \u96c6\u7fa4\u3002"),(0,n.kt)("h2",{id:"\u6ee1\u8db3-it-\u9700\u6c42\u89c4\u8303"},"\u6ee1\u8db3 IT \u9700\u6c42\u89c4\u8303"),(0,n.kt)("p",null,"Rancher \u652f\u6301\u5bf9\u5176\u63a7\u5236\u7684\u6240\u6709 Kubernetes \u96c6\u7fa4\u8fdb\u884c\u96c6\u4e2d\u8ba4\u8bc1\u3001\u8bbf\u95ee\u63a7\u5236\u548c\u76d1\u63a7\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4f60\u7684 Active Directory \u51ed\u8bc1\u8bbf\u95ee\u7531\u4e91\u63d0\u4f9b\u5546\uff08\u4f8b\u5982 GKE\uff09\u6258\u7ba1\u7684 Kubernetes \u96c6\u7fa4\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u6240\u6709\u7528\u6237\u3001\u7ec4\u3001\u9879\u76ee\u3001\u96c6\u7fa4\u548c\u4e91\u670d\u52a1\u7684\u6743\u9650\u63a7\u5236\u7b56\u7565\u548c\u5b89\u5168\u7b56\u7565\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u7ad9\u5f0f\u67e5\u770b Kubernetes \u96c6\u7fa4\u7684\u8fd0\u884c\u72b6\u51b5\u548c\u5bb9\u91cf\u3002")),(0,n.kt)("h2",{id:"\u8d4b\u80fd-devops-\u56e2\u961f"},"\u8d4b\u80fd DevOps \u56e2\u961f"),(0,n.kt)("p",null,"Rancher \u4e3a DevOps \u5de5\u7a0b\u5e08\u63d0\u4f9b\u7b80\u5355\u76f4\u63a5\u7684\u7528\u6237\u754c\u9762\uff0c\u4ee5\u7ba1\u7406\u5176\u5e94\u7528\u8d1f\u8f7d\u3002\u7528\u6237\u4e0d\u9700\u8981\u5bf9 Kubernetes \u6709\u975e\u5e38\u6df1\u5165\u7684\u4e86\u89e3\uff0c\u5373\u53ef\u4f7f\u7528 Rancher\u3002Rancher \u5e94\u7528\u5546\u5e97\u5305\u542b\u4e00\u5957\u5b9e\u7528\u7684 DevOps \u5f00\u53d1\u5de5\u5177\u3002Rancher \u83b7\u5f97\u4e86\u591a\u79cd\u4e91\u539f\u751f\u751f\u6001\u7cfb\u7edf\u4ea7\u54c1\u7684\u8ba4\u8bc1\uff0c\u5305\u62ec\u5b89\u5168\u5de5\u5177\u3001\u76d1\u63a7\u7cfb\u7edf\u3001\u5bb9\u5668\u955c\u50cf\u4ed3\u5e93\u3001\u5b58\u50a8\u548c\u7f51\u7edc\u9a71\u52a8\u7b49\u3002"),(0,n.kt)("p",null,"\u4e0b\u56fe\u8bb2\u8ff0\u4e86 Rancher \u5728 IT \u7ba1\u7406\u56e2\u961f\u548c DevOps \u5f00\u53d1\u56e2\u961f\u4e4b\u95f4\u626e\u6f14\u7684\u89d2\u8272\u3002DevOps \u56e2\u961f\u628a\u4ed6\u4eec\u7684\u5e94\u7528\u90e8\u7f72\u5728\u4ed6\u4eec\u9009\u62e9\u7684\u516c\u6709\u4e91\u6216\u79c1\u6709\u4e91\u4e0a\u3002IT \u7ba1\u7406\u5458\u8d1f\u8d23\u67e5\u770b\u5e76\u7ba1\u7406\u7528\u6237\u3001\u96c6\u7fa4\u3001\u4e91\u670d\u52a1\u7684\u6743\u9650\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5e73\u53f0",src:r(83362).Z,width:"791",height:"245"})),(0,n.kt)("h2",{id:"rancher-api-server-\u7684\u529f\u80fd"},"Rancher API Server \u7684\u529f\u80fd"),(0,n.kt)("p",null,"Rancher API Server \u662f\u57fa\u4e8e\u5d4c\u5165\u5f0f Kubernetes API Server \u548c etcd \u6570\u636e\u5e93\u5efa\u7acb\u7684\uff0c\u5b83\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,n.kt)("h3",{id:"\u6388\u6743\u548c\u57fa\u4e8e\u89d2\u8272\u7684\u6743\u9650\u63a7\u5236rbac"},"\u6388\u6743\u548c\u57fa\u4e8e\u89d2\u8272\u7684\u6743\u9650\u63a7\u5236\uff08RBAC\uff09"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7528\u6237\u7ba1\u7406"),"\uff1aRancher API Server \u9664\u4e86\u7ba1\u7406\u672c\u5730\u7528\u6237\uff0c\u8fd8",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/pages-for-subheaders/authentication-config"},"\u7ba1\u7406\u7528\u6237\u7528\u6765\u8bbf\u95ee\u5916\u90e8\u670d\u52a1\u6240\u9700\u7684\u8ba4\u8bc1\u4fe1\u606f"),"\uff0c\u5982\u767b\u5f55 Active Directory \u548c GitHub \u6240\u9700\u7684\u8d26\u53f7\u5bc6\u7801\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6388\u6743"),"\uff1aRancher API Server \u53ef\u4ee5\u7ba1\u7406",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/pages-for-subheaders/manage-role-based-access-control-rbac"},"\u8bbf\u95ee\u63a7\u5236\u7b56\u7565"),"\u548c",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"\u5b89\u5168\u7b56\u7565"),"\u3002")),(0,n.kt)("h3",{id:"\u4f7f\u7528-kubernetes-\u7684\u529f\u80fd"},"\u4f7f\u7528 Kubernetes \u7684\u529f\u80fd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u914d\u7f6e Kubernetes \u96c6\u7fa4"),"\uff1aRancher API Server \u53ef\u4ee5\u5728\u5df2\u6709\u8282\u70b9\u4e0a",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"\u914d\u7f6e Kubernetes"),"\uff0c\u6216\u8fdb\u884c ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"},"Kubernetes \u7248\u672c\u5347\u7ea7"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7ba1\u7406\u5e94\u7528\u5546\u5e97"),"\uff1aRancher \u652f\u6301\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/pages-for-subheaders/helm-charts-in-rancher"},"Helm Chart \u5e94\u7528\u5546\u5e97"),"\u5b9e\u73b0\u8f7b\u677e\u91cd\u590d\u90e8\u7f72\u5e94\u7528\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7ba1\u7406\u9879\u76ee"),"\uff1a\u9879\u76ee\u7531\u96c6\u7fa4\u4e2d\u591a\u4e2a\u547d\u540d\u7a7a\u95f4\u548c\u8bbf\u95ee\u63a7\u5236\u7b56\u7565\u7ec4\u6210\uff0c\u662f Rancher \u4e2d\u7684\u4e00\u4e2a\u6982\u5ff5\uff0cKubernetes \u4e2d\u5e76\u6ca1\u6709\u8fd9\u4e2a\u6982\u5ff5\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u9879\u76ee\u5b9e\u73b0\u4ee5\u7ec4\u4e3a\u5355\u4f4d\uff0c\u7ba1\u7406\u591a\u4e2a\u547d\u540d\u7a7a\u95f4\uff0c\u5e76\u8fdb\u884c Kubernetes \u76f8\u5173\u64cd\u4f5c\u3002Rancher UI \u63d0\u4f9b\u7528\u4e8e",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/pages-for-subheaders/manage-projects"},"\u9879\u76ee\u7ba1\u7406"),"\u548c",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/pages-for-subheaders/kubernetes-resources-setup"},"\u9879\u76ee\u5185\u5e94\u7528\u7ba1\u7406"),"\u7684\u529f\u80fd\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Fleet \u6301\u7eed\u4ea4\u4ed8"),"\uff1a\u5728 Rancher \u4e2d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/pages-for-subheaders/fleet-gitops-at-scale"},"Fleet \u6301\u7eed\u4ea4\u4ed8"),"\u5c06\u5e94\u7528\u7a0b\u5e8f\u4ece Git \u4ed3\u5e93\u90e8\u7f72\u5230\u76ee\u6807\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\uff0c\u65e0\u9700\u4efb\u4f55\u624b\u52a8\u64cd\u4f5c\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Istio"),"\uff1a",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/pages-for-subheaders/istio"},"Rancher \u4e0e Istio \u96c6\u6210"),"\uff0c\u4f7f\u5f97\u7ba1\u7406\u5458\u6216\u96c6\u7fa4\u6240\u6709\u8005\u53ef\u4ee5\u5c06 Istio \u4ea4\u7ed9\u5f00\u53d1\u8005\uff0c\u7136\u540e\u5f00\u53d1\u8005\u4f7f\u7528 Istio \u6267\u884c\u5b89\u5168\u7b56\u7565\uff0c\u6392\u67e5\u95ee\u9898\uff0c\u6216\u4e3a\u84dd\u7eff\u90e8\u7f72\uff0c\u91d1\u4e1d\u96c0\u90e8\u7f72\uff0c\u548c A/B \u6d4b\u8bd5\u8fdb\u884c\u6d41\u91cf\u7ba1\u7406\u3002")),(0,n.kt)("h3",{id:"\u914d\u7f6e\u4e91\u57fa\u7840\u8bbe\u65bd"},"\u914d\u7f6e\u4e91\u57fa\u7840\u8bbe\u65bd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u540c\u6b65\u8282\u70b9\u4fe1\u606f"),"\uff1aRancher API Server \u53ef\u4ee5\u540c\u6b65\u6240\u6709\u96c6\u7fa4\u4e2d\u5168\u90e8",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/nodes-and-node-pools"},"\u8282\u70b9"),"\u7684\u4fe1\u606f\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u914d\u7f6e\u4e91\u57fa\u7840\u8bbe\u65bd"),"\uff1a\u5982\u679c\u4f60\u4e3a Rancher \u914d\u7f6e\u4e86\u4e91\u63d0\u4f9b\u5546\uff0cRancher \u53ef\u4ee5\u5728\u4e91\u7aef\u52a8\u6001\u914d\u7f6e",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"\u65b0\u8282\u70b9"),"\u548c",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/pages-for-subheaders/create-kubernetes-persistent-storage"},"\u6301\u4e45\u5316\u5b58\u50a8"),"\u3002")),(0,n.kt)("h3",{id:"\u67e5\u770b\u96c6\u7fa4\u4fe1\u606f"},"\u67e5\u770b\u96c6\u7fa4\u4fe1\u606f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u65e5\u5fd7\u7ba1\u7406"),"\uff1aRancher \u53ef\u4ee5\u4e0e\u591a\u79cd Kubernetes \u96c6\u7fa4\u4e4b\u5916\u7684\u4e3b\u6d41\u65e5\u5fd7\u7ba1\u7406\u5de5\u5177\u96c6\u6210\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u76d1\u63a7"),"\uff1a\u4f60\u53ef\u4ee5\u4f7f\u7528 Rancher\uff0c\u901a\u8fc7\u4e1a\u754c\u9886\u5148\u5e76\u5f00\u6e90\u7684 Prometheus \u6765\u76d1\u63a7\u96c6\u7fa4\u8282\u70b9\u3001Kubernetes \u7ec4\u4ef6\u548c\u8f6f\u4ef6\u90e8\u7f72\u7684\u72b6\u6001\u548c\u8fdb\u7a0b\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u544a\u8b66"),"\uff1a\u4e3a\u4e86\u4fdd\u8bc1\u96c6\u7fa4\u548c\u5e94\u7528\u7684\u6b63\u5e38\u8fd0\u884c\uff0c\u63d0\u9ad8\u516c\u53f8\u7684\u751f\u4ea7\u6548\u7387\uff0c\u4f60\u9700\u8981\u968f\u65f6\u4e86\u89e3\u96c6\u7fa4\u548c\u9879\u76ee\u7684\u8ba1\u5212\u5185\u548c\u975e\u8ba1\u5212\u4e8b\u4ef6\u3002")),(0,n.kt)("h2",{id:"\u4f7f\u7528-rancher-\u7f16\u8f91\u4e0b\u6e38\u96c6\u7fa4"},"\u4f7f\u7528 Rancher \u7f16\u8f91\u4e0b\u6e38\u96c6\u7fa4"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u5df2\u6709\u96c6\u7fa4\u800c\u8a00\uff0c\u53ef\u63d0\u4f9b\u7684\u9009\u9879\u548c\u8bbe\u7f6e\u53d6\u51b3\u4e8e\u4f60\u914d\u7f6e\u96c6\u7fa4\u7684\u65b9\u6cd5\u3002\u4f8b\u5982\uff0c\u53ea\u6709",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/launch-kubernetes-with-rancher"},"\u901a\u8fc7 RKE \u542f\u52a8"),"\u7684\u96c6\u7fa4\u624d\u6709\u53ef\u7f16\u8f91\u7684",(0,n.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u9009\u9879"),"\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528 Rancher \u521b\u5efa\u96c6\u7fa4\u540e\uff0c\u96c6\u7fa4\u7ba1\u7406\u5458\u53ef\u4ee5\u7ba1\u7406\u96c6\u7fa4\u6210\u5458\uff0c\u5f00\u542f Pod \u5b89\u5168\u7b56\u7565\uff0c\u7ba1\u7406\u8282\u70b9\u6c60\uff0c\u4ee5\u53ca\u8fdb\u884c",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/cluster-configuration"},"\u5176\u4ed6\u64cd\u4f5c"),"\u3002"),(0,n.kt)("p",null,"\u4e0b\u8868\u603b\u7ed3\u4e86\u6bcf\u4e00\u79cd\u7c7b\u578b\u7684\u96c6\u7fa4\u548c\u5bf9\u5e94\u7684\u53ef\u7f16\u8f91\u7684\u9009\u9879\u548c\u8bbe\u7f6e\uff1a"),(0,n.kt)(l.ZP,{mdxType:"ClusterCapabilitiesTable"}))}k.isMDXComponent=!0},5156:(e,t,r)=>{r.d(t,{ZP:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={toc:[]};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,n.kt)("th",{parentName:"tr",align:null},"Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4"),(0,n.kt)("th",{parentName:"tr",align:null},"EKS\u3001GKE \u548c AKS \u96c6\u7fa4",(0,n.kt)("sup",null,"1")),(0,n.kt)("th",{parentName:"tr",align:null},"\u5176\u4ed6\u6258\u7ba1\u7684 Kubernetes \u96c6\u7fa4"),(0,n.kt)("th",{parentName:"tr",align:null},"\u975e EKS \u6216 GKE \u6ce8\u518c\u96c6\u7fa4"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"\u4f7f\u7528 kubectl \u548c kubeconfig \u6587\u4ef6\u6765\u8bbf\u95ee\u96c6\u7fa4")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/access-clusters/add-users-to-clusters"},"\u7ba1\u7406\u96c6\u7fa4\u6210\u5458")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.6/pages-for-subheaders/cluster-configuration"},"\u7f16\u8f91\u548c\u5347\u7ea7\u96c6\u7fa4")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713",(0,n.kt)("sup",null,"2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/nodes-and-node-pools"},"\u7ba1\u7406\u8282\u70b9")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713",(0,n.kt)("sup",null,"3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.6/pages-for-subheaders/create-kubernetes-persistent-storage"},"\u7ba1\u7406\u6301\u4e45\u5377\u548c\u5b58\u50a8\u7c7b")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces"},"\u7ba1\u7406\u9879\u76ee\u3001\u547d\u540d\u7a7a\u95f4\u548c\u5de5\u4f5c\u8d1f\u8f7d")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.6/pages-for-subheaders/helm-charts-in-rancher"},"\u4f7f\u7528\u5e94\u7528\u76ee\u5f55")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u5de5\u5177\uff08",(0,n.kt)("a",{parentName:"td",href:"/zh/v2.6/pages-for-subheaders/monitoring-and-alerting"},"Alerts\u3001Notifiers\u3001Monitoring"),"\u3001",(0,n.kt)("a",{parentName:"td",href:"/zh/v2.6/pages-for-subheaders/logging"},"Logging")," \u548c ",(0,n.kt)("a",{parentName:"td",href:"/zh/v2.6/pages-for-subheaders/istio"},"Istio"),"\uff09"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.6/pages-for-subheaders/cis-scan-guides"},"\u8fd0\u884c\u5b89\u5168\u626b\u63cf")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/rotate-certificates"},"\u8f6e\u6362\u8bc1\u4e66")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters"},"\u5907\u4efd"),"\u548c",(0,n.kt)("a",{parentName:"td",href:"/zh/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"},"\u6062\u590d")," Rancher \u542f\u52a8\u7684\u96c6\u7fa4"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713",(0,n.kt)("sup",null,"4"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/clean-cluster-nodes"},"\u5728 Rancher \u65e0\u6cd5\u8bbf\u95ee\u96c6\u7fa4\u65f6\u6e05\u7406 Kubernetes \u7ec4\u4ef6")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/add-a-pod-security-policy"},"\u914d\u7f6e Pod \u5b89\u5168\u7b56\u7565")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6ce8\u518c\u7684 EKS\u3001GKE \u548c AKS \u96c6\u7fa4\u4e0e\u4ece Rancher UI \u521b\u5efa\u7684 EKS\u3001GKE \u548c AKS \u96c6\u7fa4\u7684\u53ef\u7528\u9009\u9879\u4e00\u81f4\u3002\u4e0d\u540c\u4e4b\u5904\u662f\uff0c\u4ece Rancher UI \u4e2d\u5220\u9664\u5df2\u6ce8\u518c\u7684\u96c6\u7fa4\u540e\uff0c\u96c6\u7fa4\u4e0d\u4f1a\u88ab\u9500\u6bc1\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u65e0\u6cd5\u7f16\u8f91\u5df2\u6ce8\u518c\u7684\u96c6\u7fa4\u7684\u96c6\u7fa4\u914d\u7f6e\u9009\u9879\uff08",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"},"K3s \u548c RKE2 \u96c6\u7fa4"),"\u9664\u5916\uff09\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Rancher UI \u4e3a\u5df2\u6ce8\u518c\u7684\u96c6\u7fa4\u8282\u70b9\u63d0\u4f9b\u4e86\u5c01\u9501\u3001\u6e05\u7a7a\u548c\u7f16\u8f91\u8282\u70b9\u7684\u529f\u80fd\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u4f7f\u7528 etcd \u4f5c\u4e3a controlplane \u7684\u6ce8\u518c\u96c6\u7fa4\uff0c\u5fc5\u987b\u5728 Rancher UI \u4e4b\u5916\u624b\u52a8\u521b\u5efa\u5feb\u7167\u4ee5\u7528\u4e8e\u5907\u4efd\u548c\u6062\u590d\u3002"))))}s.isMDXComponent=!0},83362:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/platform-9c0c4130a7a0828898dbc7af56f76df7.png"}}]);