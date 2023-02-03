"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[5635],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(r),m=n,p=h["".concat(l,".").concat(m)]||h[m]||g[m]||i;return r?a.createElement(p,o(o({ref:t},c),{},{components:r})):a.createElement(p,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},62457:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={title:"Built-in Dashboards"},o=void 0,s={unversionedId:"integrations-in-rancher/monitoring-and-alerting/built-in-dashboards",id:"version-2.6/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards",title:"Built-in Dashboards",description:"Grafana UI",source:"@site/versioned_docs/version-2.6/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards.md",sourceDirName:"integrations-in-rancher/monitoring-and-alerting",slug:"/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards",permalink:"/v2.6/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards.md",tags:[],version:"2.6",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{title:"Built-in Dashboards"},sidebar:"tutorialSidebar",previous:{title:"Role-based Access Control",permalink:"/v2.6/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring"},next:{title:"Windows Cluster Support for Monitoring V2",permalink:"/v2.6/integrations-in-rancher/monitoring-and-alerting/windows-support"}},l={},u=[{value:"Grafana UI",id:"grafana-ui",level:2},{value:"Customizing Grafana",id:"customizing-grafana",level:3},{value:"Persistent Grafana Dashboards",id:"persistent-grafana-dashboards",level:3},{value:"Access to Grafana",id:"access-to-grafana",level:3},{value:"Alertmanager UI",id:"alertmanager-ui",level:2},{value:"Accessing the Alertmanager UI",id:"accessing-the-alertmanager-ui",level:3},{value:"Viewing Default Alerts",id:"viewing-default-alerts",level:3},{value:"Prometheus UI",id:"prometheus-ui",level:2},{value:"Viewing the Prometheus Targets",id:"viewing-the-prometheus-targets",level:3},{value:"Viewing the PrometheusRules",id:"viewing-the-prometheusrules",level:3}],c={toc:u};function g(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"grafana-ui"},"Grafana UI"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/"},"Grafana")," allows you to query, visualize, alert on and understand your metrics no matter where they are stored. Create, explore, and share dashboards with your team and foster a data driven culture."),(0,n.kt)("p",null,"To see the default dashboards for time series data visualization, go to the Grafana UI."),(0,n.kt)("h3",{id:"customizing-grafana"},"Customizing Grafana"),(0,n.kt)("p",null,"To view and customize the PromQL queries powering the Grafana dashboard, see ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard"},"this page.")),(0,n.kt)("h3",{id:"persistent-grafana-dashboards"},"Persistent Grafana Dashboards"),(0,n.kt)("p",null,"To create a persistent Grafana dashboard, see ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard"},"this page.")),(0,n.kt)("h3",{id:"access-to-grafana"},"Access to Grafana"),(0,n.kt)("p",null,"For information about role-based access control for Grafana, see ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring#role-based-access-control-for-grafana"},"this section.")),(0,n.kt)("h2",{id:"alertmanager-ui"},"Alertmanager UI"),(0,n.kt)("p",null,"When ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," is installed, the Prometheus Alertmanager UI is deployed, allowing you to view your alerts and the current Alertmanager configuration."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This section assumes familiarity with how monitoring components work together. For more information about Alertmanager, see ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works#how-alertmanager-works"},"this section."))),(0,n.kt)("h3",{id:"accessing-the-alertmanager-ui"},"Accessing the Alertmanager UI"),(0,n.kt)("p",null,"The Alertmanager UI lets you see the most recently fired alerts."),(0,n.kt)("admonition",{title:"Prerequisite:",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," application must be installed.")),(0,n.kt)("p",null,"To see the Alertmanager UI,"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,n.kt)("li",{parentName:"ol"},"On the ",(0,n.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to see the Alertmanager UI, click ",(0,n.kt)("strong",{parentName:"li"},"Explore"),"."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Monitoring"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Alertmanager"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The Alertmanager UI opens in a new tab. For help with configuration, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/alertmanager/"},"official Alertmanager documentation.")),(0,n.kt)("p",null,"For more information on configuring Alertmanager in Rancher, see ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager"},"this page.")),(0,n.kt)("figcaption",null,"The Alertmanager UI"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alertmanager UI",src:r(75729).Z,width:"2102",height:"930"})),(0,n.kt)("h3",{id:"viewing-default-alerts"},"Viewing Default Alerts"),(0,n.kt)("p",null,"To see alerts that are fired by default, go to the Alertmanager UI and click ",(0,n.kt)("strong",{parentName:"p"},"Expand all groups"),"."),(0,n.kt)("h2",{id:"prometheus-ui"},"Prometheus UI"),(0,n.kt)("p",null,"By default, the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kube-state-metrics"},"kube-state-metrics service")," provides a wealth of information about CPU and memory utilization to the monitoring application. These metrics cover Kubernetes resources across namespaces. This means that in order to see resource metrics for a service, you don't need to create a new ServiceMonitor for it. Because the data is already in the time series database, you can go to the Prometheus UI and run a PromQL query to get the information. The same query can be used to configure a Grafana dashboard to show a graph of those metrics over time."),(0,n.kt)("p",null,"To see the Prometheus UI, install ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),". Then:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,n.kt)("li",{parentName:"ol"},"On the ",(0,n.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to see the Prometheus UI and click ",(0,n.kt)("strong",{parentName:"li"},"Explore"),"."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Monitoring"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Prometheus Graph"),".")),(0,n.kt)("figcaption",null,"Prometheus Graph UI"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Prometheus Graph UI",src:r(54586).Z,width:"2240",height:"1060"})),(0,n.kt)("h3",{id:"viewing-the-prometheus-targets"},"Viewing the Prometheus Targets"),(0,n.kt)("p",null,"To see what services you are monitoring, you will need to see your targets. Targets are set up by ServiceMonitors and PodMonitors as sources to scrape metrics from. You won't need to directly edit targets, but the Prometheus UI can be useful for giving you an overview of all of the sources of metrics that are being scraped."),(0,n.kt)("p",null,"To see the Prometheus Targets, install ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),". Then:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,n.kt)("li",{parentName:"ol"},"On the ",(0,n.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to see the Prometheus targets and click ",(0,n.kt)("strong",{parentName:"li"},"Explore"),"."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Monitoring"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Prometheus Targets"),".")),(0,n.kt)("figcaption",null,"Targets in the Prometheus UI"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Prometheus Targets UI",src:r(14600).Z,width:"2228",height:"1426"})),(0,n.kt)("h3",{id:"viewing-the-prometheusrules"},"Viewing the PrometheusRules"),(0,n.kt)("p",null,"When you define a Rule (which is declared within a RuleGroup in a PrometheusRule resource), the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md#rule"},"spec of the Rule itself")," contains labels that are used by Alertmanager to figure out which Route should receive a certain Alert."),(0,n.kt)("p",null,"To see the PrometheusRules, install ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),". Then:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,n.kt)("li",{parentName:"ol"},"On the ",(0,n.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to see the visualizations and click ",(0,n.kt)("strong",{parentName:"li"},"Explore"),"."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Monitoring"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Prometheus Rules"),".")),(0,n.kt)("p",null,"You can also see the rules in the Prometheus UI:"),(0,n.kt)("figcaption",null,"Rules in the Prometheus UI"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"PrometheusRules UI",src:r(96232).Z,width:"2212",height:"1488"})),(0,n.kt)("p",null,"For more information on configuring PrometheusRules in Rancher, see ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules"},"this page.")))}g.isMDXComponent=!0},75729:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/alertmanager-ui-89d0ac64bf76e827dcaedc22cc78c670.png"},54586:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/prometheus-graph-ui-a0b6b6fe31625c199d4c896002972f23.png"},96232:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/prometheus-rules-ui-7f0740aeee34fa07335e62d5569542cf.png"},14600:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/prometheus-targets-ui-fc1b78f126988b768dbc914035b558a3.png"}}]);