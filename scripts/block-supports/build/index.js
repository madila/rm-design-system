/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/interactivity.ts":
/*!******************************!*\
  !*** ./src/interactivity.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


/**
 * Adds border support to Column, Heading, and Paragraph blocks.
 *
 * @param {Object} settings - The original block settings.
 * @param {string} name - The name of the block.
 *
 * @returns {Object} The modified block settings with added border support.
 */
function addInteractivitySupport(settings, name) {
  // Bail early if the block does not have supports.
  if (!settings?.supports) {
    return settings;
  }

  // Only apply to Column, Heading, and Paragraph blocks.
  if (name === 'core/audio') {
    return Object.assign({}, settings, {
      supports: Object.assign(settings.supports, {
        interactivity: true
      })
    });
  }
  return settings;
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'design-system/add-interactivity-support', addInteractivitySupport);

/***/ }),

/***/ "./src/shadow.ts":
/*!***********************!*\
  !*** ./src/shadow.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


/**
 * Adds border support to Column, Heading, and Paragraph blocks.
 *
 * @param {Object} settings - The original block settings.
 * @param {string} name - The name of the block.
 *
 * @returns {Object} The modified block settings with added border support.
 */
function addShadowSupport(settings, name) {
  // Bail early if the block does not have supports.
  if (!settings?.supports) {
    return settings;
  }

  // Only apply to Column, Heading, and Paragraph blocks.
  if (name === 'core/group') {
    return Object.assign({}, settings, {
      supports: Object.assign(settings.supports, {
        shadow: true
      })
    });
  }
  return settings;
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'design-system/add-shadow-support', addShadowSupport);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/add-alternative-position/enableOn.js":
/*!**************************************************!*\
  !*** ./src/add-alternative-position/enableOn.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enableOn: () => (/* binding */ enableOn),
/* harmony export */   setAnimationAttribute: () => (/* binding */ setAnimationAttribute)
/* harmony export */ });
const enableOn = ['core/group'];
const setAnimationAttribute = (settings, name) => {
  // Do nothing if it's another block than our defined ones.
  if (!enableOn.includes(name)) {
    return settings;
  }
  return Object.assign({}, settings, {
    supports: Object.assign({}, settings.supports, {
      position: {
        fixed: true,
        absolute: true,
        sticky: true
      }
    })
  });
};

/***/ }),

/***/ "./src/add-alternative-position/index.js":
/*!***********************************************!*\
  !*** ./src/add-alternative-position/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setAnimationAttribute: () => (/* binding */ setAnimationAttribute)
/* harmony export */ });
/* harmony import */ var _enableOn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enableOn.js */ "./src/add-alternative-position/enableOn.js");

const setAnimationAttribute = (settings, name) => {
  // Do nothing if it's another block than our defined ones.
  if (!_enableOn_js__WEBPACK_IMPORTED_MODULE_0__.enableOn.includes(name)) {
    return settings;
  }
  return Object.assign({}, settings, {
    attributes: Object.assign({}, settings.attributes, {
      dataAnimation: {
        type: 'string',
        source: 'attribute',
        selector: '[data-animation]',
        attribute: 'data-animation'
      },
      dataInvisible: {
        type: 'string',
        source: 'attribute',
        selector: '[data-animation]',
        attribute: 'data-invisible'
      }
    })
  });
};

/***/ }),

/***/ "./src/add-animation-controls/addAnimationAttribute.js":
/*!*************************************************************!*\
  !*** ./src/add-animation-controls/addAnimationAttribute.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _enableOn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enableOn.js */ "./src/add-animation-controls/enableOn.js");


(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'rm/animation-attribute', _enableOn_js__WEBPACK_IMPORTED_MODULE_1__.setAnimationAttribute);

/***/ }),

/***/ "./src/add-animation-controls/addAnimationControls.js":
/*!************************************************************!*\
  !*** ./src/add-animation-controls/addAnimationControls.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _enableOn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enableOn.js */ "./src/add-animation-controls/enableOn.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _animations_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animations.js */ "./src/add-animation-controls/animations.js");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */








const withAnimationControls = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    // If current block is not allowed
    if (!_enableOn_js__WEBPACK_IMPORTED_MODULE_3__.enableOn.includes(props.name)) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      });
    }
    const {
      attributes,
      setAttributes
    } = props;
    const {
      dataAnimation
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, {
      group: "position"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      __nextHasNoMarginBottom: true,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Animation'),
      style: {
        minHeight: '40px',
        padding: '0px 34px 0px 16px'
      },
      options: _animations_js__WEBPACK_IMPORTED_MODULE_8__.animations,
      value: dataAnimation,
      onChange: value => setAttributes({
        dataAnimation: value
      })
    })));
  };
}, 'withAnimationControls');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('editor.BlockEdit', 'rm/with-animation-controls', withAnimationControls);

