"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[22334],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58981:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],c={title:"\u4e3a\u5b9a\u65f6\u626b\u63cf\u914d\u7f6e\u544a\u8b66"},s=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule",id:"how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule",title:"\u4e3a\u5b9a\u65f6\u626b\u63cf\u914d\u7f6e\u544a\u8b66",description:"\u4f60\u53ef\u4ee5\u5b9a\u65f6\u8fd0\u884c ClusterScan\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule.md",sourceDirName:"how-to-guides/advanced-user-guides/cis-scan-guides",slug:"/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule",permalink:"/zh/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule.md",tags:[],version:"current",lastUpdatedAt:1663080703,formattedLastUpdatedAt:"2022/9/13",frontMatter:{title:"\u4e3a\u5b9a\u65f6\u626b\u63cf\u914d\u7f6e\u544a\u8b66"},sidebar:"tutorialSidebar",previous:{title:"\u4e3a Rancher CIS Benchmark \u542f\u7528\u544a\u8b66",permalink:"/zh/how-to-guides/advanced-user-guides/cis-scan-guides/enable-alerting-for-rancher-cis-benchmark"},next:{title:"\u4e3a\u96c6\u7fa4\u626b\u63cf\u521b\u5efa\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c",permalink:"/zh/how-to-guides/advanced-user-guides/cis-scan-guides/create-a-custom-benchmark-version-to-run"}},u={},p=[],d={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5b9a\u65f6\u8fd0\u884c ClusterScan\u3002"),(0,i.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u4e3a\u5b9a\u65f6\u626b\u63cf\u6307\u5b9a\u662f\u5426\u5728\u626b\u63cf\u5b8c\u6210\u65f6\u53d1\u51fa\u544a\u8b66\u3002"),(0,i.kt)("p",null,"\u53ea\u6709\u5b9a\u65f6\u8fd0\u884c\u7684\u626b\u63cf\u624d\u652f\u6301\u544a\u8b66\u3002"),(0,i.kt)("p",null,"CIS Benchmark \u5e94\u7528\u652f\u6301\u4e24\u79cd\u7c7b\u578b\u7684\u544a\u8b66\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u626b\u63cf\u5b8c\u6210\u544a\u8b66\uff1a\u6b64\u544a\u8b66\u5728\u626b\u63cf\u8fd0\u884c\u5b8c\u6210\u65f6\u53d1\u51fa\u3002\u544a\u8b66\u5305\u62ec\u8be6\u7ec6\u4fe1\u606f\uff0c\u5305\u62ec ClusterScan \u7684\u540d\u79f0\u548c ClusterScanProfile \u7684\u540d\u79f0\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u626b\u63cf\u5931\u8d25\u544a\u8b66\uff1a\u5982\u679c\u626b\u63cf\u4e2d\u6709\u4e00\u4e9b\u6d4b\u8bd5\u5931\u8d25\u6216\u626b\u63cf\u5904\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"Fail")," \u72b6\u6001\uff0c\u5219\u4f1a\u53d1\u51fa\u6b64\u544a\u8b66\u3002")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," \u542f\u7528\u544a\u8b66\u4e4b\u524d\uff0c\u786e\u4fdd\u5b89\u88c5\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," \u5e94\u7528\u5e76\u914d\u7f6e\u4e86\u63a5\u6536\u5668\uff08Receiver\uff09\u548c\u8def\u7531\uff08Route\uff09\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"/zh/reference-guides/monitoring-v2-configuration/receivers"},"\u672c\u7ae0\u8282"),"\u3002"),(0,i.kt)("p",{parentName:"div"},"\u5728\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," \u544a\u8b66\u914d\u7f6e\u8def\u7531\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u952e\u503c\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"job:rancher-cis-scan")," \u6765\u6307\u5b9a\u5339\u914d\u3002\u8be6\u60c5\u8bf7\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"/zh/reference-guides/monitoring-v2-configuration/receivers#cis-%E6%89%AB%E6%8F%8F%E5%91%8A%E8%AD%A6%E7%9A%84%E7%A4%BA%E4%BE%8B%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE"},"\u8def\u7531\u914d\u7f6e\u793a\u4f8b"),"\u3002"))),(0,i.kt)("p",null,"\u8981\u4e3a\u5b9a\u65f6\u8fd0\u884c\u7684\u626b\u63cf\u914d\u7f6e\u544a\u8b66\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8bf7\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-cis-benchmark")," \u5e94\u7528\u4e0a\u542f\u7528\u544a\u8b66\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"li",href:"#%E4%B8%BA-rancher-cis-benchmark-%E5%90%AF%E7%94%A8%E5%91%8A%E8%AD%A6"},"\u4e3a rancher-cis-benchmark \u542f\u7528\u544a\u8b66"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728",(0,i.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u8fd0\u884c CIS \u626b\u63cf\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"li"},"CIS Benchmark > \u626b\u63cf"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u96c6\u7fa4\u626b\u63cf\u914d\u7f6e\u6587\u4ef6\u3002\u8be5\u914d\u7f6e\u6587\u4ef6\u786e\u5b9a\u8981\u4f7f\u7528\u54ea\u4e2a CIS Benchmark \u7248\u672c\u4ee5\u53ca\u8981\u6267\u884c\u54ea\u4e9b\u6d4b\u8bd5\u3002\u5982\u679c\u4f60\u9009\u62e9 Default \u914d\u7f6e\u6587\u4ef6\uff0c\u5219 CIS Operator \u5c06\u9009\u62e9\u9002\u7528\u4e8e\u5b83\u6240\u5728\u7684 Kubernetes \u96c6\u7fa4\u7c7b\u578b\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9",(0,i.kt)("strong",{parentName:"li"},"\u5b9a\u65f6\u8fd0\u884c\u626b\u63cf"),"\u7684\u9009\u9879\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728",(0,i.kt)("strong",{parentName:"li"},"\u8c03\u5ea6"),"\u5b57\u6bb5\u4e2d\u8f93\u5165\u6709\u6548\u7684 ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Cron#CRON_expression"},"Cron \u8868\u8fbe\u5f0f"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u9009\u4e2d",(0,i.kt)("strong",{parentName:"li"},"\u544a\u8b66"),"\u4e0b\u544a\u8b66\u7c7b\u578b\u65c1\u8fb9\u7684\u6846\u3002"),(0,i.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09\u9009\u62e9\u4e00\u4e2a",(0,i.kt)("strong",{parentName:"li"},"\u4fdd\u7559\u8ba1\u6570"),"\uff0c\u8868\u793a\u4e3a\u8fd9\u4e2a\u5b9a\u65f6\u626b\u63cf\u7ef4\u62a4\u7684\u62a5\u544a\u6570\u91cf\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6b64\u8ba1\u6570\u4e3a 3\u3002\u8d85\u8fc7\u6b64\u4fdd\u7559\u9650\u5236\u65f6\uff0c\u65e7\u62a5\u544a\u5c06\u88ab\u5220\u9664\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u626b\u63cf\u8fd0\u884c\uff0c\u5e76\u6839\u636e\u8bbe\u7f6e\u7684 cron \u8868\u8fbe\u5f0f\u91cd\u65b0\u8c03\u5ea6\u3002\u5982\u679c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," \u5e94\u7528\u4e0b\u914d\u7f6e\u4e86\u8def\u7531\u548c\u63a5\u6536\u5668\uff0c\u5219\u4f1a\u5728\u626b\u63cf\u5b8c\u6210\u65f6\u53d1\u51fa\u544a\u8b66\u3002"),(0,i.kt)("p",null,"\u6bcf\u6b21\u8fd0\u884c\u626b\u63cf\u90fd\u4f1a\u751f\u6210\u4e00\u4efd\u5e26\u6709\u626b\u63cf\u7ed3\u679c\u7684\u62a5\u544a\u3002\u5982\u9700\u67e5\u770b\u6700\u65b0\u7684\u7ed3\u679c\uff0c\u8bf7\u5355\u51fb\u663e\u793a\u7684\u626b\u63cf\u540d\u79f0\u3002"))}m.isMDXComponent=!0}}]);