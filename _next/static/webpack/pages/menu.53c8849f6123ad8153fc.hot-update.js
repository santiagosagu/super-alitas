webpackHotUpdate_N_E("pages/menu",{

/***/ "./pages/menu.js":
/*!***********************!*\
  !*** ./pages/menu.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ "./firebase/index.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _hooks_useAdmin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useAdmin */ "./hooks/useAdmin.js");
/* harmony import */ var _hooks_useEliminarProducto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useEliminarProducto */ "./hooks/useEliminarProducto.js");



var _this = undefined,
    _jsxFileName = "D:\\PROYECTOS\\restaurante\\pages\\menu.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    height: 40px;\n    margin-top: 2rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    display: flex;\n    justify-content: flex-end;\n    font-size: 1.2rem;\n    margin: 2rem 0;\n    cursor: pointer;\n\n    small {\n        &:hover{\n            background-color: #343a40;\n            padding:0.2rem;\n            color: #fff!important;\n            border-radius: 5px;\n    }\n    }\n    \n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    font-size: 2rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    \n    text-align: center;\n    \n    @media (min-width: 768px) {\n        margin: 4rem 0;\n    }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    max-width: 1200px;\n    overflow:hidden;\n\n    img{\n        height: 400px;\n    }\n\n    @media (min-width: 768px) {\n        margin: 1rem 8rem;\n        border-bottom: 1px solid #e1e1e1;\n        \n        img{\n            margin-bottom: 0.5rem;\n            width: 100%;\n\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Card = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());
_c = Card;
var H2Titulo = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].h2(_templateObject2());
_c2 = H2Titulo;
var ParrafoPrecio = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].p(_templateObject3());
_c3 = ParrafoPrecio;
var BotonEliminar = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].p(_templateObject4());
_c4 = BotonEliminar;
var DivSeparacion = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject5());
_c5 = DivSeparacion;

