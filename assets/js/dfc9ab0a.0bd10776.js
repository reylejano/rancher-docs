"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98224],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),i=n(86010),a="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(a,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(87462),i=n(67294),a=n(86010),o=n(72389),l=n(67392),p=n(7094),s=n(12466),u="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n,o=e.lazy,m=e.block,d=e.defaultValue,k=e.values,h=e.groupId,g=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(N,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==v&&!N.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,p.U)(),w=b.tabGroupChoices,C=b.setTabGroupChoices,R=(0,i.useState)(v),P=R[0],T=R[1],x=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var j=w[h];null!=j&&j!==P&&N.some((function(e){return e.value===j}))&&T(j)}var A=function(e){var t=e.currentTarget,n=x.indexOf(t),r=N[n].value;r!==P&&(E(t),T(r),null!=h&&C(h,String(r)))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,i=x.indexOf(e.currentTarget)+1;n=null!=(r=x[i])?r:x[0];break;case"ArrowLeft":var a,o=x.indexOf(e.currentTarget)-1;n=null!=(a=x[o])?a:x[x.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,a.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":m},g)},N.map((function(e){var t=e.value,n=e.label,o=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return x.push(e)},onKeyDown:S,onFocus:A,onClick:A},o,{className:(0,a.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),o?(0,i.cloneElement)(f.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function d(e){var t=(0,o.Z)();return i.createElement(m,(0,r.Z)({key:String(t)},e))}},3321:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=n(65488),l=n(85162),p=["components"],s={title:"Pipelines"},u=void 0,c={unversionedId:"pages-for-subheaders/pipelines",id:"version-2.5/pages-for-subheaders/pipelines",title:"Pipelines",description:"As of Rancher v2.5, Git-based deployment pipelines are now deprecated. We recommend handling pipelines with Rancher Continuous Delivery powered by Fleet, available in Cluster Explorer.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/pipelines.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/pipelines",permalink:"/v2.5/pages-for-subheaders/pipelines",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/pipelines.md",tags:[],version:"2.5",lastUpdatedAt:1667002159,formattedLastUpdatedAt:"10/29/2022",frontMatter:{title:"Pipelines"},sidebar:"tutorialSidebar",previous:{title:"RKE1 Example YAML",permalink:"/v2.5/reference-guides/rke1-template-example-yaml"},next:{title:"Concepts",permalink:"/v2.5/reference-guides/pipelines/concepts"}},m={},d=[{value:"Concepts",id:"concepts",level:2},{value:"How Pipelines Work",id:"how-pipelines-work",level:2},{value:"Roles-based Access Control for Pipelines",id:"roles-based-access-control-for-pipelines",level:2},{value:"Setting up Pipelines",id:"setting-up-pipelines",level:2},{value:"1. Configure Version Control Providers",id:"1-configure-version-control-providers",level:3},{value:"2. Configure Repositories",id:"2-configure-repositories",level:3},{value:"3. Configure the Pipeline",id:"3-configure-the-pipeline",level:3},{value:"Pipeline Configuration Reference",id:"pipeline-configuration-reference",level:2},{value:"Running your Pipelines",id:"running-your-pipelines",level:2},{value:"Triggering a Pipeline",id:"triggering-a-pipeline",level:2},{value:"Modifying the Event Triggers for the Repository",id:"modifying-the-event-triggers-for-the-repository",level:3}],k={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"As of Rancher v2.5, Git-based deployment pipelines are now deprecated. We recommend handling pipelines with Rancher Continuous Delivery powered by ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet"},"Fleet"),", available in Cluster Explorer."),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Notice:")," Fleet does not replace Rancher pipelines; the distinction is that Rancher pipelines are now powered by Fleet.")),(0,a.kt)("p",null,"Rancher's pipeline provides a simple CI/CD experience. Use it to automatically checkout code, run builds or scripts, publish Docker images or catalog applications, and deploy the updated software to users."),(0,a.kt)("p",null,"Setting up a pipeline can help developers deliver new software as quickly and efficiently as possible. Using Rancher, you can integrate with a GitHub repository to setup a continuous integration (CI) pipeline."),(0,a.kt)("p",null,"After configuring Rancher and GitHub, you can deploy containers running Jenkins to automate a pipeline execution:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Build your application from code to image."),(0,a.kt)("li",{parentName:"ul"},"Validate your builds."),(0,a.kt)("li",{parentName:"ul"},"Deploy your build images to your cluster."),(0,a.kt)("li",{parentName:"ul"},"Run unit tests."),(0,a.kt)("li",{parentName:"ul"},"Run regression tests.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Rancher's pipeline provides a simple CI/CD experience, but it does not offer the full power and flexibility of and is not a replacement of enterprise-grade Jenkins or other CI tools your team uses.")),(0,a.kt)("h2",{id:"concepts"},"Concepts"),(0,a.kt)("p",null,"For an explanation of concepts and terminology used in this section, refer to ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/pipelines/concepts"},"this page.")),(0,a.kt)("h2",{id:"how-pipelines-work"},"How Pipelines Work"),(0,a.kt)("p",null,"After enabling the ability to use pipelines in a project, you can configure multiple pipelines in each project. Each pipeline is unique and can be configured independently."),(0,a.kt)("p",null,"A pipeline is configured off of a group of files that are checked into source code repositories. Users can configure their pipelines either through the Rancher UI or by adding a ",(0,a.kt)("inlineCode",{parentName:"p"},".rancher-pipeline.yml")," into the repository."),(0,a.kt)("p",null,"Before pipelines can be configured, you will need to configure authentication to your version control provider, e.g. GitHub, GitLab, Bitbucket. If you haven't configured a version control provider, you can always use ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/pipelines/example-repositories"},"Rancher's example repositories")," to view some common pipeline deployments."),(0,a.kt)("p",null,"When you configure a pipeline in one of your projects, a namespace specifically for the pipeline is automatically created. The following components are deployed to it:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Jenkins:")),(0,a.kt)("p",{parentName:"li"},"The pipeline's build engine. Because project users do not directly interact with Jenkins, it's managed and locked."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:"),"  There is no option to use existing Jenkins deployments as the pipeline engine."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Docker Registry:")),(0,a.kt)("p",{parentName:"li"},"Out-of-the-box, the default target for your build-publish step is an internal Docker Registry. However, you can make configurations to push to a remote registry instead. The internal Docker Registry is only accessible from cluster nodes and cannot be directly accessed by users. Images are not persisted beyond the lifetime of the pipeline and should only be used in pipeline runs. If you need to access your images outside of pipeline runs, please push to an external registry.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Minio:")),(0,a.kt)("p",{parentName:"li"},"  Minio storage is used to store the logs for pipeline executions."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," The managed Jenkins instance works statelessly, so don't worry about its data persistency. The Docker Registry and Minio instances use ephemeral volumes by default, which is fine for most use cases. If you want to make sure pipeline logs can survive node failures, you can configure persistent volumes for them, as described in ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/pipelines/configure-persistent-data"},"data persistency for pipeline components"),".")))),(0,a.kt)("h2",{id:"roles-based-access-control-for-pipelines"},"Roles-based Access Control for Pipelines"),(0,a.kt)("p",null,"If you can access a project, you can enable repositories to start building pipelines."),(0,a.kt)("p",null,"Only ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"administrators"),", ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owners or members"),", or ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-roles"},"project owners")," can configure version control providers and manage global pipeline execution settings."),(0,a.kt)("p",null,"Project members can only configure repositories and pipelines."),(0,a.kt)("h2",{id:"setting-up-pipelines"},"Setting up Pipelines"),(0,a.kt)("p",null,"To set up pipelines, you will need to do the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#1-configure-version-control-providers"},"Configure version control providers")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#2-configure-repositories"},"Configure repositories")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#3-configure-the-pipeline"},"Configure the pipeline"))),(0,a.kt)("h3",{id:"1-configure-version-control-providers"},"1. Configure Version Control Providers"),(0,a.kt)("p",null,"Before you can start configuring a pipeline for your repository, you must configure and authorize a version control provider:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GitHub"),(0,a.kt)("li",{parentName:"ul"},"GitLab"),(0,a.kt)("li",{parentName:"ul"},"Bitbucket")),(0,a.kt)("p",null,"Select your provider's tab below and follow the directions."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"GitHub",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view, navigate to the project that you want to configure pipelines.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Tools > Pipelines")," in the navigation bar.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Follow the directions displayed to ",(0,a.kt)("strong",{parentName:"p"},"Setup a Github application"),". Rancher redirects you to Github to setup an OAuth App in Github.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From GitHub, copy the ",(0,a.kt)("strong",{parentName:"p"},"Client ID")," and ",(0,a.kt)("strong",{parentName:"p"},"Client Secret"),". Paste them into Rancher.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you're using GitHub for enterprise, select ",(0,a.kt)("strong",{parentName:"p"},"Use a private github enterprise installation"),". Enter the host address of your GitHub installation.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Authenticate"),".")))),(0,a.kt)(l.Z,{value:"GitLab",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view, navigate to the project that you want to configure pipelines.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Tools > Pipelines")," in the navigation bar.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Follow the directions displayed to ",(0,a.kt)("strong",{parentName:"p"},"Setup a GitLab application"),". Rancher redirects you to GitLab.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From GitLab, copy the ",(0,a.kt)("strong",{parentName:"p"},"Application ID")," and ",(0,a.kt)("strong",{parentName:"p"},"Secret"),". Paste them into Rancher.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you're using GitLab for enterprise setup, select ",(0,a.kt)("strong",{parentName:"p"},"Use a private gitlab enterprise installation"),". Enter the host address of your GitLab installation.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Authenticate"),"."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"Pipeline uses Gitlab ",(0,a.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/v3_to_v4.html"},"v4 API")," and the supported Gitlab version is 9.0+."),(0,a.kt)("li",{parentName:"ol"},"If you use GitLab 10.7+ and your Rancher setup is in a local network, enable the ",(0,a.kt)("strong",{parentName:"li"},"Allow requests to the local network from hooks and services")," option in GitLab admin settings.")))),(0,a.kt)(l.Z,{value:"Bitbucket Cloud",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view, navigate to the project that you want to configure pipelines.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Tools > Pipelines")," in the navigation bar.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose the ",(0,a.kt)("strong",{parentName:"p"},"Use public Bitbucket Cloud")," option.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Follow the directions displayed to ",(0,a.kt)("strong",{parentName:"p"},"Setup a Bitbucket Cloud application"),". Rancher redirects you to Bitbucket to setup an OAuth consumer in Bitbucket.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From Bitbucket, copy the consumer ",(0,a.kt)("strong",{parentName:"p"},"Key")," and ",(0,a.kt)("strong",{parentName:"p"},"Secret"),". Paste them into Rancher.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Authenticate"),".")))),(0,a.kt)(l.Z,{value:"Bitbucket Server",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view, navigate to the project that you want to configure pipelines.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Tools > Pipelines")," in the navigation bar.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose the ",(0,a.kt)("strong",{parentName:"p"},"Use private Bitbucket Server setup")," option.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Follow the directions displayed to ",(0,a.kt)("strong",{parentName:"p"},"Setup a Bitbucket Server application"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter the host address of your Bitbucket server installation.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Authenticate"),"."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:"),"\nBitbucket server needs to do SSL verification when sending webhooks to Rancher. Please ensure that Rancher server's certificate is trusted by the Bitbucket server. There are two options:"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"Setup Rancher server with a certificate from a trusted CA."),(0,a.kt)("li",{parentName:"ol"},"If you're using self-signed certificates, import Rancher server's certificate to the Bitbucket server. For instructions, see the Bitbucket server documentation for ",(0,a.kt)("a",{parentName:"li",href:"https://confluence.atlassian.com/bitbucketserver/if-you-use-self-signed-certificates-938028692.html"},"configuring self-signed certificates"),"."))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," After the version control provider is authenticated, you will be automatically re-directed to start configuring which repositories you want start using with a pipeline."),(0,a.kt)("h3",{id:"2-configure-repositories"},"2. Configure Repositories"),(0,a.kt)("p",null,"After the version control provider is authorized, you are automatically re-directed to start configuring which repositories that you want start using pipelines with. Even if someone else has set up the version control provider, you will see their repositories and can build a pipeline."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view, navigate to the project that you want to configure pipelines.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Resources > Pipelines."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Configure Repositories"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A list of repositories are displayed. If you are configuring repositories the first time, click on ",(0,a.kt)("strong",{parentName:"p"},"Authorize & Fetch Your Own Repositories")," to fetch your repository list.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For each repository that you want to set up a pipeline, click on ",(0,a.kt)("strong",{parentName:"p"},"Enable"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When you're done enabling all your repositories, click on ",(0,a.kt)("strong",{parentName:"p"},"Done"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Results:")," You have a list of repositories that you can start configuring pipelines for."),(0,a.kt)("h3",{id:"3-configure-the-pipeline"},"3. Configure the Pipeline"),(0,a.kt)("p",null,"Now that repositories are added to your project, you can start configuring the pipeline by adding automated stages and steps. For your convenience, there are multiple built-in step types for dedicated tasks."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view, navigate to the project that you want to configure pipelines.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Resources > Pipelines."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find the repository that you want to set up a pipeline for.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure the pipeline through the UI or using a yaml file in the repository, i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},".rancher-pipeline.yml")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".rancher-pipeline.yaml"),". Pipeline configuration is split into stages and steps. Stages must fully complete before moving onto the next stage, but steps in a stage run concurrently. For each stage, you can add different step types. Note: As you build out each step, there are different advanced options based on the step type. Advanced options include trigger rules, environment variables, and secrets. For more information on configuring the pipeline through the UI or the YAML file, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/pipelines/pipeline-configuration"},"pipeline configuration reference.")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you are going to use the UI, select the vertical ",(0,a.kt)("strong",{parentName:"li"},"\u22ee"," > Edit Config")," to configure the pipeline using the UI. After the pipeline is configured, you must view the YAML file and push it to the repository."),(0,a.kt)("li",{parentName:"ul"},"If you are going to use the YAML file, select the vertical ",(0,a.kt)("strong",{parentName:"li"},"\u22ee"," > View/Edit YAML")," to configure the pipeline. If you choose to use a YAML file, you need to push it to the repository after any changes in order for it to be updated in the repository. When editing the pipeline configuration, it takes a few moments for Rancher to check for an existing pipeline configuration."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select which ",(0,a.kt)("inlineCode",{parentName:"p"},"branch")," to use from the list of branches.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Optional: Set up notifications.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set up the trigger rules for the pipeline.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter a ",(0,a.kt)("strong",{parentName:"p"},"Timeout")," for the pipeline.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When all the stages and steps are configured, click ",(0,a.kt)("strong",{parentName:"p"},"Done"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Results:")," Your pipeline is now configured and ready to be run."),(0,a.kt)("h2",{id:"pipeline-configuration-reference"},"Pipeline Configuration Reference"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/pipelines/pipeline-configuration"},"this page")," for details on how to configure a pipeline to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run a script"),(0,a.kt)("li",{parentName:"ul"},"Build and publish images"),(0,a.kt)("li",{parentName:"ul"},"Publish catalog templates"),(0,a.kt)("li",{parentName:"ul"},"Deploy YAML"),(0,a.kt)("li",{parentName:"ul"},"Deploy a catalog app")),(0,a.kt)("p",null,"The configuration reference also covers how to configure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Notifications"),(0,a.kt)("li",{parentName:"ul"},"Timeouts"),(0,a.kt)("li",{parentName:"ul"},"The rules that trigger a pipeline"),(0,a.kt)("li",{parentName:"ul"},"Environment variables"),(0,a.kt)("li",{parentName:"ul"},"Secrets")),(0,a.kt)("h2",{id:"running-your-pipelines"},"Running your Pipelines"),(0,a.kt)("p",null,"Run your pipeline for the first time. From the project view in Rancher, go to ",(0,a.kt)("strong",{parentName:"p"},"Resources > Pipelines.")," Find your pipeline and select the vertical ",(0,a.kt)("strong",{parentName:"p"},"\u22ee"," > Run"),"."),(0,a.kt)("p",null,"During this initial run, your pipeline is tested, and the following pipeline components are deployed to your project as workloads in a new namespace dedicated to the pipeline:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"docker-registry")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"jenkins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"minio"))),(0,a.kt)("p",null,"This process takes several minutes. When it completes, you can view each pipeline component from the project ",(0,a.kt)("strong",{parentName:"p"},"Workloads")," tab."),(0,a.kt)("h2",{id:"triggering-a-pipeline"},"Triggering a Pipeline"),(0,a.kt)("p",null,"When a repository is enabled, a webhook is automatically set in the version control provider. By default, the pipeline is triggered by a ",(0,a.kt)("strong",{parentName:"p"},"push")," event to a repository, but you can modify the event(s) that trigger running the pipeline."),(0,a.kt)("p",null,"Available Events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Push"),": Whenever a commit is pushed to the branch in the repository, the pipeline is triggered."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pull Request"),": Whenever a pull request is made to the repository, the pipeline is triggered."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tag"),": When a tag is created in the repository, the pipeline is triggered.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," This option doesn't exist for Rancher's ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/pipelines/example-repositories"},"example repositories"),".")),(0,a.kt)("h3",{id:"modifying-the-event-triggers-for-the-repository"},"Modifying the Event Triggers for the Repository"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view, navigate to the project that you want to modify the event trigger for the pipeline.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Resources > Pipelines.")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find the repository that you want to modify the event triggers. Select the vertical ",(0,a.kt)("strong",{parentName:"p"},"\u22ee"," > Setting"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select which event triggers (",(0,a.kt)("strong",{parentName:"p"},"Push"),", ",(0,a.kt)("strong",{parentName:"p"},"Pull Request")," or ",(0,a.kt)("strong",{parentName:"p"},"Tag"),") you want for the repository.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."))))}h.isMDXComponent=!0}}]);