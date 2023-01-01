"use strict";(self.webpackChunkeCommerce_angular=self.webpackChunkeCommerce_angular||[]).push([[829],{829:(w,u,a)=>{a.r(u),a.d(u,{ProductsModule:()=>y});var l=a(6895),d=a(4546),r=a(433),h=a(7579),f=a(3900),Z=a(9646),g=a(2722),v=a(4004),t=a(8256),p=a(7644),A=a(6943);function P(o,i){1&o&&(t.TgZ(0,"small",22),t._uU(1,"Title is required"),t.qZA())}function b(o,i){1&o&&(t.TgZ(0,"small",22),t._uU(1,"Price is required"),t.qZA())}function C(o,i){1&o&&(t.TgZ(0,"small",22),t._uU(1,"Image is required"),t.qZA())}function _(o,i){1&o&&(t.TgZ(0,"small",22),t._uU(1,"Description is required"),t.qZA())}function T(o,i){if(1&o&&(t.TgZ(0,"option",27),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}function O(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div",3)(2,"div",4)(3,"div",23)(4,"span",5),t._UZ(5,"i",24),t.qZA()(),t.TgZ(6,"div",3)(7,"select",25),t.YNc(8,T,2,2,"option",26),t.ALo(9,"async"),t.qZA()()()(),t.BQk()),2&o){const e=t.oxw();t.xp6(8),t.Q6J("ngForOf",t.lcZ(9,1,e.categories$))}}let m=(()=>{class o{constructor(e,n,c,s){this.productsService=e,this.categoriesService=n,this.router=c,this.route=s,this.form=new r.cw({id:new r.NI(null),name:new r.NI("",r.kI.required),price:new r.NI("",r.kI.required),categoryId:new r.NI("",r.kI.required),description:new r.NI("",r.kI.required),image:new r.NI("",r.kI.required)}),this.categories$=this.categoriesService.getAll(),this.sub$=new h.x}get getName(){return this.form.get("name")}get getDescription(){return this.form.get("description")}get getPrice(){return this.form.get("price")}get getImage(){return this.form.get("image")}get categoryID(){return this.form.get("categoryId")}ngOnInit(){this.route.params.pipe((0,f.w)(e=>e.id?(this.productId=e.id,this.productsService.getOne(e.id)):(0,Z.of)(null))).subscribe(e=>{e&&this.form.patchValue({...e,categoryId:e.category.id})})}categoryChanged(e){console.log(e),this.categories$.pipe((0,g.R)(this.sub$),(0,v.U)(n=>n.find(c=>c.id===e.id))).subscribe(n=>{n&&this.form.patchValue({category:n})})}ngOnDestroy(){this.sub$.next(null),this.sub$.complete()}submit(){console.log(this.form.value),!this.form.invalid&&(this.form.value.id?this.productsService.update(this.form.value.id,this.form.value).pipe((0,g.R)(this.sub$)).subscribe(e=>{this.router.navigate(["/manager/products"]).then(()=>{this.form.reset()})}):this.productsService.create(this.form.value).pipe().subscribe(e=>{this.router.navigate(["/manager/products"]).then(()=>{this.form.reset()})}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.su),t.Y36(A.H),t.Y36(d.F0),t.Y36(d.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-add-edit"]],decls:37,vars:17,consts:[["id","login",1,"col-md-4","col-md-offset-4"],["id","inner-wrapper",1,"login"],[3,"formGroup","ngSubmit"],[1,"form-group"],[1,"input-group"],[1,"input-group-text"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-card-heading"],["d","M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"],["d","M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z"],["type","text","placeholder","Title","formControlName","name",1,"form-control"],["class","text-danger",4,"ngIf"],[1,"fas","fa-dollar-sign",2,"width","20px","height","20px"],["type","number","placeholder","Price","formControlName","price",1,"form-control"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-images"],["d","M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"],["d","M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"],["type","text","placeholder","Image","formControlName","image",1,"form-control"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-body-text"],["fill-rule","evenodd","d","M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5Zm0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"],["type","text","placeholder","Description","formControlName","description",1,"form-control"],[4,"ngIf"],["type","submit",1,"btn","btn-dark","btn-block"],[1,"text-danger"],[1,"dropdown"],["aria-hidden","true",1,"fa","fa-list-alt",2,"width","20px","height","25px"],["formControlName","categoryId",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"section",1)(2,"article")(3,"form",2),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(4,"div",3)(5,"div",4)(6,"span",5),t.O4$(),t.TgZ(7,"svg",6),t._UZ(8,"path",7)(9,"path",8),t.qZA()(),t.kcU(),t._UZ(10,"input",9),t.qZA(),t.YNc(11,P,2,0,"small",10),t.qZA(),t.TgZ(12,"div",3)(13,"div",4)(14,"span",5),t._UZ(15,"i",11),t.qZA(),t._UZ(16,"input",12),t.qZA(),t.YNc(17,b,2,0,"small",10),t.qZA(),t.TgZ(18,"div",3)(19,"div",4)(20,"span",5),t.O4$(),t.TgZ(21,"svg",13),t._UZ(22,"path",14)(23,"path",15),t.qZA()(),t.kcU(),t._UZ(24,"input",16),t.qZA(),t.YNc(25,C,2,0,"small",10),t.qZA(),t.TgZ(26,"div",3)(27,"div",4)(28,"span",5),t.O4$(),t.TgZ(29,"svg",17),t._UZ(30,"path",18),t.qZA()(),t.kcU(),t._UZ(31,"textarea",19),t.qZA(),t.YNc(32,_,2,0,"small",10),t.qZA(),t.YNc(33,O,10,3,"ng-container",20),t.ALo(34,"async"),t.TgZ(35,"button",21),t._uU(36),t.qZA()()()()()),2&e&&(t.xp6(3),t.Q6J("formGroup",n.form),t.xp6(7),t.ekj("is-invalid",(null==n.getName?null:n.getName.invalid)&&(null==n.getName?null:n.getName.touched)),t.xp6(1),t.Q6J("ngIf",(null==n.getName?null:n.getName.invalid)&&(null==n.getName?null:n.getName.touched)),t.xp6(5),t.ekj("is-invalid",(null==n.getPrice?null:n.getPrice.invalid)&&(null==n.getPrice?null:n.getPrice.touched)),t.xp6(1),t.Q6J("ngIf",(null==n.getPrice?null:n.getPrice.invalid)&&(null==n.getPrice?null:n.getPrice.touched)),t.xp6(7),t.ekj("is-invalid",(null==n.getImage?null:n.getImage.invalid)&&(null==n.getImage?null:n.getImage.touched)),t.xp6(1),t.Q6J("ngIf",(null==n.getImage?null:n.getImage.invalid)&&(null==n.getImage?null:n.getImage.touched)),t.xp6(6),t.ekj("is-invalid",(null==n.getDescription?null:n.getDescription.invalid)&&(null==n.getDescription?null:n.getDescription.touched)),t.xp6(1),t.Q6J("ngIf",(null==n.getDescription?null:n.getDescription.invalid)&&(null==n.getDescription?null:n.getDescription.touched)),t.xp6(1),t.Q6J("ngIf",t.lcZ(34,15,n.categories$)),t.xp6(3),t.Oqu(n.productId?"Update":"Create"))},dependencies:[l.sg,l.O5,r._Y,r.YN,r.Kr,r.Fj,r.wV,r.EJ,r.JJ,r.JL,r.sg,r.u,l.Ov],styles:["body[_ngcontent-%COMP%]{background:#333}#login[_ngcontent-%COMP%]{perspective:1000px;margin-top:50px;margin-left:30%}.login[_ngcontent-%COMP%]{font-family:Josefin Sans,sans-serif;transition:.3s}.login[_ngcontent-%COMP%]:hover{transform:rotate(0)}.login[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:17px}.login[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{border-radius:0}.login[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{text-transform:uppercase;letter-spacing:3px}.input-group-addon[_ngcontent-%COMP%]{border-radius:0;color:#fff;background:#f3aa0c;border:#f3aa0c}.forgot[_ngcontent-%COMP%]{font-size:16px}.forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#333}.forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#5cb85c}#inner-wrapper[_ngcontent-%COMP%], #contact-us[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%], #contact-us[_ngcontent-%COMP%]   .our-address[_ngcontent-%COMP%]{color:#1d1d1d;font-size:19px;line-height:1.7em;font-weight:300;padding:50px;background:#fff;box-shadow:0 2px 5px #00000029,0 2px 10px #0000001f;margin-bottom:100px}.input-group-addon[_ngcontent-%COMP%]{border-radius:0/0 0px 0px 0;color:#fff;background:#f3aa0c;border:#f3aa0c;border-right-color:#f3aa0c;border-right-style:none;border-right-width:medium}"]}),o})();function I(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"th",7),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"img",8),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td")(13,"button",9),t._UZ(14,"i",10),t.qZA(),t.TgZ(15,"button",11),t.NdJ("click",function(){const s=t.CHM(e).$implicit,U=t.oxw();return t.KtG(U.deleteItem(s.id))}),t._UZ(16,"i",12),t.qZA()()()}if(2&o){const e=i.$implicit,n=i.index;t.xp6(2),t.Oqu(n+1),t.xp6(2),t.Q6J("src",e.image,t.LSH),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(t.xi3(9,6,e.price,"USD")),t.xp6(3),t.Oqu(null==e||null==e.category?null:e.category.name),t.xp6(2),t.MGl("routerLink","/manager/products/edit/",e.id,"")}}const M=[{path:"",component:(()=>{class o{constructor(e){this.productService=e,this.products=[]}ngOnInit(){this.getAll()}getAll(){this.productService.getProducts({}).pipe().subscribe(e=>{this.products=e})}deleteItem(e){this.productService.deleteItem(e).pipe().subscribe(n=>{this.getAll()})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.su))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-products"]],decls:26,vars:1,consts:[[1,"container"],[1,"d-flex","justify-content-between","align-items-center"],["routerLink","/manager/products/create",1,"btn","btn-dark"],[1,"table","m-3"],[1,"thead-light"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[2,"width","50px",3,"src"],[1,"btn","btn-outline-secondary","btn-right-spacing",3,"routerLink"],[1,"fas","fa-edit","errspan"],[1,"btn","btn-outline-danger","btn-right-spacing",3,"click"],["aria-hidden","true",1,"fa","fa-trash","errspan"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"h4"),t._uU(4,"Products"),t.qZA()(),t.TgZ(5,"div")(6,"button",2),t._uU(7,"Add Product"),t.qZA()()()(),t.TgZ(8,"table",3)(9,"thead",4)(10,"tr")(11,"th",5),t._uU(12,"#"),t.qZA(),t.TgZ(13,"th",5),t._uU(14,"Image"),t.qZA(),t.TgZ(15,"th",5),t._uU(16,"Title"),t.qZA(),t.TgZ(17,"th",5),t._uU(18,"Price"),t.qZA(),t.TgZ(19,"th",5),t._uU(20,"Category"),t.qZA(),t.TgZ(21,"th",5),t._uU(22,"actions"),t.qZA()()(),t.TgZ(23,"tbody"),t.ynx(24),t.YNc(25,I,17,9,"tr",6),t.BQk(),t.qZA()()),2&e&&(t.xp6(25),t.Q6J("ngForOf",n.products))},dependencies:[l.sg,d.rH,l.H9]}),o})()},{path:"create",component:m},{path:"edit/:id",component:m}];let q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(M),d.Bz]}),o})(),y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.ez,q,r.UX]}),o})()}}]);