webpackHotUpdate_N_E("pages/nuevo-producto",{

/***/ "./pages/nuevo-producto.js":
/*!*********************************!*\
  !*** ./pages/nuevo-producto.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase/context */ "./firebase/context.js");
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_firebase_file_uploader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-firebase-file-uploader */ "./node_modules/react-firebase-file-uploader/lib/index.js");
/* harmony import */ var react_firebase_file_uploader__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_firebase_file_uploader__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hooks_useAdmin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useAdmin */ "./hooks/useAdmin.js");





var _this = undefined,
    _jsxFileName = "D:\\PROYECTOS\\restaurante\\pages\\nuevo-producto.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    height: 50rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 1rem;\n    \n    \n    form {\n        width: 90%;\n    }\n\n    @media (min-width: 768px) {\n\n        h1 {\n            margin-top: 4rem;\n        }\n\n        form {\n            padding: 2rem;\n            width: 550px;   \n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Contenido = _emotion_styled__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject());
_c = Contenido;

var NuevoProducto = function NuevoProducto() {
  _s();

  //states
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    nombre: '',
    categoria: '',
    descripcion: '',
    imagen: '',
    precio: '',
    creado: Date.now()
  }),
      nuevoProducto = _useState[0],
      guardarNuevoProducto = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    error: false,
    mensaje: ''
  }),
      alertaError = _useState2[0],
      guardarAlertaError = _useState2[1];

  var nombre = nuevoProducto.nombre,
      categoria = nuevoProducto.categoria,
      descripcion = nuevoProducto.descripcion,
      precio = nuevoProducto.precio;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      subiendo = _useState3[0],
      guardarSubiendo = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      progreso = _useState4[0],
      guardarProgreso = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      urlImagen = _useState5[0],
      guardarUrlImagen = _useState5[1]; //state de las imagenes


  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      nombreImagen = _useState6[0],
      guardarNombreImagen = _useState6[1]; //FirebaseContext


  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_firebase_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      usuario = _useContext.usuario,
      firebase = _useContext.firebase; //ocultar alerta

  /* const ocultarAlerta = () => {
      guardarAlertaError({
          error: false
        })
  } */
  //traemos el usuario admin


  var _useAdmin = Object(_hooks_useAdmin__WEBPACK_IMPORTED_MODULE_10__["default"])(),
      admin = _useAdmin.admin;

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    guardarNuevoProducto(_objectSpread(_objectSpread({}, nuevoProducto), {}, {
      imagen: urlImagen
    }));
  }, [urlImagen]);

  var crearProducto = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();

              if (!(nombre.trim().length === 0 || categoria.trim().length === 0 || descripcion.trim().length === 0 || precio === 0)) {
                _context.next = 5;
                break;
              }

              guardarAlertaError({
                error: true,
                mensaje: 'Todos los campos son requeridos'
              });
              setTimeout(function () {
                guardarAlertaError({
                  error: false,
                  mensaje: ''
                });
              }, 3000);
              return _context.abrupt("return");

            case 5:
              if (usuario) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/'));

            case 7:
              firebase.db.collection('productos').add(nuevoProducto);
              return _context.abrupt("return", next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/menu'));

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function crearProducto(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleUploadStart = function handleUploadStart() {
    guardarProgreso(0);
    guardarSubiendo(true);
  };

  var handleProgress = function handleProgress(progreso) {
    return guardarProgreso({
      progreso: progreso
    });
  };

  var handleUploadError = function handleUploadError(error) {
    guardarSubiendo(error);
    console.error(error);
  };

  var handleUploadSuccess = function handleUploadSuccess(nombre) {
    guardarProgreso(100);
    guardarSubiendo(false);
    guardarNombreImagen(nombre);
    firebase.storage.ref("productos").child(nombre).getDownloadURL().then(function (url) {
      console.log(url);
      guardarUrlImagen(url);
    });
  };

  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, admin ? __jsx(Contenido, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 21
    }
  }, "Nuevo Producto"), alertaError.error ? __jsx("div", {
    "class": "alert alert-danger",
    role: "alert",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 25
    }
  }, alertaError.mensaje) : null, __jsx("form", {
    onSubmit: crearProducto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "staticEmail",
    className: "col-sm-2 col-form-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 29
    }
  }, "Nombre"), __jsx("div", {
    className: "col-sm-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 29
    }
  }, __jsx("input", {
    type: "text",
    name: "nombre",
    className: "form-control",
    onChange: function onChange(e) {
      return guardarNuevoProducto(_objectSpread(_objectSpread({}, nuevoProducto), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.value)));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: "form-group row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "staticEmail",
    className: "col-sm-2 col-form-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 29
    }
  }, "Categoria"), __jsx("div", {
    className: "col-sm-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 29
    }
  }, __jsx("select", {
    type: "text",
    name: "categoria",
    className: "form-control",
    onChange: function onChange(e) {
      return guardarNuevoProducto(_objectSpread(_objectSpread({}, nuevoProducto), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.value)));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 33
    }
  }, __jsx("option", {
    value: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 37
    }
  }, "--Selecciona--"), __jsx("option", {
    value: "alitas",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 37
    }
  }, "Alitas"), __jsx("option", {
    value: "patacones",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 37
    }
  }, "Patacones"), __jsx("option", {
    value: "acompa\xF1antes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 37
    }
  }, "Acompa\xF1antes"), __jsx("option", {
    value: "arepas",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 37
    }
  }, "Arepas"), __jsx("option", {
    value: "salchipapas",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 37
    }
  }, "Salchipapas"), __jsx("option", {
    value: "carnes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 37
    }
  }, "Carnes"), __jsx("option", {
    value: "chuzos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 37
    }
  }, "Chuzos"), __jsx("option", {
    value: "hamburguesas",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 37
    }
  }, "hamburguesas")))), __jsx("div", {
    className: "form-group row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "inputPassword",
    className: "col-sm-2 col-form-label ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 29
    }
  }, "Descripcion"), __jsx("div", {
    className: "col-sm-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 29
    }
  }, __jsx("textarea", {
    type: "text",
    rows: "4",
    name: "descripcion",
    className: "form-control",
    onChange: function onChange(e) {
      return guardarNuevoProducto(_objectSpread(_objectSpread({}, nuevoProducto), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.value)));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: "form-group row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "staticEmail",
    className: "col-sm-2 col-form-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 29
    }
  }, "Imagen"), __jsx("div", {
    className: "col-sm-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 29
    }
  }, __jsx(react_firebase_file_uploader__WEBPACK_IMPORTED_MODULE_9___default.a, {
    accept: "image/*",
    name: "imagen"
    /* onChange={e => guardarNuevoProducto({ ...producto, [e.target.name]: e.target.value })} */
    ,
    randomizeFilename: true,
    storageRef: firebase.storage.ref('productos'),
    onUploadStart: handleUploadStart,
    onUploadError: handleUploadError,
    onUploadSuccess: handleUploadSuccess,
    onProgress: handleProgress,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: "form-group row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "staticEmail",
    className: "col-sm-2 col-form-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 29
    }
  }, "Precio"), __jsx("div", {
    className: "col-sm-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 29
    }
  }, __jsx("input", {
    type: "text",
    name: "precio",
    className: "form-control",
    onChange: function onChange(e) {
      return guardarNuevoProducto(_objectSpread(_objectSpread({}, nuevoProducto), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, parseInt(e.target.value, 10))));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 33
    }
  }))), __jsx("button", {
    type: "submit",
    className: "btn btn-primary form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 25
    }
  }, "Crear Producto"))) : __jsx(Contenido, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 19
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 30
    }
  }, "No Tienes Permiso de estar aqui...")));
};

