"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[15467],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(r),k=a,m=s["".concat(u,".").concat(k)]||s[k]||d[k]||l;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3456:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"\u63a8\u8350\u7684\u96c6\u7fa4\u67b6\u6784"},i=void 0,o={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture",id:"version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture",title:"\u63a8\u8350\u7684\u96c6\u7fa4\u67b6\u6784",description:"\u6709\u4e09\u4e2a\u89d2\u8272\u53ef\u4ee5\u5206\u914d\u7ed9\u8282\u70b9\uff0c\u5206\u522b\u662f etcd\u3001controlplane \u548c worker\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"\u63a8\u8350\u7684\u96c6\u7fa4\u67b6\u6784"},sidebar:"tutorialSidebar",previous:{title:"\u751f\u4ea7\u5c31\u7eea\u96c6\u7fa4\u68c0\u67e5\u6e05\u5355",permalink:"/zh/v2.6/pages-for-subheaders/checklist-for-production-ready-clusters"},next:{title:"Kubernetes \u4e2d\u8282\u70b9\u7684\u89d2\u8272",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes"}},u={},p=[{value:"\u5c06 Worker \u8282\u70b9\u4e0e\u5177\u6709\u5176\u4ed6\u89d2\u8272\u7684\u8282\u70b9\u5206\u5f00",id:"\u5c06-worker-\u8282\u70b9\u4e0e\u5177\u6709\u5176\u4ed6\u89d2\u8272\u7684\u8282\u70b9\u5206\u5f00",level:2},{value:"\u6bcf\u4e2a\u89d2\u8272\u7684\u63a8\u8350\u8282\u70b9\u6570",id:"\u6bcf\u4e2a\u89d2\u8272\u7684\u63a8\u8350\u8282\u70b9\u6570",level:2},{value:"controlplane \u8282\u70b9\u6570",id:"controlplane-\u8282\u70b9\u6570",level:3},{value:"etcd \u8282\u70b9\u6570",id:"etcd-\u8282\u70b9\u6570",level:3},{value:"Worker \u8282\u70b9\u6570",id:"worker-\u8282\u70b9\u6570",level:3},{value:"\u4e3a\u4ec0\u4e48 Rancher \u96c6\u7fa4\u548c\u8fd0\u884c\u5e94\u7528\u7684\u96c6\u7fa4\u7684\u751f\u4ea7\u8981\u6c42\u4e0d\u540c",id:"\u4e3a\u4ec0\u4e48-rancher-\u96c6\u7fa4\u548c\u8fd0\u884c\u5e94\u7528\u7684\u96c6\u7fa4\u7684\u751f\u4ea7\u8981\u6c42\u4e0d\u540c",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6709\u4e09\u4e2a\u89d2\u8272\u53ef\u4ee5\u5206\u914d\u7ed9\u8282\u70b9\uff0c\u5206\u522b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"worker"),"\u3002"),(0,a.kt)("h2",{id:"\u5c06-worker-\u8282\u70b9\u4e0e\u5177\u6709\u5176\u4ed6\u89d2\u8272\u7684\u8282\u70b9\u5206\u5f00"},"\u5c06 Worker \u8282\u70b9\u4e0e\u5177\u6709\u5176\u4ed6\u89d2\u8272\u7684\u8282\u70b9\u5206\u5f00"),(0,a.kt)("p",null,"\u5728\u8bbe\u8ba1\u96c6\u7fa4\u65f6\uff0c\u4f60\u6709\u4e24\u79cd\u9009\u62e9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e3a\u6bcf\u4e2a\u89d2\u8272\u4f7f\u7528\u4e13\u7528\u8282\u70b9\u3002\u8fd9\u786e\u4fdd\u4e86\u7279\u5b9a\u89d2\u8272\u6240\u9700\u7ec4\u4ef6\u7684\u8d44\u6e90\u53ef\u7528\u6027\u3002\u5b83\u8fd8\u6839\u636e",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters#%E7%BD%91%E7%BB%9C%E8%A6%81%E6%B1%82"},"\u7aef\u53e3\u8981\u6c42"),"\u4e25\u683c\u9694\u79bb\u6bcf\u4e2a\u89d2\u8272\u4e4b\u95f4\u7684\u7f51\u7edc\u6d41\u91cf\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5c06 ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"controlplane")," \u89d2\u8272\u5206\u914d\u7ed9\u76f8\u540c\u7684\u8282\u70b9\u3002\u8be5\u8282\u70b9\u5fc5\u987b\u6ee1\u8db3\u8fd9\u4e24\u4e2a\u89d2\u8272\u7684\u786c\u4ef6\u8981\u6c42\u3002")),(0,a.kt)("p",null,"\u65e0\u8bba\u5728\u54ea\u79cd\u60c5\u51b5\u4e0b\uff0c\u90fd\u4e0d\u5e94\u8be5\u5728\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," \u89d2\u8272\u7684\u8282\u70b9\u4e2d\u4f7f\u7528\u6216\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," \u89d2\u8272\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u6bcf\u4e2a\u8282\u70b9\u7684\u89d2\u8272\u90fd\u6709\u5982\u4e0b\u51e0\u79cd\u914d\u7f6e\u9009\u62e9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"etcd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"controlplane")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"controlplane")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"worker"))),(0,a.kt)("h2",{id:"\u6bcf\u4e2a\u89d2\u8272\u7684\u63a8\u8350\u8282\u70b9\u6570"},"\u6bcf\u4e2a\u89d2\u8272\u7684\u63a8\u8350\u8282\u70b9\u6570"),(0,a.kt)("p",null,"\u96c6\u7fa4\u5e94\u8be5\u6709\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u81f3\u5c11\u62e5\u6709\u4e09\u4e2a\u89d2\u8272\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," \u7684\u8282\u70b9\uff0c\u6765\u786e\u4fdd\u5931\u53bb\u4e00\u4e2a\u8282\u70b9\u65f6\u4ecd\u80fd\u5b58\u6d3b\u3002\u589e\u52a0 etcd \u8282\u70b9\u6570\u91cf\u80fd\u63d0\u9ad8\u5bb9\u9519\u7387\uff0c\u800c\u5c06 etcd \u5206\u6563\u5230\u4e0d\u540c\u53ef\u7528\u533a\u751a\u81f3\u80fd\u83b7\u53d6\u66f4\u597d\u7684\u5bb9\u9519\u80fd\u529b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u81f3\u5c11\u4e24\u4e2a\u8282\u70b9\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"li"},"controlplane")," \u89d2\u8272\uff0c\u4ee5\u5b9e\u73b0\u4e3b\u7ec4\u4ef6\u9ad8\u53ef\u7528\u6027\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u81f3\u5c11\u4e24\u4e2a\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"li"},"worker")," \u89d2\u8272\u7684\u8282\u70b9\uff0c\u7528\u4e8e\u5728\u8282\u70b9\u6545\u969c\u65f6\u91cd\u65b0\u5b89\u6392\u5de5\u4f5c\u8d1f\u8f7d\u3002")),(0,a.kt)("p",null,"\u6709\u5173\u6bcf\u4e2a\u89d2\u8272\u7684\u7528\u9014\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes"},"Kubernetes \u4e2d\u7684\u8282\u70b9\u89d2\u8272"),"\u3002"),(0,a.kt)("h3",{id:"controlplane-\u8282\u70b9\u6570"},"controlplane \u8282\u70b9\u6570"),(0,a.kt)("p",null,"\u6dfb\u52a0\u591a\u4e2a\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," \u89d2\u8272\u7684\u8282\u70b9\uff0c\u4f7f\u6bcf\u4e2a\u4e3b\u7ec4\u4ef6\u90fd\u5177\u6709\u9ad8\u53ef\u7528\u6027\u3002"),(0,a.kt)("h3",{id:"etcd-\u8282\u70b9\u6570"},"etcd \u8282\u70b9\u6570"),(0,a.kt)("p",null,"\u5728\u4fdd\u6301\u96c6\u7fa4\u53ef\u7528\u6027\u7684\u540c\u65f6\uff0c\u53ef\u4ee5\u4e00\u6b21\u4e22\u5931\u7684\u8282\u70b9\u6570\u7531\u5206\u914d\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," \u89d2\u8272\u7684\u8282\u70b9\u6570\u51b3\u5b9a\u3002\u5bf9\u4e8e\u5177\u6709 n \u4e2a\u6210\u5458\u7684\u96c6\u7fa4\uff0c\u6700\u5c0f\u503c\u4e3a (n/2)+1\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u5efa\u8bae\u5728\u4e00\u4e2a\u533a\u57df\u5185\u7684 3 \u4e2a\u4e0d\u540c\u53ef\u7528\u533a\u4e2d\u5404\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," \u8282\u70b9\uff0c\u4ee5\u5728\u4e00\u4e2a\u53ef\u7528\u533a\u4e22\u5931\u7684\u60c5\u51b5\u4e0b\u5b58\u6d3b\u3002\u5982\u679c\u4f60\u53ea\u4f7f\u7528\u4e24\u4e2a\u533a\u57df\uff0c\u90a3\u4e48\u5728\u201c\u591a\u6570\u8282\u70b9\u201d\u6240\u5728\u7684\u53ef\u7528\u533a\u4e0d\u53ef\u7528\u65f6\uff0c\u4f60\u5c06\u4f1a\u4e22\u5931 etcd \u96c6\u7fa4\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"th"},"etcd")," \u89d2\u8272\u7684\u8282\u70b9"),(0,a.kt)("th",{parentName:"tr",align:null},"\u591a\u6570\u8282\u70b9"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5bb9\u9519\u80fd\u529b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"2"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"7"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"3"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"9"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"4"))))),(0,a.kt)("p",null,"\u53c2\u8003\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://etcd.io/docs/v3.4.0/faq/#what-is-failure-tolerance"},"\u6700\u4f73 etcd \u96c6\u7fa4\u5927\u5c0f\u7684\u5b98\u65b9 etcd \u6587\u6863")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/"},"\u4e3a Kubernetes \u64cd\u4f5c etcd \u96c6\u7fa4\u7684\u5b98\u65b9 Kubernetes \u6587\u6863"))),(0,a.kt)("h3",{id:"worker-\u8282\u70b9\u6570"},"Worker \u8282\u70b9\u6570"),(0,a.kt)("p",null,"\u6dfb\u52a0\u591a\u4e2a\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," \u89d2\u8272\u7684\u8282\u70b9\u80fd\u786e\u4fdd\u4e00\u4e2a\u8282\u70b9\u51fa\u73b0\u6545\u969c\u65f6\u53ef\u4ee5\u91cd\u65b0\u5b89\u6392\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,a.kt)("h3",{id:"\u4e3a\u4ec0\u4e48-rancher-\u96c6\u7fa4\u548c\u8fd0\u884c\u5e94\u7528\u7684\u96c6\u7fa4\u7684\u751f\u4ea7\u8981\u6c42\u4e0d\u540c"},"\u4e3a\u4ec0\u4e48 Rancher \u96c6\u7fa4\u548c\u8fd0\u884c\u5e94\u7528\u7684\u96c6\u7fa4\u7684\u751f\u4ea7\u8981\u6c42\u4e0d\u540c"),(0,a.kt)("p",null,"\u4f60\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230\u6211\u4eec\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"Kubernetes \u5b89\u88c5"),"\u8bf4\u660e\u5e76\u4e0d\u7b26\u5408\u6211\u4eec\u5bf9\u751f\u4ea7\u5c31\u7eea\u96c6\u7fa4\u7684\u8981\u6c42\uff0c\u8fd9\u662f\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," \u89d2\u8272\u6ca1\u6709\u4e13\u7528\u8282\u70b9\u3002\u7136\u800c\uff0c\u4f60 Rancher \u4e2d\u7684\u8fd9\u4e2a\u4e09\u8282\u70b9\u96c6\u7fa4\u662f\u6709\u6548\u7684\uff0c\u56e0\u4e3a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b83\u5141\u8bb8\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," \u8282\u70b9\u6545\u969c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b83\u901a\u8fc7\u591a\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"controlplane")," \u8282\u70b9\u6765\u7ef4\u62a4 master \u7ec4\u4ef6\u7684\u591a\u4e2a\u5b9e\u4f8b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6b64\u96c6\u7fa4\u4e0a\u6ca1\u6709\u521b\u5efa\u9664 Rancher \u4e4b\u5916\u7684\u5176\u4ed6\u5de5\u4f5c\u8d1f\u8f7d\u3002")),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/components/#master-components"},"Kubernetes\uff1a\u4e3b\u7ec4\u4ef6"))))}d.isMDXComponent=!0}}]);