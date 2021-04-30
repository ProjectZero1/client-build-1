(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["b09218ce"],{"13e9d":function(t,e,i){},"1dc3":function(t,e,i){"use strict";var s=i("13e9d"),r=i.n(s);r.a},"52d8":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticClass:"grey-bg"},[i("loading",{attrs:{query:t.$apollo.queries.group}},[i("div",{attrs:{slot:"loading"},slot:"loading"},[i("content-placeholders",{attrs:{rounded:!0}},[i("content-placeholders-img")],1)],1)]),i("scroll",[t.filteredResources.length?t._l(t.filteredResources,function(e){return i("render-class-resource",{key:e.id,staticClass:"q-ml-xs q-mr-xs cursor-pointer compact",attrs:{value:e,"enable-link":"","hide-actions":"",compact:""},nativeOn:{click:function(i){t.loadDetail(i,"/curricula/"+e.id)}}})}):[i("q-alert",{staticClass:"q-mx-md q-mt-sm",attrs:{color:"info",icon:"error",appear:""}},[t._v("\n        There are no "+t._s(t.typeLabel.toLowerCase())+" resources associated with this class.\n      ")])]],2)],1)},r=[];s._withStripped=!0;i("7f7f");var n=i("3156"),a=i.n(n),o=i("2f62"),l=i("80e9"),c=i("f6ed"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-card",{staticClass:"bg-white text-dark class-resource-card"},[i("q-card-media",{staticClass:"carousel-preview",staticStyle:{"border-radius":"3px"}},[t.value.image?i("aws-image",{attrs:{src:t.value.image,default:"https://images.pexels.com/photos/1068989/pexels-photo-1068989.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}}):t._e()],1),i("div",{staticClass:"ellipsis q-pt-md q-pb-xs",staticStyle:{"font-weight":"700"}},[t._v(t._s(t.value.title))]),i("q-card-main",{staticStyle:{padding:"8px 0 0"}},[i("div",{staticClass:"resource-carousel-categories q-mb-sm text-weight-bold text-faded ellipsis"},[t._v(t._s(t.categoryList(t.value)))]),i("div",{staticClass:"flex items-center"},[i("div",{staticClass:"lower-item no-bg flex items-center clickable cursor-pointer",staticStyle:{"margin-bottom":"4px"},on:{click:function(e){t.loadDetail(e,"/curricula/"+t.value.id+"/reviews",!0)}}},[i("span",{staticStyle:{"font-weight":"700",color:"#FF8310","font-size":"15px",position:"relative",top:"-4px","margin-right":"5px"}},[t._v(t._s(parseFloat(Math.round(100*t.value.rating)/100).toFixed(1)))]),i("q-rating",{staticClass:"text-center",attrs:{slot:"subtitle",readonly:"",max:5,icon:"fa fa-star"},slot:"subtitle",model:{value:t.value.rating,callback:function(e){t.$set(t.value,"rating",e)},expression:"value.rating"}})],1),i("div",{staticClass:"lower-item no-bg flex items-center q-pl-md",staticStyle:{"margin-bottom":"12px"}},[i("div",{staticClass:"lower-item-left q-mr-md"},[i("i",{staticClass:"fa fa-clock"})]),t._v("\n      "+t._s(t.formatDuration(t.value.duration))+"\n    ")]),i("div",{staticClass:"lower-item no-bg flex items-center q-pl-md",staticStyle:{"margin-bottom":"16px"}},[i("div",{staticClass:"lower-item-left q-mr-md"},[i("i",{staticClass:"fa fa-pencil-ruler"})]),t._v("\n      "+t._s(t.formatAgeRange(t.value.ageFrom,t.value.ageTo))+"\n    ")])])]),i("schedule-resource",{attrs:{resource:t.value},model:{value:t.schedulerOpened,callback:function(e){t.schedulerOpened=e},expression:"schedulerOpened"}})],1)},h=[];u._withStripped=!0;var d=i("858b"),g=i("2bb2"),p=i("4eef"),f=i("5e20"),m=i("fcab"),F=i("d1ac"),b={name:"RenderClassResource",mixins:[d["a"],g["a"]],components:{RenderResourceList:p["a"],RenderResourceChildren:f["a"],awsImage:m["a"],scheduleResource:F["a"]},methods:{sendMessage:function(t){console.log("Sendmessage "+t+" cicked")}},data:function(){return{schedulerOpened:!1}},props:{value:Object,enableLink:Boolean,compact:Boolean,hideActions:Boolean}},v=b,w=(i("1dc3"),i("2877")),C=Object(w["a"])(v,u,h,!1,null,null,null);C.options.__file="renderClassResource.vue";var y=C.exports,A=i("5cc5"),S=A["b"].standard,k=function(t){return 1},_={name:"ShowGroupCurriculum",mixins:[d["a"],c["a"],g["a"]],components:{RenderClassResource:y},data:function(){return{easing:S,resources:[],group:null,session:null,screenAvailable:!1,test:1}},created:function(){this.updateActions(),this.$store.commit("app/setAnimations",{enterAnimation:"none",leaveAnimation:"none"})},methods:a()({present:function(){var t=["https://www.boredkids.org/auth/testExternal"],e=new PresentationRequest(t);e.start().then(function(){alert("yo")})},updateHeader:function(){this.pageMeta({subtitle:this.group.name,title:[this.typeLabel,"Content"].join(" ")})},updateActions:function(){this.headerActions([])},sendMessage:function(t){this.session.postMessage("Test message from phone: "+t)}},Object(o["b"])({pageMeta:"app/setPageMeta",headerActions:"app/setHeaderActions"})),watch:{"group.name":function(){this.updateHeader()}},computed:{typeLabel:function(){var t=this.$route.query.type,e="";return"COURSE"===t&&(e="Playlist"),"LESSON"===t&&(e="Module"),"ACTIVITY"===t&&(e="Activity"),e},slideNumber:{get:function(){return this.$store.state.app.currentSlide},set:function(t){-1!==t&&this.$store.commit("app/setCurrentSlide",t)}},filteredResources:function(){var t=this.$route.query.type;return t?this.resources.filter(function(e){return e.type===t}):this.resources}},apollo:{group:{query:l["j"],fetchPolicy:"cache-and-network",result:function(t){if(t.data&&(this.resources=t.data.group.resources,this.$refs.carousel&&this.$store.state.app.currentSlide)){this.easing=k,this.$refs.carousel.goToSlide(this.$store.state.app.currentSlide);var e=this;setTimeout(function(){e.easing=S},1e3)}},variables:function(){return{id:this.$route.params.id}}}}},x=_,q=Object(w["a"])(x,s,r,!1,null,null,null);q.options.__file="ClassCurriculum.vue";e["default"]=q.exports},f6ed:function(t,e,i){"use strict";i.d(e,"a",function(){return c});var s=i("3156"),r=i.n(s),n=i("2f62"),a=i("b0d5"),o=i("2743"),l=[{label:"Playlists",value:"COURSE"},{label:"Modules",value:"LESSON"},{label:"Activities",value:"ACTIVITY",default:!0}],c={mixins:[o["a"]],created:function(){this.$store.dispatch("app/setFilterOptions",l)},data:function(){return{bookmarked:!1,featured:!1,scheduled:!1,filterModal:!1,modalFilter:null,categories:[]}},computed:r()({currentFilterType:function(){var t=this;if(this.currentFilter){var e=l.filter(function(e){return e.value===t.currentFilter});return e.length?e[0].label:void 0}},hasFilter:function(){return!this.bookmarked&&(this.contentFilter.searchString||this.enableStatus&&this.contentFilter.status||this.contentFilter.resourceCategory||this.contentFilter.resourceCategories&&this.contentFilter.resourceCategories.length||this.contentFilter.categories&&this.contentFilter.categories.length||this.contentFilter.youthOutcomes&&this.contentFilter.youthOutcomes.length||this.contentFilter.contentStandards&&this.contentFilter.contentStandards.length||this.contentFilter.ageAbove||this.contentFilter.ageBelow&&this.contentFilter.ageBelow<20||this.contentFilter.gradeAbove||this.contentFilter.gradeBelow&&this.contentFilter.gradeBelow<12||this.contentFilter.durations&&this.contentFilter.durations.length||this.contentFilter.publishers&&this.contentFilter.publishers.length||this.contentFilter.ratingAbove||this.contentFilter.ratingBelow&&this.contentFilter.ratingBelow<5)}},Object(n["c"])("app",["currentFilter","searchString","contentFilter"])),methods:{openFilter:function(){this.modalFilter=Object(a["a"])({},this.contentFilter),this.filterModal=!0},resetFlags:function(){this.after=null,this.categories=[],this.featured=this.bookmarked=this.scheduled=!1},toggleFeatured:function(){this.after=null,this.categories=[],this.bookmarked=!1,this.scheduled=!1,this.featured=!this.featured},toggleBookmarked:function(){this.after=null,this.categories=[],this.featured=!1,this.scheduled=!1,this.bookmarked=!this.bookmarked},toggleScheduled:function(){this.after=null,this.categories=[],this.featured=!1,this.scheduled=!this.scheduled,this.bookmarked=!1},applyFilter:function(){this.resetFlags(),this.$store.dispatch("app/setContentFilter",this.modalFilter)},clearFilter:function(){this.modalFilter={searchString:null,categories:[],ageAbove:null,ageBelow:null,gradeAbove:null,gradeBelow:null,durations:[],subjects:[],publishers:[],ratingAbove:null,ratingBelow:null,type:null,resourceCategory:null,youthOutcomes:[],contentStandards:[],status:null}},constructFilter:function(){var t={filter:{AND:[{type:this.currentFilter}]}};return this.after&&(t.after=this.after),this.contentFilter.status&&this.enableStatus&&(t.filter.status=this.contentFilter.status),this.enableStatus||delete t.filter.status,this.featured?(t.filter.featured=!0,t):this.bookmarked?(t.filter.bookmarked=!0,t):(this.scheduled&&"ACTIVITY"===this.currentFilter&&(t.filter.scheduled=!0),this.contentFilter.searchString&&t.filter.AND.push({OR:[{title_contains:this.contentFilter.searchString},{introduction_contains:this.contentFilter.searchString}]}),this.hasFilter&&(this.contentFilter.categories&&this.contentFilter.categories.length&&t.filter.AND.push({categories_some:{id_in:this.contentFilter.categories}}),this.contentFilter.resourceCategory&&t.filter.AND.push({resourceCategory:{id:this.contentFilter.resourceCategory}}),this.contentFilter.resourceCategories&&this.contentFilter.resourceCategories.length&&t.filter.AND.push({resourceCategory:{id_in:this.contentFilter.resourceCategories}}),this.contentFilter.publishers&&this.contentFilter.publishers.length&&t.filter.AND.push({organization:{id_in:this.contentFilter.publishers}}),this.contentFilter.durations&&this.contentFilter.durations.length&&t.filter.AND.push({OR:this.contentFilter.durations.map(function(t){return JSON.parse(t)})}),void 0!==this.contentFilter.gradeAbove&&null!==this.contentFilter.gradeAbove&&t.filter.AND.push({gradeFrom_lte:this.contentFilter.gradeAbove}),void 0!==this.contentFilter.gradeBelow&&null!==this.contentFilter.gradeBelow&&this.contentFilter.gradeBelow<12&&t.filter.AND.push({gradeTo_gte:this.contentFilter.gradeBelow}),this.contentFilter.ratingAbove&&t.filter.AND.push({rating_gte:this.contentFilter.ratingAbove}),this.contentFilter.ratingBelow&&this.contentFilter.ratingBelow<5&&t.filter.AND.push({rating_lte:this.contentFilter.ratingBelow})),t)}}}}}]);