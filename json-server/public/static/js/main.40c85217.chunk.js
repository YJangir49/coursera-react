(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(15),s=a.n(l),c=(a(101),a(102),a(103),a(104),a(16)),o=a(17),m=a(20),i=a(18),u=a(19),d=a(2),E=a(6),h=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},f="http://localhost:3001/";function p(e){var t=e.dish;e.onClick;return r.a.createElement(d.d,null,r.a.createElement(E.b,{to:"/menu/".concat(t.id)},r.a.createElement(d.g,{width:"100%",src:f+t.image,alt:t.name}),">",r.a.createElement(d.h,null,r.a.createElement(d.k,null,t.name))))}var g=function(e){var t=e.dishes.dishes.map(function(t){return r.a.createElement("div",{key:t.id,className:"col-12 col-md-5 m-1"},r.a.createElement(p,{dish:t,onClick:e.onClick}))});return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(h,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.dishes.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(E.b,{to:"/home"},"Home")),r.a.createElement(d.b,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},t))},b=a(8),N=a(24),v=function(e){return function(t){return!t||t.length<=e}},y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).handleSubmit=function(e){a.props.postComment(a.props.dishId,e.rating,e.author,e.comment)},a.toggleModal=function(){a.setState({isModalOpen:!a.state.isModalOpen})},a.state={isModalOpen:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t=this;return r.a.createElement("div",null,r.a.createElement(d.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil"})," Submit Comment"),r.a.createElement(d.t,{isOpen:this.state.isModalOpen},r.a.createElement(d.v,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(d.u,null,r.a.createElement(b.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)}},r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"rating"},"Rating"),r.a.createElement(d.l,{md:12},r.a.createElement(b.Control.select,{model:".rating",id:"rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"),r.a.createElement("option",null,"6")))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"author"},"Your Name"),r.a.createElement(d.l,{md:12},r.a.createElement(b.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{minLength:(e=2,function(t){return t&&t.length>=e}),maxLength:v(15)}}),r.a.createElement(b.Errors,{className:"text-danger",model:".author",show:"touched",messages:{minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"comment"},"Comment"),r.a.createElement(d.l,{md:12},r.a.createElement(b.Control.textarea,{model:".comment",name:"comment",rows:"6",className:"form-control"}))),r.a.createElement(d.c,{className:"mt-3",type:"submit",value:"submit",color:"primary"},"Submit")))))}}]),t}(n.Component);function w(e){var t=e.dish;return null!=t?r.a.createElement(N.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.d,null,r.a.createElement(d.g,{width:"100%",src:f+t.image,alt:t.name}),r.a.createElement(d.e,null,r.a.createElement(d.k,null,t.name),r.a.createElement(d.j,null,t.description)))):r.a.createElement("div",null)}function O(e){var t=e.comments,a=e.postComment,n=e.dishId;return null!=t?r.a.createElement("div",{className:"text-left"},r.a.createElement("h4",null,"Comments"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(N.Stagger,{in:!0},t.map(function(e){return r.a.createElement(N.Fade,{in:!0},r.a.createElement("div",{key:e.id},r.a.createElement("li",null,r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"-- ",e.author,", ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))))))}))),r.a.createElement(d.B,null,r.a.createElement(y,{dishId:n,postComment:a}))):r.a.createElement("div",null)}var M=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(h,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(E.b,{to:"/menu"},"Menu")),r.a.createElement(d.b,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(w,{dish:e.dish})),r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(O,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id}))))):r.a.createElement("div",null)},k=a(34),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={isNavOpen:!1,isModalOpen:!1},a.toggleNav=a.toggleNav.bind(Object(k.a)(a)),a.toggleModal=a.toggleModal.bind(Object(k.a)(a)),a.handleLogin=a.handleLogin.bind(Object(k.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.y,{expand:"md",dark:!0},r.a.createElement("div",{className:"container"},r.a.createElement(d.A,{onClick:this.toggleNav}),r.a.createElement(d.z,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",width:"41",height:"30",alt:"Restorante Con Fusion"})),r.a.createElement(d.m,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(d.w,{navbar:!0},r.a.createElement(d.x,null,r.a.createElement(E.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"}," Home ")," ")),r.a.createElement(d.x,null,r.a.createElement(E.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"}," Menu"))),r.a.createElement(d.x,null,r.a.createElement(E.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"}," About Us"))),r.a.createElement(d.x,null,r.a.createElement(E.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"}," Contact Us")))),r.a.createElement(d.w,{className:"ml-auto",navbar:!0},r.a.createElement(d.x,null,r.a.createElement(d.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),r.a.createElement(d.q,null,r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante Con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!")))),r.a.createElement(d.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(d.v,{toggle:this.toggleModal},"Login"),r.a.createElement(d.u,null,r.a.createElement(d.n,{onSubmit:this.handleLogin},r.a.createElement(d.o,null,r.a.createElement(d.r,{htmlFor:"username"},"Username"),r.a.createElement(d.p,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})),r.a.createElement(d.o,null,r.a.createElement(d.r,{htmlFor:"password"},"Password"),r.a.createElement(d.p,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})),r.a.createElement(d.o,{check:!0},r.a.createElement(d.r,{check:!0},r.a.createElement(d.p,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me")),r.a.createElement(d.c,{className:"mt-3",type:"submit",value:"submit",color:"primary"},"Login")))))}}]),t}(r.a.Component);var C=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(E.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},j=function(e){var t=e.item,a=e.isLoading,n=e.errmess;return a?r.a.createElement(h,null):n?r.a.createElement("h4",null,n):r.a.createElement(N.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.d,null,r.a.createElement(d.g,{src:f+t.image,alt:t.name}),r.a.createElement(d.e,null,r.a.createElement(d.k,null,t.name),t.designation?r.a.createElement(d.i,null,t.designation):null,r.a.createElement(d.j,null,t.description))))},S=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(j,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(j,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(j,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leadersErrMess}))))};function D(e){var t=e.leader;return r.a.createElement("div",{key:t.id,className:"col-12 mt-5"},r.a.createElement(d.s,{tag:"li"},r.a.createElement(d.s,{left:!0,top:!0},r.a.createElement(d.s,{object:!0,src:f+t.image,alt:t.name})),r.a.createElement(d.s,{body:!0,className:"ml-5"},r.a.createElement(d.s,{heading:!0},t.name),r.a.createElement("p",null,t.designation),r.a.createElement("p",null,t.description))))}var F=function(e){var t=e.leaders.leaders.map(function(e){return r.a.createElement(N.Fade,{in:!0},r.a.createElement(D,{leader:e}))});return e.leaders.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(h,null))):e.leaders.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.leaders.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(E.b,{to:"/home"},"Home")),r.a.createElement(d.b,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(d.d,null,r.a.createElement(d.f,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(d.e,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(d.d,null,r.a.createElement(d.e,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(d.s,{list:!0},r.a.createElement(N.Stagger,{in:!0},t)))))},x=function(e){return e&&e.length},A=function(e){return function(t){return!t||t.length<=e}},I=function(e){return function(t){return t&&t.length>=e}},T=function(e){return!isNaN(Number(e))},R=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},_=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.agree,e.contactType,e.message),console.log(e),alert("Thanks for your feedback :"+JSON.stringify(e)),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(E.b,{to:"/home"},"Home")),r.a.createElement(d.b,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:"www.google.com"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us Your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(b.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(d.l,{md:10},r.a.createElement(b.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:x,minLength:I(3),maxLength:A(15)}}),r.a.createElement(b.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(d.l,{md:10},r.a.createElement(b.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:x,minLength:I(3),maxLength:A(15)}}),r.a.createElement(b.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(d.l,{md:10},r.a.createElement(b.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Contact Tel. Number",className:"form-control",validators:{required:x,minLength:I(3),maxLength:A(15),isNumber:T}}),r.a.createElement(b.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less",isNumber:"Must be number"}}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"email",md:2},"Email"),r.a.createElement(d.l,{md:10},r.a.createElement(b.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:x,validEmail:R}}),r.a.createElement(b.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Must be valid Email-address"}}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.l,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(d.r,{check:!0},r.a.createElement(b.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(d.l,{md:{size:3,offset:1}},r.a.createElement(b.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel. Num"),r.a.createElement("option",null,"Email")))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(d.l,{md:10},r.a.createElement(b.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.l,{md:{size:10,offset:2}},r.a.createElement(d.c,{type:"submit",color:"primary"}," Send Feedback")))))))}}]),t}(n.Component),P=a(22),B=function(){return{type:"DISHES_LOADING"}},q=function(e){return{type:"DISHES_FAILED",payload:e}},H=function(e){return{type:"ADD_DISHES",payload:e}},G=function(){return{type:"PROMOS_LOADING"}},Y=function(e){return{type:"PROMOS_FAILED",payload:e}},U=function(e){return{type:"ADD_PROMOS",payload:e}},W=function(e){return{type:"COMMENTS_FAILED",payload:e}},K=function(e){return{type:"ADD_COMMENTS",payload:e}},z=function(){return{type:"LEADERS_LOADING"}},J=function(e){return{type:"ADD_LEADERS",payload:e}},Z=a(54),$=function(e){function t(e){var a;return Object(c.a)(this,t),a=Object(m.a)(this,Object(i.a)(t).call(this,e)),console.log(e),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(L,null),r.a.createElement(Z.TransitionGroup,null,r.a.createElement(Z.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(E.f,null,r.a.createElement(E.e,{path:"/home",component:function(){return r.a.createElement(S,{dish:e.props.dishes.dishes.filter(function(e){return e.featured})[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errmess,promotion:e.props.promotions.promotions.filter(function(e){return e.featured})[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter(function(e){return e.featured})[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),r.a.createElement(E.e,{exact:!0,path:"/menu",component:function(){return r.a.createElement(g,{dishes:e.props.dishes})}}),r.a.createElement(E.e,{path:"/menu/:dishId",component:function(t){var a=t.match;return r.a.createElement(M,{dish:e.props.dishes.dishes.filter(function(e){return e.id===parseInt(a.params.dishId,10)})[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errmess,comments:e.props.comments.comments.filter(function(e){return e.dishId===parseInt(a.params.dishId,10)}),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(E.e,{path:"/aboutus",component:function(){return r.a.createElement(F,{leaders:e.props.leaders})}}),r.a.createElement(E.e,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(_,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(E.d,{to:"/home"})))),r.a.createElement(C,null))}}]),t}(n.Component),Q=Object(E.g)(Object(P.connect)(function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}},function(e){return{postComment:function(t,a,n,r){return e(function(e,t,a,n){return function(r){var l={dishId:e,rating:t,author:a,comment:n};return l.date=(new Date).toISOString(),fetch(f+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){if(e.ok)return e;var t=new Error("ERROR"+e.status+":"+e.statusText);throw t.response=e,t},function(e){throw e}).then(function(e){return e.json()}).then(function(e){return r({type:"ADD_COMMENT",payload:e})}).catch(function(e){console.log("Post Comments",e.message),alert("Your comment could not be posted\nError: "+e.message)})}}(t,a,n,r))},postFeedback:function(t,a,n,r,l,s,c){return e(function(e,t,a,n,r,l,s){return function(c){var o={firstname:e,lastname:t,telnum:a,email:n,agree:r,contactType:l,message:s};return o.date=(new Date).toISOString(),fetch(f+"feedback",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){if(e.ok)return e;var t=new Error("ERROR"+e.status+":"+e.statusText);throw t.response=e,t},function(e){throw e}).then(function(e){return e.json()}).then(function(e){return c({type:"ADD_FEEDBACK",payload:e})}).catch(function(e){console.log("Post Comments",e.message),alert("Your comment could not be posted\nError: "+e.message)})}}(t,a,n,r,l,s,c))},fetchDishes:function(){e(function(e){return e(B),fetch(f+"dishes").then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(H(t))}).catch(function(t){return e(q(t))})})},resetFeedbackForm:function(){e(b.actions.reset("feedback"))},fetchComments:function(){e(function(e){return fetch(f+"comments").then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(K(t))}).catch(function(t){return e(W(t))})})},fetchPromos:function(){e(function(e){return e(G()),fetch(f+"promotions").then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(U(t))}).catch(function(t){return e(Y(t))})})},fetchLeaders:function(){e(function(e){return e(z()),fetch(f+"leaders").then(function(e){return e.json()}).then(function(t){return e(J(t))})})}}})($)),V=(a(172),a(10)),X=a(23),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errmess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DISHES":return Object(V.a)({},e,{isLoading:!1,errmess:null,dishes:t.payload});case"DISHES_LOADING":return Object(V.a)({},e,{isLoading:!0,errmess:null,dishes:[]});case"DISHES_FAILED":return Object(V.a)({},e,{isLoading:!1,errmess:t.payload});default:return e}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return Object(V.a)({},e,{errMess:null,comments:t.payload});case"COMMENTS_FAILED":return Object(V.a)({},e,{errMess:t.payload});case"ADD_COMMENT":var a=t.payload;return Object(V.a)({},e,{comments:e.comments.concat(a)});default:return e}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROMOS_LOADING":return Object(V.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"ADD_PROMOS":return Object(V.a)({},e,{isLoading:!1,errMess:null,promotions:t.payload});case"PROMOS_FAILED":return Object(V.a)({},e,{isLoading:!1,errMess:t.payload,promotions:[]});default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LEADERS":return Object(V.a)({},e,{isLoading:!1,errMess:null,leaders:t.payload});case"LEADERS_LOADING":return Object(V.a)({},e,{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(V.a)({},e,{isLoading:!1,errMess:t.payload,leaders:[]});default:return e}},re=a(94),le=a.n(re),se=a(95),ce=a.n(se),oe={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},me=Object(X.createStore)(Object(X.combineReducers)(Object(V.a)({dishes:ee,comments:te,promotions:ae,leaders:ne},Object(b.createForms)({feedback:oe}))),Object(X.applyMiddleware)(le.a,ce.a)),ie=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(P.Provider,{store:me},r.a.createElement(E.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(Q,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},96:function(e,t,a){e.exports=a(173)}},[[96,1,2]]]);
//# sourceMappingURL=main.40c85217.chunk.js.map