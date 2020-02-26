(this["webpackJsonpreact-burger-builder"]=this["webpackJsonpreact-burger-builder"]||[]).push([[0],{49:function(e,n,t){e.exports=t.p+"static/media/burger-logo.b8503d26.png"},57:function(e,n,t){e.exports=t(98)},66:function(e,n,t){},69:function(e,n,t){},98:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(21),o=t.n(i),c=t(6),u=t(14),l=(t(66),t(4)),d=t(5),s=t(8),p=t(7),f=t(9),h=t(16),b=t(1),g=t(2),m=t(49),v=t.n(m);function x(){var e=Object(b.a)(["\n  background-color: white;\n  padding: 8px;\n  height: ",";\n  box-sizing: border-box;\n  border-radius: 5px;\n\n  & img {\n    height: 100%;\n  }\n"]);return x=function(){return e},e}var O=g.b.div(x(),(function(e){return e.height?e.height:"100%"})),E=function(e){return a.a.createElement(O,{height:e.height},a.a.createElement("img",{alt:"Burger",src:v.a}))};function y(){var e=Object(b.a)(["\n  margin: 10px 0;\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n\n  & a {\n    color: #8F5C2C;\n    text-decoration: none;\n    width: 100%;\n    box-sizing: border-box;\n    display: block;\n\n    &:hover,\n    &:active,\n    &.active{\n      color: #40A4C8;\n    }\n  }\n\n  @media (min-width: 500px) {\n    & {\n      margin: 0;\n      height: 100%;\n      display: flex;\n      width: auto;\n      align-items: center;\n\n      & a {\n        color: #fff;\n        height: 100%;\n        padding: 16px 10px;\n        border-bottom: 4px solid transparent;\n\n        &:hover,\n        &:active,\n        &.active {\n          color: #fff;\n          background-color: #8F5C2C;\n          border-bottom: 4px solid #40A4C8;\n        }\n      }\n    }\n  }\n"]);return y=function(){return e},e}var w=g.b.li(y()),k=function(e){return a.a.createElement(w,null,a.a.createElement(u.b,{to:e.link,exact:!0},e.children))};function j(){var e=Object(b.a)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  height: 100%;\n\n  @media (min-width: 500px) {\n    & {\n      flex-flow: row;\n    }\n  }\n"]);return j=function(){return e},e}var C=g.b.ul(j()),I=Object(c.b)((function(e){return{isLogin:null!==e.reducerLogin.token}}))((function(e){return a.a.createElement(C,null,e.isLogin?a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{link:"/"},"Burger Builder"),a.a.createElement(k,{link:"/orders"},"Orders"),a.a.createElement(k,{link:"/logout"},"Logout")):a.a.createElement(k,{link:"/login"},"Login"))}));function T(){var e=Object(b.a)(["\n  width: 40px;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-around;\n  align-items: center;\n  padding: 10px 0;\n  box-sizing: border-box;\n  cursor: pointer;\n\n  & div {\n    width: 90%;\n    height: 3px;\n    background-color: white;\n  }\n\n  @media (min-width: 500px) {\n    & { display: none }\n  }\n"]);return T=function(){return e},e}var D=g.b.div(T()),S=function(e){return a.a.createElement(D,{onClick:e.toggleDrawer},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))};function P(){var e=Object(b.a)(["\n  @media (max-width: 499px) {\n    & { display: none }\n  }\n"]);return P=function(){return e},e}function L(){var e=Object(b.a)(["\n  height: 56px;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: #703B09;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  box-sizing: border-box;\n  z-index: 90;\n\n  & nav { height: 100% }\n"]);return L=function(){return e},e}var H=g.b.header(L()),R=g.b.nav(P()),A=function(e){return a.a.createElement(H,null,a.a.createElement(S,{toggleDrawer:e.toggleDrawer}),a.a.createElement(E,{height:"80%"}),a.a.createElement(R,null,a.a.createElement(I,null)))};function N(){var e=Object(b.a)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 100;\n  background-color: rgba(0, 0, 0, 0.5);\n"]);return N=function(){return e},e}var F=g.b.div(N()),_=function(e){return e.show&&a.a.createElement(F,{onClick:function(){e.cancel()}})};function z(){var e=Object(b.a)(["\n  width: 200px;\n  max-width: 70%;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 200;\n  background-color: #fff;\n  padding: 32px 16px;\n  box-sizing: border-box;\n  transition: transform 0.3 ease-in-out;\n  transform: ",";\n\n  @media (min-width: 500px) {\n    & { display: none }\n  }\n "]);return z=function(){return e},e}var G=g.b.div(z(),(function(e){return e.open?"translateX(0)":"translateX(-100%)"})),B=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(_,{show:e.showSideDrawer,cancel:e.closeSideDrawer}),a.a.createElement(G,{open:e.showSideDrawer},a.a.createElement(E,{height:"8%"}),a.a.createElement("nav",null,a.a.createElement(I,null))))};function U(){var e=Object(b.a)(["\n  margin-top: 72px;\n"]);return U=function(){return e},e}var M=g.b.main(U()),q=function(e){function n(){var e,t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},t.sideDrawerOpenHandler=function(){t.setState({showSideDrawer:!0})},t.sideDrawerCloseHandler=function(){t.setState({showSideDrawer:!1})},t.sideDrawerToggleHandler=function(){t.state.showSideDrawer?t.sideDrawerCloseHandler():t.sideDrawerOpenHandler()},t}return Object(f.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(A,{toggleDrawer:this.sideDrawerToggleHandler}),a.a.createElement(B,{showSideDrawer:this.state.showSideDrawer,closeSideDrawer:this.sideDrawerCloseHandler}),a.a.createElement(M,null,this.props.children))}}]),n}(r.Component),Y=t(23);function J(){var e=Object(b.a)(["\n  width: 80%;\n  height: 3%;\n  background: linear-gradient(#bf3813, #c45e38);\n  margin: 2% auto;\n"]);return J=function(){return e},e}function W(){var e=Object(b.a)(["\n  width: 85%;\n  height: 7%;\n  margin: 2% auto;\n  background: linear-gradient(#228c1d, #91ce50);\n  border-radius: 20px;\n"]);return W=function(){return e},e}function X(){var e=Object(b.a)(["\n  width: 90%;\n  height: 4.5%;\n  margin: 2% auto;\n  background: linear-gradient(#f4d004, #d6bb22);\n  border-radius: 20px;\n"]);return X=function(){return e},e}function $(){var e=Object(b.a)(["\n  width: 80%;\n  height: 8%;\n  background: linear-gradient(#7f3608, #702e05);\n  margin: 2% auto;\n  border-radius: 15px;\n"]);return $=function(){return e},e}function K(){var e=Object(b.a)(['\n  left: 64%;\n  top: 50%;\n  transform: rotate(10deg);\n  box-shadow: inset -3px 0 #c9c9c9;\n\n  &:before {\n    content: "";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: white;\n    left: 150%;\n    top: -130%;\n    border-radius: 40%;\n    transform: rotate(90deg);\n    box-shadow: inset 1px 3px #c9c9c9;\n  }\n']);return K=function(){return e},e}function Z(){var e=Object(b.a)(['\n  left: 30%;\n  top: 50%;\n  transform: rotate(-20deg);\n  box-shadow: inset -2px -3px #c9c9c9;\n\n  &:after {\n    content: "";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: white;\n    left: -170%;\n    top: -260%;\n    border-radius: 40%;\n    transform: rotate(60deg);\n    box-shadow: inset -1px 2px #c9c9c9;\n  }\n\n  &:before {\n    content: "";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: white;\n    left: 180%;\n    top: -50%;\n    border-radius: 40%;\n    transform: rotate(60deg);\n    box-shadow: inset -1px -3px #c9c9c9;\n  }\n']);return Z=function(){return e},e}function Q(){var e=Object(b.a)(["\n  width: 10%;\n  height: 15%;\n  position: absolute;\n  background-color: white;\n  border-radius: 40%;\n"]);return Q=function(){return e},e}function V(){var e=Object(b.a)(["\n  height: 20%;\n  width: 80%;\n  background: linear-gradient(#bc581e, #e27b36);\n  border-radius: 50% 50% 0 0;\n  box-shadow: inset -15px 0 #c15711;\n  margin: 2% auto;\n  position: relative;\n"]);return V=function(){return e},e}function ee(){var e=Object(b.a)(["\n  height: 13%;\n  width: 80%;\n  background: linear-gradient(#F08E4A, #e27b36);\n  border-radius: 0 0 30px 30px;\n  box-shadow: inset -15px 0 #c15711;\n  margin: 2% auto;\n"]);return ee=function(){return e},e}var ne=g.b.div(ee()),te=g.b.div(V()),re=g.b.div(Q()),ae=Object(g.b)(re)(Z()),ie=Object(g.b)(re)(K()),oe=g.b.div($()),ce=g.b.div(X()),ue=g.b.div(W()),le=g.b.div(J()),de=function(e){var n=a.a.createElement(ne,null),t=a.a.createElement(te,null,a.a.createElement(ae,null),a.a.createElement(ie,null)),r=a.a.createElement(oe,null),i=a.a.createElement(ce,null),o=a.a.createElement(ue,null);return{bacon:a.a.createElement(le,null),breadBottom:n,breadTop:t,cheese:i,meat:r,salad:o}[e.type]};function se(){var e=Object(b.a)(["\n  font-size: initial;\n"]);return se=function(){return e},e}function pe(){var e=Object(b.a)(["\n  margin: auto;\n  width: 100%;\n  height: 250px;\n  overflow-y: auto;\n  text-align: center;\n  font-weight: bold;\n  font-size: 12rem;\n\n  @media (min-width: 500px) and (min-height: 400px) {\n    width: 350px;\n    height: 300px;\n  }\n\n  @media (min-width: 500px) and (min-height: 401px) {\n    width: 450px;\n    height: 400px;\n  }\n\n  @media (min-width: 1000px) and (min-height: 700px) {\n    width: 700px;\n    height: 600px;\n  }\n"]);return pe=function(){return e},e}var fe=g.b.div(pe()),he=g.b.p(se()),be=function(e){var n=Object.keys(e.ingredients).map((function(n){return Object(Y.a)(Array(e.ingredients[n])).map((function(e,t){return a.a.createElement(de,{type:n,key:n+t})}))})).reduce((function(e,n){return e.concat(n)}),[]);return a.a.createElement(fe,{className:"burger"},a.a.createElement(de,{type:"breadTop"}),0===n.length?a.a.createElement(he,null,"Please Start Adding Ingredients!"):n,a.a.createElement(de,{type:"breadBottom"}))};function ge(){var e=Object(b.a)(["\n  background-color: #8F5E1E;\n  &:hover, &:active { background-color: #99703F }\n"]);return ge=function(){return e},e}function me(){var e=Object(b.a)(["\n  background-color: #D39952;\n\n  &:hover, &:active { background-color: #DAA972 }\n"]);return me=function(){return e},e}function ve(){var e=Object(b.a)(["\n  cursor: pointer;\n  display: block;\n  font-family: inherit;\n  padding: 5px;\n  margin: 0 5px;\n  width: 80px;\n  border: 1px solid #AA6817;\n  outline: none;\n  color: white;\n\n  &:disabled {\n    background-color: #AC9980;\n    color: #ccc;\n    cursor: not-allowed;\n  }\n"]);return ve=function(){return e},e}function xe(){var e=Object(b.a)(["\n  padding: 10px;\n  font-weight: bold;\n  width: 80px;\n"]);return xe=function(){return e},e}function Oe(){var e=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 5px 0;\n"]);return Oe=function(){return e},e}var Ee=g.b.div(Oe()),ye=g.b.div(xe()),we=g.b.button(ve()),ke=Object(g.b)(we)(me()),je=Object(g.b)(we)(ge()),Ce=function(e){return a.a.createElement(Ee,null,a.a.createElement(ye,null,e.label),a.a.createElement(ke,{disabled:e.disabled,onClick:function(){e.decreaseIngredient(e.type)}},"Less"),a.a.createElement(je,{onClick:function(){e.increaseIngredient(e.type)}},"More"))};function Ie(){var e=Object(b.a)(["\n  background-color: #DAD735;\n  outline: none;\n  cursor: pointer;\n  border: 1px solid #966909;\n  color: #966909;\n  font-family: inherit;\n  font-size: 1.2em;\n  padding: 15px 30px;\n  box-shadow: 2px 2px 2px #966909;\n\n  &:hover, &:active {\n    background-color: #A0DB41;\n    border: 1px solid #966909;\n    color: #966909;\n  }\n\n  &:disabled {\n    background-color: #C7C6C6;\n    cursor: not-allowed;\n    border: 1px solid #ccc;\n    color: #888888;\n  }\n\n  &:not(:disabled) {\n    animation: enable 0.3s linear;\n  }\n\n  @keyframes enable {\n    0%   { transform: scale(1);   }\n    60%  { transform: scale(1.1); }\n    100% { transform: scale(1);   }\n  }\n"]);return Ie=function(){return e},e}var Te=g.b.button(Ie()),De=function(e){return a.a.createElement(Te,{onClick:function(){e.purchase()},disabled:e.disabled},"ORDER NOW")};function Se(){var e=Object(b.a)(["\n  width: 100%;\n  background-color: #CF8F2E;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 0 2px 1px #ccc;\n  margin: auto;\n  padding: 10px 0;\n"]);return Se=function(){return e},e}var Pe=g.b.div(Se()),Le=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],He=function(e){return a.a.createElement(Pe,null,a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.totalPrice)),Le.map((function(n){return a.a.createElement(Ce,{disabled:e.disabledIngredients.includes(n.type),key:n.label,label:n.label,type:n.type,increaseIngredient:e.increaseIngredient,decreaseIngredient:e.decreaseIngredient})})),a.a.createElement(De,{purchase:e.purchase,disabled:!1===e.purchasable}))};function Re(){var e=Object(b.a)(["\n  position: fixed;\n  z-index: 500;\n  background-color: white;\n  width: 70%;\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 1px black;\n  padding: 16px;\n  left: 15%;\n  top: 30%;\n  box-sizing: border-box;\n  transform: ",";\n  transition: all 0.3s ease-out;\n  opacity: ",";\n\n  @media (min-width: 600px) {\n    width: 500px;\n    left: calc(50% - 250px);\n  }\n"]);return Re=function(){return e},e}var Ae=g.b.div(Re(),(function(e){return e.show?"translateY(0)":"translateY(100vh)"}),(function(e){return e.show?1:0})),Ne=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(_,{cancel:e.cancelPurchase,show:e.show}),a.a.createElement(Ae,{show:e.show},e.children))};function Fe(){var e=Object(b.a)(["\n  color: #944317;\n"]);return Fe=function(){return e},e}function _e(){var e=Object(b.a)(["\n  color: #5C9210;\n"]);return _e=function(){return e},e}function ze(){var e=Object(b.a)(["\n  background-color: transparent;\n  border: none;\n  color: white;\n  outline: none;\n  cursor: pointer;\n  font: inherit;\n  padding: 10px;\n  margin: 10px;\n  font-weight: bold;\n\n  &:first-of-type {\n    margin-left: 0;\n    padding-left: 0;\n  }\n"]);return ze=function(){return e},e}var Ge=g.b.button(ze()),Be=Object(g.b)(Ge)(_e()),Ue=Object(g.b)(Ge)(Fe()),Me=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,Object.keys(e.ingredients).map((function(n){return a.a.createElement("li",{key:n},a.a.createElement("span",{style:{textTransform:"capitalize"}},n,":"),a.a.createElement("span",null,e.ingredients[n]))}))),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: ",e.totalPrice)),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(Ue,{onClick:function(){e.cancelPurchase()}},"CANCEL"),a.a.createElement(Be,{onClick:function(){e.continuePurchase()}},"CONTINUE"))},qe={salad:5,cheese:10,meat:20,bacon:5},Ye=function(e){function n(){var e,t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(a)))).state={purchasing:!1},t.increaseIngredientHandler=function(e){t.props.addIngredient(e),t.props.addPrice(qe[e])},t.decreaseIngredientHandler=function(e){t.props.substractIngredient(e),t.props.substractPrices(qe[e])},t.updatePurchasable=function(e){return e>0},t.purchaseHandler=function(){t.setState({purchasing:!0})},t.purchaseContinueHandler=function(){t.props.history.push("/checkout")},t.purchaseCancelHandler=function(){t.setState({purchasing:!1})},t}return Object(f.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.isLogin?(this.props.initIngredients(),this.props.initPrice()):this.props.history.replace("/login")}},{key:"render",value:function(){var e=this.props.ingredients,n=Object.keys(e).filter((function(n){return 0===e[n]}));return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ne,{cancelPurchase:this.purchaseCancelHandler,show:this.state.purchasing},a.a.createElement(Me,{totalPrice:this.props.price,cancelPurchase:this.purchaseCancelHandler,continuePurchase:this.purchaseContinueHandler,ingredients:this.props.ingredients})),a.a.createElement(be,{ingredients:this.props.ingredients}),a.a.createElement(He,{totalPrice:this.props.price,purchasable:this.updatePurchasable(this.props.price),disabledIngredients:n,increaseIngredient:this.increaseIngredientHandler,decreaseIngredient:this.decreaseIngredientHandler,purchase:this.purchaseHandler}))}}]),n}(r.Component),Je=Object(c.b)((function(e){return{ingredients:e.reducerIngredients.ingredients,price:e.reducerPrice.price,isLogin:null!==e.reducerLogin.token}}),(function(e){return{initIngredients:function(){return e({type:"INIT_INGREDIENTS"})},addIngredient:function(n){return e(function(e){return{type:"ADD_INGREDIENT",payload:e}}(n))},substractIngredient:function(n){return e(function(e){return{type:"SUBSTRACT_INGREDIENT",payload:e}}(n))},initPrice:function(){return e({type:"INIT_PRICE"})},addPrice:function(n){return e(function(e){return{type:"ADD_PRICE",payload:e}}(n))},substractPrices:function(n){return e(function(e){return{type:"SUBSTRACT_PRICE",payload:e}}(n))}}}))(Ye);function We(){var e=Object(b.a)(["\n  width: 100%;\n  height: 100%;\n  margin: auto;\n"]);return We=function(){return e},e}function Xe(){var e=Object(b.a)(["\n  text-align: center;\n  width: 80%;\n  margin: auto;\n\n  @media (min-width: 600px) {\n    width: 700px;\n  }\n"]);return Xe=function(){return e},e}var $e=g.b.div(Xe()),Ke=g.b.div(We()),Ze=function(e){return a.a.createElement($e,null,a.a.createElement("h1",null,"We Hope it tastes well!"),a.a.createElement(Ke,null,a.a.createElement(be,{ingredients:e.ingredients})),a.a.createElement(Ue,{onClick:function(){e.checkoutCancel()}},"CANCEL"),a.a.createElement(Be,{onClick:function(){e.checkoutContinue()}},"CONTINUE"))},Qe=t(3),Ve=t(12),en=t.n(Ve),nn=(t(69),function(){return a.a.createElement("div",{className:"Spinner"},"Loading...")}),tn=t(24);function rn(){var e=Object(b.a)(["\n  ","\n"]);return rn=function(){return e},e}function an(){var e=Object(b.a)(["\n  ","\n"]);return an=function(){return e},e}function on(){var e=Object(b.a)(["\n  ","\n"]);return on=function(){return e},e}function cn(){var e=Object(b.a)(["\n  width: 100%;\n  outline: none;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  font: inherit;\n  padding: 6px 10px;\n  box-sizing: border-box;\n\n  &:focus {\n    outline: none;\n    background-color: #ccc;\n  }\n"]);return cn=function(){return e},e}function un(){var e=Object(b.a)(["\n  font-weight: bold;\n  display: block;\n  margin-bottom: 8px;\n"]);return un=function(){return e},e}function ln(){var e=Object(b.a)(["\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n"]);return ln=function(){return e},e}var dn=g.b.div(ln()),sn=g.b.label(un()),pn=Object(g.a)(cn()),fn=g.b.input(on(),pn),hn=g.b.textarea(an(),pn),bn=g.b.select(rn(),pn),gn=function(e){return"textarea"===e.elementType?function(e){return a.a.createElement(hn,{value:e.value,placeholder:e.elementConfig.placeholder,onChange:function(n){return e.changeHandler(n,e.id)}})}(e):"select"===e.elementType?function(e){return a.a.createElement(bn,{value:e.value,onChange:function(n){return e.changeHandler(n,e.id)}},e.elementConfig.options.map((function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.display)})))}(e):function(e){return a.a.createElement(fn,{type:e.elementConfig.type,value:e.value,placeholder:e.elementConfig.placeholder,onChange:function(n){return e.changeHandler(n,e.id)}})}(e)},mn=function(e){return a.a.createElement(dn,null,a.a.createElement(sn,null,e.label),gn(e))};function vn(){var e=Object(b.a)([""]);return vn=function(){return e},e}var xn=g.b.div(vn()),On=function(e){return a.a.createElement(xn,null,a.a.createElement("h4",null,"Enter your Contact Data"),a.a.createElement("form",null,e.orderForm&&Object.entries(e.orderForm).map((function(n){var t=Object(tn.a)(n,2),r=t[0],i=t[1];return a.a.createElement(mn,{id:r,key:r,elementType:i.elementType,elementConfig:i.elementConfig,value:i.value,changeHandler:e.changeHandler})})),a.a.createElement(Be,{onClick:function(n){e.postOrder(n)}},"Order")))},En=t(15),yn=t.n(En),wn=function(e){return{type:"SET_ORDERS",payload:e}},kn=function(e){return{type:"SET_IS_LOADING",payload:e}},jn=function(e){return{type:"SET_IS_PURCHASED",payload:e}};function Cn(){var e=Object(b.a)(["\n  margin: 20px auto;\n  width: 80%;\n  text-align: center;\n  box-shadow: 0 2px 3px #CCC;\n  border: 1px solid #eee;\n  padding: 10px;\n  box-sizing: border-box;\n\n  @media (min-width: 600px) {\n    width: 500px;\n  }\n"]);return Cn=function(){return e},e}var In=g.b.div(Cn()),Tn=function(e){function n(){var e,t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(a)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:""},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Mail"},value:""},address:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Address"},value:""},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:""},delivery:{elementType:"select",elementConfig:{options:[{display:"Mail",value:"mail"},{display:"Express",value:"express"}]},value:""}}},t.getOrderInfo=function(){var e=t.props,n=e.ingredients,r=e.price,a=t.state.orderForm;return{ingredients:n,price:r,customer:{name:a.name.value,address:a.address.value,email:a.email.value,zipCode:a.zipCode.value,delivery:a.delivery.value}}},t.orderHandler=function(e){var n;return en.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:e.preventDefault(),n=t.getOrderInfo(),t.props.postOrder(n);case 3:case"end":return r.stop()}}))},t.formInputHandler=function(e,n){var r=Object(Qe.a)({},t.state.orderForm),a=Object(Qe.a)({},r[n]),i=e.target.value;r[n]=Object(Qe.a)({},a),r[n].value=i,t.setState({orderForm:r})},t}return Object(f.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement(In,null,this.props.isLoading?a.a.createElement(nn,null):a.a.createElement(On,{orderForm:this.state.orderForm,postOrder:this.orderHandler,changeHandler:this.formInputHandler}))}}]),n}(r.Component),Dn=Object(c.b)((function(e){return{isLoading:e.reducerOrders.isLoading}}),(function(e){return{postOrder:function(n){return e(function(e){return function(n){return en.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return n(kn(!0)),n(jn(!1)),t.next=4,en.a.awrap((r=e,yn.a.post("/order",r)).then((function(){n(jn(!0))})).catch((function(e){return console.log(e)})));case 4:n(kn(!1));case 5:case"end":return t.stop()}var r}))}}(n))}}}))(Tn);function Sn(){var e=Object(b.a)(["\n"]);return Sn=function(){return e},e}var Pn=g.b.div(Sn()),Ln=function(e){function n(){var e,t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(a)))).checkoutCanceledHandler=function(){t.props.history.goBack()},t.checkoutContinuedHandler=function(){t.props.history.replace("./checkout/contact-data")},t.isRedirectRequired=function(){return Object.values(t.props.ingredients).every((function(e){return 0===e}))||t.props.isPurchased},t}return Object(f.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){var e=this;return this.isRedirectRequired()?a.a.createElement(h.a,{to:"/"}):a.a.createElement(Pn,null,a.a.createElement(Ze,{checkoutContinue:this.checkoutContinuedHandler,checkoutCancel:this.checkoutCanceledHandler,ingredients:this.props.ingredients}),a.a.createElement(h.b,{path:"/checkout/contact-data",render:function(n){return a.a.createElement(Dn,Object.assign({},n,{ingredients:e.props.ingredients,price:e.props.price}))}}))}}]),n}(r.Component),Hn=Object(c.b)((function(e){return{ingredients:e.reducerIngredients.ingredients,price:e.reducerPrice.price,isPurchased:e.reducerOrders.isPurchased}}),null)(Ln);function Rn(){var e=Object(b.a)(["\n  display: inline-block;\n  text-transform: capitalize;\n  margin: 0 8px;\n  border: 1px solid #ccdc;\n  padding: 5px;\n"]);return Rn=function(){return e},e}function An(){var e=Object(b.a)(["\n  width: 80%;\n  border: 1px solid #eee;\n  box-shadow: 0 2px 3px #ccc;\n  padding: 10px;\n  margin: 10px auto;\n  box-sizing: border-box;\n"]);return An=function(){return e},e}var Nn=g.b.div(An()),Fn=g.b.span(Rn()),_n=function(e){return a.a.createElement(Nn,null,e.ingredients&&a.a.createElement("p",null,"Ingredients:",Object.keys(e.ingredients).filter((function(n){return e.ingredients[n]})).map((function(n){return a.a.createElement(Fn,{key:n},"".concat(n," (").concat(e.ingredients[n],")"))}))),a.a.createElement("p",null,"Price:",a.a.createElement("strong",null,e.price)))},zn=function(e){function n(){return Object(l.a)(this,n),Object(s.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){return en.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.fetchOrders();case 1:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){var e=this.props.orders&&this.props.orders.map((function(e){return a.a.createElement(_n,Object.assign({},e,{key:e.orderId}))}));return a.a.createElement("div",null,this.props.isLoading?a.a.createElement(nn,null):e)}}]),n}(r.Component),Gn=Object(c.b)((function(e){return{orders:e.reducerOrders.orders,isLoading:e.reducerOrders.isLoading}}),(function(e){return{fetchOrders:function(){return e((function(e){return en.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e(kn(!0)),n.next=3,en.a.awrap(yn.a.get("/order").then((function(e){return e.data})).then((function(n){e(wn(n))})).catch((function(e){return console.log(e)})));case 3:e(kn(!1));case 4:case"end":return n.stop()}}))}))}}}))(zn),Bn=t(22),Un=function(e){return yn.a.post("/login",e)},Mn=function(e,n){var t=new Date(Date.now()+6e5).toUTCString();document.cookie="".concat(e,"=").concat(n,";expires=").concat(t)},qn=function(e){var n=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return n?n[2]:null},Yn=function(e){document.cookie="".concat(e,"=; expires=Thu, 01 Jan 1970 00:00:01 GMT")},Jn=function(e){return{type:"LOGIN_SUCCESS",payload:e}};function Wn(){var e=Object(b.a)(["\n  margin: 20px auto;\n  width: 80%;\n  text-align: center;\n  box-shadow: 0 2px 3px #CCC;\n  border: 1px solid #eee;\n  padding: 10px;\n  box-sizing: border-box;\n\n  @media (min-width: 600px) {\n    width: 500px;\n  }\n"]);return Wn=function(){return e},e}var Xn=g.b.div(Wn()),$n=function(e){function n(){var e,t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(a)))).state={loginForm:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Mail"},value:""},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Your Password"},value:""}}},t.formInputHandler=function(e,n){var r=Object(Qe.a)({},t.state.loginForm,Object(Bn.a)({},n,Object(Qe.a)({},t.state.loginForm[n],{value:e.target.value})));t.setState({loginForm:r})},t.loginHandler=function(e){e.preventDefault(),t.props.login()},t}return Object(f.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){var e=this,n=Object.entries(this.state.loginForm).map((function(n){var t=Object(tn.a)(n,2),r=t[0],i=t[1];return a.a.createElement(mn,{id:r,key:r,elementType:i.elementType,elementConfig:i.elementConfig,value:i.value,changeHandler:e.formInputHandler})}));return this.props.isLoading?a.a.createElement(nn,null):a.a.createElement(Xn,null,a.a.createElement("form",{onSubmit:function(n){return e.loginHandler(n)}},this.props.isLogin?a.a.createElement(h.a,{to:"/"}):n,a.a.createElement(Be,null,"Login")))}}]),n}(r.Component),Kn=Object(c.b)((function(e){return{isLoading:e.reducerLogin.isLoading,isLogin:null!==e.reducerLogin.token}}),(function(e){return{login:function(n){return e(function(e){return function(n){return en.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"LOGIN_START"}),t.next=3,en.a.awrap(Un(e).then((function(e){return e.data})).then((function(e){Mn("burgerId",e.id),Mn("burgerToken",e.token),n(Jn(e))})).catch((function(e){return console.log(e)})));case 3:case"end":return t.stop()}}))}}(n))}}}))($n),Zn=function(e){function n(){return Object(l.a)(this,n),Object(s.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.logout()}},{key:"render",value:function(){return a.a.createElement(h.a,{to:"/login"})}}]),n}(r.Component),Qn=Object(c.b)(null,(function(e){return{logout:function(){return e((function(e){Yn("burgerId"),Yn("burgerToken"),e({type:"LOGOUT"})}))}}}))(Zn),Vn=function(e){function n(){return Object(l.a)(this,n),Object(s.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.checkToken()}},{key:"render",value:function(){var e=this.props.isLogin?a.a.createElement(a.a.Fragment,null,a.a.createElement(h.b,{path:"/",exact:!0,component:Je}),a.a.createElement(h.b,{path:"/checkout",component:Hn}),a.a.createElement(h.b,{path:"/orders",component:Gn}),a.a.createElement(h.b,{path:"/logout",component:Qn}),a.a.createElement(h.a,{to:"/"})):a.a.createElement(a.a.Fragment,null,a.a.createElement(h.b,{path:"/login",component:Kn}),a.a.createElement(h.a,{to:"/login"}));return a.a.createElement(q,null,a.a.createElement(h.d,null,e))}}]),n}(r.Component),et=Object(c.b)((function(e){return{isLogin:null!==e.reducerLogin.token}}),(function(e){return{checkToken:function(){return e((function(e){var n=qn("burgerId"),t=qn("burgerToken");t&&n&&e(Jn({id:n,token:t}))}))}}}))(Vn);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var nt=t(54),tt=t.n(nt),rt=[{orderId:1,ingredients:{salad:1,bacon:1,cheese:1,meat:1},customer:{name:"OTree",address:"address1",email:"kevin10410@gmail.com",zipCode:"132",delivery:"mail"},price:5.8},{orderId:2,ingredients:{salad:1,bacon:2,cheese:2,meat:1},customer:{name:"Kevin",address:"address2",email:"kevin10410@gmail.com",zipCode:"123",delivery:"express"},price:4},{orderId:3,ingredients:{salad:0,bacon:1,cheese:1,meat:1},customer:{name:"OTree",address:"address3",email:"kevin10410@gmail.com",zipCode:"231",delivery:"express"},price:2.4}],at=function(){function e(){Object(l.a)(this,e),this.mock=new tt.a(yn.a,{delayResponse:500})}return Object(d.a)(e,[{key:"init",value:function(){console.log("init AxiosMocker"),this.mockGetRequest(),this.mockPostRequest(),this.mockUpdateRequest(),this.mockDeleteRequest()}},{key:"mockGetRequest",value:function(){this.mockGetOrders()}},{key:"mockPostRequest",value:function(){this.mockPostOrder(),this.mockPostLogin()}},{key:"mockUpdateRequest",value:function(){}},{key:"mockDeleteRequest",value:function(){}},{key:"mockGetOrders",value:function(){this.mock.onGet("/order").reply(200,rt)}},{key:"mockPostOrder",value:function(){this.mock.onPost("/order").reply((function(e){var n=e.data;return rt.push(Object(Qe.a)({},JSON.parse(n),{orderId:rt.length+1})),[200]}))}},{key:"mockPostLogin",value:function(){this.mock.onPost("/login").reply(200,{token:"react_burger_token",id:1})}}]),e}(),it=t(19),ot=t(32),ct=(t(55),{ingredients:{salad:0,bacon:0,cheese:0,meat:0}}),ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload,a={ingredients:Object(Qe.a)({},e.ingredients)};switch(t){case"INIT_INGREDIENTS":return ct;case"ADD_INGREDIENT":return a.ingredients[r]+=1,a;case"SUBSTRACT_INGREDIENT":return a.ingredients[r]=a.ingredients[r]>0?a.ingredients[r]-=1:0,a;default:return a}},lt={price:0},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload,a=Object(Qe.a)({},e);switch(t){case"INIT_PRICE":return lt;case"ADD_PRICE":return a.price+=r,a;case"SUBSTRACT_PRICE":return a.price=a.price-r>0?a.price-r:0,a;default:return a}},st={orders:[],isLoading:!1,isPurchased:!1},pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case"SET_ORDERS":return Object(Qe.a)({},e,{orders:Object(Y.a)(r)});case"SET_IS_LOADING":return Object(Qe.a)({},e,{isLoading:r});case"SET_IS_PURCHASED":return Object(Qe.a)({},e,{isPurchased:r});default:return e}},ft={token:null,userId:null,isLoading:!1},ht=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case"LOGOUT":return ft;case"LOGIN_START":return Object(Qe.a)({},e,{isLoading:!0});case"LOGIN_SUCCESS":return Object(Qe.a)({},e,{token:r.token,userId:r.id,isLoading:!1});default:return e}},bt=Object(it.c)({reducerIngredients:ut,reducerPrice:dt,reducerOrders:pt,reducerLogin:ht}),gt=[ot.a],mt=Object(it.d)(bt,it.a.apply(void 0,gt));(new at).init();var vt=a.a.createElement(c.a,{store:mt},a.a.createElement(u.a,null,a.a.createElement(et,null)));o.a.render(vt,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.e2416ca9.chunk.js.map