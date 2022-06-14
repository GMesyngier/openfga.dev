"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[1489],{6368:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(80966),o=["components"],p={title:"Setup OpenFGA Server",description:"Setup the OpenFGA server",sidebar_position:1,slug:"/getting-started/setup-openfga"},u="Setup OpenFGA Server",d={unversionedId:"content/getting-started/setup-openfga",id:"content/getting-started/setup-openfga",title:"Setup OpenFGA Server",description:"Setup the OpenFGA server",source:"@site/docs/content/getting-started/setup-openfga.mdx",sourceDirName:"content/getting-started",slug:"/getting-started/setup-openfga",permalink:"/docs/getting-started/setup-openfga",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/getting-started/setup-openfga.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Setup OpenFGA Server",description:"Setup the OpenFGA server",sidebar_position:1,slug:"/getting-started/setup-openfga"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Install SDK Client",permalink:"/docs/getting-started/install-sdk"}},s={},m=[{value:"Step by Step",id:"step-by-step",level:2},{value:"Configuring the server",id:"configuring-the-server",level:2},{value:"Configuring data storage",id:"configuring-data-storage",level:3},{value:"Configuring authentication",id:"configuring-authentication",level:3},{value:"Production checklist",id:"production-checklist",level:2}],g={toc:m};function k(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"setup-openfga-server"},"Setup OpenFGA Server"),(0,l.kt)(i.AH,{mdxType:"DocumentationNotice"}),(0,l.kt)("p",null,"This article explains how to start your own OpenFGA server using Docker, and how to configure it."),(0,l.kt)("h2",{id:"step-by-step"},"Step by Step"),(0,l.kt)("p",null,"If you want to run OpenFGA locally as a Docker container, follow these steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Install Docker"),"."),(0,l.kt)("li",{parentName:"ol"},"Run ",(0,l.kt)("inlineCode",{parentName:"li"},"docker run -p 127.0.0.1:8080:8080 -p 127.0.0.1:8081:8081 openfga/openfga"),".")),(0,l.kt)("p",null,"This will start an HTTP server and gRPC server with the default configuration options."),(0,l.kt)("h2",{id:"configuring-the-server"},"Configuring the server"),(0,l.kt)("p",null,"There are several configuration options for OpenFGA. One option is to pass them in with an environment file. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ cat ./myenv\nOPENFGA_DATASTORE_ENGINE=postgres\nOPENFGA_AUTH_PRESHARED_KEYS=key1,key2\n# etc\n\n$ docker run openfga/openfga --env-file ./myenv\n")),(0,l.kt)("p",null,"All the possible configuration options are:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Configuration name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OPENFGA_AUTH_METHOD"),(0,l.kt)("td",{parentName:"tr",align:null},"The authentication method chosen."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"enum: ","[none, preshared, oidc]"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OPENFGA_AUTH_OIDC_AUDIENCE"),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"OPENFGA_AUTH_METHOD=oidc"),", this is the audience to which the JWTs will be issued against."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"yourapplication.com")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OPENFGA_AUTH_OIDC_ISSUER"),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"OPENFGA_AUTH_METHOD=oidc"),", this is the URL to the server that issues JWTs."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"yourapplication.us.auth0.com")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OPENFGA_AUTH_PRESHARED_KEYS"),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"OPENFGA_AUTH_METHOD=preshared"),", this is the array of accepted keys. You must specify at least one."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"array of string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"key1,key2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OPENFGA_CHANGELOG_HORIZON_OFFSET"),(0,l.kt)("td",{parentName:"tr",align:null},"This applies only to the ReadChanges API. It's a duration in minutes. For example, if set to 1 minute, if you call the ReadChanges API, the changes that occurred in the last minute will not be included in the response."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OPENFGA_DATASTORE_CONNECTION_URI"),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"OPENFGA_DATASTORE_ENGINE=postgres"),", this is the connection URI to the database."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"postgres://user:password@localhost:5432/database"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OPENFGA_DATASTORE_ENGINE"),(0,l.kt)("td",{parentName:"tr",align:null},"This is where your data (tuples, authorization models, etc.) will live."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"enum: ","[memory, postgres]"),(0,l.kt)("td",{parentName:"tr",align:null},"memory"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OPENFGA_DATASTORE_MAX_CACHE_SIZE"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number of type definitions to store in a cache. This improves the latency of some APIs."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"100000"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OPENFGA_HTTP_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP port where OpenFGA will run."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"8080"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OPENFGA_MAX_TUPLES_PER_WRITE"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of tuples that a Write request can accept. This may have to be set depending on your storage choice."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OPENFGA_MAX_TYPES_PER_AUTHORIZATION_MODEL"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of types that an authorization model can have."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OPENFGA_REQUEST_TIMEOUT"),(0,l.kt)("td",{parentName:"tr",align:null},"Limit of time, in seconds, that a request can take before it times out. If zero, there is no timeout."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"0s"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OPENFGA_RESOLVE_NODE_LIMIT"),(0,l.kt)("td",{parentName:"tr",align:null},"A number that indicates how deeply nested an authorization model can be. For example, if a type ",(0,l.kt)("inlineCode",{parentName:"td"},"document")," has relations ",(0,l.kt)("inlineCode",{parentName:"td"},"reader")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"writer"),", the latter which is defined as ",(0,l.kt)("inlineCode",{parentName:"td"},"define writer as reader"),", this authorization model has 2 levels."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"25"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OPENFGA_RPC_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"RPC port where OpenFGA will run."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"8081"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OPENFGA_SERVICE_NAME"),(0,l.kt)("td",{parentName:"tr",align:null},"The name you want to give to your OpenFGA server."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"openfga"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"configuring-data-storage"},"Configuring data storage"),(0,l.kt)("p",null,"You can choose between two storage options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In-memory storage. This option is not persistent, i.e. if you restart the server, the data will be lost."),(0,l.kt)("li",{parentName:"ul"},"Postgres database. This option requires either a local Postgres installation, or a Docker container that runs Postgres. For an example of a Docker setup that includes a Postgres database, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/openfga/openfga/blob/main/docker-compose.yaml"},"OpenFGA's Docker compose file"),".")),(0,l.kt)("h3",{id:"configuring-authentication"},"Configuring authentication"),(0,l.kt)("p",null,"You can configure authentication in your OpenFGA server in three ways: no authentication (the default), pre-shared key authentication and ",(0,l.kt)("a",{parentName:"p",href:"https://openid.net/connect/"},"OIDC authentication"),"."),(0,l.kt)("p",null,"If using ",(0,l.kt)("strong",{parentName:"p"},"Pre-shared key authentication"),", you will configure OpenFGA with a secret key and your application calling OpenFGA will have to set an ",(0,l.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer <YOUR-KEY-HERE>")," header. You can configure multiple keys."),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you are going to use this setup in production, you should enable TLS in your OpenFGA server."))),(0,l.kt)("p",null,"If using ",(0,l.kt)("strong",{parentName:"p"},"OIDC authentication"),", you will configure OpenFGA with a ",(0,l.kt)("a",{parentName:"p",href:"https://jwt.io/"},"JWT")," token issuer. Before calling OpenFGA, your application must grab a token from the issuer, and then include it in an ",(0,l.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer <token>")," header."),(0,l.kt)("h2",{id:"production-checklist"},"Production checklist"),(0,l.kt)("p",null,"If you have tried OpenFGA locally, decided it works as expected, and now want to deploy it to production, we recommend the following preparation:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ensure you configured authentication."),(0,l.kt)("li",{parentName:"ul"},"Ensure that you have enabled TLS on the server."),(0,l.kt)("li",{parentName:"ul"},"Fork the OpenFGA repository and:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Add a rate limiter interceptor that protects your OpenFGA server against bursts in traffic."),(0,l.kt)("li",{parentName:"ul"},"Add a logger interceptor that sends logging to your logging platform of choice.")))))}k.isMDXComponent=!0}}]);