var Menu = function Menu() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      productos = _useState[0],
      guardarProductos = _useState[1]; // state categorias


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      categoriaPatacones = _useState2[0],
      guardarCategoriaPatacones = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      categoriaAcompañantes = _useState3[0],
      guardarcategoriaAcompañantes = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      categoriaAlitas = _useState4[0],
      guardarcategoriaAlitas = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      categoriaArepas = _useState5[0],
      guardarcategoriaArepas = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      categoriaSalchipapas = _useState6[0],
      guardarCategoriaSalchipapas = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      categoriaCarnes = _useState7[0],
      guardarCategoriaCarnes = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      categoriaChuzos = _useState8[0],
      guardarCategoriaChuzos = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      categoriaHamburguesas = _useState9[0],
      guardarCategoriaHamburguesas = _useState9[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_firebase__WEBPACK_IMPORTED_MODULE_4__["FirebaseContext"]),
      firebase = _useContext.firebase,
      usuario = _useContext.usuario; //traer todos los productos


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var obtenerProductos = function obtenerProductos() {
      firebase.db.collection('productos').orderBy('creado', 'desc').onSnapshot(manejarSnapshot);
    };

    obtenerProductos();
  }, []);

  function manejarSnapshot(snapshot) {
    var productos = snapshot.docs.map(function (doc) {
      return _objectSpread({
        id: doc.id
      }, doc.data());
    });
    guardarProductos(productos);
  }

  console.log(productos); //traemos el usuario admin

  var _useAdmin = Object(_hooks_useAdmin__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      admin = _useAdmin.admin; //utilizamos el use eliminar producto


  var _useEliminarProducto = Object(_hooks_useEliminarProducto__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      productoEliminar = _useEliminarProducto.productoEliminar,
      guardarProductoEliminar = _useEliminarProducto.guardarProductoEliminar,
      guardarConfirmacionEliminarProducto = _useEliminarProducto.guardarConfirmacionEliminarProducto; //filtrar categorias


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //patacones
    var categoriaPataconFn = function categoriaPataconFn() {
      var resultado = productos.filter(function (producto) {
        return producto.categoria === "patacones";
      });
      guardarCategoriaPatacones(resultado);
    };

    categoriaPataconFn(); //acompañantes

    var categoriaAcompañantesFn = function categoriaAcompañantesFn() {
      var resultado = productos.filter(function (producto) {
        return producto.categoria === "acompañantes";
      });
      guardarcategoriaAcompañantes(resultado);
    };

    categoriaAcompañantesFn(); //Alitas

    var categoriaAlitasFn = function categoriaAlitasFn() {
      var resultado = productos.filter(function (producto) {
        return producto.categoria === "alitas";
      });
      guardarcategoriaAlitas(resultado);
    };

    categoriaAlitasFn(); // arepas

    var categoriaArepasFn = function categoriaArepasFn() {
      var resultado = productos.filter(function (producto) {
        return producto.categoria === "arepas";
      });
      guardarcategoriaArepas(resultado);
    };

    categoriaArepasFn(); //Salchipapas

    var categoriaSalchipapasFn = function categoriaSalchipapasFn() {
      var resultado = productos.filter(function (producto) {
        return producto.categoria === "salchipapas";
      });
      guardarCategoriaSalchipapas(resultado);
    };

    categoriaSalchipapasFn(); //Carnes

    var categoriacarnesFn = function categoriacarnesFn() {
      var resultado = productos.filter(function (producto) {
        return producto.categoria === "carnes";
      });
      guardarCategoriaCarnes(resultado);
    };

    categoriacarnesFn(); //Chuzos

    var categoriaChuzosFn = function categoriaChuzosFn() {
      var resultado = productos.filter(function (producto) {
        return producto.categoria === "chuzos";
      });
      guardarCategoriaChuzos(resultado);
    };

    categoriaChuzosFn(); //hamburguesas

    var categoriaHamburguesasFn = function categoriaHamburguesasFn() {
      var resultado = productos.filter(function (producto) {
        return producto.categoria === "hamburguesas";
      });
      guardarCategoriaHamburguesas(resultado);
    };

    categoriaHamburguesasFn();
  }, [productos]); //recibir id a eliminar

  var recibirID = function recibirID(id) {
    console.log(id);
    guardarProductoEliminar(id);
  }; //confirmamos eliminacion


  var confirmarProducto = function confirmarProducto() {
    guardarConfirmacionEliminarProducto(true);
  }; //cancelar eliminacion producto


  var cancelarConfirmarProducto = function cancelarConfirmarProducto() {
    guardarConfirmacionEliminarProducto(false);
    guardarProductoEliminar('');
  }; //cerrar el modal


  var cerrarModal = function cerrarModal() {
    guardarConfirmacionEliminarProducto(false);
    guardarProductoEliminar('');
  };

  var ingresarEnPedido = function ingresarEnPedido(id) {
    if (productos.length === 0) {
      return;
    } else {
      var resultado = productos.filter(function (producto) {
        return producto.id === id;
      });
      resultado[0].usuarioPedido = usuario.uid;
      resultado[0].cantidad = 1;
      console.log(resultado);
      firebase.db.collection('pedidos').add(resultado[0]);
    }
  };

  console.log(categoriaAcompañantes);
  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 9
    }
  }, categoriaAlitas.length === 0 ? null : __jsx(H2Titulo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 52
    }
  }, "Alitas"), categoriaAlitas.map(function (alitas) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Card, {
      key: alitas.id,
      className: "card mb-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "row no-gutters",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: alitas.imagen,
      className: "card-img",
      alt: "imagen patacones",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 33
      }
    })), __jsx("div", {
      className: "col-md-8",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 33
      }
    }, __jsx("h5", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 37
      }
    }, alitas.nombre), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 37
      }
    }, alitas.descripcion), __jsx(ParrafoPrecio, {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 37
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 74
      }
    }, "$", alitas.precio)), usuario ? __jsx("button", {
      onClick: function onClick() {
        return ingresarEnPedido(alitas.id);
      },
      type: "button",
      className: "btn btn-dark form-control my-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 41
      }
    }, "Agregar a tu Pedido") : null, admin ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(BotonEliminar, {
      onClick: function onClick() {
        return recibirID(alitas.id);
      },
      className: "card-text",
      type: "button",
      "data-toggle": "modal",
      "data-target": "#modal-eliminacion",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 45
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 49
      }
    }, "Eliminar")), __jsx("div", {
      className: "modal fade",
      id: "modal-eliminacion",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: "modal-dialog",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 49
      }
    }, __jsx("div", {
      className: "modal-content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 53
      }
    }, __jsx("div", {
      className: "modal-header",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 57
      }
    }, __jsx("h5", {
      className: "modal-title",
      id: "exampleModalLabel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 61
      }
    }, "Eliminar?"), __jsx("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      onClick: function onClick() {
        return cerrarModal();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 61
      }
    }, __jsx("span", {
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 65
      }
    }, "\xD7"))), __jsx("div", {
      className: "modal-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 57
      }
    }, "Realmente desea Eliminar este Producto?"), __jsx("div", {
      className: "modal-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 57
      }
    }, __jsx("button", {
      type: "button",
      className: "btn btn-secondary",
      "data-dismiss": "modal",
      onClick: function onClick() {
        return cancelarConfirmarProducto();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 61
      }
    }, "Cancelar"), __jsx("button", {
      type: "button",
      className: "btn btn-danger",
      "data-dismiss": "modal",
      onClick: function onClick() {
        return confirmarProducto();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 61
      }
    }, "Eliminar")))))) : null)))));
  }), categoriaHamburguesas.length === 0 ? null : __jsx(H2Titulo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 58
    }
  }, "Hamburguesas"), categoriaHamburguesas.map(function (hamburguesa) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Card, {
      key: hamburguesa.id,
      className: "card mb-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "row no-gutters",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: hamburguesa.imagen,
      className: "card-img",
      alt: "imagen hamburguesa",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 33
      }
    })), __jsx("div", {
      className: "col-md-8",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 33
      }
    }, __jsx("h5", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 37
      }
    }, hamburguesa.nombre), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 37
      }
    }, hamburguesa.descripcion), __jsx(ParrafoPrecio, {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 37
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 74
      }
    }, "$", hamburguesa.precio)), usuario ? __jsx("button", {
      onClick: function onClick() {
        return ingresarEnPedido(hamburguesa.id);
      },
      type: "button",
      className: "btn btn-dark form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 41
      }
    }, "Agregar a tu Pedido") : null, admin ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(BotonEliminar, {
      onClick: function onClick() {
        return recibirID(patacones.id);
      },
      className: "card-text",
      type: "button",
      "data-toggle": "modal",
      "data-target": "#modal-eliminacion",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 45
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 49
      }
    }, "Eliminar"))) : null)))));
  }), categoriaPatacones.length === 0 ? null : __jsx(H2Titulo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 55
    }
  }, "Patacones"), categoriaPatacones.map(function (patacones) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Card, {
      key: patacones.id,
      className: "card mb-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "row no-gutters",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: patacones.imagen,
      className: "card-img",
      alt: "imagen patacones",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 33
      }
    })), __jsx("div", {
      className: "col-md-8",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 33
      }
    }, __jsx("h5", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 37
      }
    }, patacones.nombre), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 37
      }
    }, patacones.descripcion), __jsx(ParrafoPrecio, {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 37
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 74
      }
    }, "$", patacones.precio)), usuario ? __jsx("button", {
      onClick: function onClick() {
        return ingresarEnPedido(patacones.id);
      },
      type: "button",
      className: "btn btn-dark form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 41
      }
    }, "Agregar a tu Pedido") : null, admin ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(BotonEliminar, {
      onClick: function onClick() {
        return recibirID(patacones.id);
      },
      className: "card-text",
      type: "button",
      "data-toggle": "modal",
      "data-target": "#modal-eliminacion",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 45
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 49
      }
    }, "Eliminar"))) : null)))));
  }), categoriaArepas.length === 0 ? null : __jsx(H2Titulo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 52
    }
  }, "Arepas"), categoriaArepas.map(function (arepa) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Card, {
      key: arepa.id,
      className: "card mb-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "row no-gutters",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: arepa.imagen,
      className: "card-img",
      alt: "imagen patacones",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 33
      }
    })), __jsx("div", {
      className: "col-md-8",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 33
      }
    }, __jsx("h5", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 37
      }
    }, arepa.nombre), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 37
      }
    }, arepa.descripcion), __jsx(ParrafoPrecio, {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 37
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 74
      }
    }, "$", arepa.precio)), usuario ? __jsx("button", {
      onClick: function onClick() {
        return ingresarEnPedido(arepa.id);
      },
      type: "button",
      className: "btn btn-dark form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 41
      }
    }, "Agregar a tu Pedido") : null, admin ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(BotonEliminar, {
      onClick: function onClick() {
        return recibirID(costillas.id);
      },
      className: "card-text",
      type: "button",
      "data-toggle": "modal",
      "data-target": "#modal-eliminacion",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428,
        columnNumber: 45
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434,
        columnNumber: 49
      }
    }, "Eliminar"))) : null)))));
  }), categoriaSalchipapas.length === 0 ? null : __jsx(H2Titulo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 57
    }
  }, "Salchipapas"), categoriaSalchipapas.map(function (salchipapas) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Card, {
      key: salchipapas.id,
      className: "card mb-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "row no-gutters",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 452,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: salchipapas.imagen,
      className: "card-img",
      alt: "imagen patacones",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 454,
        columnNumber: 33
      }
    })), __jsx("div", {
      className: "col-md-8",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457,
        columnNumber: 33
      }
    }, __jsx("h5", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458,
        columnNumber: 37
      }
    }, salchipapas.nombre), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459,
        columnNumber: 37
      }
    }, salchipapas.descripcion), __jsx(ParrafoPrecio, {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460,
        columnNumber: 37
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460,
        columnNumber: 74
      }
    }, "$", salchipapas.precio)), usuario ? __jsx("button", {
      onClick: function onClick() {
        return ingresarEnPedido(salchipapas.id);
      },
      type: "button",
      className: "btn btn-dark form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464,
        columnNumber: 41
      }
    }, "Agregar a tu Pedido") : null, admin ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(BotonEliminar, {
      onClick: function onClick() {
        return recibirID(salchipapas.id);
      },
      className: "card-text",
      type: "button",
      "data-toggle": "modal",
      "data-target": "#modal-eliminacion",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 473,
        columnNumber: 45
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 479,
        columnNumber: 49
      }
    }, "Eliminar"))) : null)))));
  }), categoriaCarnes.length === 0 ? null : __jsx(H2Titulo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 52
    }
  }, "Carnes"), categoriaCarnes.map(function (carne) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Card, {
      key: carne.id,
      className: "card mb-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 495,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "row no-gutters",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 496,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: carne.imagen,
      className: "card-img",
      alt: "imagen carnes",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 33
      }
    })), __jsx("div", {
      className: "col-md-8",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 500,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 501,
        columnNumber: 33
      }
    }, __jsx("h5", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 502,
        columnNumber: 37
      }
    }, carne.nombre), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503,
        columnNumber: 37
      }
    }, carne.descripcion), __jsx(ParrafoPrecio, {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504,
        columnNumber: 37
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504,
        columnNumber: 74
      }
    }, "$", carne.precio)), usuario ? __jsx("button", {
      onClick: function onClick() {
        return ingresarEnPedido(carne.id);
      },
      type: "button",
      className: "btn btn-dark form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 508,
        columnNumber: 41
      }
    }, "Agregar a tu Pedido") : null, admin ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(BotonEliminar, {
      onClick: function onClick() {
        return recibirID(qbano.id);
      },
      className: "card-text",
      type: "button",
      "data-toggle": "modal",
      "data-target": "#modal-eliminacion",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517,
        columnNumber: 45
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 523,
        columnNumber: 49
      }
    }, "Eliminar"))) : null)))));
  }), categoriaChuzos.length === 0 ? null : __jsx(H2Titulo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 52
    }
  }, "Chuzos"), categoriaChuzos.map(function (chuzo) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Card, {
      key: chuzo.id,
      className: "card mb-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 539,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "row no-gutters",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 540,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 541,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: chuzo.imagen,
      className: "card-img",
      alt: "imagen carnes",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542,
        columnNumber: 33
      }
    })), __jsx("div", {
      className: "col-md-8",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 544,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 545,
        columnNumber: 33
      }
    }, __jsx("h5", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 546,
        columnNumber: 37
      }
    }, chuzo.nombre), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 547,
        columnNumber: 37
      }
    }, chuzo.descripcion), __jsx(ParrafoPrecio, {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 548,
        columnNumber: 37
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 548,
        columnNumber: 74
      }
    }, "$", chuzo.precio)), usuario ? __jsx("button", {
      onClick: function onClick() {
        return ingresarEnPedido(chuzo.id);
      },
      type: "button",
      className: "btn btn-dark form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 552,
        columnNumber: 41
      }
    }, "Agregar a tu Pedido") : null, admin ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(BotonEliminar, {
      onClick: function onClick() {
        return recibirID(qbano.id);
      },
      className: "card-text",
      type: "button",
      "data-toggle": "modal",
      "data-target": "#modal-eliminacion",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 561,
        columnNumber: 45
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 567,
        columnNumber: 49
      }
    }, "Eliminar"))) : null)))));
  }), categoriaAcompañantes.length === 0 ? null : __jsx(H2Titulo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 58
    }
  }, "Acompa\xF1antes"), categoriaAcompañantes.map(function (acompañante) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Card, {
      key: acompañante.id,
      className: "card mb-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 583,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "row no-gutters",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 584,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 585,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: acompañante.imagen,
      className: "card-img",
      alt: "imagen patacones",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 586,
        columnNumber: 33
      }
    })), __jsx("div", {
      className: "col-md-8",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 588,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 589,
        columnNumber: 33
      }
    }, __jsx("h5", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 590,
        columnNumber: 37
      }
    }, acompañante.nombre), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 591,
        columnNumber: 37
      }
    }, acompañante.descripcion), __jsx(ParrafoPrecio, {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 592,
        columnNumber: 37
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 592,
        columnNumber: 74
      }
    }, "$", acompañante.precio)), usuario ? __jsx("button", {
      onClick: function onClick() {
        return ingresarEnPedido(acompañante.id);
      },
      type: "button",
      className: "btn btn-dark form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 596,
        columnNumber: 41
      }
    }, "Agregar a tu Pedido") : null, admin ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(BotonEliminar, {
      onClick: function onClick() {
        return recibirID(papaschips.id);
      },
      className: "card-text",
      type: "button",
      "data-toggle": "modal",
      "data-target": "#modal-eliminacion",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 605,
        columnNumber: 45
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 611,
        columnNumber: 49
      }
    }, "Eliminar"))) : null)))));
  }), __jsx(DivSeparacion, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628,
      columnNumber: 13
    }
  }));
};

