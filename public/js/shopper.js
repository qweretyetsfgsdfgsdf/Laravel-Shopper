/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/alpinejs/dist/alpine.js":
/*!**********************************************!*\
  !*** ./node_modules/alpinejs/dist/alpine.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
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

  // Thanks @stimulus:
  // https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts
  function domReady() {
    return new Promise(resolve => {
      if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", resolve);
      } else {
        resolve();
      }
    });
  }
  function arrayUnique(array) {
    return Array.from(new Set(array));
  }
  function isTesting() {
    return navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[_\s]/, '-').toLowerCase();
  }
  function walk(el, callback) {
    if (callback(el) === false) return;
    let node = el.firstElementChild;

    while (node) {
      walk(node, callback);
      node = node.nextElementSibling;
    }
  }
  function debounce(func, wait) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  function saferEval(expression, dataContext, additionalHelperVariables = {}) {
    return new Function(['$data', ...Object.keys(additionalHelperVariables)], `var result; with($data) { result = ${expression} }; return result`)(dataContext, ...Object.values(additionalHelperVariables));
  }
  function saferEvalNoReturn(expression, dataContext, additionalHelperVariables = {}) {
    // For the cases when users pass only a function reference to the caller: `x-on:click="foo"`
    // Where "foo" is a function. Also, we'll pass the function the event instance when we call it.
    if (Object.keys(dataContext).includes(expression)) {
      let methodReference = new Function(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { return ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables));

      if (typeof methodReference === 'function') {
        return methodReference.call(dataContext, additionalHelperVariables['$event']);
      }
    }

    return new Function(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables));
  }
  const xAttrRE = /^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref)\b/;
  function isXAttr(attr) {
    const name = replaceAtAndColonWithStandardSyntax(attr.name);
    return xAttrRE.test(name);
  }
  function getXAttrs(el, type) {
    return Array.from(el.attributes).filter(isXAttr).map(attr => {
      const name = replaceAtAndColonWithStandardSyntax(attr.name);
      const typeMatch = name.match(xAttrRE);
      const valueMatch = name.match(/:([a-zA-Z\-:]+)/);
      const modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
      return {
        type: typeMatch ? typeMatch[1] : null,
        value: valueMatch ? valueMatch[1] : null,
        modifiers: modifiers.map(i => i.replace('.', '')),
        expression: attr.value
      };
    }).filter(i => {
      // If no type is passed in for filtering, bypass filter
      if (!type) return true;
      return i.type === type;
    });
  }
  function isBooleanAttr(attrName) {
    // As per HTML spec table https://html.spec.whatwg.org/multipage/indices.html#attributes-3:boolean-attribute
    // Array roughly ordered by estimated usage
    const booleanAttributes = ['disabled', 'checked', 'required', 'readonly', 'hidden', 'open', 'selected', 'autofocus', 'itemscope', 'multiple', 'novalidate', 'allowfullscreen', 'allowpaymentrequest', 'formnovalidate', 'autoplay', 'controls', 'loop', 'muted', 'playsinline', 'default', 'ismap', 'reversed', 'async', 'defer', 'nomodule'];
    return booleanAttributes.includes(attrName);
  }
  function replaceAtAndColonWithStandardSyntax(name) {
    if (name.startsWith('@')) {
      return name.replace('@', 'x-on:');
    } else if (name.startsWith(':')) {
      return name.replace(':', 'x-bind:');
    }

    return name;
  }
  function transitionIn(el, show, forceSkip = false) {
    // We don't want to transition on the initial page load.
    if (forceSkip) return show();
    const attrs = getXAttrs(el, 'transition');
    const showAttr = getXAttrs(el, 'show')[0]; // If this is triggered by a x-show.transition.

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers; // If x-show.transition.out, we'll skip the "in" transition.

      if (modifiers.includes('out') && !modifiers.includes('in')) return show();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out'); // If x-show.transition.in...out... only use "in" related modifiers for this transition.

      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index < modifiers.indexOf('out')) : modifiers;
      transitionHelperIn(el, modifiers, show); // Otherwise, we can assume x-transition:enter.
    } else if (attrs.length > 0) {
      transitionClassesIn(el, attrs, show);
    } else {
      // If neither, just show that damn thing.
      show();
    }
  }
  function transitionOut(el, hide, forceSkip = false) {
    if (forceSkip) return hide();
    const attrs = getXAttrs(el, 'transition');
    const showAttr = getXAttrs(el, 'show')[0];

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers;
      if (modifiers.includes('in') && !modifiers.includes('out')) return hide();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out');
      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index > modifiers.indexOf('out')) : modifiers;
      transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hide);
    } else if (attrs.length > 0) {
      transitionClassesOut(el, attrs, hide);
    } else {
      hide();
    }
  }
  function transitionHelperIn(el, modifiers, showCallback) {
    // Default values inspired by: https://material.io/design/motion/speed.html#duration
    const styleValues = {
      duration: modifierValue(modifiers, 'duration', 150),
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      },
      second: {
        opacity: 1,
        scale: 100
      }
    };
    transitionHelper(el, modifiers, showCallback, () => {}, styleValues);
  }
  function transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hideCallback) {
    // Make the "out" transition .5x slower than the "in". (Visually better)
    // HOWEVER, if they explicitly set a duration for the "out" transition,
    // use that.
    const duration = settingBothSidesOfTransition ? modifierValue(modifiers, 'duration', 150) : modifierValue(modifiers, 'duration', 150) / 2;
    const styleValues = {
      duration: duration,
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 1,
        scale: 100
      },
      second: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      }
    };
    transitionHelper(el, modifiers, () => {}, hideCallback, styleValues);
  }

  function modifierValue(modifiers, key, fallback) {
    // If the modifier isn't present, use the default.
    if (modifiers.indexOf(key) === -1) return fallback; // If it IS present, grab the value after it: x-show.transition.duration.500ms

    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;

    if (key === 'scale') {
      // Check if the very next value is NOT a number and return the fallback.
      // If x-show.transition.scale, we'll use the default scale value.
      // That is how a user opts out of the opacity transition.
      if (!isNumeric(rawValue)) return fallback;
    }

    if (key === 'duration') {
      // Support x-show.transition.duration.500ms && duration.500
      let match = rawValue.match(/([0-9]+)ms/);
      if (match) return match[1];
    }

    if (key === 'origin') {
      // Support chaining origin directions: x-show.transition.top.right
      if (['top', 'right', 'left', 'center', 'bottom'].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(' ');
      }
    }

    return rawValue;
  }

  function transitionHelper(el, modifiers, hook1, hook2, styleValues) {
    // If the user set these style values, we'll put them back when we're done with them.
    const opacityCache = el.style.opacity;
    const transformCache = el.style.transform;
    const transformOriginCache = el.style.transformOrigin; // If no modifiers are present: x-show.transition, we'll default to both opacity and scale.

    const noModifiers = !modifiers.includes('opacity') && !modifiers.includes('scale');
    const transitionOpacity = noModifiers || modifiers.includes('opacity');
    const transitionScale = noModifiers || modifiers.includes('scale'); // These are the explicit stages of a transition (same stages for in and for out).
    // This way you can get a birds eye view of the hooks, and the differences
    // between them.

    const stages = {
      start() {
        if (transitionOpacity) el.style.opacity = styleValues.first.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.first.scale / 100})`;
      },

      during() {
        if (transitionScale) el.style.transformOrigin = styleValues.origin;
        el.style.transitionProperty = [transitionOpacity ? `opacity` : ``, transitionScale ? `transform` : ``].join(' ').trim();
        el.style.transitionDuration = `${styleValues.duration / 1000}s`;
        el.style.transitionTimingFunction = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
      },

      show() {
        hook1();
      },

      end() {
        if (transitionOpacity) el.style.opacity = styleValues.second.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.second.scale / 100})`;
      },

      hide() {
        hook2();
      },

      cleanup() {
        if (transitionOpacity) el.style.opacity = opacityCache;
        if (transitionScale) el.style.transform = transformCache;
        if (transitionScale) el.style.transformOrigin = transformOriginCache;
        el.style.transitionProperty = null;
        el.style.transitionDuration = null;
        el.style.transitionTimingFunction = null;
      }

    };
    transition(el, stages);
  }
  function transitionClassesIn(el, directives, showCallback) {
    const enter = (directives.find(i => i.value === 'enter') || {
      expression: ''
    }).expression.split(' ').filter(i => i !== '');
    const enterStart = (directives.find(i => i.value === 'enter-start') || {
      expression: ''
    }).expression.split(' ').filter(i => i !== '');
    const enterEnd = (directives.find(i => i.value === 'enter-end') || {
      expression: ''
    }).expression.split(' ').filter(i => i !== '');
    transitionClasses(el, enter, enterStart, enterEnd, showCallback, () => {});
  }
  function transitionClassesOut(el, directives, hideCallback) {
    const leave = (directives.find(i => i.value === 'leave') || {
      expression: ''
    }).expression.split(' ').filter(i => i !== '');
    const leaveStart = (directives.find(i => i.value === 'leave-start') || {
      expression: ''
    }).expression.split(' ').filter(i => i !== '');
    const leaveEnd = (directives.find(i => i.value === 'leave-end') || {
      expression: ''
    }).expression.split(' ').filter(i => i !== '');
    transitionClasses(el, leave, leaveStart, leaveEnd, () => {}, hideCallback);
  }
  function transitionClasses(el, classesDuring, classesStart, classesEnd, hook1, hook2) {
    const originalClasses = el.__x_original_classes || [];
    const stages = {
      start() {
        el.classList.add(...classesStart);
      },

      during() {
        el.classList.add(...classesDuring);
      },

      show() {
        hook1();
      },

      end() {
        // Don't remove classes that were in the original class attribute.
        el.classList.remove(...classesStart.filter(i => !originalClasses.includes(i)));
        el.classList.add(...classesEnd);
      },

      hide() {
        hook2();
      },

      cleanup() {
        el.classList.remove(...classesDuring.filter(i => !originalClasses.includes(i)));
        el.classList.remove(...classesEnd.filter(i => !originalClasses.includes(i)));
      }

    };
    transition(el, stages);
  }
  function transition(el, stages) {
    stages.start();
    stages.during();
    requestAnimationFrame(() => {
      // Note: Safari's transitionDuration property will list out comma separated transition durations
      // for every single transition property. Let's grab the first one and call it a day.
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, '').replace('s', '')) * 1000;
      stages.show();
      requestAnimationFrame(() => {
        stages.end();
        setTimeout(() => {
          stages.hide(); // Adding an "isConnected" check, in case the callback
          // removed the element from the DOM.

          if (el.isConnected) {
            stages.cleanup();
          }
        }, duration);
      });
    });
  }
  function isNumeric(subject) {
    return !isNaN(subject);
  }

  function handleForDirective(component, templateEl, expression, initialUpdate, extraVars) {
    warnIfNotTemplateTag(templateEl);
    let iteratorNames = parseForExpression(expression);
    let items = evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, templateEl, iteratorNames, extraVars); // As we walk the array, we'll also walk the DOM (updating/creating as we go).

    let currentEl = templateEl;
    items.forEach((item, index) => {
      let iterationScopeVariables = getIterationScopeVariables(iteratorNames, item, index, items, extraVars());
      let currentKey = generateKeyForIteration(component, templateEl, index, iterationScopeVariables);
      let nextEl = currentEl.nextElementSibling; // If there's no previously x-for processed element ahead, add one.

      if (!nextEl || nextEl.__x_for_key === undefined) {
        nextEl = addElementInLoopAfterCurrentEl(templateEl, currentEl); // And transition it in if it's not the first page load.

        transitionIn(nextEl, () => {}, initialUpdate);
        nextEl.__x_for = iterationScopeVariables;
        component.initializeElements(nextEl, () => nextEl.__x_for);
      } else {
        nextEl = lookAheadForMatchingKeyedElementAndMoveItIfFound(nextEl, currentKey); // If we haven't found a matching key, just insert the element at the current position

        if (!nextEl) {
          nextEl = addElementInLoopAfterCurrentEl(templateEl, currentEl);
        } // Temporarily remove the key indicator to allow the normal "updateElements" to work


        delete nextEl.__x_for_key;
        nextEl.__x_for = iterationScopeVariables;
        component.updateElements(nextEl, () => nextEl.__x_for);
      }

      currentEl = nextEl;
      currentEl.__x_for_key = currentKey;
    });
    removeAnyLeftOverElementsFromPreviousUpdate(currentEl);
  } // This was taken from VueJS 2.* core. Thanks Vue!

  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\(|\)$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch) return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].trim().replace(stripParensRE, '');
    let iteratorMatch = item.match(forIteratorRE);

    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, '').trim();
      res.index = iteratorMatch[1].trim();

      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }

    return res;
  }

  function getIterationScopeVariables(iteratorNames, item, index, items, extraVars) {
    // We must create a new object, so each iteration has a new scope
    let scopeVariables = extraVars ? _objectSpread2({}, extraVars) : {};
    scopeVariables[iteratorNames.item] = item;
    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }

  function generateKeyForIteration(component, el, index, iterationScopeVariables) {
    let bindKeyAttribute = getXAttrs(el, 'bind').filter(attr => attr.value === 'key')[0]; // If the dev hasn't specified a key, just return the index of the iteration.

    if (!bindKeyAttribute) return index;
    return component.evaluateReturnExpression(el, bindKeyAttribute.expression, () => iterationScopeVariables);
  }

  function warnIfNotTemplateTag(el) {
    if (el.tagName.toLowerCase() !== 'template') console.warn('Alpine: [x-for] directive should only be added to <template> tags.');
  }

  function evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, el, iteratorNames, extraVars) {
    let ifAttribute = getXAttrs(el, 'if')[0];

    if (ifAttribute && !component.evaluateReturnExpression(el, ifAttribute.expression)) {
      return [];
    }

    return component.evaluateReturnExpression(el, iteratorNames.items, extraVars);
  }

  function addElementInLoopAfterCurrentEl(templateEl, currentEl) {
    let clone = document.importNode(templateEl.content, true);
    if (clone.childElementCount !== 1) console.warn('Alpine: <template> tag with [x-for] encountered with multiple element roots. Make sure <template> only has a single child node.');
    currentEl.parentElement.insertBefore(clone, currentEl.nextElementSibling);
    return currentEl.nextElementSibling;
  }

  function lookAheadForMatchingKeyedElementAndMoveItIfFound(nextEl, currentKey) {
    // If the the key's DO match, no need to look ahead.
    if (nextEl.__x_for_key === currentKey) return nextEl; // If they don't, we'll look ahead for a match.
    // If we find it, we'll move it to the current position in the loop.

    let tmpNextEl = nextEl;

    while (tmpNextEl) {
      if (tmpNextEl.__x_for_key === currentKey) {
        return tmpNextEl.parentElement.insertBefore(tmpNextEl, nextEl);
      }

      tmpNextEl = tmpNextEl.nextElementSibling && tmpNextEl.nextElementSibling.__x_for_key !== undefined ? tmpNextEl.nextElementSibling : false;
    }
  }

  function removeAnyLeftOverElementsFromPreviousUpdate(currentEl) {
    var nextElementFromOldLoop = currentEl.nextElementSibling && currentEl.nextElementSibling.__x_for_key !== undefined ? currentEl.nextElementSibling : false;

    while (nextElementFromOldLoop) {
      let nextElementFromOldLoopImmutable = nextElementFromOldLoop;
      let nextSibling = nextElementFromOldLoop.nextElementSibling;
      transitionOut(nextElementFromOldLoop, () => {
        nextElementFromOldLoopImmutable.remove();
      });
      nextElementFromOldLoop = nextSibling && nextSibling.__x_for_key !== undefined ? nextSibling : false;
    }
  }

  function handleAttributeBindingDirective(component, el, attrName, expression, extraVars, attrType) {
    var value = component.evaluateReturnExpression(el, expression, extraVars);

    if (attrName === 'value') {
      // If nested model key is undefined, set the default value to empty string.
      if (value === undefined && expression.match(/\./).length) {
        value = '';
      }

      if (el.type === 'radio') {
        // Set radio value from x-bind:value, if no "value" attribute exists.
        // If there are any initial state values, radio will have a correct
        // "checked" value since x-bind:value is processed before x-model.
        if (el.attributes.value === undefined && attrType === 'bind') {
          el.value = value;
        } else if (attrType !== 'bind') {
          el.checked = el.value == value;
        }
      } else if (el.type === 'checkbox') {
        if (Array.isArray(value)) {
          // I'm purposely not using Array.includes here because it's
          // strict, and because of Numeric/String mis-casting, I
          // want the "includes" to be "fuzzy".
          let valueFound = false;
          value.forEach(val => {
            if (val == el.value) {
              valueFound = true;
            }
          });
          el.checked = valueFound;
        } else {
          el.checked = !!value;
        } // If we are explicitly binding a string to the :value, set the string,
        // If the value is a boolean, leave it alone, it will be set to "on"
        // automatically.


        if (typeof value === 'string') {
          el.value = value;
        }
      } else if (el.tagName === 'SELECT') {
        updateSelect(el, value);
      } else {
        // Cursor position should be restored back to origin due to a safari bug
        const cursorPosition = el.selectionStart;
        el.value = value;

        if (el === document.activeElement) {
          el.setSelectionRange(cursorPosition, cursorPosition);
        }
      }
    } else if (attrName === 'class') {
      if (Array.isArray(value)) {
        const originalClasses = el.__x_original_classes || [];
        el.setAttribute('class', arrayUnique(originalClasses.concat(value)).join(' '));
      } else if (typeof value === 'object') {
        // Sorting the keys / class names by their boolean value will ensure that
        // anything that evaluates to `false` and needs to remove classes is run first.
        const keysSortedByBooleanValue = Object.keys(value).sort((a, b) => value[a] - value[b]);
        keysSortedByBooleanValue.forEach(classNames => {
          if (value[classNames]) {
            classNames.split(' ').forEach(className => el.classList.add(className));
          } else {
            classNames.split(' ').forEach(className => el.classList.remove(className));
          }
        });
      } else {
        const originalClasses = el.__x_original_classes || [];
        const newClasses = value.split(' ');
        el.setAttribute('class', arrayUnique(originalClasses.concat(newClasses)).join(' '));
      }
    } else if (isBooleanAttr(attrName)) {
      // Boolean attributes have to be explicitly added and removed, not just set.
      if (!!value) {
        el.setAttribute(attrName, '');
      } else {
        el.removeAttribute(attrName);
      }
    } else {
      el.setAttribute(attrName, value);
    }
  }

  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map(value => {
      return value + '';
    });
    Array.from(el.options).forEach(option => {
      option.selected = arrayWrappedValue.includes(option.value || option.text);
    });
  }

  function handleTextDirective(el, output, expression) {
    // If nested model key is undefined, set the default value to empty string.
    if (output === undefined && expression.match(/\./).length) {
      output = '';
    }

    el.innerText = output;
  }

  function handleHtmlDirective(component, el, expression, extraVars) {
    el.innerHTML = component.evaluateReturnExpression(el, expression, extraVars);
  }

  function handleShowDirective(component, el, value, modifiers, initialUpdate = false) {
    const hide = () => {
      el.style.display = 'none';
    };

    const show = () => {
      if (el.style.length === 1 && el.style.display === 'none') {
        el.removeAttribute('style');
      } else {
        el.style.removeProperty('display');
      }
    };

    if (initialUpdate === true) {
      if (value) {
        show();
      } else {
        hide();
      }

      return;
    }

    const handle = resolve => {
      if (!value) {
        if (el.style.display !== 'none') {
          transitionOut(el, () => {
            resolve(() => {
              hide();
            });
          });
        } else {
          resolve(() => {});
        }
      } else {
        if (el.style.display !== '') {
          transitionIn(el, () => {
            show();
          });
        } // Resolve immediately, only hold up parent `x-show`s for hidin.


        resolve(() => {});
      }
    }; // The working of x-show is a bit complex because we need to
    // wait for any child transitions to finish before hiding
    // some element. Also, this has to be done recursively.
    // If x-show.immediate, foregoe the waiting.


    if (modifiers.includes('immediate')) {
      handle(finish => finish());
      return;
    } // x-show is encountered during a DOM tree walk. If an element
    // we encounter is NOT a child of another x-show element we
    // can execute the previous x-show stack (if one exists).


    if (component.showDirectiveLastElement && !component.showDirectiveLastElement.contains(el)) {
      component.executeAndClearRemainingShowDirectiveStack();
    } // We'll push the handler onto a stack to be handled later.


    component.showDirectiveStack.push(handle);
    component.showDirectiveLastElement = el;
  }

  function handleIfDirective(component, el, expressionResult, initialUpdate, extraVars) {
    if (el.nodeName.toLowerCase() !== 'template') console.warn(`Alpine: [x-if] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#x-if`);
    const elementHasAlreadyBeenAdded = el.nextElementSibling && el.nextElementSibling.__x_inserted_me === true;

    if (expressionResult && !elementHasAlreadyBeenAdded) {
      const clone = document.importNode(el.content, true);
      el.parentElement.insertBefore(clone, el.nextElementSibling);
      transitionIn(el.nextElementSibling, () => {}, initialUpdate);
      component.initializeElements(el.nextElementSibling, extraVars);
      el.nextElementSibling.__x_inserted_me = true;
    } else if (!expressionResult && elementHasAlreadyBeenAdded) {
      transitionOut(el.nextElementSibling, () => {
        el.nextElementSibling.remove();
      }, initialUpdate);
    }
  }

  function registerListener(component, el, event, modifiers, expression, extraVars = {}) {
    if (modifiers.includes('away')) {
      let handler = e => {
        // Don't do anything if the click came form the element or within it.
        if (el.contains(e.target)) return; // Don't do anything if this element isn't currently visible.

        if (el.offsetWidth < 1 && el.offsetHeight < 1) return; // Now that we are sure the element is visible, AND the click
        // is from outside it, let's run the expression.

        runListenerHandler(component, expression, e, extraVars);

        if (modifiers.includes('once')) {
          document.removeEventListener(event, handler);
        }
      }; // Listen for this event at the root level.


      document.addEventListener(event, handler);
    } else {
      let listenerTarget = modifiers.includes('window') ? window : modifiers.includes('document') ? document : el;

      let handler = e => {
        // Remove this global event handler if the element that declared it
        // has been removed. It's now stale.
        if (listenerTarget === window || listenerTarget === document) {
          if (!document.body.contains(el)) {
            listenerTarget.removeEventListener(event, handler);
            return;
          }
        }

        if (isKeyEvent(event)) {
          if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
            return;
          }
        }

        if (modifiers.includes('prevent')) e.preventDefault();
        if (modifiers.includes('stop')) e.stopPropagation(); // If the .self modifier isn't present, or if it is present and
        // the target element matches the element we are registering the
        // event on, run the handler

        if (!modifiers.includes('self') || e.target === el) {
          const returnValue = runListenerHandler(component, expression, e, extraVars);

          if (returnValue === false) {
            e.preventDefault();
          } else {
            if (modifiers.includes('once')) {
              listenerTarget.removeEventListener(event, handler);
            }
          }
        }
      };

      if (modifiers.includes('debounce')) {
        let nextModifier = modifiers[modifiers.indexOf('debounce') + 1] || 'invalid-wait';
        let wait = isNumeric(nextModifier.split('ms')[0]) ? Number(nextModifier.split('ms')[0]) : 250;
        handler = debounce(handler, wait);
      }

      listenerTarget.addEventListener(event, handler);
    }
  }

  function runListenerHandler(component, expression, e, extraVars) {
    return component.evaluateCommandExpression(e.target, expression, () => {
      return _objectSpread2({}, extraVars(), {
        '$event': e
      });
    });
  }

  function isKeyEvent(event) {
    return ['keydown', 'keyup'].includes(event);
  }

  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter(i => {
      return !['window', 'document', 'prevent', 'stop'].includes(i);
    });

    if (keyModifiers.includes('debounce')) {
      let debounceIndex = keyModifiers.indexOf('debounce');
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || 'invalid-wait').split('ms')[0]) ? 2 : 1);
    } // If no modifier is specified, we'll call it a press.


    if (keyModifiers.length === 0) return false; // If one is passed, AND it matches the key pressed, we'll call it a press.

    if (keyModifiers.length === 1 && keyModifiers[0] === keyToModifier(e.key)) return false; // The user is listening for key combinations.

    const systemKeyModifiers = ['ctrl', 'shift', 'alt', 'meta', 'cmd', 'super'];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter(modifier => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter(i => !selectedSystemKeyModifiers.includes(i));

    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter(modifier => {
        // Alias "cmd" and "super" to "meta"
        if (modifier === 'cmd' || modifier === 'super') modifier = 'meta';
        return e[`${modifier}Key`];
      }); // If all the modifiers selected are pressed, ...

      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        // AND the remaining key is pressed as well. It's a press.
        if (keyModifiers[0] === keyToModifier(e.key)) return false;
      }
    } // We'll call it NOT a valid keypress.


    return true;
  }

  function keyToModifier(key) {
    switch (key) {
      case '/':
        return 'slash';

      case ' ':
      case 'Spacebar':
        return 'space';

      default:
        return key && kebabCase(key);
    }
  }

  function registerModelListener(component, el, modifiers, expression, extraVars) {
    // If the element we are binding to is a select, a radio, or checkbox
    // we'll listen for the change event instead of the "input" event.
    var event = el.tagName.toLowerCase() === 'select' || ['checkbox', 'radio'].includes(el.type) || modifiers.includes('lazy') ? 'change' : 'input';
    const listenerExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
    registerListener(component, el, event, modifiers, listenerExpression, () => {
      return _objectSpread2({}, extraVars(), {
        rightSideOfExpression: generateModelAssignmentFunction(el, modifiers, expression)
      });
    });
  }

  function generateModelAssignmentFunction(el, modifiers, expression) {
    if (el.type === 'radio') {
      // Radio buttons only work properly when they share a name attribute.
      // People might assume we take care of that for them, because
      // they already set a shared "x-model" attribute.
      if (!el.hasAttribute('name')) el.setAttribute('name', expression);
    }

    return (event, currentValue) => {
      // Check for event.detail due to an issue where IE11 handles other events as a CustomEvent.
      if (event instanceof CustomEvent && event.detail) {
        return event.detail;
      } else if (el.type === 'checkbox') {
        // If the data we are binding to is an array, toggle it's value inside the array.
        if (Array.isArray(currentValue)) {
          return event.target.checked ? currentValue.concat([event.target.value]) : currentValue.filter(i => i !== event.target.value);
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === 'select' && el.multiple) {
        return modifiers.includes('number') ? Array.from(event.target.selectedOptions).map(option => {
          const rawValue = option.value || option.text;
          const number = rawValue ? parseFloat(rawValue) : null;
          return isNaN(number) ? rawValue : number;
        }) : Array.from(event.target.selectedOptions).map(option => {
          return option.value || option.text;
        });
      } else {
        const rawValue = event.target.value;
        const number = rawValue ? parseFloat(rawValue) : null;
        return modifiers.includes('number') ? isNaN(number) ? rawValue : number : modifiers.includes('trim') ? rawValue.trim() : rawValue;
      }
    };
  }

  /**
   * Copyright (C) 2017 salesforce.com, inc.
   */
  const { isArray } = Array;
  const { getPrototypeOf, create: ObjectCreate, defineProperty: ObjectDefineProperty, defineProperties: ObjectDefineProperties, isExtensible, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, preventExtensions, hasOwnProperty, } = Object;
  const { push: ArrayPush, concat: ArrayConcat, map: ArrayMap, } = Array.prototype;
  function isUndefined(obj) {
      return obj === undefined;
  }
  function isFunction(obj) {
      return typeof obj === 'function';
  }
  function isObject(obj) {
      return typeof obj === 'object';
  }
  const proxyToValueMap = new WeakMap();
  function registerProxy(proxy, value) {
      proxyToValueMap.set(proxy, value);
  }
  const unwrap = (replicaOrAny) => proxyToValueMap.get(replicaOrAny) || replicaOrAny;

  function wrapValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getProxy(value) : value;
  }
  /**
   * Unwrap property descriptors will set value on original descriptor
   * We only need to unwrap if value is specified
   * @param descriptor external descrpitor provided to define new property on original value
   */
  function unwrapDescriptor(descriptor) {
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = unwrap(descriptor.value);
      }
      return descriptor;
  }
  function lockShadowTarget(membrane, shadowTarget, originalTarget) {
      const targetKeys = ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      targetKeys.forEach((key) => {
          let descriptor = getOwnPropertyDescriptor(originalTarget, key);
          // We do not need to wrap the descriptor if configurable
          // Because we can deal with wrapping it when user goes through
          // Get own property descriptor. There is also a chance that this descriptor
          // could change sometime in the future, so we can defer wrapping
          // until we need to
          if (!descriptor.configurable) {
              descriptor = wrapDescriptor(membrane, descriptor, wrapValue);
          }
          ObjectDefineProperty(shadowTarget, key, descriptor);
      });
      preventExtensions(shadowTarget);
  }
  class ReactiveProxyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getProxy(value);
      }
      set(shadowTarget, key, value) {
          const { originalTarget, membrane: { valueMutated } } = this;
          const oldValue = originalTarget[key];
          if (oldValue !== value) {
              originalTarget[key] = value;
              valueMutated(originalTarget, key);
          }
          else if (key === 'length' && isArray(originalTarget)) {
              // fix for issue #236: push will add the new index, and by the time length
              // is updated, the internal length is already equal to the new length value
              // therefore, the oldValue is equal to the value. This is the forking logic
              // to support this use case.
              valueMutated(originalTarget, key);
          }
          return true;
      }
      deleteProperty(shadowTarget, key) {
          const { originalTarget, membrane: { valueMutated } } = this;
          delete originalTarget[key];
          valueMutated(originalTarget, key);
          return true;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      isExtensible(shadowTarget) {
          const shadowIsExtensible = isExtensible(shadowTarget);
          if (!shadowIsExtensible) {
              return shadowIsExtensible;
          }
          const { originalTarget, membrane } = this;
          const targetIsExtensible = isExtensible(originalTarget);
          if (!targetIsExtensible) {
              lockShadowTarget(membrane, shadowTarget, originalTarget);
          }
          return targetIsExtensible;
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getPrototypeOf(shadowTarget) {
          const { originalTarget } = this;
          return getPrototypeOf(originalTarget);
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = this.membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value, setter or getter (if available) cannot observe
          // mutations, just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapValue);
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          const { originalTarget, membrane } = this;
          lockShadowTarget(membrane, shadowTarget, originalTarget);
          preventExtensions(originalTarget);
          return true;
      }
      defineProperty(shadowTarget, key, descriptor) {
          const { originalTarget, membrane } = this;
          const { valueMutated } = membrane;
          const { configurable } = descriptor;
          // We have to check for value in descriptor
          // because Object.freeze(proxy) calls this method
          // with only { configurable: false, writeable: false }
          // Additionally, method will only be called with writeable:false
          // if the descriptor has a value, as opposed to getter/setter
          // So we can just check if writable is present and then see if
          // value is present. This eliminates getter and setter descriptors
          if (hasOwnProperty.call(descriptor, 'writable') && !hasOwnProperty.call(descriptor, 'value')) {
              const originalDescriptor = getOwnPropertyDescriptor(originalTarget, key);
              descriptor.value = originalDescriptor.value;
          }
          ObjectDefineProperty(originalTarget, key, unwrapDescriptor(descriptor));
          if (configurable === false) {
              ObjectDefineProperty(shadowTarget, key, wrapDescriptor(membrane, descriptor, wrapValue));
          }
          valueMutated(originalTarget, key);
          return true;
      }
  }

  function wrapReadOnlyValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getReadOnlyProxy(value) : value;
  }
  class ReadOnlyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { membrane, originalTarget } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getReadOnlyProxy(value);
      }
      set(shadowTarget, key, value) {
          return false;
      }
      deleteProperty(shadowTarget, key) {
          return false;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value or getter (if available) cannot be observed,
          // just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapReadOnlyValue);
          if (hasOwnProperty.call(desc, 'set')) {
              desc.set = undefined; // readOnly membrane does not allow setters
          }
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          return false;
      }
      defineProperty(shadowTarget, key, descriptor) {
          return false;
      }
  }
  function createShadowTarget(value) {
      let shadowTarget = undefined;
      if (isArray(value)) {
          shadowTarget = [];
      }
      else if (isObject(value)) {
          shadowTarget = {};
      }
      return shadowTarget;
  }
  const ObjectDotPrototype = Object.prototype;
  function defaultValueIsObservable(value) {
      // intentionally checking for null
      if (value === null) {
          return false;
      }
      // treat all non-object types, including undefined, as non-observable values
      if (typeof value !== 'object') {
          return false;
      }
      if (isArray(value)) {
          return true;
      }
      const proto = getPrototypeOf(value);
      return (proto === ObjectDotPrototype || proto === null || getPrototypeOf(proto) === null);
  }
  const defaultValueObserved = (obj, key) => {
      /* do nothing */
  };
  const defaultValueMutated = (obj, key) => {
      /* do nothing */
  };
  const defaultValueDistortion = (value) => value;
  function wrapDescriptor(membrane, descriptor, getValue) {
      const { set, get } = descriptor;
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = getValue(membrane, descriptor.value);
      }
      else {
          if (!isUndefined(get)) {
              descriptor.get = function () {
                  // invoking the original getter with the original target
                  return getValue(membrane, get.call(unwrap(this)));
              };
          }
          if (!isUndefined(set)) {
              descriptor.set = function (value) {
                  // At this point we don't have a clear indication of whether
                  // or not a valid mutation will occur, we don't have the key,
                  // and we are not sure why and how they are invoking this setter.
                  // Nevertheless we preserve the original semantics by invoking the
                  // original setter with the original target and the unwrapped value
                  set.call(unwrap(this), membrane.unwrapProxy(value));
              };
          }
      }
      return descriptor;
  }
  class ReactiveMembrane {
      constructor(options) {
          this.valueDistortion = defaultValueDistortion;
          this.valueMutated = defaultValueMutated;
          this.valueObserved = defaultValueObserved;
          this.valueIsObservable = defaultValueIsObservable;
          this.objectGraph = new WeakMap();
          if (!isUndefined(options)) {
              const { valueDistortion, valueMutated, valueObserved, valueIsObservable } = options;
              this.valueDistortion = isFunction(valueDistortion) ? valueDistortion : defaultValueDistortion;
              this.valueMutated = isFunction(valueMutated) ? valueMutated : defaultValueMutated;
              this.valueObserved = isFunction(valueObserved) ? valueObserved : defaultValueObserved;
              this.valueIsObservable = isFunction(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
          }
      }
      getProxy(value) {
          const unwrappedValue = unwrap(value);
          const distorted = this.valueDistortion(unwrappedValue);
          if (this.valueIsObservable(distorted)) {
              const o = this.getReactiveState(unwrappedValue, distorted);
              // when trying to extract the writable version of a readonly
              // we return the readonly.
              return o.readOnly === value ? value : o.reactive;
          }
          return distorted;
      }
      getReadOnlyProxy(value) {
          value = unwrap(value);
          const distorted = this.valueDistortion(value);
          if (this.valueIsObservable(distorted)) {
              return this.getReactiveState(value, distorted).readOnly;
          }
          return distorted;
      }
      unwrapProxy(p) {
          return unwrap(p);
      }
      getReactiveState(value, distortedValue) {
          const { objectGraph, } = this;
          let reactiveState = objectGraph.get(distortedValue);
          if (reactiveState) {
              return reactiveState;
          }
          const membrane = this;
          reactiveState = {
              get reactive() {
                  const reactiveHandler = new ReactiveProxyHandler(membrane, distortedValue);
                  // caching the reactive proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), reactiveHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'reactive', { value: proxy });
                  return proxy;
              },
              get readOnly() {
                  const readOnlyHandler = new ReadOnlyHandler(membrane, distortedValue);
                  // caching the readOnly proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), readOnlyHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'readOnly', { value: proxy });
                  return proxy;
              }
          };
          objectGraph.set(distortedValue, reactiveState);
          return reactiveState;
      }
  }
  /** version: 0.26.0 */

  function wrap(data, mutationCallback) {

    let membrane = new ReactiveMembrane({
      valueMutated(target, key) {
        mutationCallback(target, key);
      }

    });
    return {
      data: membrane.getProxy(data),
      membrane: membrane
    };
  }
  function unwrap$1(membrane, observable) {
    let unwrappedData = membrane.unwrapProxy(observable);
    let copy = {};
    Object.keys(unwrappedData).forEach(key => {
      if (['$el', '$refs', '$nextTick', '$watch'].includes(key)) return;
      copy[key] = unwrappedData[key];
    });
    return copy;
  }

  class Component {
    constructor(el, seedDataForCloning = null) {
      this.$el = el;
      const dataAttr = this.$el.getAttribute('x-data');
      const dataExpression = dataAttr === '' ? '{}' : dataAttr;
      const initExpression = this.$el.getAttribute('x-init');
      this.unobservedData = seedDataForCloning ? seedDataForCloning : saferEval(dataExpression, {});
      // Construct a Proxy-based observable. This will be used to handle reactivity.

      let {
        membrane,
        data
      } = this.wrapDataInObservable(this.unobservedData);
      this.$data = data;
      this.membrane = membrane; // After making user-supplied data methods reactive, we can now add
      // our magic properties to the original data for access.

      this.unobservedData.$el = this.$el;
      this.unobservedData.$refs = this.getRefsProxy();
      this.nextTickStack = [];

      this.unobservedData.$nextTick = callback => {
        this.nextTickStack.push(callback);
      };

      this.watchers = {};

      this.unobservedData.$watch = (property, callback) => {
        if (!this.watchers[property]) this.watchers[property] = [];
        this.watchers[property].push(callback);
      };

      this.showDirectiveStack = [];
      this.showDirectiveLastElement;
      var initReturnedCallback; // If x-init is present AND we aren't cloning (skip x-init on clone)

      if (initExpression && !seedDataForCloning) {
        // We want to allow data manipulation, but not trigger DOM updates just yet.
        // We haven't even initialized the elements with their Alpine bindings. I mean c'mon.
        this.pauseReactivity = true;
        initReturnedCallback = this.evaluateReturnExpression(this.$el, initExpression);
        this.pauseReactivity = false;
      } // Register all our listeners and set all our attribute bindings.


      this.initializeElements(this.$el); // Use mutation observer to detect new elements being added within this component at run-time.
      // Alpine's just so darn flexible amirite?

      this.listenForNewElementsToInitialize();

      if (typeof initReturnedCallback === 'function') {
        // Run the callback returned from the "x-init" hook to allow the user to do stuff after
        // Alpine's got it's grubby little paws all over everything.
        initReturnedCallback.call(this.$data);
      }
    }

    getUnobservedData() {
      return unwrap$1(this.membrane, this.$data);
    }

    wrapDataInObservable(data) {
      var self = this;
      let updateDom = debounce(function () {
        self.updateElements(self.$el);
      }, 0);
      return wrap(data, (target, key) => {
        if (self.watchers[key]) {
          // If there's a watcher for this specific key, run it.
          self.watchers[key].forEach(callback => callback(target[key]));
        } else {
          // Let's walk through the watchers with "dot-notation" (foo.bar) and see
          // if this mutation fits any of them.
          Object.keys(self.watchers).filter(i => i.includes('.')).forEach(fullDotNotationKey => {
            let dotNotationParts = fullDotNotationKey.split('.'); // If this dot-notation watcher's last "part" doesn't match the current
            // key, then skip it early for performance reasons.

            if (key !== dotNotationParts[dotNotationParts.length - 1]) return; // Now, walk through the dot-notation "parts" recursively to find
            // a match, and call the watcher if one's found.

            dotNotationParts.reduce((comparisonData, part) => {
              if (Object.is(target, comparisonData)) {
                // Run the watchers.
                self.watchers[fullDotNotationKey].forEach(callback => callback(target[key]));
              }

              return comparisonData[part];
            }, self.getUnobservedData());
          });
        } // Don't react to data changes for cases like the `x-created` hook.


        if (self.pauseReactivity) return;
        updateDom();
      });
    }

    walkAndSkipNestedComponents(el, callback, initializeComponentCallback = () => {}) {
      walk(el, el => {
        // We've hit a component.
        if (el.hasAttribute('x-data')) {
          // If it's not the current one.
          if (!el.isSameNode(this.$el)) {
            // Initialize it if it's not.
            if (!el.__x) initializeComponentCallback(el); // Now we'll let that sub-component deal with itself.

            return false;
          }
        }

        return callback(el);
      });
    }

    initializeElements(rootEl, extraVars = () => {}) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop
        if (el.__x_for_key !== undefined) return false; // Don't touch spawns from if directives

        if (el.__x_inserted_me !== undefined) return false;
        this.initializeElement(el, extraVars);
      }, el => {
        el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    initializeElement(el, extraVars) {
      // To support class attribute merging, we have to know what the element's
      // original class attribute looked like for reference.
      if (el.hasAttribute('class') && getXAttrs(el).length > 0) {
        el.__x_original_classes = el.getAttribute('class').split(' ');
      }

      this.registerListeners(el, extraVars);
      this.resolveBoundAttributes(el, true, extraVars);
    }

    updateElements(rootEl, extraVars = () => {}) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop (and check if the root is actually a for loop in a parent, don't skip it.)
        if (el.__x_for_key !== undefined && !el.isSameNode(this.$el)) return false;
        this.updateElement(el, extraVars);
      }, el => {
        el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    executeAndClearNextTickStack(el) {
      // Skip spawns from alpine directives
      if (el === this.$el) {
        // Walk through the $nextTick stack and clear it as we go.
        while (this.nextTickStack.length > 0) {
          this.nextTickStack.shift()();
        }
      }
    }

    executeAndClearRemainingShowDirectiveStack() {
      // The goal here is to start all the x-show transitions
      // and build a nested promise chain so that elements
      // only hide when the children are finished hiding.
      this.showDirectiveStack.reverse().map(thing => {
        return new Promise(resolve => {
          thing(finish => {
            resolve(finish);
          });
        });
      }).reduce((nestedPromise, promise) => {
        return nestedPromise.then(() => {
          return promise.then(finish => finish());
        });
      }, Promise.resolve(() => {})); // We've processed the handler stack. let's clear it.

      this.showDirectiveStack = [];
      this.showDirectiveLastElement = undefined;
    }

    updateElement(el, extraVars) {
      this.resolveBoundAttributes(el, false, extraVars);
    }

    registerListeners(el, extraVars) {
      getXAttrs(el).forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'on':
            registerListener(this, el, value, modifiers, expression, extraVars);
            break;

          case 'model':
            registerModelListener(this, el, modifiers, expression, extraVars);
            break;
        }
      });
    }

    resolveBoundAttributes(el, initialUpdate = false, extraVars) {
      let attrs = getXAttrs(el);

      if (el.type !== undefined && el.type === 'radio') {
        // If there's an x-model on a radio input, move it to end of attribute list
        // to ensure that x-bind:value (if present) is processed first.
        const modelIdx = attrs.findIndex(attr => attr.type === 'model');

        if (modelIdx > -1) {
          attrs.push(attrs.splice(modelIdx, 1)[0]);
        }
      }

      attrs.forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'model':
            handleAttributeBindingDirective(this, el, 'value', expression, extraVars, type);
            break;

          case 'bind':
            // The :key binding on an x-for is special, ignore it.
            if (el.tagName.toLowerCase() === 'template' && value === 'key') return;
            handleAttributeBindingDirective(this, el, value, expression, extraVars, type);
            break;

          case 'text':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleTextDirective(el, output, expression);
            break;

          case 'html':
            handleHtmlDirective(this, el, expression, extraVars);
            break;

          case 'show':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleShowDirective(this, el, output, modifiers, initialUpdate);
            break;

          case 'if':
            // If this element also has x-for on it, don't process x-if.
            // We will let the "x-for" directive handle the "if"ing.
            if (attrs.filter(i => i.type === 'for').length > 0) return;
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleIfDirective(this, el, output, initialUpdate, extraVars);
            break;

          case 'for':
            handleForDirective(this, el, expression, initialUpdate, extraVars);
            break;

          case 'cloak':
            el.removeAttribute('x-cloak');
            break;
        }
      });
    }

    evaluateReturnExpression(el, expression, extraVars = () => {}) {
      return saferEval(expression, this.$data, _objectSpread2({}, extraVars(), {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    evaluateCommandExpression(el, expression, extraVars = () => {}) {
      return saferEvalNoReturn(expression, this.$data, _objectSpread2({}, extraVars(), {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    getDispatchFunction(el) {
      return (event, detail = {}) => {
        el.dispatchEvent(new CustomEvent(event, {
          detail,
          bubbles: true
        }));
      };
    }

    listenForNewElementsToInitialize() {
      const targetNode = this.$el;
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        for (let i = 0; i < mutations.length; i++) {
          // Filter out mutations triggered from child components.
          const closestParentComponent = mutations[i].target.closest('[x-data]');
          if (!(closestParentComponent && closestParentComponent.isSameNode(this.$el))) return;

          if (mutations[i].type === 'attributes' && mutations[i].attributeName === 'x-data') {
            const rawData = saferEval(mutations[i].target.getAttribute('x-data'), {});
            Object.keys(rawData).forEach(key => {
              if (this.$data[key] !== rawData[key]) {
                this.$data[key] = rawData[key];
              }
            });
          }

          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              if (node.nodeType !== 1 || node.__x_inserted_me) return;

              if (node.matches('[x-data]')) {
                node.__x = new Component(node);
                return;
              }

              this.initializeElements(node);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    }

    getRefsProxy() {
      var self = this;
      var refObj = {};
      // One of the goals of this is to not hold elements in memory, but rather re-evaluate
      // the DOM when the system needs something from it. This way, the framework is flexible and
      // friendly to outside DOM changes from libraries like Vue/Livewire.
      // For this reason, I'm using an "on-demand" proxy to fake a "$refs" object.

      return new Proxy(refObj, {
        get(object, property) {
          if (property === '$isAlpineProxy') return true;
          var ref; // We can't just query the DOM because it's hard to filter out refs in
          // nested components.

          self.walkAndSkipNestedComponents(self.$el, el => {
            if (el.hasAttribute('x-ref') && el.getAttribute('x-ref') === property) {
              ref = el;
            }
          });
          return ref;
        }

      });
    }

  }

  const Alpine = {
    start: async function start() {
      if (!isTesting()) {
        await domReady();
      }

      this.discoverComponents(el => {
        this.initializeComponent(el);
      }); // It's easier and more performant to just support Turbolinks than listen
      // to MutationObserver mutations at the document level.

      document.addEventListener("turbolinks:load", () => {
        this.discoverUninitializedComponents(el => {
          this.initializeComponent(el);
        });
      });
      this.listenForNewUninitializedComponentsAtRunTime(el => {
        this.initializeComponent(el);
      });
    },
    discoverComponents: function discoverComponents(callback) {
      const rootEls = document.querySelectorAll('[x-data]');
      rootEls.forEach(rootEl => {
        callback(rootEl);
      });
    },
    discoverUninitializedComponents: function discoverUninitializedComponents(callback, el = null) {
      const rootEls = (el || document).querySelectorAll('[x-data]');
      Array.from(rootEls).filter(el => el.__x === undefined).forEach(rootEl => {
        callback(rootEl);
      });
    },
    listenForNewUninitializedComponentsAtRunTime: function listenForNewUninitializedComponentsAtRunTime(callback) {
      const targetNode = document.querySelector('body');
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        for (let i = 0; i < mutations.length; i++) {
          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              // Discard non-element nodes (like line-breaks)
              if (node.nodeType !== 1) return; // Discard any changes happening within an existing component.
              // They will take care of themselves.

              if (node.parentElement && node.parentElement.closest('[x-data]')) return;
              this.discoverUninitializedComponents(el => {
                this.initializeComponent(el);
              }, node.parentElement);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    },
    initializeComponent: function initializeComponent(el) {
      if (!el.__x) {
        el.__x = new Component(el);
      }
    },
    clone: function clone(component, newEl) {
      if (!newEl.__x) {
        newEl.__x = new Component(newEl, component.getUnobservedData());
      }
    }
  };

  if (!isTesting()) {
    window.Alpine = Alpine;

    if (window.deferLoadingAlpine) {
      window.deferLoadingAlpine(function () {
        window.Alpine.start();
      });
    } else {
      window.Alpine.start();
    }
  }

  return Alpine;

})));


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./resources/assets/js/shopper.js":
/*!****************************************!*\
  !*** ./resources/assets/js/shopper.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/alpine.js");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alpinejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Shopper.js
 *
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using Laravel.
 *
 * @author Arthur Monney<arthur@shopperlabs.io>
 * @version 2.0.0
 * @since July 2019
 */

 // Remove items on CRUD

var element = document.getElementById("remove-item");

if (element) {
  var span = element.firstElementChild;
  var url = element.getAttribute("data-url");
  element.addEventListener("click", function (e) {
    e.preventDefault();
    span.classList.remove("hidden");
    axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"](url, {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    }).then(function (response) {
      setTimeout(function () {
        window.location.href = response.data.redirect_url;
      }, 1000);
    });
  });
}

/***/ }),

/***/ "./resources/assets/sass/shopper.scss":
/*!********************************************!*\
  !*** ./resources/assets/sass/shopper.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***********************************************************************************!*\
  !*** multi ./resources/assets/js/shopper.js ./resources/assets/sass/shopper.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/mckenzie/Sites/packages/laravel-shopper/packages/shopper/framework/resources/assets/js/shopper.js */"./resources/assets/js/shopper.js");
