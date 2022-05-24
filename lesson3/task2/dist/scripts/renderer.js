function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import "core-js/modules/es.array.map.js";
import "core-js/modules/es.array.sort.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.array.from.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.regexp.exec.js";
var listElem = document.querySelector('.list');

var compareTasks = function compareTasks(first, second) {
  return first.done - second.done;
};

var createCheckbox = function createCheckbox(_ref) {
  var done = _ref.done,
      id = _ref.id;
  var checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.classList.add('list-item__checkbox');
  return checkboxElem;
};

export var createListItem = function createListItem(_ref2) {
  var text = _ref2.text,
      done = _ref2.done,
      id = _ref2.id;
  var listItemElem = document.createElement('li');
  listItemElem.classList.add('list-item');
  var checkboxElem = createCheckbox({
    done: done,
    id: id
  });
  var textElem = document.createElement('span');
  textElem.classList.add('list-item__text');
  textElem.textContent = text;

  if (done) {
    listItemElem.classList.add('list-item_done');
    textElem.classList.add('list-item__text', 'list-item_done');
  }

  var deleteBtnElem = document.createElement('button');
  deleteBtnElem.setAttribute('data-id', id);
  deleteBtnElem.classList.add('list-item__delete-btn');
  listItemElem.append(checkboxElem, textElem, deleteBtnElem);
  return listItemElem;
};
export var renderTasks = function renderTasks(tasksList) {
  var sortedTasksList = tasksList.sort(compareTasks).map(createListItem);
  listElem.append.apply(listElem, _toConsumableArray(sortedTasksList));
};