_s(Menu, "V1+vd6HmO2MM2c3l6dLGsniFCrs=", false, function () {
  return [_hooks_useAdmin__WEBPACK_IMPORTED_MODULE_6__["default"], _hooks_useEliminarProducto__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c6 = Menu;
/* harmony default export */ __webpack_exports__["default"] = (Menu);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Card");
$RefreshReg$(_c2, "H2Titulo");
$RefreshReg$(_c3, "ParrafoPrecio");
$RefreshReg$(_c4, "BotonEliminar");
$RefreshReg$(_c5, "DivSeparacion");
$RefreshReg$(_c6, "Menu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWVudS5qcyJdLCJuYW1lcyI6WyJDYXJkIiwic3R5bGVkIiwiZGl2IiwiSDJUaXR1bG8iLCJoMiIsIlBhcnJhZm9QcmVjaW8iLCJwIiwiQm90b25FbGltaW5hciIsIkRpdlNlcGFyYWNpb24iLCJNZW51IiwidXNlU3RhdGUiLCJwcm9kdWN0b3MiLCJndWFyZGFyUHJvZHVjdG9zIiwiY2F0ZWdvcmlhUGF0YWNvbmVzIiwiZ3VhcmRhckNhdGVnb3JpYVBhdGFjb25lcyIsImNhdGVnb3JpYUFjb21wYcOxYW50ZXMiLCJndWFyZGFyY2F0ZWdvcmlhQWNvbXBhw7FhbnRlcyIsImNhdGVnb3JpYUFsaXRhcyIsImd1YXJkYXJjYXRlZ29yaWFBbGl0YXMiLCJjYXRlZ29yaWFBcmVwYXMiLCJndWFyZGFyY2F0ZWdvcmlhQXJlcGFzIiwiY2F0ZWdvcmlhU2FsY2hpcGFwYXMiLCJndWFyZGFyQ2F0ZWdvcmlhU2FsY2hpcGFwYXMiLCJjYXRlZ29yaWFDYXJuZXMiLCJndWFyZGFyQ2F0ZWdvcmlhQ2FybmVzIiwiY2F0ZWdvcmlhQ2h1em9zIiwiZ3VhcmRhckNhdGVnb3JpYUNodXpvcyIsImNhdGVnb3JpYUhhbWJ1cmd1ZXNhcyIsImd1YXJkYXJDYXRlZ29yaWFIYW1idXJndWVzYXMiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwiZmlyZWJhc2UiLCJ1c3VhcmlvIiwidXNlRWZmZWN0Iiwib2J0ZW5lclByb2R1Y3RvcyIsImRiIiwiY29sbGVjdGlvbiIsIm9yZGVyQnkiLCJvblNuYXBzaG90IiwibWFuZWphclNuYXBzaG90Iiwic25hcHNob3QiLCJkb2NzIiwibWFwIiwiZG9jIiwiaWQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInVzZUFkbWluIiwiYWRtaW4iLCJ1c2VFbGltaW5hclByb2R1Y3RvIiwicHJvZHVjdG9FbGltaW5hciIsImd1YXJkYXJQcm9kdWN0b0VsaW1pbmFyIiwiZ3VhcmRhckNvbmZpcm1hY2lvbkVsaW1pbmFyUHJvZHVjdG8iLCJjYXRlZ29yaWFQYXRhY29uRm4iLCJyZXN1bHRhZG8iLCJmaWx0ZXIiLCJwcm9kdWN0byIsImNhdGVnb3JpYSIsImNhdGVnb3JpYUFjb21wYcOxYW50ZXNGbiIsImNhdGVnb3JpYUFsaXRhc0ZuIiwiY2F0ZWdvcmlhQXJlcGFzRm4iLCJjYXRlZ29yaWFTYWxjaGlwYXBhc0ZuIiwiY2F0ZWdvcmlhY2FybmVzRm4iLCJjYXRlZ29yaWFDaHV6b3NGbiIsImNhdGVnb3JpYUhhbWJ1cmd1ZXNhc0ZuIiwicmVjaWJpcklEIiwiY29uZmlybWFyUHJvZHVjdG8iLCJjYW5jZWxhckNvbmZpcm1hclByb2R1Y3RvIiwiY2VycmFyTW9kYWwiLCJpbmdyZXNhckVuUGVkaWRvIiwibGVuZ3RoIiwidXN1YXJpb1BlZGlkbyIsInVpZCIsImNhbnRpZGFkIiwiYWRkIiwiYWxpdGFzIiwiaW1hZ2VuIiwibm9tYnJlIiwiZGVzY3JpcGNpb24iLCJwcmVjaW8iLCJoYW1idXJndWVzYSIsInBhdGFjb25lcyIsImFyZXBhIiwiY29zdGlsbGFzIiwic2FsY2hpcGFwYXMiLCJjYXJuZSIsInFiYW5vIiwiY2h1em8iLCJhY29tcGHDsWFudGUiLCJwYXBhc2NoaXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLElBQUksR0FBR0MsdURBQU0sQ0FBQ0MsR0FBVixtQkFBVjtLQUFNRixJO0FBbUJOLElBQU1HLFFBQVEsR0FBR0YsdURBQU0sQ0FBQ0csRUFBVixvQkFBZDtNQUFNRCxRO0FBU04sSUFBTUUsYUFBYSxHQUFHSix1REFBTSxDQUFDSyxDQUFWLG9CQUFuQjtNQUFNRCxhO0FBSU4sSUFBTUUsYUFBYSxHQUFHTix1REFBTSxDQUFDSyxDQUFWLG9CQUFuQjtNQUFNQyxhO0FBaUJOLElBQU1DLGFBQWEs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QWdDVSxXQUFXLENBQUNULE1BQTVDLENBQXJDLENBSEosRUFLS2hELE9BQU8sR0FFSjtBQUNJLGFBQU8sRUFBRTtBQUFBLGVBQU1zQyxnQkFBZ0IsQ0FBQ21CLFdBQVcsQ0FBQzdDLEVBQWIsQ0FBdEI7QUFBQSxPQURiO0FBRUksVUFBSSxFQUFDLFFBRlQ7QUFHSSxlQUFTLEVBQUMsMkJBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGSSxHQU1GLElBWFYsRUFhS0ssS0FBSyxHQUVGLG1FQUNJLE1BQUMsYUFBRDtBQUNJLGFBQU8sRUFBRTtBQUFBLGVBQU1pQixTQUFTLENBQUN3QixVQUFVLENBQUM5QyxFQUFaLENBQWY7QUFBQSxPQURiO0FBRUksZUFBUyxFQUFDLFdBRmQ7QUFHSSxVQUFJLEVBQUMsUUFIVDtBQUlJLHFCQUFZLE9BSmhCO0FBS0kscUJBQVksb0JBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FNSTtBQUFPLGVBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KLENBREosQ0FGRSxHQVlBLElBekJWLENBREosQ0FKSixDQURKLENBREosQ0FEa0M7QUFBQSxHQUFyQyxDQXhWTCxFQXVZSSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZZSixDQURKO0FBOFlILENBMWpCRDs7R0FBTW5DLEk7VUF5Q2dCdUMsdUQsRUFHeUVFLGtFOzs7TUE1Q3pGekMsSTtBQTRqQlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lbnUuNTNjODg0OWY2MTIzYWQ4MTUzZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0JztcclxuaW1wb3J0IHsgRmlyZWJhc2VDb250ZXh0IH0gZnJvbSAnLi4vZmlyZWJhc2UnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5pbXBvcnQgdXNlQWRtaW4gZnJvbSAnLi4vaG9va3MvdXNlQWRtaW4nXHJcbmltcG9ydCB1c2VFbGltaW5hclByb2R1Y3RvIGZyb20gJy4uL2hvb2tzL3VzZUVsaW1pbmFyUHJvZHVjdG8nXHJcblxyXG5cclxuXHJcbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtIDhyZW07XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuY29uc3QgSDJUaXR1bG8gPSBzdHlsZWQuaDJgXHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWFyZ2luOiA0cmVtIDA7XHJcbiAgICB9XHJcblxyXG5gXHJcbmNvbnN0IFBhcnJhZm9QcmVjaW8gPSBzdHlsZWQucGBcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuYFxyXG5cclxuY29uc3QgQm90b25FbGltaW5hciA9IHN0eWxlZC5wYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIHNtYWxsIHtcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjAuMnJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuYFxyXG5jb25zdCBEaXZTZXBhcmFjaW9uID0gc3R5bGVkLmRpdmBcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbmBcclxuXHJcbmNvbnN0IE1lbnUgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Byb2R1Y3RvcywgZ3VhcmRhclByb2R1Y3Rvc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICAvLyBzdGF0ZSBjYXRlZ29yaWFzXHJcbiAgICBjb25zdCBbY2F0ZWdvcmlhUGF0YWNvbmVzLCBndWFyZGFyQ2F0ZWdvcmlhUGF0YWNvbmVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2NhdGVnb3JpYUFjb21wYcOxYW50ZXMsIGd1YXJkYXJjYXRlZ29yaWFBY29tcGHDsWFudGVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2NhdGVnb3JpYUFsaXRhcywgZ3VhcmRhcmNhdGVnb3JpYUFsaXRhc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtjYXRlZ29yaWFBcmVwYXMsIGd1YXJkYXJjYXRlZ29yaWFBcmVwYXNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbY2F0ZWdvcmlhU2FsY2hpcGFwYXMsIGd1YXJkYXJDYXRlZ29yaWFTYWxjaGlwYXBhc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtjYXRlZ29yaWFDYXJuZXMsIGd1YXJkYXJDYXRlZ29yaWFDYXJuZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbY2F0ZWdvcmlhQ2h1em9zLCBndWFyZGFyQ2F0ZWdvcmlhQ2h1em9zXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2NhdGVnb3JpYUhhbWJ1cmd1ZXNhcywgZ3VhcmRhckNhdGVnb3JpYUhhbWJ1cmd1ZXNhc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHsgZmlyZWJhc2UsIHVzdWFyaW8gfSA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KVxyXG5cclxuICAgIC8vdHJhZXIgdG9kb3MgbG9zIHByb2R1Y3Rvc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnRlbmVyUHJvZHVjdG9zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdwcm9kdWN0b3MnKS5vcmRlckJ5KCdjcmVhZG8nLCAnZGVzYycpLm9uU25hcHNob3QobWFuZWphclNuYXBzaG90KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2J0ZW5lclByb2R1Y3RvcygpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBmdW5jdGlvbiBtYW5lamFyU25hcHNob3Qoc25hcHNob3QpIHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0b3MgPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZ3VhcmRhclByb2R1Y3Rvcyhwcm9kdWN0b3MpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RvcylcclxuXHJcbiAgICAvL3RyYWVtb3MgZWwgdXN1YXJpbyBhZG1pblxyXG4gICAgY29uc3QgeyBhZG1pbiB9ID0gdXNlQWRtaW4oKVxyXG5cclxuICAgIC8vdXRpbGl6YW1vcyBlbCB1c2UgZWxpbWluYXIgcHJvZHVjdG9cclxuICAgIGNvbnN0IHsgcHJvZHVjdG9FbGltaW5hciwgZ3VhcmRhclByb2R1Y3RvRWxpbWluYXIsIGd1YXJkYXJDb25maXJtYWNpb25FbGltaW5hclByb2R1Y3RvIH0gPSB1c2VFbGltaW5hclByb2R1Y3RvKClcclxuXHJcblxyXG4gICAgLy9maWx0cmFyIGNhdGVnb3JpYXNcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vcGF0YWNvbmVzXHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcmlhUGF0YWNvbkZuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBwcm9kdWN0b3MuZmlsdGVyKHByb2R1Y3RvID0+IHByb2R1Y3RvLmNhdGVnb3JpYSA9PT0gXCJwYXRhY29uZXNcIilcclxuXHJcbiAgICAgICAgICAgIGd1YXJkYXJDYXRlZ29yaWFQYXRhY29uZXMocmVzdWx0YWRvKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2F0ZWdvcmlhUGF0YWNvbkZuKClcclxuXHJcbiAgICAgICAgLy9hY29tcGHDsWFudGVzXHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcmlhQWNvbXBhw7FhbnRlc0ZuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBwcm9kdWN0b3MuZmlsdGVyKHByb2R1Y3RvID0+IHByb2R1Y3RvLmNhdGVnb3JpYSA9PT0gXCJhY29tcGHDsWFudGVzXCIpXHJcblxyXG4gICAgICAgICAgICBndWFyZGFyY2F0ZWdvcmlhQWNvbXBhw7FhbnRlcyhyZXN1bHRhZG8pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXRlZ29yaWFBY29tcGHDsWFudGVzRm4oKVxyXG5cclxuICAgICAgICAvL0FsaXRhc1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3JpYUFsaXRhc0ZuID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gcHJvZHVjdG9zLmZpbHRlcihwcm9kdWN0byA9PiBwcm9kdWN0by5jYXRlZ29yaWEgPT09IFwiYWxpdGFzXCIpXHJcblxyXG4gICAgICAgICAgICBndWFyZGFyY2F0ZWdvcmlhQWxpdGFzKHJlc3VsdGFkbylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhdGVnb3JpYUFsaXRhc0ZuKClcclxuXHJcbiAgICAgICAgLy8gYXJlcGFzXHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcmlhQXJlcGFzRm4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IHByb2R1Y3Rvcy5maWx0ZXIocHJvZHVjdG8gPT4gcHJvZHVjdG8uY2F0ZWdvcmlhID09PSBcImFyZXBhc1wiKVxyXG5cclxuICAgICAgICAgICAgZ3VhcmRhcmNhdGVnb3JpYUFyZXBhcyhyZXN1bHRhZG8pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXRlZ29yaWFBcmVwYXNGbigpXHJcblxyXG4gICAgICAgIC8vU2FsY2hpcGFwYXNcclxuICAgICAgICBjb25zdCBjYXRlZ29yaWFTYWxjaGlwYXBhc0ZuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBwcm9kdWN0b3MuZmlsdGVyKHByb2R1Y3RvID0+IHByb2R1Y3RvLmNhdGVnb3JpYSA9PT0gXCJzYWxjaGlwYXBhc1wiKVxyXG5cclxuICAgICAgICAgICAgZ3VhcmRhckNhdGVnb3JpYVNhbGNoaXBhcGFzKHJlc3VsdGFkbylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhdGVnb3JpYVNhbGNoaXBhcGFzRm4oKVxyXG5cclxuICAgICAgICAvL0Nhcm5lc1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3JpYWNhcm5lc0ZuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBwcm9kdWN0b3MuZmlsdGVyKHByb2R1Y3RvID0+IHByb2R1Y3RvLmNhdGVnb3JpYSA9PT0gXCJjYXJuZXNcIilcclxuXHJcbiAgICAgICAgICAgIGd1YXJkYXJDYXRlZ29yaWFDYXJuZXMocmVzdWx0YWRvKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2F0ZWdvcmlhY2FybmVzRm4oKVxyXG5cclxuICAgICAgICAvL0NodXpvc1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3JpYUNodXpvc0ZuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBwcm9kdWN0b3MuZmlsdGVyKHByb2R1Y3RvID0+IHByb2R1Y3RvLmNhdGVnb3JpYSA9PT0gXCJjaHV6b3NcIilcclxuXHJcbiAgICAgICAgICAgIGd1YXJkYXJDYXRlZ29yaWFDaHV6b3MocmVzdWx0YWRvKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2F0ZWdvcmlhQ2h1em9zRm4oKVxyXG5cclxuICAgICAgICAvL2hhbWJ1cmd1ZXNhc1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3JpYUhhbWJ1cmd1ZXNhc0ZuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBwcm9kdWN0b3MuZmlsdGVyKHByb2R1Y3RvID0+IHByb2R1Y3RvLmNhdGVnb3JpYSA9PT0gXCJoYW1idXJndWVzYXNcIilcclxuXHJcbiAgICAgICAgICAgIGd1YXJkYXJDYXRlZ29yaWFIYW1idXJndWVzYXMocmVzdWx0YWRvKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2F0ZWdvcmlhSGFtYnVyZ3Vlc2FzRm4oKVxyXG5cclxuICAgIH0sIFtwcm9kdWN0b3NdKVxyXG5cclxuXHJcbiAgICAvL3JlY2liaXIgaWQgYSBlbGltaW5hclxyXG4gICAgY29uc3QgcmVjaWJpcklEID0gaWQgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIGd1YXJkYXJQcm9kdWN0b0VsaW1pbmFyKGlkKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL2NvbmZpcm1hbW9zIGVsaW1pbmFjaW9uXHJcbiAgICBjb25zdCBjb25maXJtYXJQcm9kdWN0byA9ICgpID0+IHtcclxuICAgICAgICBndWFyZGFyQ29uZmlybWFjaW9uRWxpbWluYXJQcm9kdWN0byh0cnVlKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL2NhbmNlbGFyIGVsaW1pbmFjaW9uIHByb2R1Y3RvXHJcbiAgICBjb25zdCBjYW5jZWxhckNvbmZpcm1hclByb2R1Y3RvID0gKCkgPT4ge1xyXG4gICAgICAgIGd1YXJkYXJDb25maXJtYWNpb25FbGltaW5hclByb2R1Y3RvKGZhbHNlKVxyXG4gICAgICAgIGd1YXJkYXJQcm9kdWN0b0VsaW1pbmFyKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIC8vY2VycmFyIGVsIG1vZGFsXHJcbiAgICBjb25zdCBjZXJyYXJNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBndWFyZGFyQ29uZmlybWFjaW9uRWxpbWluYXJQcm9kdWN0byhmYWxzZSlcclxuICAgICAgICBndWFyZGFyUHJvZHVjdG9FbGltaW5hcignJylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbmdyZXNhckVuUGVkaWRvID0gaWQgPT4ge1xyXG5cclxuICAgICAgICBpZiAocHJvZHVjdG9zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBwcm9kdWN0b3MuZmlsdGVyKHByb2R1Y3RvID0+IHByb2R1Y3RvLmlkID09PSBpZClcclxuXHJcblxyXG4gICAgICAgICAgICByZXN1bHRhZG9bMF0udXN1YXJpb1BlZGlkbyA9IHVzdWFyaW8udWlkXHJcbiAgICAgICAgICAgIHJlc3VsdGFkb1swXS5jYW50aWRhZCA9IDFcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdGFkbylcclxuXHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3BlZGlkb3MnKS5hZGQocmVzdWx0YWRvWzBdKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGNhdGVnb3JpYUFjb21wYcOxYW50ZXMpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICB7LyogY2F0ZWdvcmlhIEFsaXRhcyAqL31cclxuICAgICAgICAgICAge2NhdGVnb3JpYUFsaXRhcy5sZW5ndGggPT09IDAgPyBudWxsIDogPEgyVGl0dWxvPkFsaXRhczwvSDJUaXR1bG8+fVxyXG4gICAgICAgICAgICB7Y2F0ZWdvcmlhQWxpdGFzLm1hcChhbGl0YXMgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQga2V5PXthbGl0YXMuaWR9IGNsYXNzTmFtZT1cImNhcmQgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2FsaXRhcy5pbWFnZW59IGNsYXNzTmFtZT1cImNhcmQtaW1nXCIgYWx0PVwiaW1hZ2VuIHBhdGFjb25lc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPnthbGl0YXMubm9tYnJlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPnthbGl0YXMuZGVzY3JpcGNpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFycmFmb1ByZWNpbyBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj48c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPiR7YWxpdGFzLnByZWNpb308L3NtYWxsPjwvUGFycmFmb1ByZWNpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzdWFyaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbmdyZXNhckVuUGVkaWRvKGFsaXRhcy5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGZvcm0tY29udHJvbCBteS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWdyZWdhciBhIHR1IFBlZGlkbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FkbWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3RvbkVsaW1pbmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlY2liaXJJRChhbGl0YXMuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI21vZGFsLWVsaW1pbmFjaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCIgPkVsaW1pbmFyPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JvdG9uRWxpbWluYXI+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cIm1vZGFsLWVsaW1pbmFjaW9uXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5FbGltaW5hcj88L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgb25DbGljaz17KCkgPT4gY2VycmFyTW9kYWwoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhbG1lbnRlIGRlc2VhIEVsaW1pbmFyIGVzdGUgUHJvZHVjdG8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9eygpID0+IGNhbmNlbGFyQ29uZmlybWFyUHJvZHVjdG8oKX0+Q2FuY2VsYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9eygpID0+IGNvbmZpcm1hclByb2R1Y3RvKCl9PkVsaW1pbmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgIHsvKiBjYXRlZ29yaWEgSGFtYnVyZ3Vlc2FzICovfVxyXG4gICAgICAgICAgICB7Y2F0ZWdvcmlhSGFtYnVyZ3Vlc2FzLmxlbmd0aCA9PT0gMCA/IG51bGwgOiA8SDJUaXR1bG8+SGFtYnVyZ3Vlc2FzPC9IMlRpdHVsbz59XHJcbiAgICAgICAgICAgIHtjYXRlZ29yaWFIYW1idXJndWVzYXMubWFwKGhhbWJ1cmd1ZXNhID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17aGFtYnVyZ3Vlc2EuaWR9IGNsYXNzTmFtZT1cImNhcmQgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2hhbWJ1cmd1ZXNhLmltYWdlbn0gY2xhc3NOYW1lPVwiY2FyZC1pbWdcIiBhbHQ9XCJpbWFnZW4gaGFtYnVyZ3Vlc2FcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57aGFtYnVyZ3Vlc2Eubm9tYnJlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntoYW1idXJndWVzYS5kZXNjcmlwY2lvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJyYWZvUHJlY2lvIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPjxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+JHtoYW1idXJndWVzYS5wcmVjaW99PC9zbWFsbD48L1BhcnJhZm9QcmVjaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c3VhcmlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaW5ncmVzYXJFblBlZGlkbyhoYW1idXJndWVzYS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGZvcm0tY29udHJvbFwiPkFncmVnYXIgYSB0dSBQZWRpZG88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthZG1pblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm90b25FbGltaW5hclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZWNpYmlySUQocGF0YWNvbmVzLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNtb2RhbC1lbGltaW5hY2lvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiID5FbGltaW5hcjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3RvbkVsaW1pbmFyPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcblxyXG5cclxuICAgICAgICAgICAgey8qIGNhdGVnb3JpYSBwYXRhY29uZXMgKi99XHJcbiAgICAgICAgICAgIHtjYXRlZ29yaWFQYXRhY29uZXMubGVuZ3RoID09PSAwID8gbnVsbCA6IDxIMlRpdHVsbz5QYXRhY29uZXM8L0gyVGl0dWxvPn1cclxuICAgICAgICAgICAge2NhdGVnb3JpYVBhdGFjb25lcy5tYXAocGF0YWNvbmVzID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17cGF0YWNvbmVzLmlkfSBjbGFzc05hbWU9XCJjYXJkIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwYXRhY29uZXMuaW1hZ2VufSBjbGFzc05hbWU9XCJjYXJkLWltZ1wiIGFsdD1cImltYWdlbiBwYXRhY29uZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cGF0YWNvbmVzLm5vbWJyZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57cGF0YWNvbmVzLmRlc2NyaXBjaW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcnJhZm9QcmVjaW8gY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+PHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj4ke3BhdGFjb25lcy5wcmVjaW99PC9zbWFsbD48L1BhcnJhZm9QcmVjaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c3VhcmlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaW5ncmVzYXJFblBlZGlkbyhwYXRhY29uZXMuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBmb3JtLWNvbnRyb2xcIj5BZ3JlZ2FyIGEgdHUgUGVkaWRvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWRtaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdG9uRWxpbWluYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVjaWJpcklEKHBhdGFjb25lcy5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbW9kYWwtZWxpbWluYWNpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIiA+RWxpbWluYXI8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm90b25FbGltaW5hcj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgey8qIGNhdGVnb3JpYSBhcmVwYXMgKi99XHJcbiAgICAgICAgICAgIHtjYXRlZ29yaWFBcmVwYXMubGVuZ3RoID09PSAwID8gbnVsbCA6IDxIMlRpdHVsbz5BcmVwYXM8L0gyVGl0dWxvPn1cclxuICAgICAgICAgICAge2NhdGVnb3JpYUFyZXBhcy5tYXAoYXJlcGEgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2FyZXBhLmlkfSBjbGFzc05hbWU9XCJjYXJkIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthcmVwYS5pbWFnZW59IGNsYXNzTmFtZT1cImNhcmQtaW1nXCIgYWx0PVwiaW1hZ2VuIHBhdGFjb25lc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPnthcmVwYS5ub21icmV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e2FyZXBhLmRlc2NyaXBjaW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcnJhZm9QcmVjaW8gY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+PHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj4ke2FyZXBhLnByZWNpb308L3NtYWxsPjwvUGFycmFmb1ByZWNpbz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c3VhcmlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaW5ncmVzYXJFblBlZGlkbyhhcmVwYS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGZvcm0tY29udHJvbFwiPkFncmVnYXIgYSB0dSBQZWRpZG88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthZG1pblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm90b25FbGltaW5hclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZWNpYmlySUQoY29zdGlsbGFzLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNtb2RhbC1lbGltaW5hY2lvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiID5FbGltaW5hcjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3RvbkVsaW1pbmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuXHJcblxyXG4gICAgICAgICAgICB7LyogY2F0ZWdvcmlhIHNhbGNoaXBhcGFzICovfVxyXG4gICAgICAgICAgICB7Y2F0ZWdvcmlhU2FsY2hpcGFwYXMubGVuZ3RoID09PSAwID8gbnVsbCA6IDxIMlRpdHVsbz5TYWxjaGlwYXBhczwvSDJUaXR1bG8+fVxyXG4gICAgICAgICAgICB7Y2F0ZWdvcmlhU2FsY2hpcGFwYXMubWFwKHNhbGNoaXBhcGFzID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQga2V5PXtzYWxjaGlwYXBhcy5pZH0gY2xhc3NOYW1lPVwiY2FyZCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2FsY2hpcGFwYXMuaW1hZ2VufSBjbGFzc05hbWU9XCJjYXJkLWltZ1wiIGFsdD1cImltYWdlbiBwYXRhY29uZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57c2FsY2hpcGFwYXMubm9tYnJlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntzYWxjaGlwYXBhcy5kZXNjcmlwY2lvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJyYWZvUHJlY2lvIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPjxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+JHtzYWxjaGlwYXBhcy5wcmVjaW99PC9zbWFsbD48L1BhcnJhZm9QcmVjaW8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXN1YXJpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGluZ3Jlc2FyRW5QZWRpZG8oc2FsY2hpcGFwYXMuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBmb3JtLWNvbnRyb2xcIj5BZ3JlZ2FyIGEgdHUgUGVkaWRvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWRtaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdG9uRWxpbWluYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVjaWJpcklEKHNhbGNoaXBhcGFzLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNtb2RhbC1lbGltaW5hY2lvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiID5FbGltaW5hcjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3RvbkVsaW1pbmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgIHsvKiBjYXRlZ29yaWEgQ2FybmVzKi99XHJcbiAgICAgICAgICAgIHtjYXRlZ29yaWFDYXJuZXMubGVuZ3RoID09PSAwID8gbnVsbCA6IDxIMlRpdHVsbz5DYXJuZXM8L0gyVGl0dWxvPn1cclxuICAgICAgICAgICAge2NhdGVnb3JpYUNhcm5lcy5tYXAoY2FybmUgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2Nhcm5lLmlkfSBjbGFzc05hbWU9XCJjYXJkIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjYXJuZS5pbWFnZW59IGNsYXNzTmFtZT1cImNhcmQtaW1nXCIgYWx0PVwiaW1hZ2VuIGNhcm5lc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntjYXJuZS5ub21icmV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e2Nhcm5lLmRlc2NyaXBjaW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcnJhZm9QcmVjaW8gY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+PHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj4ke2Nhcm5lLnByZWNpb308L3NtYWxsPjwvUGFycmFmb1ByZWNpbz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c3VhcmlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaW5ncmVzYXJFblBlZGlkbyhjYXJuZS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGZvcm0tY29udHJvbFwiPkFncmVnYXIgYSB0dSBQZWRpZG88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthZG1pblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm90b25FbGltaW5hclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZWNpYmlySUQocWJhbm8uaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI21vZGFsLWVsaW1pbmFjaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCIgPkVsaW1pbmFyPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JvdG9uRWxpbWluYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgey8qIGNhdGVnb3JpYSBjaHV6b3MqL31cclxuICAgICAgICAgICAge2NhdGVnb3JpYUNodXpvcy5sZW5ndGggPT09IDAgPyBudWxsIDogPEgyVGl0dWxvPkNodXpvczwvSDJUaXR1bG8+fVxyXG4gICAgICAgICAgICB7Y2F0ZWdvcmlhQ2h1em9zLm1hcChjaHV6byA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17Y2h1em8uaWR9IGNsYXNzTmFtZT1cImNhcmQgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NodXpvLmltYWdlbn0gY2xhc3NOYW1lPVwiY2FyZC1pbWdcIiBhbHQ9XCJpbWFnZW4gY2FybmVzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e2NodXpvLm5vbWJyZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57Y2h1em8uZGVzY3JpcGNpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFycmFmb1ByZWNpbyBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj48c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPiR7Y2h1em8ucHJlY2lvfTwvc21hbGw+PC9QYXJyYWZvUHJlY2lvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzdWFyaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbmdyZXNhckVuUGVkaWRvKGNodXpvLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgZm9ybS1jb250cm9sXCI+QWdyZWdhciBhIHR1IFBlZGlkbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FkbWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3RvbkVsaW1pbmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlY2liaXJJRChxYmFuby5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbW9kYWwtZWxpbWluYWNpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIiA+RWxpbWluYXI8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm90b25FbGltaW5hcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICB7LyogY2F0ZWdvcmlhIGFjb21wYcOxYW50ZXMgKi99XHJcbiAgICAgICAgICAgIHtjYXRlZ29yaWFBY29tcGHDsWFudGVzLmxlbmd0aCA9PT0gMCA/IG51bGwgOiA8SDJUaXR1bG8+QWNvbXBhw7FhbnRlczwvSDJUaXR1bG8+fVxyXG4gICAgICAgICAgICB7Y2F0ZWdvcmlhQWNvbXBhw7FhbnRlcy5tYXAoYWNvbXBhw7FhbnRlID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQga2V5PXthY29tcGHDsWFudGUuaWR9IGNsYXNzTmFtZT1cImNhcmQgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Fjb21wYcOxYW50ZS5pbWFnZW59IGNsYXNzTmFtZT1cImNhcmQtaW1nXCIgYWx0PVwiaW1hZ2VuIHBhdGFjb25lc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPnthY29tcGHDsWFudGUubm9tYnJlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPnthY29tcGHDsWFudGUuZGVzY3JpcGNpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFycmFmb1ByZWNpbyBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj48c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPiR7YWNvbXBhw7FhbnRlLnByZWNpb308L3NtYWxsPjwvUGFycmFmb1ByZWNpbz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c3VhcmlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaW5ncmVzYXJFblBlZGlkbyhhY29tcGHDsWFudGUuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBmb3JtLWNvbnRyb2xcIj5BZ3JlZ2FyIGEgdHUgUGVkaWRvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWRtaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdG9uRWxpbWluYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVjaWJpcklEKHBhcGFzY2hpcHMuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI21vZGFsLWVsaW1pbmFjaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCIgPkVsaW1pbmFyPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JvdG9uRWxpbWluYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICA8RGl2U2VwYXJhY2lvbj5cclxuXHJcbiAgICAgICAgICAgIDwvRGl2U2VwYXJhY2lvbj5cclxuXHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51OyJdLCJzb3VyY2VSb290IjoiIn0=