(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var o=e(0),r=e.n(o),a=e(2),c=e.n(a),s=e(3),i=e(4),u=e(6),l=e(5),f=(e(12),function(t){var n=t.goods;return r.a.createElement("ul",{className:"goods__list"},n.map((function(t){return r.a.createElement("li",{className:"goods__item",style:{color:t.color},key:t.id},t.name)})))}),d=(e(13),e(14),"https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json");function m(){return fetch(d).then((function(t){return t.json()}))}var g=function(){return fetch(d).then((function(t){return t.json()})).then((function(t){return t.sort().filter((function(t){return t.id<=5}))}))},h=function(){return fetch(d).then((function(t){return t.json()})).then((function(t){return t.filter((function(t){return"red"===t.color}))}))},b=function(t){Object(u.a)(e,t);var n=Object(l.a)(e);function e(){var t;Object(s.a)(this,e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))).state={goods:[]},t.goodsHandler=function(n){n().then((function(n){t.setState({goods:n})}))},t}return Object(i.a)(e,[{key:"render",value:function(){var t=this,n=this.state.goods;return r.a.createElement("div",{className:"app"},r.a.createElement("h1",{className:"title is-2"},"Dynamic list of Goods"),r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"button is-info",onClick:function(){return t.goodsHandler(m)}},"ALL GOODS"),r.a.createElement("button",{type:"button",className:"button is-warning",onClick:function(){return t.goodsHandler(g)}},"5 FIRST GOODS"),r.a.createElement("button",{type:"button",className:"button is-danger",onClick:function(){return t.goodsHandler(h)}},"RED GOODS")),n.length>0&&r.a.createElement(f,{goods:n}))}}]),e}(r.a.Component);c.a.render(r.a.createElement(b,null),document.getElementById("root"))},7:function(t,n,e){t.exports=e(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.0257165a.chunk.js.map