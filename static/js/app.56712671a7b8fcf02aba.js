webpackJsonp([1],{"0wcA":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("v-app",[a("v-navigation-drawer",{attrs:{dark:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-tile",{attrs:{to:"/"}},[a("v-list-tile-action",[a("v-icon",[e._v("home")])],1),e._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[e._v("Inicio")])],1)],1),e._v(" "),a("v-list-tile",{attrs:{to:"/login"}},[a("v-list-tile-action",[a("v-icon",[e._v("account_box")])],1),e._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[e._v("Iniciar sesión")])],1)],1),e._v(" "),a("v-list-tile",{attrs:{to:"/users"}},[a("v-list-tile-action",[a("v-icon",[e._v("contact_mail")])],1),e._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[e._v("Usuarios")])],1)],1)],1)],1),e._v(" "),a("v-toolbar",{staticClass:"elevation-2",attrs:{color:"primary",dark:"",fixed:"",app:""}},[a("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),e._v(" "),a("v-toolbar-title",[e._v("E-learning app")])],1),e._v(" "),a("v-content",[a("v-container",{staticClass:"grey lighten-4",attrs:{fluid:"","fill-height":""}},[a("router-view")],1)],1),e._v(" "),a("v-footer",{attrs:{color:"primary",app:"",inset:""}},[a("span",{staticClass:"white--text"},[e._v("© 2017")])])],1)],1)},staticRenderFns:[]};var s=a("VU/8")({name:"App",data:function(){return{drawer:!1}}},r,!1,function(e){a("vQhg")},null,null).exports,n=a("//Fk"),o=a.n(n),l=a("/ocq"),d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"grey lighten-3",staticStyle:{"max-width":"600px",margin:"auto"},attrs:{id:"e3"}},[t("v-layout",{attrs:{"align-center":"","justify-center":""}},[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{xs12:""}},[t("v-card",{staticClass:"white--text",attrs:{color:"purple"}},[t("v-card-title",{attrs:{"primary-title":""}},[t("div",{staticClass:"headline"},[this._v("Bienvenidos a E-learning app")]),this._v(" "),t("div",[this._v("Esta es una aplicación de prueba de CRUD, para realizarla, haz clic en iniciar sesión y posteriormente acude al módulo usuarios para efectuar las acciones CRUD.")])]),this._v(" "),t("v-card-actions",[t("v-btn",{attrs:{flat:"",dark:"",to:"/login"}},[this._v("Inicia sesión")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")({name:"Home"},d,!1,function(e){a("0wcA")},"data-v-507815df",null).exports,v={name:"login",data:function(){return{form:{email:"",password:""},formRules:{email:"required|email|max:50",password:"required"}}},methods:{authenticate:function(){var e=this;this.$validator.validateAll().then(function(t){if(t)return e.sendRequest(),!1}).catch(function(){})},sendRequest:function(){var e=this;this.$axios({method:"post",url:"/authenticate",data:this.form}).then(function(t){e.$cookie.set("authToken",t.data.token,{expires:"2h"}),window.alert("Autentificado")})}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[a("v-card",{staticClass:"elevation-2"},[a("v-toolbar",{staticClass:"elevation-0",attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[e._v("Iniciar sesión")])],1),e._v(" "),a("v-card-text",[a("form",[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:e.formRules.email,expression:"formRules.email"}],attrs:{"prepend-icon":"person","data-vv-name":"email","error-messages":e.errors.collect("email"),label:"Email",type:"text",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:e.formRules.password,expression:"formRules.password"}],attrs:{"prepend-icon":"lock","data-vv-name":"contraseña","error-messages":e.errors.collect("contraseña"),label:"Contraseña",type:"password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)]),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"primary"},on:{click:e.authenticate}},[e._v("Aceptar")])],1)],1)],1)],1)},staticRenderFns:[]};var m=a("VU/8")(v,u,!1,function(e){a("b1Wk")},"data-v-1ae68b86",null).exports,p=a("woOf"),f=a.n(p),_=a("rhbk"),h={name:"add-form",props:{data:{required:!0,type:Object}},data:function(){return{genderList:[{value:"F",text:"Femenino"},{value:"M",text:"Masculino"}]}}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"mr-3":""}},[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-name":"nombre","error-messages":e.errors.collect("name"),counter:40,label:"Nombre",placeholder:"Nombre Apellidos",box:"",required:""},model:{value:e.data.name,callback:function(t){e.$set(e.data,"name",t)},expression:"data.name"}})],1),e._v(" "),a("v-flex",[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{"error-messages":e.errors.collect("email"),label:"Email",placeholder:"hola@ejemplo.com","data-vv-name":"email",required:"",box:""},model:{value:e.data.email,callback:function(t){e.$set(e.data,"email",t)},expression:"data.email"}})],1)],1),e._v(" "),a("v-layout",[a("v-flex",{attrs:{"mr-3":""}},[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":e.errors.collect("phone"),label:"Teléfono",placeholder:"1235213","data-vv-name":"telefono",required:"",box:""},model:{value:e.data.phone,callback:function(t){e.$set(e.data,"phone",t)},expression:"data.phone"}})],1),e._v(" "),a("v-flex",[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":e.errors.collect("mobile_phone"),label:"Teléfono celular",placeholder:"1235213","data-vv-name":"celular",required:"",box:""},model:{value:e.data.mobile_phone,callback:function(t){e.$set(e.data,"mobile_phone",t)},expression:"data.mobile_phone"}})],1)],1),e._v(" "),a("v-layout",[a("v-flex",{attrs:{"mr-3":""}},[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"digits:4",expression:"'digits:4'"}],attrs:{"error-messages":e.errors.collect("año"),label:"Año de nacimiento",placeholder:"1990","data-vv-name":"año",box:"",required:""},model:{value:e.data.year_of_birth,callback:function(t){e.$set(e.data,"year_of_birth",t)},expression:"data.year_of_birth"}})],1),e._v(" "),a("v-flex",[a("v-text-field",{attrs:{label:"Tipo",placeholder:"user","data-vv-name":"type",box:"",required:""},model:{value:e.data.type,callback:function(t){e.$set(e.data,"type",t)},expression:"data.type"}})],1)],1),e._v(" "),a("v-layout",[a("v-flex",{attrs:{"mr-3":""}},[a("v-select",{attrs:{items:e.genderList,label:"Género",placeholder:"25","data-vv-name":"género",box:"",required:""},model:{value:e.data.gender,callback:function(t){e.$set(e.data,"gender",t)},expression:"data.gender"}})],1),e._v(" "),a("v-flex",[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"numeric",expression:"'numeric'"}],attrs:{"error-messages":e.errors.collect("país"),label:"País",placeholder:"25","data-vv-name":"país",box:"",required:""},model:{value:e.data.country,callback:function(t){e.$set(e.data,"country",t)},expression:"data.country"}})],1)],1),e._v(" "),a("v-flex",[a("v-text-field",{attrs:{label:"Dirección",placeholder:"Calle número, colonia, ciudad","data-vv-name":"direccion",box:"",required:""},model:{value:e.data.address,callback:function(t){e.$set(e.data,"address",t)},expression:"data.address"}})],1),e._v(" "),a("v-flex",[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{},expression:"{  }"}],attrs:{"error-messages":e.errors.collect("etiquetas"),label:"Etiquetas",placeholder:"uno,dos,tres","data-vv-name":"etiquetas",box:"",required:""},model:{value:e.data.tags,callback:function(t){e.$set(e.data,"tags",t)},expression:"data.tags"}})],1),e._v(" "),a("v-checkbox",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":e.errors.collect("activo"),value:"",label:"Activo","data-vv-name":"activo",type:"checkbox",required:""},model:{value:e.data.active,callback:function(t){e.$set(e.data,"active",t)},expression:"data.active"}})],1)},staticRenderFns:[]};var b=a("VU/8")(h,x,!1,function(e){a("Ua3p")},"data-v-1c6ded56",null).exports,g={name:"detail-form",props:{data:{required:!0,type:Object}},methods:{splitTags:function(e){return e.split(",")}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("v-card",{attrs:{flat:""}},[a("v-list",{attrs:{"two-line":""}},[e.data.phone?a("v-list-tile",[a("v-list-tile-action",[a("v-icon",{attrs:{color:"indigo"}},[e._v("phone")])],1),e._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[e._v("\n                            "+e._s(e.data.phone)+"\n                        ")]),e._v(" "),a("v-list-tile-sub-title",[e._v("Teléfono")])],1)],1):e._e(),e._v(" "),e.data.gender?a("v-list-tile",[a("v-list-tile-action",[a("v-icon",{attrs:{color:"indigo"}},[e._v("perm_identity")])],1),e._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[e._v("\n                            "+e._s(e.data.gender)+"\n                        ")]),e._v(" "),a("v-list-tile-sub-title",[e._v("Género")])],1)],1):e._e(),e._v(" "),e.data.country?a("v-list-tile",[a("v-list-tile-action",[a("v-icon",{attrs:{color:"indigo"}},[e._v("\n                            place\n                        ")])],1),e._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[e._v("\n                            "+e._s(e.data.country)+"\n                        ")]),e._v(" "),a("v-list-tile-sub-title",[e._v("País")])],1)],1):e._e(),e._v(" "),e.data.type?a("v-list-tile",[a("v-list-tile-action",[a("v-icon",{attrs:{color:"indigo"}},[e._v("\n                            subject\n                        ")])],1),e._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[e._v("\n                            "+e._s(e.data.type)+"\n                        ")]),e._v(" "),a("v-list-tile-sub-title",[e._v("Tipo")])],1)],1):e._e()],1)],1)],1),e._v(" "),a("v-flex",{attrs:{xs6:""}},[a("v-card",{attrs:{flat:""}},[a("v-list",{attrs:{"two-line":""}},[e.data.mobile_phone?a("v-list-tile",{on:{click:function(e){}}},[a("v-list-tile-action",[a("v-icon",{attrs:{color:"indigo"}},[e._v("\n                            phone_android\n                        ")])],1),e._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[e._v("\n                            "+e._s(e.data.mobile_phone)+"\n                        ")]),e._v(" "),a("v-list-tile-sub-title",[e._v("Celular")])],1)],1):e._e(),e._v(" "),e.data.year_of_birth?a("v-list-tile",[a("v-list-tile-action",[a("v-icon",{attrs:{color:"indigo"}},[e._v("\n                            cake\n                        ")])],1),e._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[e._v("\n                            "+e._s(e.data.year_of_birth)+"\n                        ")]),e._v(" "),a("v-list-tile-sub-title",[e._v("\n                            Año de nacimiento\n                        ")])],1)],1):e._e(),e._v(" "),e.data.address?a("v-list-tile",[a("v-list-tile-action",[a("v-icon",{attrs:{color:"indigo"}},[e._v("\n                            my_location\n                        ")])],1),e._v(" "),a("v-list-tile-content",[e._v("\n                        "+e._s(e.data.address)+"\n\n                        "),a("v-list-tile-sub-title",[e._v("\n                            Dirección\n                        ")])],1)],1):e._e(),e._v(" "),e.data.tags?a("v-list-tile",[a("v-list-tile-action",[a("v-icon",{attrs:{color:"indigo"}},[e._v("\n                            label\n                        ")])],1),e._v(" "),a("v-list-tile-content",[a("div",{staticClass:"text-xs-center"},e._l(e.splitTags(e.data.tags),function(t,i){return a("v-chip",{key:i,attrs:{label:""}},[e._v("\n                                "+e._s(t)+"\n                            ")])})),e._v(" "),a("v-list-tile-sub-title",[e._v("\n                            Etiquetas\n                        ")])],1)],1):e._e()],1)],1)],1)],1)},staticRenderFns:[]};var k=a("VU/8")(g,w,!1,function(e){a("ZcVi")},"data-v-35ff2df2",null).exports,y={components:{VListTileAction:_.a,AddForm:b,DetailForm:k},name:"users",mounted:function(){this.getAllUsers()},data:function(){return{search:"",selected:[],users:[],loader:!0,dialog:!1,editedIndex:-1,editedItem:{id:0,name:"",email:"",avatar:"",type:"",address:null,country:0,gender:"",year_of_birth:"",phone:"",mobile_phone:0,active:!0,tags:""},defaultItem:{id:0,name:"",email:"",avatar:"",type:"",address:null,country:0,gender:"",year_of_birth:"",phone:"",mobile_phone:0,active:!0,tags:""},headers:[{text:"Avatar",align:"left",sortable:!1,value:"avatar"},{text:"Nombre",value:"name"},{text:"Correo",value:"email"},{text:"Activo",value:"active"},{text:"Acciones",value:"",sortable:!1}]}},methods:{getAllUsers:function(){var e=this;this.$axios({method:"get",url:"/users",params:{token:this.$cookie.get("authToken")}}).then(function(t){e.users=t.data.data,e.loader=!1})},deleteUser:function(e){var t=this;confirm("¿Desea eliminar este elemento?")&&this.$axios({method:"delete",url:"/users/"+e.id,params:{token:this.$cookie.get("authToken")}}).then(function(a){var i=t.users.indexOf(e);t.users.splice(i,1),window.alert("Usuario eliminado")})},saveUser:function(){this.editedIndex>-1?this.updateUser():this.addUser()},addUser:function(){var e=this;this.$axios({method:"post",url:"/users",params:{token:this.$cookie.get("authToken")},data:this.editedItem}).then(function(t){e.users.push(t.data.data),e.close(),window.alert("Usuario agregado")}).catch(function(){e.close()})},updateUser:function(){var e=this;this.users[this.editedIndex].email===this.editedItem.email&&delete this.editedItem.email,this.$axios({method:"put",url:"/users/"+this.editedItem.id,params:{token:this.$cookie.get("authToken")},data:this.editedItem}).then(function(t){f()(e.users[e.editedIndex],t.data.data),e.close(),window.alert("Usuario modificado satisfactoriamente")}).catch(function(){e.close()})},editItem:function(e){this.editedIndex=this.users.indexOf(e),this.editedItem=f()({},e),this.dialog=!0},close:function(){this.dialog=!1,this.editedItem=f()({},this.defaultItem),this.editedIndex=-1},save:function(){this.editedIndex>-1?f()(this.desserts[this.editedIndex],this.editedItem):this.desserts.push(this.editedItem),this.close()}}},$={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-container",[a("v-btn",{staticClass:"white--text",attrs:{color:"blue-grey"},on:{click:function(t){e.dialog=!0}}},[e._v("\n                Agregar usuario\n                "),a("v-icon",{attrs:{right:"",dark:""}},[e._v("add")])],1)],1),e._v(" "),a("v-container",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.users,search:e.search,loading:e.loader,"hide-actions":""},scopedSlots:e._u([{key:"headerCell",fn:function(t){return[a("v-tooltip",{attrs:{bottom:""}},[a("span",{attrs:{slot:"activator"},slot:"activator"},[e._v("\n                        "+e._s(t.header.text)+"\n                    ")]),e._v(" "),a("span",[e._v("\n                        "+e._s(t.header.text)+"\n                    ")])])]}},{key:"items",fn:function(t){return[a("tr",[a("td",{staticClass:"py-2"},[t.item.avatar?a("v-list-tile-avatar",{attrs:{size:"70"}},[a("img",{attrs:{src:t.item.avatar}})]):a("div",[a("v-avatar",{attrs:{size:"70",color:"indigo"}},[a("v-icon",{attrs:{dark:""}},[e._v("account_circle")])],1)],1)],1),e._v(" "),a("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.name))]),e._v(" "),a("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.email))]),e._v(" "),a("td",{staticClass:"text-xs-left"},[a("v-checkbox",{attrs:{disabled:""},model:{value:t.item.active,callback:function(a){e.$set(t.item,"active",a)},expression:"props.item.active"}})],1),e._v(" "),a("td",[a("v-icon",{staticClass:"mr-2",on:{click:function(e){t.expanded=!t.expanded}}},[e._v("\n                                description\n                            ")]),e._v(" "),a("v-icon",{staticClass:"mr-2",on:{click:function(a){e.editItem(t.item)}}},[e._v("\n                                edit\n                            ")]),e._v(" "),a("v-icon",{on:{click:function(a){e.deleteUser(t.item)}}},[e._v("\n                                delete\n                            ")])],1)])]}},{key:"expand",fn:function(e){return[a("detail-form",{attrs:{data:e.item}})]}}])},[a("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:e.loader},slot:"progress"}),e._v(" "),a("template",{slot:"no-data"},[a("v-alert",{attrs:{value:!0,color:"error",icon:"warning"}},[e._v("\n                        No hay datos de usuarios\n                    ")])],1)],2)],1)],1),e._v(" "),a("v-dialog",{attrs:{scrollable:"","max-width":"90%"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{color:"pink",dark:""}},[a("v-toolbar-title",[e._v("Detalles del usuario")]),e._v(" "),a("v-spacer")],1),e._v(" "),a("v-divider"),e._v(" "),a("v-card-text",{staticStyle:{height:"300px"}},[a("add-form",{attrs:{data:e.editedItem}})],1),e._v(" "),a("v-divider"),e._v(" "),a("v-card-actions",[a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(t){e.close()}}},[e._v("Cancelar\n                ")]),e._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(t){e.saveUser()}}},[e._v("Guardar\n                ")])],1)],1)],1)],1)},staticRenderFns:[]};var q=a("VU/8")(y,$,!1,function(e){a("ulx9")},"data-v-7f5f010a",null).exports;i.default.use(l.a);var C=new l.a({routes:[{path:"/",name:"Home",component:c},{path:"/login",name:"Login",component:m},{path:"/users",name:"Users",component:q}]});C.beforeEach(function(e,t,a){C.app.$root.isConfig||(C.app.$root.$axios.defaults.baseURL="https://v10dev.yeira.training/api/v1",C.app.$axios.defaults.headers.common["Access-Control-Allow-Origin"]="*",C.app.$root.$axios.interceptors.response.use(function(e){return e},function(e){if(e.response)switch(e.response.status){case 422:window.alert("Ocurrió un error inesperado");break;case 401:window.alert("Error de autentificación");break;case 404:window.alert("No se encuentra el recurso solicitado");break;case 403:window.alert("Acción no autorizada");break;case 419:window.alert("Ha caducado el token de seguridad");break;case 500:window.alert("Error de servidor");break;default:window.alert("Ocurrió un error inesperado")}else window.alert("Ocurrió un error inesperado");return o.a.reject()}),C.app.$root.isConfig=!0),a()});var I=C,U=a("3EgV"),A=a.n(U),E=a("sUu7"),N=a("On01"),R=a.n(N),T=a("mtWM"),j=a.n(T),O=a("K/Lq"),F=a.n(O);a("j1ja"),a("QCv7");i.default.config.productionTip=!1,E.a.localize("es",R.a),i.default.use(E.b),i.default.use(A.a),i.default.use(F.a);var V={install:function(e){Object.defineProperty(e.prototype,"$axios",{value:j.a})}};i.default.use(V),new i.default({el:"#app",router:I,components:{App:s},template:"<App/>",data:function(){return{isConfig:!1}}})},QCv7:function(e,t){},Ua3p:function(e,t){},ZcVi:function(e,t){},b1Wk:function(e,t){},ulx9:function(e,t){},vQhg:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.56712671a7b8fcf02aba.js.map