"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[27647],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,u=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,m=d["".concat(s,".").concat(g)]||d[g]||l[g]||u;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=n.length,a=new Array(u);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<u;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>u,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const u={title:"\u8bbe\u7f6e Google Compute Engine \u4e91\u63d0\u4f9b\u5546"},a=void 0,i={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine",id:"version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine",title:"\u8bbe\u7f6e Google Compute Engine \u4e91\u63d0\u4f9b\u5546",description:"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3\u5982\u4f55\u5728 Rancher \u4e2d\u4e3a\u81ea\u5b9a\u4e49\u96c6\u7fa4\u542f\u7528 Google Compute Engine (GCE) \u4e91\u63d0\u4f9b\u5546\u3002\u81ea\u5b9a\u4e49\u96c6\u7fa4\u6307\u7684\u662f Rancher \u5728\u73b0\u6709\u8282\u70b9\u4e0a\u5b89\u88c5 Kubernetes \u7684\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"\u8bbe\u7f6e Google Compute Engine \u4e91\u63d0\u4f9b\u5546"},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u7f6e Azure \u4e91\u63d0\u4f9b\u5546",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/azure"},next:{title:"\u914d\u7f6e\u6811\u5185 vSphere \u4e91\u63d0\u4f9b\u5546",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-in-tree-vsphere"}},s={},p=[],c={toc:p};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3\u5982\u4f55\u5728 Rancher \u4e2d\u4e3a\u81ea\u5b9a\u4e49\u96c6\u7fa4\u542f\u7528 Google Compute Engine (GCE) \u4e91\u63d0\u4f9b\u5546\u3002\u81ea\u5b9a\u4e49\u96c6\u7fa4\u6307\u7684\u662f Rancher \u5728\u73b0\u6709\u8282\u70b9\u4e0a\u5b89\u88c5 Kubernetes \u7684\u96c6\u7fa4\u3002"),(0,o.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/cloud-providers/#gce"},"GCE \u4e91\u63d0\u4f9b\u5546\u7684\u5b98\u65b9 Kubernetes \u6587\u6863"),"\u3002"),(0,o.kt)("admonition",{title:"\u5148\u51b3\u6761\u4ef6\uff1a",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"GCE \u4e0a\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Identity")," ServiceAccount \u548c API \u8bbf\u95ee\u9700\u8981",(0,o.kt)("inlineCode",{parentName:"p"},"Computer Admin"),"\u6743\u9650\u3002")),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 Calico\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728",(0,o.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u9875\u9762\u4e2d\uff0c\u8fdb\u5165\u81ea\u5b9a\u4e49\u96c6\u7fa4\uff0c\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u22ee > \u7f16\u8f91 YAML")," \u5e76\u8f93\u5165\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'rancher_kubernetes_engine_config:\n  cloud_provider:\n    name: gce\n    customCloudProvider: |-\n      [Global]\n      project-id=<your project ID, optional>\n      network-name=<your network, optional if using default network>\n      subnetwork-name=<your subnetwork of the above network, optional if using default network>\n      node-instance-prefix=<your instance group name/your instance name specific prefix, required>\n      node-tags=<your network tags, must patch one or some tags, required>\n  network:\n    options:\n      calico_cloud_provider: "gce"\n    plugin: "calico"\n')))),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 Canal \u6216 Flannel\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728",(0,o.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u9875\u9762\u4e2d\uff0c\u8fdb\u5165\u81ea\u5b9a\u4e49\u96c6\u7fa4\uff0c\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u22ee > \u7f16\u8f91 YAML")," \u5e76\u8f93\u5165\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"rancher_kubernetes_engine_config:\n  cloud_provider:\n    name: gce\n    customCloudProvider: |-\n      [Global]\n      project-id=<your project ID, optional>\n      network-name=<your network, optional if using default network>\n      subnetwork-name=<your subnetwork of the above network, optional if using default network>\n      node-instance-prefix=<your instance group name/your instance name specific prefix, required>\n      node-tags=<your network tags, must patch one or some tags, required>\n  services:\n    kube_controller:\n      extra_args:\n        configure-cloud-routes: true # we need to allow the cloud provider configure the routes for the hosts\n")))))}l.isMDXComponent=!0}}]);