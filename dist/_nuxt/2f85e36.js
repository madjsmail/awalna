(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{561:function(e,t,o){"use strict";o.r(t);var n=o(3),r=o(21),l=(o(41),{middleware:"isAuthenticated",components:{editor:o(72).Editor},data:function(){return{Word:"",synonyms:"",origin:"",Description:"",editorText:"This is initialValue.",editorOptions:Object(r.a)({hideModeSwitch:!0,language:"an_US",toolbarItems:["heading","bold","italic","strike","divider","hr","quote","divider","ul","ol","divider","outdent","divider","link","divider"]},"language","ar"),editorHtml:"",editorVisible:!1}},methods:{submitWord:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.$post("/api/Word",{word:e.Word,synonyms:e.synonyms,origin:e.origin,description:e.Description,AddBy:e.getUserInfo.fullname}).then((function(){e.Word="",e.synonyms="",e.origin="",e.Description=""}));case 3:t.sent,e.$buefy.toast.open({message:"word added successfully!!",type:"is-success"}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0),e.$buefy.toast.open({duration:5e3,message:"Something's not good, 😢",type:"is-danger"});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},computed:{getUserInfo:function(){return this.$store.getters.getUserInfo},allowSubmit:function(){return!!(this.Word&&this.synonyms||this.Word&&this.Description)}}}),d=o(25),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",{staticClass:"box"},[o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[e._v("Word")]),e._v(" "),o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.Word,expression:"Word"}],staticClass:"input",attrs:{name:"Word",type:"text",placeholder:"Example"},domProps:{value:e.Word},on:{input:function(t){t.target.composing||(e.Word=t.target.value)}}})])]),e._v(" "),o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[e._v("synonyms")]),e._v(" "),o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.synonyms,expression:"synonyms"}],staticClass:"input",attrs:{name:"synonyms",type:"text",placeholder:"Example"},domProps:{value:e.synonyms},on:{input:function(t){t.target.composing||(e.synonyms=t.target.value)}}})])]),e._v(" "),o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[e._v("origin")]),e._v(" "),o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.origin,expression:"origin"}],staticClass:"input",attrs:{name:"origin",type:"text",placeholder:"Example"},domProps:{value:e.origin},on:{input:function(t){t.target.composing||(e.origin=t.target.value)}}})])]),e._v(" "),o("b-field",{attrs:{label:"Description"}},[o("editor",{attrs:{type:"textarea",options:e.editorOptions,html:e.editorHtml,visible:e.editorVisible,previewStyle:"bar",height:"300px",mode:"markdown",placeholder:"Example"},model:{value:e.Description,callback:function(t){e.Description=t},expression:"Description"}})],1),e._v(" "),o("b-button",{attrs:{type:"is-primary",disabled:!this.allowSubmit},on:{click:e.submitWord}},[e._v("submit")])],1)}),[],!1,null,null,null);t.default=component.exports}}]);