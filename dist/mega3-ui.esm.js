import { ref, defineComponent, resolveComponent, resolveDirective, openBlock, createBlock, withDirectives, withModifiers, renderSlot, createVNode, vShow, Transition, withCtx, resolveDynamicComponent, createCommentVNode, computed as computed$1, toDisplayString, createTextVNode } from 'vue';

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

var script$a = /*#__PURE__*/defineComponent({
  name: "MDropDown",
  // vue component name
  props: {
    noIcon: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'indigo'
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

const _hoisted_1$8 = {
  class: "relative inline-block text-left"
};
const _hoisted_2$3 = {
  class: "transition duration-200 transform origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "options-menu"
};
const _hoisted_3$2 = {
  class: "py-1",
  role: "none"
};
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChevronDownIcon = resolveComponent("ChevronDownIcon");

  const _component_dots_vertical_icon = resolveComponent("dots-vertical-icon");

  const _directive_click_outside = resolveDirective("click-outside");

  return openBlock(), createBlock("div", _hoisted_1$8, [!_ctx.small ? withDirectives((openBlock(), createBlock("button", {
    key: 0,
    type: "button",
    onClick: _cache[1] || (_cache[1] = withModifiers($event => _ctx.visible = !_ctx.visible, ["stop"])),
    class: `inline-flex justify-center items-center rounded-md border w-full border-gray-300 shadow-sm px-4 py-2 bg-${_ctx.color}-600 text-sm font-medium text-white hover:bg-${_ctx.color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-${_ctx.color}-600`,
    id: "options-menu",
    "aria-expanded": "true",
    "aria-haspopup": "true"
  }, [renderSlot(_ctx.$slots, "body"), withDirectives(createVNode(_component_ChevronDownIcon, {
    class: "h-5 w-5 text-white -mr-1 ml-2"
  }, null, 512), [[vShow, !_ctx.noIcon]])], 2)), [[_directive_click_outside, _ctx.visibleFalse]]) : withDirectives((openBlock(), createBlock("button", {
    key: 1,
    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.visibleTrue && _ctx.visibleTrue(...args)),
    type: "button",
    class: `bg-white rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-${_ctx.color}-600`,
    id: "options-menu",
    "aria-expanded": "true",
    "aria-haspopup": "true"
  }, [createVNode(_component_dots_vertical_icon, {
    class: "h-5 w-5"
  })], 2)), [[_directive_click_outside, _ctx.visibleFalse]]), createVNode(Transition, {
    "enter-active-class": "opacity-0 scale-50",
    "leave-active-class": "opacity-0 scale-50"
  }, {
    default: withCtx(() => [withDirectives(createVNode("div", _hoisted_2$3, [createVNode("div", _hoisted_3$2, [renderSlot(_ctx.$slots, "default")])], 512), [[vShow, _ctx.visible]])]),
    _: 3
  })]);
}

script$a.render = render$9;

var script$9 = /*#__PURE__*/defineComponent({
  name: "MDropDownItem",
  // vue component name
  props: {
    icon: {
      type: String,
      default: null
    }
  }
});

const _hoisted_1$7 = {
  class: "group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
  role: "menuitem"
};
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", null, [createVNode("a", _hoisted_1$7, [_ctx.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), {
    key: 0,
    class: "mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
  })) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default")])]);
}

script$9.render = render$8;

const _hoisted_1$6 = {
  class: "bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200"
};
var script$8 = {
  expose: [],
  props: {
    justify: {
      type: String,
      default: "start"
    },
    noHead: {
      type: Boolean,
      default: false
    }
  },

  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock("div", _hoisted_1$6, [withDirectives(createVNode("div", {
        class: 'px-4 py-5 sm:px-6 flex justify-' + __props.justify
      }, [renderSlot(_ctx.$slots, "head")], 2), [[vShow, !__props.noHead]]), createVNode("div", {
        class: 'px-4 py-5 sm:p-6 flex justify-' + __props.justify
      }, [renderSlot(_ctx.$slots, "body")], 2)]);
    };
  }

};

