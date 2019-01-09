(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(41)},20:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){},27:function(e,t,a){},35:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),c=a.n(s),l=(a(20),a(1)),i=a(2),o=a(4),m=a(3),p=a(5),u=(a(22),a(24),function(e){var t=e.id,a=e.label,n=e.onButtonClick;return r.a.createElement("button",{id:t,className:"f4 grow no-underline br-pill ph5 pv2 mb2 dib hover-bg-blue w-15 tc black bg-white mr2",onClick:n},a)}),h=a(14),d=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).onButtonClick=function(e){var t=e.target.innerHTML.toLowerCase();a.props.changeCategory(t)},a.state={items:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://swapi.co/api/").then(function(e){return e.json()}).then(function(t){e.setState({items:Object.entries(t)})})}},{key:"render",value:function(){var e=this,t=this.state.items,a=t.map(function(a,n){return r.a.createElement(u,{key:n,label:Object(h.capitalize)(t[n][0]),onButtonClick:e.onButtonClick})});return r.a.createElement("div",{className:"flex flex-wrap justify-center"},a)}}]),t}(n.Component),f=(a(27),function(){return r.a.createElement("div",{id:"lightsaber",className:"dib ml3 mr5"},r.a.createElement("span",{id:"light"}),r.a.createElement("span",{id:"generator"},r.a.createElement("span",{id:"guard"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("span",{id:"handlestart"},r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("span",{id:"handle"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",{className:"long"}),r.a.createElement("span",{className:"long"}),r.a.createElement("span",{className:"box"})),r.a.createElement("span",{className:"wings"},r.a.createElement("span",{className:"wing wing1"}),r.a.createElement("span",{className:"wing wing2"}),r.a.createElement("span",{className:"wing wing3"})),r.a.createElement("span",{className:"light"})))}),E=a(6),v=a.n(E),y=(a(35),function(e){return r.a.createElement("div",{className:"card dib grow br2 pa3 ma2 shadow-5 bw2"},e.children)}),b=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.name,a=e.height,n=e.mass;return r.a.createElement(y,null,r.a.createElement(v.a,{showLoadingAnimation:!0,type:"text",rows:3,ready:this.props.ready},r.a.createElement("h2",{className:"f3 pv2"},t),r.a.createElement("p",{className:"f5 pv1"},"Height: ",a),r.a.createElement("p",{className:"f5 pv1"},"Mass: ",n)))}}]),t}(r.a.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.name,a=e.diameter,n=e.climate,s=e.gravity;return r.a.createElement(y,null,r.a.createElement(v.a,{showLoadingAnimation:!0,type:"text",rows:4,ready:this.props.ready},r.a.createElement("h2",{className:"f3 pv2"},t),r.a.createElement("p",{className:"f5 pv1"},"Diameter: ",a),r.a.createElement("p",{className:"f5 pv1"},"Climate: ",n),r.a.createElement("p",{className:"f5 pv1"},"Gravity: ",s)))}}]),t}(r.a.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.title,a=e.episode_id,n=e.release_date,s=e.director,c=e.producer;return r.a.createElement(y,null,r.a.createElement(v.a,{showLoadingAnimation:!0,type:"text",rows:5,ready:this.props.ready},r.a.createElement("h2",{className:"f3 pv2"},t),r.a.createElement("p",{className:"f5 pv1"},"Episode: ",a),r.a.createElement("p",{className:"f5 pv1"},"Release Date: ",n),r.a.createElement("p",{className:"f5 pv1"},"Director: ",s),r.a.createElement("p",{className:"f5 pv1"},"Producer: ",c)))}}]),t}(r.a.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.name,a=e.classification,n=e.designation,s=e.average_height;return r.a.createElement(y,null,r.a.createElement(v.a,{showLoadingAnimation:!0,type:"text",rows:4,ready:this.props.ready},r.a.createElement("h2",{className:"f3 pv2"},t),r.a.createElement("p",{className:"f5 pv1"},"Classification: ",a),r.a.createElement("p",{className:"f5 pv1"},"Designation: ",n),r.a.createElement("p",{className:"f5 pv1"},"Average Height: ",s)))}}]),t}(r.a.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.name,a=e.model,n=e.manufacturer,s=e.cost_in_credits,c=e.passengers;return r.a.createElement(y,null,r.a.createElement(v.a,{showLoadingAnimation:!0,type:"text",rows:5,ready:this.props.ready},r.a.createElement("h2",{className:"f3 pv2"},t),r.a.createElement("p",{className:"f5 pv1"},"Model: ",a),r.a.createElement("p",{className:"f5 pv1"},"Manufacturer: ",n),r.a.createElement("p",{className:"f5 pv1"},"Cost in Credits: ",s),r.a.createElement("p",{className:"f5 pv1"},"Passengers: ",c)))}}]),t}(r.a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.name,a=e.model,n=e.manufacturer,s=e.cost_in_credits,c=e.passengers,l=e.starship_class;return r.a.createElement(y,null,r.a.createElement(v.a,{showLoadingAnimation:!0,type:"text",rows:3,ready:this.props.ready},r.a.createElement("h2",{className:"f3 pv2"},t),r.a.createElement("p",{className:"f5 pv1"},"Model: ",a),r.a.createElement("p",{className:"f5 pv1"},"Starship Class: ",l),r.a.createElement("p",{className:"f5 pv1"},"Manufacturer: ",n),r.a.createElement("p",{className:"f5 pv1"},"Cost in Credits: ",s),r.a.createElement("p",{className:"f5 pv1"},"Passengers: ",c)))}}]),t}(r.a.Component),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).onButtonClick=function(e){if("btnNext"===e.target.id&&null!=a.state.urlNext){var t=a.state.urlNext.replace("https://swapi.co/api/","");a.setState({ready:!1}),a.fetchData(t)}if("btnPrev"===e.target.id&&null!=a.state.urlPrev){var n=a.state.urlPrev.replace("https://swapi.co/api/","");a.setState({ready:!1}),a.fetchData(n)}},a.fetchData=function(e){"default"!==e&&fetch("https://swapi.co/api/"+e).then(function(e){return e.json()}).then(function(e){a.setState({dataSet:e.results,urlNext:e.next,urlPrev:e.previous,ready:!0})})},a.state={dataSet:[],urlNext:"",urlPrev:"",ready:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchData(this.props.category)}},{key:"componentDidUpdate",value:function(e){e.category!==this.props.category&&this.fetchData(this.props.category)}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.category!==e.category?(this.setState({ready:!1}),!0):this.state.dataSet!==t.dataSet||this.state.ready!==t.ready}},{key:"render",value:function(){var e=this;if("default"===this.props.category)return r.a.createElement("div",{className:"tc mt6"},r.a.createElement("h1",{className:"lh-title f1 measure white ttu"}," May the Force be with You! "));var t=this.state.dataSet;if(t.length){var a=[];switch(this.props.category){case"people":a=t.map(function(t,a){return r.a.createElement(b,{key:a,data:t,ready:e.state.ready})});break;case"planets":a=t.map(function(t,a){return r.a.createElement(g,{key:a,data:t,ready:e.state.ready})});break;case"films":a=t.map(function(t,a){return r.a.createElement(N,{key:a,data:t,ready:e.state.ready})});break;case"species":a=t.map(function(t,a){return r.a.createElement(j,{key:a,data:t,ready:e.state.ready})});break;case"vehicles":a=t.map(function(t,a){return r.a.createElement(w,{key:a,data:t,ready:e.state.ready})});break;case"starships":a=t.map(function(t,a){return r.a.createElement(O,{key:a,data:t,ready:e.state.ready})})}var n=[];return null!==this.state.urlPrev&&n.push(r.a.createElement(u,{key:1,id:"btnPrev",label:"Prev",onButtonClick:this.onButtonClick})),null!==this.state.urlNext&&n.push(r.a.createElement(u,{key:0,id:"btnNext",label:"Next",onButtonClick:this.onButtonClick})),r.a.createElement("div",{className:"flex flex-column justify-center"},r.a.createElement("div",{className:"flex items-start flex-wrap justify-center"},a),r.a.createElement("div",{className:"center"},n))}return r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(y,null,r.a.createElement("h2",null,"Data Loading...")))}}]),t}(r.a.Component),C=(a(37),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).changeCategory=function(t){e.setState({category:t})},e.state={category:"default"},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement("h1",{className:"f1 tc ttu white"},"Star Wars Universe"),r.a.createElement(d,{changeCategory:this.changeCategory}),r.a.createElement("div",{className:"fl"},r.a.createElement(f,null)),r.a.createElement("div",{className:"mr3"},r.a.createElement(k,{category:this.state.category})),r.a.createElement("div",{className:"tc yellow ma3 pa3 bg-dark-gray br2",style:{clear:"both"}},r.a.createElement("p",null," Made by ",r.a.createElement("a",{className:"white",href:"https://kishan00747.github.io"},"kishan00747"),". All rights reserved. ")))}}]),t}(n.Component));a(39),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.65895581.chunk.js.map