/***/ }),

/***/ "./src/add-animation-controls/addAnimationProp.js":
/*!********************************************************!*\
  !*** ./src/add-animation-controls/addAnimationProp.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _enableOn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enableOn.js */ "./src/add-animation-controls/enableOn.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");




const withAnimationProp = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.createHigherOrderComponent)(Block => {
  return props => {
    // If current block is not allowed
    if (!_enableOn_js__WEBPACK_IMPORTED_MODULE_2__.enableOn.includes(props.name)) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Block, {
        ...props
      });
    }
    const {
      attributes
    } = props;
    const {
      dataAnimation
    } = attributes;
    if (dataAnimation && dataAnimation.length) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Block, {
        ...props,
        "data-editor-animation": dataAnimation
      });
    } else {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Block, {
        ...props
      });
    }
  };
}, 'withAnimationProp');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockListBlock', 'rm/with-animation-prop', withAnimationProp);

/***/ }),

/***/ "./src/add-animation-controls/addAnimationSave.js":
/*!********************************************************!*\
  !*** ./src/add-animation-controls/addAnimationSave.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _enableOn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enableOn.js */ "./src/add-animation-controls/enableOn.js");


const saveAnimationAttribute = (extraProps, blockType, attributes) => {
  // Do nothing if it's another block than our defined ones.
  if (_enableOn_js__WEBPACK_IMPORTED_MODULE_1__.enableOn.includes(blockType.name)) {
    const {
      dataAnimation
    } = attributes;
    if (dataAnimation && dataAnimation.length) {
      extraProps['data-animation'] = dataAnimation;
      extraProps['data-invisible'] = 'true';
    }
  }
  return extraProps;
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.getSaveContent.extraProps', 'rm/save-animation-attribute', saveAnimationAttribute);

/***/ }),

/***/ "./src/add-animation-controls/animations.js":
/*!**************************************************!*\
  !*** ./src/add-animation-controls/animations.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animations: () => (/* binding */ animations)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

const animations = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default (None)'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fade In'),
  value: 'fade-in'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slide in upwards'),
  value: 'slide-up'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slide in downwards'),
  value: 'slide-down'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slide in eastwards'),
  value: 'slide-left'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slide in westwards'),
  value: 'slide-right'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Scale up'),
  value: 'scale-up'
}];

/***/ }),

/***/ "./src/add-animation-controls/enableOn.js":
/*!************************************************!*\
  !*** ./src/add-animation-controls/enableOn.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enableOn: () => (/* binding */ enableOn),
/* harmony export */   setAnimationAttribute: () => (/* binding */ setAnimationAttribute)
/* harmony export */ });
const enableOn = ['core/group', 'core/button', 'core/cover', 'core/column', 'core/heading', 'core/paragraph', 'frames/frame'];
const setAnimationAttribute = (settings, name) => {
  // Do nothing if it's another block than our defined ones.
  if (!enableOn.includes(name)) {
    return settings;
  }
  return Object.assign({}, settings, {
    attributes: Object.assign({}, settings.attributes, {
      dataAnimation: {
        type: 'string',
        source: 'attribute',
        selector: '[data-animation]',
        attribute: 'data-animation'
      },
      dataInvisible: {
        type: 'string',
        source: 'attribute',
        selector: '[data-animation]',
        attribute: 'data-invisible'
      }
    })
  });
};

/***/ }),

/***/ "./src/add-animation-controls/index.js":
/*!*********************************************!*\
  !*** ./src/add-animation-controls/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addAnimationAttribute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addAnimationAttribute.js */ "./src/add-animation-controls/addAnimationAttribute.js");
/* harmony import */ var _addAnimationControls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addAnimationControls.js */ "./src/add-animation-controls/addAnimationControls.js");
/* harmony import */ var _addAnimationProp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addAnimationProp.js */ "./src/add-animation-controls/addAnimationProp.js");
/* harmony import */ var _addAnimationSave_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addAnimationSave.js */ "./src/add-animation-controls/addAnimationSave.js");





/***/ }),

/***/ "./src/add-motion-controls/addMotionAttributes.js":
/*!********************************************************!*\
  !*** ./src/add-motion-controls/addMotionAttributes.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _enableOn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enableOn.js */ "./src/add-motion-controls/enableOn.js");


(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'rm/motion-attributes', _enableOn_js__WEBPACK_IMPORTED_MODULE_1__.setMotionAttributes);