var script$7 = {
  props: {
    color: {
      type: String,
      default: "indigo"
    },
    icon: {
      type: String,
      default: null
    },
    rounded: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md'
    }
  },

  setup(props) {
    const round = computed$1(() => {
      return props.rounded ? 'full' : 'md';
    });
    const font = computed$1(() => {
      return props.size === 'lg' ? '3xl' : props.size === 'md' ? 'lg' : 'sm';
    });
    const h = computed$1(() => {
      return props.size === 'lg' ? 10 : props.size === 'md' ? 9 : 7;
    });
    const px = computed$1(() => {
      return props.size === 'lg' ? 7 : props.size === 'md' ? 5 : 3;
    });
    return {
      round,
      px,
      h,
      font
    };
  }

};

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("button", {
    type: "button",
    class: `flex justify-center items-center px-${$setup.px} h-${$setup.h} border border-transparent font-medium rounded-${$setup.round} shadow-sm text-white bg-${$props.color}-600 hover:bg-${$props.color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${$props.color}-500`
  }, [$props.icon ? (openBlock(), createBlock(resolveDynamicComponent($props.icon), {
    key: 0,
    class: "h-4 w-4 mr-2 -ml-1.5"
  })) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default")], 2);
}

script$7.render = render$7;

var script$6 = {
  props: {
    color: {
      type: String,
      default: "indigo"
    },
    icon: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: 'md'
    }
  },

  setup(props) {
    computed$1(() => {
      return props.size === 'lg' ? 6 : props.size === 'md' ? 4 : 3;
    });
    const h = computed$1(() => {
      return props.size === 'lg' ? 12 : props.size === 'md' ? 10 : 8;
    });
    return {
      h
    };
  }

};

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("button", {
    type: "button",
    class: ` m-1 flex justify-center items-center w-${$setup.h} h-${$setup.h} border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-${$props.color}-600 hover:bg-${$props.color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${$props.color}-500`
  }, [$props.icon ? (openBlock(), createBlock(resolveDynamicComponent($props.icon), {
    key: 0,
    class: `h-${$props.size} w-${$props.size}`
  }, null, 8, ["class"])) : createCommentVNode("", true)], 2);
}

script$6.render = render$6;

function SetupFormComponent(props, {
  emit
}) {
  const updateValue = event => {
    let val = event.target.value;
    if (event.target.type === 'checkbox') val = event.target.checked;
    if (event.target.type === 'radio') val = props.value;
    emit('update:modelValue', val);
  };

  return {
    updateValue
  };
}

let UUID = 1;
function UniqueID() {
  const getID = () => {
    UUID++;
    return UUID;
  };

  return {
    getID
  };
}

var script$5 = defineComponent({
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: null
    },
    error: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    ariaDescribedby: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    }
  },

  setup(props, context) {
    context.emit('update:modelValue', props.modelValue);
    const {
      updateValue
    } = SetupFormComponent(props, context);
    const uuid = UniqueID().getID();
    return {
      updateValue,
      uuid
    };
  }

});

const _hoisted_1$5 = {
  class: "mt-1"
};
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", null, [withDirectives(createVNode("label", {
    for: _ctx.uuid,
    class: "block text-sm font-medium text-gray-700"
  }, toDisplayString(_ctx.label), 9, ["for"]), [[vShow, _ctx.label]]), createVNode("div", _hoisted_1$5, [createVNode("input", {
    onInput: _cache[1] || (_cache[1] = (...args) => _ctx.updateValue && _ctx.updateValue(...args)),
    id: _ctx.uuid,
    value: _ctx.modelValue,
    "aria-describedby": _ctx.error ? `${_ctx.uuid}-error` : null,
    "aria-invalid": _ctx.error ? true : false,
    type: "text",
    name: _ctx.name,
    class: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md",
    placeholder: _ctx.placeholder
  }, null, 40, ["id", "value", "aria-describedby", "aria-invalid", "name", "placeholder"])]), withDirectives(createVNode("p", {
    class: "mt-2 text-sm text-red-600",
    id: "ariaDescribedby"
  }, toDisplayString(_ctx.error), 513), [[vShow, _ctx.error]])]);
}

script$5.render = render$5;

