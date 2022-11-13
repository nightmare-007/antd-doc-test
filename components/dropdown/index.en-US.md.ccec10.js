(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{2954:function(t,e){t.exports={content:["section",["p","A dropdown list."],["h2","When To Use"],["p","When there are more than a few options to choose from, you can wrap them in a ",["code","Dropdown"],". By hovering or clicking on the trigger, a dropdown menu will appear, which allows you to choose an option and execute the relevant action."]],meta:{category:"Components",type:"Navigation",title:"Dropdown",cover:"https://gw.alipayobjects.com/zos/alicdn/eedWN59yJ/Dropdown.svg",filename:"components/dropdown/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Dropdown"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","arrow"],["td","Whether the dropdown arrow should be visible"],["td","boolean"],["td","false"],["td"]],["tr",["td","disabled"],["td","Whether the dropdown menu is disabled"],["td","boolean"],["td","-"],["td"]],["tr",["td","destroyPopupOnHide"],["td","Whether destroy dropdown when hidden"],["td","boolean"],["td","false"],["td"]],["tr",["td","getPopupContainer"],["td","To set the container of the dropdown menu. The default is to create a div element in body, but you can reset it to the scrolling area and make a relative reposition. ",["a",{title:null,href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010"},"Example on CodePen"]],["td","(triggerNode: HTMLElement) => HTMLElement"],["td","() => document.body"],["td"]],["tr",["td","overlay"],["td","The dropdown menu"],["td",["a",{title:null,href:"/components/menu"},"Menu"]," ","|"," () => Menu"],["td","-"],["td"]],["tr",["td","overlayClassName"],["td","The class name of the dropdown root element"],["td","string"],["td","-"],["td"]],["tr",["td","overlayStyle"],["td","The style of the dropdown root element"],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","placement"],["td","Placement of popup menu: ",["code","bottomLeft"],", ",["code","bottomCenter"],", ",["code","bottomRight"],", ",["code","topLeft"],", ",["code","topCenter"]," or ",["code","topRight"]],["td","string"],["td",["code","bottomLeft"]],["td"]],["tr",["td","trigger"],["td","The trigger mode which executes the dropdown action. Note that hover can't be used on touchscreens"],["td","Array","<",["code","click"],"|",["code","hover"],"|",["code","contextMenu"],">"],["td","[",["code","hover"],"]"],["td"]],["tr",["td","visible"],["td","Whether the dropdown menu is currently visible"],["td","boolean"],["td","-"],["td"]],["tr",["td","onVisibleChange"],["td","Called when the visible state is changed. Not trigger when hidden by click item"],["td","(visible: boolean) => void"],["td","-"],["td"]]]],["p","You should use ",["a",{title:null,href:"/components/menu/"},"Menu"]," as ",["code","overlay"],". The menu items and dividers are also available by using ",["code","Menu.Item"]," and ",["code","Menu.Divider"],"."],["blockquote",["p","Warning: You must set a unique ",["code","key"]," for ",["code","Menu.Item"],"."],["p","Menu of Dropdown is unselectable by default, you can make it selectable via ",["code","<Menu selectable>"],"."]],["h3","Dropdown.Button"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","buttonsRender"],["td","Custom buttons inside Dropdown.Button"],["td","(buttons: ReactNode","[","]) => ReactNode","[","]"],["td","-"],["td"]],["tr",["td","loading"],["td","Set the loading status of button"],["td","boolean ","|"," { delay: number }"],["td","false"],["td"]],["tr",["td","disabled"],["td","Whether the dropdown menu is disabled"],["td","boolean"],["td","-"],["td"]],["tr",["td","icon"],["td","Icon (appears on the right)"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","overlay"],["td","The dropdown menu"],["td",["a",{title:null,href:"/components/menu"},"Menu"]],["td","-"],["td"]],["tr",["td","placement"],["td","Placement of popup menu: ",["code","bottomLeft"]," ",["code","bottomCenter"]," ",["code","bottomRight"]," ",["code","topLeft"]," ",["code","topCenter"]," ",["code","topRight"]],["td","string"],["td",["code","bottomLeft"]],["td"]],["tr",["td","size"],["td","Size of the button, the same as ",["a",{title:null,href:"/components/button/#API"},"Button"]],["td","string"],["td",["code","default"]],["td"]],["tr",["td","trigger"],["td","The trigger mode which executes the dropdown action"],["td","Array","<",["code","click"],"|",["code","hover"],"|",["code","contextMenu"],">"],["td","[",["code","hover"],"]"],["td"]],["tr",["td","type"],["td","Type of the button, the same as ",["a",{title:null,href:"/components/button/#API"},"Button"]],["td","string"],["td",["code","default"]],["td"]],["tr",["td","visible"],["td","Whether the dropdown menu is currently visible"],["td","boolean"],["td","-"],["td"]],["tr",["td","onClick"],["td","The same as ",["a",{title:null,href:"/components/button/#API"},"Button"],": called when you click the button on the left"],["td","(event) => void"],["td","-"],["td"]],["tr",["td","onVisibleChange"],["td","Called when the visible state is changed"],["td","(visible: boolean) => void"],["td","-"],["td"]]]]]}}}]);
