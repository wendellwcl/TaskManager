import{a as P}from"./chunk-B64XLEAZ.js";import{b as g}from"./chunk-TCX4BQVS.js";import{b as _}from"./chunk-BRMQPAJO.js";import{a as v,b as O}from"./chunk-C3BP3FBF.js";import{$ as m,Aa as k,Ma as y,Ta as c,Ua as p,Va as M,Za as f,ba as l,d as i,e as d,f as u,gb as b,mb as h,ya as C}from"./chunk-MCPLFIMF.js";var x=(()=>{var t,n;let e=class e{constructor(){d(this,t,m(_));d(this,n,m(g))}handleCreateTask(){i(this,t).navigate(["/create-task"])}searchTasks(o){let s=o.target.value;i(this,n).getTasksBySearch(s)}};t=new WeakMap,n=new WeakMap,e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=l({type:e,selectors:[["app-dashboard-header"]],standalone:!0,features:[h],decls:6,vars:0,consts:[[1,"dashboard-header"],["type","text","placeholder","Pesquisar...",1,"search-input",3,"keyup"],[1,"btn-create-task",3,"click"]],template:function(r,s){r&1&&(c(0,"header",0)(1,"input",1),f("keyup",function(T){return s.searchTasks(T)}),p(),c(2,"button",2),f("click",function(){return s.handleCreateTask()}),c(3,"mat-icon"),b(4,"note_add"),p(),b(5," Criar tarefa "),p()())},dependencies:[O,v],styles:["[_nghost-%COMP%]   .dashboard-header[_ngcontent-%COMP%]{width:100%;height:var(--header-height);position:sticky;top:0;display:grid;grid-template-columns:1fr auto;place-content:center;gap:2rem;padding:1.6rem 3.2rem;background:var(--color-light);z-index:1}@media screen and (max-width: 768px){[_nghost-%COMP%]   .dashboard-header[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:0;padding:1.6rem 2rem}}[_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]{display:block;width:100%;max-width:540px;justify-self:center;padding:.8rem 1.2rem;background:transparent;border:2px solid var(--color-primary);border-radius:2rem}[_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]:focus{border:2px solid var(--color-primary);outline:2px solid var(--color-primary)}[_nghost-%COMP%]   .btn-create-task[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:.8rem 1.2rem;background:var(--color-primary);color:var(--color-dark);border:2px solid var(--color-primary);border-radius:.8rem;font-weight:700;cursor:pointer;transition:all .2s}[_nghost-%COMP%]   .btn-create-task[_ngcontent-%COMP%]:hover{background:var(--color-light);color:var(--color-primary)}@media screen and (max-width: 768px){[_nghost-%COMP%]   .btn-create-task[_ngcontent-%COMP%]{padding:.4rem .8rem;font-size:1.6rem}}[_nghost-%COMP%]   .btn-create-task[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.2rem}@media screen and (max-width: 768px){[_nghost-%COMP%]   .btn-create-task[_ngcontent-%COMP%]{display:none}}"],changeDetection:0});let a=e;return a})();var K=(()=>{var t,n;let e=class e{constructor(){d(this,t,void 0);d(this,n,void 0);u(this,t,m(g)),this.renderList=C(null)}ngOnInit(){u(this,n,i(this,t).getListToRender$.subscribe(o=>{this.renderList.set(o)}))}ngOnDestroy(){i(this,n)?.unsubscribe(),i(this,t).getTasksBySearch("")}};t=new WeakMap,n=new WeakMap,e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=l({type:e,selectors:[["app-dashboard"]],standalone:!0,features:[h],decls:3,vars:1,consts:[[1,"dashboard-container"],[3,"inputListRender"]],template:function(r,s){r&1&&(c(0,"main",0),M(1,"app-dashboard-header")(2,"app-task-list-render",1),p()),r&2&&(k(2),y("inputListRender",s.renderList()))},dependencies:[x,P],styles:["[_nghost-%COMP%]   .dashboard-container[_ngcontent-%COMP%]{width:100%;height:100%}"],changeDetection:0});let a=e;return a})();export{K as DashboardComponent};