var script$4 = {
  props: {
    textSize: {
      type: String,
      default: 'md'
    },
    color: {
      type: String
    },
    open: {
      type: Boolean,
      require: false
    },
    icon: {
      type: String,
      default: null
    },
    okTitle: {
      type: String,
      default: 'Accept'
    },
    cancelTitle: {
      type: String,
      default: 'Cancel'
    }
  },

  setup(props, {
    emit
  }) {
    const accept = () => {
      emit('close');
      emit('accept');
    };

    const cancel = () => {
      emit('close');
      emit('cancel');
    };

    return {
      cancel,
      accept
    };
  }

};

const _hoisted_1$4 = {
  class: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
};

const _hoisted_2$2 = /*#__PURE__*/createVNode("span", {
  class: "hidden sm:inline-block sm:align-middle sm:h-screen",
  "aria-hidden": "true"
}, "​", -1);

const _hoisted_3$1 = {
  class: "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
};
const _hoisted_4$1 = {
  class: "mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense"
};
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DialogOverlay = resolveComponent("DialogOverlay");

  const _component_TransitionChild = resolveComponent("TransitionChild");

  const _component_Dialog = resolveComponent("Dialog");

  const _component_TransitionRoot = resolveComponent("TransitionRoot");

  return openBlock(), createBlock(_component_TransitionRoot, {
    as: "template",
    show: $props.open
  }, {
    default: withCtx(() => [createVNode(_component_Dialog, {
      as: "div",
      static: "",
      class: "fixed z-10 inset-0 overflow-y-auto",
      onClose: _cache[3] || (_cache[3] = $event => _ctx.$emit('close')),
      open: $props.open
    }, {
      default: withCtx(() => [createVNode("div", _hoisted_1$4, [createVNode(_component_TransitionChild, {
        as: "template",
        enter: "ease-out duration-300",
        "enter-from": "opacity-0",
        "enter-to": "opacity-100",
        leave: "ease-in duration-200",
        "leave-from": "opacity-100",
        "leave-to": "opacity-0"
      }, {
        default: withCtx(() => [createVNode(_component_DialogOverlay, {
          class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        })]),
        _: 1
      }), _hoisted_2$2, createVNode(_component_TransitionChild, {
        as: "template",
        enter: "ease-out duration-300",
        "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        "enter-to": "opacity-100 translate-y-0 sm:scale-100",
        leave: "ease-in duration-200",
        "leave-from": "opacity-100 translate-y-0 sm:scale-100",
        "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      }, {
        default: withCtx(() => [createVNode("div", _hoisted_3$1, [createVNode("div", {
          class: `text-${$props.textSize}`
        }, [renderSlot(_ctx.$slots, "default")], 2), createVNode("div", _hoisted_4$1, [createVNode("button", {
          onClick: _cache[1] || (_cache[1] = (...args) => $setup.accept && $setup.accept(...args)),
          type: "button",
          class: `w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-${$props.color}-600 text-base font-medium text-white hover:bg-${$props.color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${$props.color}-500 sm:col-start-2 sm:text-sm`
        }, toDisplayString($props.okTitle), 3), createVNode("button", {
          onClick: _cache[2] || (_cache[2] = (...args) => $setup.cancel && $setup.cancel(...args)),
          type: "button",
          class: `mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${$props.color}-500 sm:mt-0 sm:col-start-1 sm:text-sm`,
          ref: "cancelButtonRef"
        }, toDisplayString($props.cancelTitle), 3)])])]),
        _: 3
      })])]),
      _: 1
    }, 8, ["open"])]),
    _: 1
  }, 8, ["show"]);
}

script$4.render = render$4;

var script$3 = {
  props: {
    color: {
      type: String
    },
    open: {
      type: Boolean,
      require: false
    },
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    okTitle: {
      type: String,
      default: 'Accept'
    },
    cancelTitle: {
      type: String,
      default: 'Cancel'
    }
  },

  setup(props, {
    emit
  }) {
    const accept = () => {
      emit('close');
      emit('accept');
    };

    const cancel = () => {
      emit('close');
      emit('cancel');
    };

    return {
      cancel,
      accept
    };
  }

};

