webpackHotUpdate_N_E("pages/pedido-usuario",{

/***/ "./pages/pedido-usuario.js":
/*!*********************************!*\
  !*** ./pages/pedido-usuario.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ "./firebase/index.js");
/* harmony import */ var _hooks_useAdmin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useAdmin */ "./hooks/useAdmin.js");



var _this = undefined,
    _jsxFileName = "D:\\PROYECTOS\\restaurante\\pages\\pedido-usuario.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    height: 40px;\n    margin-top: 2rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    \n    li {\n        list-style: none;\n        border-bottom: 1px solid #e1e1e1;\n    }\n\n    \n    @media (min-width: 768px) {\n\n        \n\n        .body-card {\n        align-items: center;\n        text-align: center;\n        display: flex;\n        flex-direction: column;\n        justify-content:center\n        }\n    }\n\n    \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    text-align: center;\n\n    @media (min-width: 768px) {\n        margin-top: 4%;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var AlertaSInProductos = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
_c = AlertaSInProductos;
var Card = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());
_c2 = Card;
var DivSeparacion = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3());
_c3 = DivSeparacion;

var PedidoUsuario = function PedidoUsuario() {
  _s();

  //state de todos los pedidos
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      pedidos = _useState[0],
      gurdarPedidos = _useState[1]; // state de pedidos por usuario


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      pedidosUsuario = _useState2[0],
      guardarPedidosUsuario = _useState2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_firebase__WEBPACK_IMPORTED_MODULE_5__["FirebaseContext"]),
      firebase = _useContext.firebase,
      usuario = _useContext.usuario; //traer todos los pedidos


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var obtenerProductos = function obtenerProductos() {
      firebase.db.collection('totalpedidos').orderBy('fechapedido', 'desc').onSnapshot(manejarSnapshot);
    };

    obtenerProductos();
  }, []);

  function manejarSnapshot(snapshot) {
    var pedido = snapshot.docs.map(function (doc) {
      return _objectSpread({
        idtotalpedidos: doc.id
      }, doc.data());
    });
    gurdarPedidos(pedido);
  } //filtramos los pedidos del usuario


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var pedidosUsuario = function pedidosUsuario() {
      if (!usuario) {
        return;
      } else {
        var resultado = pedidos.filter(function (pedido) {
          return pedido.idcliente === usuario.uid;
        });
        guardarPedidosUsuario(resultado);
      }
    };

    pedidosUsuario();
  }, [pedidos]);
  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, pedidosUsuario.length === 0 ? __jsx(AlertaSInProductos, {
    className: "card-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 44
    }
  }, "Aun no has Hecho ningun Pedido") : null, pedidosUsuario.map(function (pedido) {
    return __jsx(Card, {
      className: "card bg-light mb-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }
    }, pedido.estadoentrega === 'entregado' ? __jsx("div", {
      className: "alert alert-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 27
      }
    }, "Pedido Entregado") : null, pedido.estadoentrega === 'pendiente' ? __jsx("div", {
      className: "alert alert-warning",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 27
      }
    }, "Pedido Pendiente") : null, pedido.estadoentrega === 'cancelado' ? __jsx("div", {
      className: "alert alert-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 27
      }
    }, "Pedido Cancelado") : null, pedido.estadoentrega === 'en proceso' ? __jsx("div", {
      className: "alert alert-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 27
      }
    }, "Pedido En Proceso") : null, __jsx("div", {
      className: "card-body body-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }
    }, __jsx("h5", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 25
      }
    }, "Referencia: ", pedido.reference, " "), __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 25
      }
    }, "Metodo de Pago: ", pedido.metodopago, " "), __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 25
      }
    }, "Tipo de Entrega: ", pedido.tipoentrega, " "), __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 25
      }
    }, "Tiempo Estimado de Entrega: ", pedido.promedioentrega, " "), pedido.estadopago === 'pendiente' ? __jsx("h6", {
      className: "card-title alert alert-warning",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 62
      }
    }, "Estado del Pago: ", pedido.estadopago, " ") : null, pedido.estadopago === 'pagado' ? __jsx("h6", {
      className: "card-title alert alert-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 59
      }
    }, "Estado del Pago: ", pedido.estadopago, " ") : null, pedido.estadopago === 'rechazado' ? __jsx("h6", {
      className: "card-title alert alert-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 62
      }
    }, "Estado del Pago: ", pedido.estadopago, " ") : null, pedido.observaciones.observacion === '' ? null : __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 75
      }
    }, "Observaciones del Pedido: ", pedido.observaciones.observacion, " "), pedido.observaciones.observacion === '' ? null : __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 75
      }
    }, "Observaciones del Pedido: ", pedido.observaciones.observacion, " "), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 25
      }
    }, __jsx("button", {
      "class": "btn btn-primary",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#ver-productos",
      "aria-expanded": "false",
      "aria-controls": "collapseExample",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 29
      }
    }, "Ver Productos")), __jsx("div", {
      "class": "collapse",
      id: "ver-productos",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 25
      }
    }, __jsx("div", {
      "class": "card card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 29
      }
    }, pedido.productos.map(function (producto) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 37
        }
      }, __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 41
        }
      }, "Nombre: ", producto.nombre), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 41
        }
      }, "Cantidad: ", producto.cantidad));
    }))), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 25
      }
    }, "Valor del Pedido: $", pedido.preciofinal)));
  }), __jsx(DivSeparacion, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }));
};

