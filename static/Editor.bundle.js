(window.webpackJsonp=window.webpackJsonp||[]).push([[2,1],{118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.startFromScratch=t.BaseEditor=void 0,t.startFromText=function(e){var t=o.ContentState.createFromText(e);return o.EditorState.createWithContent(t,r.default)};var o=n(48),r=u(n(148)),a=u(n(144));function u(e){return e&&e.__esModule?e:{default:e}}t.BaseEditor=a.default;t.startFromScratch=function(){return o.EditorState.createEmpty(r.default)}},144:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.editorState,n=e.onChange,o=e.readOnly,r=e.handleKeyCommand,i=e.keyBinding,c=e.setRef,l=function(){};return r&&i?a.default.createElement(u.Editor,{editorState:t,onChange:n||l,handleKeyCommand:r,keyBindingFn:i,ref:c||l}):a.default.createElement(u.Editor,{editorState:t,onChange:n||l,ref:c||l,readOnly:o||!1})};var o,r=n(1),a=(o=r)&&o.__esModule?o:{default:o},u=n(48)},145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(1),a=(o=r)&&o.__esModule?o:{default:o};t.default=[{strategy:function(e,t,n){var o=e.getText();0===o.ltrim().indexOf("#")&&t(1,o.length)},component:function(e){return a.default.createElement("span",{style:{fontSize:"28px"}},e.children)}},{strategy:function(e,t){0===e.getText().ltrim().indexOf("#")&&t(0,1)},component:function(e){return a.default.createElement("span",{style:{fontSize:"28px",color:"#ccc"}},e.children)}}]},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(1),a=(o=r)&&o.__esModule?o:{default:o};t.default=[{strategy:function(e,t,n){var o=e.getText();0===o.ltrim().indexOf("##")&&t(2,o.length)},component:function(e){return a.default.createElement("span",{style:{fontSize:"24px"}},e.children)}},{strategy:function(e,t){0===e.getText().ltrim().indexOf("##")&&t(0,2)},component:function(e){return a.default.createElement("span",{style:{fontSize:"24px",color:"#ccc"}},e.children)}}]},147:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(1),a=(o=r)&&o.__esModule?o:{default:o};t.default=[{strategy:function(e,t,n){var o=e.getText();0===o.ltrim().indexOf("###")&&t(3,o.length)},component:function(e){return a.default.createElement("span",{style:{fontSize:"20px"}},e.children)}},{strategy:function(e,t){0===e.getText().ltrim().indexOf("###")&&t(0,3)},component:function(e){return a.default.createElement("span",{style:{fontSize:"20px",color:"#ccc"}},e.children)}}]},148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i(n(1));var o=n(48),r=i(n(147)),a=i(n(146)),u=i(n(145));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}String.prototype.ltrim=function(){return this.replace(/(^\s*)/g,"")},t.default=new o.CompositeDecorator([].concat(c(r.default),c(a.default),c(u.default)))},149:function(e,t,n){e.exports=n.p+"b4fba700a360126cd45302afa4426fa5.png"},150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.editorState,n=e.onChange,u=e.setRef;return o.default.createElement("div",{style:{lineHeight:"1.5",fontSize:"17px",cursor:"text",height:"100%",overflow:"auto",backgroundImage:"url("+a.default+")"}},o.default.createElement("div",{style:{padding:"15px"}},o.default.createElement(r.Editor,{editorState:t,onChange:n,ref:u,placeholder:"Do less, get more"})))};var o=u(n(1)),r=n(48),a=u(n(149));function u(e){return e&&e.__esModule?e:{default:e}}},151:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(48);t.default=function(e){var t=e.getCurrentContent().getBlockMap(),n=t.last().getKey(),r=t.last().getLength(),a=new o.SelectionState({anchorKey:n,anchorOffset:r,focusKey:n,focusOffset:r});return o.EditorState.acceptSelection(e,a)}},152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=l(n(7)),a=l(n(1)),u=n(118),i=l(n(151)),c=l(n(150));function l(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={editorState:(0,u.startFromScratch)(),itemId:Date.parse(new Date)/1e3,dom:null},n.setRef=function(e){return n.setState({dom:e})},n.props.tube.focus=n.focus.bind(n),n.props.tube.reduce=n.reduce.bind(n),n.props.tube.getNote=n.getNote.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"reduce",value:function(e,t){this.setState(function(t){var n={content:t.editorState.getCurrentContent().getPlainText(),itemId:t.itemId},o=e(n);return(0,r.default)(void 0!=o.content&&o.itemId,"editor reduce需要返回一个完整的note"),{editorState:(0,u.startFromText)(o.content),itemId:o.itemId}},t)}},{key:"getNote",value:function(){return{content:this.state.editorState.getCurrentContent().getPlainText(),itemId:this.state.itemId}}},{key:"onChange",value:function(e){var t=this,n=e.getCurrentContent().getPlainText();this.setState({editorState:e},function(){t.props.onChange&&t.props.onChange({content:n,itemId:t.state.itemId})})}},{key:"focus",value:function(){var e=this;"true"!=document.activeElement.contentEditable&&this.setState(function(e){return{editorState:(0,i.default)(e.editorState)}},function(){e.state.dom.focus()})}},{key:"render",value:function(){return a.default.createElement(c.default,{editorState:this.state.editorState,onChange:this.onChange.bind(this),setRef:this.setRef})}}]),t}();t.default=f},153:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=c(n(40)),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(39);var a=c(n(1)),u=n(9),i=c(n(152));function c(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.oldText="",n.tube=n.props.tube,n.tube.addTagContent=n.addTagContent.bind(n),n.tube.save=n.save.bind(n),n.tube.replace=n.replace.bind(n),n.tube.newNote=n.newNote.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"addTagContent",value:function(e){var t=this,n=this.oldText,o=void 0;o="-"==n[n.length-1]?" "+e+" -":"\n- "+e+" -",this.oldText+=o,this.tube.reduce(function(e){return window.localStorage.setItem("_editorNote",JSON.stringify({content:t.oldText,itemId:e.itemId})),{content:t.oldText,itemId:e.itemId}})}},{key:"replace",value:function(e,t){var n=this;window.localStorage.setItem("_currentEditorNote",JSON.stringify(e)),this.tube.reduce(function(t){return e},function(){n.oldText=n.tube.getNote().content})}},{key:"save",value:function(){var e=this,t=this.tube.getNote();if(localStorage.getItem("_editorNote")&&""==JSON.parse(localStorage.getItem("_editorNote")).content)return o.default.info("没有编辑，无需保存",1,null,!1),void(this.props.onSave&&this.props.onSave(t));u.Model.dispatch({type:"editor/save",note:t,callback:function(t){e.newNote(),e.props.onSave&&e.props.onSave(t)}})}},{key:"newNote",value:function(){var e=Date.parse(new Date)/1e3;this.tube.reduce(function(t){return{content:"",itemId:e}},function(){return window.localStorage.setItem("_editorNote",JSON.stringify({content:"",itemId:e}))})}},{key:"onChange",value:function(e){var t=e.content;t!==this.oldText&&(this.oldText=t,window.localStorage.setItem("_editorNote",JSON.stringify({content:t,itemId:e.itemId})))}},{key:"render",value:function(){return a.default.createElement(i.default,{onChange:this.onChange.bind(this),tube:this.props.tube})}}]),t}();t.default=l},242:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(40)),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(39);var a=i(n(1)),u=i(n(153));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.tube={},e.tube.addTagContent=function(e){return n.tube.addTagContent(e)},e.tube.save=function(){return n.tube.save()},e.tube.focus=function(){return n.tube.focus()},e.tube.edit=function(e){if(localStorage.getItem("_editorNote")){var t=JSON.parse(localStorage.getItem("_editorNote"));if(t.content)return n.tube.replace(t),void o.default.info("上次的文章未保存",1.5)}e?n.tube.replace(e):n.tube.newNote()},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"render",value:function(){return a.default.createElement(u.default,{tube:this.tube,onSave:this.props.onSave})}}]),t}();t.default=c}}]);