const _hoisted_1$3 = {
  class: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
};

const _hoisted_2$1 = /*#__PURE__*/createVNode("span", {
  class: "hidden sm:inline-block sm:align-middle sm:h-screen",
  "aria-hidden": "true"
}, "​", -1);

const _hoisted_3 = {
  class: "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
};
const _hoisted_4 = {
  class: "hidden sm:block absolute top-0 right-0 pt-4 pr-4"
};

const _hoisted_5 = /*#__PURE__*/createVNode("span", {
  class: "sr-only"
}, "Close", -1);

const _hoisted_6 = {
  class: "sm:flex sm:items-start"
};
const _hoisted_7 = {
  class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
};
const _hoisted_8 = {
  class: "mt-2"
};
const _hoisted_9 = {
  class: "text-sm text-gray-500"
};
const _hoisted_10 = {
  class: "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DialogOverlay = resolveComponent("DialogOverlay");

  const _component_TransitionChild = resolveComponent("TransitionChild");

  const _component_XIcon = resolveComponent("XIcon");

  const _component_DialogTitle = resolveComponent("DialogTitle");

  const _component_Dialog = resolveComponent("Dialog");

  const _component_TransitionRoot = resolveComponent("TransitionRoot");

  return openBlock(), createBlock(_component_TransitionRoot, {
    as: "template",
    show: $props.open
  }, {
    default: withCtx(() => [createVNode(_component_Dialog, {
      as: "div",
      static: "",
      class: "fixed z-10 inset-0 overflow-y-auto",
      onClose: _cache[4] || (_cache[4] = $event => _ctx.$emit('close')),
      open: $props.open
    }, {
      default: withCtx(() => [createVNode("div", _hoisted_1$3, [createVNode(_component_TransitionChild, {
        as: "template",
        enter: "ease-out duration-300",
        "enter-from": "opacity-0",
        "enter-to": "opacity-100",
        leave: "ease-in duration-200",
        "leave-from": "opacity-100",
        "leave-to": "opacity-0"
      }, {
        default: withCtx(() => [createVNode(_component_DialogOverlay, {
          class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        })]),
        _: 1
      }), _hoisted_2$1, createVNode(_component_TransitionChild, {
        as: "template",
        enter: "ease-out duration-300",
        "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        "enter-to": "opacity-100 translate-y-0 sm:scale-100",
        leave: "ease-in duration-200",
        "leave-from": "opacity-100 translate-y-0 sm:scale-100",
        "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      }, {
        default: withCtx(() => [createVNode("div", _hoisted_3, [createVNode("div", _hoisted_4, [createVNode("button", {
          type: "button",
          class: `bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${$props.color}-500`,
          onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('close'))
        }, [_hoisted_5, createVNode(_component_XIcon, {
          class: "h-6 w-6",
          "aria-hidden": "true"
        })], 2)]), createVNode("div", _hoisted_6, [createVNode("div", {
          class: `mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-${$props.color}-100 sm:mx-0 sm:h-10 sm:w-10`
        }, [(openBlock(), createBlock(resolveDynamicComponent($props.icon), {
          class: `h-6 w-6 text-${$props.color}-600`,
          "aria-hidden": "true"
        }, null, 8, ["class"]))], 2), createVNode("div", _hoisted_7, [createVNode(_component_DialogTitle, {
          as: "h3",
          class: "text-lg leading-6 font-medium text-gray-900"
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString($props.title), 1)]),
          _: 1
        }), createVNode("div", _hoisted_8, [createVNode("p", _hoisted_9, toDisplayString($props.text), 1)])])]), createVNode("div", _hoisted_10, [createVNode("button", {
          onClick: _cache[2] || (_cache[2] = (...args) => $setup.accept && $setup.accept(...args)),
          type: "button",
          class: `w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-${$props.color}-600 text-base font-medium text-white hover:bg-${$props.color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${$props.color}-500 sm:ml-3 sm:w-auto sm:text-sm`
        }, toDisplayString($props.okTitle), 3), createVNode("button", {
          onClick: _cache[3] || (_cache[3] = (...args) => $setup.cancel && $setup.cancel(...args)),
          type: "button",
          class: `mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${$props.color}-500 sm:mt-0 sm:w-auto sm:text-sm`
        }, toDisplayString($props.cancelTitle), 3)])])]),
        _: 1
      })])]),
      _: 1
    }, 8, ["open"])]),
    _: 1
  }, 8, ["show"]);
}

