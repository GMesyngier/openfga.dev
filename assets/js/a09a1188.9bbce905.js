"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[1217],{44179:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var i=n(87462),s=n(63366),o=(n(67294),n(3905)),a=n(80966),r=["components"],l={sidebar_position:2,slug:"/modeling/building-blocks/usersets"},u="Usersets",d={unversionedId:"content/modeling/building-blocks/usersets",id:"content/modeling/building-blocks/usersets",title:"Usersets",description:"What is a userset?",source:"@site/docs/content/modeling/building-blocks/usersets.mdx",sourceDirName:"content/modeling/building-blocks",slug:"/modeling/building-blocks/usersets",permalink:"/docs/modeling/building-blocks/usersets",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/building-blocks/usersets.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/modeling/building-blocks/usersets"},sidebar:"docs",previous:{title:"Object to Object Relationships",permalink:"/docs/modeling/building-blocks/object-to-object-relationships"},next:{title:"Advanced Use-Cases",permalink:"/docs/modeling/advanced"}},c={},p=[{value:"What is a userset?",id:"what-is-a-userset",level:2},{value:"How do check requests work with usersets?",id:"how-do-check-requests-work-with-usersets",level:2},{value:"How do expand requests work with usersets?",id:"how-do-expand-requests-work-with-usersets",level:2},{value:"Internals",id:"internals",level:2},{value:"Related Sections",id:"related-sections",level:2}],h={toc:p};function m(e){var t=e.components,l=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usersets"},"Usersets"),(0,o.kt)(a.AH,{mdxType:"DocumentationNotice"}),(0,o.kt)("h2",{id:"what-is-a-userset"},"What is a userset?"),(0,o.kt)("p",null,"A userset represents a set or collection of ",(0,o.kt)(a.uH,{section:"what-is-a-user",linkName:"users",mdxType:"ProductConcept"}),"."),(0,o.kt)("p",null,"Usersets can be used to indicate that a group of users in the system have a certain ",(0,o.kt)(a.uH,{section:"what-is-a-relation",linkName:"relation",mdxType:"ProductConcept"})," with an ",(0,o.kt)(a.uH,{section:"what-is-an-object",linkName:"object",mdxType:"ProductConcept"}),". This can be used to assign permissions to groups of users rather than specific ones, allowing us to represent the permissions in our system using less tuples and granting us flexibility in granting or denying access in bulk."),(0,o.kt)("p",null,"In ",(0,o.kt)(a.rZ,{format:a.v7.ShortForm,mdxType:"ProductName"}),", usersets are represented via this notation: ",(0,o.kt)("inlineCode",{parentName:"p"},"object#relation"),", where ",(0,o.kt)(a.uH,{section:"what-is-an-object",linkName:"object",mdxType:"ProductConcept"})," is made up of a ",(0,o.kt)(a.uH,{section:"what-is-a-type",linkName:"type",mdxType:"ProductConcept"})," and an object identifier. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"company:xyz#employee")," represents all users that are related to ",(0,o.kt)("inlineCode",{parentName:"li"},"company:xyz")," as ",(0,o.kt)("inlineCode",{parentName:"li"},"employee")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tweet:12345#viewer")," represents all users that are related to ",(0,o.kt)("inlineCode",{parentName:"li"},"tweet:12345")," as ",(0,o.kt)("inlineCode",{parentName:"li"},"viewer"))),(0,o.kt)("h2",{id:"how-do-check-requests-work-with-usersets"},"How do check requests work with usersets?"),(0,o.kt)("p",null,"Imagine the following authorization model:"),(0,o.kt)(a.lG,{configuration:{type_definitions:[{type:"org",relations:{member:{this:{}}}},{type:"document",relations:{reader:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,o.kt)("p",null,"Now let us assume that the store has the following tuples:"),(0,o.kt)(a.Wz,{relationshipTuples:[{_description:'Userset "Members of the xyz org" can read the budget document',user:"org:xyz#member",relation:"reader",object:"document:budget"},{_description:'Anne is part of the userset "Members of the xyz org"',user:"anne",relation:"member",object:"org:xyz"}],mdxType:"RelationshipTuplesViewer"}),(0,o.kt)("p",null,"If we call the ",(0,o.kt)(a.uH,{section:"what-is-a-check-request",linkName:"check API",mdxType:"ProductConcept"})," to see if user ",(0,o.kt)("inlineCode",{parentName:"p"},"anne")," has a ",(0,o.kt)("inlineCode",{parentName:"p"},"reader")," relationship with ",(0,o.kt)("inlineCode",{parentName:"p"},"document:budget"),", ",(0,o.kt)(a.rZ,{format:a.v7.ShortForm,mdxType:"ProductName"})," will check whether ",(0,o.kt)("inlineCode",{parentName:"p"},"anne")," is part of the userset that does have a ",(0,o.kt)("inlineCode",{parentName:"p"},"reader")," relationship. Because she is part of that userset, the request will return true:"),(0,o.kt)(a.uT,{user:"anne",relation:"reader",object:"document:budget",allowed:!0,mdxType:"CheckRequestViewer"}),(0,o.kt)("h2",{id:"how-do-expand-requests-work-with-usersets"},"How do expand requests work with usersets?"),(0,o.kt)("p",null,"Imagine the following authorization model:"),(0,o.kt)(a.lG,{configuration:{type_definitions:[{type:"document",relations:{writer:{this:{}},reader:{union:{child:[{this:{}},{computedUserset:{relation:"writer"}}]}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,o.kt)("p",null,"If we wanted to see which users and usersets have a ",(0,o.kt)("inlineCode",{parentName:"p"},"reader")," relationship with ",(0,o.kt)("inlineCode",{parentName:"p"},"document:budget"),", we can call the ",(0,o.kt)("a",{parentName:"p",href:"/api/service#/Relationship%20Queries/Expand"},"Expand API"),". The response will contain a userset tree where the leaf nodes are specific user IDs and usersets. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tree": {\n    "root": {\n      "type": "document:budget#reader",\n      "union": {\n        "nodes": [\n          {\n            "type": "document:budget#reader",\n            "leaf": {\n              "users": {\n                "users": ["bob"]\n              }\n            }\n          },\n          {\n            "type": "document:budget#reader",\n            "leaf": {\n              "computed": {\n                "userset": "document:budget#writer"\n              }\n            }\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"As you can see from the response above, with usersets we can express ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration-language#the-union-operator"},"unions")," of user groups. We can also express ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration-language#the-intersection-operator"},"intersections")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration-language#the-exclusion-operator"},"exclusions"),"."),(0,o.kt)("h2",{id:"internals"},"Internals"),(0,o.kt)("p",null,"Using the type definitions in the authorization model, some of the situations we can represent are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"that a user is ",(0,o.kt)("strong",{parentName:"li"},"not")," in a set of users having a certain relation to an object, even if a relationship tuple exists in the system. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/modeling/building-blocks/direct-relationships#2-with-direct-relationships-disabled"},"Disabling Direct Relationships")),(0,o.kt)("li",{parentName:"ul"},"that a user has a certain relationship with an object if they are in the ",(0,o.kt)("a",{parentName:"li",href:"/docs/configuration-language#the-union-operator"},"union"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/configuration-language#the-intersection-operator"},"intersection")," or ",(0,o.kt)("a",{parentName:"li",href:"/docs/configuration-language#the-exclusion-operator"},"exclusion")," of usersets."),(0,o.kt)("li",{parentName:"ul"},"that a user being in a set of users having a certain relation to an object can result in them having another relation to the object. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/modeling/building-blocks/concentric-relationships"},"Concentric Relationships")),(0,o.kt)("li",{parentName:"ul"},"that the user being in a set of users having a certain relation to an object and that object is in a set of users having a certain relation to another object, can imply that the original user has a certain relationship to the final object. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/modeling/building-blocks/object-to-object-relationships"},"Object-to-Object Relationships"))),(0,o.kt)("p",null,"When executing the Check API of the form ",(0,o.kt)("inlineCode",{parentName:"p"},"check(user, relation, object)"),", ",(0,o.kt)(a.rZ,{format:a.v7.ShortForm,mdxType:"ProductName"})," will perform the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the authorization model, look up ",(0,o.kt)("inlineCode",{parentName:"li"},"type")," and its ",(0,o.kt)("inlineCode",{parentName:"li"},"relation"),". Start building a tree where the root node will be the definition of that ",(0,o.kt)("inlineCode",{parentName:"li"},"relation"),", which can be a union, exclusion, or intersection of usersets, or it can be direct users."),(0,o.kt)("li",{parentName:"ol"},"Expand all the usersets involved into new nodes in the tree. This means recursively finding all the users that are members of the usersets. If there are direct relationships with users, create leaf nodes."),(0,o.kt)("li",{parentName:"ol"},"Check whether ",(0,o.kt)("inlineCode",{parentName:"li"},"user")," is a leaf node in the tree. If the API finds one match, it will return immediately and will not expand the remaining nodes.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image showing the path &lt;ProductName format={ProductNameFormat.ShortForm}/&gt; traverses to find if a user is in the userset related to an object",src:n(80787).Z,width:"1411",height:"1027"})),(0,o.kt)("h2",{id:"related-sections"},"Related Sections"),(0,o.kt)(a.$q,{description:"See the following sections for more information:",relatedLinks:[{title:"Managing Group Membership",description:"How to add users to a userset",link:"../../interacting/managing-group-membership",id:"../../interacting/managing-group-membership.mdx"},{title:"Managing Group Access",description:"How to add permissions to a userset",link:"../../interacting/managing-group-access",id:"../../interacting/managing-group-access.mdx"}],mdxType:"RelatedSection"}))}m.isMDXComponent=!0},80787:function(e,t,n){t.Z=n.p+"assets/images/usersets-check-tree-68f05e3f382b35ea6be97c5115223351.png"}}]);