webpackJsonp([15,49],{3:function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{type:{type:String,"default":"props"},head:Array,content:Array,apis:Array,title:{type:String,"default":"API"}},ready:function(){if(!this.head)switch(this.type){case"props":this.$set("head",["参数","说明","类型","默认值"]);break;case"events":this.$set("head",["事件名","说明","参数"]);break;case"methods":this.$set("head",["方法名","说明","参数","返回值"])}}}},4:function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".markdown>table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #e9e9e9;width:100%;margin-bottom:24px}.markdown>table th{white-space:nowrap;color:#5c6b77;font-weight:600;background:#f7f7f7}.markdown>table td,.markdown>table th{border:1px solid #e9e9e9;padding:8px 16px;text-align:left}.markdown.api-container table{font-family:Consolas,Menlo,Courier,monospace;font-size:13px}",""])},5:function(e,o,t){var i=t(4);"string"==typeof i&&(i=[[e.id,i,""]]);t(2)(i,{});i.locals&&(e.exports=i.locals)},6:function(e,o){e.exports=' <section class="markdown api-container"> <h2>{{ title }}</h2> <slot></slot> <table> <thead> <tr> <th v-for="text in head" v-html=text></th> </tr> </thead> <tbody> <tr v-for="item in content"> <td v-for="text in item" v-html=text track-by=$index></td> </tr> <tr v-for="api in apis"> <td v-for="text in api" v-html=text track-by=$index></td> </tr> </tbody> </table> </section> '},7:function(e,o,t){var i,l,a={};t(5),i=t(3),l=t(6),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var d="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;l&&(d.template=l),d.computed||(d.computed={}),Object.keys(a).forEach(function(e){var o=a[e];d.computed[e]=function(){return o}})},8:function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{title:String,describe:String,code:String},data:function(){return{open:!1}},ready:function(){var e=this,o=this._slotContents["default"].childNodes;o=Array.prototype.filter.call(o,function(e){return 1===e.nodeType}),this.code||(this.code=o.map(function(e){return e.outerHTML.replace(/\t| {4}/g,"")}).join("<br>"),console.log(this.code)),this.$nextTick(function(){hljs.highlightBlock(e.$el.querySelector("pre code"))})},methods:{handleOpen:function(){this.open=!this.open}}}},9:function(e,o,t){o=e.exports=t(1)(),o.push([e.id,'.code-box{border:1px solid #e9e9e9;border-radius:6px;display:inline-block;width:100%;position:relative;margin:0 0 16px;-webkit-transition:all .2s ease;transition:all .2s ease}.code-box .collapse{position:absolute;right:16px;bottom:16px;cursor:pointer;width:18px;height:18px;font-size:18px;line-height:18px;opacity:.5;text-align:center;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .3s ease;transition:all .3s ease;color:#999;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:100%}.code-box .collapse:hover{opacity:1}.code-box:hover{box-shadow:0 0 6px rgba(0,0,0,.15);position:relative;z-index:10;background:#fff}.code-box:hover .code-box-title{background:#fbfbfb;box-shadow:0 -1.2px 0 #e9e9e9}.code-box:hover .code-box-meta{background:#fbfbfb}.code-box .code-box-demo{border-bottom:1px solid #e9e9e9;padding:42px 20px 50px}.code-box .highlight-wrapper{max-height:0;opacity:0;overflow:auto;-webkit-transition:all .4s ease;transition:all .4s ease;border-radius:0 0 6px 6px}.code-box .highlight-wrapper-expand{max-height:500px;opacity:1}.code-box.expand .collapse{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.code-box.expand .code-box-meta{border-radius:0;border-bottom:1px dashed #e9e9e9}.code-box-meta{position:relative;padding:16px;border-radius:0 0 6px 6px;-webkit-transition:background-color .4s ease;transition:background-color .4s ease;width:100%;font-size:12px}.code-box-meta p{margin:0}.code-box-title{position:absolute;top:-14px;padding:1px 1.1em;color:#777;border-radius:6px;background:#fff;-webkit-transition:all .4s ease;transition:all .4s ease}.code-box-title:before{font-family:anticon;content:"\\E6D2";font-size:16px;vertical-align:middle;line-height:22px;position:relative;margin-right:8px;top:-2px;color:#ccc;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);display:inline-block}.code-box .code-box-title a,.code-box .code-box-title a:hover{color:#666;font-size:14px}.highlight{line-height:1.5}.highlight pre{margin:0;padding:0;background:#fff;width:auto}.highlight pre code{display:block;color:#666;line-height:1.7;border:1px solid #e9e9e9;padding:10px 15px;border-radius:6px;font-size:13px;border:none;background:#fff}.hljs{background:none}',""])},10:function(e,o,t){var i=t(9);"string"==typeof i&&(i=[[e.id,i,""]]);t(2)(i,{});i.locals&&(e.exports=i.locals)},11:function(e,o){e.exports=' <section class=code-box :class="{\'expand\': open}"> <section class=code-box-demo> <slot></slot> </section> <section class="code-box-meta markdown"> <div class=code-box-title><a>{{ title }}</a></div> <div><p>{{ describe }}</p></div> <span class="collapse anticon anticon-circle-o-right" @click=handleOpen></span> </section> <section class=highlight-wrapper :class="{\'highlight-wrapper-expand\': open}"> <div class=highlight> <pre><code class=html>{{ code }}</code></pre> </div> </section> </section> '},12:function(e,o,t){var i,l,a={};t(10),i=t(8),l=t(11),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var d="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;l&&(d.template=l),d.computed||(d.computed={}),Object.keys(a).forEach(function(e){var o=a[e];d.computed[e]=function(){return o}})},292:function(e,o,t){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var l=t(86),a=i(l),d=t(78),n=i(d),r=t(50),s=i(r),b=t(39),c=i(b),v=t(18),f=i(v),p=t(12),m=i(p),u=t(7),x=i(u),h=n["default"].Item,_=c["default"].Group;o["default"]={data:function(){return{content:[["show","控制queueAnim组件的显示隐藏","bool","true"],["type","动画内置参数 left right top bottom scale scaleBig scaleX scaleY","string / array","right"],["animConfig","配置动画参数 如 {opacity:[1, 0],translateY:[0, -30]} 具体参考 velocity 的写法","object / array","null"],["delay","整个动画的延时,以毫秒为单位","number / array","0"],["duration","每个动画的时间,以毫秒为单位","number / array","500"],["interval","每个动画的间隔时间,以毫秒为单位","number / array","100"],["leaveReverse","出场时是否倒放,从最后一个 dom 开始往上播放","boolean","false"],["ease",'动画的缓动函数,<a href="http://velocityjs.org/#easing" target="_blank">查看详细</a>',"string / array","easeOutQuart"],["animatingClassName","进出场动画进行中的类名","array","['queue-anim-entering', 'queue-anim-leaving']"]],items:["1","2","3"],show:!0,labelCol:{span:6},wrapperCol:{span:14}}},components:{vQueueAnim:a["default"],vForm:n["default"],vRadio:c["default"],vRadioGroup:_,vFormItem:h,vInput:s["default"],vButton:f["default"],codeBox:m["default"],apiTable:x["default"]},methods:{_handleClick:function(){this.show=!this.show},_handleAdd:function(){var e=this.items.length+1;this.items.push(""+e)},_handleRemove:function(){this.items.pop()}}}},400:function(e,o,t){o=e.exports=t(1)(),o.push([e.id,'.code-box-demo .demo-header[_v-2b2316f6]{width:100%;background:#ebedee;height:30px}.code-box-demo .demo-header ul[_v-2b2316f6]{float:right;margin-right:5px}.code-box-demo .demo-header ul li[_v-2b2316f6]{width:50px;height:30px;float:left;background:#e4e4e4;margin-left:5px}.code-box-demo .demo-header ul li[_v-2b2316f6]:before{margin:10px auto;width:20px;height:10px;background:#ebeded}.code-box-demo .demo-header .logo[_v-2b2316f6]{float:left;margin:0 auto 0 10px;line-height:32px}.code-box-demo .demo-header .logo img[_v-2b2316f6]{margin:auto}.code-box-demo .demo-header .logo span[_v-2b2316f6]{display:block;float:right}.code-box-demo .demo-content[_v-2b2316f6]{width:80%;margin:10px auto}.code-box-demo .demo-content .demo-title[_v-2b2316f6]{text-align:left;background:#a4a4a4;width:40%;height:20px;line-height:20px;color:#ebeded;text-indent:10px}.code-box-demo .demo-content .demo-listBox[_v-2b2316f6]{margin-top:10px}.code-box-demo .demo-content .demo-listBox .demo-list .title[_v-2b2316f6]{height:30px;background:#cacaca;overflow:hidden}.code-box-demo .demo-content .demo-listBox .demo-list .title[_v-2b2316f6]:after,.code-box-demo .demo-content .demo-listBox .demo-list .title[_v-2b2316f6]:before{width:30%;height:5px;background:#ebeded;float:left;margin:12px 35px 0}.code-box-demo .demo-content .demo-listBox .demo-list .title[_v-2b2316f6]:after{width:15%;float:right;margin:12px 10px 0}.code-box-demo .demo-content .demo-listBox .demo-list ul li[_v-2b2316f6]{height:25px;background:#ebeded;border-bottom:1px solid #cacaca;overflow:hidden;padding:5px 15px}.code-box-demo .demo-content .demo-listBox .demo-list ul li[_v-2b2316f6]:before{width:10px;height:5px;background:#cacaca;float:left;margin-top:4px}.code-box-demo .demo-content .demo-listBox .demo-list ul li[_v-2b2316f6]:after{width:50%;height:5px;background:#cacaca;float:left;margin-left:10px;margin-top:4px}.code-box-demo .demo-content .demo-kp[_v-2b2316f6]{margin:10px auto}.code-box-demo .demo-content .demo-kp ul li[_v-2b2316f6]{display:inline-block;width:30%;height:40px;background:#cacaca;color:#ebeded;text-align:left;padding:10px;margin-right:2%}.code-box-demo .demo-content .demo-kp ul li[_v-2b2316f6]:last-child{margin-right:0}.code-box-demo .demo-content .demo-kp ul li[_v-2b2316f6]:after{width:60%;height:5px;background:#ebeded;float:left;margin-top:7px}.code-box-demo .demo-content .demo-kp ul li[_v-2b2316f6]:before{background:#ebeded;float:left;width:15px;height:15px;margin:2px 10% 0 0}.code-box-demo .demo-footer[_v-2b2316f6]{margin-top:10px;background:#cacaca;height:40px;float:left;width:100%;display:table}.code-box-demo .demo-footer[_v-2b2316f6]:before{width:60%;height:5px;background:#ededed;margin:10px auto 0}.code-box-demo .demo-footer[_v-2b2316f6]:after{width:30%;height:5px;background:#ededed;margin:5px auto}.code-box-demo .demo-content .demo-kp ul li[_v-2b2316f6]:after,.code-box-demo .demo-content .demo-kp ul li[_v-2b2316f6]:before,.code-box-demo .demo-content .demo-listBox .demo-list .title[_v-2b2316f6]:after,.code-box-demo .demo-content .demo-listBox .demo-list .title[_v-2b2316f6]:before,.code-box-demo .demo-content .demo-listBox .demo-list ul li[_v-2b2316f6]:after,.code-box-demo .demo-content .demo-listBox .demo-list ul li[_v-2b2316f6]:before,.code-box-demo .demo-footer[_v-2b2316f6]:after,.code-box-demo .demo-footer[_v-2b2316f6]:before,.code-box-demo .demo-header ul li[_v-2b2316f6]:before{display:block;content:""}.code-box-demo .buttons[_v-2b2316f6]{text-align:center;padding-top:20px;clear:both}.demo-list ul li[_v-2b2316f6]{height:25px;background:#ebeded;border-bottom:1px solid #cacaca;overflow:hidden;padding:5px 15px}.code-box-demo .ant-form-horizontal[_v-2b2316f6]{max-width:540px}',""])},461:function(e,o,t){var i=t(400);"string"==typeof i&&(i=[[e.id,i,""]]);t(2)(i,{});i.locals&&(e.exports=i.locals)},597:function(e,o){e.exports=' <div _v-2b2316f6=""> <section class=markdown _v-2b2316f6=""> <h1 _v-2b2316f6="">QueueAnim 进出场动画</h1> <p _v-2b2316f6=""> 通过简单的配置对一组元素添加串行的进场动画效果。 </p> <h2 _v-2b2316f6="">何时使用</h2> <ul _v-2b2316f6=""> <li _v-2b2316f6="">从内容A到内容B的转变过程时能有效的吸引用户注意力，突出视觉中心，提高整体视觉效果。</li> <li _v-2b2316f6="">小的信息元素排布或块状较多的情况下，根据一定的路径层次依次进场，区分维度层级，来凸显量级，使页面转场更加流畅和舒适，提高整体视觉效果和产品的质感。</li> <li _v-2b2316f6="">特别适合首页和需要视觉展示效果的宣传页，以及单页应用的切换页面动效。</li> </ul> <h2 _v-2b2316f6="">组件演示</h2> </section> <div class=ant-row style="margin-left: -8px; margin-right: -8px" _v-2b2316f6=""> <div class="ant-col-lg-12 code-boxes-col-2-1" _v-2b2316f6=""> <code-box title=默认 describe=最简单的进场例子。 _v-2b2316f6=""> <v-queue-anim :delay=1000 _v-2b2316f6=""> <div key=a _v-2b2316f6="">依次进场</div> <div key=b _v-2b2316f6="">依次进场</div> <div key=c _v-2b2316f6="">依次进场</div> <div key=d _v-2b2316f6="">依次进场</div> <div key=e _v-2b2316f6="">依次进场</div> <div key=f _v-2b2316f6="">依次进场</div> </v-queue-anim> </code-box> <code-box title=进场和离场 describe="通过把属性设置一个数组来分别表示进出场的效果，type、animConfig、delay、duration、interval、ease 等属性均支持配置为数组。" _v-2b2316f6=""> <v-queue-anim class=demo-content key=demo :show=show :type="[\'right\', \'left\']" :ease="[\'easeOutQuart\', \'easeInOutQuart\']" _v-2b2316f6=""> <div class=demo-kp key=a _v-2b2316f6=""> <ul _v-2b2316f6=""> <li _v-2b2316f6=""></li> <li _v-2b2316f6=""></li> <li _v-2b2316f6=""></li> </ul> </div> <div class=demo-listBox key=b _v-2b2316f6=""> <div class=demo-list _v-2b2316f6=""> <div class=title _v-2b2316f6=""></div> <ul _v-2b2316f6=""> <li _v-2b2316f6=""></li> <li _v-2b2316f6=""></li> <li _v-2b2316f6=""></li> </ul> </div> </div> </v-queue-anim> <p class=buttons _v-2b2316f6=""> <v-button type=primary @click=_handleClick _v-2b2316f6="">切换</v-button> </p> </code-box> <code-box title=表单动画进出场 describe=表单组合的进场与出场动画。 _v-2b2316f6=""> <v-queue-anim class=ant-form-horizontal type=bottom :leave-reverse=true :show=show _v-2b2316f6=""> <v-form direction=horizontal _v-2b2316f6=""> <v-form-item label=用户名 :label-col=labelCol :wrapper-col=wrapperCol key=name _v-2b2316f6=""> <p classname=ant-form-text id=userName name=userName _v-2b2316f6="">大眼萌 minion</p> </v-form-item> <v-form-item label=密码 :label-col=labelCol :wrapper-col=wrapperCol key=password _v-2b2316f6=""> <v-input type=password placeholder=请输入密码 size=large _v-2b2316f6=""></v-input> </v-form-item> <v-form-item label=您的性别 :label-col=labelCol :wrapper-col=wrapperCol key=sex _v-2b2316f6=""> <v-radio-group default-value=female :radios="[{value: \'male\', name: \'男的\'},{value: \'female\', name: \'女的\'}]" _v-2b2316f6=""> </v-radio-group> </v-form-item> <v-form-item label=备注 :label-col=labelCol :wrapper-col=wrapperCol key=remark _v-2b2316f6=""> <v-input type=textarea placeholder=随便写 _v-2b2316f6=""></v-input> </v-form-item> <v-form-item :wrapper-col={span:16,offset:6} style=margin-top:24px key=btn _v-2b2316f6=""> <v-button type=primary html-type=submit _v-2b2316f6="">确定</v-button> </v-form-item> </v-form> </v-queue-anim> <p class=buttons _v-2b2316f6=""> <v-button type=primary @click=_handleClick _v-2b2316f6="">切换</v-button> </p> </code-box> <code-box title=一个复杂些的例子 describe=模拟一个完整的页面。 _v-2b2316f6=""> <v-queue-anim :show=show :type="[\'right\', \'left\']" _v-2b2316f6=""> <div class=demo-header key=header _v-2b2316f6=""> <div class=logo _v-2b2316f6=""> <img width=30 src=https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg _v-2b2316f6=""> <span _v-2b2316f6="">logo</span> </div> <v-queue-anim _v-2b2316f6=""> <ul _v-2b2316f6=""> <li key=0 _v-2b2316f6=""></li> <li key=1 _v-2b2316f6=""></li> <li key=2 _v-2b2316f6=""></li> <li key=3 _v-2b2316f6=""></li> <li key=4 _v-2b2316f6=""></li> </ul> </v-queue-anim> </div> <v-queue-anim class=demo-content key=content :delay=300 _v-2b2316f6=""> <div class=demo-title key=title _v-2b2316f6="">我是标题</div> <v-queue-anim class=demo-kp key=b _v-2b2316f6=""> <v-queue-anim _v-2b2316f6=""> <ul _v-2b2316f6=""> <li key=0 _v-2b2316f6=""></li> <li key=1 _v-2b2316f6=""></li> <li key=2 _v-2b2316f6=""></li> </ul> </v-queue-anim> </v-queue-anim> <div class=demo-title key=title2 _v-2b2316f6="">我是标题</div> <div class=demo-listBox _v-2b2316f6=""> <v-queue-anim class=demo-list :delay=500 _v-2b2316f6=""> <div class=title key=title3 _v-2b2316f6=""></div> <v-queue-anim type=bottom key=li _v-2b2316f6=""> <ul _v-2b2316f6=""> <li key=0 _v-2b2316f6=""></li> <li key=1 _v-2b2316f6=""></li> <li key=2 _v-2b2316f6=""></li> <li key=3 _v-2b2316f6=""></li> <li key=4 _v-2b2316f6=""></li> </ul> </v-queue-anim> </v-queue-anim> </div> </v-queue-anim> <v-queue-anim type=bottom :delay=1000 key=footerBox _v-2b2316f6=""> <div class=demo-footer key=footer _v-2b2316f6=""></div> </v-queue-anim> </v-queue-anim> <p class=buttons _v-2b2316f6=""> <v-button type=primary @click=_handleClick _v-2b2316f6="">切换</v-button> </p> </code-box> </div> <div class="ant-col-lg-12 code-boxes-col-2-1" _v-2b2316f6=""> <code-box title=进场和离场 describe=同时支持进场和离场动画。 _v-2b2316f6=""> <v-queue-anim :show=show class=demo-content _v-2b2316f6=""> <div class=demo-kp key=a _v-2b2316f6=""> <ul _v-2b2316f6=""> <li _v-2b2316f6=""></li> <li _v-2b2316f6=""></li> <li _v-2b2316f6=""></li> </ul> </div> <div class=demo-listBox key=b _v-2b2316f6=""> <div class=demo-list _v-2b2316f6=""> <div class=title _v-2b2316f6=""></div> <ul _v-2b2316f6=""> <li _v-2b2316f6=""></li> <li _v-2b2316f6=""></li> <li _v-2b2316f6=""></li> </ul> </div> </div> </v-queue-anim> <p class=buttons _v-2b2316f6=""> <v-button type=primary @click=_handleClick _v-2b2316f6="">切换</v-button> </p> </code-box> <code-box title=自定义动画进出场 describe="通过 animConfig 来自定义动画进出场。" _v-2b2316f6=""> <v-queue-anim class=demo-content :show=show :anim-config="[{ opacity: [1, 0], translateY: [0, 50] },{ opacity: [1, 0], translateY: [0, -50] }]" _v-2b2316f6=""> <div class=demo-kp key=a _v-2b2316f6=""> <ul _v-2b2316f6=""> <li _v-2b2316f6=""></li> <li _v-2b2316f6=""></li> <li _v-2b2316f6=""></li> </ul> </div> <div class=demo-listBox key=b _v-2b2316f6=""> <div class=demo-list _v-2b2316f6=""> <div class=title _v-2b2316f6=""></div> <ul _v-2b2316f6=""> <li _v-2b2316f6=""></li> <li _v-2b2316f6=""></li> <li _v-2b2316f6=""></li> </ul> </div> </div> </v-queue-anim> <p class=buttons _v-2b2316f6=""> <v-button type=primary @click=_handleClick _v-2b2316f6="">切换</v-button> </p> </code-box> <code-box title=添加与删除 describe=场景里有增加或删除条目时也会触发动画。 _v-2b2316f6=""> <div class=demo-content _v-2b2316f6=""> <div class=demo-listBox key=b _v-2b2316f6=""> <div class=demo-list _v-2b2316f6=""> <div class=title _v-2b2316f6=""></div> <v-queue-anim :type="[\'right\', \'left\']" :watch-value=items :show=show _v-2b2316f6=""> <ul _v-2b2316f6=""> <li v-for="item in items" :key=Date.now() _v-2b2316f6=""></li> </ul> </v-queue-anim> </div> </div> </div> <p class=buttons _v-2b2316f6=""> <v-button type=primary @click=_handleClick _v-2b2316f6="">切换</v-button> <v-button @click=_handleAdd style="margin-left: 10px" _v-2b2316f6="">添加</v-button> <v-button @click=_handleRemove style="margin-left: 10px" _v-2b2316f6="">删除</v-button> </p> </code-box> </div> </div> <section class=markdown _v-2b2316f6=""> <h3 _v-2b2316f6="">API</h3> <p _v-2b2316f6="">元素依次进场</p> <pre _v-2b2316f6="">        <code class=html _v-2b2316f6="">&lt;v-queue-anim&gt;\n            &lt;div key=\'demo1\'&gt;依次进场&lt;/div&gt;\n            &lt;div key=\'demo2\'&gt;依次进场&lt;/div&gt;\n            &lt;div key=\'demo3\'&gt;依次进场&lt;/div&gt;\n            &lt;div key=\'demo4\'&gt;依次进场&lt;/div&gt;\n          &lt;/v-queue-anim&gt;</code>\n      </pre> <blockquote _v-2b2316f6=""> <p _v-2b2316f6="">每个子标签必须带 key，如果未设置 key 将不执行动画。</p> </blockquote> </section> <api-table :content=content _v-2b2316f6=""></api-table> </div> '},697:function(e,o,t){var i,l,a={};t(461),i=t(292),l=t(597),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var d="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;l&&(d.template=l),d.computed||(d.computed={}),Object.keys(a).forEach(function(e){var o=a[e];d.computed[e]=function(){return o}})}});