script$3.render = render$3;

var script$2 = {
  props: {
    color: {
      type: String,
      default: "indigo"
    },
    rounded: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "md"
    },
    status: {
      type: String,
      default: "md"
    },
    img: {
      type: String,
      default: "https://images.unsplash.com/photo-1601592935678-406968278b1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  },

  setup(props) {
    const round = computed$1(() => {
      return props.rounded ? "full" : "md";
    });
    const sz = computed$1(() => {
      return props.size === "lg" ? 20 : props.size === "md" ? 12 : props.size === "sm" ? 8 : 24;
    });
    const statussz = computed$1(() => {
      return props.status === "lg" ? 6 : props.status === "md" ? 4 : props.status === "sm" ? 3 : 3;
    });
    return {
      round,
      sz,
      statussz
    };
  }

};

const _hoisted_1$2 = {
  class: "inline-block relative m-1"
};
const _hoisted_2 = {
  class: "absolute bottom-1 right-1 transform translate-y-1/2 translate-x-1/2 block border-2 border-white rounded-full"
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", null, [createVNode("span", _hoisted_1$2, [createVNode("img", {
    class: `h-${$setup.sz} w-${$setup.sz}  rounded-${$setup.round}`,
    src: `${$props.img}`,
    alt: ""
  }, null, 10, ["src"]), createVNode("span", _hoisted_2, [createVNode("span", {
    class: `block h-${$setup.statussz} w-${$setup.statussz} rounded-full bg-${$props.color}-600`
  }, null, 2)])])]);
}

script$2.render = render$2;

var script$1 = {
  props: {
    rounded: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const round = computed(() => {
      return props.rounded ? "r" : "";
    });
    return {
      round
    };
  }

};

const _hoisted_1$1 = {
  class: "relative z-0 inline-flex shadow-sm"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", null, [createVNode("span", _hoisted_1$1, [createVNode("button", {
    type: "button",
    class: `relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-${$setup.round}`
  }, " Years ", 2)])]);
}

script$1.render = render$1;

var script = {
  props: {
    color: {
      type: String,
      default: "indigo"
    },
    round: {
      type: String,
      default: 'full'
    },
    pdngx: {
      type: String,
      default: '2'
    },
    pdngy: {
      type: String,
      default: '0.5'
    },
    txtsz: {
      type: String,
      default: 'sm'
    },
    shower: {
      type: String,
      default: 'false'
    }
  }
};

const _hoisted_1 = /*#__PURE__*/createVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-3 w-3",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [/*#__PURE__*/createVNode("path", {
  fillRule: "evenodd",
  d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
  clipRule: "evenodd"
})], -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", {
    class: `inline-flex items-center px-${$props.pdngx} py-${$props.pdngy} rounded-${$props.round} text-${$props.txtsz} font-medium bg-${$props.color}-200 text-indigo-800`
  }, [createVNode("button", {
    class: `bg-${$props.color}-200 rounded-full mr-1 `,
    onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('delete'))
  }, [_hoisted_1], 2), renderSlot(_ctx.$slots, "default")], 2);
}

script.render = render;

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MDropDown: script$a,
    MDropDownItem: script$9,
    MPanel: script$8,
    MButton: script$7,
    MButtonIcon: script$6,
    MInput: script$5,
    MModal: script$4,
    MModalConfim: script$3,
    MAvatar: script$2,
    MButtonGroup: script$1,
    MBadges: script
});

// Import vue components

const install = function installMega3Ui(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script$2 as MAvatar, script as MBadges, script$7 as MButton, script$1 as MButtonGroup, script$6 as MButtonIcon, script$a as MDropDown, script$9 as MDropDownItem, script$5 as MInput, script$4 as MModal, script$3 as MModalConfim, script$8 as MPanel };
