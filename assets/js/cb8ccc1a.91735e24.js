"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[3151],{57108:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return k}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=a(80966),l=a(65488),d=a(85162),p=["components"],s={title:"Perform a Check",sidebar_position:4,slug:"/getting-started/perform-check"},c="Perform a Check",u={unversionedId:"content/getting-started/perform-check",id:"content/getting-started/perform-check",title:"Perform a Check",description:"This section will illustrate how to perform a  request to determine whether a  has a certain  with an .",source:"@site/docs/content/getting-started/perform-check.mdx",sourceDirName:"content/getting-started",slug:"/getting-started/perform-check",permalink:"/docs/getting-started/perform-check",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/getting-started/perform-check.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Perform a Check",sidebar_position:4,slug:"/getting-started/perform-check"},sidebar:"docs",previous:{title:"Update Relationship Tuples",permalink:"/docs/getting-started/update-tuples"},next:{title:"Integrate Within a Framework",permalink:"/docs/getting-started/framework"}},m={},k=[{value:"Before you start",id:"before-you-start",level:2},{value:"Step by Step",id:"step-by-step",level:2},{value:"01. Configure the <ProductName format={ProductNameFormat.ShortForm}/> API client",id:"01-configure-the--api-client",level:3},{value:"02. Calling Check API",id:"02-calling-check-api",level:3},{value:"Related Section",id:"related-section",level:2}],h={toc:k};function g(e){var t=e.components,a=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"perform-a-check"},"Perform a Check"),(0,r.kt)(o.AH,{mdxType:"DocumentationNotice"}),(0,r.kt)("p",null,"This section will illustrate how to perform a ",(0,r.kt)(o.uH,{section:"what-is-a-check-request",linkName:"check",mdxType:"ProductConcept"})," request to determine whether a ",(0,r.kt)(o.uH,{section:"what-is-a-user",linkName:"user",mdxType:"ProductConcept"})," has a certain ",(0,r.kt)(o.uH,{section:"what-is-a-relationship",linkName:"relationship",mdxType:"ProductConcept"})," with an ",(0,r.kt)(o.uH,{section:"what-is-an-object",linkName:"object",mdxType:"ProductConcept"}),"."),(0,r.kt)("h2",{id:"before-you-start"},"Before you start"),(0,r.kt)(l.Z,{groupId:"languages",mdxType:"Tabs"},[o.eU.JS_SDK,o.eU.GO_SDK,o.eU.DOTNET_SDK].map((function(e){return(0,r.kt)(d.Z,{value:e,label:o.UB.get(e),mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)(o.YY,{mdxType:"SdkSetupPrerequisite"})),(0,r.kt)("li",{parentName:"ol"},"You have ",(0,r.kt)("a",{parentName:"li",href:"/docs/getting-started/install-sdk"},"installed the SDK"),"."),(0,r.kt)("li",{parentName:"ol"},"You have ",(0,r.kt)("a",{parentName:"li",href:"/docs/getting-started/configure-model"},"configured the ",(0,r.kt)("em",{parentName:"a"},"authorization model"))," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/getting-started/update-tuples"},"updated the ",(0,r.kt)("em",{parentName:"a"},"relationship tuples")),"."),(0,r.kt)("li",{parentName:"ol"},"You have loaded ",(0,r.kt)("inlineCode",{parentName:"li"},"FGA_STORE_ID")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"FGA_API_HOST")," as environment variables.")))})),(0,r.kt)(d.Z,{value:o.eU.CURL,label:o.UB.get(o.eU.CURL),mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)(o.YY,{mdxType:"SdkSetupPrerequisite"})),(0,r.kt)("li",{parentName:"ol"},"You have ",(0,r.kt)("a",{parentName:"li",href:"/docs/getting-started/configure-model"},"configured the ",(0,r.kt)("em",{parentName:"a"},"authorization model"))," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/getting-started/update-tuples"},"updated the ",(0,r.kt)("em",{parentName:"a"},"relationship tuples")),"."),(0,r.kt)("li",{parentName:"ol"},"You have loaded ",(0,r.kt)("inlineCode",{parentName:"li"},"FGA_STORE_ID")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"FGA_API_HOST")," as environment variables.")))),(0,r.kt)("h2",{id:"step-by-step"},"Step by Step"),(0,r.kt)("p",null,"Assume that you want to check whether user ",(0,r.kt)("inlineCode",{parentName:"p"},"anne")," has relationship ",(0,r.kt)("inlineCode",{parentName:"p"},"reader")," with object ",(0,r.kt)("inlineCode",{parentName:"p"},"document:Z")),(0,r.kt)("h3",{id:"01-configure-the--api-client"},"01. Configure the ",(0,r.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})," API client"),(0,r.kt)("p",null,"Before calling the check API, you will need to configure the API client."),(0,r.kt)(l.Z,{groupId:"languages",mdxType:"Tabs"},(0,r.kt)(d.Z,{value:o.eU.JS_SDK,label:o.UB.get(o.eU.JS_SDK),mdxType:"TabItem"},(0,r.kt)(o.j3,{lang:o.eU.JS_SDK,mdxType:"SdkSetupHeader"})),(0,r.kt)(d.Z,{value:o.eU.GO_SDK,label:o.UB.get(o.eU.GO_SDK),mdxType:"TabItem"},(0,r.kt)(o.j3,{lang:o.eU.GO_SDK,mdxType:"SdkSetupHeader"})),(0,r.kt)(d.Z,{value:o.eU.DOTNET_SDK,label:o.UB.get(o.eU.DOTNET_SDK),mdxType:"TabItem"},(0,r.kt)(o.j3,{lang:o.eU.DOTNET_SDK,mdxType:"SdkSetupHeader"})),(0,r.kt)(d.Z,{value:o.eU.CURL,label:o.UB.get(o.eU.CURL),mdxType:"TabItem"},(0,r.kt)("p",null,"To obtain the ",(0,r.kt)("a",{parentName:"p",href:"https://auth0.com/docs/authorization/flows/call-your-api-using-the-client-credentials-flow"},"access token"),":"),(0,r.kt)(o.j3,{lang:o.eU.CURL,mdxType:"SdkSetupHeader"}))),(0,r.kt)("h3",{id:"02-calling-check-api"},"02. Calling Check API"),(0,r.kt)("p",null,"To check whether user ",(0,r.kt)("inlineCode",{parentName:"p"},"anne")," has relationship ",(0,r.kt)("inlineCode",{parentName:"p"},"reader")," with object ",(0,r.kt)("inlineCode",{parentName:"p"},"document:Z")),(0,r.kt)(o.uT,{user:"anne",relation:"reader",object:"document:Z",allowed:!0,skipSetup:!0,allowedLanguages:[o.eU.JS_SDK,o.eU.GO_SDK,o.eU.DOTNET_SDK,o.eU.CURL],mdxType:"CheckRequestViewer"}),(0,r.kt)("p",null,"The result's ",(0,r.kt)("inlineCode",{parentName:"p"},"allowed")," field will return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the relationship exists and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," if the relationship does not exist."),(0,r.kt)("h2",{id:"related-section"},"Related Section"),(0,r.kt)(o.$q,{description:"Take a look at the following section for more on how to perform authorization checks in your system",relatedLinks:[{title:"{ProductName} Check API",description:"Read the Check API documentation and see how it works.",link:"/api/service#/Relationship%20Queries/Check"}],mdxType:"RelatedSection"}))}g.isMDXComponent=!0}}]);