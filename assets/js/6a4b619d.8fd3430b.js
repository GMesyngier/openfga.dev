"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[7852],{6340:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return c}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=n(80966),l=["components"],d={sidebar_position:7,slug:"/modeling/parent-child"},s="Parent-Child Objects",p={unversionedId:"content/modeling/parent-child",id:"content/modeling/parent-child",title:"Parent-Child Objects",description:"In this guide you will learn how to indicate  between , and how users relationships to one object can affect their relationship with another. For example: how a editor of a folder can be an editor of all documents the folder is a parent of.",source:"@site/docs/content/modeling/parent-child.mdx",sourceDirName:"content/modeling",slug:"/modeling/parent-child",permalink:"/docs/modeling/parent-child",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/parent-child.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,slug:"/modeling/parent-child"},sidebar:"docs",previous:{title:"Roles and Permissions",permalink:"/docs/modeling/roles-and-permissions"},next:{title:"Blocklists",permalink:"/docs/modeling/blocklists"}},m={},c=[{value:"Before you start",id:"before-you-start",level:2},{value:"Modeling Basics",id:"modeling-basics",level:3},{value:"<ProductName format={ProductNameFormat.ShortForm}/> Concepts",id:"-concepts",level:3},{value:"Step by Step",id:"step-by-step",level:2},{value:"01. Update the authorization model to allow a parent relationship between folder and document",id:"01-update-the-authorization-model-to-allow-a-parent-relationship-between-folder-and-document",level:3},{value:"02. Update the editor relation in the document type definition to support cascading from folder",id:"02-update-the-editor-relation-in-the-document-type-definition-to-support-cascading-from-folder",level:3},{value:"03. Create a new relationship tuple to indicate that bob is an editor of folder:notes",id:"03-create-a-new-relationship-tuple-to-indicate-that-bob-is-an-editor-of-foldernotes",level:3},{value:"04. Create a new relationship tuple to indicate that folder:notes is a parent of document:meeting_notes.doc",id:"04-create-a-new-relationship-tuple-to-indicate-that-foldernotes-is-a-parent-of-documentmeeting_notesdoc",level:3},{value:"05. Check to see if bob is an editor of document:meeting_notes.doc",id:"05-check-to-see-if-bob-is-an-editor-of-documentmeeting_notesdoc",level:3},{value:"Related Sections",id:"related-sections",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"parent-child-objects"},"Parent-Child Objects"),(0,i.kt)(r.AH,{mdxType:"DocumentationNotice"}),(0,i.kt)("p",null,"In this guide you will learn how to indicate ",(0,i.kt)(r.uH,{section:"what-is-a-relationship",linkName:"relationships",mdxType:"ProductConcept"})," between ",(0,i.kt)(r.uH,{section:"what-is-an-object",linkName:"objects",mdxType:"ProductConcept"}),", and how users relationships to one object can affect their relationship with another. For example: how a ",(0,i.kt)("inlineCode",{parentName:"p"},"editor")," of a ",(0,i.kt)("inlineCode",{parentName:"p"},"folder")," can be an ",(0,i.kt)("inlineCode",{parentName:"p"},"editor")," of all ",(0,i.kt)("inlineCode",{parentName:"p"},"documents")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"folder")," is a ",(0,i.kt)("inlineCode",{parentName:"p"},"parent")," of."),(0,i.kt)(r.S1,{title:"When to use",appearance:"filled",description:(0,i.kt)("div",null,(0,i.kt)("p",null,"Object-to-Object relationships, combined with a configured authorization model can be used to indicate that a user's relation with one object can influence their relationship with another object. This can also be used in some cases to remove the need to modify relations between objects using ",(0,i.kt)("a",{parentName:"p",href:"/docs/modeling/user-groups#03-assign-the-team-members-a-relation-to-an-object"},"user groups"),"."),(0,i.kt)("p",null,"Object-to-object relationships can be used:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To indicate that ",(0,i.kt)("inlineCode",{parentName:"li"},"managers")," of an ",(0,i.kt)("inlineCode",{parentName:"li"},"employee")," have access to ",(0,i.kt)("inlineCode",{parentName:"li"},"approve")," requests the ",(0,i.kt)("inlineCode",{parentName:"li"},"employee")," has made"),(0,i.kt)("li",{parentName:"ul"},"To indicate that users who have a repository admin role (",(0,i.kt)("inlineCode",{parentName:"li"},"repo_admin"),") in an organization automatically have ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")," access to all repositories in that organization"),(0,i.kt)("li",{parentName:"ul"},"To indicate that users who are ",(0,i.kt)("inlineCode",{parentName:"li"},"subscribed")," to a ",(0,i.kt)("inlineCode",{parentName:"li"},"plan"),", get access to all the ",(0,i.kt)("inlineCode",{parentName:"li"},"features")," in that ",(0,i.kt)("inlineCode",{parentName:"li"},"plan")))),mdxType:"CardBox"}),(0,i.kt)("h2",{id:"before-you-start"},"Before you start"),(0,i.kt)("p",null,"In order to understand this guide correctly you must be familiar with some ",(0,i.kt)(r.uH,{mdxType:"ProductConcept"})," and know how to develop the things that we will list below."),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("p",null,"Assume that you have the following ",(0,i.kt)(r.uH,{section:"what-is-an-authorization-model",linkName:"authorization model",mdxType:"ProductConcept"}),".",(0,i.kt)("br",null),"\nYou have two types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"folder")," that users can be related to as an ",(0,i.kt)("inlineCode",{parentName:"li"},"editor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"document")," that ",(0,i.kt)("em",{parentName:"li"},"users")," can be related to as an ",(0,i.kt)("inlineCode",{parentName:"li"},"editor")))),(0,i.kt)(r.lG,{configuration:{type_definitions:[{type:"folder",relations:{editor:{this:{}}}},{type:"document",relations:{editor:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"In addition, you will need to know the following:"),(0,i.kt)("h3",{id:"modeling-basics"},"Modeling Basics"),(0,i.kt)("p",null,"You need to know how to create an authorization model and create a relationship tuple to grant a user access to an object. ",(0,i.kt)("a",{parentName:"p",href:"/docs/modeling/direct-access"},"Learn more \u2192")),(0,i.kt)("h3",{id:"-concepts"},(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," Concepts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)(r.uH,{section:"what-is-a-type",linkName:"Type",mdxType:"ProductConcept"}),": a class of objects that have similar characteristics"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)(r.uH,{section:"what-is-a-user",linkName:"User",mdxType:"ProductConcept"}),": an entity in the system that can be related to an object"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)(r.uH,{section:"what-is-a-relation",linkName:"Relation",mdxType:"ProductConcept"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between objects of this type and other users in the system"),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)(r.uH,{section:"what-is-an-object",linkName:"Object",mdxType:"ProductConcept"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)(r.uH,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple",mdxType:"ProductConcept"}),": a grouping consisting of a user, a relation and an object stored in ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/configuration-language#the-union-operator"},"Union Operator"),": the union operator can be used to indicate that the user has multiple ways of being related to an object"))),(0,i.kt)(r.XQ,{mdxType:"Playground"}),(0,i.kt)("h2",{id:"step-by-step"},"Step by Step"),(0,i.kt)("p",null,"We would like to model folders that contain documents and that a user having editor access to the folder, has editor access to all documents in that folder."),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"editors")," of a ",(0,i.kt)("inlineCode",{parentName:"p"},"folder")," to be ",(0,i.kt)("inlineCode",{parentName:"p"},"editors")," of a containing ",(0,i.kt)("inlineCode",{parentName:"p"},"document"),", we need to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Update the authorization model to allow a ",(0,i.kt)("inlineCode",{parentName:"li"},"parent")," relationship between ",(0,i.kt)("inlineCode",{parentName:"li"},"folder")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"document")),(0,i.kt)("li",{parentName:"ol"},"Update the ",(0,i.kt)("inlineCode",{parentName:"li"},"editor")," relation in the ",(0,i.kt)("inlineCode",{parentName:"li"},"document")," type definition to support ",(0,i.kt)("em",{parentName:"li"},"cascading")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"folder"))),(0,i.kt)("p",null,"and then to indicate and verify that ",(0,i.kt)("strong",{parentName:"p"},"bob")," is an ",(0,i.kt)("inlineCode",{parentName:"p"},"editor")," of ",(0,i.kt)("strong",{parentName:"p"},"document:meeting_notes.doc")," because ",(0,i.kt)("strong",{parentName:"p"},"bob")," is an ",(0,i.kt)("inlineCode",{parentName:"p"},"editor")," of ",(0,i.kt)("strong",{parentName:"p"},"folder:notes"),", we then need to:"),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Create a new ",(0,i.kt)("em",{parentName:"li"},"relationship tuple")," to indicate that ",(0,i.kt)("strong",{parentName:"li"},"bob")," is a ",(0,i.kt)("inlineCode",{parentName:"li"},"editor")," of ",(0,i.kt)("strong",{parentName:"li"},"folder:notes")),(0,i.kt)("li",{parentName:"ol"},"Create a new ",(0,i.kt)("em",{parentName:"li"},"relationship tuple")," to indicate that ",(0,i.kt)("strong",{parentName:"li"},"folder:notes")," is a ",(0,i.kt)("inlineCode",{parentName:"li"},"parent")," of ",(0,i.kt)("strong",{parentName:"li"},"document:meeting_notes.doc")),(0,i.kt)("li",{parentName:"ol"},"Check to see if ",(0,i.kt)("strong",{parentName:"li"},"bob")," is an ",(0,i.kt)("inlineCode",{parentName:"li"},"editor")," of ",(0,i.kt)("strong",{parentName:"li"},"document:meeting_notes.doc"))),(0,i.kt)("h3",{id:"01-update-the-authorization-model-to-allow-a-parent-relationship-between-folder-and-document"},"01. Update the authorization model to allow a parent relationship between folder and document"),(0,i.kt)("p",null,"To allow a ",(0,i.kt)("inlineCode",{parentName:"p"},"parent")," relation between a ",(0,i.kt)("inlineCode",{parentName:"p"},"folder")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"document"),", we need to update the authorization model to be the following (this is to allow creating relationship tuples that can indicate a relationship between ",(0,i.kt)("inlineCode",{parentName:"p"},"folder")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"document"),". Refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/modeling/building-blocks/object-to-object-relationships"},"Modeling Concepts: Object to Object Relationships")," to understand why):"),(0,i.kt)(r.lG,{configuration:{type_definitions:[{type:"folder",relations:{editor:{this:{}}}},{type:"document",relations:{parent:{this:{}},editor:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Notice that the ",(0,i.kt)("inlineCode",{parentName:"p"},"document")," type now has a ",(0,i.kt)("inlineCode",{parentName:"p"},"parent")," relation, indicating that other objects can be ",(0,i.kt)("inlineCode",{parentName:"p"},"parent"),"s of ",(0,i.kt)("inlineCode",{parentName:"p"},"document"),"s"))),(0,i.kt)("h3",{id:"02-update-the-editor-relation-in-the-document-type-definition-to-support-cascading-from-folder"},"02. Update the editor relation in the document type definition to support cascading from folder"),(0,i.kt)("p",null,"To allow ",(0,i.kt)("em",{parentName:"p"},"cascading")," relations between ",(0,i.kt)("inlineCode",{parentName:"p"},"folder")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"document"),", we can update our authorization model as the following:"),(0,i.kt)(r.lG,{configuration:{type_definitions:[{type:"folder",relations:{editor:{this:{}}}},{type:"document",relations:{parent:{this:{}},editor:{union:{child:[{this:{}},{tupleToUserset:{tupleset:{relation:"parent"},computedUserset:{relation:"editor"}}}]}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"editor")," of a ",(0,i.kt)("inlineCode",{parentName:"p"},"document")," are any of:"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"users that are directly assigned as editors"),(0,i.kt)("li",{parentName:"ol"},"users that are related to any ",(0,i.kt)("inlineCode",{parentName:"li"},"parent")," of this document as ",(0,i.kt)("inlineCode",{parentName:"li"},"editor")," (editors of the parent)")))),(0,i.kt)("p",null,"So with this change, anyone related to a ",(0,i.kt)("inlineCode",{parentName:"p"},"folder")," that is a ",(0,i.kt)("inlineCode",{parentName:"p"},"parent")," of a ",(0,i.kt)("inlineCode",{parentName:"p"},"document")," as an ",(0,i.kt)("inlineCode",{parentName:"p"},"editor")," is also an ",(0,i.kt)("inlineCode",{parentName:"p"},"editor")," of said ",(0,i.kt)("inlineCode",{parentName:"p"},"document"),"."),(0,i.kt)("h3",{id:"03-create-a-new-relationship-tuple-to-indicate-that-bob-is-an-editor-of-foldernotes"},"03. Create a new relationship tuple to indicate that bob is an editor of folder:notes"),(0,i.kt)("p",null,"To leverage our ",(0,i.kt)("em",{parentName:"p"},"cascading")," relation, we need to create a relationship tuple that states: ",(0,i.kt)("strong",{parentName:"p"},"bob")," is an ",(0,i.kt)("inlineCode",{parentName:"p"},"editor")," of ",(0,i.kt)("strong",{parentName:"p"},"folder:notes")),(0,i.kt)(r.Gb,{relationshipTuples:[{user:"bob",relation:"editor",object:"folder:notes"}],mdxType:"WriteRequestViewer"}),(0,i.kt)("h3",{id:"04-create-a-new-relationship-tuple-to-indicate-that-foldernotes-is-a-parent-of-documentmeeting_notesdoc"},"04. Create a new relationship tuple to indicate that folder:notes is a parent of document:meeting_notes.doc"),(0,i.kt)("p",null,"Now that ",(0,i.kt)("strong",{parentName:"p"},"bob")," is an ",(0,i.kt)("inlineCode",{parentName:"p"},"editor")," of ",(0,i.kt)("strong",{parentName:"p"},"folder:notes"),", we need to indicate that ",(0,i.kt)("strong",{parentName:"p"},"folder:notes")," is a ",(0,i.kt)("inlineCode",{parentName:"p"},"parent")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"document"),":",(0,i.kt)("strong",{parentName:"p"},"meeting_notes.doc")),(0,i.kt)(r.Gb,{relationshipTuples:[{_description:"the notes folder is a parent of the meeting notes document",user:"folder:notes",relation:"parent",object:"document:meeting_notes.doc"}],mdxType:"WriteRequestViewer"}),(0,i.kt)("h3",{id:"05-check-to-see-if-bob-is-an-editor-of-documentmeeting_notesdoc"},"05. Check to see if bob is an editor of document:meeting_notes.doc"),(0,i.kt)("p",null,"Now that we have done the changes to the authorization model and the addition of the two new ",(0,i.kt)("em",{parentName:"p"},"relationship tuples"),", we can verify if our configuration is correct by running the following check: ",(0,i.kt)("strong",{parentName:"p"},"is bob an editor of document:meeting_notes.doc"),"."),(0,i.kt)(r.uT,{user:"bob",relation:"editor",object:"document:meeting_notes.doc",allowed:!0,mdxType:"CheckRequestViewer"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: There are no other relationship tuples within the store that dictate any direct relation between ",(0,i.kt)("strong",{parentName:"p"},"bob")," and ",(0,i.kt)("strong",{parentName:"p"},"document:meeting_notes.doc"),". The check succeeds because of the ",(0,i.kt)("em",{parentName:"p"},"cascading")," relation applied.")),(0,i.kt)("p",null,"The chain of resolution becomes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"bob")," is an ",(0,i.kt)("inlineCode",{parentName:"li"},"editor")," of ",(0,i.kt)("strong",{parentName:"li"},"folder:notes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"folder:notes")," is a ",(0,i.kt)("inlineCode",{parentName:"li"},"parent")," of ",(0,i.kt)("strong",{parentName:"li"},"document:meeting_notes.doc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"editors")," of any ",(0,i.kt)("inlineCode",{parentName:"li"},"parent")," ",(0,i.kt)("inlineCode",{parentName:"li"},"folder")," of ",(0,i.kt)("strong",{parentName:"li"},"document:meeting_notes.doc")," are also ",(0,i.kt)("inlineCode",{parentName:"li"},"editors")," of the ",(0,i.kt)("inlineCode",{parentName:"li"},"document")),(0,i.kt)("li",{parentName:"ul"},"Therefore, ",(0,i.kt)("strong",{parentName:"li"},"bob")," is an ",(0,i.kt)("inlineCode",{parentName:"li"},"editor")," of ",(0,i.kt)("strong",{parentName:"li"},"document:meeting_notes.doc"))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Note:")," When creating relationship tuples for ",(0,i.kt)(r.rZ,{format:r.v7.LongForm,mdxType:"ProductName"})," make sure to use unique ids for each object and user within your application domain. We are using first names and simple ids to just illustrate an easy-to-follow example."))),(0,i.kt)("h2",{id:"related-sections"},"Related Sections"),(0,i.kt)(r.$q,{description:"Check the following sections for more on how to model for parent and child objects.",relatedLinks:[{title:"Modeling Concepts: Object to Object Relationships",description:"Learn about how to model object to object relationships in {ProductName}.",link:"./building-blocks/object-to-object-relationships",id:"./building-blocks/object-to-object-relationships"},{title:"Modeling Google Drive",description:"See how to make folders parents of documents, and to make editors on the parent folders editors on documents inside them..",link:"./advanced/gdrive#01-individual-permissions",id:"./advanced/gdrive.mdx#01-individual-permissions"},{title:"Modeling GitHub",description:"See how to grant users access to all repositories owned by an organization.",link:"./advanced/github#01-permissions-for-individuals-in-an-org",id:"./advanced/github.mdx#01-permissions-for-individuals-in-an-org"}],mdxType:"RelatedSection"}))}h.isMDXComponent=!0}}]);