(this["webpackJsonpels-selector"]=this["webpackJsonpels-selector"]||[]).push([[0],{26:function(e,a,t){e.exports=t(41)},32:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),o=t.n(l),s=(t(31),t(32),t(6)),i=t(2),c=t(25),u=t(5),m=t(43),d=t(22),h=t.n(d),p=t(10),g=t.n(p);function E(e){var a=Object(n.useState)(!1),t=Object(u.a)(a,2),l=t[0],o=t[1],s=g()("more-info__content","pl-5",l?"block":"hidden"),i=g()("fas","pr-2",l?"fa-minus":"fa-plus"),c=function(e){return e.replace(/ /g,"")};return r.a.createElement("fieldset",null,e.text&&r.a.createElement("div",{className:"pb-5 text-section",dangerouslySetInnerHTML:{__html:e.text}}),e.question&&r.a.createElement("div",null,r.a.createElement("legend",{className:"w-auto d-inline h3"},e.question)),e.question_details&&r.a.createElement("div",{className:"pb-5 question-details-section",dangerouslySetInnerHTML:{__html:e.question_details}}),r.a.createElement("div",{className:"pb-5 more-info-section"},e.moreInfo.preview&&r.a.createElement("button",{type:"button",className:"more-info__button ml-5 py-3","aria-expanded":l,onClick:function(){o(!l)}},r.a.createElement("i",{className:i}),e.moreInfo.preview),r.a.createElement("div",{className:s},r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.moreInfo.fullText}}))),r.a.createElement("div",{className:"row"},e.answers.map((function(a,t){return r.a.createElement("div",{className:"position-relative col-xs-12 col-sm-6 col-lg-3 mb-2 border"},r.a.createElement("input",{type:"radio",id:"".concat(c(a.answer),"-").concat(e.layerCount,"-").concat(e.index),name:e.layerCount,value:t,onClick:function(){return e.onClick(a,e.index)},className:"answer"}),r.a.createElement("label",{htmlFor:"".concat(c(a.answer),"-").concat(e.layerCount,"-").concat(e.index),className:"answer__label"},r.a.createElement("span",{className:"answer__inner"},a.answer)),r.a.createElement("span",{className:"radio-custom"}))}))))}function f(e){var a=g()("external",e.class);return r.a.createElement("span",null," ",r.a.createElement("a",{href:e.href,className:a,title:"Open external link",target:"_blank",rel:"noopener noreferrer"},e.text),r.a.createElement("span",{className:"nonvisual-indicator"},"(external link)")," ")}function w(e){return r.a.createElement("div",{className:"option",id:e.id},e.heading&&r.a.createElement("h3",{className:"option__heading"},e.heading),e.text&&r.a.createElement("p",{className:"option__text",dangerouslySetInnerHTML:{__html:e.text}}),e.conditions.length>=1&&r.a.createElement("ul",{className:"option__conditions"},e.conditions.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e}}))}))),e.links.length>=1&&r.a.createElement("ul",{className:"option__links"},e.links.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("p",null,r.a.createElement(f,{href:e.href,text:e.text})))}))))}function v(e){return e.replace(/[ ()']/g,"")}function b(e){return r.a.createElement("div",{className:"result",id:"result-".concat(e.id)},e.text&&r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.text}}),e.conditions.length>=1&&r.a.createElement("div",{className:"result__conditions"},r.a.createElement("ul",null,e.conditions.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e}}))})))),e.links.length>=1&&r.a.createElement("ul",{className:"result__links"},e.links.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("p",null,r.a.createElement(f,{href:e.href,text:e.text})))}))),e.options.length>=1&&r.a.createElement("div",{className:"result__options"},e.options.map((function(e){return r.a.createElement(w,{heading:e.heading,text:e.text,links:e.links,conditions:e.conditions,id:"result-option-".concat(v(e.heading))})}))))}function y(e){var a=Object(n.useState)([]),t=Object(u.a)(a,2),l=t[0],o=t[1],s=Object(n.useState)(1),i=Object(u.a)(s,2),d=i[0],p=i[1],g=Object(n.useRef)(null),f=Object(n.useRef)(null),w=Object(n.useState)(!1),y=Object(u.a)(w,2),k=y[0],N=y[1],x=Object(m.a)((function(){N(!0)}),600),_=Object(u.a)(x,1)[0],q=function(e,a){p(d+1);var t=l;l.length>=a+1&&(t=l.slice(0,a),N(!1)),o([].concat(Object(c.a)(t),[{answer:e,layerCount:d}]))},I=l.filter((function(e){return e.answer.result})).map((function(e){return e.answer.result}));l.length>=1&&I.length>=1&&_();Object(n.useEffect)((function(){var e=null,a=window.innerWidth<576?"center":"nearest";h.a.polyfill(),k?(e=g,window.innerWidth<576&&(a="start")):l.length>=1&&(e=f),null!==e&&null!==e.current&&e.current.scrollIntoView({behaviour:"smooth",block:a})}),[l,k]);return r.a.createElement("div",{className:"row decision-tree-wrapper"},r.a.createElement("section",{className:"col-lg-12 page-section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(E,{question:e.data.question,answers:e.data.answers,moreInfo:e.data.moreInfo,index:0,onClick:q,layerCount:0,key:"0"}))))),l.map((function(e,a){var t=a+1===l.length;return e.answer.subquestion&&r.a.createElement("section",{className:"col-lg-12 page-section",key:e.layerCount},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12",ref:t?f:null},r.a.createElement(E,{question:e.answer.subquestion.question,answers:e.answer.subquestion.answers,index:a+1,layerCount:e.layerCount,onClick:q,moreInfo:e.answer.subquestion.moreInfo,text:e.answer.subquestion.text,question_details:e.answer.subquestion.question_details})))))})),r.a.createElement("section",{className:"col-lg-12 mt-4 pt-4","aria-live":"polite","aria-atomic":"true"},k&&r.a.createElement("div",{className:"container",ref:g},e.resultHeading&&r.a.createElement("h2",null,e.resultHeading),I.map((function(e,a){return r.a.createElement("div",{className:"row pb-4",key:a},r.a.createElement("div",{className:"col-12 mb-4"},r.a.createElement(b,{text:e.text,links:e.links,conditions:e.conditions,options:e.options,id:l.map((function(e){return v(e.answer.answer)})).join("__")})))})))),e.lastUpdated&&r.a.createElement("section",{className:"col-lg-12 mb-4"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 mb-4"},r.a.createElement("p",null,"Last updated:",e.lastUpdated))))))}E.defaultProps={question:"",text:"",question_details:"",moreInfo:{}},f.defaultProps={class:""},w.defaultProps={heading:"",text:"",links:[],conditions:[],id:""},b.defaultProps={links:[],conditions:[],options:[],text:"",id:""},y.defaultProps={lastUpdated:"",resultHeading:""};var k=t(23),N=t(11);function x(e){var a={true:{color:"green",icon:N.a},false:{color:"red",icon:N.d},partial:{color:"yellow",icon:N.b},unknown:{color:"orange",icon:N.c}}[e.value];return r.a.createElement("td",null,r.a.createElement(k.a,{icon:a.icon,color:"var(--".concat(a.color,")")}))}function _(e){return r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("th",null),e.data.types.map((function(e,a){return r.a.createElement("th",null,e.name)}))),r.a.createElement("tbody",null,e.data.attributes.map((function(a,t){return r.a.createElement("tr",null,r.a.createElement("td",null,a.name),e.data.types.map((function(e,t){return r.a.createElement(x,{value:a.values[e.id]})})))}))))}function q(e){return r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-lavender"},r.a.createElement("a",{class:"navbar-brand",href:"#"},"Start Well"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{class:"navbar-nav mr-auto"},r.a.createElement("li",{class:"nav-item active"},r.a.createElement("a",{class:"nav-link",href:"#"},"Home ",r.a.createElement("span",{class:"sr-only"},"(current)"))),r.a.createElement("li",{class:"nav-item"},r.a.createElement(s.b,{to:"/combined",className:"nav-link"},"Combined")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(s.b,{to:"/table",className:"nav-link"},"Table")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(s.b,{to:"/decision-tree",className:"nav-link"},"Decision tree")))))}x.defaultProps={notes:""};var I=t(7),S=t(8);var C=function(){return r.a.createElement("div",null,r.a.createElement(q,null),r.a.createElement("div",{class:"container"},r.a.createElement(y,{data:I,resultHeading:"Based on your results..."}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(_,{data:S})))))};var R=function(){return r.a.createElement("div",null,r.a.createElement(q,null),r.a.createElement("div",{class:"container"},r.a.createElement(y,{data:I,resultHeading:"Based on your results..."})))};var O=function(){return r.a.createElement("div",null,r.a.createElement(q,null),r.a.createElement("div",{class:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(_,{data:S})))))};var T=function(){return r.a.createElement("div",null,r.a.createElement(q,null))};t(40);var H=function(){return r.a.createElement(s.a,{basename:"/"},r.a.createElement(i.a,{exact:!0,path:"/",component:T}),r.a.createElement(i.a,{path:"/combined",component:C}),r.a.createElement(i.a,{path:"/decision-tree",component:R}),r.a.createElement(i.a,{path:"/table",component:O}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e){e.exports=JSON.parse('{"question":"","answers":[{"answer":"I want to drop off my child and have someone look after them","subquestion":{"question":"Where do you want the care to take place?","answers":[{"answer":"At a dedicated centre","subquestion":{"question":"What language do you want your child to be taught in?","answers":[{"answer":"Full immersion in Te Reo M\u0101ori","result":{"options":[{"heading":"Puna Reo","text":"Puna Reo are full immersion Te Reo M\u0101ori education and care services.","conditions":["Puna Reo have at least 50% qualified teachers on staff","There are only thirteen Puna Reo in Aotearoa, compared to 460 K\u014dhanga Reo, so there may not be one near you"]},{"heading":"K\u014dhanga Reo","conditions":["Wh\u0101nau are more closely involved with a K\u014dhanga Reo than teacher-led services"],"links":[{"text":"Find out about K\u014dhanga Reo","href":"https://www.kohanga.ac.nz/"},{"text":"Find a K\u014dhanga Reo near you","href":"https://www.kohanga.ac.nz/te-reo/nga-koohanga-reo-tuwahi"}]}]}},{"answer":"Primarily English","subquestion":{"question":"What timing do you need?","answers":[{"answer":"Part-day sessions","result":{"options":[{"heading":"Kindergarten"}]}},{"answer":"I need flexible time to work with my work or study","result":{"options":[{"heading":"Centre-based education and care services"}]}}]}},{"answer":"Full immersion in another language","result":{"options":[{"heading":"Aoga"}]}}]}},{"answer":"At my home","result":{"options":[{"heading":"Home-based education and care"}]}},{"answer":"At the home of the carer","result":{"options":[{"heading":"Home-based education and care"}]}}]}},{"answer":"I can sometimes stay with my child and help out with care","subquestion":{"question":"Do you want your child to be immersed in Te Reo M\u0101ori?","answers":[{"answer":"Yes","result":{"options":[{"heading":"K\u014dhanga Reo","links":[{"text":"Find out about K\u014dhanga Reo","href":"https://www.kohanga.ac.nz/"},{"text":"Find a K\u014dhanga Reo near you","href":"https://www.kohanga.ac.nz/te-reo/nga-koohanga-reo-tuwahi"}]}]}},{"answer":"No","result":{"options":[{"heading":"Playcentre","links":[{"text":"Find out more about Playcentres","href":"https://www.playcentre.org.nz/"},{"text":"Find a Playcentre near you","href":"https://www.playcentre.org.nz/find-your-centre/"}]}]}}]}},{"answer":"I expect to mostly stay with my child while they play with other children","result":{"options":[{"heading":"Playgroup","links":[{"text":"Different types of early learning service","href":"https://parents.education.govt.nz/early-learning/early-childhood-education/different-kinds-of-early-childhood-education/"},{"text":"How to choose a playgroup","href":"https://www.myece.org.nz/ece-checklist-for-quality/262-playgroup-quality-friendships"}]}]}},{"answer":"I want to keep caring for my child, but get resources for their early learning sent to me","result":{"options":[{"heading":"Te Kura (the Correspondence School)","links":[{"text":"Find out more about Te Kura","href":"https://www.tekura.school.nz/"}]}]}}]}')},8:function(e){e.exports=JSON.parse('{"types":[{"name":"K\u014dhanga Reo","id":"kohanga"},{"name":"Kindergarten","id":"kindergarten"},{"name":"Something else","id":"something"}],"attributes":[{"name":"Te Reo M\u0101ori immersion","values":{"kohanga":"true","kindergarten":"false","something":"partial"}},{"name":"Led by qualified teachers","values":{"kohanga":"false","kindergarten":"true","something":"unknown"}},{"name":"Vegetarian","values":{"kohanga":"partial","kindergarten":"partial","something":"partial"}},{"name":"Sandpits","values":{"kohanga":"true","kindergarten":"true","something":"false"}}]}')}},[[26,1,2]]]);
//# sourceMappingURL=main.ec6a2ef1.chunk.js.map