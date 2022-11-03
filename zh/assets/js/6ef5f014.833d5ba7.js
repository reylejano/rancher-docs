"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[20086],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,d=m["".concat(l,".").concat(k)]||m[k]||c[k]||i;return n?r.createElement(d,u(u({ref:t},p),{},{components:n})):r.createElement(d,u({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,u=new Array(i);u[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var s=2;s<i;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28969:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),u=["components"],o={title:"\u5728 Nutanix AOS \u4e2d\u914d\u7f6e Kubernetes \u96c6\u7fa4"},l=void 0,s={unversionedId:"how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos",id:"how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos",title:"\u5728 Nutanix AOS \u4e2d\u914d\u7f6e Kubernetes \u96c6\u7fa4",description:"\u8981\u4f7f\u7528 Rancher \u5728 Nutanix AOS (AHV) \u4e2d\u5b89\u88c5 RKE Kubernetes \u96c6\u7fa4\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos.md",sourceDirName:"how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix",slug:"/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos",permalink:"/zh/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022/10/25",frontMatter:{title:"\u5728 Nutanix AOS \u4e2d\u914d\u7f6e Kubernetes \u96c6\u7fa4"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa Nutanix AOS \u96c6\u7fa4",permalink:"/zh/pages-for-subheaders/nutanix"},next:{title:"RKE1 \u548c RKE2 \u5dee\u200b\u200b\u5f02",permalink:"/zh/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/rke1-vs-rke2-differences"}},p={},c=[{value:"\u5728 Nutanix AOS \u4e2d\u521b\u5efa\u51ed\u8bc1",id:"\u5728-nutanix-aos-\u4e2d\u521b\u5efa\u51ed\u8bc1",level:3},{value:"\u7f51\u7edc\u6743\u9650",id:"\u7f51\u7edc\u6743\u9650",level:3},{value:"VM-VM \u53cd\u4eb2\u548c\u6027\u7b56\u7565",id:"vm-vm-\u53cd\u4eb2\u548c\u6027\u7b56\u7565",level:3},{value:"1. \u521b\u5efa\u8282\u70b9\u6a21\u677f",id:"1-\u521b\u5efa\u8282\u70b9\u6a21\u677f",level:3},{value:"2. \u4f7f\u7528\u8282\u70b9\u6a21\u677f\u521b\u5efa\u5177\u6709\u8282\u70b9\u6c60\u7684\u96c6\u7fa4",id:"2-\u4f7f\u7528\u8282\u70b9\u6a21\u677f\u521b\u5efa\u5177\u6709\u8282\u70b9\u6c60\u7684\u96c6\u7fa4",level:3}],m={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8981\u4f7f\u7528 Rancher \u5728 Nutanix AOS (AHV) \u4e2d\u5b89\u88c5 ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE")," Kubernetes \u96c6\u7fa4\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u627e\u5230 Rancher \u7684\u5185\u7f6e Nutanix ",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers#%E6%BF%80%E6%B4%BB/%E5%81%9C%E7%94%A8%E4%B8%BB%E6%9C%BA%E9%A9%B1%E5%8A%A8"},"\u4e3b\u673a\u9a71\u52a8\u5e76\u6fc0\u6d3b\u5b83"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u8282\u70b9\u6a21\u677f\uff0cRancher \u5c06\u4f7f\u7528\u8be5\u6a21\u677f\u5728 Nutanix AOS \u4e2d\u914d\u7f6e\u8282\u70b9\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728 Rancher \u4e2d\u521b\u5efa Nutanix AOS \u96c6\u7fa4\u3002\u914d\u7f6e\u65b0\u96c6\u7fa4\u65f6\uff0c\u4f60\u9700\u8981\u4e3a\u5b83\u5b9a\u4e49\u8282\u70b9\u6c60\u3002\u6bcf\u4e2a\u8282\u70b9\u6c60\u90fd\u6709\u4e00\u4e2a etcd\u3001controlplane \u6216 worker \u7684 Kubernetes \u89d2\u8272\u3002Rancher \u4f1a\u5728\u65b0\u8282\u70b9\u4e0a\u5b89\u88c5 RKE Kubernetes\uff0c\u5e76\u4e3a\u6bcf\u4e2a\u8282\u70b9\u8bbe\u7f6e\u8282\u70b9\u6c60\u5b9a\u4e49\u7684 Kubernetes \u89d2\u8272\u3002"))),(0,i.kt)("p",null,"\u6709\u5173\u914d\u7f6e Nutanix AOS \u8282\u70b9\u6a21\u677f\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"/zh/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/nutanix"},"Nutanix AOS \u8282\u70b9\u6a21\u677f\u914d\u7f6e\u53c2\u8003"),"\u3002"),(0,i.kt)("p",null,"\u6709\u5173\u5728 Rancher \u4e2d\u914d\u7f6e RKE Kubernetes \u96c6\u7fa4\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"\u96c6\u7fa4\u914d\u7f6e\u53c2\u8003"),"\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#nutanix-aos-%E4%B8%AD%E7%9A%84%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C"},"Nutanix AOS \u4e2d\u7684\u51c6\u5907\u5de5\u4f5c")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%88%9B%E5%BB%BA-nutanix-aos-%E9%9B%86%E7%BE%A4"},"\u521b\u5efa Nutanix AOS \u96c6\u7fa4"))),(0,i.kt)("h1",{id:"nutanix-aos-\u4e2d\u7684\u51c6\u5907\u5de5\u4f5c"},"Nutanix AOS \u4e2d\u7684\u51c6\u5907\u5de5\u4f5c"),(0,i.kt)("p",null,"\u4e0b\u6587\u4ecb\u7ecd\u4e86\u8bbe\u7f6e Nutanix AOS \u7684\u8981\u6c42\uff0c\u4ee5\u4fbf Rancher \u53ef\u4ee5\u914d\u7f6e\u865a\u62df\u673a\u548c\u96c6\u7fa4\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8282\u70b9\u6a21\u677f\u5df2\u4f7f\u7528 Nutanix AOS 5.20.2 \u548c 6.0.1 \u7248\u672c\u8fdb\u884c\u8bb0\u5f55\u548c\u6d4b\u8bd5\u3002"))),(0,i.kt)("h3",{id:"\u5728-nutanix-aos-\u4e2d\u521b\u5efa\u51ed\u8bc1"},"\u5728 Nutanix AOS \u4e2d\u521b\u5efa\u51ed\u8bc1"),(0,i.kt)("p",null,"\u5728\u7ee7\u7eed\u521b\u5efa\u96c6\u7fa4\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4f60\u62e5\u6709\u5177\u6709\u7ba1\u7406\u5458\u6743\u9650\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Security-Guide-v6_0:wc-user-create-wc-t.html"},"Nutanix Prism Central \u7528\u6237\u8d26\u53f7"),"\u3002\u8bbe\u7f6e\u8282\u70b9\u6a21\u677f\u65f6\uff0c\u6a21\u677f\u5c06\u9700\u8981\u4f7f\u7528\u8fd9\u4e9b\u51ed\u8bc1\u3002"),(0,i.kt)("h3",{id:"\u7f51\u7edc\u6743\u9650"},"\u7f51\u7edc\u6743\u9650"),(0,i.kt)("p",null,"\u5fc5\u987b\u786e\u4fdd\u8fd0\u884c Rancher Server \u7684\u4e3b\u673a\u80fd\u591f\u5efa\u7acb\u4ee5\u4e0b\u7f51\u7edc\u8fde\u63a5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u5230 Nutanix Prism Central API\uff08\u901a\u5e38\u662f\u7aef\u53e3 9440/TCP\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u5230\u521b\u5efa\u7684 VM \u4e0a\u7684 22/TCP \u548c 2376/TCP \u7aef\u53e3\u3002")),(0,i.kt)("p",null,"\u6709\u5173\u5728\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u4e0a\u521b\u5efa\u8282\u70b9\u7684\u7aef\u53e3\u8981\u6c42\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters#%E7%BD%91%E7%BB%9C%E8%A6%81%E6%B1%82"},"\u8282\u70b9\u7f51\u7edc\u8981\u6c42"),"\u3002"),(0,i.kt)("h3",{id:"vm-vm-\u53cd\u4eb2\u548c\u6027\u7b56\u7565"},"VM-VM \u53cd\u4eb2\u548c\u6027\u7b56\u7565"),(0,i.kt)("p",null,"\u5efa\u8bae\u8bbe\u7f6e ",(0,i.kt)("a",{parentName:"p",href:"https://portal.nutanix.com/page/documents/details?targetId=AHV-Admin-Guide-v6_1:ahv-vm-anti-affinity-t.html"},"VM-VM \u53cd\u4eb2\u548c\u6027\u7b56\u7565"),"\u3002\u8fd9\u4e9b\u89c4\u5219\u5141\u8bb8\u5206\u914d\u4e86 etcd \u548c controlplane \u89d2\u8272\u7684\u865a\u62df\u673a\u5728\u5206\u914d\u7ed9\u4e0d\u540c\u8282\u70b9\u6c60\u65f6\uff0c\u5728\u5355\u72ec\u7684 AHV \u4e3b\u673a\u4e0a\u8fd0\u884c\u3002\u8fd9\u79cd\u505a\u6cd5\u53ef\u786e\u4fdd\u5355\u4e2a\u7269\u7406\u673a\u7684\u6545\u969c\u4e0d\u4f1a\u5f71\u54cd\u8fd9\u4e9b\u5e73\u9762\u7684\u53ef\u7528\u6027\u3002"),(0,i.kt)("h1",{id:"\u521b\u5efa-nutanix-aos-\u96c6\u7fa4"},"\u521b\u5efa Nutanix AOS \u96c6\u7fa4"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#1-%E5%88%9B%E5%BB%BA%E8%8A%82%E7%82%B9%E6%A8%A1%E6%9D%BF"},"\u521b\u5efa\u8282\u70b9\u6a21\u677f")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#2-%E4%BD%BF%E7%94%A8%E8%8A%82%E7%82%B9%E6%A8%A1%E6%9D%BF%E5%88%9B%E5%BB%BA%E5%85%B7%E6%9C%89%E8%8A%82%E7%82%B9%E6%B1%A0%E7%9A%84%E9%9B%86%E7%BE%A4"},"\u4f7f\u7528\u8282\u70b9\u6a21\u677f\u521b\u5efa\u5177\u6709\u8282\u70b9\u6c60\u7684\u96c6\u7fa4"))),(0,i.kt)("h3",{id:"1-\u521b\u5efa\u8282\u70b9\u6a21\u677f"},"1. \u521b\u5efa\u8282\u70b9\u6a21\u677f"),(0,i.kt)("p",null,"\u4e3a Nutanix AOS \u521b\u5efa",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/use-new-nodes-in-an-infra-provider#%E8%8A%82%E7%82%B9%E6%A8%A1%E6%9D%BF"},"\u8282\u70b9\u6a21\u677f"),"\u4f1a\u5141\u8bb8 Rancher \u5728 Nutanix AOS \u4e2d\u914d\u7f6e\u65b0\u8282\u70b9\u3002\u5176\u4ed6\u96c6\u7fa4\u53ef\u4ee5\u590d\u7528\u8282\u70b9\u6a21\u677f\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"RKE1 \u914d\u7f6e > \u8282\u70b9\u6a21\u677f"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u6a21\u677f"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Nutanix"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u586b\u5199 Nutanix AOS \u7684\u8282\u70b9\u6a21\u677f\u3002\u6709\u5173\u586b\u5199\u8868\u683c\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605 Nutanix AOS \u8282\u70b9\u6a21\u677f",(0,i.kt)("a",{parentName:"li",href:"/zh/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/nutanix"},"\u914d\u7f6e\u53c2\u8003"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,i.kt)("h3",{id:"2-\u4f7f\u7528\u8282\u70b9\u6a21\u677f\u521b\u5efa\u5177\u6709\u8282\u70b9\u6c60\u7684\u96c6\u7fa4"},"2. \u4f7f\u7528\u8282\u70b9\u6a21\u677f\u521b\u5efa\u5177\u6709\u8282\u70b9\u6c60\u7684\u96c6\u7fa4"),(0,i.kt)("p",null,"\u4f7f\u7528 Rancher \u5728 Nutanix AOS \u4e2d\u521b\u5efa Kubernetes \u96c6\u7fa4\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728",(0,i.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Nutanix"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8f93\u5165",(0,i.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u540d\u79f0"),"\uff0c\u7136\u540e\u70b9\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u7ee7\u7eed"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,i.kt)("strong",{parentName:"li"},"\u6210\u5458\u89d2\u8272"),"\u4e3a\u96c6\u7fa4\u914d\u7f6e\u7528\u6237\u6388\u6743\u3002\u70b9\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u6210\u5458"),"\u6dfb\u52a0\u53ef\u4ee5\u8bbf\u95ee\u96c6\u7fa4\u7684\u7528\u6237\u3002\u4f7f\u7528",(0,i.kt)("strong",{parentName:"li"},"\u89d2\u8272"),"\u4e0b\u62c9\u83dc\u5355\u4e3a\u6bcf\u4e2a\u7528\u6237\u8bbe\u7f6e\u6743\u9650\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,i.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u9009\u9879"),"\u9009\u62e9\u8981\u5b89\u88c5\u7684 Kubernetes \u7248\u672c\u3001\u8981\u4f7f\u7528\u7684\u7f51\u7edc\u63d0\u4f9b\u5546\uff0c\u4ee5\u53ca\u662f\u5426\u542f\u7528\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u3002\u8981\u67e5\u770b\u66f4\u591a\u96c6\u7fa4\u9009\u9879\uff0c\u8bf7\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u663e\u793a\u9ad8\u7ea7\u9009\u9879"),"\u3002\u5982\u9700\u83b7\u53d6\u914d\u7f6e\u96c6\u7fa4\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"li",href:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"RKE \u96c6\u7fa4\u914d\u7f6e\u53c2\u8003"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a\u8282\u70b9\u6c60\u6dfb\u52a0\u5230\u4f60\u7684\u96c6\u7fa4\u3002\u6bcf\u4e2a\u8282\u70b9\u6c60\u90fd\u4f7f\u7528\u8282\u70b9\u6a21\u677f\u6765\u914d\u7f6e\u65b0\u8282\u70b9\u3002\u6709\u5173\u8282\u70b9\u6c60\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u5305\u62ec\u4e3a\u8282\u70b9\u5206\u914d Kubernetes \u89d2\u8272\u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/use-new-nodes-in-an-infra-provider#%E8%8A%82%E7%82%B9%E6%B1%A0"},"\u672c\u8282"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u5e76\u786e\u8ba4\u4f60\u7684\u9009\u9879\u3002\u7136\u540e\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u96c6\u7fa4\u5df2\u521b\u5efa\uff0c\u5e76\u5904\u4e8e ",(0,i.kt)("strong",{parentName:"p"},"Provisioning")," \u72b6\u6001\u3002Rancher \u5df2\u5728\u4f60\u7684\u96c6\u7fa4\u4e2d\u3002"),(0,i.kt)("p",null,"\u5f53\u96c6\u7fa4\u72b6\u6001\u53d8\u4e3a ",(0,i.kt)("strong",{parentName:"p"},"Active")," \u540e\uff0c\u4f60\u53ef\u8bbf\u95ee\u96c6\u7fa4\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Active")," \u72b6\u6001\u7684\u96c6\u7fa4\u4f1a\u5206\u914d\u5230\u4e24\u4e2a\u9879\u76ee\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Default"),"\uff1a\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"li"},"default")," \u547d\u540d\u7a7a\u95f4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System"),"\uff1a\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"li"},"cattle-system"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"kube-public")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u3002")),(0,i.kt)("h1",{id:"\u53ef\u9009\u7684\u540e\u7eed\u6b65\u9aa4"},"\u53ef\u9009\u7684\u540e\u7eed\u6b65\u9aa4"),(0,i.kt)("p",null,"\u521b\u5efa\u96c6\u7fa4\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Rancher UI \u8bbf\u95ee\u96c6\u7fa4\u3002\u6700\u4f73\u5b9e\u8df5\u5efa\u8bae\u4f60\u8bbe\u7f6e\u4ee5\u4e0b\u8bbf\u95ee\u96c6\u7fa4\u7684\u5907\u7528\u65b9\u5f0f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u901a\u8fc7 kubectl CLI \u8bbf\u95ee\u4f60\u7684\u96c6\u7fa4"),"\uff1a\u6309\u7167",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#%E5%9C%A8%E5%B7%A5%E4%BD%9C%E7%AB%99%E4%BD%BF%E7%94%A8-kubectl-%E8%AE%BF%E9%97%AE%E9%9B%86%E7%BE%A4"},"\u8fd9\u4e9b\u6b65\u9aa4"),"\u5728\u4f60\u7684\u5de5\u4f5c\u7ad9\u4e0a\u4f7f\u7528 kubectl \u8bbf\u95ee\u96c6\u7fa4\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u5c06\u901a\u8fc7 Rancher Server \u7684\u8eab\u4efd\u9a8c\u8bc1\u4ee3\u7406\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u7136\u540e Rancher \u4f1a\u8ba9\u4f60\u8fde\u63a5\u5230\u4e0b\u6e38\u96c6\u7fa4\u3002\u6b64\u65b9\u6cd5\u5141\u8bb8\u4f60\u5728\u6ca1\u6709 Rancher UI \u7684\u60c5\u51b5\u4e0b\u7ba1\u7406\u96c6\u7fa4\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u901a\u8fc7 kubectl CLI \u4f7f\u7528\u6388\u6743\u7684\u96c6\u7fa4\u7aef\u70b9\u8bbf\u95ee\u4f60\u7684\u96c6\u7fa4"),"\uff1a\u6309\u7167",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8%E4%B8%8B%E6%B8%B8%E9%9B%86%E7%BE%A4%E8%BF%9B%E8%A1%8C%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81"},"\u8fd9\u4e9b\u6b65\u9aa4"),"\u76f4\u63a5\u4f7f\u7528 kubectl \u8bbf\u95ee\u96c6\u7fa4\uff0c\u800c\u65e0\u9700\u901a\u8fc7 Rancher \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002\u6211\u4eec\u5efa\u8bae\u8bbe\u7f6e\u6b64\u66ff\u4ee3\u65b9\u6cd5\u6765\u8bbf\u95ee\u96c6\u7fa4\uff0c\u4ee5\u4fbf\u5728\u65e0\u6cd5\u8fde\u63a5\u5230 Rancher \u65f6\u8bbf\u95ee\u96c6\u7fa4\u3002"))))}k.isMDXComponent=!0}}]);