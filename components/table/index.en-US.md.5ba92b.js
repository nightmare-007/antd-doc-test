(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{3050:function(t,n){t.exports={content:["section",["p","A table displays rows of data."],["h2","When To Use"],["ul",["li",["p","To display a collection of structured data."]],["li",["p","To sort, search, paginate, filter data."]]],["h2","How To Use"],["p","Specify ",["code","dataSource"]," of Table as an array of data."],["pre",{lang:"jsx",highlighted:`<span class="token keyword">const</span> dataSource <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    name<span class="token punctuation">:</span> <span class="token string">'Mike'</span><span class="token punctuation">,</span>
    age<span class="token punctuation">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
    address<span class="token punctuation">:</span> <span class="token string">'10 Downing Street'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    name<span class="token punctuation">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span>
    age<span class="token punctuation">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
    address<span class="token punctuation">:</span> <span class="token string">'10 Downing Street'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token punctuation">:</span> <span class="token string">'Name'</span><span class="token punctuation">,</span>
    dataIndex<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token punctuation">:</span> <span class="token string">'Age'</span><span class="token punctuation">,</span>
    dataIndex<span class="token punctuation">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token punctuation">:</span> <span class="token string">'Address'</span><span class="token punctuation">,</span>
    dataIndex<span class="token punctuation">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dataSource<span class="token punctuation">}</span></span> <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>`},["code",`const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

<Table dataSource={dataSource} columns={columns} />;`]]],meta:{category:"Components",cols:1,type:"Data Display",title:"Table",cover:"https://gw.alipayobjects.com/zos/alicdn/f-SbcX2Lx/Table.svg",filename:"components/table/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#How-To-Use",title:"How To Use"},"How To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#Using-in-TypeScript",title:"Using in TypeScript"},"Using in TypeScript"]],["li",["a",{className:"bisheng-toc-h2",href:"#Note",title:"Note"},"Note"]],["li",["a",{className:"bisheng-toc-h2",href:"#Migrate-to-v4",title:"Migrate to v4"},"Migrate to v4"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["h3","Table"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","bordered"],["td","Whether to show all table borders"],["td","boolean"],["td","false"],["td"]],["tr",["td","columns"],["td","Columns of table"],["td",["a",{title:null,href:"#Column"},"ColumnsType"],"[","]"],["td","-"],["td"]],["tr",["td","components"],["td","Override default table elements"],["td",["a",{title:null,href:"https://git.io/fANxz"},"TableComponents"]],["td","-"],["td"]],["tr",["td","dataSource"],["td","Data record array to be displayed"],["td","object","[","]"],["td","-"],["td"]],["tr",["td","expandable"],["td","Config expandable content"],["td",["a",{title:null,href:"#expandable"},"expandable"]],["td","-"],["td"]],["tr",["td","footer"],["td","Table footer renderer"],["td","function(currentPageData)"],["td","-"],["td"]],["tr",["td","getPopupContainer"],["td","The render container of dropdowns in table"],["td","(triggerNode) => HTMLElement"],["td","() => TableHtmlElement"],["td"]],["tr",["td","loading"],["td","Loading status of table"],["td","boolean ","|"," ",["a",{title:null,href:"/components/spin/#API"},"Spin Props"]],["td","false"],["td"]],["tr",["td","locale"],["td","The i18n text including filter, sort, empty text, etc"],["td","object"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/6dae4a7e18ad1ba193aedd5ab6867e1d823e2aa4/components/locale/default.tsx#L19-L37"},"Default Value"]],["td"]],["tr",["td","pagination"],["td","Config of pagination. You can ref table pagination ",["a",{title:null,href:"#pagination"},"config"]," or full ",["a",{title:null,href:"/components/pagination/"},["code","pagination"]]," document, hide it by setting it to ",["code","false"]],["td","object"],["td","-"],["td"]],["tr",["td","rowClassName"],["td","Row's className"],["td","function(record, index): string"],["td","-"],["td"]],["tr",["td","rowKey"],["td","Row's unique key, could be a string or function that returns a string"],["td","string ","|"," function(record): string"],["td",["code","key"]],["td"]],["tr",["td","rowSelection"],["td","Row selection ",["a",{title:null,href:"#rowSelection"},"config"]],["td","object"],["td","-"],["td"]],["tr",["td","scroll"],["td","Whether the table can be scrollable, ",["a",{title:null,href:"#scroll"},"config"]],["td","object"],["td","-"],["td"]],["tr",["td","showHeader"],["td","Whether to show table header"],["td","boolean"],["td","true"],["td"]],["tr",["td","showSorterTooltip"],["td","The header show next sorter direction tooltip. It will be set as the property of Tooltip if its type is object"],["td","boolean ","|"," ",["a",{title:null,href:"/components/tooltip/#API"},"Tooltip props"]],["td","true"],["td"]],["tr",["td","size"],["td","Size of table"],["td",["code","default"]," ","|"," ",["code","middle"]," ","|"," ",["code","small"]],["td",["code","default"]],["td"]],["tr",["td","sortDirections"],["td","Supported sort way, could be ",["code","ascend"],", ",["code","descend"]],["td","Array"],["td","[",["code","ascend"],", ",["code","descend"],"]"],["td"]],["tr",["td","sticky"],["td","Set sticky header and scroll bar"],["td","boolean ","|"," ",["code","{offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement}"]],["td","-"],["td","4.6.0 (getContainer: 4.7.0)"]],["tr",["td","summary"],["td","Summary content"],["td","(currentData) => ReactNode"],["td","-"],["td"]],["tr",["td","tableLayout"],["td","The ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout"},"table-layout"]," attribute of table element"],["td","- ","|"," ",["code","auto"]," ","|"," ",["code","fixed"]],["td","-",["hr"],["code","fixed"]," when header/columns are fixed, or using ",["code","column.ellipsis"]],["td"]],["tr",["td","title"],["td","Table title renderer"],["td","function(currentPageData)"],["td","-"],["td"]],["tr",["td","onChange"],["td","Callback executed when pagination, filters or sorter is changed"],["td","function(pagination, filters, sorter, extra: { currentDataSource: ","[","], action: ",["code","paginate"]," ","|"," ",["code","sort"]," ","|"," ",["code","filter"]," })"],["td","-"],["td"]],["tr",["td","onHeaderRow"],["td","Set props on per header row"],["td","function(columns, index)"],["td","-"],["td"]],["tr",["td","onRow"],["td","Set props on per row"],["td","function(record, index)"],["td","-"],["td"]]]],["h4","onRow usage"],["p","Same as ",["code","onRow"]," ",["code","onHeaderRow"]," ",["code","onCell"]," ",["code","onHeaderCell"]],["pre",{lang:"jsx",highlighted:`<span class="token operator">&lt;</span>Table
  onRow<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>record<span class="token punctuation">,</span> rowIndex<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      onClick<span class="token punctuation">:</span> event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// click row</span>
      onDoubleClick<span class="token punctuation">:</span> event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// double click row</span>
      onContextMenu<span class="token punctuation">:</span> event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// right button click row</span>
      onMouseEnter<span class="token punctuation">:</span> event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// mouse enter row</span>
      onMouseLeave<span class="token punctuation">:</span> event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// mouse leave row</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span>
  onHeaderRow<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>columns<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      onClick<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// click header row</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">/</span><span class="token operator">></span>`},["code",`<Table
  onRow={(record, rowIndex) => {
    return {
      onClick: event => {}, // click row
      onDoubleClick: event => {}, // double click row
      onContextMenu: event => {}, // right button click row
      onMouseEnter: event => {}, // mouse enter row
      onMouseLeave: event => {}, // mouse leave row
    };
  }}
  onHeaderRow={(columns, index) => {
    return {
      onClick: () => {}, // click header row
    };
  }}
/>`]],["h3","Column"],["p","One of the Table ",["code","columns"]," prop for describing the table's columns, Column has the same API."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","align"],["td","The specify which way that column is aligned"],["td",["code","left"]," ","|"," ",["code","right"]," ","|"," ",["code","center"]],["td",["code","left"]],["td"]],["tr",["td","className"],["td","The className of this column"],["td","string"],["td","-"],["td"]],["tr",["td","colSpan"],["td","Span of this column's title"],["td","number"],["td","-"],["td"]],["tr",["td","dataIndex"],["td","Display field of the data record, support nest path by string array"],["td","string ","|"," string","[","]"],["td","-"],["td"]],["tr",["td","defaultFilteredValue"],["td","Default filtered values"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","defaultSortOrder"],["td","Default order of sorted values"],["td",["code","ascend"]," ","|"," ",["code","descend"]],["td","-"],["td"]],["tr",["td","editable"],["td","Whether column can be edited"],["td","boolean"],["td","false"],["td"]],["tr",["td","ellipsis"],["td","The ellipsis cell content, not working with sorter and filters for now.",["br"],"tableLayout would be ",["code","fixed"]," when ",["code","ellipsis"]," is ",["code","true"]," or ",["code","{ showTitle?: boolean }"]],["td","boolean ","|"," {showTitle?: boolean }"],["td","false"],["td","showTitle: 4.3.0"]],["tr",["td","filterDropdown"],["td","Customized filter overlay"],["td","ReactNode ","|"," (props: ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/ecc54dda839619e921c0ace530408871f0281c2a/components/table/interface.tsx#L79"},"FilterDropdownProps"],") => ReactNode"],["td","-"],["td"]],["tr",["td","filterDropdownVisible"],["td","Whether ",["code","filterDropdown"]," is visible"],["td","boolean"],["td","-"],["td"]],["tr",["td","filtered"],["td","Whether the ",["code","dataSource"]," is filtered"],["td","boolean"],["td","false"],["td"]],["tr",["td","filteredValue"],["td","Controlled filtered value, filter icon will highlight"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","filterIcon"],["td","Customized filter icon"],["td","ReactNode ","|"," (filtered: boolean) => ReactNode"],["td","-"],["td"]],["tr",["td","filterMultiple"],["td","Whether multiple filters can be selected"],["td","boolean"],["td","true"],["td"]],["tr",["td","filterMode"],["td","To specify the filter interface"],["td","'menu' ","|"," 'tree'"],["td","'menu'"],["td","4.17.0"]],["tr",["td","filterSearch"],["td","Whether to be searchable for filter menu"],["td","Boolean"],["td","false"],["td","4.17.0"]],["tr",["td","filters"],["td","Filter menu config"],["td","object","[","]"],["td","-"],["td"]],["tr",["td","fixed"],["td","(IE not support) Set column to be fixed: ",["code","true"],"(same as left) ",["code","'left'"]," ",["code","'right'"]],["td","boolean ","|"," string"],["td","false"],["td"]],["tr",["td","key"],["td","Unique key of this column, you can ignore this prop if you've set a unique ",["code","dataIndex"]],["td","string"],["td","-"],["td"]],["tr",["td","render"],["td","Renderer of the table cell. The return value should be a ReactNode"],["td","function(text, record, index) {}"],["td","-"],["td"]],["tr",["td","responsive"],["td","The list of breakpoints at which to display this column. Always visible if not set."],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/015109b42b85c63146371b4e32b883cf97b088e8/components/_util/responsiveObserve.ts#L1"},"Breakpoint"],"[","]"],["td","-"],["td","4.2.0"]],["tr",["td","shouldCellUpdate"],["td","Control cell render logic"],["td","(record, prevRecord) => boolean"],["td","-"],["td","4.3.0"]],["tr",["td","showSorterTooltip"],["td","If header show next sorter direction tooltip, override ",["code","showSorterTooltip"]," in table"],["td","boolean ","|"," ",["a",{title:null,href:"/components/tooltip/"},"Tooltip props"]],["td","true"],["td"]],["tr",["td","sortDirections"],["td","Supported sort way, override ",["code","sortDirections"]," in ",["code","Table"],", could be ",["code","ascend"],", ",["code","descend"]],["td","Array"],["td","[",["code","ascend"],", ",["code","descend"],"]"],["td"]],["tr",["td","sorter"],["td","Sort function for local sort, see ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"},"Array.sort"],"'s compareFunction. If you need sort buttons only, set to ",["code","true"]],["td","function ","|"," boolean"],["td","-"],["td"]],["tr",["td","sortOrder"],["td","Order of sorted values: ",["code","'ascend'"]," ",["code","'descend'"]," ",["code","false"]],["td","boolean ","|"," string"],["td","-"],["td"]],["tr",["td","title"],["td","Title of this column"],["td","ReactNode ","|"," ({ sortOrder, sortColumn, filters }) => ReactNode"],["td","-"],["td"]],["tr",["td","width"],["td","Width of this column (",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/13825#issuecomment-449889241"},"width not working?"],")"],["td","string ","|"," number"],["td","-"],["td"]],["tr",["td","onCell"],["td","Set props on per cell"],["td","function(record, rowIndex)"],["td","-"],["td"]],["tr",["td","onFilter"],["td","Function that determines if the row is displayed when filtered"],["td","function(value, record) => boolean"],["td","-"],["td"]],["tr",["td","onFilterDropdownVisibleChange"],["td","Callback executed when ",["code","filterDropdownVisible"]," is changed"],["td","function(visible) {}"],["td","-"],["td"]],["tr",["td","onHeaderCell"],["td","Set props on per header cell"],["td","function(column)"],["td","-"],["td"]]]],["h3","ColumnGroup"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","title"],["td","Title of the column group"],["td","ReactNode"],["td","-"]]]],["h3","pagination"],["p","Properties for pagination."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","position"],["td","Specify the position of ",["code","Pagination"],", could be",["code","topLeft"]," ","|"," ",["code","topCenter"]," ","|"," ",["code","topRight"]," ","|",["code","bottomLeft"]," ","|"," ",["code","bottomCenter"]," ","|"," ",["code","bottomRight"]],["td","Array"],["td","[",["code","bottomRight"],"]"]]]],["p","More about pagination, please check ",["a",{title:null,href:"/components/pagination/"},["code","Pagination"]],"."],["h3","expandable"],["p","Properties for expandable."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","childrenColumnName"],["td","The column contains children to display"],["td","string"],["td","children"],["td"]],["tr",["td","columnWidth"],["td","Set the width of the expand column"],["td","string ","|"," number"],["td","-"],["td"]],["tr",["td","defaultExpandAllRows"],["td","Expand all rows initially"],["td","boolean"],["td","false"],["td"]],["tr",["td","defaultExpandedRowKeys"],["td","Initial expanded row keys"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","expandedRowClassName"],["td","Expanded row's className"],["td","function(record, index, indent): string"],["td","-"],["td"]],["tr",["td","expandedRowKeys"],["td","Current expanded row keys"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","expandedRowRender"],["td","Expanded container render for each row"],["td","function(record, index, indent, expanded): ReactNode"],["td","-"],["td"]],["tr",["td","expandIcon"],["td","Customize row expand Icon. Ref ",["a",{title:null,href:"https://codesandbox.io/s/fervent-bird-nuzpr"},"example"]],["td","function(props): ReactNode"],["td","-"],["td"]],["tr",["td","expandRowByClick"],["td","Whether to expand row by clicking anywhere in the whole row"],["td","boolean"],["td","false"],["td"]],["tr",["td","fixed"],["td","Whether the expansion icon is fixed. Optional true ",["code","left"]," ",["code","right"]],["td","boolean ","|"," string"],["td","false"],["td","4.16.0"]],["tr",["td","indentSize"],["td","Indent size in pixels of tree data"],["td","number"],["td","15"],["td"]],["tr",["td","rowExpandable"],["td","Enable row can be expandable"],["td","(record) => boolean"],["td","-"],["td"]],["tr",["td","showExpandColumn"],["td","Show expand column"],["td","boolean"],["td","true"],["td","4.18.0"]],["tr",["td","onExpand"],["td","Callback executed when the row expand icon is clicked"],["td","function(expanded, record)"],["td","-"],["td"]],["tr",["td","onExpandedRowsChange"],["td","Callback executed when the expanded rows change"],["td","function(expandedRows)"],["td","-"],["td"]]]],["h3","rowSelection"],["p","Properties for row selection."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","checkStrictly"],["td","Check table row precisely; parent row and children rows are not associated"],["td","boolean"],["td","true"],["td","4.4.0"]],["tr",["td","columnTitle"],["td","Set the title of the selection column"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","columnWidth"],["td","Set the width of the selection column"],["td","string ","|"," number"],["td",["code","32px"]],["td"]],["tr",["td","fixed"],["td","Fixed selection column on the left"],["td","boolean"],["td","-"],["td"]],["tr",["td","getCheckboxProps"],["td","Get Checkbox or Radio props"],["td","function(record)"],["td","-"],["td"]],["tr",["td","hideSelectAll"],["td","Hide the selectAll checkbox and custom selection"],["td","boolean"],["td","false"],["td","4.3.0"]],["tr",["td","preserveSelectedRowKeys"],["td","Keep selection ",["code","key"]," even when it removed from ",["code","dataSource"]],["td","boolean"],["td","-"],["td","4.4.0"]],["tr",["td","renderCell"],["td","Renderer of the table cell. Same as ",["code","render"]," in column"],["td","function(checked, record, index, originNode) {}"],["td","-"],["td","4.1.0"]],["tr",["td","selectedRowKeys"],["td","Controlled selected row keys"],["td","string","[","] ","|"," number","[","]"],["td","[","]"],["td"]],["tr",["td","selections"],["td","Custom selection ",["a",{title:null,href:"#selection"},"config"],", only displays default selections when set to ",["code","true"]],["td","object","[","] ","|"," boolean"],["td","-"],["td"]],["tr",["td","type"],["td",["code","checkbox"]," or ",["code","radio"]],["td",["code","checkbox"]," ","|"," ",["code","radio"]],["td",["code","checkbox"]],["td"]],["tr",["td","onChange"],["td","Callback executed when selected rows change"],["td","function(selectedRowKeys, selectedRows)"],["td","-"],["td"]],["tr",["td","onSelect"],["td","Callback executed when select/deselect one row"],["td","function(record, selected, selectedRows, nativeEvent)"],["td","-"],["td"]],["tr",["td","onSelectAll"],["td","Callback executed when select/deselect all rows"],["td","function(selected, selectedRows, changeRows)"],["td","-"],["td"]],["tr",["td","onSelectInvert"],["td","Callback executed when row selection is inverted"],["td","function(selectedRowKeys)"],["td","-"],["td"]],["tr",["td","onSelectNone"],["td","Callback executed when row selection is cleared"],["td","function()"],["td","-"],["td"]]]],["h3","scroll"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","scrollToFirstRowOnChange"],["td","Whether to scroll to the top of the table when paging, sorting, filtering changes"],["td","boolean"],["td","-"]],["tr",["td","x"],["td","Set horizontal scrolling, can also be used to specify the width of the scroll area, could be number, percent value, true and ",["a",{title:null,href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/width#max-content"},"'max-content'"]],["td","string ","|"," number ","|"," true"],["td","-"]],["tr",["td","y"],["td","Set vertical scrolling, can also be used to specify the height of the scroll area, could be string or number"],["td","string ","|"," number"],["td","-"]]]],["h3","selection"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","key"],["td","Unique key of this selection"],["td","string"],["td","-"]],["tr",["td","text"],["td","Display text of this selection"],["td","ReactNode"],["td","-"]],["tr",["td","onSelect"],["td","Callback executed when this selection is clicked"],["td","function(changeableRowKeys)"],["td","-"]]]],["h2","Using in TypeScript"],["pre",{lang:"tsx",highlighted:`import { Table } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { ColumnsType } from <span class="token string">'antd/es/table'</span><span class="token comment" spellcheck="true">;</span>

interface User {
  key<span class="token punctuation">:</span> number<span class="token comment" spellcheck="true">;</span>
  name<span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">;</span>
}

<span class="token keyword">const</span> columns<span class="token punctuation">:</span> ColumnsType<span class="token operator">&lt;</span>User<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    title<span class="token punctuation">:</span> <span class="token string">'Name'</span><span class="token punctuation">,</span>
    dataIndex<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> data<span class="token punctuation">:</span> User<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    key<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    name<span class="token punctuation">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;></span>
    <span class="token operator">&lt;</span>Table<span class="token operator">&lt;</span>User<span class="token operator">></span> columns<span class="token operator">=</span>{columns} dataSource<span class="token operator">=</span>{data} <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">/</span><span class="token operator">*</span> JSX style usage <span class="token operator">*</span><span class="token operator">/</span>
    <span class="token operator">&lt;</span>Table<span class="token operator">&lt;</span>User<span class="token operator">></span> dataSource<span class="token operator">=</span>{data}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Table<span class="token punctuation">.</span>Column<span class="token operator">&lt;</span>User<span class="token operator">></span> key<span class="token operator">=</span><span class="token string">"name"</span> title<span class="token operator">=</span><span class="token string">"Name"</span> dataIndex<span class="token operator">=</span><span class="token string">"name"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Table<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>`},["code",`import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface User {
  key: number;
  name: string;
}

const columns: ColumnsType<User> = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
  },
];

const data: User[] = [
  {
    key: 0,
    name: 'Jack',
  },
];

export default () => (
  <>
    <Table<User> columns={columns} dataSource={data} />
    /* JSX style usage */
    <Table<User> dataSource={data}>
      <Table.Column<User> key="name" title="Name" dataIndex="name" />
    </Table>
  </>
);`]],["p","Here is the ",["a",{title:null,href:"https://codesandbox.io/s/serene-platform-0jo5t"},"CodeSandbox for TypeScript"],"."],["h2","Note"],["p","According to the ",["a",{title:null,href:"https://facebook.github.io/react/docs/lists-and-keys.html#keys"},"React documentation"],", every child in an array should be assigned a unique key. The values inside the Table's ",["code","dataSource"]," and ",["code","columns"]," should follow this rule. By default, ",["code","dataSource[i].key"]," will be treated as the key value for ",["code","dataSource"],"."],["p",["img",{title:null,src:"https://os.alipayobjects.com/rmsportal/luLdLvhPOiRpyss.png",alt:"console warning"}]],["p","If ",["code","dataSource[i].key"]," is not provided, then you should specify the primary key of dataSource value via ",["code","rowKey"],", as shown below. If not, warnings like the one above will show in browser console."],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// primary key is uid</span>
<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">rowKey</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>uid<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token comment" spellcheck="true">// or</span>
<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">rowKey</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>record <span class="token operator">=</span><span class="token operator">></span> record<span class="token punctuation">.</span>uid<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>`},["code",`// primary key is uid
return <Table rowKey="uid" />;
// or
return <Table rowKey={record => record.uid} />;`]],["h2","Migrate to v4"],["p","Table removes ",["code","onRowClick"],", ",["code","onRowDoubleClick"],", ",["code","onRowMouseEnter"],", ",["code","onRowMouseLeave"]," and some other api which is already deprecated in v3. If you only use api listing in official document, that's OK."],["p","Besides, the breaking change is changing ",["code","dataIndex"]," from nest string path like ",["code","user.age"]," to string array path like ",["code","['user', 'age']"],". This help to resolve developer should additional work on the field which contains ",["code","."],"."],["h2","FAQ"],["h3","How to hide pagination when single page or no data?"],["p","You can set ",["code","hideOnSinglePage"]," with ",["code","pagination"]," prop."],["h3","Table will return to first page when filter data."],["p","Table total page count usually reduce after filter data, we defaultly return to first page in case of current page is out of filtered results."],["p","You may need to keep current page after filtering when fetch data from remote service, please check ",["a",{title:null,href:"https://codesandbox.io/s/yuanchengjiazaishuju-ant-design-demo-7y2uf"},"this demo"]," as workaround."],["p","Also you can use the action from extra param to determine when return to first page."],["h3","Why Table pagination show size changer?"],["p","In order to improve user experience, Pagination show size changer by default when ",["code","total > 50"]," since ",["code","4.1.0"],". You can set ",["code","showSizeChanger=false"]," to disable this feature."],["h3","Why Table fully render when state change?"],["p","Table can not tell what state used in ",["code","columns.render"],", so it always need fully render to avoid sync issue. You can use ",["code","column.shouldCellUpdate"]," to control render."],["h3","How to handle fixed column display over the mask layout?"],["p","Fixed column use ",["code","z-index"]," to make it over other columns. You will find sometime fixed columns also over your mask layout. You can set ",["code","z-index"]," on your mask layout to resolve."]]}}}]);
