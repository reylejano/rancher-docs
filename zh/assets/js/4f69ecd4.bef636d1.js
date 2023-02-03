"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[2249],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>h});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},i=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,u=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=l(t),h=o,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||u;return t?n.createElement(m,a(a({ref:r},i),{},{components:t})):n.createElement(m,a({ref:r},i))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var u=t.length,a=new Array(u);a[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<u;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75564:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>u,metadata:()=>s,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const u={title:"\u8bbe\u7f6e Cloud Provider"},a=void 0,s={unversionedId:"pages-for-subheaders/set-up-cloud-providers",id:"pages-for-subheaders/set-up-cloud-providers",title:"\u8bbe\u7f6e Cloud Provider",description:"cloud provider \u662f Kubernetes \u4e2d\u7684\u4e00\u4e2a\u6a21\u5757\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7528\u4e8e\u7ba1\u7406\u8282\u70b9\u3001\u8d1f\u8f7d\u5747\u8861\u5668\u548c\u7f51\u7edc\u8def\u7531\u7684\u63a5\u53e3\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/set-up-cloud-providers.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/set-up-cloud-providers",permalink:"/zh/pages-for-subheaders/set-up-cloud-providers",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/set-up-cloud-providers.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",frontMatter:{title:"\u8bbe\u7f6e Cloud Provider"},sidebar:"tutorialSidebar",previous:{title:"\u5c06 Windows \u5de5\u4f5c\u8d1f\u8f7d\u4ece RKE2 \u8fc1\u79fb\u5230 RKE2",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/workload-migration-guidance"},next:{title:"\u8bbe\u7f6e Amazon \u4e91\u63d0\u4f9b\u5546",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/amazon"}},p={},l=[{value:"\u8bbe\u7f6e Amazon \u4e91\u63d0\u4f9b\u5546",id:"\u8bbe\u7f6e-amazon-\u4e91\u63d0\u4f9b\u5546",level:3},{value:"\u8bbe\u7f6e Azure \u4e91\u63d0\u4f9b\u5546",id:"\u8bbe\u7f6e-azure-\u4e91\u63d0\u4f9b\u5546",level:3},{value:"\u8bbe\u7f6e GCE \u4e91\u63d0\u4f9b\u5546",id:"\u8bbe\u7f6e-gce-\u4e91\u63d0\u4f9b\u5546",level:3},{value:"\u8bbe\u7f6e vSphere \u4e91\u63d0\u4f9b\u5546",id:"\u8bbe\u7f6e-vsphere-\u4e91\u63d0\u4f9b\u5546",level:3},{value:"\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u4e91\u63d0\u4f9b\u5546",id:"\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u4e91\u63d0\u4f9b\u5546",level:3}],i={toc:l};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"cloud provider")," \u662f Kubernetes \u4e2d\u7684\u4e00\u4e2a\u6a21\u5757\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7528\u4e8e\u7ba1\u7406\u8282\u70b9\u3001\u8d1f\u8f7d\u5747\u8861\u5668\u548c\u7f51\u7edc\u8def\u7531\u7684\u63a5\u53e3\u3002"),(0,o.kt)("p",null,"\u5728 Rancher \u4e2d\u8bbe\u7f6e cloud provider \u65f6\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u7684\u4e91\u63d0\u4f9b\u5546\u652f\u6301\u81ea\u52a8\u5316\uff0cRancher Server \u53ef\u4ee5\u5728\u542f\u52a8 Kubernetes \u5b9a\u4e49\u65f6\u81ea\u52a8\u914d\u7f6e\u65b0\u8282\u70b9\u3001\u8d1f\u8f7d\u5747\u8861\u5668\u6216\u6301\u4e45\u5b58\u50a8\u8bbe\u5907\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u914d\u7f6e\u7684\u8282\u70b9\u4e91\u63d0\u4f9b\u5546\u96c6\u7fa4\u4e0d\u6ee1\u8db3\u5148\u51b3\u6761\u4ef6\uff0c\u96c6\u7fa4\u5c06\u65e0\u6cd5\u6b63\u786e\u914d\u7f6e\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cloud Provider")," \u9009\u9879\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u542f\u7528\u7684\u4e91\u63d0\u4f9b\u5546\u5305\u62ec\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Amazon"),(0,o.kt)("li",{parentName:"ul"},"Azure"),(0,o.kt)("li",{parentName:"ul"},"GCE (Google Compute Engine)"),(0,o.kt)("li",{parentName:"ul"},"vSphere")),(0,o.kt)("h3",{id:"\u8bbe\u7f6e-amazon-\u4e91\u63d0\u4f9b\u5546"},"\u8bbe\u7f6e Amazon \u4e91\u63d0\u4f9b\u5546"),(0,o.kt)("p",null,"\u6709\u5173\u542f\u7528 Amazon \u4e91\u63d0\u4f9b\u5546\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/amazon"},"\u6b64\u9875\u9762"),"\u3002"),(0,o.kt)("h3",{id:"\u8bbe\u7f6e-azure-\u4e91\u63d0\u4f9b\u5546"},"\u8bbe\u7f6e Azure \u4e91\u63d0\u4f9b\u5546"),(0,o.kt)("p",null,"\u6709\u5173\u542f\u7528 Azure \u4e91\u63d0\u4f9b\u5546\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/azure"},"\u6b64\u9875\u9762"),"\u3002"),(0,o.kt)("h3",{id:"\u8bbe\u7f6e-gce-\u4e91\u63d0\u4f9b\u5546"},"\u8bbe\u7f6e GCE \u4e91\u63d0\u4f9b\u5546"),(0,o.kt)("p",null,"\u6709\u5173\u542f\u7528 Google Compute Engine \u4e91\u63d0\u4f9b\u5546\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine"},"\u6b64\u9875\u9762"),"\u3002"),(0,o.kt)("h3",{id:"\u8bbe\u7f6e-vsphere-\u4e91\u63d0\u4f9b\u5546"},"\u8bbe\u7f6e vSphere \u4e91\u63d0\u4f9b\u5546"),(0,o.kt)("p",null,"\u6709\u5173\u542f\u7528 vSphere \u4e91\u63d0\u4f9b\u5546\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-in-tree-vsphere"},"\u6811\u5185 vSphere \u914d\u7f6e"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere"},"\u6811\u5916 vSphere \u914d\u7f6e"),"\u3002"),(0,o.kt)("h3",{id:"\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u4e91\u63d0\u4f9b\u5546"},"\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u4e91\u63d0\u4f9b\u5546"),(0,o.kt)("p",null,"\u4efb\u4f55 Kubernetes Cloud Provider \u90fd\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"\u81ea\u5b9a\u4e49"),"\u4e91\u63d0\u4f9b\u5546\u8fdb\u884c\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u81ea\u5b9a\u4e49\u4e91\u63d0\u4f9b\u5546\u9009\u9879\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/"},"RKE \u6587\u6863"),"\uff0c\u4e86\u89e3\u5982\u4f55\u4e3a\u4f60\u7684\u4e91\u63d0\u4f9b\u5546\u7f16\u8f91 yaml \u6587\u4ef6\u3002\u7279\u5b9a\u4e91\u63d0\u4f9b\u5546\u7684\u8be6\u7ec6\u914d\u7f6e\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/cloud-providercluster-provisioning/rke-clusters/cloud-providers/vsphere/"},"vSphere")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/openstack/"},"OpenStack"))))}c.isMDXComponent=!0}}]);