_s(NuevoProducto, "D2HyTJ3Odf0fObdK54tIf4BWc24=", false, function () {
  return [_hooks_useAdmin__WEBPACK_IMPORTED_MODULE_10__["default"]];
});

_c2 = NuevoProducto;
/* harmony default export */ __webpack_exports__["default"] = (NuevoProducto);

var _c, _c2;

$RefreshReg$(_c, "Contenido");
$RefreshReg$(_c2, "NuevoProducto");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbnVldm8tcHJvZHVjdG8uanMiXSwibmFtZXMiOlsiQ29udGVuaWRvIiwic3R5bGVkIiwiZGl2IiwiTnVldm9Qcm9kdWN0byIsInVzZVN0YXRlIiwibm9tYnJlIiwiY2F0ZWdvcmlhIiwiZGVzY3JpcGNpb24iLCJpbWFnZW4iLCJwcmVjaW8iLCJjcmVhZG8iLCJEYXRlIiwibm93IiwibnVldm9Qcm9kdWN0byIsImd1YXJkYXJOdWV2b1Byb2R1Y3RvIiwiZXJyb3IiLCJtZW5zYWplIiwiYWxlcnRhRXJyb3IiLCJndWFyZGFyQWxlcnRhRXJyb3IiLCJzdWJpZW5kbyIsImd1YXJkYXJTdWJpZW5kbyIsInByb2dyZXNvIiwiZ3VhcmRhclByb2dyZXNvIiwidXJsSW1hZ2VuIiwiZ3VhcmRhclVybEltYWdlbiIsIm5vbWJyZUltYWdlbiIsImd1YXJkYXJOb21icmVJbWFnZW4iLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwidXN1YXJpbyIsImZpcmViYXNlIiwidXNlQWRtaW4iLCJhZG1pbiIsInVzZUVmZmVjdCIsImNyZWFyUHJvZHVjdG8iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwibGVuZ3RoIiwic2V0VGltZW91dCIsIlJvdXRlciIsInB1c2giLCJkYiIsImNvbGxlY3Rpb24iLCJhZGQiLCJoYW5kbGVVcGxvYWRTdGFydCIsImhhbmRsZVByb2dyZXNzIiwiaGFuZGxlVXBsb2FkRXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlVXBsb2FkU3VjY2VzcyIsInN0b3JhZ2UiLCJyZWYiLCJjaGlsZCIsImdldERvd25sb2FkVVJMIiwidGhlbiIsInVybCIsImxvZyIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUFYLENBeEVWLENBREo7QUE2RUgsQ0E1TEQ7O0dBQU14RCxhO1VBdUNnQjRCLHdEOzs7TUF2Q2hCNUIsYTtBQThMU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbnVldm8tcHJvZHVjdG8uMmNjOTkyZTc0MjhjNmY5YTQ4ZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmlyZWJhc2VDb250ZXh0IGZyb20gJy4uL2ZpcmViYXNlL2NvbnRleHQnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBGaWxlVXBsb2FkZXIgZnJvbSAncmVhY3QtZmlyZWJhc2UtZmlsZS11cGxvYWRlcidcclxuaW1wb3J0IHVzZUFkbWluIGZyb20gJy4uL2hvb2tzL3VzZUFkbWluJ1xyXG5cclxuXHJcbmNvbnN0IENvbnRlbmlkbyA9IHN0eWxlZC5kaXZgXHJcbiAgICBoZWlnaHQ6IDUwcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBmb3JtIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDU1MHB4OyAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgTnVldm9Qcm9kdWN0byA9ICgpID0+IHtcclxuXHJcbiAgICAvL3N0YXRlc1xyXG4gICAgY29uc3QgW251ZXZvUHJvZHVjdG8sIGd1YXJkYXJOdWV2b1Byb2R1Y3RvXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBub21icmU6ICcnLFxyXG4gICAgICAgIGNhdGVnb3JpYTogJycsXHJcbiAgICAgICAgZGVzY3JpcGNpb246ICcnLFxyXG4gICAgICAgIGltYWdlbjogJycsXHJcbiAgICAgICAgcHJlY2lvOiAnJyxcclxuICAgICAgICBjcmVhZG86IERhdGUubm93KClcclxuXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IFthbGVydGFFcnJvciwgZ3VhcmRhckFsZXJ0YUVycm9yXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgbWVuc2FqZTogJydcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgeyBub21icmUsIGNhdGVnb3JpYSwgZGVzY3JpcGNpb24sIHByZWNpbyB9ID0gbnVldm9Qcm9kdWN0b1xyXG5cclxuICAgIGNvbnN0IFtzdWJpZW5kbywgZ3VhcmRhclN1YmllbmRvXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3Byb2dyZXNvLCBndWFyZGFyUHJvZ3Jlc29dID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFt1cmxJbWFnZW4sIGd1YXJkYXJVcmxJbWFnZW5dID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgLy9zdGF0ZSBkZSBsYXMgaW1hZ2VuZXNcclxuICAgIGNvbnN0IFtub21icmVJbWFnZW4sIGd1YXJkYXJOb21icmVJbWFnZW5dID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgLy9GaXJlYmFzZUNvbnRleHRcclxuICAgIGNvbnN0IHsgdXN1YXJpbywgZmlyZWJhc2UgfSA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KVxyXG5cclxuICAgIC8vb2N1bHRhciBhbGVydGFcclxuICAgIC8qIGNvbnN0IG9jdWx0YXJBbGVydGEgPSAoKSA9PiB7XHJcbiAgICAgICAgZ3VhcmRhckFsZXJ0YUVycm9yKHtcclxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9ICovXHJcblxyXG4gICAgLy90cmFlbW9zIGVsIHVzdWFyaW8gYWRtaW5cclxuICAgIGNvbnN0IHsgYWRtaW4gfSA9IHVzZUFkbWluKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBndWFyZGFyTnVldm9Qcm9kdWN0byh7XHJcbiAgICAgICAgICAgIC4uLm51ZXZvUHJvZHVjdG8sXHJcbiAgICAgICAgICAgIGltYWdlbjogdXJsSW1hZ2VuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9LCBbdXJsSW1hZ2VuXSlcclxuXHJcbiAgICBjb25zdCBjcmVhclByb2R1Y3RvID0gYXN5bmMgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIGlmIChub21icmUudHJpbSgpLmxlbmd0aCA9PT0gMCB8fCBjYXRlZ29yaWEudHJpbSgpLmxlbmd0aCA9PT0gMCB8fCBkZXNjcmlwY2lvbi50cmltKCkubGVuZ3RoID09PSAwIHx8IHByZWNpbyA9PT0gMCkge1xyXG5cclxuICAgICAgICAgICAgZ3VhcmRhckFsZXJ0YUVycm9yKHtcclxuICAgICAgICAgICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWVuc2FqZTogJ1RvZG9zIGxvcyBjYW1wb3Mgc29uIHJlcXVlcmlkb3MnXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGd1YXJkYXJBbGVydGFFcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lbnNhamU6ICcnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LCAzMDAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdXN1YXJpbykge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3Byb2R1Y3RvcycpLmFkZChudWV2b1Byb2R1Y3RvKVxyXG5cclxuICAgICAgICByZXR1cm4gUm91dGVyLnB1c2goJy9tZW51JylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVVcGxvYWRTdGFydCA9ICgpID0+IHtcclxuICAgICAgICBndWFyZGFyUHJvZ3Jlc28oMCk7XHJcbiAgICAgICAgZ3VhcmRhclN1YmllbmRvKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVByb2dyZXNzID0gcHJvZ3Jlc28gPT4gZ3VhcmRhclByb2dyZXNvKHsgcHJvZ3Jlc28gfSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXBsb2FkRXJyb3IgPSBlcnJvciA9PiB7XHJcbiAgICAgICAgZ3VhcmRhclN1YmllbmRvKGVycm9yKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVVcGxvYWRTdWNjZXNzID0gbm9tYnJlID0+IHtcclxuICAgICAgICBndWFyZGFyUHJvZ3Jlc28oMTAwKTtcclxuICAgICAgICBndWFyZGFyU3ViaWVuZG8oZmFsc2UpO1xyXG4gICAgICAgIGd1YXJkYXJOb21icmVJbWFnZW4obm9tYnJlKVxyXG4gICAgICAgIGZpcmViYXNlXHJcbiAgICAgICAgICAgIC5zdG9yYWdlXHJcbiAgICAgICAgICAgIC5yZWYoXCJwcm9kdWN0b3NcIilcclxuICAgICAgICAgICAgLmNoaWxkKG5vbWJyZSlcclxuICAgICAgICAgICAgLmdldERvd25sb2FkVVJMKClcclxuICAgICAgICAgICAgLnRoZW4odXJsID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAgICAgICAgICAgICBndWFyZGFyVXJsSW1hZ2VuKHVybCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAge2FkbWluXHJcbiAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICA8Q29udGVuaWRvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5OdWV2byBQcm9kdWN0bzwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHthbGVydGFFcnJvci5lcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthbGVydGFFcnJvci5tZW5zYWplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtjcmVhclByb2R1Y3RvfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdGF0aWNFbWFpbFwiIGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsXCI+Tm9tYnJlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5vbWJyZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXtlID0+IGd1YXJkYXJOdWV2b1Byb2R1Y3RvKHsgLi4ubnVldm9Qcm9kdWN0bywgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdGF0aWNFbWFpbFwiIGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsXCI+Q2F0ZWdvcmlhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjYXRlZ29yaWFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17ZSA9PiBndWFyZGFyTnVldm9Qcm9kdWN0byh7IC4uLm51ZXZvUHJvZHVjdG8sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS1TZWxlY2Npb25hLS08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFsaXRhc1wiPkFsaXRhczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGF0YWNvbmVzXCI+UGF0YWNvbmVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhY29tcGHDsWFudGVzXCI+QWNvbXBhw7FhbnRlczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXJlcGFzXCI+QXJlcGFzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzYWxjaGlwYXBhc1wiPlNhbGNoaXBhcGFzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjYXJuZXNcIj5DYXJuZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNodXpvc1wiPkNodXpvczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGFtYnVyZ3Vlc2FzXCI+aGFtYnVyZ3Vlc2FzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRQYXNzd29yZFwiIGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIFwiPkRlc2NyaXBjaW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgcm93cz1cIjRcIiBuYW1lPVwiZGVzY3JpcGNpb25cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17ZSA9PiBndWFyZGFyTnVldm9Qcm9kdWN0byh7IC4uLm51ZXZvUHJvZHVjdG8sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3RhdGljRW1haWxcIiBjbGFzc05hbWU9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbFwiPkltYWdlbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWxlVXBsb2FkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBvbkNoYW5nZT17ZSA9PiBndWFyZGFyTnVldm9Qcm9kdWN0byh7IC4uLnByb2R1Y3RvLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pfSAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21pemVGaWxlbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUmVmPXtmaXJlYmFzZS5zdG9yYWdlLnJlZigncHJvZHVjdG9zJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBsb2FkU3RhcnQ9e2hhbmRsZVVwbG9hZFN0YXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblVwbG9hZEVycm9yPXtoYW5kbGVVcGxvYWRFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25VcGxvYWRTdWNjZXNzPXtoYW5kbGVVcGxvYWRTdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzPXtoYW5kbGVQcm9ncmVzc31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdGF0aWNFbWFpbFwiIGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsXCI+UHJlY2lvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByZWNpb1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXtlID0+IGd1YXJkYXJOdWV2b1Byb2R1Y3RvKHsgLi4ubnVldm9Qcm9kdWN0bywgW2UudGFyZ2V0Lm5hbWVdOiBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGZvcm0tY29udHJvbFwiPkNyZWFyIFByb2R1Y3RvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW5pZG8+XHJcblxyXG4gICAgICAgICAgICAgICAgOiA8Q29udGVuaWRvPjxoMT5ObyBUaWVuZXMgUGVybWlzbyBkZSBlc3RhciBhcXVpLi4uPC9oMT48L0NvbnRlbmlkbz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTnVldm9Qcm9kdWN0bzsiXSwic291cmNlUm9vdCI6IiJ9