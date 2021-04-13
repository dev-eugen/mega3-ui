'use strict';var vue=require('vue');function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}function useVisible() {
  var visible = vue.ref(false);

  var visibleFalse = function visibleFalse() {
    return visible.value = false;
  };

  var visibleTrue = function visibleTrue() {
    return visible.value = true;
  };

  return {
    visible: visible,
    visibleFalse: visibleFalse,
    visibleTrue: visibleTrue
  };
}var script$1 = /*#__PURE__*/vue.defineComponent({
  name: "MDropDown",
  // vue component name
  props: {
    title: {
      type: String,
      default: ''
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props) {
    return _objectSpread2({}, useVisible());
  }
});var _hoisted_1$1 = {
  class: "relative inline-block text-left"
};
var _hoisted_2 = {
  class: "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "options-menu"
};
var _hoisted_3 = {
  class: "py-1",
  role: "none"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ChevronDownIcon = vue.resolveComponent("ChevronDownIcon");

  var _component_dots_vertical_icon = vue.resolveComponent("dots-vertical-icon");

  var _directive_click_outside = vue.resolveDirective("click-outside");

  return vue.openBlock(), vue.createBlock("div", _hoisted_1$1, [!_ctx.small ? vue.withDirectives((vue.openBlock(), vue.createBlock("button", {
    key: 0,
    type: "button",
    onClick: _cache[1] || (_cache[1] = vue.withModifiers(function () {
      return _ctx.visibleTrue && _ctx.visibleTrue.apply(_ctx, arguments);
    }, ["stop"])),
    class: "inline-flex justify-center rounded-md border w-full border-gray-300 shadow-sm px-4 py-2 bg-green-light text-sm font-medium text-white hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-light",
    id: "options-menu",
    "aria-expanded": "true",
    "aria-haspopup": "true"
  }, [vue.createTextVNode(vue.toDisplayString(_ctx.title), 1), vue.createVNode(_component_ChevronDownIcon, {
    class: "h-5 w-5 text-white -mr-1 ml-2"
  })], 512)), [[_directive_click_outside, _ctx.visibleFalse]]) : vue.withDirectives((vue.openBlock(), vue.createBlock("button", {
    key: 1,
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.visibleTrue && _ctx.visibleTrue.apply(_ctx, arguments);
    }),
    type: "button",
    class: "bg-white rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-light",
    id: "options-menu",
    "aria-expanded": "true",
    "aria-haspopup": "true"
  }, [vue.createVNode(_component_dots_vertical_icon, {
    class: "h-5 w-5"
  })], 512)), [[_directive_click_outside, _ctx.visibleFalse]]), vue.withDirectives(vue.createVNode("div", _hoisted_2, [vue.createVNode("div", _hoisted_3, [vue.renderSlot(_ctx.$slots, "default")])], 512), [[vue.vShow, _ctx.visible]])]);
}script$1.render = render$1;var script = /*#__PURE__*/vue.defineComponent({
  name: "MDropDownItem",
  // vue component name
  props: {
    icon: {
      type: String,
      default: null
    }
  }
});var _hoisted_1 = {
  class: "group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
  role: "menuitem"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", null, [vue.createVNode("a", _hoisted_1, [_ctx.icon ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon), {
    key: 0,
    class: "mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
  })) : vue.createCommentVNode("", true), vue.renderSlot(_ctx.$slots, "default")])]);
}script.render = render;/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,MDropDown: script$1,MDropDownItem: script});var install = function installMega3Ui(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,MDropDown: script$1,MDropDownItem: script});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;