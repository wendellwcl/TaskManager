import{a as H,b as N,c as B}from"./chunk-TCX4BQVS.js";import{b as j}from"./chunk-BRMQPAJO.js";import{a as F,b as G}from"./chunk-C3BP3FBF.js";import{$ as v,Aa as r,Eb as z,Fb as L,Ka as k,Ma as E,Pa as p,Qa as S,Ra as I,Sa as D,Ta as n,Ua as a,Va as w,Wa as T,Za as u,_a as l,ba as P,d as M,e as f,f as x,fa as C,ga as g,gb as o,hb as b,ib as O,mb as h,nb as V,ob as R,ya as y}from"./chunk-MCPLFIMF.js";function q(t,i){t&1&&(n(0,"p",9),o(1,"realizada"),a())}function A(t,i){t&1&&(n(0,"p",10),o(1,"exclu\xEDda"),a())}function J(t,i){if(t&1&&(n(0,"div",7),k(1,q,2,0,"p",8)(2,A,2,0),a()),t&2){let e=l();r(),p(1,e.task.status===e.taskStatusValues.COMPLETED?1:e.task.status===e.taskStatusValues.DELETED?2:-1)}}function K(t,i){if(t&1){let e=T();n(0,"button",11),u("click",function(){C(e);let s=l();return g(s.handleCompleteOrDeleteTask(s.task.id,"complete"))}),n(1,"mat-icon"),o(2,"done"),a(),n(3,"span"),o(4," Concluir "),a()(),n(5,"button",12),u("click",function(){C(e);let s=l();return g(s.handleEditTask(s.task.id))}),n(6,"mat-icon"),o(7,"edit"),a(),n(8,"span"),o(9," Editar "),a()(),n(10,"button",13),u("click",function(){C(e);let s=l();return g(s.handleCompleteOrDeleteTask(s.task.id,"delete"))}),n(11,"mat-icon"),o(12,"delete"),a(),n(13,"span"),o(14," Excluir "),a()()}}function Q(t,i){if(t&1){let e=T();n(0,"button",14),u("click",function(){C(e);let s=l();return g(s.handleRestore(s.task.id))}),n(1,"mat-icon"),o(2,"cached"),a(),n(3,"span"),o(4," Restaurar "),a()()}}function W(t,i){if(t&1&&(n(0,"div",19)(1,"p"),o(2),a()()),t&2){let e=l(2);r(2),b(e.task.subject)}}function X(t,i){if(t&1&&(n(0,"div",20)(1,"p"),o(2),V(3,"date"),a()()),t&2){let e=l(2);r(2),b(R(3,1,e.task.deadlineDate))}}function Y(t,i){if(t&1&&(n(0,"div",21)(1,"p"),o(2),a()()),t&2){let e=l(2);r(2),O("Prioridade ",e.task.priority,"")}}function Z(t,i){if(t&1&&(n(0,"div",15),k(1,W,3,1,"div",16)(2,X,4,3,"div",17)(3,Y,3,1,"div",18),a()),t&2){let e=l();r(),p(1,e.task.subject?1:-1),r(),p(2,e.task.deadlineDate?2:-1),r(),p(3,e.task.priority===e.taskPrioritiesValues.HIGH?3:-1)}}function tt(t,i){if(t&1&&(n(0,"div",22)(1,"details")(2,"summary"),o(3,"Ver descri\xE7\xE3o"),a(),n(4,"p"),o(5),a()()()),t&2){let e=l();r(5),O(" ",e.task.description," ")}}var $=(()=>{var i,e;let c=class c{constructor(){f(this,i,void 0);f(this,e,void 0);x(this,i,v(j)),x(this,e,v(N)),this.taskPrioritiesValues=B,this.taskStatusValues=H}handleEditTask(m){M(this,i).navigate([`/edit-task/${m}`])}handleCompleteOrDeleteTask(m,_){M(this,e).completeOrDeleteTask(m,_)}handleRestore(m){M(this,e).restoreTask(m)}};i=new WeakMap,e=new WeakMap,c.\u0275fac=function(_){return new(_||c)},c.\u0275cmp=P({type:c,selectors:[["app-task-item"]],inputs:{task:"task"},standalone:!0,features:[h],decls:10,vars:5,consts:[[1,"task-item"],["class","task-status-container"],[1,"task-item-header"],[1,"task-title"],[1,"task-actions"],["class","task-infos"],["class","task-item-details"],[1,"task-status-container"],["class","task-status completed"],[1,"task-status","completed"],[1,"task-status","deleted"],[1,"btn-conclude",3,"click"],[1,"btn-edit",3,"click"],[1,"btn-delete",3,"click"],[1,"btn-restore",3,"click"],[1,"task-infos"],["class","task-subject"],["class","task-deadlineDate"],["class","task-priority"],[1,"task-subject"],[1,"task-deadlineDate"],[1,"task-priority"],[1,"task-item-details"]],template:function(_,d){_&1&&(n(0,"li",0),k(1,J,3,1,"div",1),n(2,"div",2)(3,"p",3),o(4),a(),n(5,"div",4),k(6,K,15,0)(7,Q,5,0),a()(),k(8,Z,4,3,"div",5)(9,tt,6,1,"div",6),a()),_&2&&(r(),p(1,d.task.status!==d.taskStatusValues.PENDING?1:-1),r(3),O(" ",d.task.title," "),r(2),p(6,d.task.status===d.taskStatusValues.PENDING?6:7),r(2),p(8,d.task.subject||d.task.deadlineDate||d.task.priority===d.taskPrioritiesValues.HIGH?8:-1),r(),p(9,d.task.description?9:-1))},dependencies:[L,z,G,F],styles:['@charset "UTF-8";[_nghost-%COMP%]   .task-item[_ngcontent-%COMP%]{width:100%;padding:.8rem 1.2rem;background:var(--color-light-010);border-radius:.8rem}[_nghost-%COMP%]   .task-status-container[_ngcontent-%COMP%]   .task-status[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:700;text-transform:capitalize;padding-left:.8rem;position:relative}[_nghost-%COMP%]   .task-status-container[_ngcontent-%COMP%]   .task-status[_ngcontent-%COMP%]:before{content:"\\2981";position:absolute;left:0;top:0}[_nghost-%COMP%]   .task-status-container[_ngcontent-%COMP%]   .task-status.completed[_ngcontent-%COMP%]{color:var(--color-success)}[_nghost-%COMP%]   .task-status-container[_ngcontent-%COMP%]   .task-status.deleted[_ngcontent-%COMP%]{color:var(--color-danger)}[_nghost-%COMP%]   .task-item-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}[_nghost-%COMP%]   .task-item-header[_ngcontent-%COMP%]   .task-title[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;text-transform:capitalize}@media screen and (max-width: 768px){[_nghost-%COMP%]   .task-item-header[_ngcontent-%COMP%]   .task-title[_ngcontent-%COMP%]{font-size:1.6rem}}[_nghost-%COMP%]   .task-item-header[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]{display:flex;gap:.8rem}@media screen and (max-width: 768px){[_nghost-%COMP%]   .task-item-header[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]{gap:.4rem}}[_nghost-%COMP%]   .task-item-header[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;place-content:center;padding:.4rem;background:var(--color-primary);border:none;border-radius:.8rem;font-size:2rem;color:var(--color-dark);cursor:pointer;transition:all .3s}@media screen and (max-width: 768px){[_nghost-%COMP%]   .task-item-header[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:.2rem;font-size:1.6rem}}[_nghost-%COMP%]   .task-item-header[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   button.btn-conclude[_ngcontent-%COMP%]:hover{background:var(--color-success)}[_nghost-%COMP%]   .task-item-header[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   button.btn-edit[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .task-item-header[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   button.btn-restore[_ngcontent-%COMP%]:hover{background:var(--color-info)}[_nghost-%COMP%]   .task-item-header[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   button.btn-delete[_ngcontent-%COMP%]:hover{background:var(--color-danger)}[_nghost-%COMP%]   .task-item-header[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:inherit;display:flex;place-content:center;place-items:center}[_nghost-%COMP%]   .task-item-header[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;position:absolute;width:0px;height:0px;visibility:hidden}[_nghost-%COMP%]   .task-infos[_ngcontent-%COMP%]{display:flex;gap:2.8rem;color:var(--color-primary)}@media screen and (max-width: 768px){[_nghost-%COMP%]   .task-infos[_ngcontent-%COMP%]{flex-direction:column;gap:.2rem}}[_nghost-%COMP%]   .task-infos[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child):after{content:"\\2981";position:absolute;right:-1.6rem;top:0}@media screen and (max-width: 768px){[_nghost-%COMP%]   .task-infos[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child):after{display:none}}[_nghost-%COMP%]   .task-subject[_ngcontent-%COMP%], [_nghost-%COMP%]   .task-priority[_ngcontent-%COMP%], [_nghost-%COMP%]   .task-deadlineDate[_ngcontent-%COMP%]{text-transform:capitalize;font-size:1.4rem;font-weight:700;position:relative}@media screen and (max-width: 768px){[_nghost-%COMP%]   .task-subject[_ngcontent-%COMP%], [_nghost-%COMP%]   .task-priority[_ngcontent-%COMP%], [_nghost-%COMP%]   .task-deadlineDate[_ngcontent-%COMP%]{font-size:1.2rem}}[_nghost-%COMP%]   .task-item-details[_ngcontent-%COMP%]{margin-top:.8rem;font-size:1.4rem}[_nghost-%COMP%]   .task-item-details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .task-item-details[_ngcontent-%COMP%]   details[open][_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]{margin-bottom:.8rem}'],changeDetection:0});let t=c;return t})();function et(t,i){if(t&1&&w(0,"app-task-item",1),t&2){let e=i.$implicit;E("task",e)}}function nt(t,i){t&1&&(n(0,"div",2)(1,"p"),o(2,"Sem tarefas."),a()())}var xt=(()=>{let i=class i{constructor(){this.listRender=y(null)}set inputListRender(c){this.listRender.set(c)}};i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=P({type:i,selectors:[["app-task-list-render"]],inputs:{inputListRender:"inputListRender"},standalone:!0,features:[h],decls:4,vars:1,consts:[[1,"tasks-list-container"],[3,"task"],[1,"tasks-list-empty"],["class","tasks-list-empty"]],template:function(s,m){s&1&&(n(0,"section",0),I(1,et,1,1,"app-task-item",1,S,!1,nt,3,0,"div",3),a()),s&2&&(r(),D(m.listRender()))},dependencies:[$],styles:["[_nghost-%COMP%]   .tasks-list-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;gap:.8rem;padding:1.6rem}[_nghost-%COMP%]   .tasks-list-empty[_ngcontent-%COMP%]{text-align:center}"],changeDetection:0});let t=i;return t})();export{xt as a};