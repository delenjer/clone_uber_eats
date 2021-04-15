(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a(75)},49:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),u=a.n(c),l=a(4),i=(a(49),a(7)),s=a(2),o=a(12),m=a.n(o),d=a(17),f=function(e){return{type:"SET_QUERY",query:e}},E=function(e){return{type:"SET_LOADING",isLoading:e}},p=function(e){return{type:"SET_RESTAURANT_MENU_ITEMS",items:e}},h=function(e){return{type:"SET_ID_LOCATION",idLocation:e}},_=function(e){return{type:"SET_LOADING_DATA",isLoading:e}},b=a(39),g=a.n(b).a.create({baseURL:"https://mate-uber-eats-api.herokuapp.com/api/v1/",responseType:"json"}),v=function(){return function(e){g.get("https://mate-uber-eats-api.herokuapp.com/api/v1/locations").then(function(e){return e.data}).then(function(){var t=Object(d.a)(m.a.mark(function t(a){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,{type:"SET_LOCATION",isLocation:a};case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},C=function(e){return function(t){t(E(!0)),function(e){return g.get("restaurants?location=".concat(e)).then(function(e){return e.data})}(e).then(function(){var e=Object(d.a)(m.a.mark(function e(a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,{type:"SET_RESTAURANTS",restaurants:a};case 3:e.t1=e.sent,(0,e.t0)(e.t1),t(E(!1));case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}},N=function(e){return function(t){t(E(!0)),function(e){return g.get("restaurants/".concat(e)).then(function(e){return e.data})}(e).then(function(){var e=Object(d.a)(m.a.mark(function e(a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,{type:"SET_RESTAURANT",restaurant:a};case 3:e.t1=e.sent,(0,e.t0)(e.t1),t(E(!1));case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}},O=function(e){return function(t){t(_(!0)),function(e){return g.get("menu-items/".concat(e)).then(function(e){return e.data})}(e).then(function(){var e=Object(d.a)(m.a.mark(function e(a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,p(a);case 3:e.t1=e.sent,(0,e.t0)(e.t1),t(_(!1));case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).catch(function(){t(_(!1)),t(p({}))})}},j=a(13),y=a(40),I=a(41),T=a(26),S=a(3),k={restaurants:[],initItems:8,addedItems:0,query:""},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RESTAURANTS":return Object(S.a)(Object(S.a)({},e),{},{restaurants:t.restaurants});case"SET_ITEMS":return Object(S.a)(Object(S.a)({},e),{},{addedItems:t.num});case"SET_QUERY":return Object(S.a)(Object(S.a)({},e),{},{query:t.query});default:return e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":return t.isLoading;default:return e}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING_DATA":return t.isLoading;default:return e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RESTAURANT":return t.restaurant;default:return e}},A={menuItems:{},id:""},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RESTAURANT_MENU_ITEMS":return Object(S.a)(Object(S.a)({},e),{},{menuItems:t.items});case"SET_ID_ITEMS":return Object(S.a)(Object(S.a)({},e),{},{id:t.id});default:return e}},H={location:{},id:"f6019ddf-0413-4024-b3e6-e949d8609c56"},R=function(e){return e},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOCATION":return Object(S.a)(Object(S.a)({},e),{},{location:t.isLocation});case"SET_ID_LOCATION":return Object(S.a)(Object(S.a)({},e),{},{id:t.idLocation});default:return e}},D=function(e){return R(e.locationRestaurants)},Z=function(e){return function(e){return e}(e.restaurants)},F=function(e){return function(e){return e}(e.isLoadingRestaurants)},q=Object(T.a)(Z,function(e){var t=e.restaurants.data,a=e.query;if(!t)return[];var n=t.feedItems,r=t.storesMap;return n.map(function(e){var t=e.uuid;return r[t]}).filter(function(e){var t=a.toLowerCase();return e.title.toLowerCase().includes(t)})}),B=Object(T.a)(function(e){return function(e){return e}(e.restaurant)},function(e){var t=e.data;return t||[]}),G=Object(j.combineReducers)({restaurants:w,isLoadingRestaurants:x,restaurant:M,menuItems:V,locationRestaurants:U,loadingModalData:L}),Y=Object(j.createStore)(G,Object(y.composeWithDevTools)(Object(j.applyMiddleware)(I.a))),P=function(){var e=Object(s.c)(function(e){return function(e){var t=R(e.locationRestaurants).location.data;if(!t)return[];var a=t.locationsMap;return Object.values(a)}(e)}),t=Object(s.c)(function(e){return D(e)}).id,a=Object(s.b)(),c=Object(l.f)(),u=localStorage.getItem("locationId")||"";Object(n.useEffect)(function(){a(v())},[]);return r.a.createElement("select",{name:"location",className:"delivery-info location",value:u||t,onChange:function(e){return t=e.target.value,"/"===c.location.pathname&&a(h(t)),a(h(t)),c.push("/"),void localStorage.setItem("locationId",t);var t}},e.map(function(e){var t=e.id,a=e.title;return r.a.createElement("option",{key:t,value:t},a)}))},J=a(11),Q=a(42),W=function(){var e=Object(n.useState)(""),t=Object(J.a)(e,2),a=t[0],c=t[1],u=Object(s.b)(),i=Object(l.f)(),o=Object(n.useCallback)(Object(Q.debounce)(function(){"/"!==i.location.pathname?(i.push("/"),u(f(a))):u(f(a))},500),[a]);return Object(n.useEffect)(function(){o()},[a,o]),r.a.createElement("form",{className:"search"},r.a.createElement("input",{name:"search",id:"search",className:"search__input",type:"text",placeholder:"search",value:a,onChange:function(e){return t=e.target.value,void c(t);var t}}),r.a.createElement("label",{htmlFor:"search",className:"search__title"},r.a.createElement("img",{src:"./images/search.svg",alt:"Logo"})))},z=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header-wrapper"},r.a.createElement(i.b,{to:"/",className:"logo header__logo"},r.a.createElement("img",{src:"./images/logo.svg",alt:"Logo"})),r.a.createElement("div",{className:"header__services"},r.a.createElement("div",{className:"header__services--col"},r.a.createElement("div",{className:"header__service"},r.a.createElement(P,null),r.a.createElement("button",{type:"button",className:"delivery-info delivery-box"},r.a.createElement("div",{className:"delivery-info__marker"},r.a.createElement("img",{src:"./images/clock.svg",alt:"Logo"})),r.a.createElement("p",{className:"delivery-info__text"},"Deliver now")))),r.a.createElement("div",{className:"header__services--col"},r.a.createElement("div",{className:"header__service"},r.a.createElement(W,null),r.a.createElement("div",{className:"sign-box"},r.a.createElement("button",{type:"button",className:"sign-btn btn"},"Sign in")))))))},K=a(22),X=a(43),$=function(e){var t=e.restaurant;return r.a.createElement("li",{className:"restaurants__item"},r.a.createElement(i.b,{to:{pathname:"/restaurant-page/".concat(t.uuid)},className:"restaurants__link"},r.a.createElement("div",{className:"restaurants__img-box"},r.a.createElement("img",{src:t.heroImageUrl,alt:t.title,className:"restaurants__img"})),r.a.createElement("h2",{className:"restaurants__title"},t.title),r.a.createElement("p",{className:"restaurants__categories"},"".concat(t.categories.join(" \u2022 "))),r.a.createElement("p",{className:"restaurants__range-time"},t.etaRange.text)))},ee=function(){return r.a.createElement("div",{className:"loading-wrap"},r.a.createElement("div",{className:"logo-loading"},r.a.createElement("svg",{width:"80",height:"24",viewBox:"0 0 146 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M67.713 9.66297C65.5609 9.66297 64.0343 11.3469 64.0343 13.9318V23.4138H60.7491V6.72395H63.995V8.76198C64.3953 8.0865 64.9691 7.53039 65.6567 7.15129C66.3444 6.77219 67.1209 6.5839 67.9058 6.60592H69.0861V9.66297H67.713ZM58.4789 15.0689C58.4789 10.0918 54.9379 6.36985 50.1458 6.36985C49.0135 6.37754 47.894 6.60903 46.8515 7.05101C45.809 7.49299 44.8643 8.13673 44.0715 8.9452C43.2788 9.75367 42.6537 10.7109 42.2323 11.7618C41.8109 12.8128 41.6014 13.9367 41.616 15.0689C41.616 20.042 45.452 23.8033 50.4566 23.8033C51.8546 23.8297 53.2384 23.5197 54.4914 22.8993C55.7445 22.2789 56.83 21.3664 57.6566 20.2387L55.2724 18.4918C54.7253 19.2553 54.0016 19.8749 53.1629 20.2976C52.3243 20.7204 51.3957 20.9337 50.4566 20.9194C49.1191 20.9131 47.8282 20.4278 46.8177 19.5516C45.8072 18.6753 45.144 17.4661 44.9484 16.143H58.4868L58.4789 15.0689ZM45.0192 13.5384C45.6055 10.9928 47.6396 9.26953 50.1064 9.26953C52.5733 9.26953 54.6035 10.9928 55.1543 13.5384H45.0192ZM31.2094 6.36985C30.1115 6.37078 29.0247 6.58926 28.0117 7.01268C26.9987 7.4361 26.0797 8.05606 25.3078 8.83674V0.491821H22.0225V23.4138H25.2684V21.2971C26.8409 22.8878 28.9805 23.7892 31.2173 23.8033C32.3775 23.8279 33.5311 23.6207 34.6102 23.1937C35.6894 22.7667 36.6724 22.1286 37.5017 21.3168C38.331 20.5049 38.9898 19.5356 39.4397 18.4658C39.8895 17.396 40.1212 16.2471 40.1212 15.0866C40.1212 13.926 39.8895 12.7772 39.4397 11.7073C38.9898 10.6375 38.331 9.66826 37.5017 8.8564C36.6724 8.04453 35.6894 7.4064 34.6102 6.97942C33.5311 6.55244 32.3775 6.3452 31.2173 6.36985H31.2094ZM30.9733 20.8682C29.8282 20.8737 28.7073 20.5388 27.7528 19.9062C26.7983 19.2736 26.0532 18.3717 25.6121 17.3149C25.171 16.2582 25.0538 15.0942 25.2753 13.9707C25.4968 12.8472 26.047 11.8148 26.8562 11.0046C27.6654 10.1943 28.697 9.64264 29.8202 9.41961C30.9434 9.19659 32.1075 9.31224 33.1648 9.75189C34.2222 10.1915 35.1251 10.9354 35.7591 11.889C36.393 12.8426 36.7294 13.9631 36.7255 15.1082C36.7265 15.8635 36.5784 16.6116 36.2896 17.3095C36.0008 18.0074 35.577 18.6414 35.0425 19.1751C34.5081 19.7088 33.8735 20.1318 33.1752 20.4196C32.4769 20.7074 31.7286 20.8545 30.9733 20.8525V20.8682ZM9.92415 20.7108C13.0953 20.7108 15.5583 18.2794 15.5583 14.6361V0.491821H18.9615V23.4138H15.5976V21.2459C14.8117 22.0582 13.8691 22.7026 12.827 23.1401C11.7849 23.5777 10.6649 23.7992 9.53465 23.7915C4.64415 23.7915 0.878906 20.2269 0.878906 14.821V0.491821H4.34514V14.6558C4.34514 18.3187 6.70579 20.7108 9.92415 20.7108Z",fill:"#262626"}),r.a.createElement("path",{d:"M77.2578 0.491821H93.3378V4.42625H81.6014V10.0131H93.0112V13.8138H81.6014V19.4951H93.3378V23.4295H77.2578V0.491821ZM137.746 23.8426C142.676 23.8426 145.453 21.482 145.453 18.24C145.453 15.9305 143.809 14.2072 140.366 13.4597L136.727 12.7161C134.614 12.3226 133.949 11.9292 133.949 11.1423C133.949 10.1233 134.968 9.49772 136.845 9.49772C138.879 9.49772 140.386 10.0446 140.779 11.9253H145.044C144.812 8.38428 142.266 6.04723 137.104 6.04723C132.643 6.04723 129.511 7.88854 129.511 11.4571C129.511 13.924 131.234 15.5292 134.952 16.3121L139.02 17.2525C140.626 17.5672 141.055 18 141.055 18.6649C141.055 19.7233 139.843 20.3882 137.883 20.3882C135.42 20.3882 134.012 19.8413 133.465 17.9607H129.176C129.802 21.4938 132.422 23.8426 137.746 23.8426ZM127.937 23.4138H123.322C120.426 23.4138 118.821 21.6118 118.821 19.3377V10.3279H115.575V6.48789H118.837V1.66822H123.125V6.48789H127.937V10.3279H123.125V18.24C123.125 19.141 123.751 19.5738 124.731 19.5738H127.937V23.4138ZM109.445 6.49576V8.02231C107.935 6.74593 106.021 6.04859 104.043 6.0551C102.86 6.0302 101.683 6.24184 100.582 6.67761C99.4813 7.11338 98.4785 7.76451 97.6326 8.59284C96.7866 9.42117 96.1146 10.41 95.6557 11.5015C95.1969 12.5929 94.9606 13.7649 94.9606 14.9489C94.9606 16.1328 95.1969 17.3049 95.6557 18.3963C96.1146 19.4877 96.7866 20.4766 97.6326 21.3049C98.4785 22.1332 99.4813 22.7844 100.582 23.2201C101.683 23.6559 102.86 23.8675 104.043 23.8426C106.021 23.8512 107.936 23.1536 109.445 21.8754V23.4059H113.722V6.48789L109.445 6.49576ZM104.397 20.1285C103.372 20.1402 102.365 19.8467 101.507 19.2852C100.648 18.7237 99.9758 17.9195 99.5753 16.975C99.1747 16.0305 99.0641 14.9882 99.2573 13.9806C99.4505 12.9731 99.939 12.0457 100.661 11.3163C101.382 10.587 102.304 10.0887 103.31 9.88467C104.315 9.68065 105.358 9.78017 106.307 10.1706C107.256 10.561 108.067 11.2246 108.638 12.0772C109.209 12.9298 109.513 13.9328 109.512 14.9587C109.518 15.635 109.391 16.3058 109.136 16.9324C108.881 17.5589 108.505 18.1287 108.028 18.6087C107.552 19.0888 106.985 19.4696 106.36 19.7291C105.736 19.9887 105.066 20.1217 104.39 20.1207L104.397 20.1285Z",fill:"#5FB709"}))))},te=function(){var e=Object(n.useState)(!0),t=Object(J.a)(e,2),a=t[0],c=t[1],u=Object(s.b)(),l=Object(s.c)(function(e){return q(e)}),i=Object(s.c)(function(e){return Z(e)}),o=Object(s.c)(function(e){return F(e)}),m=Object(s.c)(function(e){return D(e)}).id,d=i.initItems+i.addedItems,f=Object(K.a)(l).slice(0,d),E=localStorage.getItem("locationId")||"";Object(n.useEffect)(function(){u(C(null===E||""===E?m:E))},[m,E]),Object(n.useEffect)(function(){f.length>=l.length?c(!1):c(!0)},[f.length,l.length]);return r.a.createElement(r.a.Fragment,null,o?r.a.createElement(ee,null):r.a.createElement(r.a.Fragment,null,f.length?r.a.createElement("div",{className:"main-wrapper"},r.a.createElement(X.a,{dataLength:f.length,next:function(){f.length>=l.length?c(!1):setTimeout(function(){u({type:"SET_ITEMS",num:i.addedItems+8})},500)},hasMore:a,loader:r.a.createElement("div",{className:"loader"},"Loading..."),endMessage:r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("b",null,"Yay! You have seen it all"))},r.a.createElement("section",{className:"restaurants"},r.a.createElement("ul",{className:"restaurants__list"},f.map(function(e){return r.a.createElement($,{key:e.uuid,restaurant:e})}))))):r.a.createElement("p",{className:"error-text"},"NO RESTAURANTS")))},ae=function(){return r.a.createElement(te,null)},ne=function(){return r.a.createElement(ae,null)},re=function(e){return(parseFloat(String(e))/100).toFixed(2)},ce=function(e){var t=e.restaurantMenu,a=Object(l.g)(),n=Object(s.b)();return r.a.createElement("li",{className:"restaurant__item"},r.a.createElement("h2",{className:"restaurant__title"},t.title),r.a.createElement("section",{className:"card-container"},t.itemUuids.map(function(e){return r.a.createElement(i.b,{to:{pathname:"".concat(a.url,"/modal/").concat(e.uuid)},key:e.uuid,className:"card",onClick:function(){return n({type:"SET_ID_ITEMS",id:e.uuid})}},r.a.createElement("div",{className:"card__col card__col--content"},r.a.createElement("h3",{className:"card__title"},e.title),r.a.createElement("p",{className:"card__description"},e.description),r.a.createElement("p",{className:"card__price"},"\xa3 ".concat(re(e.price)))),r.a.createElement("div",{className:"card__col card__col--img-box"},r.a.createElement("img",{className:"card__img",src:e.imageUrl,alt:e.title})))})))},ue=function(e){var t=e.restaurant,a=t.sections,n=t.sectionsMap,c=t.entitiesMap,u=a&&a.map(function(e){return n[e]}).map(function(e){return Object(S.a)(Object(S.a)({},e),{},{itemUuids:e.itemUuids.map(function(e){return c[e]})})});return r.a.createElement("div",{className:"main-wrapper"},r.a.createElement("ul",{className:"restaurant__list"},u&&u.map(function(e){return r.a.createElement(ce,{key:e.uuid,restaurantMenu:e})})))},le=function(){var e=Object(l.g)(),t=Object(s.b)(),a=Object(s.c)(function(e){return F(e)}),c=Object(s.c)(function(e){return B(e)}),u=c&&c,i=u.heroImageUrls,o=u.title,m=u.categories,d=u.location;Object(n.useEffect)(function(){t(N(e.params.uuid))},[]);return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(ee,null):r.a.createElement("section",{className:"restaurant"},r.a.createElement("div",{className:"restaurant__header",style:{backgroundImage:"url(".concat(i&&i.filter(function(e){return 2880===e.width}).map(function(e){return e.url}),")")}},r.a.createElement("article",{className:"restaurant__info"},r.a.createElement("h1",{className:"restaurant__main-title"},o),r.a.createElement("p",{className:"restaurants__categories"},"".concat(m&&m.join(" \u2022 "))),r.a.createElement("p",{className:"restaurant__location"},d&&"".concat(d.address," ").concat(d.country),r.a.createElement("a",{className:"restaurant__location--link",href:"/"},"\u2022 More info")))),r.a.createElement(ue,{restaurant:c})))},ie=function(e){return r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-body"},e.children))},se=a(20),oe=function(e){return r.a.createElement("input",{className:e.className,type:e.type,value:e.value,onChange:e.onChange,checked:e.checked})},me=function(e){var t=e.item,a=e.option,n=e.i,c=e.optionId,u=e.setOptionId,l=e.handleCheckedCheckbox,i=e.handleCheckedRadio;return r.a.createElement("label",null,1===t.maxPermitted&&r.a.createElement(oe,{type:"radio",value:"".concat(re(a.price)),checked:c===a.uuid,className:"select-meal__input",onChange:function(e){i(t.uuid,e.target.value),u(a.uuid)}}),t.maxPermitted>2&&r.a.createElement(oe,{type:"checkbox",value:"".concat(re(a.price)),className:"select-meal__input",onChange:function(e){u(a.uuid),l(e,n)}}),a.title)},de=function(e){var t=e.item,a=e.menuItems,c=e.handleCheckedCheckbox,u=e.handleCheckedRadio,l=Object(n.useState)(""),i=Object(J.a)(l,2),s=i[0],o=i[1];return r.a.createElement("ul",{className:"menu-modal__options-list"},t.options.map(function(e,n){return r.a.createElement("li",{key:e.uuid,className:"menu-modal__options-item"},r.a.createElement("div",{className:"select-meal"},r.a.createElement(me,{item:t,option:e,i:n,optionId:s,setOptionId:o,menuItems:a,handleCheckedCheckbox:c,handleCheckedRadio:u}),r.a.createElement("p",null,"+\xa3 ".concat(re(e.price)))))}))},fe=function(e){var t=e.menuItems,a=Object(s.c)(function(e){return function(e){return function(e){return e}(e.loadingModalData)}(e)}),c=Object(n.useState)({}),u=Object(J.a)(c,2),l=u[0],i=u[1],o=Object(n.useState)([]),m=Object(J.a)(o,2),d=m[0],f=m[1],E=t.menuItems.data,p=function(e,t){var a=e.target.value;e.target.checked?e.target.checked&&f([].concat(Object(K.a)(d),[{value:a,id:t}])):f(d.filter(function(e){return e.id!==t}))},h=function(e,t){i(Object(S.a)(Object(S.a)({},l),{},Object(se.a)({},e,{value:t})))};return r.a.createElement("div",{className:"menu-modal"},a?r.a.createElement(ee,null):E?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"menu-modal__header"},r.a.createElement("img",{className:"menu-modal__img",src:E.imageUrl,alt:"Img"}),r.a.createElement("h1",{className:"menu-modal__main-title"},E.title),r.a.createElement("p",{className:"menu-modal__description"},E.itemDescription)),r.a.createElement("ul",{className:"menu-modal__list"},E.customizationsList.map(function(e){return r.a.createElement("li",{key:e.uuid},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"menu-modal__list-title-wrap"},r.a.createElement("h3",{className:"menu-modal__list-title",style:{fontWeight:"bold"}},e.title),r.a.createElement("p",{className:"menu-modal__list-title--text"},"Choose up to ",r.a.createElement("span",null,e.maxPermitted))),r.a.createElement(de,{item:e,menuItems:t,handleCheckedCheckbox:p,handleCheckedRadio:h})))})),r.a.createElement("div",{className:"menu-modal__footer"},r.a.createElement("button",{className:"btn add-button",type:"button"},r.a.createElement("span",{className:"add-button--item"},"Add 1 to order"),r.a.createElement("span",{className:"add-button--item"},"\xa3 ".concat(function(e,t,a){var n=Object.values(t).map(function(e){return e.value}),r=a.map(function(e){return e.value});return(n.concat(r).reduce(function(e,t){return e+Number(t)},0)+Number(e)).toFixed(2)}("".concat(re(E.price)),l,d)))))):r.a.createElement("p",{className:"error-text"},"This menu not loading..."))},Ee=function(){var e=Object(n.useState)(!1),t=Object(J.a)(e,2),a=t[0],c=t[1],u=document.querySelector(".modal-wrap"),i=Object(s.c)(function(e){return function(e){return function(e){return e}(e.menuItems)}(e)}),o=Object(s.b)(),m=Object(l.g)(),d=Object(l.f)();Object(n.useEffect)(function(){o(O(m.params.uuid))},[m.params.uuid]),Object(n.useEffect)(function(){c(m.isExact)},[m.isExact]);return r.a.createElement("div",{className:a?"active-modal modal-wrap":"modal-wrap",onClick:function(e){e.target===u&&d.goBack()}},r.a.createElement(ie,null,r.a.createElement("button",{className:"close-modal",onClick:function(){d.goBack()}},r.a.createElement("span",{className:"icon-close"})),r.a.createElement(fe,{menuItems:i})))},pe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(z,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:ne}),r.a.createElement(l.a,{path:"/restaurant-page/:uuid",component:le})),r.a.createElement(l.a,{path:"/restaurant-page/:uuid/modal/:uuid",component:Ee}))};u.a.render(r.a.createElement(s.a,{store:Y},r.a.createElement(i.a,null,r.a.createElement(pe,null))),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.5c96dde3.chunk.js.map