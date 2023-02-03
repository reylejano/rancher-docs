"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[88127],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>p});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),g=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=g(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=g(t),p=i,m=c["".concat(u,".").concat(p)]||c[p]||l[p]||a;return t?n.createElement(m,o(o({ref:r},d),{},{components:t})):n.createElement(m,o({ref:r},d))}));function p(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=c;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var g=2;g<a;g++)o[g]=t[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},93969:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>g});var n=t(87462),i=(t(67294),t(3905));const a={title:"Monitoring Guides"},o=void 0,s={unversionedId:"pages-for-subheaders/monitoring-alerting-guides",id:"version-2.5/pages-for-subheaders/monitoring-alerting-guides",title:"Monitoring Guides",description:"- Enable monitoring",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/monitoring-alerting-guides.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/monitoring-alerting-guides",permalink:"/zh/v2.5/pages-for-subheaders/monitoring-alerting-guides",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/monitoring-alerting-guides.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Monitoring Guides"},sidebar:"tutorialSidebar",previous:{title:"Resource Quota Type Reference",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types"},next:{title:"Enable Monitoring",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring"}},u={},g=[],d={toc:g};function l(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring"},"Enable monitoring")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring"},"Uninstall monitoring")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads"},"Monitoring workloads")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard"},"Customizing Grafana dashboards")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard"},"Persistent Grafana dashboards")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage"},"Debugging high memory usage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/migrate-to-rancher-v2.5+-monitoring"},"Migrating from Monitoring V1 to V2"))))}l.isMDXComponent=!0}}]);