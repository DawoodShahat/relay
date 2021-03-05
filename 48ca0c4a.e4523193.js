(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{1069:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return b}));var t=r(0),a=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),c=function(e){var n=a.a.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=c(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=t,b=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return r?a.a.createElement(b,l(l({ref:n},d),{},{components:r})):a.a.createElement(b,l({ref:n},d))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},378:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return c}));var t=r(3),a=r(7),i=(r(0),r(1069)),o={id:"new-in-relay-modern",title:"New in Relay Modern",original_id:"new-in-relay-modern"},l={unversionedId:"new-in-relay-modern",id:"version-v4.0.0/new-in-relay-modern",isDocsHomePage:!1,title:"New in Relay Modern",description:"A summary of the improvements and new features in Relay Modern.",source:"@site/versioned_docs/version-v4.0.0/Modern-NewInRelayModern.md",slug:"/new-in-relay-modern",permalink:"/docs/v4.0.0/new-in-relay-modern",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-v4.0.0/Modern-NewInRelayModern.md",version:"v4.0.0",lastUpdatedBy:"Lauren Tan",lastUpdatedAt:1614909409},s=[{value:"Modern API",id:"modern-api",children:[]},{value:"Modern Runtime",id:"modern-runtime",children:[{value:"Performance",id:"performance",children:[]},{value:"Smaller Bundle Size",id:"smaller-bundle-size",children:[]},{value:"Garbage Collection",id:"garbage-collection",children:[]},{value:"GraphQL Subscriptions &amp; Live Queries",id:"graphql-subscriptions--live-queries",children:[]},{value:"Injectable Custom Field Handlers",id:"injectable-custom-field-handlers",children:[]},{value:"Simpler Mutation API",id:"simpler-mutation-api",children:[]},{value:"Client Schema Extensions (Experimental)",id:"client-schema-extensions-experimental",children:[]},{value:"Flow Type Generation",id:"flow-type-generation",children:[]}]},{value:"Fewer Requirements around Routing",id:"fewer-requirements-around-routing",children:[]},{value:"Extensible Core",id:"extensible-core",children:[]}],d={toc:s};function c(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},d,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,"A summary of the improvements and new features in Relay Modern."),Object(i.b)("h2",{id:"modern-api"},"Modern API"),Object(i.b)("p",null,"Compared to Relay Classic, the Relay Modern API has the following differentiating features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A simpler, more predictable mutation API. The restrictions on mutation queries from Relay Classic are also removed: mutation queries are static, fields can be arbitrarily nested, and may use arbitrary arguments."),Object(i.b)("li",{parentName:"ul"},"When using ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"./query-renderer"}),Object(i.b)("inlineCode",{parentName:"a"},"QueryRenderer")),", the restrictions on queries from Relay Classic are removed: queries may contain multiple root fields that use arbitrary arguments and return singular or plural values. The ",Object(i.b)("inlineCode",{parentName:"li"},"viewer")," root field is now optional."),Object(i.b)("li",{parentName:"ul"},"Routes are now optional: ",Object(i.b)("inlineCode",{parentName:"li"},"QueryRenderer")," can be used without defining a route. More in the ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"./routing"}),"routing guide"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"QueryRenderer")," supports rendering small amounts of data directly, instead of requiring a container to access data. ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"./fragment-container"}),"Containers")," are optional and can be used as your application grows in size and complexity."),Object(i.b)("li",{parentName:"ul"},"The API is overall simpler and more predictable.")),Object(i.b)("p",null,"You can use ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"./relay-compat"}),"Compat mode")," to incrementally adopt Relay Modern APIs in an existing Relay app."),Object(i.b)("h2",{id:"modern-runtime"},"Modern Runtime"),Object(i.b)("p",null,"For new Relay apps or existing apps that have been fully converted to the Modern/Compat API, the Relay Modern runtime can be enabled to activate even more features. In addition to those described above, this includes:"),Object(i.b)("h3",{id:"performance"},"Performance"),Object(i.b)("p",null,"The new Relay Modern core is more light-weight and significantly faster than the previous version. It is redesigned to work with static queries, which allow us to push more work to build/compilation time. The Modern core is much smaller as a result of removing a lot of the complex features required for dynamic queries. The new core is also an order of magnitude faster in processing the response with an optimized parsing instruction set that is generated at build time. We no longer keep around tracking information needed for dynamic query generation, which drastically reduces the memory overhead of using Relay. This means more memory is left for making the UI feel responsive. Relay Modern also supports persisted queries, reducing the upload size of the request from the full query text to a simple id."),Object(i.b)("h3",{id:"smaller-bundle-size"},"Smaller Bundle Size"),Object(i.b)("p",null,"The Relay runtime bundle is roughly 20% of the size of Relay Classic."),Object(i.b)("h3",{id:"garbage-collection"},"Garbage Collection"),Object(i.b)("p",null,"The runtime automatically removes cached data that is no longer referenced, helping to reduce memory usage."),Object(i.b)("h3",{id:"graphql-subscriptions--live-queries"},"GraphQL Subscriptions & Live Queries"),Object(i.b)("p",null,"Relay Modern supports GraphQL Subscriptions, using the imperative update API to allow modifications to the store whenever a payload is received. It also features experimental support for GraphQL Live Queries via polling."),Object(i.b)("h3",{id:"injectable-custom-field-handlers"},"Injectable Custom Field Handlers"),Object(i.b)("p",null,"Some fields - especially those for paginated data - can require post-processing on the client in order to merge previously fetched data with new information. Relay Modern supports custom field handlers that can be used to process these fields to work with various pagination patterns and other use cases."),Object(i.b)("h3",{id:"simpler-mutation-api"},"Simpler Mutation API"),Object(i.b)("p",null,"An area we've gotten a lot of questions on was mutations and their configs. Relay Modern introduces a new mutation API that allows records and fields to be updated in a more direct manner."),Object(i.b)("h3",{id:"client-schema-extensions-experimental"},"Client Schema Extensions (Experimental)"),Object(i.b)("p",null,"The Relay Modern Core adds support for client schema extensions. These allow Relay to conveniently store some extra information with data fetched from the server and be rendered like any other field fetched from the server. This should be able to replace some use cases that previously required a Flux/Redux store on the side."),Object(i.b)("h3",{id:"flow-type-generation"},"Flow Type Generation"),Object(i.b)("p",null,"Relay Modern comes with automatic Flow type generation for the fragments used in Relay containers based on the GraphQL schema. Using these Flow types can help make an application less error-prone, by ensuring all possible ",Object(i.b)("inlineCode",{parentName:"p"},"null")," or ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," cases are considered even if they don't happen frequently."),Object(i.b)("h2",{id:"fewer-requirements-around-routing"},"Fewer Requirements around Routing"),Object(i.b)("p",null,"Routes no longer need to know anything about the query root in Relay Modern. Relay components can be rendered anywhere wrapped in a ",Object(i.b)("inlineCode",{parentName:"p"},"QueryRenderer"),". This should bring more flexibility around picking routing frameworks."),Object(i.b)("h2",{id:"extensible-core"},"Extensible Core"),Object(i.b)("p",null,"Relay Modern's core is essentially an un-opinionated store for GraphQL data. It can be used independent of rendering views using React and can be extended to be used with other frameworks."))}c.isMDXComponent=!0}}]);