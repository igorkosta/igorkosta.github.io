_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var c=o(n("q1tI")),a=n("elyg"),i=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",f=c.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),c=n[0],i=n[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,b=e.replace,v=e.shallow,g=e.scroll,j=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var x=c.Children.only(h),w=x&&"object"===typeof x&&x.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),O=r(y,2),m=O[0],_=O[1],k=c.default.useCallback((function(e){m(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,m]);(0,c.useEffect)((function(){var e=_&&t&&(0,a.isLocalURL)(d),r="undefined"!==typeof j?j:n&&n.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&u(n,d,p,{locale:r})}),[p,d,_,j,t,n]);var L={ref:k,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c,locale:s,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,d,p,b,v,g,j)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),u(n,d,p,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var E="undefined"!==typeof j?j:n&&n.locale,I=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(p,E,n&&n.locales,n&&n.domainLocales);L.href=I||(0,a.addBasePath)((0,a.addLocale)(p,E,n&&n.defaultLocale))}return c.default.cloneElement(x,L)};t.default=f},dKBD:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return d})),n.d(t,"default",(function(){return p}));var r=n("nKUr"),o=n("YFqc"),c=n.n(o),a=n("IujW"),i=n.n(a),s=n("TxzI"),l=n("/YqS");function u(e){var t=e.slug;return Object(r.jsxs)("div",{style:{display:"flex"},children:[Object(r.jsx)(s.Link,{href:"https://twitter.com/share?url=https://igorkosta.github.io/blog/".concat(t),target:"_blank",style:{marginLeft:"auto"},children:Object(r.jsx)(l.Twitter,{size:20})}),Object(r.jsx)(s.Spacer,{inline:!0,x:.35}),Object(r.jsx)(s.Link,{href:"http://www.facebook.com/sharer.php?u=https://igorkosta.github.io/blog/".concat(t),target:"_blank",children:Object(r.jsx)(l.Facebook,{size:20})}),Object(r.jsx)(s.Spacer,{inline:!0,x:.35}),Object(r.jsx)(s.Link,{href:"https://www.linkedin.com/sharing/share-offsite/?url=true&amp;url=https://igorkosta.github.io/blog/".concat(t),target:"_blank",children:Object(r.jsx)(l.Linkedin,{size:20})}),Object(r.jsx)(s.Spacer,{inline:!0,x:.35})]})}var f=n("UIcd"),d=!0;function p(e){var t=e.posts;return Object(r.jsx)(f.a,{title:"Blog",description:"Blog posts about this and that",children:t&&t.map((function(e,t){return Object(r.jsxs)("div",{children:[Object(r.jsxs)(s.Card,{children:[Object(r.jsx)(c.a,{href:"/blog/".concat(encodeURIComponent(e.slug)),children:Object(r.jsx)(s.Text,{h4:!0,style:{cursor:"pointer",textDecoration:"underline"},children:e.title})}),Object(r.jsx)(i.a,{source:e.excerpt,allowDangerousHtml:!0}),Object(r.jsx)(u,{slug:e.slug})]}),Object(r.jsx)(s.Spacer,{y:1})]},t)}))})}},vHou:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n("dKBD")}])},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,a=r.elements;return a.set(e,t),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n("q1tI"),c=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var i=new Map}},[["vHou",0,1,2,3,4]]]);