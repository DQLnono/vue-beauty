webpackJsonp([21,49],{3:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{type:{type:String,"default":"props"},head:Array,content:Array,apis:Array,title:{type:String,"default":"API"}},ready:function(){if(!this.head)switch(this.type){case"props":this.$set("head",["参数","说明","类型","默认值"]);break;case"events":this.$set("head",["事件名","说明","参数"]);break;case"methods":this.$set("head",["方法名","说明","参数","返回值"])}}}},4:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,".markdown>table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #e9e9e9;width:100%;margin-bottom:24px}.markdown>table th{white-space:nowrap;color:#5c6b77;font-weight:600;background:#f7f7f7}.markdown>table td,.markdown>table th{border:1px solid #e9e9e9;padding:8px 16px;text-align:left}.markdown.api-container table{font-family:Consolas,Menlo,Courier,monospace;font-size:13px}",""])},5:function(e,t,o){var n=o(4);"string"==typeof n&&(n=[[e.id,n,""]]);o(2)(n,{});n.locals&&(e.exports=n.locals)},6:function(e,t){e.exports=' <section class="markdown api-container"> <h2>{{ title }}</h2> <slot></slot> <table> <thead> <tr> <th v-for="text in head" v-html=text></th> </tr> </thead> <tbody> <tr v-for="item in content"> <td v-for="text in item" v-html=text track-by=$index></td> </tr> <tr v-for="api in apis"> <td v-for="text in api" v-html=text track-by=$index></td> </tr> </tbody> </table> </section> '},7:function(e,t,o){var n,a,i={};o(5),n=o(3),a=o(6),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(r.template=a),r.computed||(r.computed={}),Object.keys(i).forEach(function(e){var t=i[e];r.computed[e]=function(){return t}})},8:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{title:String,describe:String,code:String},data:function(){return{open:!1}},ready:function(){var e=this,t=this._slotContents["default"].childNodes;t=Array.prototype.filter.call(t,function(e){return 1===e.nodeType}),this.code||(this.code=t.map(function(e){return e.outerHTML.replace(/\t| {4}/g,"")}).join("<br>"),console.log(this.code)),this.$nextTick(function(){hljs.highlightBlock(e.$el.querySelector("pre code"))})},methods:{handleOpen:function(){this.open=!this.open}}}},9:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,'.code-box{border:1px solid #e9e9e9;border-radius:6px;display:inline-block;width:100%;position:relative;margin:0 0 16px;-webkit-transition:all .2s ease;transition:all .2s ease}.code-box .collapse{position:absolute;right:16px;bottom:16px;cursor:pointer;width:18px;height:18px;font-size:18px;line-height:18px;opacity:.5;text-align:center;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .3s ease;transition:all .3s ease;color:#999;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:100%}.code-box .collapse:hover{opacity:1}.code-box:hover{box-shadow:0 0 6px rgba(0,0,0,.15);position:relative;z-index:10;background:#fff}.code-box:hover .code-box-title{background:#fbfbfb;box-shadow:0 -1.2px 0 #e9e9e9}.code-box:hover .code-box-meta{background:#fbfbfb}.code-box .code-box-demo{border-bottom:1px solid #e9e9e9;padding:42px 20px 50px}.code-box .highlight-wrapper{max-height:0;opacity:0;overflow:auto;-webkit-transition:all .4s ease;transition:all .4s ease;border-radius:0 0 6px 6px}.code-box .highlight-wrapper-expand{max-height:500px;opacity:1}.code-box.expand .collapse{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.code-box.expand .code-box-meta{border-radius:0;border-bottom:1px dashed #e9e9e9}.code-box-meta{position:relative;padding:16px;border-radius:0 0 6px 6px;-webkit-transition:background-color .4s ease;transition:background-color .4s ease;width:100%;font-size:12px}.code-box-meta p{margin:0}.code-box-title{position:absolute;top:-14px;padding:1px 1.1em;color:#777;border-radius:6px;background:#fff;-webkit-transition:all .4s ease;transition:all .4s ease}.code-box-title:before{font-family:anticon;content:"\\E6D2";font-size:16px;vertical-align:middle;line-height:22px;position:relative;margin-right:8px;top:-2px;color:#ccc;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);display:inline-block}.code-box .code-box-title a,.code-box .code-box-title a:hover{color:#666;font-size:14px}.highlight{line-height:1.5}.highlight pre{margin:0;padding:0;background:#fff;width:auto}.highlight pre code{display:block;color:#666;line-height:1.7;border:1px solid #e9e9e9;padding:10px 15px;border-radius:6px;font-size:13px;border:none;background:#fff}.hljs{background:none}',""])},10:function(e,t,o){var n=o(9);"string"==typeof n&&(n=[[e.id,n,""]]);o(2)(n,{});n.locals&&(e.exports=n.locals)},11:function(e,t){e.exports=' <section class=code-box :class="{\'expand\': open}"> <section class=code-box-demo> <slot></slot> </section> <section class="code-box-meta markdown"> <div class=code-box-title><a>{{ title }}</a></div> <div><p>{{ describe }}</p></div> <span class="collapse anticon anticon-circle-o-right" @click=handleOpen></span> </section> <section class=highlight-wrapper :class="{\'highlight-wrapper-expand\': open}"> <div class=highlight> <pre><code class=html>{{ code }}</code></pre> </div> </section> </section> '},12:function(e,t,o){var n,a,i={};o(10),n=o(8),a=o(11),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(r.template=a),r.computed||(r.computed={}),Object.keys(i).forEach(function(e){var t=i[e];r.computed[e]=function(){return t}})},281:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(79),i=n(a),r=o(18),s=n(r),l=o(12),d=n(l),p=o(7),c=n(p);t["default"]={data:function(){return{apis:[{parameter:"min",explain:"最小值",type:"Number","default":"-Infinity"},{parameter:"max",explain:"最大值",type:"Number","default":"Infinity"},{parameter:"value",explain:"当前值",type:"Number","default":"无"},{parameter:"step",explain:"每次改变步数，可以为小数",type:"Number","default":"1"},{parameter:"defaultValue",explain:"初始值",type:"Number","default":"无"},{parameter:"onChange",explain:"变化回调",type:"Function","default":"无"},{parameter:"disabled",explain:"禁用",type:"Boolean","default":"false"},{parameter:"size",explain:"输入框大小",type:"String","default":"无"}],disabled:!0}},components:{vInputNumber:i["default"],vButton:s["default"],codeBox:d["default"],apiTable:c["default"]},methods:{_handleChange:function(e){console.log("changed ",e)},_toggle:function(){this.disabled=!this.disabled}}}},379:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,"",""])},436:function(e,t,o){var n=o(379);"string"==typeof n&&(n=[[e.id,n,""]]);o(2)(n,{});n.locals&&(e.exports=n.locals)},568:function(e,t){e.exports=" <div> <section class=markdown> <h1>InputNumber 数字输入框</h1> <p> 通过鼠标或键盘，输入范围内的数值。 </p> <h2>何时使用</h2> <ul> <p> 当需要获取标准数值时。 </p> </ul> <h2>组件演示</h2> </section> <div class=ant-row style=\"margin-left: -8px; margin-right: -8px\"> <div class=\"ant-col-lg-12 code-boxes-col-2-1\"> <code-box title=基本 describe=数字输入框。 code=\"<v-input-number min='1'' max='10'' default-value='3'' :on-change='_handleChange'></v-input-number>\"> <v-input-number min=1 max=10 default-value=3 :on-change=_handleChange></v-input-number> </code-box> <code-box title=不可用 describe=点击按钮切换可用状态。 code=\"<v-input-number min='1' max='10'' :disabled='disabled'' default-value='3'></v-input-number>\n<v-button @click='_toggle'' type='primary'>Toggle disabled</v-button>\"> <v-input-number min=1 max=10 :disabled=disabled default-value=3></v-input-number> <br><br> <v-button @click=_toggle type=primary>Toggle disabled</v-button> </code-box> </div> <div class=\"ant-col-lg-12 code-boxes-col-2-1\"> <code-box title=三种大小 describe=\"三种大小的数字输入框，当 size 分别为 large 和 small 时，输入框高度为 32px 和 22px ，默认高度为 28px\" code=\"<v-input-number size='large' min='1' max='100000' default-value='3' :on-change='_handleChange'></v-input-number>\n<v-input-number min='1' max='100000' default-value='3' :on-change='_handleChange'></v-input-number>\n<v-input-number size='small' min='1' max='100000' default-value='3' :on-change='_handleChange'></v-input-number>\"> <v-input-number size=large min=1 max=100000 default-value=3 :on-change=_handleChange></v-input-number> <v-input-number min=1 max=100000 default-value=3 :on-change=_handleChange></v-input-number> <v-input-number size=small min=1 max=100000 default-value=3 :on-change=_handleChange></v-input-number> </code-box> <code-box title=小数 describe=\"和原生的数字输入框一样，value 的精度由 step 的小数位数决定。\" code=\"<v-button type='primary'>Primary</v-button>\n<v-button type='primary' disabled>Primary</v-button>\"> <v-input-number min=1 max=10 step=0.1></v-input-number> </code-box> </div> </div> <api-table :apis=apis></api-table> </div> "},686:function(e,t,o){var n,a,i={};o(436),n=o(281),a=o(568),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(r.template=a),r.computed||(r.computed={}),Object.keys(i).forEach(function(e){var t=i[e];r.computed[e]=function(){return t}})}});