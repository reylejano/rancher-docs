"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[86229],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(t),d=i,m=h["".concat(c,".").concat(d)]||h[d]||s[d]||a;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=h;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},58785:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const a={title:"About rancher-selinux"},o=void 0,l={unversionedId:"reference-guides/rancher-security/selinux-rpm/about-rancher-selinux",id:"version-2.5/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux",title:"About rancher-selinux",description:"To allow Rancher to work with SELinux, some functionality has to be manually enabled for the SELinux nodes. To help with that, Rancher provides a SELinux RPM.",source:"@site/versioned_docs/version-2.5/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux.md",sourceDirName:"reference-guides/rancher-security/selinux-rpm",slug:"/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux",permalink:"/zh/v2.5/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux.md",tags:[],version:"2.5",lastUpdatedAt:1662794811,formattedLastUpdatedAt:"2022\u5e749\u670810\u65e5",frontMatter:{title:"About rancher-selinux"},sidebar:"tutorialSidebar",previous:{title:"SELinux RPM",permalink:"/zh/v2.5/pages-for-subheaders/selinux-rpm"},next:{title:"About rke2-selinux",permalink:"/zh/v2.5/reference-guides/rancher-security/selinux-rpm/about-rke2-selinux"}},c={},u=[{value:"Installing the rancher-selinux RPM",id:"installing-the-rancher-selinux-rpm",level:2},{value:"1. Set up the yum repo",id:"1-set-up-the-yum-repo",level:3},{value:"2. Installing the RPM",id:"2-installing-the-rpm",level:3},{value:"Configuring the Logging Application to Work with SELinux",id:"configuring-the-logging-application-to-work-with-selinux",level:2}],p={toc:u};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To allow Rancher to work with SELinux, some functionality has to be manually enabled for the SELinux nodes. To help with that, Rancher provides a SELinux RPM. "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," RPM only contains policies for the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/charts/tree/dev-v2.5/charts/rancher-logging"},"rancher-logging application.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," GitHub repository is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher-selinux"},"here.")),(0,i.kt)("h2",{id:"installing-the-rancher-selinux-rpm"},"Installing the rancher-selinux RPM"),(0,i.kt)("admonition",{title:"Requirement:",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The rancher-selinux RPM was tested with CentOS 7 and 8.")),(0,i.kt)("h3",{id:"1-set-up-the-yum-repo"},"1. Set up the yum repo"),(0,i.kt)("p",null,"Set up the yum repo to install ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," directly on all hosts in the cluster."),(0,i.kt)("p",null,"In order to use the RPM repository, on a CentOS 7 or RHEL 7 system, run the following bash snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# cat << EOF > /etc/yum.repos.d/rancher.repo \n[rancher] \nname=Rancher \nbaseurl=https://rpm.rancher.io/rancher/production/centos/7/noarch\nenabled=1 \ngpgcheck=1 \ngpgkey=https://rpm.rancher.io/public.key \nEOF\n")),(0,i.kt)("p",null,"In order to use the RPM repository, on a CentOS 8 or RHEL 8 system, run the following bash snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# cat << EOF > /etc/yum.repos.d/rancher.repo \n[rancher] \nname=Rancher \nbaseurl=https://rpm.rancher.io/rancher/production/centos/8/noarch\nenabled=1 \ngpgcheck=1 \ngpgkey=https://rpm.rancher.io/public.key \nEOF\n")),(0,i.kt)("h3",{id:"2-installing-the-rpm"},"2. Installing the RPM"),(0,i.kt)("p",null,"Install the RPM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yum -y install rancher-selinux\n")),(0,i.kt)("h2",{id:"configuring-the-logging-application-to-work-with-selinux"},"Configuring the Logging Application to Work with SELinux"),(0,i.kt)("admonition",{title:"Requirement:",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Logging v2 was tested with SELinux on RHEL/CentOS 7 and 8.")),(0,i.kt)("p",null,"Applications do not automatically work once the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," RPM is installed on the host. They need to be configured to run in an allowed SELinux container domain provided by the RPM. "),(0,i.kt)("p",null,"To configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-logging")," chart to be SELinux aware, change ",(0,i.kt)("inlineCode",{parentName:"p"},"global.seLinux.enabled")," to true in the ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml")," when installing the chart."))}s.isMDXComponent=!0}}]);