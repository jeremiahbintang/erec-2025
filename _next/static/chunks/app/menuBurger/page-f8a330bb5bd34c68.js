(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[517],{39660:function(e,n,r){Promise.resolve().then(r.bind(r,96967))},96967:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return MenuBurger}});var t=r(57437),o=r(61396),a=r.n(o),u=r(76200),l=r.n(u),i=r(22444),s=r(76175),c=r(48493),d=r(61833),p=r(2265);function MenuBurger(){let[e,n]=(0,i.q)(),[r,o]=(0,p.useState)(void 0),u=(0,s.O)(()=>{e&&handleMenuClick()}),handleMenuClick=()=>{n.toggle()};(0,p.useEffect)(()=>{o(window.location.pathname);let handleRouteChange=()=>{o(window.location.pathname)};return window.addEventListener("popstate",handleRouteChange),()=>{window.removeEventListener("popstate",handleRouteChange)}},[]);let isActive=e=>e===r?l().activeMenu:"";return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(c.Menu,{opened:e,classNames:{dropdown:l().dropdown,item:l().item},children:[(0,t.jsx)(c.Menu.Target,{children:(0,t.jsx)(d.Burger,{ref:u,opened:e,onClick:()=>n.toggle(),"aria-label":"Toggle navigation",classNames:{burger:l().burger}})}),(0,t.jsx)(c.Menu.Dropdown,{children:(0,t.jsxs)("nav",{className:l().dropdownContainer,children:[(0,t.jsx)(c.Menu.Item,{children:(0,t.jsx)("div",{className:l().buttonContainer,children:(0,t.jsx)("a",{href:"https://forms.gle/5nBNSFBUs6AUr8bz6",target:"_blank",rel:"noopener noreferrer",className:l().button,children:"REGISTER"})})}),[{path:"/theme",label:"THEME"},{path:"/speakers",label:"SPEAKERS"},{path:"/venue",label:"VENUE"},{path:"/schedule",label:"SCHEDULE"},{path:"/pricing",label:"PRICING"},{path:"/faqs",label:"FAQS"},{path:"/contact",label:"CONTACT"},{path:"/devotion",label:"MORNING DEVOTION"}].map(e=>(0,t.jsx)(c.Menu.Item,{children:(0,t.jsx)(a(),{href:e.path,className:"".concat(l().menuText," ").concat(isActive(e.path)),style:{paddingTop:"/theme"===e.path?"0":void 0,paddingBottom:"/devotion"===e.path?"0":void 0},children:e.label})},e.path))]})})]})})}},76200:function(e){e.exports={menuBurger:"menuBurger_menuBurger__OYZ1_",overlay:"menuBurger_overlay__61k2t",dropdown:"menuBurger_dropdown__pCqc7",dropdownContainer:"menuBurger_dropdownContainer__o7scB",item:"menuBurger_item__TJUw9",burger:"menuBurger_burger__Mqv9k",buttonContainer:"menuBurger_buttonContainer__BXCEo",button:"menuBurger_button__p5d5c",menuText:"menuBurger_menuText__csYh1",activeMenu:"menuBurger_activeMenu__dm2oF"}},30622:function(e,n,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=r(2265),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function q(e,n,r){var t,a={},s=null,c=null;for(t in void 0!==r&&(s=""+r),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(c=n.ref),n)u.call(n,t)&&!i.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===a[t]&&(a[t]=n[t]);return{$$typeof:o,type:e,key:s,ref:c,props:a,_owner:l.current}}n.Fragment=a,n.jsx=q,n.jsxs=q},57437:function(e,n,r){"use strict";e.exports=r(30622)},61396:function(e,n,r){e.exports=r(68326)}},function(e){e.O(0,[326,66,971,472,744],function(){return e(e.s=39660)}),_N_E=e.O()}]);