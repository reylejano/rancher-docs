"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[35741],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||i;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},61318:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"Registering Existing Clusters"},s=void 0,o={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters",title:"Registering Existing Clusters",description:"The cluster registration feature replaced the feature to import clusters.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters.md",tags:[],version:"current",lastUpdatedAt:1669324779,formattedLastUpdatedAt:"Nov 24, 2022",frontMatter:{title:"Registering Existing Clusters"},sidebar:"tutorialSidebar",previous:{title:"Migrating vSphere In-tree Volumes to CSI",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/migrate-from-in-tree-to-out-of-tree"},next:{title:"Launching Kubernetes with Rancher",permalink:"/pages-for-subheaders/launch-kubernetes-with-rancher"}},l={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Kubernetes Node Roles",id:"kubernetes-node-roles",level:3},{value:"Permissions",id:"permissions",level:3},{value:"EKS, AKS and GKE Clusters",id:"eks-aks-and-gke-clusters",level:3},{value:"Registering a Cluster",id:"registering-a-cluster",level:2},{value:"Configuring an Imported EKS, AKS or GKE Cluster with Terraform",id:"configuring-an-imported-eks-aks-or-gke-cluster-with-terraform",level:3},{value:"Management Capabilities for Registered Clusters",id:"management-capabilities-for-registered-clusters",level:2},{value:"Features for All Registered Clusters",id:"features-for-all-registered-clusters",level:3},{value:"Additional Features for Registered RKE2 and K3s Clusters",id:"additional-features-for-registered-rke2-and-k3s-clusters",level:3},{value:"Additional Features for Registered EKS, AKS and GKE Clusters",id:"additional-features-for-registered-eks-aks-and-gke-clusters",level:3},{value:"Configuring RKE2 and K3s Cluster Upgrades",id:"configuring-rke2-and-k3s-cluster-upgrades",level:2},{value:"Debug Logging and Troubleshooting for Registered RKE2 and K3s Clusters",id:"debug-logging-and-troubleshooting-for-registered-rke2-and-k3s-clusters",level:2},{value:"Authorized Cluster Endpoint Support for RKE2 and K3s Clusters",id:"authorized-cluster-endpoint-support-for-rke2-and-k3s-clusters",level:2},{value:"<strong>Manual steps to be taken on the control plane of each downstream cluster to enable ACE:</strong>",id:"manual-steps-to-be-taken-on-the-control-plane-of-each-downstream-cluster-to-enable-ace",level:6},{value:"Annotating Registered Clusters",id:"annotating-registered-clusters",level:2}],d={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The cluster registration feature replaced the feature to import clusters."),(0,a.kt)("p",null,"The control that Rancher has to manage a registered cluster depends on the type of cluster. For details, see ",(0,a.kt)("a",{parentName:"p",href:"#management-capabilities-for-registered-clusters"},"Management Capabilities for Registered Clusters.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"kubernetes-node-roles"},"Kubernetes Node Roles"),(0,a.kt)("p",null,"Registered RKE Kubernetes clusters must have all three node roles - etcd, controlplane and worker. A cluster with only controlplane components cannot be registered in Rancher."),(0,a.kt)("p",null,"For more information on RKE node roles, see the ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/checklist-for-production-ready-clusters#cluster-architecture"},"best practices.")),(0,a.kt)("h3",{id:"permissions"},"Permissions"),(0,a.kt)("p",null,"If your existing Kubernetes cluster already has a ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-admin")," role defined, you must have this ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-admin")," privilege to register the cluster in Rancher."),(0,a.kt)("p",null,"In order to apply the privilege, you need to run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create clusterrolebinding cluster-admin-binding \\\n  --clusterrole cluster-admin \\\n  --user [USER_ACCOUNT]\n")),(0,a.kt)("p",null,"before running the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," command to register the cluster."),(0,a.kt)("p",null,"By default, GKE users are not given this privilege, so you will need to run the command before registering GKE clusters. To learn more about role-based access control for GKE, please click ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control"},"here"),"."),(0,a.kt)("h3",{id:"eks-aks-and-gke-clusters"},"EKS, AKS and GKE Clusters"),(0,a.kt)("p",null,"EKS, AKS and GKE clusters must have at least one managed node group to be imported into Rancher or provisioned from Rancher successfully."),(0,a.kt)("h2",{id:"registering-a-cluster"},"Registering a Cluster"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," page, ",(0,a.kt)("strong",{parentName:"li"},"Import Existing"),"."),(0,a.kt)("li",{parentName:"ol"},"Choose the type of cluster."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("strong",{parentName:"li"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,a.kt)("strong",{parentName:"li"},"Add Member")," to add users that can access the cluster. Use the ",(0,a.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user."),(0,a.kt)("li",{parentName:"ol"},"If you are importing a generic Kubernetes cluster in Rancher, perform the following steps for setup:",(0,a.kt)("br",null),"\na. Click ",(0,a.kt)("strong",{parentName:"li"},"Agent Environment Variables")," under ",(0,a.kt)("strong",{parentName:"li"},"Cluster Options")," to set environment variables for ",(0,a.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/about-rancher-agents"},"rancher cluster agent"),". The environment variables can be set using key value pairs. If rancher agent requires use of proxy to communicate with Rancher server, ",(0,a.kt)("inlineCode",{parentName:"li"},"HTTP_PROXY"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"HTTPS_PROXY")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"NO_PROXY")," environment variables can be set using agent environment variables.",(0,a.kt)("br",null),"\nb. Enable Project Network Isolation to ensure the cluster supports Kubernetes ",(0,a.kt)("inlineCode",{parentName:"li"},"NetworkPolicy")," resources. Users can select the ",(0,a.kt)("strong",{parentName:"li"},"Project Network Isolation")," option under the ",(0,a.kt)("strong",{parentName:"li"},"Advanced Options")," dropdown to do so."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ol"},"The prerequisite for ",(0,a.kt)("inlineCode",{parentName:"li"},"cluster-admin")," privileges is shown (see ",(0,a.kt)("strong",{parentName:"li"},"Prerequisites")," above), including an example command to fulfil the prerequisite."),(0,a.kt)("li",{parentName:"ol"},"Copy the ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl")," command to your clipboard and run it on a node where kubeconfig is configured to point to the cluster you want to import. If you are unsure it is configured correctly, run ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl get nodes")," to verify before running the command shown in Rancher."),(0,a.kt)("li",{parentName:"ol"},"If you are using self-signed certificates, you will receive the message ",(0,a.kt)("inlineCode",{parentName:"li"},"certificate signed by unknown authority"),". To work around this validation, copy the command starting with ",(0,a.kt)("inlineCode",{parentName:"li"},"curl")," displayed in Rancher to your clipboard. Then run the command on a node where kubeconfig is configured to point to the cluster you want to import."),(0,a.kt)("li",{parentName:"ol"},"When you finish running the command(s) on your node, click ",(0,a.kt)("strong",{parentName:"li"},"Done"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your cluster is registered and assigned a state of ",(0,a.kt)("strong",{parentName:"li"},"Pending"),". Rancher is deploying resources to manage your cluster."),(0,a.kt)("li",{parentName:"ul"},"You can access your cluster after its state is updated to ",(0,a.kt)("strong",{parentName:"li"},"Active"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Active")," clusters are assigned two Projects: ",(0,a.kt)("inlineCode",{parentName:"li"},"Default")," (containing the namespace ",(0,a.kt)("inlineCode",{parentName:"li"},"default"),") and ",(0,a.kt)("inlineCode",{parentName:"li"},"System")," (containing the namespaces ",(0,a.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-public")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-system"),", if present).")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can not re-register a cluster that is currently active in a Rancher setup.")),(0,a.kt)("h3",{id:"configuring-an-imported-eks-aks-or-gke-cluster-with-terraform"},"Configuring an Imported EKS, AKS or GKE Cluster with Terraform"),(0,a.kt)("p",null,"You should define ",(0,a.kt)("strong",{parentName:"p"},"only")," the minimum fields that Rancher requires when importing an EKS, AKS or GKE cluster with Terraform. This is important as Rancher will overwrite what was in the cluster configuration with any config that the user has provided."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Even a small difference between the current cluster and a user-provided config could have unexpected results.")),(0,a.kt)("p",null,"The minimum config fields required by Rancher to import EKS clusters with Terraform using ",(0,a.kt)("inlineCode",{parentName:"p"},"eks_config_v2")," are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cloud_credential_id"),(0,a.kt)("li",{parentName:"ul"},"name"),(0,a.kt)("li",{parentName:"ul"},"region"),(0,a.kt)("li",{parentName:"ul"},"imported (this field should always be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," for imported clusters)")),(0,a.kt)("p",null,"Example YAML configuration for imported EKS clusters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'resource "rancher2_cluster" "my-eks-to-import" {\n  name        = "my-eks-to-import"\n  description = "Terraform EKS Cluster"\n  eks_config_v2 {\n    cloud_credential_id = rancher2_cloud_credential.aws.id\n    name                = var.aws_eks_name\n    region              = var.aws_region\n    imported            = true\n  }\n}\n')),(0,a.kt)("p",null,"You can find additional examples for other cloud providers in the ",(0,a.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/rancher/rancher2/latest/docs/resources/cluster"},"Rancher2 Terraform Provider documentation"),"."),(0,a.kt)("h2",{id:"management-capabilities-for-registered-clusters"},"Management Capabilities for Registered Clusters"),(0,a.kt)("p",null,"The control that Rancher has to manage a registered cluster depends on the type of cluster."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#features-for-all-registered-clusters"},"Features for All Registered Clusters")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#additional-features-for-registered-rke2-and-k3s-clusters"},"Additional Features for Registered RKE2 and K3s Clusters")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#additional-features-for-registered-eks-aks-and-gke-clusters"},"Additional Features for Registered EKS, AKS and GKE Clusters"))),(0,a.kt)("h3",{id:"features-for-all-registered-clusters"},"Features for All Registered Clusters"),(0,a.kt)("p",null,"After registering a cluster, the cluster owner can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"Manage cluster access")," through role-based access control"),(0,a.kt)("li",{parentName:"ul"},"Enable ",(0,a.kt)("a",{parentName:"li",href:"/pages-for-subheaders/monitoring-and-alerting"},"monitoring, alerts and notifiers")),(0,a.kt)("li",{parentName:"ul"},"Enable ",(0,a.kt)("a",{parentName:"li",href:"/pages-for-subheaders/logging"},"logging")),(0,a.kt)("li",{parentName:"ul"},"Enable ",(0,a.kt)("a",{parentName:"li",href:"/pages-for-subheaders/istio"},"Istio")),(0,a.kt)("li",{parentName:"ul"},"Manage projects and workloads")),(0,a.kt)("h3",{id:"additional-features-for-registered-rke2-and-k3s-clusters"},"Additional Features for Registered RKE2 and K3s Clusters"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/"},"K3s")," is a lightweight, fully compliant Kubernetes distribution for edge installations.\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io"},"RKE2")," is Rancher's next-generation Kubernetes distribution for datacenter and cloud installations."),(0,a.kt)("p",null,"When an RKE2 or K3s cluster is registered in Rancher, Rancher will recognize it. The Rancher UI will expose the features for ",(0,a.kt)("a",{parentName:"p",href:"#features-for-all-registered-clusters"},"all registered clusters,")," in addition to the following features for editing and upgrading the cluster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ability to ",(0,a.kt)("a",{parentName:"li",href:"/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"},"upgrade the Kubernetes version")),(0,a.kt)("li",{parentName:"ul"},"The ability to configure the maximum number of nodes that will be upgraded concurrently"),(0,a.kt)("li",{parentName:"ul"},"The ability to see a read-only version of the cluster's configuration arguments and environment variables used to launch each node in the cluster")),(0,a.kt)("h3",{id:"additional-features-for-registered-eks-aks-and-gke-clusters"},"Additional Features for Registered EKS, AKS and GKE Clusters"),(0,a.kt)("p",null,"Registering an Amazon EKS, Azure AKS or GKE cluster allows Rancher to treat it as though it were created in Rancher."),(0,a.kt)("p",null,"Amazon EKS, Azure AKS and GKE clusters can now be registered in Rancher. For the most part, these registered clusters are treated the same way as clusters created in the Rancher UI, except for deletion."),(0,a.kt)("p",null,"When you delete an EKS, AKS or GKE cluster that was created in Rancher, the cluster is destroyed. When you delete a cluster that was registered in Rancher, it is disconnected from the Rancher server, but it still exists, and you can still access it in the same way you did before it was registered in Rancher."),(0,a.kt)("p",null,"The capabilities for registered clusters are listed in the table on ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"this page.")),(0,a.kt)("h2",{id:"configuring-rke2-and-k3s-cluster-upgrades"},"Configuring RKE2 and K3s Cluster Upgrades"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It is a Kubernetes best practice to back up the cluster before upgrading. When upgrading a high-availability K3s cluster with an external database, back up the database in whichever way is recommended by the relational database provider.")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"concurrency")," is the maximum number of nodes that are permitted to be unavailable during an upgrade. If number of unavailable nodes is larger than the ",(0,a.kt)("strong",{parentName:"p"},"concurrency,")," the upgrade will fail. If an upgrade fails, you may need to repair or remove failed nodes before the upgrade can succeed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Controlplane concurrency:")," The maximum number of server nodes to upgrade at a single time; also the maximum unavailable server nodes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Worker concurrency:")," The maximum number worker nodes to upgrade at the same time; also the maximum unavailable worker nodes")),(0,a.kt)("p",null,"In the RKE2 and K3s documentation, controlplane nodes are called server nodes. These nodes run the Kubernetes master, which maintains the desired state of the cluster. By default, these controlplane nodes have the capability to have workloads scheduled to them by default."),(0,a.kt)("p",null,"Also in the RKE2 and K3s documentation, nodes with the worker role are called agent nodes. Any workloads or pods that are deployed in the cluster can be scheduled to these nodes by default."),(0,a.kt)("h2",{id:"debug-logging-and-troubleshooting-for-registered-rke2-and-k3s-clusters"},"Debug Logging and Troubleshooting for Registered RKE2 and K3s Clusters"),(0,a.kt)("p",null,"Nodes are upgraded by the system upgrade controller running in the downstream cluster. Based on the cluster configuration, Rancher deploys two ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-upgrade-controller#example-upgrade-plan"},"plans")," to upgrade nodes: one for controlplane nodes and one for workers. The system upgrade controller follows the plans and upgrades the nodes."),(0,a.kt)("p",null,"To enable debug logging on the system upgrade controller deployment, edit the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-upgrade-controller/blob/50a4c8975543d75f1d76a8290001d87dc298bdb4/manifests/system-upgrade-controller.yaml#L32"},"configmap")," to set the debug environment variable to true. Then restart the ",(0,a.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller")," pod."),(0,a.kt)("p",null,"Logs created by the ",(0,a.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller")," can be viewed by running this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl logs -n cattle-system system-upgrade-controller\n")),(0,a.kt)("p",null,"The current status of the plans can be viewed with this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get plans -A -o yaml\n")),(0,a.kt)("p",null,"If the cluster becomes stuck in upgrading, restart the ",(0,a.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller"),"."),(0,a.kt)("p",null,"To prevent issues when upgrading, the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/"},"Kubernetes upgrade best practices")," should be followed."),(0,a.kt)("h2",{id:"authorized-cluster-endpoint-support-for-rke2-and-k3s-clusters"},"Authorized Cluster Endpoint Support for RKE2 and K3s Clusters"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v2.6.3")),(0,a.kt)("p",null,"Authorized Cluster Endpoint (ACE) support has been added for registered RKE2 and K3s clusters. This support includes manual steps you will perform on the downstream cluster to enable the ACE. For additional information on the authorized cluster endpoint, click ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint"},"here"),"."),(0,a.kt)("admonition",{title:"Notes:",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"These steps only need to be performed on the control plane nodes of the downstream cluster. You must configure each control plane node individually.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The following steps will work on both RKE2 and K3s clusters registered in v2.6.x as well as those registered (or imported) from a previous version of Rancher with an upgrade to v2.6.x.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"These steps will alter the configuration of the downstream RKE2 and K3s clusters and deploy the ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-api-authn-webhook"),". If a future implementation of the ACE requires an update to the ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-api-authn-webhook"),", then this would also have to be done manually. For more information on this webhook, click ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint#about-the-kube-api-auth-authentication-webhook"},"here"),".")))),(0,a.kt)("h6",{id:"manual-steps-to-be-taken-on-the-control-plane-of-each-downstream-cluster-to-enable-ace"},(0,a.kt)("strong",{parentName:"h6"},"Manual steps to be taken on the control plane of each downstream cluster to enable ACE:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a file at ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/{rke2,k3s}/kube-api-authn-webhook.yaml")," with the following contents:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Config\nclusters:\n- name: Default\n  cluster:\n    insecure-skip-tls-verify: true\n    server: http://127.0.0.1:6440/v1/authenticate\nusers:\n- name: Default\n  user:\n    insecure-skip-tls-verify: true\ncurrent-context: webhook\ncontexts:\n- name: webhook\n  context:\n    user: Default\n    cluster: Default\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the following to the config file (or create one if it doesn\u2019t exist); note that the default location is ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/{rke2,k3s}/config.yaml"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"kube-apiserver-arg:\n    - authentication-token-webhook-config-file=/var/lib/rancher/{rke2,k3s}/kube-api-authn-webhook.yaml\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following commands:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"sudo systemctl stop {rke2,k3s}-server\nsudo systemctl start {rke2,k3s}-server\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Finally, you ",(0,a.kt)("strong",{parentName:"p"},"must")," go back to the Rancher UI and edit the imported cluster there to complete the ACE enablement. Click on ",(0,a.kt)("strong",{parentName:"p"},"\u22ee > Edit Config"),", then click the ",(0,a.kt)("strong",{parentName:"p"},"Networking")," tab under Cluster Configuration. Finally, click the ",(0,a.kt)("strong",{parentName:"p"},"Enabled")," button for ",(0,a.kt)("strong",{parentName:"p"},"Authorized Endpoint"),". Once the ACE is enabled, you then have the option of entering a fully qualified domain name (FQDN) and certificate information."))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("b",null,"FQDN")," field is optional, and if one is entered, it should point to the downstream cluster. Certificate information is only needed if there is a load balancer in front of the downstream cluster that is using an untrusted certificate. If you have a valid certificate, then nothing needs to be added to the ",(0,a.kt)("b",null,"CA Certificates")," field.")),(0,a.kt)("h2",{id:"annotating-registered-clusters"},"Annotating Registered Clusters"),(0,a.kt)("p",null,"For all types of registered Kubernetes clusters except for RKE2 and K3s Kubernetes clusters, Rancher doesn't have any information about how the cluster is provisioned or configured."),(0,a.kt)("p",null,"Therefore, when Rancher registers a cluster, it assumes that several capabilities are disabled by default. Rancher assumes this in order to avoid exposing UI options to the user even when the capabilities are not enabled in the registered cluster."),(0,a.kt)("p",null,"However, if the cluster has a certain capability, such as the ability to use a pod security policy, a user of that cluster might still want to select pod security policies for the cluster in the Rancher UI. In order to do that, the user will need to manually indicate to Rancher that pod security policies are enabled for the cluster."),(0,a.kt)("p",null,"By annotating a registered cluster, it is possible to indicate to Rancher that a cluster was given a pod security policy, or another capability, outside of Rancher."),(0,a.kt)("p",null,"This example annotation indicates that a pod security policy is enabled:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"capabilities.cattle.io/pspEnabled": "true"\n')),(0,a.kt)("p",null,"The following annotation indicates Ingress capabilities. Note that the values of non-primitive objects need to be JSON encoded, with quotations escaped."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"capabilities.cattle.io/ingressCapabilities": "[\n  {\n    "customDefaultBackend":true,\n    "ingressProvider":"asdf"\n  }\n]"\n')),(0,a.kt)("p",null,"These capabilities can be annotated for the cluster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ingressCapabilities")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"loadBalancerCapabilities")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nodePoolScalingSupported")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nodePortRange")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pspEnabled")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"taintSupport"))),(0,a.kt)("p",null,"All the capabilities and their type definitions can be viewed in the Rancher API view, at ",(0,a.kt)("inlineCode",{parentName:"p"},"[Rancher Server URL]/v3/schemas/capabilities"),"."),(0,a.kt)("p",null,"To annotate a registered cluster,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," page, go to the custom cluster you want to annotate and click ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,a.kt)("li",{parentName:"ol"},"Expand the ",(0,a.kt)("strong",{parentName:"li"},"Labels & Annotations")," section."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add Annotation"),"."),(0,a.kt)("li",{parentName:"ol"},"Add an annotation to the cluster with the format ",(0,a.kt)("inlineCode",{parentName:"li"},"capabilities/<capability>: <value>")," where ",(0,a.kt)("inlineCode",{parentName:"li"},"value")," is the cluster capability that will be overridden by the annotation. In this scenario, Rancher is not aware of any capabilities of the cluster until you add the annotation."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The annotation does not give the capabilities to the cluster, but it does indicate to Rancher that the cluster has those capabilities."))}c.isMDXComponent=!0}}]);