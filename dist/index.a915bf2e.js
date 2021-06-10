// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4de8m":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "70dca43e1ee77af44d4d7940a915bf2e";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"4B4Nd":[function(require,module,exports) {
var _componentsNavigation = require('./components/navigation');
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _componentsNavigationDefault = _parcelHelpers.interopDefault(_componentsNavigation);
require('./components/tasklist');
require('./components/addButton');
const links = document.querySelectorAll('.top-nav > ul > li > a');
const pages = document.querySelectorAll('.page-container');
var nav = new _componentsNavigationDefault.default(links, pages);
nav.getLinks();
nav.links.forEach(function (link) {
  link.addEventListener('click', function () {
    let pageId = nav.getHash(link);
    nav.setPage(pageId);
  });
});
var taskListArray = [];
console.log(taskListArray);
const subLinks = document.querySelectorAll('.sub-nav > ul > li > a');
const subPages = document.querySelectorAll('.sub-page-container');
var subNav = new _componentsNavigationDefault.default(subLinks, subPages);
subNav.links.forEach(link => {
  link.addEventListener('click', function () {
    let pageId = subNav.getHash(link);
    /*
    if(pageId == "page1-2") {
    console.log('kanban')
    initKanban(taskListArray);
    }
    */
    subNav.setPage(pageId);
  });
});

},{"./components/navigation":"2K1cj","./components/tasklist":"Rj9Cl","./components/addButton":"1wlmT","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"2K1cj":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
class Navigation {
  constructor(links, pages) {
    this.links = links;
    this.pages = pages;
    this.currentPage = null;
  }
  getLinks() {
    console.log(this.links);
  }
  setPage(pageId) {
    this.currentPage = pageId;
    console.log(this.currentPage);
    this.links.forEach(link => {
      link.classList.remove('active');
      if (this.getHash(link) === pageId) {
        link.classList.add('active');
      }
    });
    this.pages.forEach(page => {
      page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = "block";
  }
  getHash(link) {
    return link.href.split("#")[1];
  }
}
exports.default = Navigation;

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"Rj9Cl":[function(require,module,exports) {
//set a value whereby - if it is done it equals to 1, if it is not done it equals to 2 otherwise it is 3 
//then afterwards when showing the title for Kanban Board, if the value = 1, show array data that has assigned value of 1 etc


const form = document.getElementById("taskform")
const button = document.querySelector("#taskform > button")
var taskInput = document.getElementById("taskInput");
/* Added a > div to direct the tasklist inside div container - for flexbox element*/
var tasklist = document.querySelector("#tasklist > ul > div");

/*
var homeLink = document.querySelector(".button").onclick = function() {
  location.href = "http://localhost:1234/#page1";
};

*/

var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");

var taskListArray = JSON.parse(localStorage.getItem('tasks'));
var customColumnName = document.getElementById("kanbanColumnName"); //gets value from columnName label input 


button.addEventListener("click", function(event){
  event.preventDefault();
  let task = taskInput.value;
  let dueDate = dueDateInput.value;
  let completionTime = completionTimeInput.value;
  let estimatedTime = estimatedTimeInput.value;
  let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
  if(task == "" || dueDate == "" || completionTime == "" || estimatedTime == "" || priorityRating == ""){
    alert('You are missing input fields! Be sure to fill in all fields to add your task!');
  } else{
    addTask(task, dueDate, priorityRating, estimatedTime, completionTime, false);
  }
  
})


/*
  $('#taskform input').each(function() {
    if ($(this).val() === '') {
      formInvalid = true;
    } else{
      addTask(task, dueDate, priorityRating, estimatedTime, completionTime, false);
    }
  });

  if (formInvalid)
    alert('One or Two fields are empty. Please fill up all fields');
  
  */




/*ValidateForm test 
function ValidateForm() {

  var formInvalid = false;
  $('#taskform input').each(function() {
    if ($(this).val() === '') {
      formInvalid = true;
    } else{
      return false;
    }
  });

  if (formInvalid)
    alert('One or Two fields are empty. Please fill up all fields');
  
  
  
  
}
*/

function addTask(taskDescription, dueDate, priorityRating, estimatedTime, completionTime, completionStatus) {
  let d = new Date();
  let dateCreated = d.getFullYear(); 
  let task = {
    id: Date.now(), 
    title: taskDescription,
    dueDate,
    dateCreated,
    priorityRating,
    estimatedTime,
    completionTime,
    completionStatus
  };
  
  //Code for local storage setting it inside Kanban
  taskListArray = JSON.parse(localStorage.getItem('tasks'));
  if (!taskListArray) {
    taskListArray = [];
  }
  console.log(taskListArray)
  taskListArray.push(task);
  localStorage.setItem('tasks', JSON.stringify(taskListArray));
  //adds element to inProgress when entering new task  - shows it on Kanban Board
  //This is because when adding a task it is in progress of either being done or not done depending on what the user picks
  

  console.log(kanban)
  renderTask(task);
  
}


function renderTask(task){
  //if tasklist array is not empty; loop thorugh each task thats in there and populate inside item area
  updateEmpty();

  // Create HTML elements
  //Find way to add all elements, e.g. task, due date, completion time etc to 1 task 
 
 /* Then you'll need to add the element to the page */
  let item = document.createElement("div");
  
  item.classList.add("task-list-boxes");
  item.setAttribute('data-id', task.id);
  item.innerHTML = "<h2>" + task.title + "</h2>" + "<hr>" + "<p>" + "Due Date: " + task.dueDate + "</p>" + "<p>" + "Completion Time: " + task.completionTime  + "</p>" 
  + "<p>" + "Estimated Time: " + task.estimatedTime + " minutes" + "</p>" + "<p>" + "Priority Rating: " + task.priorityRating + "</p>";
  tasklist.appendChild(item);



  // Extra Task DOM elements 

  kanban.addElement('_inprogress', task);


  //Done Button
  let doneButton = document.createElement("button");
  doneButton.classList.add("done-button");
  let doneButtonText = document.createTextNode("Done");
  doneButton.appendChild(doneButtonText);

  
  doneButton.onclick = ("click", function(){
    kanban.addElement('_done', task);
    kanban.removeElement('_inprogress', task);
  });
  //Need to use whereby if the button is clicked for done - it will only be that task in there and not inside to do
  //Need to have if statements or conditions where if done button or not done button is clicked, it will move it 
  //accordingly and remove it from inProgress section

  //Not Done Button
  let notDoneButton = document.createElement("button");
  notDoneButton.classList.add("not-done-button");
  let notDoneText = document.createTextNode("Not Done");
  notDoneButton.appendChild(notDoneText);
  notDoneButton.onclick = ("click", function(){
    kanban.addElement('_todo', task) 
    kanban.removeElement('_inprogress', task);
  });



  //button div container - to align positioning
  let btnContainer = document.createElement("div");
  btnContainer.classList.add("task-list-buttons");
  btnContainer.appendChild(doneButton);
  btnContainer.appendChild(notDoneButton);
  //btnContainer.innerHTML = '<button class = "done-button"> Done </button>' + '<button class = "not-done-button"> Not Done </button>';
  item.appendChild(btnContainer);

  //Problem is that its not appending the individual buttons to item
  //Could do appendChild to btnContainer --> appendChild worked

  

  




  //Event Listeners for DOM elements; current problem is that only done/not done button works for 1st div box, doesn't work for others
  //It also gets rid of all div elements 
  doneButton.addEventListener("click", function(event){
    event.preventDefault();
    let id = event.target.parentElement.getAttribute('data-id');
    let index = taskListArray.findIndex(task => task.id === Number(id));
    removeItemFromArray(taskListArray, index);
    updateEmpty();
    item.remove();
    //Add function where if it is done - the header element from the textbox which is clicked on - will be added to Kanban Board 
    //"done section" 
  })


  notDoneButton.addEventListener("click", function(event){
    event.preventDefault();
    let id = event.target.parentElement.getAttribute('data-id');
    let index = taskListArray.findIndex(task => task.id === Number(id));
    removeItemFromArray(taskListArray, index);
    updateEmpty();
    item.remove();
    //Add function where if it is done - the header element from the textbox which is clicked on - will be added to Kanban Board 
    //"done section" 
  })


  // Clear the input form 
  form.reset();
}


function removeItemFromArray(arr, index){
  if (index > -1){
    arr.splice(index, 1);
  }
  return arr;
}

function updateEmpty(){
  let taskListArray = JSON.parse(localStorage.getItem('tasks'));
  if (taskListArray.length > 0){
    document.getElementById('emptylist').style.display = 'none';
  } else {
    document.getElementById('emptylist').style.display = 'block';
  }
}

//Kanban Board initalised after, alongside defined as well. 

var kanban = new jKanban({  
    element : '#myKanban',
    gutter  : '15px',
    responsivePercentage: false,
    boards  :[
        {
            'id' : '_todo',
            'title'  : 'To Do',
            'class' : 'info',
            'item'  : taskListArray
        },
        {
            'id' : '_inprogress',
            'title'  : 'In Progress',
            'class' : 'warning',
            'item'  : [
                {
                    'title': 'Hello!'
                }
            ]
        },
        { 
            'id' : '_done',
            'title'  : 'Done',
            'class' : 'success',
            'item'  : [
                {
                    'title':'Finish assignment',
                },
                {
                    'title':'Ok!',
                }
            ]
        }
    ]
});

var addBoardDefault = document.getElementById('addDefault'); //addButton to add extra kanban column
addBoardDefault.addEventListener('click', function () {
    if (customColumnName.value == ""){ //added value checker - if it is empty, it will send alert and 
      alert ("You have not entered in your column name!")
    }
    else{
      kanban.addBoards(
        [{
            'id' : '_default',
            'title'  : customColumnName.value, //this gets input from form label textbox and makes it as the Kanban column title
            'class' : 'error',
            'item'  : [
                {
                    'title':'Default Item',
                },
                {
                    'title':'Default Item 2',
                }
            ]
        }]
    )
      alert("Added new column!");
    }
    document.querySelector("#addColumn").reset();
});


},{}],"1wlmT":[function(require,module,exports) {
const BtnAdd = document.querySelector(".buttonTag");

BtnAdd.addEventListener("click", AddNew);

function AddNew(){
    const newDiv = document.createElement("div");
    document.getElementById('task-box').appendChild(newDiv);
}
},{}]},["4de8m","4B4Nd"], "4B4Nd", "parcelRequirec526")

//# sourceMappingURL=index.a915bf2e.js.map
