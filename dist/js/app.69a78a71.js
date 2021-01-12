(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0da4":function(t,e,s){},1150:function(t,e,s){"use strict";var a=s("7b0c"),i=s.n(a);i.a},1163:function(t,e,s){"use strict";var a=s("c248"),i=s.n(a);i.a},"47e9":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=(s("f5df1"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Home")],1)}),n=[],r=s("bb51"),o={components:{Home:r["default"]}},l=o,c=(s("5c0b"),s("2877")),u=Object(c["a"])(l,i,n,!1,null,null,null),d=u.exports,f=(s("d3b7"),s("8c4f"));a["a"].use(f["a"]);var m=[{path:"/",name:"Home",component:function(){return Promise.resolve().then(s.bind(null,"bb51"))}}],k=new f["a"]({routes:m}),p=k,v=(s("7db0"),s("c740"),s("4160"),s("a434"),s("159b"),s("5530")),_=s("2909"),h=s("2f62");a["a"].use(h["a"]);var b={filterOptions:{grid:!0,orderBy:"name"}},g=new h["a"].Store({state:{tasksData:JSON.parse(localStorage.getItem("tasksData")||"[]"),column:{isNew:!1},task:{},settings:JSON.parse(localStorage.getItem("AppSettings"))||b},mutations:{createTask:function(t,e){var s=Object(_["a"])(t.tasksData),a={id:e.id,category:e.category,text:e.text,completed:e.completed};s.length?s.forEach((function(t){e.colId===t.id&&t.tasks.push(a)})):s.push({id:e.colId,title:"",tasks:[Object(v["a"])({},a)]}),t.tasksData=s,localStorage.setItem("tasksData",JSON.stringify(t.tasksData))},updateTask:function(t,e){var s=e.colId,a=e.id,i=e.category,n=e.text,r=e.completed,o=Object(_["a"])(t.tasksData),l=o.findIndex((function(t){return t.id===s})),c=o[l].tasks.findIndex((function(t){return t.id===a}));void 0!==i&&(o[l].tasks[c].category=i),void 0!==n&&(o[l].tasks[c].text=n),void 0!==r&&(o[l].tasks[c].completed=r),t.tasksData=o,localStorage.setItem("tasksData",JSON.stringify(t.tasksData))},deleteTask:function(t,e){var s=e.colId,a=e.id,i=Object(_["a"])(t.tasksData),n=i.findIndex((function(t){return t.id===s})),r=i[n].tasks.findIndex((function(t){return t.id===a}));i[n].tasks.splice(r,1),t.tasksData=i,localStorage.setItem("tasksData",JSON.stringify(t.tasksData))},createColumn:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=Object(_["a"])(t.tasksData),a={id:e.id||Date.now(),title:e.title||"Без названия",tasks:e.tasks||[],bgColor:"#fee437"};s.push(a),t.tasksData=s,localStorage.setItem("tasksData",JSON.stringify(t.tasksData)),t.column.isNew=!0},updateColumnTasks:function(t,e){var s=Object(_["a"])(t.tasksData),a=s.findIndex((function(t){return t.id===e.id}));s[a].tasks=Object(_["a"])(e.tasks),t.tasksData=s,localStorage.setItem("tasksData",JSON.stringify(t.tasksData))},setColumnTitle:function(t,e){var s=e.id,a=e.title,i=Object(_["a"])(t.tasksData),n=i.findIndex((function(t){return t.id===s}));i[n].title=a,t.tasksData=i,localStorage.setItem("tasksData",JSON.stringify(t.tasksData))},setNewColFlag:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.column.isNew=e},deleteColumn:function(t,e){var s=Object(_["a"])(t.tasksData),a=s.findIndex((function(t){return t.id===e}));s.splice(a,1),t.tasksData=s,localStorage.setItem("tasksData",JSON.stringify(t.tasksData))},changeGrid:function(t){t.settings.filterOptions.grid=!t.settings.filterOptions.grid,localStorage.setItem("AppSettings",JSON.stringify(t.settings))},changeColumnColor:function(t,e){var s=e.id,a=e.color,i=Object(_["a"])(t.tasksData),n=i.findIndex((function(t){return t.id===s}));i[n].bgColor=a,t.tasksData=i,localStorage.setItem("tasksData",JSON.stringify(t.tasksData))}},actions:{createTask:function(t,e){var s=t.commit;s("createTask",e)},updateTask:function(t,e){var s=t.commit;s("updateTask",e)},deleteTask:function(t,e){var s=t.commit;s("deleteTask",e)},createColumn:function(t,e){var s=t.commit;s("createColumn",e)},updateColumnTasks:function(t,e){var s=t.commit;s("updateColumnTasks",e)},setColumnTitle:function(t,e){var s=t.commit;s("setColumnTitle",e)},setNewColFlag:function(t,e){var s=t.commit;s("setNewColFlag",e)},deleteColumn:function(t,e){var s=t.commit;s("deleteColumn",e)},filterByGrid:function(t){var e=t.commit;e("changeGrid")},changeColumnColor:function(t,e){var s=t.commit;s("changeColumnColor",e)}},getters:{tasksData:function(t){return t.tasksData},columnTitleById:function(t){return function(e){var s;return null===(s=t.tasksData.find((function(t){return t.id===e})))||void 0===s?void 0:s.title}},taskById:function(t){return function(e){var s,a=e.colId,i=e.id;return null===(s=t.tasksData.find((function(t){return t.id===a})))||void 0===s?void 0:s.tasks.find((function(t){return t.id===i}))}},isNewColAdded:function(t){return t.column.isNew},isGrid:function(t){return t.settings.filterOptions.grid},getColumnBgColor:function(t){return function(e){var s;return null===(s=t.tasksData.find((function(t){return t.id===e})))||void 0===s?void 0:s.bgColor}}}});a["a"].config.productionTip=!1,new a["a"]({router:p,store:g,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),i=s.n(a);i.a},"75e2":function(t,e,s){"use strict";var a=s("0da4"),i=s.n(a);i.a},"7b0c":function(t,e,s){},"8a71":function(t,e,s){"use strict";var a=s("47e9"),i=s.n(a);i.a},"8c0c":function(t,e,s){},"8e95":function(t,e,s){},"9aa3":function(t,e,s){},"9c0c":function(t,e,s){},a133:function(t,e,s){"use strict";var a=s("8e95"),i=s.n(a);i.a},bb51:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-page"},[s("Header"),s("FilterBar"),s("LeftSidebar"),s("TaskList")],1)},i=[],n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("div",{staticClass:"logo header__logo"},[s("span",[t._v("N")])]),s("div",{staticClass:"header__content"},[s("form",{staticClass:"form"},[s("div",{staticClass:"form__search form-search"},[s("input",{staticClass:"form-search__input",attrs:{type:"text",placeholder:"Search",title:"Поиск"}}),s("button",{staticClass:"form-search__btn",attrs:{type:"submit",title:"Искать"}})])])])])}],o={name:"Header"},l=o,c=(s("a133"),s("2877")),u=Object(c["a"])(l,n,r,!1,null,"9770988a",null),d=u.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"left-sidebar"},[s("nav",{staticClass:"left-sidebar__nav nav"},[s("ul",{staticClass:"nav__list"},[s("li",{staticClass:"nav__item"},[s("router-link",{staticClass:"nav__link",attrs:{tag:"a",to:"/","active-class":"nav__link--active",exact:""}},[s("span",{staticClass:"nav__link-img nav__link-img--home"}),s("span",{staticClass:"nav__link-text"},[t._v("Главная")])])],1),s("li",{staticClass:"nav__item"},[s("router-link",{staticClass:"nav__link",attrs:{tag:"a",to:"/settings","active-class":"nav__link--active"}},[s("span",{staticClass:"nav__link-img nav__link-img--settings"}),s("span",{staticClass:"nav__link-text"},[t._v("Опции")])])],1)])])])},m=[],k={name:"LeftSidebar"},p=k,v=(s("1150"),Object(c["a"])(p,f,m,!1,null,"1279fb7e",null)),_=v.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"filter-bar"},[s("label",{staticClass:"filter-bar__title",attrs:{for:"filter-form-select"}},[t._v("Фильтр")]),s("form",{staticClass:"filter-bar__form filter-form"},[t._m(0),s("button",{staticClass:"filter-form__btn filter-form__btn-grid",class:{"filter-form__btn--active":t.isGrid},attrs:{type:"submit",title:"В сетку"},on:{click:function(e){return e.preventDefault(),t.buildCell(e)}}}),s("button",{staticClass:"filter-form__btn filter-form__btn-list",class:{"filter-form__btn--active":!t.isGrid},attrs:{type:"submit",title:"Списком"},on:{click:function(e){return e.preventDefault(),t.buildRow(e)}}}),s("button",{staticClass:"filter-form__btn filter-form__btn-byname filter-form__btn--active",attrs:{type:"submit",title:"По имени"}},[t._v(" По имени ")]),s("button",{staticClass:"filter-form__btn filter-form__btn-bystatus",attrs:{type:"submit",title:"По статусу"}},[t._v(" По статусу ")])]),s("button",{staticClass:"add-task-button"},[t._v("+ Добавить задачу")])])},b=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"filter-bar__select filter-form-select"},[s("select",{attrs:{id:"filter-form-select",title:"Фильтр"}},[s("option",{attrs:{value:"completed"}},[t._v("Завершенные")]),s("option",{attrs:{value:"inwork"}},[t._v("В работе")]),s("option",{attrs:{value:"all",selected:""}},[t._v("Все")])])])}],g={name:"FilterBar",methods:{buildCell:function(){!this.isGrid&&this.$store.dispatch("filterByGrid")},buildRow:function(){this.isGrid&&this.$store.dispatch("filterByGrid")}},computed:{isGrid:function(){return this.$store.getters.isGrid}}},C=g,T=(s("1163"),Object(c["a"])(C,h,b,!1,null,"3df1d702",null)),y=T.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task-list"},[s("div",{staticClass:"task-list__inner",class:{"task-list__inner--row":!t.isGrid}},[t._l(t.tasksData,(function(e){return s("div",{key:e.id,staticClass:"column__wrapper",class:{"column__wrapper--row":!t.isGrid}},[s("TaskListColumn",{ref:"column",refInFor:!0,attrs:{column:e}})],1)})),s("div",{staticClass:"task-list__column column"},[s("div",{staticClass:"column__header"},[s("button",{staticClass:"column__add-btn",attrs:{title:"Добавить колонку"},on:{click:t.addColumn}})])])],2)])},I=[],$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task-list__column column"},[s("div",{staticClass:"column__header column-title",class:{"column-title--wide":!t.isGrid},style:{"background-color":t.columnBgColor}},[s("label",{staticClass:"column-title__color"},[s("input",{staticClass:"column-title__color-input",attrs:{type:"color"},domProps:{value:t.columnBgColor},on:{change:t.colorChangeHandler}})]),s("div",{staticClass:"column-title__inner"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.columnTitle,expression:"columnTitle"}],ref:"titleText",staticClass:"column-title__text",class:{"column-title__text--active":t.isTitleEditable,"column-title__text--wide":!t.isGrid},attrs:{type:"text",tabindex:t.isTitleEditable?"0":"-1"},domProps:{value:t.columnTitle},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.titleTextBlur(e)},input:function(e){e.target.composing||(t.columnTitle=e.target.value)}}}),s("button",{staticClass:"column__delete-btn",class:{"column__delete-btn--show":t.isTitleEditable},on:{click:t.deleteColumn}},[t._v(" × ")]),s("button",{staticClass:"column__edit-btn",class:{"column__edit-btn--active":t.isTitleEditable},attrs:{title:"Редактировать колонку"},on:{click:t.editTitleText}})])]),s("draggable",{staticClass:"column__wrapper",class:{"column__wrapper--wide":!t.isGrid},attrs:{group:"tasks",list:t.column.tasks},on:{add:t.updateColumnTasks,remove:t.updateColumnTasks,update:t.updateColumnTasks}},t._l(t.column.tasks,(function(e){return s("Task",{key:e.id,ref:"taskItem",refInFor:!0,attrs:{colId:t.column.id,id:e.id,bdLeftColor:t.columnBgColor}})})),1),s("div",{staticClass:"column__add-task-btn-wrapper"},[s("button",{staticClass:"column__add-task-btn",attrs:{title:"Добавить задачу"},on:{click:t.addTask}})])],1)},w=[],D=s("b76a"),O=s.n(D),E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task",class:{"task-completed":t.isTaskCompleted,"task--wide":!t.isGrid},style:{borderLeftColor:this.bdLeftColor}},[s("div",{staticClass:"task__header"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.taskCategory,expression:"taskCategory"}],ref:"taskCategory",staticClass:"task__category",class:{"task__category--wide":!t.isGrid},attrs:{type:"text",disabled:!t.isTaskEditable},domProps:{value:t.taskCategory},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.titleKeypressHandler(e)},input:function(e){e.target.composing||(t.taskCategory=e.target.value)}}}),s("button",{staticClass:"task__delete-btn",class:{"task__delete-btn--show":t.isTaskEditable},on:{click:t.deleteTask}},[t._v(" × ")]),s("button",{staticClass:"task__edit-btn",attrs:{title:"Редактировать задачу"},on:{click:t.editTaskHandler}})]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.taskText,expression:"taskText"}],ref:"textarea",staticClass:"task__text",attrs:{disabled:!t.isTaskEditable,rows:"1"},domProps:{value:t.taskText},on:{input:[function(e){e.target.composing||(t.taskText=e.target.value)},t.areaAutoHeight]}}),s("div",{staticClass:"task__footer"},[s("button",{staticClass:"task__time-btn"},[t._v("00:00:00")]),s("span",{staticClass:"task__footer-line"}),s("button",{staticClass:"task__complete-btn",on:{click:t.completeBtnClickHandler}},[t._v(" "+t._s(t.isTaskCompleted?"Завершено":"Завершить")+" ")])])])},S=[],j=(s("a9e3"),s("5530")),N={name:"Task",props:{colId:{type:Number,default:function(){return-1}},id:{type:Number,default:function(){return-1}},bdLeftColor:{type:String,default:function(){return"transparent"}}},data:function(){return{isTaskEditable:!1}},methods:{focusCategory:function(){var t=this;this.isTaskEditable=!0;var e=function e(s){var a=s.target;t.$el!==a.closest(".task")&&(t.isTaskEditable=!1,document.removeEventListener("click",e))};document.addEventListener("click",e),setTimeout((function(){return t.$refs.textarea.focus()}),0)},titleKeypressHandler:function(){this.$refs.taskCategory.blur()},editTaskHandler:function(){var t=this;if(this.isTaskEditable=!this.isTaskEditable,this.isTaskEditable){var e=function e(s){var a=s.target;t.$el!==a.closest(".task")&&(t.isTaskEditable=!1,document.removeEventListener("click",e))};document.addEventListener("click",e),setTimeout((function(){return t.$refs.textarea.focus()}),0)}},deleteTask:function(){confirm("Удалить таск?")&&this.$store.dispatch("deleteTask",{colId:this.colId,id:this.id})},completeBtnClickHandler:function(){var t={colId:this.colId,id:this.id},e=this.$store.getters.taskById(t).completed;this.$store.dispatch("updateTask",Object(j["a"])(Object(j["a"])({},t),{},{completed:!e}))},areaAutoHeight:function(){this.$refs.textarea.style.height="1px";var t=this.$refs.textarea.scrollHeight;this.$refs.textarea.style.height="".concat(t,"px")}},computed:{taskCategory:{get:function(){var t={colId:this.colId,id:this.id};return this.$store.getters.taskById(t).category},set:function(t){var e={colId:this.colId,id:this.id,category:t};this.$store.dispatch("updateTask",e)}},taskText:{get:function(){var t={colId:this.colId,id:this.id};return this.$store.getters.taskById(t).text},set:function(t){var e={colId:this.colId,id:this.id,text:t};this.$store.dispatch("updateTask",e)}},isGrid:function(){return this.$store.getters.isGrid},isTaskCompleted:function(){var t={colId:this.colId,id:this.id};return this.$store.getters.taskById(t).completed}},mounted:function(){this.areaAutoHeight()}},G=N,B=(s("8a71"),Object(c["a"])(G,E,S,!1,null,"61fff6f5",null)),H=B.exports,L={name:"TaskListColumn",components:{Task:H,draggable:O.a},props:{column:{type:Object,default:function(){return{id:Date.now(),title:"",tasks:[],bgColor:"transparent"}}}},data:function(){return{isTitleEditable:!1,isTaskDragging:!1}},methods:{colorChangeHandler:function(t){t.target.value!==this.column.bgColor&&this.$store.dispatch("changeColumnColor",{id:this.column.id,color:t.target.value})},editTitleText:function(){var t=this;if(this.isTitleEditable=!this.isTitleEditable,this.isTitleEditable){this.$refs.titleText.focus();var e=function e(s){var a=s.target;a.closest(".column-title")||(t.isTitleEditable=!1,document.removeEventListener("click",e))};document.addEventListener("click",e)}},deleteColumn:function(){confirm("Удалить колонку?")&&this.$store.dispatch("deleteColumn",this.column.id)},titleTextBlur:function(){this.$refs.titleText.blur(),this.isTitleEditable=!1},addTask:function(){var t=this,e={colId:this.column.id,id:Date.now(),category:this.columnTitle,text:"",completed:!1};this.$store.dispatch("createTask",e),setTimeout((function(){t.$refs.taskItem&&t.$refs.taskItem[t.$refs.taskItem.length-1].focusCategory()}),0)},updateColumnTasks:function(){this.$store.dispatch("updateColumnTasks",this.column)}},computed:{columnTitle:{get:function(){return this.$store.getters.columnTitleById(this.column.id)||this.column.title},set:function(t){var e={id:this.column.id,title:t};this.$store.dispatch("setColumnTitle",e)}},isGrid:function(){return this.$store.getters.isGrid},columnBgColor:function(){return this.$store.getters.getColumnBgColor(this.column.id)||this.column.bgColor}},mounted:function(){this.$store.getters.isNewColAdded&&(this.$refs.titleText.focus(),this.$store.dispatch("setNewColFlag",!1))}},J=L,P=(s("c7e4"),Object(c["a"])(J,$,w,!1,null,"6f38f134",null)),F=P.exports,A={name:"TaskList",components:{TaskListColumn:F},methods:{addColumn:function(){this.$store.dispatch("createColumn"),this.$store.dispatch("setNewColFlag",!0)}},computed:{isGrid:function(){return this.$store.getters.isGrid},tasksData:function(){return this.$store.getters.tasksData}},mounted:function(){this.$store.getters.tasksData.length<1&&!this.$store.getters.isNewColAdded&&this.$store.dispatch("createColumn")}},M=A,K=(s("e8b9"),Object(c["a"])(M,x,I,!1,null,"29f14b56",null)),R=K.exports,q={name:"Home",components:{TaskList:R,FilterBar:y,LeftSidebar:_,Header:d}},z=q,Q=(s("75e2"),Object(c["a"])(z,a,i,!1,null,"5fa301ca",null));e["default"]=Q.exports},c248:function(t,e,s){},c7e4:function(t,e,s){"use strict";var a=s("8c0c"),i=s.n(a);i.a},e8b9:function(t,e,s){"use strict";var a=s("9aa3"),i=s.n(a);i.a}});
//# sourceMappingURL=app.69a78a71.js.map