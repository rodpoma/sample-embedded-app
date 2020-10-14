webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ResourceList */ "./components/ResourceList.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      open: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSelection", function (resources) {
      var idsFromResources = resources.selection.map(function (product) {
        return product.id;
      });

      _this.setState({
        open: false
      });

      store.set("ids", idsFromResources);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Page"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__["TitleBar"], {
        title: "Sample App",
        primaryAction: {
          content: "Select products",
          onAction: function onAction() {
            return _this2.setState({
              open: true
            });
          }
        }
      }), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__["ResourcePicker"], {
        resourceType: "Product",
        showVariants: false,
        open: this.state.open,
        onSelection: function onSelection(resources) {
          return _this2.handleSelection(resources);
        },
        onCancel: function onCancel() {
          return _this2.setState({
            open: false
          });
        }
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["EmptyState"], {
        heading: "Select products to start",
        action: {
          content: "Select products",
          onAction: function onAction() {
            return _this2.setState({
              open: true
            });
          }
        },
        image: img
      }, __jsx("p", null, "Select products and change their price temporarily"))), __jsx(_components_ResourceList__WEBPACK_IMPORTED_MODULE_10__["default"], null));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW1nIiwiSW5kZXgiLCJvcGVuIiwicmVzb3VyY2VzIiwiaWRzRnJvbVJlc291cmNlcyIsInNlbGVjdGlvbiIsIm1hcCIsInByb2R1Y3QiLCJpZCIsInNldFN0YXRlIiwic3RvcmUiLCJzZXQiLCJjb250ZW50Iiwib25BY3Rpb24iLCJzdGF0ZSIsImhhbmRsZVNlbGVjdGlvbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLEdBQUcsR0FBRyxtRUFBWjs7SUFFTUMsSzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUFDQyxVQUFJLEVBQUU7QUFBUCxLOzswTkFrQ1UsVUFBQUMsU0FBUyxFQUFJO0FBQzdCLFVBQU1DLGdCQUFnQixHQUFHRCxTQUFTLENBQUNFLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUFDLE9BQU87QUFBQSxlQUFJQSxPQUFPLENBQUNDLEVBQVo7QUFBQSxPQUEvQixDQUF6Qjs7QUFDQSxZQUFLQyxRQUFMLENBQWM7QUFBQ1AsWUFBSSxFQUFFO0FBQVAsT0FBZDs7QUFDQVEsV0FBSyxDQUFDQyxHQUFOLENBQVUsS0FBVixFQUFpQlAsZ0JBQWpCO0FBQ0QsSzs7Ozs7Ozs2QkFyQ1E7QUFBQTs7QUFDUCxhQUNFLE1BQUMscURBQUQsUUFDRSxNQUFDLGtFQUFEO0FBQ0UsYUFBSyxFQUFDLFlBRFI7QUFFRSxxQkFBYSxFQUFFO0FBQ2JRLGlCQUFPLEVBQUUsaUJBREk7QUFFYkMsa0JBQVEsRUFBRTtBQUFBLG1CQUFNLE1BQUksQ0FBQ0osUUFBTCxDQUFjO0FBQUNQLGtCQUFJLEVBQUU7QUFBUCxhQUFkLENBQU47QUFBQTtBQUZHO0FBRmpCLFFBREYsRUFRRSxNQUFDLHdFQUFEO0FBQ0Usb0JBQVksRUFBQyxTQURmO0FBRUUsb0JBQVksRUFBRSxLQUZoQjtBQUdFLFlBQUksRUFBRSxLQUFLWSxLQUFMLENBQVdaLElBSG5CO0FBSUUsbUJBQVcsRUFBRSxxQkFBQUMsU0FBUztBQUFBLGlCQUFJLE1BQUksQ0FBQ1ksZUFBTCxDQUFxQlosU0FBckIsQ0FBSjtBQUFBLFNBSnhCO0FBS0UsZ0JBQVEsRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ00sUUFBTCxDQUFjO0FBQUNQLGdCQUFJLEVBQUU7QUFBUCxXQUFkLENBQU47QUFBQTtBQUxaLFFBUkYsRUFlRSxNQUFDLHVEQUFELFFBQ0UsTUFBQywyREFBRDtBQUNFLGVBQU8sRUFBQywwQkFEVjtBQUVFLGNBQU0sRUFBRTtBQUNOVSxpQkFBTyxFQUFFLGlCQURIO0FBRU5DLGtCQUFRLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUNKLFFBQUwsQ0FBYztBQUFDUCxrQkFBSSxFQUFFO0FBQVAsYUFBZCxDQUFOO0FBQUE7QUFGSixTQUZWO0FBTUUsYUFBSyxFQUFFRjtBQU5ULFNBUUUsc0VBUkYsQ0FERixDQWZGLEVBMkJFLE1BQUMsaUVBQUQsT0EzQkYsQ0FERjtBQStCRDs7OztFQWxDaUJnQiw0Q0FBSyxDQUFDQyxTOztBQTBDWGhCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMwOGJlNzJmMmRmZjgwNDczYzBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VtcHR5U3RhdGUsIExheW91dCwgUGFnZX0gZnJvbSBcIkBzaG9waWZ5L3BvbGFyaXNcIjtcclxuaW1wb3J0IHtSZXNvdXJjZVBpY2tlciwgVGl0bGVCYXJ9IGZyb20gXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI7XHJcblxyXG5pbXBvcnQgUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIGZyb20gXCIuLi9jb21wb25lbnRzL1Jlc291cmNlTGlzdFwiO1xyXG5cclxuY29uc3QgaW1nID0gXCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDc1Ny85OTU1L2ZpbGVzL2VtcHR5LXN0YXRlLnN2Z1wiO1xyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRlID0ge29wZW46IGZhbHNlfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UGFnZT5cclxuICAgICAgICA8VGl0bGVCYXJcclxuICAgICAgICAgIHRpdGxlPVwiU2FtcGxlIEFwcFwiXHJcbiAgICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiU2VsZWN0IHByb2R1Y3RzXCIsXHJcbiAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSksXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFJlc291cmNlUGlja2VyXHJcbiAgICAgICAgICByZXNvdXJjZVR5cGU9XCJQcm9kdWN0XCJcclxuICAgICAgICAgIHNob3dWYXJpYW50cz17ZmFsc2V9XHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XHJcbiAgICAgICAgICBvblNlbGVjdGlvbj17cmVzb3VyY2VzID0+IHRoaXMuaGFuZGxlU2VsZWN0aW9uKHJlc291cmNlcyl9XHJcbiAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8RW1wdHlTdGF0ZVxyXG4gICAgICAgICAgICBoZWFkaW5nPVwiU2VsZWN0IHByb2R1Y3RzIHRvIHN0YXJ0XCJcclxuICAgICAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJTZWxlY3QgcHJvZHVjdHNcIixcclxuICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBpbWFnZT17aW1nfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD5TZWxlY3QgcHJvZHVjdHMgYW5kIGNoYW5nZSB0aGVpciBwcmljZSB0ZW1wb3JhcmlseTwvcD5cclxuICAgICAgICAgIDwvRW1wdHlTdGF0ZT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8UmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIC8+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICk7XHJcbiAgfVxyXG4gIGhhbmRsZVNlbGVjdGlvbiA9IHJlc291cmNlcyA9PiB7XHJcbiAgICBjb25zdCBpZHNGcm9tUmVzb3VyY2VzID0gcmVzb3VyY2VzLnNlbGVjdGlvbi5tYXAocHJvZHVjdCA9PiBwcm9kdWN0LmlkKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XHJcbiAgICBzdG9yZS5zZXQoXCJpZHNcIiwgaWRzRnJvbVJlc291cmNlcyk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=