module.exports = __webpack_require__(/*! /Users/mckenzie/Sites/packages/laravel-shopper/packages/shopper/framework/resources/assets/sass/shopper.scss */"./resources/assets/sass/shopper.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FscGluZWpzL2Rpc3QvYWxwaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvYnVpbGRGdWxsUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zaG9wcGVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9zaG9wcGVyLnNjc3M/ZTlkNCJdLCJuYW1lcyI6WyJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNwYW4iLCJmaXJzdEVsZW1lbnRDaGlsZCIsInVybCIsImdldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJheGlvcyIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJzZXRUaW1lb3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZGF0YSIsInJlZGlyZWN0X3VybCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsRUFBRSxLQUE0RDtBQUM5RCxFQUFFLFNBQ29EO0FBQ3RELENBQUMscUJBQXFCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWCxTQUFTO0FBQ1QsMEJBQTBCO0FBQzFCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTOzs7QUFHVCx3QkFBd0I7QUFDeEI7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7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OUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZWQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBWUE7Q0FHQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFoQjs7QUFDQSxJQUFJRixPQUFKLEVBQWE7QUFDWCxNQUFNRyxJQUFJLEdBQUdILE9BQU8sQ0FBQ0ksaUJBQXJCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHTCxPQUFPLENBQUNNLFlBQVIsQ0FBcUIsVUFBckIsQ0FBWjtBQUVBTixTQUFPLENBQUNPLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQUFDLENBQUMsRUFBSTtBQUNyQ0EsS0FBQyxDQUFDQyxjQUFGO0FBQ0FOLFFBQUksQ0FBQ08sU0FBTCxDQUFlQyxNQUFmLENBQXNCLFFBQXRCO0FBQ0FDLGdEQUFLLFVBQUwsQ0FDVVAsR0FEVixFQUNlO0FBQ1hRLGFBQU8sRUFBRTtBQUNQLDRCQUFvQjtBQURiO0FBREUsS0FEZixFQU1HQyxJQU5ILENBTVEsVUFBQUMsUUFBUSxFQUFJO0FBQ2hCQyxnQkFBVSxDQUFDLFlBQU07QUFDZkMsY0FBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QkosUUFBUSxDQUFDSyxJQUFULENBQWNDLFlBQXJDO0FBQ0QsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELEtBVkg7QUFXRCxHQWREO0FBZUQsQzs7Ozs7Ozs7Ozs7QUNwQ0QseUMiLCJmaWxlIjoiL2pzL3Nob3BwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5BbHBpbmUgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pO1xuICAgICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICAgIH1cblxuICAgIHJldHVybiBrZXlzO1xuICB9XG5cbiAgZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgICBpZiAoaSAlIDIpIHtcbiAgICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICAvLyBUaGFua3MgQHN0aW11bHVzOlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vc3RpbXVsdXNqcy9zdGltdWx1cy9ibG9iL21hc3Rlci9wYWNrYWdlcy8lNDBzdGltdWx1cy9jb3JlL3NyYy9hcHBsaWNhdGlvbi50c1xuICBmdW5jdGlvbiBkb21SZWFkeSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PSBcImxvYWRpbmdcIikge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCByZXNvbHZlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBhcnJheVVuaXF1ZShhcnJheSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyYXkpKTtcbiAgfVxuICBmdW5jdGlvbiBpc1Rlc3RpbmcoKSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoXCJOb2RlLmpzXCIpIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoXCJqc2RvbVwiKTtcbiAgfVxuICBmdW5jdGlvbiBrZWJhYkNhc2Uoc3ViamVjdCkge1xuICAgIHJldHVybiBzdWJqZWN0LnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnJlcGxhY2UoL1tfXFxzXS8sICctJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuICBmdW5jdGlvbiB3YWxrKGVsLCBjYWxsYmFjaykge1xuICAgIGlmIChjYWxsYmFjayhlbCkgPT09IGZhbHNlKSByZXR1cm47XG4gICAgbGV0IG5vZGUgPSBlbC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICB3YWxrKG5vZGUsIGNhbGxiYWNrKTtcbiAgICAgIG5vZGUgPSBub2RlLm5leHRFbGVtZW50U2libGluZztcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCkge1xuICAgIHZhciB0aW1lb3V0O1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24gbGF0ZXIoKSB7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfTtcblxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gc2FmZXJFdmFsKGV4cHJlc3Npb24sIGRhdGFDb250ZXh0LCBhZGRpdGlvbmFsSGVscGVyVmFyaWFibGVzID0ge30pIHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKFsnJGRhdGEnLCAuLi5PYmplY3Qua2V5cyhhZGRpdGlvbmFsSGVscGVyVmFyaWFibGVzKV0sIGB2YXIgcmVzdWx0OyB3aXRoKCRkYXRhKSB7IHJlc3VsdCA9ICR7ZXhwcmVzc2lvbn0gfTsgcmV0dXJuIHJlc3VsdGApKGRhdGFDb250ZXh0LCAuLi5PYmplY3QudmFsdWVzKGFkZGl0aW9uYWxIZWxwZXJWYXJpYWJsZXMpKTtcbiAgfVxuICBmdW5jdGlvbiBzYWZlckV2YWxOb1JldHVybihleHByZXNzaW9uLCBkYXRhQ29udGV4dCwgYWRkaXRpb25hbEhlbHBlclZhcmlhYmxlcyA9IHt9KSB7XG4gICAgLy8gRm9yIHRoZSBjYXNlcyB3aGVuIHVzZXJzIHBhc3Mgb25seSBhIGZ1bmN0aW9uIHJlZmVyZW5jZSB0byB0aGUgY2FsbGVyOiBgeC1vbjpjbGljaz1cImZvb1wiYFxuICAgIC8vIFdoZXJlIFwiZm9vXCIgaXMgYSBmdW5jdGlvbi4gQWxzbywgd2UnbGwgcGFzcyB0aGUgZnVuY3Rpb24gdGhlIGV2ZW50IGluc3RhbmNlIHdoZW4gd2UgY2FsbCBpdC5cbiAgICBpZiAoT2JqZWN0LmtleXMoZGF0YUNvbnRleHQpLmluY2x1ZGVzKGV4cHJlc3Npb24pKSB7XG4gICAgICBsZXQgbWV0aG9kUmVmZXJlbmNlID0gbmV3IEZ1bmN0aW9uKFsnZGF0YUNvbnRleHQnLCAuLi5PYmplY3Qua2V5cyhhZGRpdGlvbmFsSGVscGVyVmFyaWFibGVzKV0sIGB3aXRoKGRhdGFDb250ZXh0KSB7IHJldHVybiAke2V4cHJlc3Npb259IH1gKShkYXRhQ29udGV4dCwgLi4uT2JqZWN0LnZhbHVlcyhhZGRpdGlvbmFsSGVscGVyVmFyaWFibGVzKSk7XG5cbiAgICAgIGlmICh0eXBlb2YgbWV0aG9kUmVmZXJlbmNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBtZXRob2RSZWZlcmVuY2UuY2FsbChkYXRhQ29udGV4dCwgYWRkaXRpb25hbEhlbHBlclZhcmlhYmxlc1snJGV2ZW50J10pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oWydkYXRhQ29udGV4dCcsIC4uLk9iamVjdC5rZXlzKGFkZGl0aW9uYWxIZWxwZXJWYXJpYWJsZXMpXSwgYHdpdGgoZGF0YUNvbnRleHQpIHsgJHtleHByZXNzaW9ufSB9YCkoZGF0YUNvbnRleHQsIC4uLk9iamVjdC52YWx1ZXMoYWRkaXRpb25hbEhlbHBlclZhcmlhYmxlcykpO1xuICB9XG4gIGNvbnN0IHhBdHRyUkUgPSAvXngtKG9ufGJpbmR8ZGF0YXx0ZXh0fGh0bWx8bW9kZWx8aWZ8Zm9yfHNob3d8Y2xvYWt8dHJhbnNpdGlvbnxyZWYpXFxiLztcbiAgZnVuY3Rpb24gaXNYQXR0cihhdHRyKSB7XG4gICAgY29uc3QgbmFtZSA9IHJlcGxhY2VBdEFuZENvbG9uV2l0aFN0YW5kYXJkU3ludGF4KGF0dHIubmFtZSk7XG4gICAgcmV0dXJuIHhBdHRyUkUudGVzdChuYW1lKTtcbiAgfVxuICBmdW5jdGlvbiBnZXRYQXR0cnMoZWwsIHR5cGUpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbC5hdHRyaWJ1dGVzKS5maWx0ZXIoaXNYQXR0cikubWFwKGF0dHIgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IHJlcGxhY2VBdEFuZENvbG9uV2l0aFN0YW5kYXJkU3ludGF4KGF0dHIubmFtZSk7XG4gICAgICBjb25zdCB0eXBlTWF0Y2ggPSBuYW1lLm1hdGNoKHhBdHRyUkUpO1xuICAgICAgY29uc3QgdmFsdWVNYXRjaCA9IG5hbWUubWF0Y2goLzooW2EtekEtWlxcLTpdKykvKTtcbiAgICAgIGNvbnN0IG1vZGlmaWVycyA9IG5hbWUubWF0Y2goL1xcLlteLlxcXV0rKD89W15cXF1dKiQpL2cpIHx8IFtdO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZU1hdGNoID8gdHlwZU1hdGNoWzFdIDogbnVsbCxcbiAgICAgICAgdmFsdWU6IHZhbHVlTWF0Y2ggPyB2YWx1ZU1hdGNoWzFdIDogbnVsbCxcbiAgICAgICAgbW9kaWZpZXJzOiBtb2RpZmllcnMubWFwKGkgPT4gaS5yZXBsYWNlKCcuJywgJycpKSxcbiAgICAgICAgZXhwcmVzc2lvbjogYXR0ci52YWx1ZVxuICAgICAgfTtcbiAgICB9KS5maWx0ZXIoaSA9PiB7XG4gICAgICAvLyBJZiBubyB0eXBlIGlzIHBhc3NlZCBpbiBmb3IgZmlsdGVyaW5nLCBieXBhc3MgZmlsdGVyXG4gICAgICBpZiAoIXR5cGUpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIGkudHlwZSA9PT0gdHlwZTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBpc0Jvb2xlYW5BdHRyKGF0dHJOYW1lKSB7XG4gICAgLy8gQXMgcGVyIEhUTUwgc3BlYyB0YWJsZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmRpY2VzLmh0bWwjYXR0cmlidXRlcy0zOmJvb2xlYW4tYXR0cmlidXRlXG4gICAgLy8gQXJyYXkgcm91Z2hseSBvcmRlcmVkIGJ5IGVzdGltYXRlZCB1c2FnZVxuICAgIGNvbnN0IGJvb2xlYW5BdHRyaWJ1dGVzID0gWydkaXNhYmxlZCcsICdjaGVja2VkJywgJ3JlcXVpcmVkJywgJ3JlYWRvbmx5JywgJ2hpZGRlbicsICdvcGVuJywgJ3NlbGVjdGVkJywgJ2F1dG9mb2N1cycsICdpdGVtc2NvcGUnLCAnbXVsdGlwbGUnLCAnbm92YWxpZGF0ZScsICdhbGxvd2Z1bGxzY3JlZW4nLCAnYWxsb3dwYXltZW50cmVxdWVzdCcsICdmb3Jtbm92YWxpZGF0ZScsICdhdXRvcGxheScsICdjb250cm9scycsICdsb29wJywgJ211dGVkJywgJ3BsYXlzaW5saW5lJywgJ2RlZmF1bHQnLCAnaXNtYXAnLCAncmV2ZXJzZWQnLCAnYXN5bmMnLCAnZGVmZXInLCAnbm9tb2R1bGUnXTtcbiAgICByZXR1cm4gYm9vbGVhbkF0dHJpYnV0ZXMuaW5jbHVkZXMoYXR0ck5hbWUpO1xuICB9XG4gIGZ1bmN0aW9uIHJlcGxhY2VBdEFuZENvbG9uV2l0aFN0YW5kYXJkU3ludGF4KG5hbWUpIHtcbiAgICBpZiAobmFtZS5zdGFydHNXaXRoKCdAJykpIHtcbiAgICAgIHJldHVybiBuYW1lLnJlcGxhY2UoJ0AnLCAneC1vbjonKTtcbiAgICB9IGVsc2UgaWYgKG5hbWUuc3RhcnRzV2l0aCgnOicpKSB7XG4gICAgICByZXR1cm4gbmFtZS5yZXBsYWNlKCc6JywgJ3gtYmluZDonKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuICBmdW5jdGlvbiB0cmFuc2l0aW9uSW4oZWwsIHNob3csIGZvcmNlU2tpcCA9IGZhbHNlKSB7XG4gICAgLy8gV2UgZG9uJ3Qgd2FudCB0byB0cmFuc2l0aW9uIG9uIHRoZSBpbml0aWFsIHBhZ2UgbG9hZC5cbiAgICBpZiAoZm9yY2VTa2lwKSByZXR1cm4gc2hvdygpO1xuICAgIGNvbnN0IGF0dHJzID0gZ2V0WEF0dHJzKGVsLCAndHJhbnNpdGlvbicpO1xuICAgIGNvbnN0IHNob3dBdHRyID0gZ2V0WEF0dHJzKGVsLCAnc2hvdycpWzBdOyAvLyBJZiB0aGlzIGlzIHRyaWdnZXJlZCBieSBhIHgtc2hvdy50cmFuc2l0aW9uLlxuXG4gICAgaWYgKHNob3dBdHRyICYmIHNob3dBdHRyLm1vZGlmaWVycy5pbmNsdWRlcygndHJhbnNpdGlvbicpKSB7XG4gICAgICBsZXQgbW9kaWZpZXJzID0gc2hvd0F0dHIubW9kaWZpZXJzOyAvLyBJZiB4LXNob3cudHJhbnNpdGlvbi5vdXQsIHdlJ2xsIHNraXAgdGhlIFwiaW5cIiB0cmFuc2l0aW9uLlxuXG4gICAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKCdvdXQnKSAmJiAhbW9kaWZpZXJzLmluY2x1ZGVzKCdpbicpKSByZXR1cm4gc2hvdygpO1xuICAgICAgY29uc3Qgc2V0dGluZ0JvdGhTaWRlc09mVHJhbnNpdGlvbiA9IG1vZGlmaWVycy5pbmNsdWRlcygnaW4nKSAmJiBtb2RpZmllcnMuaW5jbHVkZXMoJ291dCcpOyAvLyBJZiB4LXNob3cudHJhbnNpdGlvbi5pbi4uLm91dC4uLiBvbmx5IHVzZSBcImluXCIgcmVsYXRlZCBtb2RpZmllcnMgZm9yIHRoaXMgdHJhbnNpdGlvbi5cblxuICAgICAgbW9kaWZpZXJzID0gc2V0dGluZ0JvdGhTaWRlc09mVHJhbnNpdGlvbiA/IG1vZGlmaWVycy5maWx0ZXIoKGksIGluZGV4KSA9PiBpbmRleCA8IG1vZGlmaWVycy5pbmRleE9mKCdvdXQnKSkgOiBtb2RpZmllcnM7XG4gICAgICB0cmFuc2l0aW9uSGVscGVySW4oZWwsIG1vZGlmaWVycywgc2hvdyk7IC8vIE90aGVyd2lzZSwgd2UgY2FuIGFzc3VtZSB4LXRyYW5zaXRpb246ZW50ZXIuXG4gICAgfSBlbHNlIGlmIChhdHRycy5sZW5ndGggPiAwKSB7XG4gICAgICB0cmFuc2l0aW9uQ2xhc3Nlc0luKGVsLCBhdHRycywgc2hvdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIG5laXRoZXIsIGp1c3Qgc2hvdyB0aGF0IGRhbW4gdGhpbmcuXG4gICAgICBzaG93KCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25PdXQoZWwsIGhpZGUsIGZvcmNlU2tpcCA9IGZhbHNlKSB7XG4gICAgaWYgKGZvcmNlU2tpcCkgcmV0dXJuIGhpZGUoKTtcbiAgICBjb25zdCBhdHRycyA9IGdldFhBdHRycyhlbCwgJ3RyYW5zaXRpb24nKTtcbiAgICBjb25zdCBzaG93QXR0ciA9IGdldFhBdHRycyhlbCwgJ3Nob3cnKVswXTtcblxuICAgIGlmIChzaG93QXR0ciAmJiBzaG93QXR0ci5tb2RpZmllcnMuaW5jbHVkZXMoJ3RyYW5zaXRpb24nKSkge1xuICAgICAgbGV0IG1vZGlmaWVycyA9IHNob3dBdHRyLm1vZGlmaWVycztcbiAgICAgIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoJ2luJykgJiYgIW1vZGlmaWVycy5pbmNsdWRlcygnb3V0JykpIHJldHVybiBoaWRlKCk7XG4gICAgICBjb25zdCBzZXR0aW5nQm90aFNpZGVzT2ZUcmFuc2l0aW9uID0gbW9kaWZpZXJzLmluY2x1ZGVzKCdpbicpICYmIG1vZGlmaWVycy5pbmNsdWRlcygnb3V0Jyk7XG4gICAgICBtb2RpZmllcnMgPSBzZXR0aW5nQm90aFNpZGVzT2ZUcmFuc2l0aW9uID8gbW9kaWZpZXJzLmZpbHRlcigoaSwgaW5kZXgpID0+IGluZGV4ID4gbW9kaWZpZXJzLmluZGV4T2YoJ291dCcpKSA6IG1vZGlmaWVycztcbiAgICAgIHRyYW5zaXRpb25IZWxwZXJPdXQoZWwsIG1vZGlmaWVycywgc2V0dGluZ0JvdGhTaWRlc09mVHJhbnNpdGlvbiwgaGlkZSk7XG4gICAgfSBlbHNlIGlmIChhdHRycy5sZW5ndGggPiAwKSB7XG4gICAgICB0cmFuc2l0aW9uQ2xhc3Nlc091dChlbCwgYXR0cnMsIGhpZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaWRlKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25IZWxwZXJJbihlbCwgbW9kaWZpZXJzLCBzaG93Q2FsbGJhY2spIHtcbiAgICAvLyBEZWZhdWx0IHZhbHVlcyBpbnNwaXJlZCBieTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vbW90aW9uL3NwZWVkLmh0bWwjZHVyYXRpb25cbiAgICBjb25zdCBzdHlsZVZhbHVlcyA9IHtcbiAgICAgIGR1cmF0aW9uOiBtb2RpZmllclZhbHVlKG1vZGlmaWVycywgJ2R1cmF0aW9uJywgMTUwKSxcbiAgICAgIG9yaWdpbjogbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsICdvcmlnaW4nLCAnY2VudGVyJyksXG4gICAgICBmaXJzdDoge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBzY2FsZTogbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsICdzY2FsZScsIDk1KVxuICAgICAgfSxcbiAgICAgIHNlY29uZDoge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBzY2FsZTogMTAwXG4gICAgICB9XG4gICAgfTtcbiAgICB0cmFuc2l0aW9uSGVscGVyKGVsLCBtb2RpZmllcnMsIHNob3dDYWxsYmFjaywgKCkgPT4ge30sIHN0eWxlVmFsdWVzKTtcbiAgfVxuICBmdW5jdGlvbiB0cmFuc2l0aW9uSGVscGVyT3V0KGVsLCBtb2RpZmllcnMsIHNldHRpbmdCb3RoU2lkZXNPZlRyYW5zaXRpb24sIGhpZGVDYWxsYmFjaykge1xuICAgIC8vIE1ha2UgdGhlIFwib3V0XCIgdHJhbnNpdGlvbiAuNXggc2xvd2VyIHRoYW4gdGhlIFwiaW5cIi4gKFZpc3VhbGx5IGJldHRlcilcbiAgICAvLyBIT1dFVkVSLCBpZiB0aGV5IGV4cGxpY2l0bHkgc2V0IGEgZHVyYXRpb24gZm9yIHRoZSBcIm91dFwiIHRyYW5zaXRpb24sXG4gICAgLy8gdXNlIHRoYXQuXG4gICAgY29uc3QgZHVyYXRpb24gPSBzZXR0aW5nQm90aFNpZGVzT2ZUcmFuc2l0aW9uID8gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsICdkdXJhdGlvbicsIDE1MCkgOiBtb2RpZmllclZhbHVlKG1vZGlmaWVycywgJ2R1cmF0aW9uJywgMTUwKSAvIDI7XG4gICAgY29uc3Qgc3R5bGVWYWx1ZXMgPSB7XG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBvcmlnaW46IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCAnb3JpZ2luJywgJ2NlbnRlcicpLFxuICAgICAgZmlyc3Q6IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgc2NhbGU6IDEwMFxuICAgICAgfSxcbiAgICAgIHNlY29uZDoge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBzY2FsZTogbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsICdzY2FsZScsIDk1KVxuICAgICAgfVxuICAgIH07XG4gICAgdHJhbnNpdGlvbkhlbHBlcihlbCwgbW9kaWZpZXJzLCAoKSA9PiB7fSwgaGlkZUNhbGxiYWNrLCBzdHlsZVZhbHVlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBtb2RpZmllclZhbHVlKG1vZGlmaWVycywga2V5LCBmYWxsYmFjaykge1xuICAgIC8vIElmIHRoZSBtb2RpZmllciBpc24ndCBwcmVzZW50LCB1c2UgdGhlIGRlZmF1bHQuXG4gICAgaWYgKG1vZGlmaWVycy5pbmRleE9mKGtleSkgPT09IC0xKSByZXR1cm4gZmFsbGJhY2s7IC8vIElmIGl0IElTIHByZXNlbnQsIGdyYWIgdGhlIHZhbHVlIGFmdGVyIGl0OiB4LXNob3cudHJhbnNpdGlvbi5kdXJhdGlvbi41MDBtc1xuXG4gICAgY29uc3QgcmF3VmFsdWUgPSBtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2Yoa2V5KSArIDFdO1xuICAgIGlmICghcmF3VmFsdWUpIHJldHVybiBmYWxsYmFjaztcblxuICAgIGlmIChrZXkgPT09ICdzY2FsZScpIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSB2ZXJ5IG5leHQgdmFsdWUgaXMgTk9UIGEgbnVtYmVyIGFuZCByZXR1cm4gdGhlIGZhbGxiYWNrLlxuICAgICAgLy8gSWYgeC1zaG93LnRyYW5zaXRpb24uc2NhbGUsIHdlJ2xsIHVzZSB0aGUgZGVmYXVsdCBzY2FsZSB2YWx1ZS5cbiAgICAgIC8vIFRoYXQgaXMgaG93IGEgdXNlciBvcHRzIG91dCBvZiB0aGUgb3BhY2l0eSB0cmFuc2l0aW9uLlxuICAgICAgaWYgKCFpc051bWVyaWMocmF3VmFsdWUpKSByZXR1cm4gZmFsbGJhY2s7XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ2R1cmF0aW9uJykge1xuICAgICAgLy8gU3VwcG9ydCB4LXNob3cudHJhbnNpdGlvbi5kdXJhdGlvbi41MDBtcyAmJiBkdXJhdGlvbi41MDBcbiAgICAgIGxldCBtYXRjaCA9IHJhd1ZhbHVlLm1hdGNoKC8oWzAtOV0rKW1zLyk7XG4gICAgICBpZiAobWF0Y2gpIHJldHVybiBtYXRjaFsxXTtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAnb3JpZ2luJykge1xuICAgICAgLy8gU3VwcG9ydCBjaGFpbmluZyBvcmlnaW4gZGlyZWN0aW9uczogeC1zaG93LnRyYW5zaXRpb24udG9wLnJpZ2h0XG4gICAgICBpZiAoWyd0b3AnLCAncmlnaHQnLCAnbGVmdCcsICdjZW50ZXInLCAnYm90dG9tJ10uaW5jbHVkZXMobW9kaWZpZXJzW21vZGlmaWVycy5pbmRleE9mKGtleSkgKyAyXSkpIHtcbiAgICAgICAgcmV0dXJuIFtyYXdWYWx1ZSwgbW9kaWZpZXJzW21vZGlmaWVycy5pbmRleE9mKGtleSkgKyAyXV0uam9pbignICcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByYXdWYWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25IZWxwZXIoZWwsIG1vZGlmaWVycywgaG9vazEsIGhvb2syLCBzdHlsZVZhbHVlcykge1xuICAgIC8vIElmIHRoZSB1c2VyIHNldCB0aGVzZSBzdHlsZSB2YWx1ZXMsIHdlJ2xsIHB1dCB0aGVtIGJhY2sgd2hlbiB3ZSdyZSBkb25lIHdpdGggdGhlbS5cbiAgICBjb25zdCBvcGFjaXR5Q2FjaGUgPSBlbC5zdHlsZS5vcGFjaXR5O1xuICAgIGNvbnN0IHRyYW5zZm9ybUNhY2hlID0gZWwuc3R5bGUudHJhbnNmb3JtO1xuICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpbkNhY2hlID0gZWwuc3R5bGUudHJhbnNmb3JtT3JpZ2luOyAvLyBJZiBubyBtb2RpZmllcnMgYXJlIHByZXNlbnQ6IHgtc2hvdy50cmFuc2l0aW9uLCB3ZSdsbCBkZWZhdWx0IHRvIGJvdGggb3BhY2l0eSBhbmQgc2NhbGUuXG5cbiAgICBjb25zdCBub01vZGlmaWVycyA9ICFtb2RpZmllcnMuaW5jbHVkZXMoJ29wYWNpdHknKSAmJiAhbW9kaWZpZXJzLmluY2x1ZGVzKCdzY2FsZScpO1xuICAgIGNvbnN0IHRyYW5zaXRpb25PcGFjaXR5ID0gbm9Nb2RpZmllcnMgfHwgbW9kaWZpZXJzLmluY2x1ZGVzKCdvcGFjaXR5Jyk7XG4gICAgY29uc3QgdHJhbnNpdGlvblNjYWxlID0gbm9Nb2RpZmllcnMgfHwgbW9kaWZpZXJzLmluY2x1ZGVzKCdzY2FsZScpOyAvLyBUaGVzZSBhcmUgdGhlIGV4cGxpY2l0IHN0YWdlcyBvZiBhIHRyYW5zaXRpb24gKHNhbWUgc3RhZ2VzIGZvciBpbiBhbmQgZm9yIG91dCkuXG4gICAgLy8gVGhpcyB3YXkgeW91IGNhbiBnZXQgYSBiaXJkcyBleWUgdmlldyBvZiB0aGUgaG9va3MsIGFuZCB0aGUgZGlmZmVyZW5jZXNcbiAgICAvLyBiZXR3ZWVuIHRoZW0uXG5cbiAgICBjb25zdCBzdGFnZXMgPSB7XG4gICAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKHRyYW5zaXRpb25PcGFjaXR5KSBlbC5zdHlsZS5vcGFjaXR5ID0gc3R5bGVWYWx1ZXMuZmlyc3Qub3BhY2l0eTtcbiAgICAgICAgaWYgKHRyYW5zaXRpb25TY2FsZSkgZWwuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7c3R5bGVWYWx1ZXMuZmlyc3Quc2NhbGUgLyAxMDB9KWA7XG4gICAgICB9LFxuXG4gICAgICBkdXJpbmcoKSB7XG4gICAgICAgIGlmICh0cmFuc2l0aW9uU2NhbGUpIGVsLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IHN0eWxlVmFsdWVzLm9yaWdpbjtcbiAgICAgICAgZWwuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gW3RyYW5zaXRpb25PcGFjaXR5ID8gYG9wYWNpdHlgIDogYGAsIHRyYW5zaXRpb25TY2FsZSA/IGB0cmFuc2Zvcm1gIDogYGBdLmpvaW4oJyAnKS50cmltKCk7XG4gICAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke3N0eWxlVmFsdWVzLmR1cmF0aW9uIC8gMTAwMH1zYDtcbiAgICAgICAgZWwuc3R5bGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gYGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKWA7XG4gICAgICB9LFxuXG4gICAgICBzaG93KCkge1xuICAgICAgICBob29rMSgpO1xuICAgICAgfSxcblxuICAgICAgZW5kKCkge1xuICAgICAgICBpZiAodHJhbnNpdGlvbk9wYWNpdHkpIGVsLnN0eWxlLm9wYWNpdHkgPSBzdHlsZVZhbHVlcy5zZWNvbmQub3BhY2l0eTtcbiAgICAgICAgaWYgKHRyYW5zaXRpb25TY2FsZSkgZWwuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7c3R5bGVWYWx1ZXMuc2Vjb25kLnNjYWxlIC8gMTAwfSlgO1xuICAgICAgfSxcblxuICAgICAgaGlkZSgpIHtcbiAgICAgICAgaG9vazIoKTtcbiAgICAgIH0sXG5cbiAgICAgIGNsZWFudXAoKSB7XG4gICAgICAgIGlmICh0cmFuc2l0aW9uT3BhY2l0eSkgZWwuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHlDYWNoZTtcbiAgICAgICAgaWYgKHRyYW5zaXRpb25TY2FsZSkgZWwuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtQ2FjaGU7XG4gICAgICAgIGlmICh0cmFuc2l0aW9uU2NhbGUpIGVsLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IHRyYW5zZm9ybU9yaWdpbkNhY2hlO1xuICAgICAgICBlbC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBudWxsO1xuICAgICAgICBlbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICBlbC5zdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSBudWxsO1xuICAgICAgfVxuXG4gICAgfTtcbiAgICB0cmFuc2l0aW9uKGVsLCBzdGFnZXMpO1xuICB9XG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25DbGFzc2VzSW4oZWwsIGRpcmVjdGl2ZXMsIHNob3dDYWxsYmFjaykge1xuICAgIGNvbnN0IGVudGVyID0gKGRpcmVjdGl2ZXMuZmluZChpID0+IGkudmFsdWUgPT09ICdlbnRlcicpIHx8IHtcbiAgICAgIGV4cHJlc3Npb246ICcnXG4gICAgfSkuZXhwcmVzc2lvbi5zcGxpdCgnICcpLmZpbHRlcihpID0+IGkgIT09ICcnKTtcbiAgICBjb25zdCBlbnRlclN0YXJ0ID0gKGRpcmVjdGl2ZXMuZmluZChpID0+IGkudmFsdWUgPT09ICdlbnRlci1zdGFydCcpIHx8IHtcbiAgICAgIGV4cHJlc3Npb246ICcnXG4gICAgfSkuZXhwcmVzc2lvbi5zcGxpdCgnICcpLmZpbHRlcihpID0+IGkgIT09ICcnKTtcbiAgICBjb25zdCBlbnRlckVuZCA9IChkaXJlY3RpdmVzLmZpbmQoaSA9PiBpLnZhbHVlID09PSAnZW50ZXItZW5kJykgfHwge1xuICAgICAgZXhwcmVzc2lvbjogJydcbiAgICB9KS5leHByZXNzaW9uLnNwbGl0KCcgJykuZmlsdGVyKGkgPT4gaSAhPT0gJycpO1xuICAgIHRyYW5zaXRpb25DbGFzc2VzKGVsLCBlbnRlciwgZW50ZXJTdGFydCwgZW50ZXJFbmQsIHNob3dDYWxsYmFjaywgKCkgPT4ge30pO1xuICB9XG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25DbGFzc2VzT3V0KGVsLCBkaXJlY3RpdmVzLCBoaWRlQ2FsbGJhY2spIHtcbiAgICBjb25zdCBsZWF2ZSA9IChkaXJlY3RpdmVzLmZpbmQoaSA9PiBpLnZhbHVlID09PSAnbGVhdmUnKSB8fCB7XG4gICAgICBleHByZXNzaW9uOiAnJ1xuICAgIH0pLmV4cHJlc3Npb24uc3BsaXQoJyAnKS5maWx0ZXIoaSA9PiBpICE9PSAnJyk7XG4gICAgY29uc3QgbGVhdmVTdGFydCA9IChkaXJlY3RpdmVzLmZpbmQoaSA9PiBpLnZhbHVlID09PSAnbGVhdmUtc3RhcnQnKSB8fCB7XG4gICAgICBleHByZXNzaW9uOiAnJ1xuICAgIH0pLmV4cHJlc3Npb24uc3BsaXQoJyAnKS5maWx0ZXIoaSA9PiBpICE9PSAnJyk7XG4gICAgY29uc3QgbGVhdmVFbmQgPSAoZGlyZWN0aXZlcy5maW5kKGkgPT4gaS52YWx1ZSA9PT0gJ2xlYXZlLWVuZCcpIHx8IHtcbiAgICAgIGV4cHJlc3Npb246ICcnXG4gICAgfSkuZXhwcmVzc2lvbi5zcGxpdCgnICcpLmZpbHRlcihpID0+IGkgIT09ICcnKTtcbiAgICB0cmFuc2l0aW9uQ2xhc3NlcyhlbCwgbGVhdmUsIGxlYXZlU3RhcnQsIGxlYXZlRW5kLCAoKSA9PiB7fSwgaGlkZUNhbGxiYWNrKTtcbiAgfVxuICBmdW5jdGlvbiB0cmFuc2l0aW9uQ2xhc3NlcyhlbCwgY2xhc3Nlc0R1cmluZywgY2xhc3Nlc1N0YXJ0LCBjbGFzc2VzRW5kLCBob29rMSwgaG9vazIpIHtcbiAgICBjb25zdCBvcmlnaW5hbENsYXNzZXMgPSBlbC5fX3hfb3JpZ2luYWxfY2xhc3NlcyB8fCBbXTtcbiAgICBjb25zdCBzdGFnZXMgPSB7XG4gICAgICBzdGFydCgpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzU3RhcnQpO1xuICAgICAgfSxcblxuICAgICAgZHVyaW5nKCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXNEdXJpbmcpO1xuICAgICAgfSxcblxuICAgICAgc2hvdygpIHtcbiAgICAgICAgaG9vazEoKTtcbiAgICAgIH0sXG5cbiAgICAgIGVuZCgpIHtcbiAgICAgICAgLy8gRG9uJ3QgcmVtb3ZlIGNsYXNzZXMgdGhhdCB3ZXJlIGluIHRoZSBvcmlnaW5hbCBjbGFzcyBhdHRyaWJ1dGUuXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3Nlc1N0YXJ0LmZpbHRlcihpID0+ICFvcmlnaW5hbENsYXNzZXMuaW5jbHVkZXMoaSkpKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzRW5kKTtcbiAgICAgIH0sXG5cbiAgICAgIGhpZGUoKSB7XG4gICAgICAgIGhvb2syKCk7XG4gICAgICB9LFxuXG4gICAgICBjbGVhbnVwKCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNsYXNzZXNEdXJpbmcuZmlsdGVyKGkgPT4gIW9yaWdpbmFsQ2xhc3Nlcy5pbmNsdWRlcyhpKSkpO1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNsYXNzZXNFbmQuZmlsdGVyKGkgPT4gIW9yaWdpbmFsQ2xhc3Nlcy5pbmNsdWRlcyhpKSkpO1xuICAgICAgfVxuXG4gICAgfTtcbiAgICB0cmFuc2l0aW9uKGVsLCBzdGFnZXMpO1xuICB9XG4gIGZ1bmN0aW9uIHRyYW5zaXRpb24oZWwsIHN0YWdlcykge1xuICAgIHN0YWdlcy5zdGFydCgpO1xuICAgIHN0YWdlcy5kdXJpbmcoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgLy8gTm90ZTogU2FmYXJpJ3MgdHJhbnNpdGlvbkR1cmF0aW9uIHByb3BlcnR5IHdpbGwgbGlzdCBvdXQgY29tbWEgc2VwYXJhdGVkIHRyYW5zaXRpb24gZHVyYXRpb25zXG4gICAgICAvLyBmb3IgZXZlcnkgc2luZ2xlIHRyYW5zaXRpb24gcHJvcGVydHkuIExldCdzIGdyYWIgdGhlIGZpcnN0IG9uZSBhbmQgY2FsbCBpdCBhIGRheS5cbiAgICAgIGxldCBkdXJhdGlvbiA9IE51bWJlcihnZXRDb21wdXRlZFN0eWxlKGVsKS50cmFuc2l0aW9uRHVyYXRpb24ucmVwbGFjZSgvLC4qLywgJycpLnJlcGxhY2UoJ3MnLCAnJykpICogMTAwMDtcbiAgICAgIHN0YWdlcy5zaG93KCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBzdGFnZXMuZW5kKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHN0YWdlcy5oaWRlKCk7IC8vIEFkZGluZyBhbiBcImlzQ29ubmVjdGVkXCIgY2hlY2ssIGluIGNhc2UgdGhlIGNhbGxiYWNrXG4gICAgICAgICAgLy8gcmVtb3ZlZCB0aGUgZWxlbWVudCBmcm9tIHRoZSBET00uXG5cbiAgICAgICAgICBpZiAoZWwuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHN0YWdlcy5jbGVhbnVwKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBpc051bWVyaWMoc3ViamVjdCkge1xuICAgIHJldHVybiAhaXNOYU4oc3ViamVjdCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVGb3JEaXJlY3RpdmUoY29tcG9uZW50LCB0ZW1wbGF0ZUVsLCBleHByZXNzaW9uLCBpbml0aWFsVXBkYXRlLCBleHRyYVZhcnMpIHtcbiAgICB3YXJuSWZOb3RUZW1wbGF0ZVRhZyh0ZW1wbGF0ZUVsKTtcbiAgICBsZXQgaXRlcmF0b3JOYW1lcyA9IHBhcnNlRm9yRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgICBsZXQgaXRlbXMgPSBldmFsdWF0ZUl0ZW1zQW5kUmV0dXJuRW1wdHlJZlhJZklzUHJlc2VudEFuZEZhbHNlT25FbGVtZW50KGNvbXBvbmVudCwgdGVtcGxhdGVFbCwgaXRlcmF0b3JOYW1lcywgZXh0cmFWYXJzKTsgLy8gQXMgd2Ugd2FsayB0aGUgYXJyYXksIHdlJ2xsIGFsc28gd2FsayB0aGUgRE9NICh1cGRhdGluZy9jcmVhdGluZyBhcyB3ZSBnbykuXG5cbiAgICBsZXQgY3VycmVudEVsID0gdGVtcGxhdGVFbDtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGl0ZXJhdGlvblNjb3BlVmFyaWFibGVzID0gZ2V0SXRlcmF0aW9uU2NvcGVWYXJpYWJsZXMoaXRlcmF0b3JOYW1lcywgaXRlbSwgaW5kZXgsIGl0ZW1zLCBleHRyYVZhcnMoKSk7XG4gICAgICBsZXQgY3VycmVudEtleSA9IGdlbmVyYXRlS2V5Rm9ySXRlcmF0aW9uKGNvbXBvbmVudCwgdGVtcGxhdGVFbCwgaW5kZXgsIGl0ZXJhdGlvblNjb3BlVmFyaWFibGVzKTtcbiAgICAgIGxldCBuZXh0RWwgPSBjdXJyZW50RWwubmV4dEVsZW1lbnRTaWJsaW5nOyAvLyBJZiB0aGVyZSdzIG5vIHByZXZpb3VzbHkgeC1mb3IgcHJvY2Vzc2VkIGVsZW1lbnQgYWhlYWQsIGFkZCBvbmUuXG5cbiAgICAgIGlmICghbmV4dEVsIHx8IG5leHRFbC5fX3hfZm9yX2tleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5leHRFbCA9IGFkZEVsZW1lbnRJbkxvb3BBZnRlckN1cnJlbnRFbCh0ZW1wbGF0ZUVsLCBjdXJyZW50RWwpOyAvLyBBbmQgdHJhbnNpdGlvbiBpdCBpbiBpZiBpdCdzIG5vdCB0aGUgZmlyc3QgcGFnZSBsb2FkLlxuXG4gICAgICAgIHRyYW5zaXRpb25JbihuZXh0RWwsICgpID0+IHt9LCBpbml0aWFsVXBkYXRlKTtcbiAgICAgICAgbmV4dEVsLl9feF9mb3IgPSBpdGVyYXRpb25TY29wZVZhcmlhYmxlcztcbiAgICAgICAgY29tcG9uZW50LmluaXRpYWxpemVFbGVtZW50cyhuZXh0RWwsICgpID0+IG5leHRFbC5fX3hfZm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHRFbCA9IGxvb2tBaGVhZEZvck1hdGNoaW5nS2V5ZWRFbGVtZW50QW5kTW92ZUl0SWZGb3VuZChuZXh0RWwsIGN1cnJlbnRLZXkpOyAvLyBJZiB3ZSBoYXZlbid0IGZvdW5kIGEgbWF0Y2hpbmcga2V5LCBqdXN0IGluc2VydCB0aGUgZWxlbWVudCBhdCB0aGUgY3VycmVudCBwb3NpdGlvblxuXG4gICAgICAgIGlmICghbmV4dEVsKSB7XG4gICAgICAgICAgbmV4dEVsID0gYWRkRWxlbWVudEluTG9vcEFmdGVyQ3VycmVudEVsKHRlbXBsYXRlRWwsIGN1cnJlbnRFbCk7XG4gICAgICAgIH0gLy8gVGVtcG9yYXJpbHkgcmVtb3ZlIHRoZSBrZXkgaW5kaWNhdG9yIHRvIGFsbG93IHRoZSBub3JtYWwgXCJ1cGRhdGVFbGVtZW50c1wiIHRvIHdvcmtcblxuXG4gICAgICAgIGRlbGV0ZSBuZXh0RWwuX194X2Zvcl9rZXk7XG4gICAgICAgIG5leHRFbC5fX3hfZm9yID0gaXRlcmF0aW9uU2NvcGVWYXJpYWJsZXM7XG4gICAgICAgIGNvbXBvbmVudC51cGRhdGVFbGVtZW50cyhuZXh0RWwsICgpID0+IG5leHRFbC5fX3hfZm9yKTtcbiAgICAgIH1cblxuICAgICAgY3VycmVudEVsID0gbmV4dEVsO1xuICAgICAgY3VycmVudEVsLl9feF9mb3Jfa2V5ID0gY3VycmVudEtleTtcbiAgICB9KTtcbiAgICByZW1vdmVBbnlMZWZ0T3ZlckVsZW1lbnRzRnJvbVByZXZpb3VzVXBkYXRlKGN1cnJlbnRFbCk7XG4gIH0gLy8gVGhpcyB3YXMgdGFrZW4gZnJvbSBWdWVKUyAyLiogY29yZS4gVGhhbmtzIFZ1ZSFcblxuICBmdW5jdGlvbiBwYXJzZUZvckV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIGxldCBmb3JJdGVyYXRvclJFID0gLywoW14sXFx9XFxdXSopKD86LChbXixcXH1cXF1dKikpPyQvO1xuICAgIGxldCBzdHJpcFBhcmVuc1JFID0gL15cXCh8XFwpJC9nO1xuICAgIGxldCBmb3JBbGlhc1JFID0gLyhbXFxzXFxTXSo/KVxccysoPzppbnxvZilcXHMrKFtcXHNcXFNdKikvO1xuICAgIGxldCBpbk1hdGNoID0gZXhwcmVzc2lvbi5tYXRjaChmb3JBbGlhc1JFKTtcbiAgICBpZiAoIWluTWF0Y2gpIHJldHVybjtcbiAgICBsZXQgcmVzID0ge307XG4gICAgcmVzLml0ZW1zID0gaW5NYXRjaFsyXS50cmltKCk7XG4gICAgbGV0IGl0ZW0gPSBpbk1hdGNoWzFdLnRyaW0oKS5yZXBsYWNlKHN0cmlwUGFyZW5zUkUsICcnKTtcbiAgICBsZXQgaXRlcmF0b3JNYXRjaCA9IGl0ZW0ubWF0Y2goZm9ySXRlcmF0b3JSRSk7XG5cbiAgICBpZiAoaXRlcmF0b3JNYXRjaCkge1xuICAgICAgcmVzLml0ZW0gPSBpdGVtLnJlcGxhY2UoZm9ySXRlcmF0b3JSRSwgJycpLnRyaW0oKTtcbiAgICAgIHJlcy5pbmRleCA9IGl0ZXJhdG9yTWF0Y2hbMV0udHJpbSgpO1xuXG4gICAgICBpZiAoaXRlcmF0b3JNYXRjaFsyXSkge1xuICAgICAgICByZXMuY29sbGVjdGlvbiA9IGl0ZXJhdG9yTWF0Y2hbMl0udHJpbSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXMuaXRlbSA9IGl0ZW07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdGlvblNjb3BlVmFyaWFibGVzKGl0ZXJhdG9yTmFtZXMsIGl0ZW0sIGluZGV4LCBpdGVtcywgZXh0cmFWYXJzKSB7XG4gICAgLy8gV2UgbXVzdCBjcmVhdGUgYSBuZXcgb2JqZWN0LCBzbyBlYWNoIGl0ZXJhdGlvbiBoYXMgYSBuZXcgc2NvcGVcbiAgICBsZXQgc2NvcGVWYXJpYWJsZXMgPSBleHRyYVZhcnMgPyBfb2JqZWN0U3ByZWFkMih7fSwgZXh0cmFWYXJzKSA6IHt9O1xuICAgIHNjb3BlVmFyaWFibGVzW2l0ZXJhdG9yTmFtZXMuaXRlbV0gPSBpdGVtO1xuICAgIGlmIChpdGVyYXRvck5hbWVzLmluZGV4KSBzY29wZVZhcmlhYmxlc1tpdGVyYXRvck5hbWVzLmluZGV4XSA9IGluZGV4O1xuICAgIGlmIChpdGVyYXRvck5hbWVzLmNvbGxlY3Rpb24pIHNjb3BlVmFyaWFibGVzW2l0ZXJhdG9yTmFtZXMuY29sbGVjdGlvbl0gPSBpdGVtcztcbiAgICByZXR1cm4gc2NvcGVWYXJpYWJsZXM7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZUtleUZvckl0ZXJhdGlvbihjb21wb25lbnQsIGVsLCBpbmRleCwgaXRlcmF0aW9uU2NvcGVWYXJpYWJsZXMpIHtcbiAgICBsZXQgYmluZEtleUF0dHJpYnV0ZSA9IGdldFhBdHRycyhlbCwgJ2JpbmQnKS5maWx0ZXIoYXR0ciA9PiBhdHRyLnZhbHVlID09PSAna2V5JylbMF07IC8vIElmIHRoZSBkZXYgaGFzbid0IHNwZWNpZmllZCBhIGtleSwganVzdCByZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBpdGVyYXRpb24uXG5cbiAgICBpZiAoIWJpbmRLZXlBdHRyaWJ1dGUpIHJldHVybiBpbmRleDtcbiAgICByZXR1cm4gY29tcG9uZW50LmV2YWx1YXRlUmV0dXJuRXhwcmVzc2lvbihlbCwgYmluZEtleUF0dHJpYnV0ZS5leHByZXNzaW9uLCAoKSA9PiBpdGVyYXRpb25TY29wZVZhcmlhYmxlcyk7XG4gIH1cblxuICBmdW5jdGlvbiB3YXJuSWZOb3RUZW1wbGF0ZVRhZyhlbCkge1xuICAgIGlmIChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICd0ZW1wbGF0ZScpIGNvbnNvbGUud2FybignQWxwaW5lOiBbeC1mb3JdIGRpcmVjdGl2ZSBzaG91bGQgb25seSBiZSBhZGRlZCB0byA8dGVtcGxhdGU+IHRhZ3MuJyk7XG4gIH1cblxuICBmdW5jdGlvbiBldmFsdWF0ZUl0ZW1zQW5kUmV0dXJuRW1wdHlJZlhJZklzUHJlc2VudEFuZEZhbHNlT25FbGVtZW50KGNvbXBvbmVudCwgZWwsIGl0ZXJhdG9yTmFtZXMsIGV4dHJhVmFycykge1xuICAgIGxldCBpZkF0dHJpYnV0ZSA9IGdldFhBdHRycyhlbCwgJ2lmJylbMF07XG5cbiAgICBpZiAoaWZBdHRyaWJ1dGUgJiYgIWNvbXBvbmVudC5ldmFsdWF0ZVJldHVybkV4cHJlc3Npb24oZWwsIGlmQXR0cmlidXRlLmV4cHJlc3Npb24pKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudC5ldmFsdWF0ZVJldHVybkV4cHJlc3Npb24oZWwsIGl0ZXJhdG9yTmFtZXMuaXRlbXMsIGV4dHJhVmFycyk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRFbGVtZW50SW5Mb29wQWZ0ZXJDdXJyZW50RWwodGVtcGxhdGVFbCwgY3VycmVudEVsKSB7XG4gICAgbGV0IGNsb25lID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZUVsLmNvbnRlbnQsIHRydWUpO1xuICAgIGlmIChjbG9uZS5jaGlsZEVsZW1lbnRDb3VudCAhPT0gMSkgY29uc29sZS53YXJuKCdBbHBpbmU6IDx0ZW1wbGF0ZT4gdGFnIHdpdGggW3gtZm9yXSBlbmNvdW50ZXJlZCB3aXRoIG11bHRpcGxlIGVsZW1lbnQgcm9vdHMuIE1ha2Ugc3VyZSA8dGVtcGxhdGU+IG9ubHkgaGFzIGEgc2luZ2xlIGNoaWxkIG5vZGUuJyk7XG4gICAgY3VycmVudEVsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNsb25lLCBjdXJyZW50RWwubmV4dEVsZW1lbnRTaWJsaW5nKTtcbiAgICByZXR1cm4gY3VycmVudEVsLm5leHRFbGVtZW50U2libGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvb2tBaGVhZEZvck1hdGNoaW5nS2V5ZWRFbGVtZW50QW5kTW92ZUl0SWZGb3VuZChuZXh0RWwsIGN1cnJlbnRLZXkpIHtcbiAgICAvLyBJZiB0aGUgdGhlIGtleSdzIERPIG1hdGNoLCBubyBuZWVkIHRvIGxvb2sgYWhlYWQuXG4gICAgaWYgKG5leHRFbC5fX3hfZm9yX2tleSA9PT0gY3VycmVudEtleSkgcmV0dXJuIG5leHRFbDsgLy8gSWYgdGhleSBkb24ndCwgd2UnbGwgbG9vayBhaGVhZCBmb3IgYSBtYXRjaC5cbiAgICAvLyBJZiB3ZSBmaW5kIGl0LCB3ZSdsbCBtb3ZlIGl0IHRvIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBsb29wLlxuXG4gICAgbGV0IHRtcE5leHRFbCA9IG5leHRFbDtcblxuICAgIHdoaWxlICh0bXBOZXh0RWwpIHtcbiAgICAgIGlmICh0bXBOZXh0RWwuX194X2Zvcl9rZXkgPT09IGN1cnJlbnRLZXkpIHtcbiAgICAgICAgcmV0dXJuIHRtcE5leHRFbC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZSh0bXBOZXh0RWwsIG5leHRFbCk7XG4gICAgICB9XG5cbiAgICAgIHRtcE5leHRFbCA9IHRtcE5leHRFbC5uZXh0RWxlbWVudFNpYmxpbmcgJiYgdG1wTmV4dEVsLm5leHRFbGVtZW50U2libGluZy5fX3hfZm9yX2tleSAhPT0gdW5kZWZpbmVkID8gdG1wTmV4dEVsLm5leHRFbGVtZW50U2libGluZyA6IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUFueUxlZnRPdmVyRWxlbWVudHNGcm9tUHJldmlvdXNVcGRhdGUoY3VycmVudEVsKSB7XG4gICAgdmFyIG5leHRFbGVtZW50RnJvbU9sZExvb3AgPSBjdXJyZW50RWwubmV4dEVsZW1lbnRTaWJsaW5nICYmIGN1cnJlbnRFbC5uZXh0RWxlbWVudFNpYmxpbmcuX194X2Zvcl9rZXkgIT09IHVuZGVmaW5lZCA/IGN1cnJlbnRFbC5uZXh0RWxlbWVudFNpYmxpbmcgOiBmYWxzZTtcblxuICAgIHdoaWxlIChuZXh0RWxlbWVudEZyb21PbGRMb29wKSB7XG4gICAgICBsZXQgbmV4dEVsZW1lbnRGcm9tT2xkTG9vcEltbXV0YWJsZSA9IG5leHRFbGVtZW50RnJvbU9sZExvb3A7XG4gICAgICBsZXQgbmV4dFNpYmxpbmcgPSBuZXh0RWxlbWVudEZyb21PbGRMb29wLm5leHRFbGVtZW50U2libGluZztcbiAgICAgIHRyYW5zaXRpb25PdXQobmV4dEVsZW1lbnRGcm9tT2xkTG9vcCwgKCkgPT4ge1xuICAgICAgICBuZXh0RWxlbWVudEZyb21PbGRMb29wSW1tdXRhYmxlLnJlbW92ZSgpO1xuICAgICAgfSk7XG4gICAgICBuZXh0RWxlbWVudEZyb21PbGRMb29wID0gbmV4dFNpYmxpbmcgJiYgbmV4dFNpYmxpbmcuX194X2Zvcl9rZXkgIT09IHVuZGVmaW5lZCA/IG5leHRTaWJsaW5nIDogZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQXR0cmlidXRlQmluZGluZ0RpcmVjdGl2ZShjb21wb25lbnQsIGVsLCBhdHRyTmFtZSwgZXhwcmVzc2lvbiwgZXh0cmFWYXJzLCBhdHRyVHlwZSkge1xuICAgIHZhciB2YWx1ZSA9IGNvbXBvbmVudC5ldmFsdWF0ZVJldHVybkV4cHJlc3Npb24oZWwsIGV4cHJlc3Npb24sIGV4dHJhVmFycyk7XG5cbiAgICBpZiAoYXR0ck5hbWUgPT09ICd2YWx1ZScpIHtcbiAgICAgIC8vIElmIG5lc3RlZCBtb2RlbCBrZXkgaXMgdW5kZWZpbmVkLCBzZXQgdGhlIGRlZmF1bHQgdmFsdWUgdG8gZW1wdHkgc3RyaW5nLlxuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgZXhwcmVzc2lvbi5tYXRjaCgvXFwuLykubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgIC8vIFNldCByYWRpbyB2YWx1ZSBmcm9tIHgtYmluZDp2YWx1ZSwgaWYgbm8gXCJ2YWx1ZVwiIGF0dHJpYnV0ZSBleGlzdHMuXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBhbnkgaW5pdGlhbCBzdGF0ZSB2YWx1ZXMsIHJhZGlvIHdpbGwgaGF2ZSBhIGNvcnJlY3RcbiAgICAgICAgLy8gXCJjaGVja2VkXCIgdmFsdWUgc2luY2UgeC1iaW5kOnZhbHVlIGlzIHByb2Nlc3NlZCBiZWZvcmUgeC1tb2RlbC5cbiAgICAgICAgaWYgKGVsLmF0dHJpYnV0ZXMudmFsdWUgPT09IHVuZGVmaW5lZCAmJiBhdHRyVHlwZSA9PT0gJ2JpbmQnKSB7XG4gICAgICAgICAgZWwudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChhdHRyVHlwZSAhPT0gJ2JpbmQnKSB7XG4gICAgICAgICAgZWwuY2hlY2tlZCA9IGVsLnZhbHVlID09IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVsLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgLy8gSSdtIHB1cnBvc2VseSBub3QgdXNpbmcgQXJyYXkuaW5jbHVkZXMgaGVyZSBiZWNhdXNlIGl0J3NcbiAgICAgICAgICAvLyBzdHJpY3QsIGFuZCBiZWNhdXNlIG9mIE51bWVyaWMvU3RyaW5nIG1pcy1jYXN0aW5nLCBJXG4gICAgICAgICAgLy8gd2FudCB0aGUgXCJpbmNsdWRlc1wiIHRvIGJlIFwiZnV6enlcIi5cbiAgICAgICAgICBsZXQgdmFsdWVGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIHZhbHVlLmZvckVhY2godmFsID0+IHtcbiAgICAgICAgICAgIGlmICh2YWwgPT0gZWwudmFsdWUpIHtcbiAgICAgICAgICAgICAgdmFsdWVGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZWwuY2hlY2tlZCA9IHZhbHVlRm91bmQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWwuY2hlY2tlZCA9ICEhdmFsdWU7XG4gICAgICAgIH0gLy8gSWYgd2UgYXJlIGV4cGxpY2l0bHkgYmluZGluZyBhIHN0cmluZyB0byB0aGUgOnZhbHVlLCBzZXQgdGhlIHN0cmluZyxcbiAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGEgYm9vbGVhbiwgbGVhdmUgaXQgYWxvbmUsIGl0IHdpbGwgYmUgc2V0IHRvIFwib25cIlxuICAgICAgICAvLyBhdXRvbWF0aWNhbGx5LlxuXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBlbC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVsLnRhZ05hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICAgIHVwZGF0ZVNlbGVjdChlbCwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ3Vyc29yIHBvc2l0aW9uIHNob3VsZCBiZSByZXN0b3JlZCBiYWNrIHRvIG9yaWdpbiBkdWUgdG8gYSBzYWZhcmkgYnVnXG4gICAgICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uID0gZWwuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIGVsLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKGVsID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgZWwuc2V0U2VsZWN0aW9uUmFuZ2UoY3Vyc29yUG9zaXRpb24sIGN1cnNvclBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICdjbGFzcycpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBjb25zdCBvcmlnaW5hbENsYXNzZXMgPSBlbC5fX3hfb3JpZ2luYWxfY2xhc3NlcyB8fCBbXTtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGFycmF5VW5pcXVlKG9yaWdpbmFsQ2xhc3Nlcy5jb25jYXQodmFsdWUpKS5qb2luKCcgJykpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIFNvcnRpbmcgdGhlIGtleXMgLyBjbGFzcyBuYW1lcyBieSB0aGVpciBib29sZWFuIHZhbHVlIHdpbGwgZW5zdXJlIHRoYXRcbiAgICAgICAgLy8gYW55dGhpbmcgdGhhdCBldmFsdWF0ZXMgdG8gYGZhbHNlYCBhbmQgbmVlZHMgdG8gcmVtb3ZlIGNsYXNzZXMgaXMgcnVuIGZpcnN0LlxuICAgICAgICBjb25zdCBrZXlzU29ydGVkQnlCb29sZWFuVmFsdWUgPSBPYmplY3Qua2V5cyh2YWx1ZSkuc29ydCgoYSwgYikgPT4gdmFsdWVbYV0gLSB2YWx1ZVtiXSk7XG4gICAgICAgIGtleXNTb3J0ZWRCeUJvb2xlYW5WYWx1ZS5mb3JFYWNoKGNsYXNzTmFtZXMgPT4ge1xuICAgICAgICAgIGlmICh2YWx1ZVtjbGFzc05hbWVzXSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lcy5zcGxpdCgnICcpLmZvckVhY2goY2xhc3NOYW1lID0+IGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGNsYXNzTmFtZSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBvcmlnaW5hbENsYXNzZXMgPSBlbC5fX3hfb3JpZ2luYWxfY2xhc3NlcyB8fCBbXTtcbiAgICAgICAgY29uc3QgbmV3Q2xhc3NlcyA9IHZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBhcnJheVVuaXF1ZShvcmlnaW5hbENsYXNzZXMuY29uY2F0KG5ld0NsYXNzZXMpKS5qb2luKCcgJykpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNCb29sZWFuQXR0cihhdHRyTmFtZSkpIHtcbiAgICAgIC8vIEJvb2xlYW4gYXR0cmlidXRlcyBoYXZlIHRvIGJlIGV4cGxpY2l0bHkgYWRkZWQgYW5kIHJlbW92ZWQsIG5vdCBqdXN0IHNldC5cbiAgICAgIGlmICghIXZhbHVlKSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2VsZWN0KGVsLCB2YWx1ZSkge1xuICAgIGNvbnN0IGFycmF5V3JhcHBlZFZhbHVlID0gW10uY29uY2F0KHZhbHVlKS5tYXAodmFsdWUgPT4ge1xuICAgICAgcmV0dXJuIHZhbHVlICsgJyc7XG4gICAgfSk7XG4gICAgQXJyYXkuZnJvbShlbC5vcHRpb25zKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSBhcnJheVdyYXBwZWRWYWx1ZS5pbmNsdWRlcyhvcHRpb24udmFsdWUgfHwgb3B0aW9uLnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVGV4dERpcmVjdGl2ZShlbCwgb3V0cHV0LCBleHByZXNzaW9uKSB7XG4gICAgLy8gSWYgbmVzdGVkIG1vZGVsIGtleSBpcyB1bmRlZmluZWQsIHNldCB0aGUgZGVmYXVsdCB2YWx1ZSB0byBlbXB0eSBzdHJpbmcuXG4gICAgaWYgKG91dHB1dCA9PT0gdW5kZWZpbmVkICYmIGV4cHJlc3Npb24ubWF0Y2goL1xcLi8pLmxlbmd0aCkge1xuICAgICAgb3V0cHV0ID0gJyc7XG4gICAgfVxuXG4gICAgZWwuaW5uZXJUZXh0ID0gb3V0cHV0O1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlSHRtbERpcmVjdGl2ZShjb21wb25lbnQsIGVsLCBleHByZXNzaW9uLCBleHRyYVZhcnMpIHtcbiAgICBlbC5pbm5lckhUTUwgPSBjb21wb25lbnQuZXZhbHVhdGVSZXR1cm5FeHByZXNzaW9uKGVsLCBleHByZXNzaW9uLCBleHRyYVZhcnMpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2hvd0RpcmVjdGl2ZShjb21wb25lbnQsIGVsLCB2YWx1ZSwgbW9kaWZpZXJzLCBpbml0aWFsVXBkYXRlID0gZmFsc2UpIHtcbiAgICBjb25zdCBoaWRlID0gKCkgPT4ge1xuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9O1xuXG4gICAgY29uc3Qgc2hvdyA9ICgpID0+IHtcbiAgICAgIGlmIChlbC5zdHlsZS5sZW5ndGggPT09IDEgJiYgZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChpbml0aWFsVXBkYXRlID09PSB0cnVlKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgc2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlkZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlID0gcmVzb2x2ZSA9PiB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIGlmIChlbC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICAgICAgICB0cmFuc2l0aW9uT3V0KGVsLCAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCgpID0+IHtcbiAgICAgICAgICAgICAgaGlkZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSgoKSA9PiB7fSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChlbC5zdHlsZS5kaXNwbGF5ICE9PSAnJykge1xuICAgICAgICAgIHRyYW5zaXRpb25JbihlbCwgKCkgPT4ge1xuICAgICAgICAgICAgc2hvdygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IC8vIFJlc29sdmUgaW1tZWRpYXRlbHksIG9ubHkgaG9sZCB1cCBwYXJlbnQgYHgtc2hvd2BzIGZvciBoaWRpbi5cblxuXG4gICAgICAgIHJlc29sdmUoKCkgPT4ge30pO1xuICAgICAgfVxuICAgIH07IC8vIFRoZSB3b3JraW5nIG9mIHgtc2hvdyBpcyBhIGJpdCBjb21wbGV4IGJlY2F1c2Ugd2UgbmVlZCB0b1xuICAgIC8vIHdhaXQgZm9yIGFueSBjaGlsZCB0cmFuc2l0aW9ucyB0byBmaW5pc2ggYmVmb3JlIGhpZGluZ1xuICAgIC8vIHNvbWUgZWxlbWVudC4gQWxzbywgdGhpcyBoYXMgdG8gYmUgZG9uZSByZWN1cnNpdmVseS5cbiAgICAvLyBJZiB4LXNob3cuaW1tZWRpYXRlLCBmb3JlZ29lIHRoZSB3YWl0aW5nLlxuXG5cbiAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKCdpbW1lZGlhdGUnKSkge1xuICAgICAgaGFuZGxlKGZpbmlzaCA9PiBmaW5pc2goKSk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyB4LXNob3cgaXMgZW5jb3VudGVyZWQgZHVyaW5nIGEgRE9NIHRyZWUgd2Fsay4gSWYgYW4gZWxlbWVudFxuICAgIC8vIHdlIGVuY291bnRlciBpcyBOT1QgYSBjaGlsZCBvZiBhbm90aGVyIHgtc2hvdyBlbGVtZW50IHdlXG4gICAgLy8gY2FuIGV4ZWN1dGUgdGhlIHByZXZpb3VzIHgtc2hvdyBzdGFjayAoaWYgb25lIGV4aXN0cykuXG5cblxuICAgIGlmIChjb21wb25lbnQuc2hvd0RpcmVjdGl2ZUxhc3RFbGVtZW50ICYmICFjb21wb25lbnQuc2hvd0RpcmVjdGl2ZUxhc3RFbGVtZW50LmNvbnRhaW5zKGVsKSkge1xuICAgICAgY29tcG9uZW50LmV4ZWN1dGVBbmRDbGVhclJlbWFpbmluZ1Nob3dEaXJlY3RpdmVTdGFjaygpO1xuICAgIH0gLy8gV2UnbGwgcHVzaCB0aGUgaGFuZGxlciBvbnRvIGEgc3RhY2sgdG8gYmUgaGFuZGxlZCBsYXRlci5cblxuXG4gICAgY29tcG9uZW50LnNob3dEaXJlY3RpdmVTdGFjay5wdXNoKGhhbmRsZSk7XG4gICAgY29tcG9uZW50LnNob3dEaXJlY3RpdmVMYXN0RWxlbWVudCA9IGVsO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlSWZEaXJlY3RpdmUoY29tcG9uZW50LCBlbCwgZXhwcmVzc2lvblJlc3VsdCwgaW5pdGlhbFVwZGF0ZSwgZXh0cmFWYXJzKSB7XG4gICAgaWYgKGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICd0ZW1wbGF0ZScpIGNvbnNvbGUud2FybihgQWxwaW5lOiBbeC1pZl0gZGlyZWN0aXZlIHNob3VsZCBvbmx5IGJlIGFkZGVkIHRvIDx0ZW1wbGF0ZT4gdGFncy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbHBpbmVqcy9hbHBpbmUjeC1pZmApO1xuICAgIGNvbnN0IGVsZW1lbnRIYXNBbHJlYWR5QmVlbkFkZGVkID0gZWwubmV4dEVsZW1lbnRTaWJsaW5nICYmIGVsLm5leHRFbGVtZW50U2libGluZy5fX3hfaW5zZXJ0ZWRfbWUgPT09IHRydWU7XG5cbiAgICBpZiAoZXhwcmVzc2lvblJlc3VsdCAmJiAhZWxlbWVudEhhc0FscmVhZHlCZWVuQWRkZWQpIHtcbiAgICAgIGNvbnN0IGNsb25lID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShlbC5jb250ZW50LCB0cnVlKTtcbiAgICAgIGVsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNsb25lLCBlbC5uZXh0RWxlbWVudFNpYmxpbmcpO1xuICAgICAgdHJhbnNpdGlvbkluKGVsLm5leHRFbGVtZW50U2libGluZywgKCkgPT4ge30sIGluaXRpYWxVcGRhdGUpO1xuICAgICAgY29tcG9uZW50LmluaXRpYWxpemVFbGVtZW50cyhlbC5uZXh0RWxlbWVudFNpYmxpbmcsIGV4dHJhVmFycyk7XG4gICAgICBlbC5uZXh0RWxlbWVudFNpYmxpbmcuX194X2luc2VydGVkX21lID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFleHByZXNzaW9uUmVzdWx0ICYmIGVsZW1lbnRIYXNBbHJlYWR5QmVlbkFkZGVkKSB7XG4gICAgICB0cmFuc2l0aW9uT3V0KGVsLm5leHRFbGVtZW50U2libGluZywgKCkgPT4ge1xuICAgICAgICBlbC5uZXh0RWxlbWVudFNpYmxpbmcucmVtb3ZlKCk7XG4gICAgICB9LCBpbml0aWFsVXBkYXRlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3Rlckxpc3RlbmVyKGNvbXBvbmVudCwgZWwsIGV2ZW50LCBtb2RpZmllcnMsIGV4cHJlc3Npb24sIGV4dHJhVmFycyA9IHt9KSB7XG4gICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcygnYXdheScpKSB7XG4gICAgICBsZXQgaGFuZGxlciA9IGUgPT4ge1xuICAgICAgICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiB0aGUgY2xpY2sgY2FtZSBmb3JtIHRoZSBlbGVtZW50IG9yIHdpdGhpbiBpdC5cbiAgICAgICAgaWYgKGVsLmNvbnRhaW5zKGUudGFyZ2V0KSkgcmV0dXJuOyAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiB0aGlzIGVsZW1lbnQgaXNuJ3QgY3VycmVudGx5IHZpc2libGUuXG5cbiAgICAgICAgaWYgKGVsLm9mZnNldFdpZHRoIDwgMSAmJiBlbC5vZmZzZXRIZWlnaHQgPCAxKSByZXR1cm47IC8vIE5vdyB0aGF0IHdlIGFyZSBzdXJlIHRoZSBlbGVtZW50IGlzIHZpc2libGUsIEFORCB0aGUgY2xpY2tcbiAgICAgICAgLy8gaXMgZnJvbSBvdXRzaWRlIGl0LCBsZXQncyBydW4gdGhlIGV4cHJlc3Npb24uXG5cbiAgICAgICAgcnVuTGlzdGVuZXJIYW5kbGVyKGNvbXBvbmVudCwgZXhwcmVzc2lvbiwgZSwgZXh0cmFWYXJzKTtcblxuICAgICAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKCdvbmNlJykpIHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgfTsgLy8gTGlzdGVuIGZvciB0aGlzIGV2ZW50IGF0IHRoZSByb290IGxldmVsLlxuXG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbGlzdGVuZXJUYXJnZXQgPSBtb2RpZmllcnMuaW5jbHVkZXMoJ3dpbmRvdycpID8gd2luZG93IDogbW9kaWZpZXJzLmluY2x1ZGVzKCdkb2N1bWVudCcpID8gZG9jdW1lbnQgOiBlbDtcblxuICAgICAgbGV0IGhhbmRsZXIgPSBlID0+IHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoaXMgZ2xvYmFsIGV2ZW50IGhhbmRsZXIgaWYgdGhlIGVsZW1lbnQgdGhhdCBkZWNsYXJlZCBpdFxuICAgICAgICAvLyBoYXMgYmVlbiByZW1vdmVkLiBJdCdzIG5vdyBzdGFsZS5cbiAgICAgICAgaWYgKGxpc3RlbmVyVGFyZ2V0ID09PSB3aW5kb3cgfHwgbGlzdGVuZXJUYXJnZXQgPT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGVsKSkge1xuICAgICAgICAgICAgbGlzdGVuZXJUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzS2V5RXZlbnQoZXZlbnQpKSB7XG4gICAgICAgICAgaWYgKGlzTGlzdGVuaW5nRm9yQVNwZWNpZmljS2V5VGhhdEhhc250QmVlblByZXNzZWQoZSwgbW9kaWZpZXJzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoJ3ByZXZlbnQnKSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKCdzdG9wJykpIGUuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIElmIHRoZSAuc2VsZiBtb2RpZmllciBpc24ndCBwcmVzZW50LCBvciBpZiBpdCBpcyBwcmVzZW50IGFuZFxuICAgICAgICAvLyB0aGUgdGFyZ2V0IGVsZW1lbnQgbWF0Y2hlcyB0aGUgZWxlbWVudCB3ZSBhcmUgcmVnaXN0ZXJpbmcgdGhlXG4gICAgICAgIC8vIGV2ZW50IG9uLCBydW4gdGhlIGhhbmRsZXJcblxuICAgICAgICBpZiAoIW1vZGlmaWVycy5pbmNsdWRlcygnc2VsZicpIHx8IGUudGFyZ2V0ID09PSBlbCkge1xuICAgICAgICAgIGNvbnN0IHJldHVyblZhbHVlID0gcnVuTGlzdGVuZXJIYW5kbGVyKGNvbXBvbmVudCwgZXhwcmVzc2lvbiwgZSwgZXh0cmFWYXJzKTtcblxuICAgICAgICAgIGlmIChyZXR1cm5WYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcygnb25jZScpKSB7XG4gICAgICAgICAgICAgIGxpc3RlbmVyVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcygnZGVib3VuY2UnKSkge1xuICAgICAgICBsZXQgbmV4dE1vZGlmaWVyID0gbW9kaWZpZXJzW21vZGlmaWVycy5pbmRleE9mKCdkZWJvdW5jZScpICsgMV0gfHwgJ2ludmFsaWQtd2FpdCc7XG4gICAgICAgIGxldCB3YWl0ID0gaXNOdW1lcmljKG5leHRNb2RpZmllci5zcGxpdCgnbXMnKVswXSkgPyBOdW1iZXIobmV4dE1vZGlmaWVyLnNwbGl0KCdtcycpWzBdKSA6IDI1MDtcbiAgICAgICAgaGFuZGxlciA9IGRlYm91bmNlKGhhbmRsZXIsIHdhaXQpO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lclRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBydW5MaXN0ZW5lckhhbmRsZXIoY29tcG9uZW50LCBleHByZXNzaW9uLCBlLCBleHRyYVZhcnMpIHtcbiAgICByZXR1cm4gY29tcG9uZW50LmV2YWx1YXRlQ29tbWFuZEV4cHJlc3Npb24oZS50YXJnZXQsIGV4cHJlc3Npb24sICgpID0+IHtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkMih7fSwgZXh0cmFWYXJzKCksIHtcbiAgICAgICAgJyRldmVudCc6IGVcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNLZXlFdmVudChldmVudCkge1xuICAgIHJldHVybiBbJ2tleWRvd24nLCAna2V5dXAnXS5pbmNsdWRlcyhldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0xpc3RlbmluZ0ZvckFTcGVjaWZpY0tleVRoYXRIYXNudEJlZW5QcmVzc2VkKGUsIG1vZGlmaWVycykge1xuICAgIGxldCBrZXlNb2RpZmllcnMgPSBtb2RpZmllcnMuZmlsdGVyKGkgPT4ge1xuICAgICAgcmV0dXJuICFbJ3dpbmRvdycsICdkb2N1bWVudCcsICdwcmV2ZW50JywgJ3N0b3AnXS5pbmNsdWRlcyhpKTtcbiAgICB9KTtcblxuICAgIGlmIChrZXlNb2RpZmllcnMuaW5jbHVkZXMoJ2RlYm91bmNlJykpIHtcbiAgICAgIGxldCBkZWJvdW5jZUluZGV4ID0ga2V5TW9kaWZpZXJzLmluZGV4T2YoJ2RlYm91bmNlJyk7XG4gICAgICBrZXlNb2RpZmllcnMuc3BsaWNlKGRlYm91bmNlSW5kZXgsIGlzTnVtZXJpYygoa2V5TW9kaWZpZXJzW2RlYm91bmNlSW5kZXggKyAxXSB8fCAnaW52YWxpZC13YWl0Jykuc3BsaXQoJ21zJylbMF0pID8gMiA6IDEpO1xuICAgIH0gLy8gSWYgbm8gbW9kaWZpZXIgaXMgc3BlY2lmaWVkLCB3ZSdsbCBjYWxsIGl0IGEgcHJlc3MuXG5cblxuICAgIGlmIChrZXlNb2RpZmllcnMubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7IC8vIElmIG9uZSBpcyBwYXNzZWQsIEFORCBpdCBtYXRjaGVzIHRoZSBrZXkgcHJlc3NlZCwgd2UnbGwgY2FsbCBpdCBhIHByZXNzLlxuXG4gICAgaWYgKGtleU1vZGlmaWVycy5sZW5ndGggPT09IDEgJiYga2V5TW9kaWZpZXJzWzBdID09PSBrZXlUb01vZGlmaWVyKGUua2V5KSkgcmV0dXJuIGZhbHNlOyAvLyBUaGUgdXNlciBpcyBsaXN0ZW5pbmcgZm9yIGtleSBjb21iaW5hdGlvbnMuXG5cbiAgICBjb25zdCBzeXN0ZW1LZXlNb2RpZmllcnMgPSBbJ2N0cmwnLCAnc2hpZnQnLCAnYWx0JywgJ21ldGEnLCAnY21kJywgJ3N1cGVyJ107XG4gICAgY29uc3Qgc2VsZWN0ZWRTeXN0ZW1LZXlNb2RpZmllcnMgPSBzeXN0ZW1LZXlNb2RpZmllcnMuZmlsdGVyKG1vZGlmaWVyID0+IGtleU1vZGlmaWVycy5pbmNsdWRlcyhtb2RpZmllcikpO1xuICAgIGtleU1vZGlmaWVycyA9IGtleU1vZGlmaWVycy5maWx0ZXIoaSA9PiAhc2VsZWN0ZWRTeXN0ZW1LZXlNb2RpZmllcnMuaW5jbHVkZXMoaSkpO1xuXG4gICAgaWYgKHNlbGVjdGVkU3lzdGVtS2V5TW9kaWZpZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGFjdGl2ZWx5UHJlc3NlZEtleU1vZGlmaWVycyA9IHNlbGVjdGVkU3lzdGVtS2V5TW9kaWZpZXJzLmZpbHRlcihtb2RpZmllciA9PiB7XG4gICAgICAgIC8vIEFsaWFzIFwiY21kXCIgYW5kIFwic3VwZXJcIiB0byBcIm1ldGFcIlxuICAgICAgICBpZiAobW9kaWZpZXIgPT09ICdjbWQnIHx8IG1vZGlmaWVyID09PSAnc3VwZXInKSBtb2RpZmllciA9ICdtZXRhJztcbiAgICAgICAgcmV0dXJuIGVbYCR7bW9kaWZpZXJ9S2V5YF07XG4gICAgICB9KTsgLy8gSWYgYWxsIHRoZSBtb2RpZmllcnMgc2VsZWN0ZWQgYXJlIHByZXNzZWQsIC4uLlxuXG4gICAgICBpZiAoYWN0aXZlbHlQcmVzc2VkS2V5TW9kaWZpZXJzLmxlbmd0aCA9PT0gc2VsZWN0ZWRTeXN0ZW1LZXlNb2RpZmllcnMubGVuZ3RoKSB7XG4gICAgICAgIC8vIEFORCB0aGUgcmVtYWluaW5nIGtleSBpcyBwcmVzc2VkIGFzIHdlbGwuIEl0J3MgYSBwcmVzcy5cbiAgICAgICAgaWYgKGtleU1vZGlmaWVyc1swXSA9PT0ga2V5VG9Nb2RpZmllcihlLmtleSkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IC8vIFdlJ2xsIGNhbGwgaXQgTk9UIGEgdmFsaWQga2V5cHJlc3MuXG5cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24ga2V5VG9Nb2RpZmllcihrZXkpIHtcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgY2FzZSAnLyc6XG4gICAgICAgIHJldHVybiAnc2xhc2gnO1xuXG4gICAgICBjYXNlICcgJzpcbiAgICAgIGNhc2UgJ1NwYWNlYmFyJzpcbiAgICAgICAgcmV0dXJuICdzcGFjZSc7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBrZXkgJiYga2ViYWJDYXNlKGtleSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJNb2RlbExpc3RlbmVyKGNvbXBvbmVudCwgZWwsIG1vZGlmaWVycywgZXhwcmVzc2lvbiwgZXh0cmFWYXJzKSB7XG4gICAgLy8gSWYgdGhlIGVsZW1lbnQgd2UgYXJlIGJpbmRpbmcgdG8gaXMgYSBzZWxlY3QsIGEgcmFkaW8sIG9yIGNoZWNrYm94XG4gICAgLy8gd2UnbGwgbGlzdGVuIGZvciB0aGUgY2hhbmdlIGV2ZW50IGluc3RlYWQgb2YgdGhlIFwiaW5wdXRcIiBldmVudC5cbiAgICB2YXIgZXZlbnQgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzZWxlY3QnIHx8IFsnY2hlY2tib3gnLCAncmFkaW8nXS5pbmNsdWRlcyhlbC50eXBlKSB8fCBtb2RpZmllcnMuaW5jbHVkZXMoJ2xhenknKSA/ICdjaGFuZ2UnIDogJ2lucHV0JztcbiAgICBjb25zdCBsaXN0ZW5lckV4cHJlc3Npb24gPSBgJHtleHByZXNzaW9ufSA9IHJpZ2h0U2lkZU9mRXhwcmVzc2lvbigkZXZlbnQsICR7ZXhwcmVzc2lvbn0pYDtcbiAgICByZWdpc3Rlckxpc3RlbmVyKGNvbXBvbmVudCwgZWwsIGV2ZW50LCBtb2RpZmllcnMsIGxpc3RlbmVyRXhwcmVzc2lvbiwgKCkgPT4ge1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQyKHt9LCBleHRyYVZhcnMoKSwge1xuICAgICAgICByaWdodFNpZGVPZkV4cHJlc3Npb246IGdlbmVyYXRlTW9kZWxBc3NpZ25tZW50RnVuY3Rpb24oZWwsIG1vZGlmaWVycywgZXhwcmVzc2lvbilcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVNb2RlbEFzc2lnbm1lbnRGdW5jdGlvbihlbCwgbW9kaWZpZXJzLCBleHByZXNzaW9uKSB7XG4gICAgaWYgKGVsLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIC8vIFJhZGlvIGJ1dHRvbnMgb25seSB3b3JrIHByb3Blcmx5IHdoZW4gdGhleSBzaGFyZSBhIG5hbWUgYXR0cmlidXRlLlxuICAgICAgLy8gUGVvcGxlIG1pZ2h0IGFzc3VtZSB3ZSB0YWtlIGNhcmUgb2YgdGhhdCBmb3IgdGhlbSwgYmVjYXVzZVxuICAgICAgLy8gdGhleSBhbHJlYWR5IHNldCBhIHNoYXJlZCBcIngtbW9kZWxcIiBhdHRyaWJ1dGUuXG4gICAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZSgnbmFtZScpKSBlbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBleHByZXNzaW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKGV2ZW50LCBjdXJyZW50VmFsdWUpID0+IHtcbiAgICAgIC8vIENoZWNrIGZvciBldmVudC5kZXRhaWwgZHVlIHRvIGFuIGlzc3VlIHdoZXJlIElFMTEgaGFuZGxlcyBvdGhlciBldmVudHMgYXMgYSBDdXN0b21FdmVudC5cbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEN1c3RvbUV2ZW50ICYmIGV2ZW50LmRldGFpbCkge1xuICAgICAgICByZXR1cm4gZXZlbnQuZGV0YWlsO1xuICAgICAgfSBlbHNlIGlmIChlbC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgIC8vIElmIHRoZSBkYXRhIHdlIGFyZSBiaW5kaW5nIHRvIGlzIGFuIGFycmF5LCB0b2dnbGUgaXQncyB2YWx1ZSBpbnNpZGUgdGhlIGFycmF5LlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjdXJyZW50VmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50LnRhcmdldC5jaGVja2VkID8gY3VycmVudFZhbHVlLmNvbmNhdChbZXZlbnQudGFyZ2V0LnZhbHVlXSkgOiBjdXJyZW50VmFsdWUuZmlsdGVyKGkgPT4gaSAhPT0gZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2VsZWN0JyAmJiBlbC5tdWx0aXBsZSkge1xuICAgICAgICByZXR1cm4gbW9kaWZpZXJzLmluY2x1ZGVzKCdudW1iZXInKSA/IEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LnNlbGVjdGVkT3B0aW9ucykubWFwKG9wdGlvbiA9PiB7XG4gICAgICAgICAgY29uc3QgcmF3VmFsdWUgPSBvcHRpb24udmFsdWUgfHwgb3B0aW9uLnRleHQ7XG4gICAgICAgICAgY29uc3QgbnVtYmVyID0gcmF3VmFsdWUgPyBwYXJzZUZsb2F0KHJhd1ZhbHVlKSA6IG51bGw7XG4gICAgICAgICAgcmV0dXJuIGlzTmFOKG51bWJlcikgPyByYXdWYWx1ZSA6IG51bWJlcjtcbiAgICAgICAgfSkgOiBBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5zZWxlY3RlZE9wdGlvbnMpLm1hcChvcHRpb24gPT4ge1xuICAgICAgICAgIHJldHVybiBvcHRpb24udmFsdWUgfHwgb3B0aW9uLnRleHQ7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmF3VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIGNvbnN0IG51bWJlciA9IHJhd1ZhbHVlID8gcGFyc2VGbG9hdChyYXdWYWx1ZSkgOiBudWxsO1xuICAgICAgICByZXR1cm4gbW9kaWZpZXJzLmluY2x1ZGVzKCdudW1iZXInKSA/IGlzTmFOKG51bWJlcikgPyByYXdWYWx1ZSA6IG51bWJlciA6IG1vZGlmaWVycy5pbmNsdWRlcygndHJpbScpID8gcmF3VmFsdWUudHJpbSgpIDogcmF3VmFsdWU7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3B5cmlnaHQgKEMpIDIwMTcgc2FsZXNmb3JjZS5jb20sIGluYy5cbiAgICovXG4gIGNvbnN0IHsgaXNBcnJheSB9ID0gQXJyYXk7XG4gIGNvbnN0IHsgZ2V0UHJvdG90eXBlT2YsIGNyZWF0ZTogT2JqZWN0Q3JlYXRlLCBkZWZpbmVQcm9wZXJ0eTogT2JqZWN0RGVmaW5lUHJvcGVydHksIGRlZmluZVByb3BlcnRpZXM6IE9iamVjdERlZmluZVByb3BlcnRpZXMsIGlzRXh0ZW5zaWJsZSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLCBnZXRPd25Qcm9wZXJ0eU5hbWVzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMsIHByZXZlbnRFeHRlbnNpb25zLCBoYXNPd25Qcm9wZXJ0eSwgfSA9IE9iamVjdDtcbiAgY29uc3QgeyBwdXNoOiBBcnJheVB1c2gsIGNvbmNhdDogQXJyYXlDb25jYXQsIG1hcDogQXJyYXlNYXAsIH0gPSBBcnJheS5wcm90b3R5cGU7XG4gIGZ1bmN0aW9uIGlzVW5kZWZpbmVkKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkO1xuICB9XG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuICBmdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JztcbiAgfVxuICBjb25zdCBwcm94eVRvVmFsdWVNYXAgPSBuZXcgV2Vha01hcCgpO1xuICBmdW5jdGlvbiByZWdpc3RlclByb3h5KHByb3h5LCB2YWx1ZSkge1xuICAgICAgcHJveHlUb1ZhbHVlTWFwLnNldChwcm94eSwgdmFsdWUpO1xuICB9XG4gIGNvbnN0IHVud3JhcCA9IChyZXBsaWNhT3JBbnkpID0+IHByb3h5VG9WYWx1ZU1hcC5nZXQocmVwbGljYU9yQW55KSB8fCByZXBsaWNhT3JBbnk7XG5cbiAgZnVuY3Rpb24gd3JhcFZhbHVlKG1lbWJyYW5lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG1lbWJyYW5lLnZhbHVlSXNPYnNlcnZhYmxlKHZhbHVlKSA/IG1lbWJyYW5lLmdldFByb3h5KHZhbHVlKSA6IHZhbHVlO1xuICB9XG4gIC8qKlxuICAgKiBVbndyYXAgcHJvcGVydHkgZGVzY3JpcHRvcnMgd2lsbCBzZXQgdmFsdWUgb24gb3JpZ2luYWwgZGVzY3JpcHRvclxuICAgKiBXZSBvbmx5IG5lZWQgdG8gdW53cmFwIGlmIHZhbHVlIGlzIHNwZWNpZmllZFxuICAgKiBAcGFyYW0gZGVzY3JpcHRvciBleHRlcm5hbCBkZXNjcnBpdG9yIHByb3ZpZGVkIHRvIGRlZmluZSBuZXcgcHJvcGVydHkgb24gb3JpZ2luYWwgdmFsdWVcbiAgICovXG4gIGZ1bmN0aW9uIHVud3JhcERlc2NyaXB0b3IoZGVzY3JpcHRvcikge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoZGVzY3JpcHRvciwgJ3ZhbHVlJykpIHtcbiAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gdW53cmFwKGRlc2NyaXB0b3IudmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gIH1cbiAgZnVuY3Rpb24gbG9ja1NoYWRvd1RhcmdldChtZW1icmFuZSwgc2hhZG93VGFyZ2V0LCBvcmlnaW5hbFRhcmdldCkge1xuICAgICAgY29uc3QgdGFyZ2V0S2V5cyA9IEFycmF5Q29uY2F0LmNhbGwoZ2V0T3duUHJvcGVydHlOYW1lcyhvcmlnaW5hbFRhcmdldCksIGdldE93blByb3BlcnR5U3ltYm9scyhvcmlnaW5hbFRhcmdldCkpO1xuICAgICAgdGFyZ2V0S2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBsZXQgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvcmlnaW5hbFRhcmdldCwga2V5KTtcbiAgICAgICAgICAvLyBXZSBkbyBub3QgbmVlZCB0byB3cmFwIHRoZSBkZXNjcmlwdG9yIGlmIGNvbmZpZ3VyYWJsZVxuICAgICAgICAgIC8vIEJlY2F1c2Ugd2UgY2FuIGRlYWwgd2l0aCB3cmFwcGluZyBpdCB3aGVuIHVzZXIgZ29lcyB0aHJvdWdoXG4gICAgICAgICAgLy8gR2V0IG93biBwcm9wZXJ0eSBkZXNjcmlwdG9yLiBUaGVyZSBpcyBhbHNvIGEgY2hhbmNlIHRoYXQgdGhpcyBkZXNjcmlwdG9yXG4gICAgICAgICAgLy8gY291bGQgY2hhbmdlIHNvbWV0aW1lIGluIHRoZSBmdXR1cmUsIHNvIHdlIGNhbiBkZWZlciB3cmFwcGluZ1xuICAgICAgICAgIC8vIHVudGlsIHdlIG5lZWQgdG9cbiAgICAgICAgICBpZiAoIWRlc2NyaXB0b3IuY29uZmlndXJhYmxlKSB7XG4gICAgICAgICAgICAgIGRlc2NyaXB0b3IgPSB3cmFwRGVzY3JpcHRvcihtZW1icmFuZSwgZGVzY3JpcHRvciwgd3JhcFZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgT2JqZWN0RGVmaW5lUHJvcGVydHkoc2hhZG93VGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgfSk7XG4gICAgICBwcmV2ZW50RXh0ZW5zaW9ucyhzaGFkb3dUYXJnZXQpO1xuICB9XG4gIGNsYXNzIFJlYWN0aXZlUHJveHlIYW5kbGVyIHtcbiAgICAgIGNvbnN0cnVjdG9yKG1lbWJyYW5lLCB2YWx1ZSkge1xuICAgICAgICAgIHRoaXMub3JpZ2luYWxUYXJnZXQgPSB2YWx1ZTtcbiAgICAgICAgICB0aGlzLm1lbWJyYW5lID0gbWVtYnJhbmU7XG4gICAgICB9XG4gICAgICBnZXQoc2hhZG93VGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgICBjb25zdCB7IG9yaWdpbmFsVGFyZ2V0LCBtZW1icmFuZSB9ID0gdGhpcztcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IG9yaWdpbmFsVGFyZ2V0W2tleV07XG4gICAgICAgICAgY29uc3QgeyB2YWx1ZU9ic2VydmVkIH0gPSBtZW1icmFuZTtcbiAgICAgICAgICB2YWx1ZU9ic2VydmVkKG9yaWdpbmFsVGFyZ2V0LCBrZXkpO1xuICAgICAgICAgIHJldHVybiBtZW1icmFuZS5nZXRQcm94eSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICBzZXQoc2hhZG93VGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgeyBvcmlnaW5hbFRhcmdldCwgbWVtYnJhbmU6IHsgdmFsdWVNdXRhdGVkIH0gfSA9IHRoaXM7XG4gICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBvcmlnaW5hbFRhcmdldFtrZXldO1xuICAgICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgb3JpZ2luYWxUYXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICB2YWx1ZU11dGF0ZWQob3JpZ2luYWxUYXJnZXQsIGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ2xlbmd0aCcgJiYgaXNBcnJheShvcmlnaW5hbFRhcmdldCkpIHtcbiAgICAgICAgICAgICAgLy8gZml4IGZvciBpc3N1ZSAjMjM2OiBwdXNoIHdpbGwgYWRkIHRoZSBuZXcgaW5kZXgsIGFuZCBieSB0aGUgdGltZSBsZW5ndGhcbiAgICAgICAgICAgICAgLy8gaXMgdXBkYXRlZCwgdGhlIGludGVybmFsIGxlbmd0aCBpcyBhbHJlYWR5IGVxdWFsIHRvIHRoZSBuZXcgbGVuZ3RoIHZhbHVlXG4gICAgICAgICAgICAgIC8vIHRoZXJlZm9yZSwgdGhlIG9sZFZhbHVlIGlzIGVxdWFsIHRvIHRoZSB2YWx1ZS4gVGhpcyBpcyB0aGUgZm9ya2luZyBsb2dpY1xuICAgICAgICAgICAgICAvLyB0byBzdXBwb3J0IHRoaXMgdXNlIGNhc2UuXG4gICAgICAgICAgICAgIHZhbHVlTXV0YXRlZChvcmlnaW5hbFRhcmdldCwga2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBkZWxldGVQcm9wZXJ0eShzaGFkb3dUYXJnZXQsIGtleSkge1xuICAgICAgICAgIGNvbnN0IHsgb3JpZ2luYWxUYXJnZXQsIG1lbWJyYW5lOiB7IHZhbHVlTXV0YXRlZCB9IH0gPSB0aGlzO1xuICAgICAgICAgIGRlbGV0ZSBvcmlnaW5hbFRhcmdldFtrZXldO1xuICAgICAgICAgIHZhbHVlTXV0YXRlZChvcmlnaW5hbFRhcmdldCwga2V5KTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGFwcGx5KHNoYWRvd1RhcmdldCwgdGhpc0FyZywgYXJnQXJyYXkpIHtcbiAgICAgICAgICAvKiBObyBvcCAqL1xuICAgICAgfVxuICAgICAgY29uc3RydWN0KHRhcmdldCwgYXJnQXJyYXksIG5ld1RhcmdldCkge1xuICAgICAgICAgIC8qIE5vIG9wICovXG4gICAgICB9XG4gICAgICBoYXMoc2hhZG93VGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgICBjb25zdCB7IG9yaWdpbmFsVGFyZ2V0LCBtZW1icmFuZTogeyB2YWx1ZU9ic2VydmVkIH0gfSA9IHRoaXM7XG4gICAgICAgICAgdmFsdWVPYnNlcnZlZChvcmlnaW5hbFRhcmdldCwga2V5KTtcbiAgICAgICAgICByZXR1cm4ga2V5IGluIG9yaWdpbmFsVGFyZ2V0O1xuICAgICAgfVxuICAgICAgb3duS2V5cyhzaGFkb3dUYXJnZXQpIHtcbiAgICAgICAgICBjb25zdCB7IG9yaWdpbmFsVGFyZ2V0IH0gPSB0aGlzO1xuICAgICAgICAgIHJldHVybiBBcnJheUNvbmNhdC5jYWxsKGdldE93blByb3BlcnR5TmFtZXMob3JpZ2luYWxUYXJnZXQpLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMob3JpZ2luYWxUYXJnZXQpKTtcbiAgICAgIH1cbiAgICAgIGlzRXh0ZW5zaWJsZShzaGFkb3dUYXJnZXQpIHtcbiAgICAgICAgICBjb25zdCBzaGFkb3dJc0V4dGVuc2libGUgPSBpc0V4dGVuc2libGUoc2hhZG93VGFyZ2V0KTtcbiAgICAgICAgICBpZiAoIXNoYWRvd0lzRXh0ZW5zaWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2hhZG93SXNFeHRlbnNpYmxlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB7IG9yaWdpbmFsVGFyZ2V0LCBtZW1icmFuZSB9ID0gdGhpcztcbiAgICAgICAgICBjb25zdCB0YXJnZXRJc0V4dGVuc2libGUgPSBpc0V4dGVuc2libGUob3JpZ2luYWxUYXJnZXQpO1xuICAgICAgICAgIGlmICghdGFyZ2V0SXNFeHRlbnNpYmxlKSB7XG4gICAgICAgICAgICAgIGxvY2tTaGFkb3dUYXJnZXQobWVtYnJhbmUsIHNoYWRvd1RhcmdldCwgb3JpZ2luYWxUYXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGFyZ2V0SXNFeHRlbnNpYmxlO1xuICAgICAgfVxuICAgICAgc2V0UHJvdG90eXBlT2Yoc2hhZG93VGFyZ2V0LCBwcm90b3R5cGUpIHtcbiAgICAgIH1cbiAgICAgIGdldFByb3RvdHlwZU9mKHNoYWRvd1RhcmdldCkge1xuICAgICAgICAgIGNvbnN0IHsgb3JpZ2luYWxUYXJnZXQgfSA9IHRoaXM7XG4gICAgICAgICAgcmV0dXJuIGdldFByb3RvdHlwZU9mKG9yaWdpbmFsVGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzaGFkb3dUYXJnZXQsIGtleSkge1xuICAgICAgICAgIGNvbnN0IHsgb3JpZ2luYWxUYXJnZXQsIG1lbWJyYW5lIH0gPSB0aGlzO1xuICAgICAgICAgIGNvbnN0IHsgdmFsdWVPYnNlcnZlZCB9ID0gdGhpcy5tZW1icmFuZTtcbiAgICAgICAgICAvLyBrZXlzIGxvb2tlZCB1cCB2aWEgaGFzT3duUHJvcGVydHkgbmVlZCB0byBiZSByZWFjdGl2ZVxuICAgICAgICAgIHZhbHVlT2JzZXJ2ZWQob3JpZ2luYWxUYXJnZXQsIGtleSk7XG4gICAgICAgICAgbGV0IGRlc2MgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob3JpZ2luYWxUYXJnZXQsIGtleSk7XG4gICAgICAgICAgaWYgKGlzVW5kZWZpbmVkKGRlc2MpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkZXNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBzaGFkb3dEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNoYWRvd1RhcmdldCwga2V5KTtcbiAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHNoYWRvd0Rlc2NyaXB0b3IpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzaGFkb3dEZXNjcmlwdG9yO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBOb3RlOiBieSBhY2Nlc3NpbmcgdGhlIGRlc2NyaXB0b3IsIHRoZSBrZXkgaXMgbWFya2VkIGFzIG9ic2VydmVkXG4gICAgICAgICAgLy8gYnV0IGFjY2VzcyB0byB0aGUgdmFsdWUsIHNldHRlciBvciBnZXR0ZXIgKGlmIGF2YWlsYWJsZSkgY2Fubm90IG9ic2VydmVcbiAgICAgICAgICAvLyBtdXRhdGlvbnMsIGp1c3QgbGlrZSByZWd1bGFyIG1ldGhvZHMsIGluIHdoaWNoIGNhc2Ugd2UganVzdCBkbyBub3RoaW5nLlxuICAgICAgICAgIGRlc2MgPSB3cmFwRGVzY3JpcHRvcihtZW1icmFuZSwgZGVzYywgd3JhcFZhbHVlKTtcbiAgICAgICAgICBpZiAoIWRlc2MuY29uZmlndXJhYmxlKSB7XG4gICAgICAgICAgICAgIC8vIElmIGRlc2NyaXB0b3IgZnJvbSBvcmlnaW5hbCB0YXJnZXQgaXMgbm90IGNvbmZpZ3VyYWJsZSxcbiAgICAgICAgICAgICAgLy8gV2UgbXVzdCBjb3B5IHRoZSB3cmFwcGVkIGRlc2NyaXB0b3Igb3ZlciB0byB0aGUgc2hhZG93IHRhcmdldC5cbiAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBwcm94eSB3aWxsIHRocm93IGFuIGludmFyaWFudCBlcnJvci5cbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBvdXIgbGFzdCBjaGFuY2UgdG8gbG9jayB0aGUgdmFsdWUuXG4gICAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1Byb3h5L2hhbmRsZXIvZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yI0ludmFyaWFudHNcbiAgICAgICAgICAgICAgT2JqZWN0RGVmaW5lUHJvcGVydHkoc2hhZG93VGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZGVzYztcbiAgICAgIH1cbiAgICAgIHByZXZlbnRFeHRlbnNpb25zKHNoYWRvd1RhcmdldCkge1xuICAgICAgICAgIGNvbnN0IHsgb3JpZ2luYWxUYXJnZXQsIG1lbWJyYW5lIH0gPSB0aGlzO1xuICAgICAgICAgIGxvY2tTaGFkb3dUYXJnZXQobWVtYnJhbmUsIHNoYWRvd1RhcmdldCwgb3JpZ2luYWxUYXJnZXQpO1xuICAgICAgICAgIHByZXZlbnRFeHRlbnNpb25zKG9yaWdpbmFsVGFyZ2V0KTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGRlZmluZVByb3BlcnR5KHNoYWRvd1RhcmdldCwga2V5LCBkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgY29uc3QgeyBvcmlnaW5hbFRhcmdldCwgbWVtYnJhbmUgfSA9IHRoaXM7XG4gICAgICAgICAgY29uc3QgeyB2YWx1ZU11dGF0ZWQgfSA9IG1lbWJyYW5lO1xuICAgICAgICAgIGNvbnN0IHsgY29uZmlndXJhYmxlIH0gPSBkZXNjcmlwdG9yO1xuICAgICAgICAgIC8vIFdlIGhhdmUgdG8gY2hlY2sgZm9yIHZhbHVlIGluIGRlc2NyaXB0b3JcbiAgICAgICAgICAvLyBiZWNhdXNlIE9iamVjdC5mcmVlemUocHJveHkpIGNhbGxzIHRoaXMgbWV0aG9kXG4gICAgICAgICAgLy8gd2l0aCBvbmx5IHsgY29uZmlndXJhYmxlOiBmYWxzZSwgd3JpdGVhYmxlOiBmYWxzZSB9XG4gICAgICAgICAgLy8gQWRkaXRpb25hbGx5LCBtZXRob2Qgd2lsbCBvbmx5IGJlIGNhbGxlZCB3aXRoIHdyaXRlYWJsZTpmYWxzZVxuICAgICAgICAgIC8vIGlmIHRoZSBkZXNjcmlwdG9yIGhhcyBhIHZhbHVlLCBhcyBvcHBvc2VkIHRvIGdldHRlci9zZXR0ZXJcbiAgICAgICAgICAvLyBTbyB3ZSBjYW4ganVzdCBjaGVjayBpZiB3cml0YWJsZSBpcyBwcmVzZW50IGFuZCB0aGVuIHNlZSBpZlxuICAgICAgICAgIC8vIHZhbHVlIGlzIHByZXNlbnQuIFRoaXMgZWxpbWluYXRlcyBnZXR0ZXIgYW5kIHNldHRlciBkZXNjcmlwdG9yc1xuICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGRlc2NyaXB0b3IsICd3cml0YWJsZScpICYmICFoYXNPd25Qcm9wZXJ0eS5jYWxsKGRlc2NyaXB0b3IsICd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsRGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvcmlnaW5hbFRhcmdldCwga2V5KTtcbiAgICAgICAgICAgICAgZGVzY3JpcHRvci52YWx1ZSA9IG9yaWdpbmFsRGVzY3JpcHRvci52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgT2JqZWN0RGVmaW5lUHJvcGVydHkob3JpZ2luYWxUYXJnZXQsIGtleSwgdW53cmFwRGVzY3JpcHRvcihkZXNjcmlwdG9yKSk7XG4gICAgICAgICAgaWYgKGNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgT2JqZWN0RGVmaW5lUHJvcGVydHkoc2hhZG93VGFyZ2V0LCBrZXksIHdyYXBEZXNjcmlwdG9yKG1lbWJyYW5lLCBkZXNjcmlwdG9yLCB3cmFwVmFsdWUpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFsdWVNdXRhdGVkKG9yaWdpbmFsVGFyZ2V0LCBrZXkpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gd3JhcFJlYWRPbmx5VmFsdWUobWVtYnJhbmUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gbWVtYnJhbmUudmFsdWVJc09ic2VydmFibGUodmFsdWUpID8gbWVtYnJhbmUuZ2V0UmVhZE9ubHlQcm94eSh2YWx1ZSkgOiB2YWx1ZTtcbiAgfVxuICBjbGFzcyBSZWFkT25seUhhbmRsZXIge1xuICAgICAgY29uc3RydWN0b3IobWVtYnJhbmUsIHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5vcmlnaW5hbFRhcmdldCA9IHZhbHVlO1xuICAgICAgICAgIHRoaXMubWVtYnJhbmUgPSBtZW1icmFuZTtcbiAgICAgIH1cbiAgICAgIGdldChzaGFkb3dUYXJnZXQsIGtleSkge1xuICAgICAgICAgIGNvbnN0IHsgbWVtYnJhbmUsIG9yaWdpbmFsVGFyZ2V0IH0gPSB0aGlzO1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gb3JpZ2luYWxUYXJnZXRba2V5XTtcbiAgICAgICAgICBjb25zdCB7IHZhbHVlT2JzZXJ2ZWQgfSA9IG1lbWJyYW5lO1xuICAgICAgICAgIHZhbHVlT2JzZXJ2ZWQob3JpZ2luYWxUYXJnZXQsIGtleSk7XG4gICAgICAgICAgcmV0dXJuIG1lbWJyYW5lLmdldFJlYWRPbmx5UHJveHkodmFsdWUpO1xuICAgICAgfVxuICAgICAgc2V0KHNoYWRvd1RhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZVByb3BlcnR5KHNoYWRvd1RhcmdldCwga2V5KSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgYXBwbHkoc2hhZG93VGFyZ2V0LCB0aGlzQXJnLCBhcmdBcnJheSkge1xuICAgICAgICAgIC8qIE5vIG9wICovXG4gICAgICB9XG4gICAgICBjb25zdHJ1Y3QodGFyZ2V0LCBhcmdBcnJheSwgbmV3VGFyZ2V0KSB7XG4gICAgICAgICAgLyogTm8gb3AgKi9cbiAgICAgIH1cbiAgICAgIGhhcyhzaGFkb3dUYXJnZXQsIGtleSkge1xuICAgICAgICAgIGNvbnN0IHsgb3JpZ2luYWxUYXJnZXQsIG1lbWJyYW5lOiB7IHZhbHVlT2JzZXJ2ZWQgfSB9ID0gdGhpcztcbiAgICAgICAgICB2YWx1ZU9ic2VydmVkKG9yaWdpbmFsVGFyZ2V0LCBrZXkpO1xuICAgICAgICAgIHJldHVybiBrZXkgaW4gb3JpZ2luYWxUYXJnZXQ7XG4gICAgICB9XG4gICAgICBvd25LZXlzKHNoYWRvd1RhcmdldCkge1xuICAgICAgICAgIGNvbnN0IHsgb3JpZ2luYWxUYXJnZXQgfSA9IHRoaXM7XG4gICAgICAgICAgcmV0dXJuIEFycmF5Q29uY2F0LmNhbGwoZ2V0T3duUHJvcGVydHlOYW1lcyhvcmlnaW5hbFRhcmdldCksIGdldE93blByb3BlcnR5U3ltYm9scyhvcmlnaW5hbFRhcmdldCkpO1xuICAgICAgfVxuICAgICAgc2V0UHJvdG90eXBlT2Yoc2hhZG93VGFyZ2V0LCBwcm90b3R5cGUpIHtcbiAgICAgIH1cbiAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzaGFkb3dUYXJnZXQsIGtleSkge1xuICAgICAgICAgIGNvbnN0IHsgb3JpZ2luYWxUYXJnZXQsIG1lbWJyYW5lIH0gPSB0aGlzO1xuICAgICAgICAgIGNvbnN0IHsgdmFsdWVPYnNlcnZlZCB9ID0gbWVtYnJhbmU7XG4gICAgICAgICAgLy8ga2V5cyBsb29rZWQgdXAgdmlhIGhhc093blByb3BlcnR5IG5lZWQgdG8gYmUgcmVhY3RpdmVcbiAgICAgICAgICB2YWx1ZU9ic2VydmVkKG9yaWdpbmFsVGFyZ2V0LCBrZXkpO1xuICAgICAgICAgIGxldCBkZXNjID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9yaWdpbmFsVGFyZ2V0LCBrZXkpO1xuICAgICAgICAgIGlmIChpc1VuZGVmaW5lZChkZXNjKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZGVzYztcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgc2hhZG93RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzaGFkb3dUYXJnZXQsIGtleSk7XG4gICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChzaGFkb3dEZXNjcmlwdG9yKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2hhZG93RGVzY3JpcHRvcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gTm90ZTogYnkgYWNjZXNzaW5nIHRoZSBkZXNjcmlwdG9yLCB0aGUga2V5IGlzIG1hcmtlZCBhcyBvYnNlcnZlZFxuICAgICAgICAgIC8vIGJ1dCBhY2Nlc3MgdG8gdGhlIHZhbHVlIG9yIGdldHRlciAoaWYgYXZhaWxhYmxlKSBjYW5ub3QgYmUgb2JzZXJ2ZWQsXG4gICAgICAgICAgLy8ganVzdCBsaWtlIHJlZ3VsYXIgbWV0aG9kcywgaW4gd2hpY2ggY2FzZSB3ZSBqdXN0IGRvIG5vdGhpbmcuXG4gICAgICAgICAgZGVzYyA9IHdyYXBEZXNjcmlwdG9yKG1lbWJyYW5lLCBkZXNjLCB3cmFwUmVhZE9ubHlWYWx1ZSk7XG4gICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoZGVzYywgJ3NldCcpKSB7XG4gICAgICAgICAgICAgIGRlc2Muc2V0ID0gdW5kZWZpbmVkOyAvLyByZWFkT25seSBtZW1icmFuZSBkb2VzIG5vdCBhbGxvdyBzZXR0ZXJzXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghZGVzYy5jb25maWd1cmFibGUpIHtcbiAgICAgICAgICAgICAgLy8gSWYgZGVzY3JpcHRvciBmcm9tIG9yaWdpbmFsIHRhcmdldCBpcyBub3QgY29uZmlndXJhYmxlLFxuICAgICAgICAgICAgICAvLyBXZSBtdXN0IGNvcHkgdGhlIHdyYXBwZWQgZGVzY3JpcHRvciBvdmVyIHRvIHRoZSBzaGFkb3cgdGFyZ2V0LlxuICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHByb3h5IHdpbGwgdGhyb3cgYW4gaW52YXJpYW50IGVycm9yLlxuICAgICAgICAgICAgICAvLyBUaGlzIGlzIG91ciBsYXN0IGNoYW5jZSB0byBsb2NrIHRoZSB2YWx1ZS5cbiAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvUHJveHkvaGFuZGxlci9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IjSW52YXJpYW50c1xuICAgICAgICAgICAgICBPYmplY3REZWZpbmVQcm9wZXJ0eShzaGFkb3dUYXJnZXQsIGtleSwgZGVzYyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkZXNjO1xuICAgICAgfVxuICAgICAgcHJldmVudEV4dGVuc2lvbnMoc2hhZG93VGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZGVmaW5lUHJvcGVydHkoc2hhZG93VGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlU2hhZG93VGFyZ2V0KHZhbHVlKSB7XG4gICAgICBsZXQgc2hhZG93VGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgc2hhZG93VGFyZ2V0ID0gW107XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICBzaGFkb3dUYXJnZXQgPSB7fTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzaGFkb3dUYXJnZXQ7XG4gIH1cbiAgY29uc3QgT2JqZWN0RG90UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgZnVuY3Rpb24gZGVmYXVsdFZhbHVlSXNPYnNlcnZhYmxlKHZhbHVlKSB7XG4gICAgICAvLyBpbnRlbnRpb25hbGx5IGNoZWNraW5nIGZvciBudWxsXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyB0cmVhdCBhbGwgbm9uLW9iamVjdCB0eXBlcywgaW5jbHVkaW5nIHVuZGVmaW5lZCwgYXMgbm9uLW9ic2VydmFibGUgdmFsdWVzXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgcHJvdG8gPSBnZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gICAgICByZXR1cm4gKHByb3RvID09PSBPYmplY3REb3RQcm90b3R5cGUgfHwgcHJvdG8gPT09IG51bGwgfHwgZ2V0UHJvdG90eXBlT2YocHJvdG8pID09PSBudWxsKTtcbiAgfVxuICBjb25zdCBkZWZhdWx0VmFsdWVPYnNlcnZlZCA9IChvYmosIGtleSkgPT4ge1xuICAgICAgLyogZG8gbm90aGluZyAqL1xuICB9O1xuICBjb25zdCBkZWZhdWx0VmFsdWVNdXRhdGVkID0gKG9iaiwga2V5KSA9PiB7XG4gICAgICAvKiBkbyBub3RoaW5nICovXG4gIH07XG4gIGNvbnN0IGRlZmF1bHRWYWx1ZURpc3RvcnRpb24gPSAodmFsdWUpID0+IHZhbHVlO1xuICBmdW5jdGlvbiB3cmFwRGVzY3JpcHRvcihtZW1icmFuZSwgZGVzY3JpcHRvciwgZ2V0VmFsdWUpIHtcbiAgICAgIGNvbnN0IHsgc2V0LCBnZXQgfSA9IGRlc2NyaXB0b3I7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChkZXNjcmlwdG9yLCAndmFsdWUnKSkge1xuICAgICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBnZXRWYWx1ZShtZW1icmFuZSwgZGVzY3JpcHRvci52YWx1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGdldCkpIHtcbiAgICAgICAgICAgICAgZGVzY3JpcHRvci5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAvLyBpbnZva2luZyB0aGUgb3JpZ2luYWwgZ2V0dGVyIHdpdGggdGhlIG9yaWdpbmFsIHRhcmdldFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFZhbHVlKG1lbWJyYW5lLCBnZXQuY2FsbCh1bndyYXAodGhpcykpKTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChzZXQpKSB7XG4gICAgICAgICAgICAgIGRlc2NyaXB0b3Iuc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50IHdlIGRvbid0IGhhdmUgYSBjbGVhciBpbmRpY2F0aW9uIG9mIHdoZXRoZXJcbiAgICAgICAgICAgICAgICAgIC8vIG9yIG5vdCBhIHZhbGlkIG11dGF0aW9uIHdpbGwgb2NjdXIsIHdlIGRvbid0IGhhdmUgdGhlIGtleSxcbiAgICAgICAgICAgICAgICAgIC8vIGFuZCB3ZSBhcmUgbm90IHN1cmUgd2h5IGFuZCBob3cgdGhleSBhcmUgaW52b2tpbmcgdGhpcyBzZXR0ZXIuXG4gICAgICAgICAgICAgICAgICAvLyBOZXZlcnRoZWxlc3Mgd2UgcHJlc2VydmUgdGhlIG9yaWdpbmFsIHNlbWFudGljcyBieSBpbnZva2luZyB0aGVcbiAgICAgICAgICAgICAgICAgIC8vIG9yaWdpbmFsIHNldHRlciB3aXRoIHRoZSBvcmlnaW5hbCB0YXJnZXQgYW5kIHRoZSB1bndyYXBwZWQgdmFsdWVcbiAgICAgICAgICAgICAgICAgIHNldC5jYWxsKHVud3JhcCh0aGlzKSwgbWVtYnJhbmUudW53cmFwUHJveHkodmFsdWUpKTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgfVxuICBjbGFzcyBSZWFjdGl2ZU1lbWJyYW5lIHtcbiAgICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlRGlzdG9ydGlvbiA9IGRlZmF1bHRWYWx1ZURpc3RvcnRpb247XG4gICAgICAgICAgdGhpcy52YWx1ZU11dGF0ZWQgPSBkZWZhdWx0VmFsdWVNdXRhdGVkO1xuICAgICAgICAgIHRoaXMudmFsdWVPYnNlcnZlZCA9IGRlZmF1bHRWYWx1ZU9ic2VydmVkO1xuICAgICAgICAgIHRoaXMudmFsdWVJc09ic2VydmFibGUgPSBkZWZhdWx0VmFsdWVJc09ic2VydmFibGU7XG4gICAgICAgICAgdGhpcy5vYmplY3RHcmFwaCA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHZhbHVlRGlzdG9ydGlvbiwgdmFsdWVNdXRhdGVkLCB2YWx1ZU9ic2VydmVkLCB2YWx1ZUlzT2JzZXJ2YWJsZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgICAgdGhpcy52YWx1ZURpc3RvcnRpb24gPSBpc0Z1bmN0aW9uKHZhbHVlRGlzdG9ydGlvbikgPyB2YWx1ZURpc3RvcnRpb24gOiBkZWZhdWx0VmFsdWVEaXN0b3J0aW9uO1xuICAgICAgICAgICAgICB0aGlzLnZhbHVlTXV0YXRlZCA9IGlzRnVuY3Rpb24odmFsdWVNdXRhdGVkKSA/IHZhbHVlTXV0YXRlZCA6IGRlZmF1bHRWYWx1ZU11dGF0ZWQ7XG4gICAgICAgICAgICAgIHRoaXMudmFsdWVPYnNlcnZlZCA9IGlzRnVuY3Rpb24odmFsdWVPYnNlcnZlZCkgPyB2YWx1ZU9ic2VydmVkIDogZGVmYXVsdFZhbHVlT2JzZXJ2ZWQ7XG4gICAgICAgICAgICAgIHRoaXMudmFsdWVJc09ic2VydmFibGUgPSBpc0Z1bmN0aW9uKHZhbHVlSXNPYnNlcnZhYmxlKSA/IHZhbHVlSXNPYnNlcnZhYmxlIDogZGVmYXVsdFZhbHVlSXNPYnNlcnZhYmxlO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGdldFByb3h5KHZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgdW53cmFwcGVkVmFsdWUgPSB1bndyYXAodmFsdWUpO1xuICAgICAgICAgIGNvbnN0IGRpc3RvcnRlZCA9IHRoaXMudmFsdWVEaXN0b3J0aW9uKHVud3JhcHBlZFZhbHVlKTtcbiAgICAgICAgICBpZiAodGhpcy52YWx1ZUlzT2JzZXJ2YWJsZShkaXN0b3J0ZWQpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG8gPSB0aGlzLmdldFJlYWN0aXZlU3RhdGUodW53cmFwcGVkVmFsdWUsIGRpc3RvcnRlZCk7XG4gICAgICAgICAgICAgIC8vIHdoZW4gdHJ5aW5nIHRvIGV4dHJhY3QgdGhlIHdyaXRhYmxlIHZlcnNpb24gb2YgYSByZWFkb25seVxuICAgICAgICAgICAgICAvLyB3ZSByZXR1cm4gdGhlIHJlYWRvbmx5LlxuICAgICAgICAgICAgICByZXR1cm4gby5yZWFkT25seSA9PT0gdmFsdWUgPyB2YWx1ZSA6IG8ucmVhY3RpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkaXN0b3J0ZWQ7XG4gICAgICB9XG4gICAgICBnZXRSZWFkT25seVByb3h5KHZhbHVlKSB7XG4gICAgICAgICAgdmFsdWUgPSB1bndyYXAodmFsdWUpO1xuICAgICAgICAgIGNvbnN0IGRpc3RvcnRlZCA9IHRoaXMudmFsdWVEaXN0b3J0aW9uKHZhbHVlKTtcbiAgICAgICAgICBpZiAodGhpcy52YWx1ZUlzT2JzZXJ2YWJsZShkaXN0b3J0ZWQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJlYWN0aXZlU3RhdGUodmFsdWUsIGRpc3RvcnRlZCkucmVhZE9ubHk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkaXN0b3J0ZWQ7XG4gICAgICB9XG4gICAgICB1bndyYXBQcm94eShwKSB7XG4gICAgICAgICAgcmV0dXJuIHVud3JhcChwKTtcbiAgICAgIH1cbiAgICAgIGdldFJlYWN0aXZlU3RhdGUodmFsdWUsIGRpc3RvcnRlZFZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgeyBvYmplY3RHcmFwaCwgfSA9IHRoaXM7XG4gICAgICAgICAgbGV0IHJlYWN0aXZlU3RhdGUgPSBvYmplY3RHcmFwaC5nZXQoZGlzdG9ydGVkVmFsdWUpO1xuICAgICAgICAgIGlmIChyZWFjdGl2ZVN0YXRlKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZWFjdGl2ZVN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBtZW1icmFuZSA9IHRoaXM7XG4gICAgICAgICAgcmVhY3RpdmVTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgZ2V0IHJlYWN0aXZlKCkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgcmVhY3RpdmVIYW5kbGVyID0gbmV3IFJlYWN0aXZlUHJveHlIYW5kbGVyKG1lbWJyYW5lLCBkaXN0b3J0ZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAvLyBjYWNoaW5nIHRoZSByZWFjdGl2ZSBwcm94eSBhZnRlciB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZFxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkoY3JlYXRlU2hhZG93VGFyZ2V0KGRpc3RvcnRlZFZhbHVlKSwgcmVhY3RpdmVIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUHJveHkocHJveHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIE9iamVjdERlZmluZVByb3BlcnR5KHRoaXMsICdyZWFjdGl2ZScsIHsgdmFsdWU6IHByb3h5IH0pO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBnZXQgcmVhZE9ubHkoKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCByZWFkT25seUhhbmRsZXIgPSBuZXcgUmVhZE9ubHlIYW5kbGVyKG1lbWJyYW5lLCBkaXN0b3J0ZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAvLyBjYWNoaW5nIHRoZSByZWFkT25seSBwcm94eSBhZnRlciB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZFxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkoY3JlYXRlU2hhZG93VGFyZ2V0KGRpc3RvcnRlZFZhbHVlKSwgcmVhZE9ubHlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUHJveHkocHJveHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIE9iamVjdERlZmluZVByb3BlcnR5KHRoaXMsICdyZWFkT25seScsIHsgdmFsdWU6IHByb3h5IH0pO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICBvYmplY3RHcmFwaC5zZXQoZGlzdG9ydGVkVmFsdWUsIHJlYWN0aXZlU3RhdGUpO1xuICAgICAgICAgIHJldHVybiByZWFjdGl2ZVN0YXRlO1xuICAgICAgfVxuICB9XG4gIC8qKiB2ZXJzaW9uOiAwLjI2LjAgKi9cblxuICBmdW5jdGlvbiB3cmFwKGRhdGEsIG11dGF0aW9uQ2FsbGJhY2spIHtcblxuICAgIGxldCBtZW1icmFuZSA9IG5ldyBSZWFjdGl2ZU1lbWJyYW5lKHtcbiAgICAgIHZhbHVlTXV0YXRlZCh0YXJnZXQsIGtleSkge1xuICAgICAgICBtdXRhdGlvbkNhbGxiYWNrKHRhcmdldCwga2V5KTtcbiAgICAgIH1cblxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBtZW1icmFuZS5nZXRQcm94eShkYXRhKSxcbiAgICAgIG1lbWJyYW5lOiBtZW1icmFuZVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gdW53cmFwJDEobWVtYnJhbmUsIG9ic2VydmFibGUpIHtcbiAgICBsZXQgdW53cmFwcGVkRGF0YSA9IG1lbWJyYW5lLnVud3JhcFByb3h5KG9ic2VydmFibGUpO1xuICAgIGxldCBjb3B5ID0ge307XG4gICAgT2JqZWN0LmtleXModW53cmFwcGVkRGF0YSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKFsnJGVsJywgJyRyZWZzJywgJyRuZXh0VGljaycsICckd2F0Y2gnXS5pbmNsdWRlcyhrZXkpKSByZXR1cm47XG4gICAgICBjb3B5W2tleV0gPSB1bndyYXBwZWREYXRhW2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvcHk7XG4gIH1cblxuICBjbGFzcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsLCBzZWVkRGF0YUZvckNsb25pbmcgPSBudWxsKSB7XG4gICAgICB0aGlzLiRlbCA9IGVsO1xuICAgICAgY29uc3QgZGF0YUF0dHIgPSB0aGlzLiRlbC5nZXRBdHRyaWJ1dGUoJ3gtZGF0YScpO1xuICAgICAgY29uc3QgZGF0YUV4cHJlc3Npb24gPSBkYXRhQXR0ciA9PT0gJycgPyAne30nIDogZGF0YUF0dHI7XG4gICAgICBjb25zdCBpbml0RXhwcmVzc2lvbiA9IHRoaXMuJGVsLmdldEF0dHJpYnV0ZSgneC1pbml0Jyk7XG4gICAgICB0aGlzLnVub2JzZXJ2ZWREYXRhID0gc2VlZERhdGFGb3JDbG9uaW5nID8gc2VlZERhdGFGb3JDbG9uaW5nIDogc2FmZXJFdmFsKGRhdGFFeHByZXNzaW9uLCB7fSk7XG4gICAgICAvLyBDb25zdHJ1Y3QgYSBQcm94eS1iYXNlZCBvYnNlcnZhYmxlLiBUaGlzIHdpbGwgYmUgdXNlZCB0byBoYW5kbGUgcmVhY3Rpdml0eS5cblxuICAgICAgbGV0IHtcbiAgICAgICAgbWVtYnJhbmUsXG4gICAgICAgIGRhdGFcbiAgICAgIH0gPSB0aGlzLndyYXBEYXRhSW5PYnNlcnZhYmxlKHRoaXMudW5vYnNlcnZlZERhdGEpO1xuICAgICAgdGhpcy4kZGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLm1lbWJyYW5lID0gbWVtYnJhbmU7IC8vIEFmdGVyIG1ha2luZyB1c2VyLXN1cHBsaWVkIGRhdGEgbWV0aG9kcyByZWFjdGl2ZSwgd2UgY2FuIG5vdyBhZGRcbiAgICAgIC8vIG91ciBtYWdpYyBwcm9wZXJ0aWVzIHRvIHRoZSBvcmlnaW5hbCBkYXRhIGZvciBhY2Nlc3MuXG5cbiAgICAgIHRoaXMudW5vYnNlcnZlZERhdGEuJGVsID0gdGhpcy4kZWw7XG4gICAgICB0aGlzLnVub2JzZXJ2ZWREYXRhLiRyZWZzID0gdGhpcy5nZXRSZWZzUHJveHkoKTtcbiAgICAgIHRoaXMubmV4dFRpY2tTdGFjayA9IFtdO1xuXG4gICAgICB0aGlzLnVub2JzZXJ2ZWREYXRhLiRuZXh0VGljayA9IGNhbGxiYWNrID0+IHtcbiAgICAgICAgdGhpcy5uZXh0VGlja1N0YWNrLnB1c2goY2FsbGJhY2spO1xuICAgICAgfTtcblxuICAgICAgdGhpcy53YXRjaGVycyA9IHt9O1xuXG4gICAgICB0aGlzLnVub2JzZXJ2ZWREYXRhLiR3YXRjaCA9IChwcm9wZXJ0eSwgY2FsbGJhY2spID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLndhdGNoZXJzW3Byb3BlcnR5XSkgdGhpcy53YXRjaGVyc1twcm9wZXJ0eV0gPSBbXTtcbiAgICAgICAgdGhpcy53YXRjaGVyc1twcm9wZXJ0eV0ucHVzaChjYWxsYmFjayk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnNob3dEaXJlY3RpdmVTdGFjayA9IFtdO1xuICAgICAgdGhpcy5zaG93RGlyZWN0aXZlTGFzdEVsZW1lbnQ7XG4gICAgICB2YXIgaW5pdFJldHVybmVkQ2FsbGJhY2s7IC8vIElmIHgtaW5pdCBpcyBwcmVzZW50IEFORCB3ZSBhcmVuJ3QgY2xvbmluZyAoc2tpcCB4LWluaXQgb24gY2xvbmUpXG5cbiAgICAgIGlmIChpbml0RXhwcmVzc2lvbiAmJiAhc2VlZERhdGFGb3JDbG9uaW5nKSB7XG4gICAgICAgIC8vIFdlIHdhbnQgdG8gYWxsb3cgZGF0YSBtYW5pcHVsYXRpb24sIGJ1dCBub3QgdHJpZ2dlciBET00gdXBkYXRlcyBqdXN0IHlldC5cbiAgICAgICAgLy8gV2UgaGF2ZW4ndCBldmVuIGluaXRpYWxpemVkIHRoZSBlbGVtZW50cyB3aXRoIHRoZWlyIEFscGluZSBiaW5kaW5ncy4gSSBtZWFuIGMnbW9uLlxuICAgICAgICB0aGlzLnBhdXNlUmVhY3Rpdml0eSA9IHRydWU7XG4gICAgICAgIGluaXRSZXR1cm5lZENhbGxiYWNrID0gdGhpcy5ldmFsdWF0ZVJldHVybkV4cHJlc3Npb24odGhpcy4kZWwsIGluaXRFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5wYXVzZVJlYWN0aXZpdHkgPSBmYWxzZTtcbiAgICAgIH0gLy8gUmVnaXN0ZXIgYWxsIG91ciBsaXN0ZW5lcnMgYW5kIHNldCBhbGwgb3VyIGF0dHJpYnV0ZSBiaW5kaW5ncy5cblxuXG4gICAgICB0aGlzLmluaXRpYWxpemVFbGVtZW50cyh0aGlzLiRlbCk7IC8vIFVzZSBtdXRhdGlvbiBvYnNlcnZlciB0byBkZXRlY3QgbmV3IGVsZW1lbnRzIGJlaW5nIGFkZGVkIHdpdGhpbiB0aGlzIGNvbXBvbmVudCBhdCBydW4tdGltZS5cbiAgICAgIC8vIEFscGluZSdzIGp1c3Qgc28gZGFybiBmbGV4aWJsZSBhbWlyaXRlP1xuXG4gICAgICB0aGlzLmxpc3RlbkZvck5ld0VsZW1lbnRzVG9Jbml0aWFsaXplKCk7XG5cbiAgICAgIGlmICh0eXBlb2YgaW5pdFJldHVybmVkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gUnVuIHRoZSBjYWxsYmFjayByZXR1cm5lZCBmcm9tIHRoZSBcIngtaW5pdFwiIGhvb2sgdG8gYWxsb3cgdGhlIHVzZXIgdG8gZG8gc3R1ZmYgYWZ0ZXJcbiAgICAgICAgLy8gQWxwaW5lJ3MgZ290IGl0J3MgZ3J1YmJ5IGxpdHRsZSBwYXdzIGFsbCBvdmVyIGV2ZXJ5dGhpbmcuXG4gICAgICAgIGluaXRSZXR1cm5lZENhbGxiYWNrLmNhbGwodGhpcy4kZGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VW5vYnNlcnZlZERhdGEoKSB7XG4gICAgICByZXR1cm4gdW53cmFwJDEodGhpcy5tZW1icmFuZSwgdGhpcy4kZGF0YSk7XG4gICAgfVxuXG4gICAgd3JhcERhdGFJbk9ic2VydmFibGUoZGF0YSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IHVwZGF0ZURvbSA9IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi51cGRhdGVFbGVtZW50cyhzZWxmLiRlbCk7XG4gICAgICB9LCAwKTtcbiAgICAgIHJldHVybiB3cmFwKGRhdGEsICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBpZiAoc2VsZi53YXRjaGVyc1trZXldKSB7XG4gICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHdhdGNoZXIgZm9yIHRoaXMgc3BlY2lmaWMga2V5LCBydW4gaXQuXG4gICAgICAgICAgc2VsZi53YXRjaGVyc1trZXldLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2sodGFyZ2V0W2tleV0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBMZXQncyB3YWxrIHRocm91Z2ggdGhlIHdhdGNoZXJzIHdpdGggXCJkb3Qtbm90YXRpb25cIiAoZm9vLmJhcikgYW5kIHNlZVxuICAgICAgICAgIC8vIGlmIHRoaXMgbXV0YXRpb24gZml0cyBhbnkgb2YgdGhlbS5cbiAgICAgICAgICBPYmplY3Qua2V5cyhzZWxmLndhdGNoZXJzKS5maWx0ZXIoaSA9PiBpLmluY2x1ZGVzKCcuJykpLmZvckVhY2goZnVsbERvdE5vdGF0aW9uS2V5ID0+IHtcbiAgICAgICAgICAgIGxldCBkb3ROb3RhdGlvblBhcnRzID0gZnVsbERvdE5vdGF0aW9uS2V5LnNwbGl0KCcuJyk7IC8vIElmIHRoaXMgZG90LW5vdGF0aW9uIHdhdGNoZXIncyBsYXN0IFwicGFydFwiIGRvZXNuJ3QgbWF0Y2ggdGhlIGN1cnJlbnRcbiAgICAgICAgICAgIC8vIGtleSwgdGhlbiBza2lwIGl0IGVhcmx5IGZvciBwZXJmb3JtYW5jZSByZWFzb25zLlxuXG4gICAgICAgICAgICBpZiAoa2V5ICE9PSBkb3ROb3RhdGlvblBhcnRzW2RvdE5vdGF0aW9uUGFydHMubGVuZ3RoIC0gMV0pIHJldHVybjsgLy8gTm93LCB3YWxrIHRocm91Z2ggdGhlIGRvdC1ub3RhdGlvbiBcInBhcnRzXCIgcmVjdXJzaXZlbHkgdG8gZmluZFxuICAgICAgICAgICAgLy8gYSBtYXRjaCwgYW5kIGNhbGwgdGhlIHdhdGNoZXIgaWYgb25lJ3MgZm91bmQuXG5cbiAgICAgICAgICAgIGRvdE5vdGF0aW9uUGFydHMucmVkdWNlKChjb21wYXJpc29uRGF0YSwgcGFydCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoT2JqZWN0LmlzKHRhcmdldCwgY29tcGFyaXNvbkRhdGEpKSB7XG4gICAgICAgICAgICAgICAgLy8gUnVuIHRoZSB3YXRjaGVycy5cbiAgICAgICAgICAgICAgICBzZWxmLndhdGNoZXJzW2Z1bGxEb3ROb3RhdGlvbktleV0uZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjayh0YXJnZXRba2V5XSkpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmlzb25EYXRhW3BhcnRdO1xuICAgICAgICAgICAgfSwgc2VsZi5nZXRVbm9ic2VydmVkRGF0YSgpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSAvLyBEb24ndCByZWFjdCB0byBkYXRhIGNoYW5nZXMgZm9yIGNhc2VzIGxpa2UgdGhlIGB4LWNyZWF0ZWRgIGhvb2suXG5cblxuICAgICAgICBpZiAoc2VsZi5wYXVzZVJlYWN0aXZpdHkpIHJldHVybjtcbiAgICAgICAgdXBkYXRlRG9tKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB3YWxrQW5kU2tpcE5lc3RlZENvbXBvbmVudHMoZWwsIGNhbGxiYWNrLCBpbml0aWFsaXplQ29tcG9uZW50Q2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuICAgICAgd2FsayhlbCwgZWwgPT4ge1xuICAgICAgICAvLyBXZSd2ZSBoaXQgYSBjb21wb25lbnQuXG4gICAgICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ3gtZGF0YScpKSB7XG4gICAgICAgICAgLy8gSWYgaXQncyBub3QgdGhlIGN1cnJlbnQgb25lLlxuICAgICAgICAgIGlmICghZWwuaXNTYW1lTm9kZSh0aGlzLiRlbCkpIHtcbiAgICAgICAgICAgIC8vIEluaXRpYWxpemUgaXQgaWYgaXQncyBub3QuXG4gICAgICAgICAgICBpZiAoIWVsLl9feCkgaW5pdGlhbGl6ZUNvbXBvbmVudENhbGxiYWNrKGVsKTsgLy8gTm93IHdlJ2xsIGxldCB0aGF0IHN1Yi1jb21wb25lbnQgZGVhbCB3aXRoIGl0c2VsZi5cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlbCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplRWxlbWVudHMocm9vdEVsLCBleHRyYVZhcnMgPSAoKSA9PiB7fSkge1xuICAgICAgdGhpcy53YWxrQW5kU2tpcE5lc3RlZENvbXBvbmVudHMocm9vdEVsLCBlbCA9PiB7XG4gICAgICAgIC8vIERvbid0IHRvdWNoIHNwYXducyBmcm9tIGZvciBsb29wXG4gICAgICAgIGlmIChlbC5fX3hfZm9yX2tleSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7IC8vIERvbid0IHRvdWNoIHNwYXducyBmcm9tIGlmIGRpcmVjdGl2ZXNcblxuICAgICAgICBpZiAoZWwuX194X2luc2VydGVkX21lICE9PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplRWxlbWVudChlbCwgZXh0cmFWYXJzKTtcbiAgICAgIH0sIGVsID0+IHtcbiAgICAgICAgZWwuX194ID0gbmV3IENvbXBvbmVudChlbCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZXhlY3V0ZUFuZENsZWFyUmVtYWluaW5nU2hvd0RpcmVjdGl2ZVN0YWNrKCk7XG4gICAgICB0aGlzLmV4ZWN1dGVBbmRDbGVhck5leHRUaWNrU3RhY2socm9vdEVsKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplRWxlbWVudChlbCwgZXh0cmFWYXJzKSB7XG4gICAgICAvLyBUbyBzdXBwb3J0IGNsYXNzIGF0dHJpYnV0ZSBtZXJnaW5nLCB3ZSBoYXZlIHRvIGtub3cgd2hhdCB0aGUgZWxlbWVudCdzXG4gICAgICAvLyBvcmlnaW5hbCBjbGFzcyBhdHRyaWJ1dGUgbG9va2VkIGxpa2UgZm9yIHJlZmVyZW5jZS5cbiAgICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2NsYXNzJykgJiYgZ2V0WEF0dHJzKGVsKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGVsLl9feF9vcmlnaW5hbF9jbGFzc2VzID0gZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KCcgJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVnaXN0ZXJMaXN0ZW5lcnMoZWwsIGV4dHJhVmFycyk7XG4gICAgICB0aGlzLnJlc29sdmVCb3VuZEF0dHJpYnV0ZXMoZWwsIHRydWUsIGV4dHJhVmFycyk7XG4gICAgfVxuXG4gICAgdXBkYXRlRWxlbWVudHMocm9vdEVsLCBleHRyYVZhcnMgPSAoKSA9PiB7fSkge1xuICAgICAgdGhpcy53YWxrQW5kU2tpcE5lc3RlZENvbXBvbmVudHMocm9vdEVsLCBlbCA9PiB7XG4gICAgICAgIC8vIERvbid0IHRvdWNoIHNwYXducyBmcm9tIGZvciBsb29wIChhbmQgY2hlY2sgaWYgdGhlIHJvb3QgaXMgYWN0dWFsbHkgYSBmb3IgbG9vcCBpbiBhIHBhcmVudCwgZG9uJ3Qgc2tpcCBpdC4pXG4gICAgICAgIGlmIChlbC5fX3hfZm9yX2tleSAhPT0gdW5kZWZpbmVkICYmICFlbC5pc1NhbWVOb2RlKHRoaXMuJGVsKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLnVwZGF0ZUVsZW1lbnQoZWwsIGV4dHJhVmFycyk7XG4gICAgICB9LCBlbCA9PiB7XG4gICAgICAgIGVsLl9feCA9IG5ldyBDb21wb25lbnQoZWwpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmV4ZWN1dGVBbmRDbGVhclJlbWFpbmluZ1Nob3dEaXJlY3RpdmVTdGFjaygpO1xuICAgICAgdGhpcy5leGVjdXRlQW5kQ2xlYXJOZXh0VGlja1N0YWNrKHJvb3RFbCk7XG4gICAgfVxuXG4gICAgZXhlY3V0ZUFuZENsZWFyTmV4dFRpY2tTdGFjayhlbCkge1xuICAgICAgLy8gU2tpcCBzcGF3bnMgZnJvbSBhbHBpbmUgZGlyZWN0aXZlc1xuICAgICAgaWYgKGVsID09PSB0aGlzLiRlbCkge1xuICAgICAgICAvLyBXYWxrIHRocm91Z2ggdGhlICRuZXh0VGljayBzdGFjayBhbmQgY2xlYXIgaXQgYXMgd2UgZ28uXG4gICAgICAgIHdoaWxlICh0aGlzLm5leHRUaWNrU3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMubmV4dFRpY2tTdGFjay5zaGlmdCgpKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBleGVjdXRlQW5kQ2xlYXJSZW1haW5pbmdTaG93RGlyZWN0aXZlU3RhY2soKSB7XG4gICAgICAvLyBUaGUgZ29hbCBoZXJlIGlzIHRvIHN0YXJ0IGFsbCB0aGUgeC1zaG93IHRyYW5zaXRpb25zXG4gICAgICAvLyBhbmQgYnVpbGQgYSBuZXN0ZWQgcHJvbWlzZSBjaGFpbiBzbyB0aGF0IGVsZW1lbnRzXG4gICAgICAvLyBvbmx5IGhpZGUgd2hlbiB0aGUgY2hpbGRyZW4gYXJlIGZpbmlzaGVkIGhpZGluZy5cbiAgICAgIHRoaXMuc2hvd0RpcmVjdGl2ZVN0YWNrLnJldmVyc2UoKS5tYXAodGhpbmcgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgdGhpbmcoZmluaXNoID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoZmluaXNoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KS5yZWR1Y2UoKG5lc3RlZFByb21pc2UsIHByb21pc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIG5lc3RlZFByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihmaW5pc2ggPT4gZmluaXNoKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIFByb21pc2UucmVzb2x2ZSgoKSA9PiB7fSkpOyAvLyBXZSd2ZSBwcm9jZXNzZWQgdGhlIGhhbmRsZXIgc3RhY2suIGxldCdzIGNsZWFyIGl0LlxuXG4gICAgICB0aGlzLnNob3dEaXJlY3RpdmVTdGFjayA9IFtdO1xuICAgICAgdGhpcy5zaG93RGlyZWN0aXZlTGFzdEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdXBkYXRlRWxlbWVudChlbCwgZXh0cmFWYXJzKSB7XG4gICAgICB0aGlzLnJlc29sdmVCb3VuZEF0dHJpYnV0ZXMoZWwsIGZhbHNlLCBleHRyYVZhcnMpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyTGlzdGVuZXJzKGVsLCBleHRyYVZhcnMpIHtcbiAgICAgIGdldFhBdHRycyhlbCkuZm9yRWFjaCgoe1xuICAgICAgICB0eXBlLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgbW9kaWZpZXJzLFxuICAgICAgICBleHByZXNzaW9uXG4gICAgICB9KSA9PiB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgJ29uJzpcbiAgICAgICAgICAgIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgZWwsIHZhbHVlLCBtb2RpZmllcnMsIGV4cHJlc3Npb24sIGV4dHJhVmFycyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ21vZGVsJzpcbiAgICAgICAgICAgIHJlZ2lzdGVyTW9kZWxMaXN0ZW5lcih0aGlzLCBlbCwgbW9kaWZpZXJzLCBleHByZXNzaW9uLCBleHRyYVZhcnMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc29sdmVCb3VuZEF0dHJpYnV0ZXMoZWwsIGluaXRpYWxVcGRhdGUgPSBmYWxzZSwgZXh0cmFWYXJzKSB7XG4gICAgICBsZXQgYXR0cnMgPSBnZXRYQXR0cnMoZWwpO1xuXG4gICAgICBpZiAoZWwudHlwZSAhPT0gdW5kZWZpbmVkICYmIGVsLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUncyBhbiB4LW1vZGVsIG9uIGEgcmFkaW8gaW5wdXQsIG1vdmUgaXQgdG8gZW5kIG9mIGF0dHJpYnV0ZSBsaXN0XG4gICAgICAgIC8vIHRvIGVuc3VyZSB0aGF0IHgtYmluZDp2YWx1ZSAoaWYgcHJlc2VudCkgaXMgcHJvY2Vzc2VkIGZpcnN0LlxuICAgICAgICBjb25zdCBtb2RlbElkeCA9IGF0dHJzLmZpbmRJbmRleChhdHRyID0+IGF0dHIudHlwZSA9PT0gJ21vZGVsJyk7XG5cbiAgICAgICAgaWYgKG1vZGVsSWR4ID4gLTEpIHtcbiAgICAgICAgICBhdHRycy5wdXNoKGF0dHJzLnNwbGljZShtb2RlbElkeCwgMSlbMF0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGF0dHJzLmZvckVhY2goKHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG1vZGlmaWVycyxcbiAgICAgICAgZXhwcmVzc2lvblxuICAgICAgfSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlICdtb2RlbCc6XG4gICAgICAgICAgICBoYW5kbGVBdHRyaWJ1dGVCaW5kaW5nRGlyZWN0aXZlKHRoaXMsIGVsLCAndmFsdWUnLCBleHByZXNzaW9uLCBleHRyYVZhcnMsIHR5cGUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdiaW5kJzpcbiAgICAgICAgICAgIC8vIFRoZSA6a2V5IGJpbmRpbmcgb24gYW4geC1mb3IgaXMgc3BlY2lhbCwgaWdub3JlIGl0LlxuICAgICAgICAgICAgaWYgKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RlbXBsYXRlJyAmJiB2YWx1ZSA9PT0gJ2tleScpIHJldHVybjtcbiAgICAgICAgICAgIGhhbmRsZUF0dHJpYnV0ZUJpbmRpbmdEaXJlY3RpdmUodGhpcywgZWwsIHZhbHVlLCBleHByZXNzaW9uLCBleHRyYVZhcnMsIHR5cGUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLmV2YWx1YXRlUmV0dXJuRXhwcmVzc2lvbihlbCwgZXhwcmVzc2lvbiwgZXh0cmFWYXJzKTtcbiAgICAgICAgICAgIGhhbmRsZVRleHREaXJlY3RpdmUoZWwsIG91dHB1dCwgZXhwcmVzc2lvbik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2h0bWwnOlxuICAgICAgICAgICAgaGFuZGxlSHRtbERpcmVjdGl2ZSh0aGlzLCBlbCwgZXhwcmVzc2lvbiwgZXh0cmFWYXJzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5ldmFsdWF0ZVJldHVybkV4cHJlc3Npb24oZWwsIGV4cHJlc3Npb24sIGV4dHJhVmFycyk7XG4gICAgICAgICAgICBoYW5kbGVTaG93RGlyZWN0aXZlKHRoaXMsIGVsLCBvdXRwdXQsIG1vZGlmaWVycywgaW5pdGlhbFVwZGF0ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2lmJzpcbiAgICAgICAgICAgIC8vIElmIHRoaXMgZWxlbWVudCBhbHNvIGhhcyB4LWZvciBvbiBpdCwgZG9uJ3QgcHJvY2VzcyB4LWlmLlxuICAgICAgICAgICAgLy8gV2Ugd2lsbCBsZXQgdGhlIFwieC1mb3JcIiBkaXJlY3RpdmUgaGFuZGxlIHRoZSBcImlmXCJpbmcuXG4gICAgICAgICAgICBpZiAoYXR0cnMuZmlsdGVyKGkgPT4gaS50eXBlID09PSAnZm9yJykubGVuZ3RoID4gMCkgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuZXZhbHVhdGVSZXR1cm5FeHByZXNzaW9uKGVsLCBleHByZXNzaW9uLCBleHRyYVZhcnMpO1xuICAgICAgICAgICAgaGFuZGxlSWZEaXJlY3RpdmUodGhpcywgZWwsIG91dHB1dCwgaW5pdGlhbFVwZGF0ZSwgZXh0cmFWYXJzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnZm9yJzpcbiAgICAgICAgICAgIGhhbmRsZUZvckRpcmVjdGl2ZSh0aGlzLCBlbCwgZXhwcmVzc2lvbiwgaW5pdGlhbFVwZGF0ZSwgZXh0cmFWYXJzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnY2xvYWsnOlxuICAgICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCd4LWNsb2FrJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVSZXR1cm5FeHByZXNzaW9uKGVsLCBleHByZXNzaW9uLCBleHRyYVZhcnMgPSAoKSA9PiB7fSkge1xuICAgICAgcmV0dXJuIHNhZmVyRXZhbChleHByZXNzaW9uLCB0aGlzLiRkYXRhLCBfb2JqZWN0U3ByZWFkMih7fSwgZXh0cmFWYXJzKCksIHtcbiAgICAgICAgJGRpc3BhdGNoOiB0aGlzLmdldERpc3BhdGNoRnVuY3Rpb24oZWwpXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVDb21tYW5kRXhwcmVzc2lvbihlbCwgZXhwcmVzc2lvbiwgZXh0cmFWYXJzID0gKCkgPT4ge30pIHtcbiAgICAgIHJldHVybiBzYWZlckV2YWxOb1JldHVybihleHByZXNzaW9uLCB0aGlzLiRkYXRhLCBfb2JqZWN0U3ByZWFkMih7fSwgZXh0cmFWYXJzKCksIHtcbiAgICAgICAgJGRpc3BhdGNoOiB0aGlzLmdldERpc3BhdGNoRnVuY3Rpb24oZWwpXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgZ2V0RGlzcGF0Y2hGdW5jdGlvbihlbCkge1xuICAgICAgcmV0dXJuIChldmVudCwgZGV0YWlsID0ge30pID0+IHtcbiAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIHtcbiAgICAgICAgICBkZXRhaWwsXG4gICAgICAgICAgYnViYmxlczogdHJ1ZVxuICAgICAgICB9KSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGxpc3RlbkZvck5ld0VsZW1lbnRzVG9Jbml0aWFsaXplKCkge1xuICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IHRoaXMuJGVsO1xuICAgICAgY29uc3Qgb2JzZXJ2ZXJPcHRpb25zID0ge1xuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgIH07XG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9ucyA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgLy8gRmlsdGVyIG91dCBtdXRhdGlvbnMgdHJpZ2dlcmVkIGZyb20gY2hpbGQgY29tcG9uZW50cy5cbiAgICAgICAgICBjb25zdCBjbG9zZXN0UGFyZW50Q29tcG9uZW50ID0gbXV0YXRpb25zW2ldLnRhcmdldC5jbG9zZXN0KCdbeC1kYXRhXScpO1xuICAgICAgICAgIGlmICghKGNsb3Nlc3RQYXJlbnRDb21wb25lbnQgJiYgY2xvc2VzdFBhcmVudENvbXBvbmVudC5pc1NhbWVOb2RlKHRoaXMuJGVsKSkpIHJldHVybjtcblxuICAgICAgICAgIGlmIChtdXRhdGlvbnNbaV0udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uc1tpXS5hdHRyaWJ1dGVOYW1lID09PSAneC1kYXRhJykge1xuICAgICAgICAgICAgY29uc3QgcmF3RGF0YSA9IHNhZmVyRXZhbChtdXRhdGlvbnNbaV0udGFyZ2V0LmdldEF0dHJpYnV0ZSgneC1kYXRhJyksIHt9KTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJhd0RhdGEpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuJGRhdGFba2V5XSAhPT0gcmF3RGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZGF0YVtrZXldID0gcmF3RGF0YVtrZXldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobXV0YXRpb25zW2ldLmFkZGVkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbXV0YXRpb25zW2ldLmFkZGVkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IDEgfHwgbm9kZS5fX3hfaW5zZXJ0ZWRfbWUpIHJldHVybjtcblxuICAgICAgICAgICAgICBpZiAobm9kZS5tYXRjaGVzKCdbeC1kYXRhXScpKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5fX3ggPSBuZXcgQ29tcG9uZW50KG5vZGUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUVsZW1lbnRzKG5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgb2JzZXJ2ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBnZXRSZWZzUHJveHkoKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgcmVmT2JqID0ge307XG4gICAgICAvLyBPbmUgb2YgdGhlIGdvYWxzIG9mIHRoaXMgaXMgdG8gbm90IGhvbGQgZWxlbWVudHMgaW4gbWVtb3J5LCBidXQgcmF0aGVyIHJlLWV2YWx1YXRlXG4gICAgICAvLyB0aGUgRE9NIHdoZW4gdGhlIHN5c3RlbSBuZWVkcyBzb21ldGhpbmcgZnJvbSBpdC4gVGhpcyB3YXksIHRoZSBmcmFtZXdvcmsgaXMgZmxleGlibGUgYW5kXG4gICAgICAvLyBmcmllbmRseSB0byBvdXRzaWRlIERPTSBjaGFuZ2VzIGZyb20gbGlicmFyaWVzIGxpa2UgVnVlL0xpdmV3aXJlLlxuICAgICAgLy8gRm9yIHRoaXMgcmVhc29uLCBJJ20gdXNpbmcgYW4gXCJvbi1kZW1hbmRcIiBwcm94eSB0byBmYWtlIGEgXCIkcmVmc1wiIG9iamVjdC5cblxuICAgICAgcmV0dXJuIG5ldyBQcm94eShyZWZPYmosIHtcbiAgICAgICAgZ2V0KG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICAgICAgICBpZiAocHJvcGVydHkgPT09ICckaXNBbHBpbmVQcm94eScpIHJldHVybiB0cnVlO1xuICAgICAgICAgIHZhciByZWY7IC8vIFdlIGNhbid0IGp1c3QgcXVlcnkgdGhlIERPTSBiZWNhdXNlIGl0J3MgaGFyZCB0byBmaWx0ZXIgb3V0IHJlZnMgaW5cbiAgICAgICAgICAvLyBuZXN0ZWQgY29tcG9uZW50cy5cblxuICAgICAgICAgIHNlbGYud2Fsa0FuZFNraXBOZXN0ZWRDb21wb25lbnRzKHNlbGYuJGVsLCBlbCA9PiB7XG4gICAgICAgICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCd4LXJlZicpICYmIGVsLmdldEF0dHJpYnV0ZSgneC1yZWYnKSA9PT0gcHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgcmVmID0gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHJlZjtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIGNvbnN0IEFscGluZSA9IHtcbiAgICBzdGFydDogYXN5bmMgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICBpZiAoIWlzVGVzdGluZygpKSB7XG4gICAgICAgIGF3YWl0IGRvbVJlYWR5KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGlzY292ZXJDb21wb25lbnRzKGVsID0+IHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ29tcG9uZW50KGVsKTtcbiAgICAgIH0pOyAvLyBJdCdzIGVhc2llciBhbmQgbW9yZSBwZXJmb3JtYW50IHRvIGp1c3Qgc3VwcG9ydCBUdXJib2xpbmtzIHRoYW4gbGlzdGVuXG4gICAgICAvLyB0byBNdXRhdGlvbk9ic2VydmVyIG11dGF0aW9ucyBhdCB0aGUgZG9jdW1lbnQgbGV2ZWwuXG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0dXJib2xpbmtzOmxvYWRcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLmRpc2NvdmVyVW5pbml0aWFsaXplZENvbXBvbmVudHMoZWwgPT4ge1xuICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbXBvbmVudChlbCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3RlbkZvck5ld1VuaW5pdGlhbGl6ZWRDb21wb25lbnRzQXRSdW5UaW1lKGVsID0+IHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ29tcG9uZW50KGVsKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZGlzY292ZXJDb21wb25lbnRzOiBmdW5jdGlvbiBkaXNjb3ZlckNvbXBvbmVudHMoY2FsbGJhY2spIHtcbiAgICAgIGNvbnN0IHJvb3RFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbeC1kYXRhXScpO1xuICAgICAgcm9vdEVscy5mb3JFYWNoKHJvb3RFbCA9PiB7XG4gICAgICAgIGNhbGxiYWNrKHJvb3RFbCk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRpc2NvdmVyVW5pbml0aWFsaXplZENvbXBvbmVudHM6IGZ1bmN0aW9uIGRpc2NvdmVyVW5pbml0aWFsaXplZENvbXBvbmVudHMoY2FsbGJhY2ssIGVsID0gbnVsbCkge1xuICAgICAgY29uc3Qgcm9vdEVscyA9IChlbCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbCgnW3gtZGF0YV0nKTtcbiAgICAgIEFycmF5LmZyb20ocm9vdEVscykuZmlsdGVyKGVsID0+IGVsLl9feCA9PT0gdW5kZWZpbmVkKS5mb3JFYWNoKHJvb3RFbCA9PiB7XG4gICAgICAgIGNhbGxiYWNrKHJvb3RFbCk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGxpc3RlbkZvck5ld1VuaW5pdGlhbGl6ZWRDb21wb25lbnRzQXRSdW5UaW1lOiBmdW5jdGlvbiBsaXN0ZW5Gb3JOZXdVbmluaXRpYWxpemVkQ29tcG9uZW50c0F0UnVuVGltZShjYWxsYmFjaykge1xuICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgIGNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHtcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICB9O1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChtdXRhdGlvbnNbaV0uYWRkZWROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBtdXRhdGlvbnNbaV0uYWRkZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgICAvLyBEaXNjYXJkIG5vbi1lbGVtZW50IG5vZGVzIChsaWtlIGxpbmUtYnJlYWtzKVxuICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gMSkgcmV0dXJuOyAvLyBEaXNjYXJkIGFueSBjaGFuZ2VzIGhhcHBlbmluZyB3aXRoaW4gYW4gZXhpc3RpbmcgY29tcG9uZW50LlxuICAgICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGFrZSBjYXJlIG9mIHRoZW1zZWx2ZXMuXG5cbiAgICAgICAgICAgICAgaWYgKG5vZGUucGFyZW50RWxlbWVudCAmJiBub2RlLnBhcmVudEVsZW1lbnQuY2xvc2VzdCgnW3gtZGF0YV0nKSkgcmV0dXJuO1xuICAgICAgICAgICAgICB0aGlzLmRpc2NvdmVyVW5pbml0aWFsaXplZENvbXBvbmVudHMoZWwgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbXBvbmVudChlbCk7XG4gICAgICAgICAgICAgIH0sIG5vZGUucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCBvYnNlcnZlck9wdGlvbnMpO1xuICAgIH0sXG4gICAgaW5pdGlhbGl6ZUNvbXBvbmVudDogZnVuY3Rpb24gaW5pdGlhbGl6ZUNvbXBvbmVudChlbCkge1xuICAgICAgaWYgKCFlbC5fX3gpIHtcbiAgICAgICAgZWwuX194ID0gbmV3IENvbXBvbmVudChlbCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjbG9uZTogZnVuY3Rpb24gY2xvbmUoY29tcG9uZW50LCBuZXdFbCkge1xuICAgICAgaWYgKCFuZXdFbC5fX3gpIHtcbiAgICAgICAgbmV3RWwuX194ID0gbmV3IENvbXBvbmVudChuZXdFbCwgY29tcG9uZW50LmdldFVub2JzZXJ2ZWREYXRhKCkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBpZiAoIWlzVGVzdGluZygpKSB7XG4gICAgd2luZG93LkFscGluZSA9IEFscGluZTtcblxuICAgIGlmICh3aW5kb3cuZGVmZXJMb2FkaW5nQWxwaW5lKSB7XG4gICAgICB3aW5kb3cuZGVmZXJMb2FkaW5nQWxwaW5lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LkFscGluZS5zdGFydCgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5BbHBpbmUuc3RhcnQoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gQWxwaW5lO1xuXG59KSkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgdmFyIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSAndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcih0aW1lb3V0RXJyb3JNZXNzYWdlLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29yZS9tZXJnZUNvbmZpZycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhheGlvcy5kZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gIC8vIFNldCBjb25maWcubWV0aG9kXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfVxuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIGJhc2VVUkwgd2l0aCB0aGUgcmVxdWVzdGVkVVJMLFxuICogb25seSB3aGVuIHRoZSByZXF1ZXN0ZWRVUkwgaXMgbm90IGFscmVhZHkgYW4gYWJzb2x1dGUgVVJMLlxuICogSWYgdGhlIHJlcXVlc3RVUkwgaXMgYWJzb2x1dGUsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcmVxdWVzdGVkVVJMIHVudG91Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0ZWRVUkwgQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIHRvIGNvbWJpbmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBmdWxsIHBhdGhcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCkge1xuICBpZiAoYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3RlZFVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNcbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB2YXIgdmFsdWVGcm9tQ29uZmlnMktleXMgPSBbJ3VybCcsICdtZXRob2QnLCAncGFyYW1zJywgJ2RhdGEnXTtcbiAgdmFyIG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzID0gWydoZWFkZXJzJywgJ2F1dGgnLCAncHJveHknXTtcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gW1xuICAgICdiYXNlVVJMJywgJ3VybCcsICd0cmFuc2Zvcm1SZXF1ZXN0JywgJ3RyYW5zZm9ybVJlc3BvbnNlJywgJ3BhcmFtc1NlcmlhbGl6ZXInLFxuICAgICd0aW1lb3V0JywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsXG4gICAgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJyxcbiAgICAnbWF4Q29udGVudExlbmd0aCcsICd2YWxpZGF0ZVN0YXR1cycsICdtYXhSZWRpcmVjdHMnLCAnaHR0cEFnZW50JyxcbiAgICAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsICdzb2NrZXRQYXRoJ1xuICBdO1xuXG4gIHV0aWxzLmZvckVhY2godmFsdWVGcm9tQ29uZmlnMktleXMsIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzLCBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKGRlZmF1bHRUb0NvbmZpZzJLZXlzLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGF4aW9zS2V5cyA9IHZhbHVlRnJvbUNvbmZpZzJLZXlzXG4gICAgLmNvbmNhdChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cylcbiAgICAuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKTtcblxuICB2YXIgb3RoZXJLZXlzID0gT2JqZWN0XG4gICAgLmtleXMoY29uZmlnMilcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIGZpbHRlckF4aW9zS2V5cyhrZXkpIHtcbiAgICAgIHJldHVybiBheGlvc0tleXMuaW5kZXhPZihrZXkpID09PSAtMTtcbiAgICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG90aGVyS2V5cywgZnVuY3Rpb24gb3RoZXJLZXlzRGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIGVxdWFsIHRvIG1lcmdlIHdpdGggdGhlIGRpZmZlcmVuY2UgYmVpbmcgdGhhdCBubyByZWZlcmVuY2VcbiAqIHRvIG9yaWdpbmFsIG9iamVjdHMgaXMga2VwdC5cbiAqXG4gKiBAc2VlIG1lcmdlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBkZWVwTWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZGVlcE1lcmdlOiBkZWVwTWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qKlxuICogU2hvcHBlci5qc1xuICpcbiAqIEZpcnN0IHdlIHdpbGwgbG9hZCBhbGwgb2YgdGhpcyBwcm9qZWN0J3MgSmF2YVNjcmlwdCBkZXBlbmRlbmNpZXMgd2hpY2hcbiAqIGluY2x1ZGVzIFJlYWN0IGFuZCBvdGhlciBoZWxwZXJzLiBJdCdzIGEgZ3JlYXQgc3RhcnRpbmcgcG9pbnQgd2hpbGVcbiAqIGJ1aWxkaW5nIHJvYnVzdCwgcG93ZXJmdWwgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBMYXJhdmVsLlxuICpcbiAqIEBhdXRob3IgQXJ0aHVyIE1vbm5leTxhcnRodXJAc2hvcHBlcmxhYnMuaW8+XG4gKiBAdmVyc2lvbiAyLjAuMFxuICogQHNpbmNlIEp1bHkgMjAxOVxuICovXG5cbmltcG9ydCBcImFscGluZWpzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8vIFJlbW92ZSBpdGVtcyBvbiBDUlVEXG5jb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW1vdmUtaXRlbVwiKTtcbmlmIChlbGVtZW50KSB7XG4gIGNvbnN0IHNwYW4gPSBlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdXJsXCIpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzcGFuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgYXhpb3NcbiAgICAgIC5kZWxldGUodXJsLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzcG9uc2UuZGF0YS5yZWRpcmVjdF91cmw7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSk7XG4gIH0pO1xufVxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9