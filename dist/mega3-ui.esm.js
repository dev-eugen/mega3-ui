import { ref, defineComponent, resolveComponent, resolveDirective, openBlock, createBlock, withDirectives, withModifiers, createTextVNode, toDisplayString, createVNode, renderSlot, vShow, resolveDynamicComponent, createCommentVNode } from 'vue';

function useVisible() {
  const visible = ref(false);

  const visibleFalse = () => visible.value = false;

  const visibleTrue = () => visible.value = true;

  return {
    visible,
    visibleFalse,
    visibleTrue
  };
}

var script$1 = /*#__PURE__*/defineComponent({
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

  setup(props) {
    return { ...useVisible()
    };
  }

});

const _hoisted_1$1 = {
  class: "relative inline-block text-left"
};
const _hoisted_2 = {
  class: "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "options-menu"
};
const _hoisted_3 = {
  class: "py-1",
  role: "none"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChevronDownIcon = resolveComponent("ChevronDownIcon");

  const _component_dots_vertical_icon = resolveComponent("dots-vertical-icon");

  const _directive_click_outside = resolveDirective("click-outside");

  return openBlock(), createBlock("div", _hoisted_1$1, [!_ctx.small ? withDirectives((openBlock(), createBlock("button", {
    key: 0,
    type: "button",
    onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.visibleTrue && _ctx.visibleTrue(...args), ["stop"])),
    class: "inline-flex justify-center rounded-md border w-full border-gray-300 shadow-sm px-4 py-2 bg-green-light text-sm font-medium text-white hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-light",
    id: "options-menu",
    "aria-expanded": "true",
    "aria-haspopup": "true"
  }, [createTextVNode(toDisplayString(_ctx.title), 1), createVNode(_component_ChevronDownIcon, {
    class: "h-5 w-5 text-white -mr-1 ml-2"
  })], 512)), [[_directive_click_outside, _ctx.visibleFalse]]) : withDirectives((openBlock(), createBlock("button", {
    key: 1,
    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.visibleTrue && _ctx.visibleTrue(...args)),
    type: "button",
    class: "bg-white rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-light",
    id: "options-menu",
    "aria-expanded": "true",
    "aria-haspopup": "true"
  }, [createVNode(_component_dots_vertical_icon, {
    class: "h-5 w-5"
  })], 512)), [[_directive_click_outside, _ctx.visibleFalse]]), withDirectives(createVNode("div", _hoisted_2, [createVNode("div", _hoisted_3, [renderSlot(_ctx.$slots, "default")])], 512), [[vShow, _ctx.visible]])]);
}

script$1.render = render$1;

var script = /*#__PURE__*/defineComponent({
  name: "MDropDownItem",
  // vue component name
  props: {
    icon: {
      type: String,
      default: null
    }
  }
});

const _hoisted_1 = {
  class: "group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
  role: "menuitem"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", null, [createVNode("a", _hoisted_1, [_ctx.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), {
    key: 0,
    class: "mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
  })) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default")])]);
}

script.render = render;

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MDropDown: script$1,
    MDropDownItem: script
});

// Import vue components

const install = function installMega3Ui(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script$1 as MDropDown, script as MDropDownItem };
