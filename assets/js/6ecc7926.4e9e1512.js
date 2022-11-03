"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[95035],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(r),m=a,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},44836:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={title:"Creating an AKS Cluster"},l=void 0,c={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks",title:"Creating an AKS Cluster",description:"You can use Rancher to create a cluster hosted in Microsoft Azure Kubernetes Service (AKS).",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"9/23/2022",frontMatter:{title:"Creating an AKS Cluster"},sidebar:"tutorialSidebar",previous:{title:"Managing GKE Clusters",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke"},next:{title:"Creating an Aliyun ACK Cluster",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/alibaba"}},u={},p=[{value:"Prerequisites in Microsoft Azure",id:"prerequisites-in-microsoft-azure",level:2},{value:"Setting Up the Service Principal with the Azure Command Line Tool",id:"setting-up-the-service-principal-with-the-azure-command-line-tool",level:3},{value:"Setting Up the Service Principal from the Azure Portal",id:"setting-up-the-service-principal-from-the-azure-portal",level:3},{value:"1. Create the AKS Cloud Credentials",id:"1-create-the-aks-cloud-credentials",level:2},{value:"2. Create the AKS Cluster",id:"2-create-the-aks-cluster",level:2},{value:"Role-based Access Control",id:"role-based-access-control",level:2},{value:"AKS Cluster Configuration Reference",id:"aks-cluster-configuration-reference",level:2},{value:"Private Clusters",id:"private-clusters",level:2},{value:"Syncing",id:"syncing",level:2},{value:"Programmatically Creating AKS Clusters",id:"programmatically-creating-aks-clusters",level:2}],h={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can use Rancher to create a cluster hosted in Microsoft Azure Kubernetes Service (AKS)."),(0,i.kt)("h2",{id:"prerequisites-in-microsoft-azure"},"Prerequisites in Microsoft Azure"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Deploying to AKS will incur charges."))),(0,i.kt)("p",null,"To interact with Azure APIs, an AKS cluster requires an Azure Active Directory (AD) service principal. The service principal is needed to dynamically create and manage other Azure resources, and it provides credentials for your cluster to communicate with AKS. For more information about the service principal, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/kubernetes-service-principal"},"AKS documentation"),"."),(0,i.kt)("p",null,"Before creating the service principal, you need to obtain the following information from the ",(0,i.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Microsoft Azure Portal"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Subscription ID"),(0,i.kt)("li",{parentName:"ul"},"Client ID"),(0,i.kt)("li",{parentName:"ul"},"Client secret")),(0,i.kt)("p",null,"The below sections describe how to set up these prerequisites using either the Azure command line tool or the Azure portal."),(0,i.kt)("h3",{id:"setting-up-the-service-principal-with-the-azure-command-line-tool"},"Setting Up the Service Principal with the Azure Command Line Tool"),(0,i.kt)("p",null,"You can create the service principal by running this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"az ad sp create-for-rbac --skip-assignment\n")),(0,i.kt)("p",null,"The result should show information about the new service principal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "appId": "xxxx--xxx",\n  "displayName": "<SERVICE-PRINCIPAL-NAME>",\n  "name": "http://<SERVICE-PRINCIPAL-NAME>",\n  "password": "<SECRET>",\n  "tenant": "<TENANT NAME>"\n}\n')),(0,i.kt)("p",null,"You also need to add roles to the service principal so that it has privileges for communication with the AKS API. It also needs access to create and list virtual networks."),(0,i.kt)("p",null,"Below is an example command for assigning the Contributor role to a service principal. Contributors can manage anything on AKS but cannot give access to others:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"az role assignment create \\\n  --assignee $appId \\\n  --scope /subscriptions/$<SUBSCRIPTION-ID>/resourceGroups/$<GROUP> \\\n  --role Contributor\n")),(0,i.kt)("p",null,"You can also create the service principal and give it Contributor privileges by combining the two commands into one. In this command, the scope needs to provide a full path to an Azure resource:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"az ad sp create-for-rbac \\\n  --scope /subscriptions/$<SUBSCRIPTION-ID>/resourceGroups/$<GROUP> \\\n  --role Contributor\n")),(0,i.kt)("h3",{id:"setting-up-the-service-principal-from-the-azure-portal"},"Setting Up the Service Principal from the Azure Portal"),(0,i.kt)("p",null,"You can also follow these instructions to set up a service principal and give it role-based access from the Azure Portal."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the Microsoft Azure Portal ",(0,i.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"home page"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Azure Active Directory"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"App registrations"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"New registration"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter a name. This will be the name of your service principal.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Optional: Choose which accounts can use the service principal.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Register"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You should now see the name of your service principal under ",(0,i.kt)("strong",{parentName:"p"},"Azure Active Directory > App registrations"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the name of your service principal. Take note of the application ID (also called app ID or client ID) so that you can use it when provisioning your AKS cluster. Then click ",(0,i.kt)("strong",{parentName:"p"},"Certificates & secrets"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"New client secret"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter a short description, pick an expiration time, and click ",(0,i.kt)("strong",{parentName:"p"},"Add"),". Take note of the client secret so that you can use it when provisioning the AKS cluster."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," You have created a service principal and you should be able to see it listed in the ",(0,i.kt)("strong",{parentName:"p"},"Azure Active Directory")," section under ",(0,i.kt)("strong",{parentName:"p"},"App registrations"),". You still need to give the service principal access to AKS."),(0,i.kt)("p",null,"To give role-based access to your service principal,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"All Services")," in the left navigation bar. Then click ",(0,i.kt)("strong",{parentName:"li"},"Subscriptions"),"."),(0,i.kt)("li",{parentName:"ol"},"Click the name of the subscription that you want to associate with your Kubernetes cluster. Take note of the subscription ID so that you can use it when provisioning your AKS cluster."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Access Control (IAM)"),"."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Add role assignment")," section, click ",(0,i.kt)("strong",{parentName:"li"},"Add"),"."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Role")," field, select a role that will have access to AKS. For example, you can use the ",(0,i.kt)("strong",{parentName:"li"},"Contributor")," role, which has permission to manage everything except for giving access to other users."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Assign access to")," field, select ",(0,i.kt)("strong",{parentName:"li"},"Azure AD user, group, or service principal"),"."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Select")," field, select the name of your service principal and click ",(0,i.kt)("strong",{parentName:"li"},"Save"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Your service principal now has access to AKS."),(0,i.kt)("h2",{id:"1-create-the-aks-cloud-credentials"},"1. Create the AKS Cloud Credentials"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the Rancher UI, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Cloud Credentials"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Azure"),"."),(0,i.kt)("li",{parentName:"ol"},"Fill out the form. For help with filling out the form, see the ",(0,i.kt)("a",{parentName:"li",href:"/reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration#cloud-credentials"},"configuration reference.")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),".")),(0,i.kt)("h2",{id:"2-create-the-aks-cluster"},"2. Create the AKS Cluster"),(0,i.kt)("p",null,"Use Rancher to set up and configure your Kubernetes cluster."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Clusters")," section, click ",(0,i.kt)("strong",{parentName:"li"},"Create"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Azure AKS"),"."),(0,i.kt)("li",{parentName:"ol"},"Fill out the form. For help with filling out the form, see the ",(0,i.kt)("a",{parentName:"li",href:"/reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration"},"configuration reference.")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Your cluster is created and assigned a state of ",(0,i.kt)("strong",{parentName:"p"},"Provisioning"),". Rancher is standing up your cluster."),(0,i.kt)("p",null,"You can access your cluster after its state is updated to ",(0,i.kt)("strong",{parentName:"p"},"Active"),"."),(0,i.kt)("h2",{id:"role-based-access-control"},"Role-based Access Control"),(0,i.kt)("p",null,"When provisioning an AKS cluster in the Rancher UI, RBAC is not configurable because it is required to be enabled."),(0,i.kt)("p",null,"RBAC is required for AKS clusters that are registered or imported into Rancher."),(0,i.kt)("h2",{id:"aks-cluster-configuration-reference"},"AKS Cluster Configuration Reference"),(0,i.kt)("p",null,"For more information about how to configure AKS clusters from the Rancher UI, see the ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration"},"configuration reference.")),(0,i.kt)("h2",{id:"private-clusters"},"Private Clusters"),(0,i.kt)("p",null,"Typically, AKS worker nodes do not get public IPs, regardless of whether the cluster is private. In a private cluster, the control plane does not have a public endpoint."),(0,i.kt)("p",null,"Rancher can connect to a private AKS cluster in one of two ways."),(0,i.kt)("p",null,"The first way to ensure that Rancher is running on the same ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/virtual-network/nat-overview"},"NAT")," as the AKS nodes."),(0,i.kt)("p",null,"The second way is to run a command to register the cluster with Rancher. Once the cluster is provisioned, you can run the displayed command anywhere you can connect to the cluster\u2019s Kubernetes API. This command is displayed in a pop-up when you provision an AKS cluster with a private API endpoint enabled."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please be aware that when registering an existing AKS cluster, the cluster might take some time, possibly hours, to appear in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Cluster To register")," dropdown list. This outcome will be based on region."))),(0,i.kt)("p",null,"For more information about connecting to an AKS private cluster, see the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/private-clusters#options-for-connecting-to-the-private-cluster"},"AKS documentation.")),(0,i.kt)("h2",{id:"syncing"},"Syncing"),(0,i.kt)("p",null,"The AKS provisioner can synchronize the state of an AKS cluster between Rancher and the provider. For an in-depth technical explanation of how this works, see ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters"},"Syncing.")),(0,i.kt)("p",null,"For information on configuring the refresh interval, see ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/gke-cluster-configuration#configuring-the-refresh-interval"},"this section.")),(0,i.kt)("h2",{id:"programmatically-creating-aks-clusters"},"Programmatically Creating AKS Clusters"),(0,i.kt)("p",null,"The most common way to programmatically deploy AKS clusters through Rancher is by using the Rancher2 Terraform provider. The documentation for creating clusters with Terraform is ",(0,i.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/rancher/rancher2/latest/docs/resources/cluster"},"here.")))}m.isMDXComponent=!0}}]);