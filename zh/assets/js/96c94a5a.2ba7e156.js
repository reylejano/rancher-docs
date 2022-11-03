"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[45006],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54564:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Configure Alerts for Periodic Scan on a Schedule"},l=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule",title:"Configure Alerts for Periodic Scan on a Schedule",description:"Rancher provides a set of alerts for cluster scans. which are not configured to have notifiers by default:",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule.md",sourceDirName:"how-to-guides/advanced-user-guides/cis-scan-guides",slug:"/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662675846,formattedLastUpdatedAt:"2022/9/8",frontMatter:{title:"Configure Alerts for Periodic Scan on a Schedule"},sidebar:"tutorialSidebar",previous:{title:"Skip Tests",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests"},next:{title:"Delete a Report",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/cis-scan-guides/delete-a-report"}},u={},d=[],p={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rancher provides a set of alerts for cluster scans. which are not configured to have notifiers by default:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A manual cluster scan was completed"),(0,o.kt)("li",{parentName:"ul"},"A manual cluster scan has failures"),(0,o.kt)("li",{parentName:"ul"},"A scheduled cluster scan was completed"),(0,o.kt)("li",{parentName:"ul"},"A scheduled cluster scan has failures")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisite")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You need to configure a ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/notifiers"},"notifier")," before configuring, sending, or receiving alerts."))),(0,o.kt)("p",null,"To activate an existing alert for a CIS scan result,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the cluster view in Rancher, click ",(0,o.kt)("strong",{parentName:"li"},"Tools > Alerts.")),(0,o.kt)("li",{parentName:"ol"},"Go to the section called ",(0,o.kt)("strong",{parentName:"li"},"A set of alerts for cluster scans.")),(0,o.kt)("li",{parentName:"ol"},"Go to the alert you want to activate and click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Activate.")),(0,o.kt)("li",{parentName:"ol"},"Go to the alert rule group ",(0,o.kt)("strong",{parentName:"li"},"A set of alerts for cluster scans")," and click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Edit.")),(0,o.kt)("li",{parentName:"ol"},"Scroll down to the ",(0,o.kt)("strong",{parentName:"li"},"Alert")," section. In the ",(0,o.kt)("strong",{parentName:"li"},"To")," field, select the notifier that you would like to use for sending alert notifications."),(0,o.kt)("li",{parentName:"ol"},"Optional: To limit the frequency of the notifications, click on ",(0,o.kt)("strong",{parentName:"li"},"Show advanced options")," and configure the time interval of the alerts."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The notifications will be triggered when the a scan is run on a cluster and the active alerts have satisfied conditions."),(0,o.kt)("p",null,"To create a new alert,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the cluster view and click ",(0,o.kt)("strong",{parentName:"li"},"Tools > CIS Scans.")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add Alert.")),(0,o.kt)("li",{parentName:"ol"},"Fill out the form."),(0,o.kt)("li",{parentName:"ol"},"Enter a name for the alert."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Is")," field, set the alert to be triggered when a scan is completed or when a scan has a failure."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Send a")," field, set the alert as a ",(0,o.kt)("strong",{parentName:"li"},"Critical,")," ",(0,o.kt)("strong",{parentName:"li"},"Warning,")," or ",(0,o.kt)("strong",{parentName:"li"},"Info")," alert level."),(0,o.kt)("li",{parentName:"ol"},"Choose a ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/notifiers"},"notifier")," for the alert.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The alert is created and activated. The notifications will be triggered when the a scan is run on a cluster and the active alerts have satisfied conditions."),(0,o.kt)("p",null,"For more information about alerts, refer to ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/cluster-alerts"},"this page.")))}f.isMDXComponent=!0}}]);