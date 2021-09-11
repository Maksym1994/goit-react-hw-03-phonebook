(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={title:"App_title__Z0VmM"}},18:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__2XKmX",input:"ContactForm_input__1fEo6",labelTitle:"ContactForm_labelTitle__2qzJw",button:"ContactForm_button__sDZAl"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(11),r=n.n(i),s=(n(18),n(13)),o=n(4),l=n(5),u=n(7),m=n(6),b=n(12),h=n(2),d=n.n(h),j=n(0),f=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:d.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("h2",{className:d.a.labelTitle,children:"Name"}),Object(j.jsx)("input",{className:d.a.input,value:this.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("h2",{className:d.a.labelTitle,children:"Number"}),Object(j.jsx)("input",{className:d.a.input,value:this.state.number,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange})]}),Object(j.jsx)("button",{className:d.a.button,type:"submit",children:"Add to contacts"})]})}}]),n}(a.Component),p=n(3),O=n.n(p),C=function(t){var e=t.contacts,n=t.onDeleteContacts;return Object(j.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:O.a.contactItem,children:[Object(j.jsxs)("p",{className:O.a.itemName,children:["Name: ",a]}),Object(j.jsxs)("p",{className:O.a.itemName,children:["Number: ",c]}),Object(j.jsx)("button",{className:O.a.deleteBtn,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},x=n(9),_=n.n(x),g=function(t){var e=t.filter,n=t.onChange;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{className:_.a.titleFilter,children:"Find contacts by name"}),Object(j.jsx)("input",{className:_.a.inputFilter,type:"text",value:e,onChange:n})]})},v=n(22),N=n(10),F=n.n(N),y=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleSubmit=function(e){if(t.state.contacts.some((function(t){return t.name===e.name})))alert("".concat(e.name," is already in contacts."));else{var n={name:e.name,number:e.number,id:Object(v.a)()};t.setState((function(t){return{contacts:[n].concat(Object(s.a)(t.contacts))}}))}},t.handleDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=t.filter,c=t.contacts,i=this.handleSubmit,r=this.handleChange,s=this.handleDeleteContact,o=this.getFilteredContacts,l=this.changeFilter;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:F.a.title,children:"Phonebook"}),Object(j.jsx)(f,{onSubmit:i,name:e,number:n,onChange:r}),c.length>1&&Object(j.jsx)(g,{filter:a,onChange:l}),Object(j.jsx)("h2",{className:F.a.title,children:"Contacts"}),Object(j.jsx)(C,{contacts:o(),onDeleteContacts:s})]})}}]),n}(a.Component);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={itemText:"ContactList_itemText__1xne4",contactItem:"ContactList_contactItem__3pGOG",itemName:"ContactList_itemName__2l-uG",deleteBtn:"ContactList_deleteBtn__2AX3o"}},9:function(t,e,n){t.exports={titleFilter:"Filter_titleFilter__1DQUk",inputFilter:"Filter_inputFilter__QRDhO"}}},[[20,1,2]]]);
//# sourceMappingURL=main.22a4cdd1.chunk.js.map