(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-300caa36","chunk-2d0de3cd"],{"487e":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"system"},[n("el-form",{ref:"form",staticClass:"system",attrs:{model:e.config,"label-width":"100px"}},[n("h2",[e._v("系统配置")]),e._v(" "),n("el-form-item",{attrs:{label:"多点登录拦截"}},[n("el-checkbox",{model:{value:e.config.system.useMultipoint,callback:function(t){e.$set(e.config.system,"useMultipoint",t)},expression:"config.system.useMultipoint"}},[e._v("开启")])],1),e._v(" "),n("el-form-item",{attrs:{label:"环境值"}},[n("el-input",{model:{value:e.config.system.env,callback:function(t){e.$set(e.config.system,"env",t)},expression:"config.system.env"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"端口值"}},[n("el-input",{model:{value:e.config.system.addr,callback:function(t){e.$set(e.config.system,"addr",t)},expression:"config.system.addr"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"数据库类型"}},[n("el-select",{model:{value:e.config.system.dbType,callback:function(t){e.$set(e.config.system,"dbType",t)},expression:"config.system.dbType"}},[n("el-option",{attrs:{value:"sqlite"}}),e._v(" "),n("el-option",{attrs:{value:"mysql"}})],1)],1),e._v(" "),n("h2",[e._v("jwt签名")]),e._v(" "),n("el-form-item",{attrs:{label:"jwt签名"}},[n("el-input",{model:{value:e.config.jwt.signingKey,callback:function(t){e.$set(e.config.jwt,"signingKey",t)},expression:"config.jwt.signingKey"}})],1),e._v(" "),n("h2",[e._v("casbin配置")]),e._v(" "),n("el-form-item",{attrs:{label:"模型地址"}},[n("el-input",{model:{value:e.config.casbin.modelPath,callback:function(t){e.$set(e.config.casbin,"modelPath",t)},expression:"config.casbin.modelPath"}})],1),e._v(" "),[n("h2",[e._v("mysql admin数据库配置")]),e._v(" "),n("el-form-item",{attrs:{label:"username"}},[n("el-input",{model:{value:e.config.mysql.username,callback:function(t){e.$set(e.config.mysql,"username",t)},expression:"config.mysql.username"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"password"}},[n("el-input",{model:{value:e.config.mysql.password,callback:function(t){e.$set(e.config.mysql,"password",t)},expression:"config.mysql.password"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"path"}},[n("el-input",{model:{value:e.config.mysql.path,callback:function(t){e.$set(e.config.mysql,"path",t)},expression:"config.mysql.path"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"dbname"}},[n("el-input",{model:{value:e.config.mysql.dbname,callback:function(t){e.$set(e.config.mysql,"dbname",t)},expression:"config.mysql.dbname"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"maxIdleConns"}},[n("el-input",{model:{value:e.config.mysql.maxIdleConns,callback:function(t){e.$set(e.config.mysql,"maxIdleConns",e._n(t))},expression:"config.mysql.maxIdleConns"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"maxOpenConns"}},[n("el-input",{model:{value:e.config.mysql.maxOpenConns,callback:function(t){e.$set(e.config.mysql,"maxOpenConns",e._n(t))},expression:"config.mysql.maxOpenConns"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"logMode"}},[n("el-checkbox",{model:{value:e.config.log.logMode,callback:function(t){e.$set(e.config.log,"logMode",t)},expression:"config.log.logMode"}})],1)],e._v(" "),[n("h2",[e._v("sqlite admin数据库配置")]),e._v(" "),n("el-form-item",{attrs:{label:"path"}},[n("el-input",{model:{value:e.config.sqlite.path,callback:function(t){e.$set(e.config.sqlite,"path",t)},expression:"config.sqlite.path"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"config"}},[n("el-input",{model:{value:e.config.sqlite.config,callback:function(t){e.$set(e.config.sqlite,"config",t)},expression:"config.sqlite.config"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"logMode"}},[n("el-checkbox",{model:{value:e.config.sqlite.logMode,callback:function(t){e.$set(e.config.sqlite,"logMode",t)},expression:"config.sqlite.logMode"}})],1)],e._v(" "),n("h2",[e._v("Redis admin数据库配置")]),e._v(" "),n("el-form-item",{attrs:{label:"addr"}},[n("el-input",{model:{value:e.config.redis.addr,callback:function(t){e.$set(e.config.redis,"addr",t)},expression:"config.redis.addr"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"password"}},[n("el-input",{model:{value:e.config.redis.password,callback:function(t){e.$set(e.config.redis,"password",t)},expression:"config.redis.password"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"db"}},[n("el-input",{model:{value:e.config.redis.db,callback:function(t){e.$set(e.config.redis,"db",t)},expression:"config.redis.db"}})],1),e._v(" "),n("h2",[e._v("七牛密钥配置")]),e._v(" "),n("el-form-item",{attrs:{label:"accessKey"}},[n("el-input",{model:{value:e.config.qiniu.accessKey,callback:function(t){e.$set(e.config.qiniu,"accessKey",t)},expression:"config.qiniu.accessKey"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"secretKey"}},[n("el-input",{model:{value:e.config.qiniu.secretKey,callback:function(t){e.$set(e.config.qiniu,"secretKey",t)},expression:"config.qiniu.secretKey"}})],1),e._v(" "),n("h2",[e._v("验证码配置")]),e._v(" "),n("el-form-item",{attrs:{label:"keyLong"}},[n("el-input",{model:{value:e.config.captcha.keyLong,callback:function(t){e.$set(e.config.captcha,"keyLong",e._n(t))},expression:"config.captcha.keyLong"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"imgWidth"}},[n("el-input",{model:{value:e.config.captcha.imgWidth,callback:function(t){e.$set(e.config.captcha,"imgWidth",e._n(t))},expression:"config.captcha.imgWidth"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"imgHeight"}},[n("el-input",{model:{value:e.config.captcha.imgHeight,callback:function(t){e.$set(e.config.captcha,"imgHeight",e._n(t))},expression:"config.captcha.imgHeight"}})],1),e._v(" "),n("h2",[e._v("日志配置")]),e._v(" "),n("el-form-item",{attrs:{label:"prefix"}},[n("el-input",{model:{value:e.config.log.prefix,callback:function(t){e.$set(e.config.log,"prefix",e._n(t))},expression:"config.log.prefix"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"logFile"}},[n("el-checkbox",{model:{value:e.config.log.logFile,callback:function(t){e.$set(e.config.log,"logFile",t)},expression:"config.log.logFile"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.update}},[e._v("立即更新")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.reload}},[e._v("重启服务（开发中）")])],1)],2)],1)},o=[],l=(n("b449"),n("ae9a")),s=n("8593"),a={name:"Config",data:function(){return{config:{system:{},jwt:{},casbin:{},mysql:{},sqlite:{},redis:{},qiniu:{},captcha:{},log:{}}}},created:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.initForm();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{initForm:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["getSystemConfig"])();case 2:t=e.sent,0==t.code&&(this.config=t.data.config);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),reload:function(){},update:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["setSystemConfig"])({config:this.config});case 2:if(t=e.sent,0!=t.code){e.next=7;break}return this.$message({type:"success",message:"配置文件设置成功"}),e.next=7,this.initForm();case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},c=a,r=(n("663f"),n("4023")),f=Object(r["a"])(c,i,o,!1,null,null,null);t["default"]=f.exports},"663f":function(e,t,n){"use strict";var i=n("e81e"),o=n.n(i);o.a},8593:function(e,t,n){"use strict";n.r(t),n.d(t,"getSystemConfig",(function(){return o})),n.d(t,"setSystemConfig",(function(){return l}));var i=n("b775"),o=function(){return Object(i["default"])({url:"/system/getSystemConfig",method:"post"})},l=function(e){return Object(i["default"])({url:"/system/setSystemConfig",method:"post",data:e})}},e81e:function(e,t,n){}}]);