(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(3),c=t.n(r),o=(t(13),t(1));t(15);function s(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"#"},"Navbar ",e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link mx-2",href:"#"},"About")),n.a.createElement("li",{className:"nav-item dropdown"},n.a.createElement("a",{className:"nav-link dropdown-toggle mx-2",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Dropdown"),n.a.createElement("ul",{className:"dropdown-menu"},n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"/"},"Action")),n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"/"},"Another action")),n.a.createElement("li",null,n.a.createElement("hr",{className:"dropdown-divider"})),n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"#"},"Something else here")))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link disabled",href:"#"},"Disabled"))),n.a.createElement("div",{className:"form-check form-switch text-".concat("dark"===e.mode?"light":"green"===e.mode?"primary":"blue"===e.mode?"success":"dark")},n.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch","aria-checked":"false",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Switch Mode")),n.a.createElement("div",{className:"form-check form-switch text-".concat("blue"===e.mode?"green":"blue")},n.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch","aria-checked":"false",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Switch Mode")),n.a.createElement("form",{className:"d-flex",role:"search"},n.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),n.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search"))))))}function m(e){var a=Object(l.useState)(""),t=Object(o.a)(a,2),r=t[0],c=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"light"===e.mode?"grey":"white"}},n.a.createElement("h1",null,e.heading," "),n.a.createElement("div",{className:"form-group",style:{backgroundColor:"light"===e.mode?"white":"grey"}},n.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",style:{backgroundColor:"light"===e.mode?"white":"grey",color:"light"===e.mode?"grey":"white"},onChange:function(e){c(e.target.value)},rows:"2"})),n.a.createElement("button",{className:"btn btn-primary my-3",onClick:function(){var a=r.toUpperCase();c(a),e.showAlert("Converted To UpperCase","success")}},"Convert to UpperCase"),n.a.createElement("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){var a=r.toLowerCase();c(a),e.showAlert("Converted To LowerCase","success")}},"Convert to LowerCase"),n.a.createElement("button",{type:"submit",onClick:function(){var e=new SpeechSynthesisUtterance;e.text=r,window.speechSynthesis.speak(e)},className:"btn btn-warning mx-2 my-2"},"Speak")),n.a.createElement("div",{className:"container my-2",style:{color:"light"===e.mode?"grey":"white"}},n.a.createElement("h2",null,"hey para"),n.a.createElement("p",null,function(){var e=0;return r.split(" ").forEach(function(a){a.length>0&&(e+=1)}),e}()," words , ",r.length," char"),n.a.createElement("p",null,.008*r.split(" ").length," time to read"),n.a.createElement("h2",null,"Preview :"),n.a.createElement("p",null,r)))}s.defaultProps={title:"default title",about:"default about",num:"{07}"};var i=function(e){return e.alert&&n.a.createElement("div",null,n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,e.alert.type)," : ",n.a.createElement("strong",null,e.alert.msg),n.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close",onClick:function(){setTimeout(function(){e.showAlert()},2e3)}})))};var u=function(){var e=Object(l.useState)("light"),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)("dark"),u=Object(o.a)(c,2),d=u[0],b=u[1],h=Object(l.useState)(null),g=Object(o.a)(h,2),p=g[0],E=g[1],f=function(e,a){E(null==e?null:{msg:e,type:a})};return n.a.createElement(n.a.Fragment,null,n.a.createElement(s,{title:"value pass",mode:t,switchText:d,toggleMode:function(){"light"===t?(r("dark"),b("light"),document.body.style.backgroundColor="grey",f("Dark Mode has been enabled","success")):(r("light"),b("dark"),document.body.style.backgroundColor="white",f("Dark Mode has been disabled","success"))},toggleMode2:function(){"blue"===t?(r("green"),b("blue"),document.body.style.backgroundColor="green",f("Green Mode has been enabled","success")):(r("blue"),b("green"),document.body.style.backgroundColor="blue",f("Green Mode has been enabled","success")),console.log(t)}}),n.a.createElement(i,{alert:p,showAlert:f}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(m,{heading:"Enter text",mode:t,switchText:d,showAlert:f})))},d=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,18)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null))),d()},4:function(e,a,t){e.exports=t(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.8b41884e.chunk.js.map