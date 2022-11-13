(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{3081:function(t,e){t.exports={content:["section",["p","\u6587\u4EF6\u9009\u62E9\u4E0A\u4F20\u548C\u62D6\u62FD\u4E0A\u4F20\u63A7\u4EF6\u3002"],["h2","\u4F55\u65F6\u4F7F\u7528"],["p","\u4E0A\u4F20\u662F\u5C06\u4FE1\u606F\uFF08\u7F51\u9875\u3001\u6587\u5B57\u3001\u56FE\u7247\u3001\u89C6\u9891\u7B49\uFF09\u901A\u8FC7\u7F51\u9875\u6216\u8005\u4E0A\u4F20\u5DE5\u5177\u53D1\u5E03\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u4E0A\u7684\u8FC7\u7A0B\u3002"],["ul",["li",["p","\u5F53\u9700\u8981\u4E0A\u4F20\u4E00\u4E2A\u6216\u4E00\u4E9B\u6587\u4EF6\u65F6\u3002"]],["li",["p","\u5F53\u9700\u8981\u5C55\u73B0\u4E0A\u4F20\u7684\u8FDB\u5EA6\u65F6\u3002"]],["li",["p","\u5F53\u9700\u8981\u4F7F\u7528\u62D6\u62FD\u4EA4\u4E92\u65F6\u3002"]]]],meta:{category:"Components",subtitle:"\u4E0A\u4F20",type:"\u6570\u636E\u5F55\u5165",title:"Upload",cover:"https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg",filename:"components/upload/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4F55\u65F6\u4F7F\u7528",title:"\u4F55\u65F6\u4F7F\u7528"},"\u4F55\u65F6\u4F7F\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","accept"],["td","\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B, \u8BE6\u89C1 ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept"},"input accept Attribute"]],["td","string"],["td","-"],["td"]],["tr",["td","action"],["td","\u4E0A\u4F20\u7684\u5730\u5740"],["td","string ","|"," (file) => Promise","<","string>"],["td","-"],["td"]],["tr",["td","beforeUpload"],["td","\u4E0A\u4F20\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C\u82E5\u8FD4\u56DE ",["code","false"]," \u5219\u505C\u6B62\u4E0A\u4F20\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0CPromise \u5BF9\u8C61 reject \u65F6\u5219\u505C\u6B62\u4E0A\u4F20\uFF0Cresolve \u65F6\u5F00\u59CB\u4E0A\u4F20\uFF08 resolve \u4F20\u5165 ",["code","File"]," \u6216 ",["code","Blob"]," \u5BF9\u8C61\u5219\u4E0A\u4F20 resolve \u4F20\u5165\u5BF9\u8C61\uFF09\uFF1B\u4E5F\u53EF\u4EE5\u8FD4\u56DE ",["code","Upload.LIST_IGNORE"],"\uFF0C\u6B64\u65F6\u5217\u8868\u4E2D\u5C06\u4E0D\u5C55\u793A\u6B64\u6587\u4EF6\u3002 ",["strong","\u6CE8\u610F\uFF1AIE9 \u4E0D\u652F\u6301\u8BE5\u65B9\u6CD5"]],["td","(file, fileList) => boolean ","|"," Promise","<","File> ","|"," ",["code","Upload.LIST_IGNORE"]],["td","-"],["td"]],["tr",["td","customRequest"],["td","\u901A\u8FC7\u8986\u76D6\u9ED8\u8BA4\u7684\u4E0A\u4F20\u884C\u4E3A\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u81EA\u5DF1\u7684\u4E0A\u4F20\u5B9E\u73B0"],["td","function"],["td","-"],["td"]],["tr",["td","data"],["td","\u4E0A\u4F20\u6240\u9700\u989D\u5916\u53C2\u6570\u6216\u8FD4\u56DE\u4E0A\u4F20\u989D\u5916\u53C2\u6570\u7684\u65B9\u6CD5"],["td","object","|","(file) => object ","|"," Promise","<","object>"],["td","-"],["td"]],["tr",["td","defaultFileList"],["td","\u9ED8\u8BA4\u5DF2\u7ECF\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868"],["td","object","[","]"],["td","-"],["td"]],["tr",["td","directory"],["td","\u652F\u6301\u4E0A\u4F20\u6587\u4EF6\u5939\uFF08",["a",{title:null,href:"https://caniuse.com/#feat=input-file-directory"},"caniuse"],"\uFF09"],["td","boolean"],["td","false"],["td"]],["tr",["td","disabled"],["td","\u662F\u5426\u7981\u7528"],["td","boolean"],["td","false"],["td"]],["tr",["td","fileList"],["td","\u5DF2\u7ECF\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\uFF08\u53D7\u63A7\uFF09\uFF0C\u4F7F\u7528\u6B64\u53C2\u6570\u65F6\uFF0C\u5982\u679C\u9047\u5230 ",["code","onChange"]," \u53EA\u8C03\u7528\u4E00\u6B21\u7684\u95EE\u9898\uFF0C\u8BF7\u53C2\u8003 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/2423"},"#2423"]],["td",["a",{title:null,href:"#UploadFile"},"UploadFile"],"[","]"],["td","-"],["td"]],["tr",["td","headers"],["td","\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8\uFF0CIE10 \u4EE5\u4E0A\u6709\u6548"],["td","object"],["td","-"],["td"]],["tr",["td","iconRender"],["td","\u81EA\u5B9A\u4E49\u663E\u793A icon"],["td","(file: UploadFile, listType?: UploadListType) => ReactNode"],["td","-"],["td"]],["tr",["td","isImageUrl"],["td","\u81EA\u5B9A\u4E49\u7F29\u7565\u56FE\u662F\u5426\u4F7F\u7528 ","<","img /> \u6807\u7B7E\u8FDB\u884C\u663E\u793A"],["td","(file: UploadFile) => boolean"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/4ad5830eecfb87471cd8ac588c5d992862b70770/components/upload/utils.tsx#L47-L68"},"(\u5185\u90E8\u5B9E\u73B0)"]],["td"]],["tr",["td","itemRender"],["td","\u81EA\u5B9A\u4E49\u4E0A\u4F20\u5217\u8868\u9879"],["td","(originNode: ReactElement, file: UploadFile, fileList: object","[","], actions: { download: function, preview: function, remove: function }) => React.ReactNode"],["td","-"],["td","4.16.0"]],["tr",["td","listType"],["td","\u4E0A\u4F20\u5217\u8868\u7684\u5185\u5EFA\u6837\u5F0F\uFF0C\u652F\u6301\u4E09\u79CD\u57FA\u672C\u6837\u5F0F ",["code","text"],", ",["code","picture"]," \u548C ",["code","picture-card"]],["td","string"],["td",["code","text"]],["td"]],["tr",["td","maxCount"],["td","\u9650\u5236\u4E0A\u4F20\u6570\u91CF\u3002\u5F53\u4E3A 1 \u65F6\uFF0C\u59CB\u7EC8\u7528\u6700\u65B0\u4E0A\u4F20\u7684\u6587\u4EF6\u4EE3\u66FF\u5F53\u524D\u6587\u4EF6"],["td","number"],["td","-"],["td","4.10.0"]],["tr",["td","method"],["td","\u4E0A\u4F20\u8BF7\u6C42\u7684 http method"],["td","string"],["td",["code","post"]],["td"]],["tr",["td","multiple"],["td","\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6\uFF0C",["code","ie10+"]," \u652F\u6301\u3002\u5F00\u542F\u540E\u6309\u4F4F ctrl \u53EF\u9009\u62E9\u591A\u4E2A\u6587\u4EF6"],["td","boolean"],["td","false"],["td"]],["tr",["td","name"],["td","\u53D1\u5230\u540E\u53F0\u7684\u6587\u4EF6\u53C2\u6570\u540D"],["td","string"],["td",["code","file"]],["td"]],["tr",["td","openFileDialogOnClick"],["td","\u70B9\u51FB\u6253\u5F00\u6587\u4EF6\u5BF9\u8BDD\u6846"],["td","boolean"],["td","true"],["td"]],["tr",["td","previewFile"],["td","\u81EA\u5B9A\u4E49\u6587\u4EF6\u9884\u89C8\u903B\u8F91"],["td","(file: File ","|"," Blob) => Promise","<","dataURL: string>"],["td","-"],["td"]],["tr",["td","progress"],["td","\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6837\u5F0F"],["td",["a",{title:null,href:"/components/progress/#API"},"ProgressProps"],"\uFF08\u4EC5\u652F\u6301 ",["code",'type="line"'],"\uFF09"],["td","{ strokeWidth: 2, showInfo: false }"],["td","4.3.0"]],["tr",["td","showUploadList"],["td","\u662F\u5426\u5C55\u793A\u6587\u4EF6\u5217\u8868, \u53EF\u8BBE\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u7528\u4E8E\u5355\u72EC\u8BBE\u5B9A ",["code","showPreviewIcon"],", ",["code","showRemoveIcon"],", ",["code","showDownloadIcon"],", ",["code","removeIcon"]," \u548C ",["code","downloadIcon"]],["td","boolean ","|"," { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean, previewIcon?: ReactNode ","|"," (file: UploadFile) => ReactNode, removeIcon?: ReactNode ","|"," (file: UploadFile) => ReactNode, downloadIcon?: ReactNode ","|"," (file: UploadFile) => ReactNode }"],["td","true"],["td","function: 4.7.0"]],["tr",["td","withCredentials"],["td","\u4E0A\u4F20\u8BF7\u6C42\u65F6\u662F\u5426\u643A\u5E26 cookie"],["td","boolean"],["td","false"],["td"]],["tr",["td","onChange"],["td","\u4E0A\u4F20\u6587\u4EF6\u6539\u53D8\u65F6\u7684\u72B6\u6001\uFF0C\u8BE6\u89C1 ",["a",{title:null,href:"#onChange"},"onChange"]],["td","function"],["td","-"],["td"]],["tr",["td","onDrop"],["td","\u5F53\u6587\u4EF6\u88AB\u62D6\u5165\u4E0A\u4F20\u533A\u57DF\u65F6\u6267\u884C\u7684\u56DE\u8C03\u529F\u80FD"],["td","(event: React.DragEvent) => void"],["td","-"],["td","4.16.0"]],["tr",["td","onDownload"],["td","\u70B9\u51FB\u4E0B\u8F7D\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u8DF3\u8F6C\u5230\u6587\u4EF6 url \u5BF9\u5E94\u7684\u6807\u7B7E\u9875"],["td","function(file): void"],["td","(\u8DF3\u8F6C\u65B0\u6807\u7B7E\u9875)"],["td"]],["tr",["td","onPreview"],["td","\u70B9\u51FB\u6587\u4EF6\u94FE\u63A5\u6216\u9884\u89C8\u56FE\u6807\u65F6\u7684\u56DE\u8C03"],["td","function(file)"],["td","-"],["td"]],["tr",["td","onRemove \xA0"],["td","\u70B9\u51FB\u79FB\u9664\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u503C\u4E3A false \u65F6\u4E0D\u79FB\u9664\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0CPromise \u5BF9\u8C61 resolve(false) \u6216 reject \u65F6\u4E0D\u79FB\u9664 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"],["td","function(file): boolean ","|"," Promise"],["td","- \xA0"],["td"]]]],["h3","UploadFile"],["p","\u7EE7\u627F\u81EA File\uFF0C\u9644\u5E26\u989D\u5916\u5C5E\u6027\u7528\u4E8E\u6E32\u67D3\u3002"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"]]],["tbody",["tr",["td","name"],["td","\u6587\u4EF6\u540D"],["td","string"],["td","-"]],["tr",["td","percent"],["td","\u4E0A\u4F20\u8FDB\u5EA6"],["td","number"],["td","-"]],["tr",["td","status"],["td","\u4E0A\u4F20\u72B6\u6001\uFF0C\u4E0D\u540C\u72B6\u6001\u5C55\u793A\u989C\u8272\u4E5F\u4F1A\u6709\u6240\u4E0D\u540C"],["td",["code","error"]," ","|"," ",["code","success"]," ","|"," ",["code","done"]," ","|"," ",["code","uploading"]," ","|"," ",["code","removed"]],["td","-"]],["tr",["td","thumbUrl"],["td","\u7F29\u7565\u56FE\u5730\u5740"],["td","string"],["td","-"]],["tr",["td","uid"],["td","\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u4E0D\u8BBE\u7F6E\u65F6\u4F1A\u81EA\u52A8\u751F\u6210"],["td","string"],["td","-"]],["tr",["td","url"],["td","\u4E0B\u8F7D\u5730\u5740"],["td","string"],["td","-"]]]],["h3","onChange"],["blockquote",["p","\u4E0A\u4F20\u4E2D\u3001\u5B8C\u6210\u3001\u5931\u8D25\u90FD\u4F1A\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u3002"]],["p","\u6587\u4EF6\u72B6\u6001\u6539\u53D8\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u4E3A\uFF1A"],["pre",{lang:"js",highlighted:`<span class="token punctuation">{</span>
  file<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  fileList<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token comment" spellcheck="true">/* ... */</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
  event<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>`},["code",`{
  file: { /* ... */ },
  fileList: [ /* ... */ ],
  event: { /* ... */ },
}`]],["ol",["li",["p",["code","file"]," \u5F53\u524D\u64CD\u4F5C\u7684\u6587\u4EF6\u5BF9\u8C61\u3002"],["pre",{lang:"js",highlighted:`<span class="token punctuation">{</span>
   uid<span class="token punctuation">:</span> <span class="token string">'uid'</span><span class="token punctuation">,</span>      <span class="token comment" spellcheck="true">// \u6587\u4EF6\u552F\u4E00\u6807\u8BC6\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A\u8D1F\u6570\uFF0C\u9632\u6B62\u548C\u5185\u90E8\u4EA7\u751F\u7684 id \u51B2\u7A81</span>
   name<span class="token punctuation">:</span> <span class="token string">'xx.png'</span>   <span class="token comment" spellcheck="true">// \u6587\u4EF6\u540D</span>
   status<span class="token punctuation">:</span> <span class="token string">'done'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// \u72B6\u6001\u6709\uFF1Auploading done error removed\uFF0C\u88AB beforeUpload \u62E6\u622A\u7684\u6587\u4EF6\u6CA1\u6709 status \u5C5E\u6027</span>
   response<span class="token punctuation">:</span> <span class="token string">'{"status": "success"}'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// \u670D\u52A1\u7AEF\u54CD\u5E94\u5185\u5BB9</span>
   linkProps<span class="token punctuation">:</span> <span class="token string">'{"download": "image"}'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// \u4E0B\u8F7D\u94FE\u63A5\u989D\u5916\u7684 HTML \u5C5E\u6027</span>
<span class="token punctuation">}</span>`},["code",`{
   uid: 'uid',      // \u6587\u4EF6\u552F\u4E00\u6807\u8BC6\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A\u8D1F\u6570\uFF0C\u9632\u6B62\u548C\u5185\u90E8\u4EA7\u751F\u7684 id \u51B2\u7A81
   name: 'xx.png'   // \u6587\u4EF6\u540D
   status: 'done', // \u72B6\u6001\u6709\uFF1Auploading done error removed\uFF0C\u88AB beforeUpload \u62E6\u622A\u7684\u6587\u4EF6\u6CA1\u6709 status \u5C5E\u6027
   response: '{"status": "success"}', // \u670D\u52A1\u7AEF\u54CD\u5E94\u5185\u5BB9
   linkProps: '{"download": "image"}', // \u4E0B\u8F7D\u94FE\u63A5\u989D\u5916\u7684 HTML \u5C5E\u6027
}`]]],["li",["p",["code","fileList"]," \u5F53\u524D\u7684\u6587\u4EF6\u5217\u8868\u3002"]],["li",["p",["code","event"]," \u4E0A\u4F20\u4E2D\u7684\u670D\u52A1\u7AEF\u54CD\u5E94\u5185\u5BB9\uFF0C\u5305\u542B\u4E86\u4E0A\u4F20\u8FDB\u5EA6\u7B49\u4FE1\u606F\uFF0C\u9AD8\u7EA7\u6D4F\u89C8\u5668\u652F\u6301\u3002"]]],["h2","FAQ"],["h3","\u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0\uFF1F"],["ul",["li",["p","\u670D\u52A1\u7AEF\u4E0A\u4F20\u63A5\u53E3\u5B9E\u73B0\u53EF\u4EE5\u53C2\u8003 ",["a",{title:null,href:"https://github.com/blueimp/jQuery-File-Upload/wiki#server-side"},"jQuery-File-Upload"],"\u3002"]],["li",["p","\u5982\u679C\u8981\u505A\u672C\u5730 mock \u53EF\u4EE5\u53C2\u8003\u8FD9\u4E2A ",["a",{title:null,href:"https://github.com/react-component/upload/blob/master/server.js"},"express \u7684\u4F8B\u5B50"],"\u3002"]]],["h3","\u5982\u4F55\u663E\u793A\u4E0B\u8F7D\u94FE\u63A5\uFF1F"],["p","\u8BF7\u4F7F\u7528 fileList \u5C5E\u6027\u8BBE\u7F6E\u6570\u7EC4\u9879\u7684 url \u5C5E\u6027\u8FDB\u884C\u5C55\u793A\u63A7\u5236\u3002"],["h3",["code","customRequest"]," \u600E\u4E48\u4F7F\u7528\uFF1F"],["p","\u8BF7\u53C2\u8003 ",["a",{title:null,href:"https://github.com/react-component/upload#customrequest"},"https://github.com/react-component/upload#customrequest"],"\u3002"],["h3","\u4E3A\u4F55 ",["code","fileList"]," \u53D7\u63A7\u65F6\uFF0C\u4E0A\u4F20\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E6\u53D1 ",["code","onChange"]," \u540E\u7EED\u7684 ",["code","status"]," \u66F4\u65B0\u4E8B\u4EF6\uFF1F"],["p",["code","onChange"]," \u4E8B\u4EF6\u4EC5\u4F1A\u4F5C\u7528\u4E8E\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\uFF0C\u56E0\u800C ",["code","fileList"]," \u4E0D\u5B58\u5728\u5BF9\u5E94\u6587\u4EF6\u65F6\u540E\u7EED\u4E8B\u4EF6\u4F1A\u88AB\u5FFD\u7565\u3002\u8BF7\u6CE8\u610F\uFF0C\u5728 ",["code","4.13.0"]," \u7248\u672C\u4E4B\u524D\u53D7\u63A7\u72B6\u6001\u5B58\u5728 bug \u5BFC\u81F4\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E5F\u4F1A\u89E6\u53D1\u3002"],["h3",["code","onChange"]," \u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u8FD4\u56DE File \u6709\u65F6\u5019\u8FD4\u56DE { originFileObj: File }\uFF1F"],["p","\u5386\u53F2\u539F\u56E0\uFF0C\u5728 ",["code","beforeUpload"]," \u8FD4\u56DE ",["code","false"]," \u65F6\uFF0C\u4F1A\u8FD4\u56DE File \u5BF9\u8C61\u3002\u5728\u4E0B\u4E2A\u5927\u7248\u672C\u6211\u4EEC\u4F1A\u7EDF\u4E00\u8FD4\u56DE ",["code","{ originFileObj: File }"]," \u5BF9\u8C61\u3002\u5F53\u524D\u7248\u672C\u5DF2\u7ECF\u517C\u5BB9\u6240\u6709\u573A\u666F\u4E0B ",["code","info.file.originFileObj"]," \u83B7\u53D6\u539F File \u5199\u6CD5\u3002\u4F60\u53EF\u4EE5\u63D0\u524D\u5207\u6362\u3002"]]}}}]);