_s(PedidoUsuario, "P5uODSoXALN6YNQeWvbXf2JnjEk=");

_c4 = PedidoUsuario;
/* harmony default export */ __webpack_exports__["default"] = (PedidoUsuario);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "AlertaSInProductos");
$RefreshReg$(_c2, "Card");
$RefreshReg$(_c3, "DivSeparacion");
$RefreshReg$(_c4, "PedidoUsuario");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGVkaWRvLXVzdWFyaW8uanMiXSwibmFtZXMiOlsiQWxlcnRhU0luUHJvZHVjdG9zIiwic3R5bGVkIiwiZGl2IiwiQ2FyZCIsIkRpdlNlcGFyYWNpb24iLCJQZWRpZG9Vc3VhcmlvIiwidXNlU3RhdGUiLCJwZWRpZG9zIiwiZ3VyZGFyUGVkaWRvcyIsInBlZGlkb3NVc3VhcmlvIiwiZ3VhcmRhclBlZGlkb3NVc3VhcmlvIiwidXNlQ29udGV4dCIsIkZpcmViYXNlQ29udGV4dCIsImZpcmViYXNlIiwidXN1YXJpbyIsInVzZUVmZmVjdCIsIm9idGVuZXJQcm9kdWN0b3MiLCJkYiIsImNvbGxlY3Rpb24iLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsIm1hbmVqYXJTbmFwc2hvdCIsInNuYXBzaG90IiwicGVkaWRvIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkdG90YWxwZWRpZG9zIiwiaWQiLCJkYXRhIiwicmVzdWx0YWRvIiwiZmlsdGVyIiwiaWRjbGllbnRlIiwidWlkIiwibGVuZ3RoIiwiZXN0YWRvZW50cmVnYSIsInJlZmVyZW5jZSIsIm1ldG9kb3BhZ28iLCJ0aXBvZW50cmVnYSIsInByb21lZGlvZW50cmVnYSIsImVzdGFkb3BhZ28iLCJvYnNlcnZhY2lvbmVzIiwib2JzZXJ2YWNpb24iLCJwcm9kdWN0b3MiLCJwcm9kdWN0byIsIm5vbWJyZSIsImNhbnRpZGFkIiwicHJlY2lvZmluYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGtCQUFrQixHQUFHQyx1REFBTSxDQUFDQyxHQUFWLG1CQUF4QjtLQUFNRixrQjtBQVFOLElBQU1HLElBQUksR0FBR0YsdURBQU0sQ0FBQ0MsR0FBVixvQkFBVjtNQUFNQyxJO0FBd0JOLElBQU1DLGFBQWEsR0FBR0gsdURBQU0s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QUFBO0FBQUE7QUFBQSx1QkFBY0QsUUFBUSxDQUFDRSxRQUF2QixDQUZKLENBRDBCO0FBQUEsS0FBN0IsQ0FETCxDQURKLENBeEJKLEVBc0NJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQXdCdkIsTUFBTSxDQUFDd0IsV0FBL0IsQ0F0Q0osQ0F2QkosQ0FGc0I7QUFBQSxHQUF6QixDQU5MLEVBMkVJLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0VKLENBREo7QUFtRkgsQ0FySUQ7O0dBQU0xQyxhOztNQUFBQSxhO0FBdUlTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZWRpZG8tdXN1YXJpby41OTZkNTFlOTI5YzFkMDc5NmYxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IHsgRmlyZWJhc2VDb250ZXh0IH0gZnJvbSAnLi4vZmlyZWJhc2UnXHJcbmltcG9ydCB1c2VBZG1pbiBmcm9tICcuLi9ob29rcy91c2VBZG1pbidcclxuXHJcbmNvbnN0IEFsZXJ0YVNJblByb2R1Y3RvcyA9IHN0eWxlZC5kaXZgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxyXG4gICAgXHJcbiAgICBsaSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLmJvZHktY2FyZCB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbmBcclxuXHJcbmNvbnN0IERpdlNlcGFyYWNpb24gPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuYFxyXG5cclxuY29uc3QgUGVkaWRvVXN1YXJpbyA9ICgpID0+IHtcclxuXHJcbiAgICAvL3N0YXRlIGRlIHRvZG9zIGxvcyBwZWRpZG9zXHJcbiAgICBjb25zdCBbcGVkaWRvcywgZ3VyZGFyUGVkaWRvc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICAvLyBzdGF0ZSBkZSBwZWRpZG9zIHBvciB1c3VhcmlvXHJcbiAgICBjb25zdCBbcGVkaWRvc1VzdWFyaW8sIGd1YXJkYXJQZWRpZG9zVXN1YXJpb10gPSB1c2VTdGF0ZShbXSlcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHsgZmlyZWJhc2UsIHVzdWFyaW8gfSA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KVxyXG5cclxuICAgIC8vdHJhZXIgdG9kb3MgbG9zIHBlZGlkb3NcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2J0ZW5lclByb2R1Y3RvcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbigndG90YWxwZWRpZG9zJykub3JkZXJCeSgnZmVjaGFwZWRpZG8nLCAnZGVzYycpLm9uU25hcHNob3QobWFuZWphclNuYXBzaG90KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2J0ZW5lclByb2R1Y3RvcygpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBmdW5jdGlvbiBtYW5lamFyU25hcHNob3Qoc25hcHNob3QpIHtcclxuICAgICAgICBjb25zdCBwZWRpZG8gPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaWR0b3RhbHBlZGlkb3M6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZ3VyZGFyUGVkaWRvcyhwZWRpZG8pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vZmlsdHJhbW9zIGxvcyBwZWRpZG9zIGRlbCB1c3VhcmlvXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBlZGlkb3NVc3VhcmlvID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCF1c3VhcmlvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IHBlZGlkb3MuZmlsdGVyKHBlZGlkbyA9PiBwZWRpZG8uaWRjbGllbnRlID09PSB1c3VhcmlvLnVpZClcclxuXHJcbiAgICAgICAgICAgICAgICBndWFyZGFyUGVkaWRvc1VzdWFyaW8ocmVzdWx0YWRvKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGVkaWRvc1VzdWFyaW8oKVxyXG4gICAgfSwgW3BlZGlkb3NdKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHtwZWRpZG9zVXN1YXJpby5sZW5ndGggPT09IDAgPyA8QWxlcnRhU0luUHJvZHVjdG9zIGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+QXVuIG5vIGhhcyBIZWNobyBuaW5ndW4gUGVkaWRvPC9BbGVydGFTSW5Qcm9kdWN0b3M+IDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgIHtwZWRpZG9zVXN1YXJpby5tYXAocGVkaWRvID0+IChcclxuXHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJjYXJkIGJnLWxpZ2h0IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLmVzdGFkb2VudHJlZ2EgPT09ICdlbnRyZWdhZG8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCIgPlBlZGlkbyBFbnRyZWdhZG88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLmVzdGFkb2VudHJlZ2EgPT09ICdwZW5kaWVudGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC13YXJuaW5nXCIgPlBlZGlkbyBQZW5kaWVudGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLmVzdGFkb2VudHJlZ2EgPT09ICdjYW5jZWxhZG8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiA+UGVkaWRvIENhbmNlbGFkbzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtwZWRpZG8uZXN0YWRvZW50cmVnYSA9PT0gJ2VuIHByb2Nlc28nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1wcmltYXJ5XCIgPlBlZGlkbyBFbiBQcm9jZXNvPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBib2R5LWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5SZWZlcmVuY2lhOiB7cGVkaWRvLnJlZmVyZW5jZX0gPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5NZXRvZG8gZGUgUGFnbzoge3BlZGlkby5tZXRvZG9wYWdvfSA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlRpcG8gZGUgRW50cmVnYToge3BlZGlkby50aXBvZW50cmVnYX0gPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5UaWVtcG8gRXN0aW1hZG8gZGUgRW50cmVnYToge3BlZGlkby5wcm9tZWRpb2VudHJlZ2F9IDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBlc3RhZG8gZGVsIHBhZ28gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8uZXN0YWRvcGFnbyA9PT0gJ3BlbmRpZW50ZScgPyA8aDYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBhbGVydCBhbGVydC13YXJuaW5nXCI+RXN0YWRvIGRlbCBQYWdvOiB7cGVkaWRvLmVzdGFkb3BhZ299IDwvaDY+IDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8uZXN0YWRvcGFnbyA9PT0gJ3BhZ2FkbycgPyA8aDYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBhbGVydCBhbGVydC1pbmZvXCI+RXN0YWRvIGRlbCBQYWdvOiB7cGVkaWRvLmVzdGFkb3BhZ299IDwvaDY+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8uZXN0YWRvcGFnbyA9PT0gJ3JlY2hhemFkbycgPyA8aDYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBhbGVydCBhbGVydC1kYW5nZXJcIj5Fc3RhZG8gZGVsIFBhZ286IHtwZWRpZG8uZXN0YWRvcGFnb30gPC9oNj4gOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+RXN0YWRvIGRlIGxhIGVudHJlZ2E6IHtwZWRpZG8uZXN0YWRvZW50cmVnYX0gPC9oNj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8ub2JzZXJ2YWNpb25lcy5vYnNlcnZhY2lvbiA9PT0gJycgPyBudWxsIDogPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5PYnNlcnZhY2lvbmVzIGRlbCBQZWRpZG86IHtwZWRpZG8ub2JzZXJ2YWNpb25lcy5vYnNlcnZhY2lvbn0gPC9oNj59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLm9ic2VydmFjaW9uZXMub2JzZXJ2YWNpb24gPT09ICcnID8gbnVsbCA6IDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+T2JzZXJ2YWNpb25lcyBkZWwgUGVkaWRvOiB7cGVkaWRvLm9ic2VydmFjaW9uZXMub2JzZXJ2YWNpb259IDwvaDY+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjdmVyLXByb2R1Y3Rvc1wiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZUV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXIgUHJvZHVjdG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlXCIgaWQ9XCJ2ZXItcHJvZHVjdG9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLnByb2R1Y3Rvcy5tYXAocHJvZHVjdG8gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ob21icmU6IHtwcm9kdWN0by5ub21icmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2FudGlkYWQ6IHtwcm9kdWN0by5jYW50aWRhZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+VmFsb3IgZGVsIFBlZGlkbzogJHtwZWRpZG8ucHJlY2lvZmluYWx9PC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgPERpdlNlcGFyYWNpb24+XHJcblxyXG4gICAgICAgICAgICA8L0RpdlNlcGFyYWNpb24+XHJcblxyXG5cclxuICAgICAgICA8L0xheW91dCA+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZWRpZG9Vc3VhcmlvOyJdLCJzb3VyY2VSb290IjoiIn0=