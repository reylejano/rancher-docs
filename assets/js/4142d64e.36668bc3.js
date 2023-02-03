"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[51516],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(t),p=o,f=h["".concat(l,".").concat(p)]||h[p]||d[p]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},92197:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const i={title:"Behavior Differences Between RKE1 and RKE2"},a=void 0,s={unversionedId:"how-to-guides/new-user-guides/launch-kubernetes-with-rancher/rke1-vs-rke2-differences",id:"how-to-guides/new-user-guides/launch-kubernetes-with-rancher/rke1-vs-rke2-differences",title:"Behavior Differences Between RKE1 and RKE2",description:"RKE2, also known as RKE Government, is a Kubernetes distribution that focuses on security and compliance for U.S. Federal Government entities. It is considered the next iteration of the Rancher Kubernetes Engine, now known as RKE1.",source:"@site/docs/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/rke1-vs-rke2-differences.md",sourceDirName:"how-to-guides/new-user-guides/launch-kubernetes-with-rancher",slug:"/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/rke1-vs-rke2-differences",permalink:"/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/rke1-vs-rke2-differences",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/rke1-vs-rke2-differences.md",tags:[],version:"current",lastUpdatedAt:1673641462,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{title:"Behavior Differences Between RKE1 and RKE2"},sidebar:"tutorialSidebar",previous:{title:"Provisioning Kubernetes Clusters in Nutanix AOS",permalink:"/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos"},next:{title:"Rancher Agents",permalink:"/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/about-rancher-agents"}},l={},c=[{value:"Control Plane Components",id:"control-plane-components",level:3},{value:"Cluster API",id:"cluster-api",level:3},{value:"Terminology",id:"terminology",level:3}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"RKE2, also known as RKE Government, is a Kubernetes distribution that focuses on security and compliance for U.S. Federal Government entities. It is considered the next iteration of the Rancher Kubernetes Engine, now known as RKE1."),(0,o.kt)("p",null,"RKE1 and RKE2 have several slight behavioral differences to note, and this page will highlight some of these at a high level."),(0,o.kt)("h3",{id:"control-plane-components"},"Control Plane Components"),(0,o.kt)("p",null,"RKE1 uses Docker for deploying and managing control plane components, and it also uses Docker as the container runtime for Kubernetes. By contrast, RKE2 launches control plane components as static pods that are managed by the kubelet. RKE2's container runtime is containerd, which allows things such as mirroring a container image registry. RKE1 with Docker does not allow mirroring."),(0,o.kt)("h3",{id:"cluster-api"},"Cluster API"),(0,o.kt)("p",null,"RKE2/K3s provisioning is built on top of the Cluster API (CAPI) upstream framework which often makes RKE2-provisioned clusters behave differently than RKE1-provisioned clusters."),(0,o.kt)("p",null,"When you make changes to your cluster configuration in RKE2, this ",(0,o.kt)("strong",{parentName:"p"},"may")," result in nodes reprovisioning. This is controlled by CAPI controllers and not by Rancher itself. Note that for etcd nodes, the same behavior does not apply."),(0,o.kt)("p",null,"The following are some specific example configuration changes that may cause the described behavior:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When editing the cluster and enabling ",(0,o.kt)("inlineCode",{parentName:"p"},"drain before delete"),", the existing control plane nodes and worker are deleted and new nodes are created.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When nodes are being provisioned and a scale down operation is performed, rather than scaling down the desired number of nodes, it is possible that the currently provisioning nodes get deleted and new nodes are provisioned to reach the desired node count. Please note that this is a bug in Cluster API, and it will be fixed in an upcoming release. Once fixed, Rancher will update the documentation."))),(0,o.kt)("p",null,"Users who are used to RKE1 provisioning should take note of this new RKE2 behavior which may be unexpected."),(0,o.kt)("h3",{id:"terminology"},"Terminology"),(0,o.kt)("p",null,"You will notice that some terms have changed or gone away going from RKE1 to RKE2. For example, in RKE1 provisioning, you use ",(0,o.kt)("strong",{parentName:"p"},"node templates"),"; in RKE2 provisioning, you can configure your cluster node pools when creating or editing the cluster. Another example is that the term ",(0,o.kt)("strong",{parentName:"p"},"node pool")," in RKE1 is now known as ",(0,o.kt)("strong",{parentName:"p"},"machine pool")," in RKE2."))}d.isMDXComponent=!0}}]);