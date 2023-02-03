"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[20988],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var s=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=s.createContext({}),u=function(e){var t=s.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},g=s.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=u(r),d=a,h=g["".concat(l,".").concat(d)]||g[d]||c[d]||o;return r?s.createElement(h,n(n({ref:t},p),{},{components:r})):s.createElement(h,n({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,n=new Array(o);n[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,n[1]=i;for(var u=2;u<o;u++)n[u]=r[u];return s.createElement.apply(null,n)}return s.createElement.apply(null,r)}g.displayName="MDXCreateElement"},10659:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var s=r(87462),a=(r(67294),r(3905));const o={title:"Kubernetes Persistent Storage: Volumes and Storage Classes",description:"Learn about the two ways with which you can create persistent storage in Kubernetes: persistent volumes and storage classes"},n=void 0,i={unversionedId:"pages-for-subheaders/create-kubernetes-persistent-storage",id:"version-2.0-2.4/pages-for-subheaders/create-kubernetes-persistent-storage",title:"Kubernetes Persistent Storage: Volumes and Storage Classes",description:"Learn about the two ways with which you can create persistent storage in Kubernetes: persistent volumes and storage classes",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/create-kubernetes-persistent-storage.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/create-kubernetes-persistent-storage",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/create-kubernetes-persistent-storage",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/create-kubernetes-persistent-storage.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Kubernetes Persistent Storage: Volumes and Storage Classes",description:"Learn about the two ways with which you can create persistent storage in Kubernetes: persistent volumes and storage classes"},sidebar:"tutorialSidebar",previous:{title:"Cluster Autoscaler with AWS EC2 Auto Scaling Groups",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/install-cluster-autoscaler/use-aws-ec2-auto-scaling-groups"},next:{title:"Manage Persistent Storage",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/manage-persistent-storage"}},l={},u=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Setting up Existing Storage",id:"setting-up-existing-storage",level:3},{value:"Dynamically Provisioning New Storage in Rancher",id:"dynamically-provisioning-new-storage-in-rancher",level:3},{value:"Longhorn Storage",id:"longhorn-storage",level:3},{value:"Provisioning Storage Examples",id:"provisioning-storage-examples",level:3},{value:"GlusterFS Volumes",id:"glusterfs-volumes",level:3},{value:"iSCSI Volumes",id:"iscsi-volumes",level:3},{value:"hostPath Volumes",id:"hostpath-volumes",level:3},{value:"Related Links",id:"related-links",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When deploying an application that needs to retain data, you'll need to create persistent storage. Persistent storage allows you to store application data external from the pod running your application. This storage practice allows you to maintain application data, even if the application's pod fails."),(0,a.kt)("p",null,"The documents in this section assume that you understand the Kubernetes concepts of persistent volumes, persistent volume claims, and storage classes. For more information, refer to the section on ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage"},"how storage works.")),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To set up persistent storage, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Manage Volumes")," ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-role-reference"},"role")," is required."),(0,a.kt)("p",null,"If you are provisioning storage for a cluster hosted in the cloud, the storage and cluster hosts must have the same cloud provider."),(0,a.kt)("p",null,"For provisioning new storage with Rancher, the cloud provider must be enabled. For details on enabling cloud providers, refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/set-up-cloud-providers"},"this page.")),(0,a.kt)("p",null,"For attaching existing persistent storage to a cluster, the cloud provider does not need to be enabled."),(0,a.kt)("h3",{id:"setting-up-existing-storage"},"Setting up Existing Storage"),(0,a.kt)("p",null,"The overall workflow for setting up existing storage is as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Set up your persistent storage. This may be storage in an infrastructure provider, or it could be your own storage."),(0,a.kt)("li",{parentName:"ol"},"Add a persistent volume (PV) that refers to the persistent storage."),(0,a.kt)("li",{parentName:"ol"},"Add a persistent volume claim (PVC) that refers to the PV."),(0,a.kt)("li",{parentName:"ol"},"Mount the PVC as a volume in your workload.")),(0,a.kt)("p",null,"For details and prerequisites, refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage"},"this page.")),(0,a.kt)("h3",{id:"dynamically-provisioning-new-storage-in-rancher"},"Dynamically Provisioning New Storage in Rancher"),(0,a.kt)("p",null,"The overall workflow for provisioning new storage is as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add a StorageClass and configure it to use your storage provider. The StorageClass could refer to storage in an infrastructure provider, or it could refer to your own storage."),(0,a.kt)("li",{parentName:"ol"},"Add a persistent volume claim (PVC) that refers to the storage class."),(0,a.kt)("li",{parentName:"ol"},"Mount the PVC as a volume for your workload.")),(0,a.kt)("p",null,"For details and prerequisites, refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage"},"this page.")),(0,a.kt)("h3",{id:"longhorn-storage"},"Longhorn Storage"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://longhorn.io/"},"Longhorn")," is a lightweight, reliable and easy-to-use distributed block storage system for Kubernetes."),(0,a.kt)("p",null,"Longhorn is free, open source software. Originally developed by Rancher Labs, it is now being developed as a sandbox project of the Cloud Native Computing Foundation. It can be installed on any Kubernetes cluster with Helm, with kubectl, or with the Rancher UI."),(0,a.kt)("p",null,"If you have a pool of block storage, Longhorn can help you provide persistent storage to your Kubernetes cluster without relying on cloud providers. For more information about Longhorn features, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.0.2/what-is-longhorn/"},"documentation.")),(0,a.kt)("h3",{id:"provisioning-storage-examples"},"Provisioning Storage Examples"),(0,a.kt)("p",null,"We provide examples of how to provision storage with ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/nfs-storage"},"NFS,")," ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage"},"vSphere,")," and ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/persistent-storage-in-amazon-ebs"},"Amazon's EBS.")),(0,a.kt)("h3",{id:"glusterfs-volumes"},"GlusterFS Volumes"),(0,a.kt)("p",null,"In clusters that store data on GlusterFS volumes, you may experience an issue where pods fail to mount volumes after restarting the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet"),". For details on preventing this from happening, refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes"},"this page.")),(0,a.kt)("h3",{id:"iscsi-volumes"},"iSCSI Volumes"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher Launched Kubernetes clusters")," that store data on iSCSI volumes, you may experience an issue where kubelets fail to automatically connect with iSCSI volumes. For details on resolving this issue, refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes"},"this page.")),(0,a.kt)("h3",{id:"hostpath-volumes"},"hostPath Volumes"),(0,a.kt)("p",null,"Before you create a hostPath volume, you need to set up an ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/services/services-extras/#extra-binds/"},"extra_bind")," in your cluster configuration. This will mount the path as a volume in your kubelets, which can then be used for hostPath volumes in your workloads."),(0,a.kt)("h3",{id:"related-links"},"Related Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/"},"Kubernetes Documentation: Storage"))))}c.isMDXComponent=!0}}]);