/***/ }),

/***/ "./src/add-motion-controls/addMotionControls.js":
/*!******************************************************!*\
  !*** ./src/add-motion-controls/addMotionControls.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _enableOn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enableOn.js */ "./src/add-motion-controls/enableOn.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */







const withMotionControls = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    // If current block is not allowed
    if (!_enableOn_js__WEBPACK_IMPORTED_MODULE_3__.enableOn.includes(props.name)) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      });
    }
    const {
      attributes,
      setAttributes
    } = props;
    const {
      dataMotionDelay
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, {
      group: "position"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.__experimentalNumberControl, {
      isShiftStepEnabled: true,
      isDragEnabled: true,
      step: 0.1,
      shiftStep: 10,
      label: 'Motion delay',
      value: dataMotionDelay,
      onChange: value => setAttributes({
        dataMotionDelay: parseFloat(value)
      })
    })));
  };
}, 'withMotionControls');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('editor.BlockEdit', 'rm/with-motion-controls', withMotionControls);

/***/ }),

/***/ "./src/add-motion-controls/addMotionProp.js":
/*!**************************************************!*\
  !*** ./src/add-motion-controls/addMotionProp.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _enableOn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enableOn.js */ "./src/add-motion-controls/enableOn.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");




const withMotionProp = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.createHigherOrderComponent)(Block => {
  return props => {
    // If current block is not allowed
    if (!_enableOn_js__WEBPACK_IMPORTED_MODULE_2__.enableOn.includes(props.name)) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Block, {
        ...props
      });
    }
    const {
      attributes
    } = props;
    const {
      dataMotionDelay
    } = attributes;
    if (dataMotionDelay) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Block, {
        ...props,
        "data-editor-motion-delay": dataMotionDelay
      });
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Block, {
      ...props
    });
  };
}, 'withMotionProp');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockListBlock', 'rm/with-motion-prop', withMotionProp);

/***/ }),

/***/ "./src/add-motion-controls/addMotionSave.js":
/*!**************************************************!*\
  !*** ./src/add-motion-controls/addMotionSave.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _enableOn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enableOn.js */ "./src/add-motion-controls/enableOn.js");


const saveMotionAttributes = (extraProps, blockType, attributes) => {
  // Do nothing if it's another block than our defined ones.
  if (_enableOn_js__WEBPACK_IMPORTED_MODULE_1__.enableOn.includes(blockType.name)) {
    const {
      dataMotionDelay
    } = attributes;
    if (dataMotionDelay) {
      extraProps.style = {
        ...extraProps.style,
        '--motion-delay': dataMotionDelay
      };
    }
  }
  return extraProps;
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.getSaveContent.extraProps', 'rm/save-motion-attributes', saveMotionAttributes);

/***/ }),

/***/ "./src/add-motion-controls/enableOn.js":
/*!*********************************************!*\
  !*** ./src/add-motion-controls/enableOn.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enableOn: () => (/* binding */ enableOn),
/* harmony export */   setMotionAttributes: () => (/* binding */ setMotionAttributes)
/* harmony export */ });
const enableOn = ['core/heading', 'core/button', 'core/group'];
const setMotionAttributes = (settings, name) => {
  // Do nothing if it's another block than our defined ones.
  if (!enableOn.includes(name)) {
    return settings;
  }
  return Object.assign({}, settings, {
    attributes: Object.assign({}, settings.attributes, {
      dataMotionDelay: {
        type: 'number'
      }
    })
  });
};

/***/ }),

/***/ "./src/add-motion-controls/index.js":
/*!******************************************!*\
  !*** ./src/add-motion-controls/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addMotionAttributes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addMotionAttributes.js */ "./src/add-motion-controls/addMotionAttributes.js");
/* harmony import */ var _addMotionControls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addMotionControls.js */ "./src/add-motion-controls/addMotionControls.js");
/* harmony import */ var _addMotionProp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addMotionProp.js */ "./src/add-motion-controls/addMotionProp.js");
/* harmony import */ var _addMotionSave_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addMotionSave.js */ "./src/add-motion-controls/addMotionSave.js");





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shadow_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shadow.ts */ "./src/shadow.ts");
/* harmony import */ var _interactivity_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactivity.ts */ "./src/interactivity.ts");
/* harmony import */ var _add_animation_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-animation-controls */ "./src/add-animation-controls/index.js");
/* harmony import */ var _add_motion_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-motion-controls */ "./src/add-motion-controls/index.js");
/* harmony import */ var _add_alternative_position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-alternative-position */ "./src/add-alternative-position/index.js");





})();

/******/ })()
;
//# sourceMappingURL=index.js.map