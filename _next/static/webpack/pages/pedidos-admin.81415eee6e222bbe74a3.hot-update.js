webpackHotUpdate_N_E("pages/pedidos-admin",{

/***/ "./pages/pedidos-admin.js":
/*!********************************!*\
  !*** ./pages/pedidos-admin.js ***!
  \********************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_useEliminarProducto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useEliminarProducto */ "./hooks/useEliminarProducto.js");



var _this = undefined,
    _jsxFileName = "D:\\PROYECTOS\\restaurante\\pages\\pedidos-admin.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    display: flex;\n    justify-content: flex-end;\n    font-size: 1.2rem;\n    margin: 2rem 0;\n    cursor: pointer;\n\n    small {\n        &:hover{\n            background-color: #343a40;\n            padding:0.2rem;\n            color: #fff!important;\n            border-radius: 5px;\n    }\n    }\n    \n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    height: 40px;\n    margin-top: 2rem;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    \n    li {\n        list-style: none;\n        border-bottom: 1px solid #e1e1e1;\n    }\n\n    .input {\n            margin-bottom: 0.5rem;\n            text-align: center;\n        }\n    \n    @media (min-width: 768px) {\n\n        margin: 5% 8rem;\n\n        .body-card {\n        align-items: center;\n        text-align: center;\n        display: flex;\n        flex-direction: column;\n        justify-content:center;\n        }\n    }\n\n    \n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    text-align: center;\n\n    @media (min-width: 768px) {\n        margin-top: 4%;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    @media (min-width: 768px) {\n        margin: 1% 8rem; \n        \n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\n    margin: 1rem;\n    font-weight: bold;\n    \n\n    @media (min-width: 768px) {\n        margin: 5% 8rem; \n        align-items: center;\n        text-align: center;\n        border: 1px solid #e1e1e1;\n        display: block;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    text-align: center;\n\n    @media (min-width: 768px) {\n        margin-top: 5%; \n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var CentrarH2 = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].h2(_templateObject());
_c = CentrarH2;
var BotonBuscar = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].p(_templateObject2());
_c2 = BotonBuscar;
var DivAcordeonBuscador = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3());
_c3 = DivAcordeonBuscador;
var AlertaSInProductos = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject4());
_c4 = AlertaSInProductos;
var Card = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject5());
_c5 = Card;
var DivSeparacion = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject6());
_c6 = DivSeparacion;
var BotonEliminar = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].p(_templateObject7());
_c7 = BotonEliminar;

var PedidoAdmin = function PedidoAdmin() {
  _s();

  //state de todos los pedidos
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      pedidos = _useState[0],
      gurdarPedidos = _useState[1]; //state para editar


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    tiempoentrega: '',
    estadopago: '',
    estadoentrega: ''
  }),
      modificarDatos = _useState2[0],
      guardarModificarDatos = _useState2[1]; // state abrir buscador


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      abrirBuscador = _useState3[0],
      guardarAbrirBuscador = _useState3[1]; // state del filtro de buscar


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    busquedageneral: '',
    estadoentrega: '',
    metodopago: ''
  }),
      filtroBusqueda = _useState4[0],
      guardarFiltroBusqueda = _useState4[1]; // state con los pedidos de la busqueda


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      resultadoBusqueda = _useState5[0],
      guardarResultadoBusqueda = _useState5[1]; // state de buscar


  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      buscar = _useState6[0],
      guardarBuscar = _useState6[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_firebase__WEBPACK_IMPORTED_MODULE_5__["FirebaseContext"]),
      firebase = _useContext.firebase,
      usuario = _useContext.usuario;

  var _useAdmin = Object(_hooks_useAdmin__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      admin = _useAdmin.admin; //utilizamos el use eliminar producto


  var _useEliminarProducto = Object(_hooks_useEliminarProducto__WEBPACK_IMPORTED_MODULE_8__["default"])(),
      productoEliminar = _useEliminarProducto.productoEliminar,
      guardarPedidoEliminar = _useEliminarProducto.guardarPedidoEliminar,
      guardarConfirmacionEliminarProducto = _useEliminarProducto.guardarConfirmacionEliminarProducto; //definimos el router


  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])(); //traer todos los pedidos

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var obtenerProductos = function obtenerProductos() {
      firebase.db.collection('totalpedidos').orderBy("fechapedido", "asc").onSnapshot(manejarSnapshot);
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
  } // filtrar las busquedas


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //busqueda general
    if (filtroBusqueda.busquedageneral === undefined) {} else {
      var buscarGeneralFn = function buscarGeneralFn() {
        var busqueda = filtroBusqueda.busquedageneral.toLowerCase();
        var resultado = pedidos.filter(function (pedido) {
          return pedido.promedioentrega.toLowerCase().includes(busqueda) || pedido.estadopago.toLowerCase().includes(busqueda) || pedido.metodopago.toLowerCase().includes(busqueda) || pedido.tipoentrega.toLowerCase().includes(busqueda) || pedido.clientedatos.nombre.toLowerCase().includes(busqueda) || pedido.estadoentrega.toLowerCase().includes(busqueda) || pedido.reference.toLowerCase().includes(busqueda);
        });
        guardarResultadoBusqueda(resultado);
      };

      buscarGeneralFn();
    }
  }, [filtroBusqueda, pedidos]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (filtroBusqueda.estadoentrega !== '' && filtroBusqueda.metodopago === undefined && filtroBusqueda.busquedageneral === undefined) {
      var busquedaEstadoEntregaFn = function busquedaEstadoEntregaFn() {
        var busqueda = filtroBusqueda.estadoentrega;
        var resultado = pedidos.filter(function (pedido) {
          return pedido.estadoentrega === busqueda;
        });
        guardarResultadoBusqueda(resultado);
      };

      busquedaEstadoEntregaFn();
    }
  }, [filtroBusqueda, pedidos]); //Editar campos

  var editarCampos = function editarCampos(id) {
    var editarPedido = firebase.db.collection("totalpedidos").doc(id);

    var editarTiempo = function editarTiempo() {
      if (modificarDatos.tiempoentrega === '') {
        return;
      } else {
        return editarPedido.update({
          promedioentrega: modificarDatos.tiempoentrega
        });
      }
    };

    editarTiempo();

    var editarEstadoPago = function editarEstadoPago() {
      if (modificarDatos.estadopago === '') {
        return;
      } else {
        return editarPedido.update({
          estadopago: modificarDatos.estadopago
        });
      }
    };

    editarEstadoPago();

    var editarEstadoEntrega = function editarEstadoEntrega() {
      if (modificarDatos.estadoentrega === '') {
        return;
      } else {
        return editarPedido.update({
          estadoentrega: modificarDatos.estadoentrega
        });
      }
    };

    editarEstadoEntrega();
  }; //recibir id a eliminar


  var recibirID = function recibirID(id) {
    console.log(id);
    guardarPedidoEliminar(id);
  }; //confirmamos eliminacion


  var confirmarProducto = function confirmarProducto() {
    guardarConfirmacionEliminarProducto(true);
  }; //cancelar eliminacion producto


  var cancelarConfirmarProducto = function cancelarConfirmarProducto() {
    guardarConfirmacionEliminarProducto(false);
    guardarPedidoEliminar('');
  }; //cerrar el modal


  var cerrarModal = function cerrarModal() {
    guardarConfirmacionEliminarProducto(false);
    guardarPedidoEliminar('');
  }; // abrir y cerrar el buscador


  var abrirBuscadorFn = function abrirBuscadorFn() {
    if (abrirBuscador) {
      guardarAbrirBuscador(false);
      guardarBuscar(false);
    } else {
      guardarAbrirBuscador(true);
      guardarBuscar(true);
    }
  };

  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 9
    }
  }, pedidos.length === 0 ? __jsx(AlertaSInProductos, {
    className: "card-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 37
    }
  }, "Aun no Hay Pedidos") : null, !admin ? null : __jsx(BotonBuscar, {
    onClick: function onClick() {
      return abrirBuscadorFn();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 19
    }
  }, "Buscar"), abrirBuscador ? __jsx(DivAcordeonBuscador, {
    className: "accordion ",
    id: "accordionExample",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "card-header",
    id: "headingOne",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 25
    }
  }, __jsx("h2", {
    className: "mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 29
    }
  }, __jsx("button", {
    className: "btn btn-link btn-block text-left",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapseOne",
    "aria-expanded": "true",
    "aria-controls": "collapseOne",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 33
    }
  }, "Buscar en Todo"))), __jsx("div", {
    id: "collapseOne",
    className: "collapse show",
    "aria-labelledby": "headingOne",
    "data-parent": "#accordionExample",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 29
    }
  }, __jsx("input", {
    name: "busquedageneral",
    onChange: function onChange(e) {
      return guardarFiltroBusqueda(_objectSpread(_objectSpread({}, modificarDatos), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
    },
    className: "form-control input",
    placeholder: "Buscar en general",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 33
    }
  })))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "card-header",
    id: "headingTwo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 25
    }
  }, __jsx("h2", {
    className: "mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 29
    }
  }, __jsx("button", {
    className: "btn btn-link btn-block text-left collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapseTwo",
    "aria-expanded": "false",
    "aria-controls": "collapseTwo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 33
    }
  }, "Buscar por estado de entrega"))), __jsx("div", {
    id: "collapseTwo",
    className: "collapse",
    "aria-labelledby": "headingTwo",
    "data-parent": "#accordionExample",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 29
    }
  }, __jsx("select", {
    type: "text",
    name: "estadoentrega",
    className: "form-control input",
    onChange: function onChange(e) {
      return guardarFiltroBusqueda(_objectSpread(_objectSpread({}, modificarDatos), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 33
    }
  }, __jsx("option", {
    value: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 37
    }
  }, "Estado de entrega"), __jsx("option", {
    value: "pendiente",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 37
    }
  }, "Pendiente"), __jsx("option", {
    value: "en proceso",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 37
    }
  }, "En Proceso"), __jsx("option", {
    value: "entregado",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 37
    }
  }, "Entregado"), __jsx("option", {
    value: "cancelado",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 37
    }
  }, "Cancelado")))))) : null, buscar ? __jsx(Card, {
    className: "card bg-light mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 19
    }
  }, resultadoBusqueda.map(function (pedido) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, pedido.estadoentrega === 'entregado' ? __jsx("div", {
      className: "alert alert-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 35
      }
    }, "Pedido Entregado") : null, pedido.estadoentrega === 'pendiente' ? __jsx("div", {
      className: "alert alert-warning",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 35
      }
    }, "Pedido Pendiente") : null, pedido.estadoentrega === 'cancelado' ? __jsx("div", {
      className: "alert alert-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 35
      }
    }, "Pedido Cancelado") : null, pedido.estadoentrega === 'en proceso' ? __jsx("div", {
      className: "alert alert-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 35
      }
    }, "Pedido En Proceso") : null, __jsx("div", {
      className: "card-body body-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 29
      }
    }, __jsx("h5", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 33
      }
    }, "Referencia: ", pedido.reference, " "), __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 33
      }
    }, "Tiempo Estimado de Entrega: ", pedido.promedioentrega, " "), __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389,
        columnNumber: 33
      }
    }, "Tipo de Entrega: ", pedido.tipoentrega, " "), __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 33
      }
    }, "Metodo de Pago: ", pedido.metodopago, " "), pedido.estadopago === 'pendiente' ? __jsx("h6", {
      className: "card-title alert alert-warning",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 70
      }
    }, "Estado del Pago: ", pedido.estadopago, " ") : null, pedido.estadopago === 'pagado' ? __jsx("h6", {
      className: "card-title alert alert-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 67
      }
    }, "Estado del Pago: ", pedido.estadopago, " ") : null, pedido.estadopago === 'rechazado' ? __jsx("h6", {
      className: "card-title alert alert-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 70
      }
    }, "Estado del Pago: ", pedido.estadopago, " ") : null, pedido.observaciones.observacion === '' ? null : __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 83
      }
    }, "Observaciones del Pedido: ", pedido.observaciones.observacion, " "), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 33
      }
    }, __jsx("button", {
      className: "btn btn-primary",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#ver-productos",
      "aria-expanded": "false",
      "aria-controls": "collapseExample",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 37
      }
    }, "Ver Productos")), __jsx("div", {
      "class": "collapse",
      id: "ver-productos",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 33
      }
    }, __jsx("div", {
      "class": "card card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407,
        columnNumber: 37
      }
    }, pedido.productos.map(function (producto) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 45
        }
      }, __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 49
        }
      }, "Nombre: ", producto.nombre), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 49
        }
      }, "Cantidad: ", producto.cantidad));
    }))), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 33
      }
    }, "Valor del Pedido: $", pedido.preciofinal), __jsx("div", {
      "class": "card card-body my-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 33
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 37
      }
    }, "Datos del Cliente"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 37
      }
    }, "Nombre: ", pedido.clientedatos.nombre), pedido.clientedatos.numero === undefined || pedido.clientedatos.direccion === undefined ? null : __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428,
        columnNumber: 43
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 45
      }
    }, "Numero: ", pedido.clientedatos.numero), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 45
      }
    }, "Cantidad: ", pedido.clientedatos.direccion))), __jsx("div", {
      "class": "card card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436,
        columnNumber: 33
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437,
        columnNumber: 37
      }
    }, "Editar Datos"), __jsx("input", {
      name: "tiempoentrega",
      onChange: function onChange(e) {
        return guardarModificarDatos(_objectSpread(_objectSpread({}, modificarDatos), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
      },
      className: "form-control input",
      placeholder: "Tiempo Entrega",
      type: "text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438,
        columnNumber: 37
      }
    }), __jsx("select", {
      type: "text",
      name: "estadopago",
      className: "form-control input",
      onChange: function onChange(e) {
        return guardarModificarDatos(_objectSpread(_objectSpread({}, modificarDatos), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 37
      }
    }, __jsx("option", {
      value: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 450,
        columnNumber: 41
      }
    }, "Estado de pago"), __jsx("option", {
      value: "pendiente",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451,
        columnNumber: 41
      }
    }, "Pendiente"), __jsx("option", {
      value: "pagado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 452,
        columnNumber: 41
      }
    }, "Pagado"), __jsx("option", {
      value: "rechazado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453,
        columnNumber: 41
      }
    }, "Rechazado")), __jsx("select", {
      type: "text",
      name: "estadoentrega",
      className: "form-control input",
      onChange: function onChange(e) {
        return guardarModificarDatos(_objectSpread(_objectSpread({}, modificarDatos), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457,
        columnNumber: 37
      }
    }, __jsx("option", {
      value: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462,
        columnNumber: 41
      }
    }, "Estado de entrega"), __jsx("option", {
      value: "pendiente",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 463,
        columnNumber: 41
      }
    }, "Pendiente"), __jsx("option", {
      value: "en proceso",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464,
        columnNumber: 41
      }
    }, "En Proceso"), __jsx("option", {
      value: "entregado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465,
        columnNumber: 41
      }
    }, "Entregado"), __jsx("option", {
      value: "cancelado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 466,
        columnNumber: 41
      }
    }, "Cancelado")), __jsx("button", {
      "class": "btn btn-primary",
      onClick: function onClick() {
        return editarCampos(pedido.idtotalpedidos);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470,
        columnNumber: 37
      }
    }, " Editar"))), admin ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(BotonEliminar, {
      onClick: function onClick() {
        return recibirID(pedido.idtotalpedidos);
      },
      className: "card-text",
      type: "button",
      "data-toggle": "modal",
      "data-target": "#modal-eliminacion",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 478,
        columnNumber: 37
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 484,
        columnNumber: 41
      }
    }, "Eliminar")), __jsx("div", {
      className: "modal fade",
      id: "modal-eliminacion",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 488,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "modal-dialog",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 489,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "modal-content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 490,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: "modal-header",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 491,
        columnNumber: 49
      }
    }, __jsx("h5", {
      className: "modal-title",
      id: "exampleModalLabel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 492,
        columnNumber: 53
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
        lineNumber: 493,
        columnNumber: 53
      }
    }, __jsx("span", {
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494,
        columnNumber: 57
      }
    }, "\xD7"))), __jsx("div", {
      className: "modal-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497,
        columnNumber: 49
      }
    }, "Realmente desea Eliminar este Producto?"), __jsx("div", {
      className: "modal-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 500,
        columnNumber: 49
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
        lineNumber: 501,
        columnNumber: 53
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
        lineNumber: 502,
        columnNumber: 53
      }
    }, "Eliminar")))))) : null);
  })) : null, !admin ? __jsx(CentrarH2, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 23
    }
  }, "No tienes Permiso de Estar aqui") : null, !admin || buscar ? null : __jsx(Card, {
    className: "card bg-light mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 19
    }
  }, pedidos.map(function (pedido) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, pedido.estadoentrega === 'entregado' ? __jsx("div", {
      className: "alert alert-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 525,
        columnNumber: 35
      }
    }, "Pedido Entregado") : null, pedido.estadoentrega === 'pendiente' ? __jsx("div", {
      className: "alert alert-warning",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 530,
        columnNumber: 35
      }
    }, "Pedido Pendiente") : null, pedido.estadoentrega === 'cancelado' ? __jsx("div", {
      className: "alert alert-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 535,
        columnNumber: 35
      }
    }, "Pedido Cancelado") : null, pedido.estadoentrega === 'en proceso' ? __jsx("div", {
      className: "alert alert-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 540,
        columnNumber: 35
      }
    }, "Pedido En Proceso") : null, __jsx("div", {
      className: "card-body body-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 544,
        columnNumber: 29
      }
    }, __jsx("h5", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 545,
        columnNumber: 33
      }
    }, "Referencia: ", pedido.reference, " "), __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 546,
        columnNumber: 33
      }
    }, "Tiempo Estimado de Entrega: ", pedido.promedioentrega, " "), __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 547,
        columnNumber: 33
      }
    }, "Tipo de Entrega: ", pedido.tipoentrega, " "), __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 548,
        columnNumber: 33
      }
    }, "Metodo de Pago: ", pedido.metodopago, " "), pedido.estadopago === 'pendiente' ? __jsx("h6", {
      className: "card-title alert alert-warning",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 550,
        columnNumber: 70
      }
    }, "Estado del Pago: ", pedido.estadopago, " ") : null, pedido.estadopago === 'pagado' ? __jsx("h6", {
      className: "card-title alert alert-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 551,
        columnNumber: 67
      }
    }, "Estado del Pago: ", pedido.estadopago, " ") : null, pedido.estadopago === 'rechazado' ? __jsx("h6", {
      className: "card-title alert alert-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 552,
        columnNumber: 70
      }
    }, "Estado del Pago: ", pedido.estadopago, " ") : null, pedido.observaciones.observacion === '' ? null : __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 555,
        columnNumber: 83
      }
    }, "Observaciones del Pedido: ", pedido.observaciones.observacion, " "), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 557,
        columnNumber: 33
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
        lineNumber: 559,
        columnNumber: 37
      }
    }, "Ver Productos")), __jsx("div", {
      "class": "collapse",
      id: "ver-productos",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 564,
        columnNumber: 33
      }
    }, __jsx("div", {
      "class": "card card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 565,
        columnNumber: 37
      }
    }, pedido.productos.map(function (producto) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567,
          columnNumber: 45
        }
      }, __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568,
          columnNumber: 49
        }
      }, "Nombre: ", producto.nombre), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569,
          columnNumber: 49
        }
      }, "Cantidad: ", producto.cantidad));
    }))), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 578,
        columnNumber: 33
      }
    }, "Valor del Pedido: $", pedido.preciofinal), __jsx("div", {
      "class": "card card-body my-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 580,
        columnNumber: 33
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 581,
        columnNumber: 37
      }
    }, "Datos del Cliente"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 582,
        columnNumber: 37
      }
    }, "Nombre: ", pedido.clientedatos.nombre), pedido.clientedatos.numero === undefined || pedido.clientedatos.direccion === undefined ? null : __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 586,
        columnNumber: 43
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 587,
        columnNumber: 45
      }
    }, "Numero: ", pedido.clientedatos.numero), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 588,
        columnNumber: 45
      }
    }, "Cantidad: ", pedido.clientedatos.direccion))), __jsx("div", {
      "class": "card card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 594,
        columnNumber: 33
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 595,
        columnNumber: 37
      }
    }, "Editar Datos"), __jsx("input", {
      name: "tiempoentrega",
      onChange: function onChange(e) {
        return guardarModificarDatos(_objectSpread(_objectSpread({}, modificarDatos), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
      },
      className: "form-control input",
      placeholder: "Tiempo Entrega",
      type: "text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 596,
        columnNumber: 37
      }
    }), __jsx("select", {
      type: "text",
      name: "estadopago",
      className: "form-control input",
      onChange: function onChange(e) {
        return guardarModificarDatos(_objectSpread(_objectSpread({}, modificarDatos), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 603,
        columnNumber: 37
      }
    }, __jsx("option", {
      value: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 608,
        columnNumber: 41
      }
    }, "Estado de pago"), __jsx("option", {
      value: "pendiente",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 609,
        columnNumber: 41
      }
    }, "Pendiente"), __jsx("option", {
      value: "pagado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 610,
        columnNumber: 41
      }
    }, "Pagado"), __jsx("option", {
      value: "rechazado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 611,
        columnNumber: 41
      }
    }, "Rechazado")), __jsx("select", {
      type: "text",
      name: "estadoentrega",
      className: "form-control input",
      onChange: function onChange(e) {
        return guardarModificarDatos(_objectSpread(_objectSpread({}, modificarDatos), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 615,
        columnNumber: 37
      }
    }, __jsx("option", {
      value: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 620,
        columnNumber: 41
      }
    }, "Estado de entrega"), __jsx("option", {
      value: "pendiente",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 621,
        columnNumber: 41
      }
    }, "Pendiente"), __jsx("option", {
      value: "en proceso",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 622,
        columnNumber: 41
      }
    }, "En Proceso"), __jsx("option", {
      value: "entregado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 623,
        columnNumber: 41
      }
    }, "Entregado"), __jsx("option", {
      value: "cancelado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 624,
        columnNumber: 41
      }
    }, "Cancelado")), __jsx("button", {
      "class": "btn btn-primary",
      onClick: function onClick() {
        return editarCampos(pedido.idtotalpedidos);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 628,
        columnNumber: 37
      }
    }, " Editar"))), admin ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(BotonEliminar, {
      onClick: function onClick() {
        return recibirID(pedido.idtotalpedidos);
      },
      className: "card-text",
      type: "button",
      "data-toggle": "modal",
      "data-target": "#modal-eliminacion",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 636,
        columnNumber: 37
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 642,
        columnNumber: 41
      }
    }, "Eliminar")), __jsx("div", {
      className: "modal fade",
      id: "modal-eliminacion",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 646,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "modal-dialog",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 647,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "modal-content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 648,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: "modal-header",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 649,
        columnNumber: 49
      }
    }, __jsx("h5", {
      className: "modal-title",
      id: "exampleModalLabel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 650,
        columnNumber: 53
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
        lineNumber: 651,
        columnNumber: 53
      }
    }, __jsx("span", {
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 652,
        columnNumber: 57
      }
    }, "\xD7"))), __jsx("div", {
      className: "modal-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 655,
        columnNumber: 49
      }
    }, "Realmente desea Eliminar este Producto?"), __jsx("div", {
      className: "modal-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 658,
        columnNumber: 49
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
        lineNumber: 659,
        columnNumber: 53
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
        lineNumber: 660,
        columnNumber: 53
      }
    }, "Eliminar")))))) : null);
  })), __jsx(DivSeparacion, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 13
    }
  }));
};

_s(PedidoAdmin, "SH2hkcmiic4s66QvtFQHgtBKq/Q=", false, function () {
  return [_hooks_useAdmin__WEBPACK_IMPORTED_MODULE_6__["default"], _hooks_useEliminarProducto__WEBPACK_IMPORTED_MODULE_8__["default"], next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c8 = PedidoAdmin;
/* harmony default export */ __webpack_exports__["default"] = (PedidoAdmin);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "CentrarH2");
$RefreshReg$(_c2, "BotonBuscar");
$RefreshReg$(_c3, "DivAcordeonBuscador");
$RefreshReg$(_c4, "AlertaSInProductos");
$RefreshReg$(_c5, "Card");
$RefreshReg$(_c6, "DivSeparacion");
$RefreshReg$(_c7, "BotonEliminar");
$RefreshReg$(_c8, "PedidoAdmin");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGVkaWRvcy1hZG1pbi5qcyJdLCJuYW1lcyI6WyJDZW50cmFySDIiLCJzdHlsZWQiLCJoMiIsIkJvdG9uQnVzY2FyIiwicCIsIkRpdkFjb3JkZW9uQnVzY2Fkb3IiLCJkaXYiLCJBbGVydGFTSW5Qcm9kdWN0b3MiLCJDYXJkIiwiRGl2U2VwYXJhY2lvbiIsIkJvdG9uRWxpbWluYXIiLCJQZWRpZG9BZG1pbiIsInVzZVN0YXRlIiwicGVkaWRvcyIsImd1cmRhclBlZGlkb3MiLCJ0aWVtcG9lbnRyZWdhIiwiZXN0YWRvcGFnbyIsImVzdGFkb2VudHJlZ2EiLCJtb2RpZmljYXJEYXRvcyIsImd1YXJkYXJNb2RpZmljYXJEYXRvcyIsImFicmlyQnVzY2Fkb3IiLCJndWFyZGFyQWJyaXJCdXNjYWRvciIsImJ1c3F1ZWRhZ2VuZXJhbCIsIm1ldG9kb3BhZ28iLCJmaWx0cm9CdXNxdWVkYSIsImd1YXJkYXJGaWx0cm9CdXNxdWVkYSIsInJlc3VsdGFkb0J1c3F1ZWRhIiwiZ3VhcmRhclJlc3VsdGFkb0J1c3F1ZWRhIiwiYnVzY2FyIiwiZ3VhcmRhckJ1c2NhciIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJmaXJlYmFzZSIsInVzdWFyaW8iLCJ1c2VBZG1pbiIsImFkbWluIiwidXNlRWxpbWluYXJQcm9kdWN0byIsInByb2R1Y3RvRWxpbWluYXIiLCJndWFyZGFyUGVkaWRvRWxpbWluYXIiLCJndWFyZGFyQ29uZmlybWFjaW9uRWxpbWluYXJQcm9kdWN0byIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIm9idGVuZXJQcm9kdWN0b3MiLCJkYiIsImNvbGxlY3Rpb24iLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsIm1hbmVqYXJTbmFwc2hvdCIsInNuYXBzaG90IiwicGVkaWRvIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkdG90YWxwZWRpZG9zIiwiaWQiLCJkYXRhIiwidW5kZWZpbmVkIiwiYnVzY2FyR2VuZXJhbEZuIiwiYnVzcXVlZGEiLCJ0b0xvd2VyQ2FzZSIsInJlc3VsdGFkbyIsImZpbHRlciIsInByb21lZGlvZW50cmVnYSIsImluY2x1ZGVzIiwidGlwb2VudHJlZ2EiLCJjbGllbnRlZGF0b3MiLCJub21icmUiLCJyZWZlcmVuY2UiLCJidXNxdWVkYUVzdGFkb0VudHJlZ2FGbiIsImVkaXRhckNhbXBvcyIsImVkaXRhclBlZGlkbyIsImVkaXRhclRpZW1wbyIsInVwZGF0ZSIsImVkaXRhckVzdGFkb1BhZ28iLCJlZGl0YXJFc3RhZG9FbnRyZWdhIiwicmVjaWJpcklEIiwiY29uc29sZSIsImxvZyIsImNvbmZpcm1hclByb2R1Y3RvIiwiY2FuY2VsYXJDb25maXJtYXJQcm9kdWN0byIsImNlcnJhck1vZGFsIiwiYWJyaXJCdXNjYWRvckZuIiwibGVuZ3RoIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIm9ic2VydmFjaW9uZXMiLCJvYnNlcnZhY2lvbiIsInByb2R1Y3RvcyIsInByb2R1Y3RvIiwiY2FudGlkYWQiLCJwcmVjaW9maW5hbCIsIm51bWVybyIsImRpcmVjY2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHVEQUFNLENBQUNDLEVBQVYsbUJBQWY7S0FBTUYsUztBQVFOLElBQU1HLFdBQVcsR0FBR0YsdURBQU0sQ0FBQ0csQ0FBVixvQkFBakI7TUFBTUQsVztBQWVOLElBQU1FLG1CQUFtQixHQUFHSix1REFBTSxDQUFDSyxHQUFWLG9CQUF6QjtNQUFNRCxtQjtBQU9OLElBQU1FLGtCQUFrQixHQUFHTix1REFBTSxDQUFDSyxHQUFWLG9CQUF4QjtNQUFNQyxrQjtBQVFOLElBQU1DLElBQUksR0FBR1AsdURB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VztVQThCZ0J1Qix1RCxFQUd1RUUsa0UsRUFHMUVLLHFEOzs7TUFwQ2I5QixXO0FBc2tCU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGVkaWRvcy1hZG1pbi44MTQxNWVlZTZlMjIyYmJlNzRhMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IHsgRmlyZWJhc2VDb250ZXh0IH0gZnJvbSAnLi4vZmlyZWJhc2UnXHJcbmltcG9ydCB1c2VBZG1pbiBmcm9tICcuLi9ob29rcy91c2VBZG1pbidcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHVzZUVsaW1pbmFyUHJvZHVjdG8gZnJvbSAnLi4vaG9va3MvdXNlRWxpbWluYXJQcm9kdWN0bydcclxuXHJcbmNvbnN0IENlbnRyYXJIMiA9IHN0eWxlZC5oMmBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTsgXHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IEJvdG9uQnVzY2FyID0gc3R5bGVkLnBgXHJcblxyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBtYXJnaW46IDUlIDhyZW07IFxyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IERpdkFjb3JkZW9uQnVzY2Fkb3IgPSBzdHlsZWQuZGl2YFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWFyZ2luOiAxJSA4cmVtOyBcclxuICAgICAgICBcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgQWxlcnRhU0luUHJvZHVjdG9zID0gc3R5bGVkLmRpdmBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgICBcclxuICAgIGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gICAgICAgIG1hcmdpbjogNSUgOHJlbTtcclxuXHJcbiAgICAgICAgLmJvZHktY2FyZCB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5gXHJcblxyXG5jb25zdCBEaXZTZXBhcmFjaW9uID0gc3R5bGVkLmRpdmBcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbmBcclxuY29uc3QgQm90b25FbGltaW5hciA9IHN0eWxlZC5wYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIHNtYWxsIHtcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjAuMnJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuYFxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgUGVkaWRvQWRtaW4gPSAoKSA9PiB7XHJcblxyXG4gICAgLy9zdGF0ZSBkZSB0b2RvcyBsb3MgcGVkaWRvc1xyXG4gICAgY29uc3QgW3BlZGlkb3MsIGd1cmRhclBlZGlkb3NdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgLy9zdGF0ZSBwYXJhIGVkaXRhclxyXG4gICAgY29uc3QgW21vZGlmaWNhckRhdG9zLCBndWFyZGFyTW9kaWZpY2FyRGF0b3NdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHRpZW1wb2VudHJlZ2E6ICcnLFxyXG4gICAgICAgIGVzdGFkb3BhZ286ICcnLFxyXG4gICAgICAgIGVzdGFkb2VudHJlZ2E6ICcnXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIHN0YXRlIGFicmlyIGJ1c2NhZG9yXHJcbiAgICBjb25zdCBbYWJyaXJCdXNjYWRvciwgZ3VhcmRhckFicmlyQnVzY2Fkb3JdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cclxuICAgIC8vIHN0YXRlIGRlbCBmaWx0cm8gZGUgYnVzY2FyXHJcbiAgICBjb25zdCBbZmlsdHJvQnVzcXVlZGEsIGd1YXJkYXJGaWx0cm9CdXNxdWVkYV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgYnVzcXVlZGFnZW5lcmFsOiAnJyxcclxuICAgICAgICBlc3RhZG9lbnRyZWdhOiAnJyxcclxuICAgICAgICBtZXRvZG9wYWdvOiAnJ1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyBzdGF0ZSBjb24gbG9zIHBlZGlkb3MgZGUgbGEgYnVzcXVlZGFcclxuICAgIGNvbnN0IFtyZXN1bHRhZG9CdXNxdWVkYSwgZ3VhcmRhclJlc3VsdGFkb0J1c3F1ZWRhXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIC8vIHN0YXRlIGRlIGJ1c2NhclxyXG4gICAgY29uc3QgW2J1c2NhciwgZ3VhcmRhckJ1c2Nhcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCB7IGZpcmViYXNlLCB1c3VhcmlvIH0gPSB1c2VDb250ZXh0KEZpcmViYXNlQ29udGV4dClcclxuICAgIGNvbnN0IHsgYWRtaW4gfSA9IHVzZUFkbWluKClcclxuXHJcbiAgICAvL3V0aWxpemFtb3MgZWwgdXNlIGVsaW1pbmFyIHByb2R1Y3RvXHJcbiAgICBjb25zdCB7IHByb2R1Y3RvRWxpbWluYXIsIGd1YXJkYXJQZWRpZG9FbGltaW5hciwgZ3VhcmRhckNvbmZpcm1hY2lvbkVsaW1pbmFyUHJvZHVjdG8gfSA9IHVzZUVsaW1pbmFyUHJvZHVjdG8oKVxyXG5cclxuICAgIC8vZGVmaW5pbW9zIGVsIHJvdXRlclxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy90cmFlciB0b2RvcyBsb3MgcGVkaWRvc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnRlbmVyUHJvZHVjdG9zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCd0b3RhbHBlZGlkb3MnKS5vcmRlckJ5KFwiZmVjaGFwZWRpZG9cIiwgXCJhc2NcIikub25TbmFwc2hvdChtYW5lamFyU25hcHNob3QpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvYnRlbmVyUHJvZHVjdG9zKClcclxuXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBmdW5jdGlvbiBtYW5lamFyU25hcHNob3Qoc25hcHNob3QpIHtcclxuICAgICAgICBjb25zdCBwZWRpZG8gPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaWR0b3RhbHBlZGlkb3M6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZ3VyZGFyUGVkaWRvcyhwZWRpZG8pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIGZpbHRyYXIgbGFzIGJ1c3F1ZWRhc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgLy9idXNxdWVkYSBnZW5lcmFsXHJcbiAgICAgICAgaWYgKGZpbHRyb0J1c3F1ZWRhLmJ1c3F1ZWRhZ2VuZXJhbCA9PT0gdW5kZWZpbmVkKSB7XHJcblxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBidXNjYXJHZW5lcmFsRm4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidXNxdWVkYSA9IGZpbHRyb0J1c3F1ZWRhLmJ1c3F1ZWRhZ2VuZXJhbC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBwZWRpZG9zLmZpbHRlcihwZWRpZG8gPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZWRpZG8ucHJvbWVkaW9lbnRyZWdhLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYnVzcXVlZGEpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlZGlkby5lc3RhZG9wYWdvLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYnVzcXVlZGEpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlZGlkby5tZXRvZG9wYWdvLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYnVzcXVlZGEpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlZGlkby50aXBvZW50cmVnYS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ1c3F1ZWRhKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZWRpZG8uY2xpZW50ZWRhdG9zLm5vbWJyZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ1c3F1ZWRhKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZWRpZG8uZXN0YWRvZW50cmVnYS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ1c3F1ZWRhKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZWRpZG8ucmVmZXJlbmNlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYnVzcXVlZGEpXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgZ3VhcmRhclJlc3VsdGFkb0J1c3F1ZWRhKHJlc3VsdGFkbylcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXNjYXJHZW5lcmFsRm4oKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbZmlsdHJvQnVzcXVlZGEsIHBlZGlkb3NdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZpbHRyb0J1c3F1ZWRhLmVzdGFkb2VudHJlZ2EgIT09ICcnICYmIGZpbHRyb0J1c3F1ZWRhLm1ldG9kb3BhZ28gPT09IHVuZGVmaW5lZCAmJiBmaWx0cm9CdXNxdWVkYS5idXNxdWVkYWdlbmVyYWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBidXNxdWVkYUVzdGFkb0VudHJlZ2FGbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1c3F1ZWRhID0gZmlsdHJvQnVzcXVlZGEuZXN0YWRvZW50cmVnYVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gcGVkaWRvcy5maWx0ZXIocGVkaWRvID0+IHBlZGlkby5lc3RhZG9lbnRyZWdhID09PSBidXNxdWVkYSlcclxuXHJcbiAgICAgICAgICAgICAgICBndWFyZGFyUmVzdWx0YWRvQnVzcXVlZGEocmVzdWx0YWRvKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXNxdWVkYUVzdGFkb0VudHJlZ2FGbigpXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfSwgW2ZpbHRyb0J1c3F1ZWRhLCBwZWRpZG9zXSlcclxuXHJcblxyXG5cclxuICAgIC8vRWRpdGFyIGNhbXBvc1xyXG4gICAgY29uc3QgZWRpdGFyQ2FtcG9zID0gaWQgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBlZGl0YXJQZWRpZG8gPSBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwidG90YWxwZWRpZG9zXCIpLmRvYyhpZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVkaXRhclRpZW1wbyA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1vZGlmaWNhckRhdG9zLnRpZW1wb2VudHJlZ2EgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlZGl0YXJQZWRpZG8udXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9tZWRpb2VudHJlZ2E6IG1vZGlmaWNhckRhdG9zLnRpZW1wb2VudHJlZ2FcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlZGl0YXJUaWVtcG8oKVxyXG5cclxuICAgICAgICBjb25zdCBlZGl0YXJFc3RhZG9QYWdvID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobW9kaWZpY2FyRGF0b3MuZXN0YWRvcGFnbyA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRhclBlZGlkby51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVzdGFkb3BhZ286IG1vZGlmaWNhckRhdG9zLmVzdGFkb3BhZ29cclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWRpdGFyRXN0YWRvUGFnbygpXHJcblxyXG4gICAgICAgIGNvbnN0IGVkaXRhckVzdGFkb0VudHJlZ2EgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtb2RpZmljYXJEYXRvcy5lc3RhZG9lbnRyZWdhID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWRpdGFyUGVkaWRvLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXN0YWRvZW50cmVnYTogbW9kaWZpY2FyRGF0b3MuZXN0YWRvZW50cmVnYVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVkaXRhckVzdGFkb0VudHJlZ2EoKVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy9yZWNpYmlyIGlkIGEgZWxpbWluYXJcclxuICAgIGNvbnN0IHJlY2liaXJJRCA9IGlkID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpZClcclxuICAgICAgICBndWFyZGFyUGVkaWRvRWxpbWluYXIoaWQpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vY29uZmlybWFtb3MgZWxpbWluYWNpb25cclxuICAgIGNvbnN0IGNvbmZpcm1hclByb2R1Y3RvID0gKCkgPT4ge1xyXG4gICAgICAgIGd1YXJkYXJDb25maXJtYWNpb25FbGltaW5hclByb2R1Y3RvKHRydWUpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vY2FuY2VsYXIgZWxpbWluYWNpb24gcHJvZHVjdG9cclxuICAgIGNvbnN0IGNhbmNlbGFyQ29uZmlybWFyUHJvZHVjdG8gPSAoKSA9PiB7XHJcbiAgICAgICAgZ3VhcmRhckNvbmZpcm1hY2lvbkVsaW1pbmFyUHJvZHVjdG8oZmFsc2UpXHJcbiAgICAgICAgZ3VhcmRhclBlZGlkb0VsaW1pbmFyKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIC8vY2VycmFyIGVsIG1vZGFsXHJcbiAgICBjb25zdCBjZXJyYXJNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBndWFyZGFyQ29uZmlybWFjaW9uRWxpbWluYXJQcm9kdWN0byhmYWxzZSlcclxuICAgICAgICBndWFyZGFyUGVkaWRvRWxpbWluYXIoJycpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWJyaXIgeSBjZXJyYXIgZWwgYnVzY2Fkb3JcclxuICAgIGNvbnN0IGFicmlyQnVzY2Fkb3JGbiA9ICgpID0+IHtcclxuICAgICAgICBpZiAoYWJyaXJCdXNjYWRvcikge1xyXG4gICAgICAgICAgICBndWFyZGFyQWJyaXJCdXNjYWRvcihmYWxzZSlcclxuICAgICAgICAgICAgZ3VhcmRhckJ1c2NhcihmYWxzZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBndWFyZGFyQWJyaXJCdXNjYWRvcih0cnVlKVxyXG4gICAgICAgICAgICBndWFyZGFyQnVzY2FyKHRydWUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICB7cGVkaWRvcy5sZW5ndGggPT09IDAgPyA8QWxlcnRhU0luUHJvZHVjdG9zIGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+QXVuIG5vIEhheSBQZWRpZG9zPC9BbGVydGFTSW5Qcm9kdWN0b3M+IDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgIHsvKiBlbCBib3RvbiBidXNjYXIgYXBhcmVjZSBjdWFuZG8gaGF5IHVuIGFkbWluICovfVxyXG4gICAgICAgICAgICB7IWFkbWluXHJcbiAgICAgICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgICAgIDogPEJvdG9uQnVzY2FyIG9uQ2xpY2s9eygpID0+IGFicmlyQnVzY2Fkb3JGbigpfT5CdXNjYXI8L0JvdG9uQnVzY2FyPlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7LyogZmlsdHJvcyBkZSBidXNxdWVkYXMgKi99XHJcbiAgICAgICAgICAgIHthYnJpckJ1c2NhZG9yXHJcbiAgICAgICAgICAgICAgICA/IDxEaXZBY29yZGVvbkJ1c2NhZG9yIGNsYXNzTmFtZT1cImFjY29yZGlvbiBcIiBpZD1cImFjY29yZGlvbkV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiIGlkPVwiaGVhZGluZ09uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBidG4tYmxvY2sgdGV4dC1sZWZ0XCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZU9uZVwiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlT25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1c2NhciBlbiBUb2RvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb2xsYXBzZU9uZVwiIGNsYXNzTmFtZT1cImNvbGxhcHNlIHNob3dcIiBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nT25lXCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uRXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJ1c3F1ZWRhZ2VuZXJhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGd1YXJkYXJGaWx0cm9CdXNxdWVkYSh7IC4uLm1vZGlmaWNhckRhdG9zLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1c2NhciBlbiBnZW5lcmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCIgaWQ9XCJoZWFkaW5nVHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIGJ0bi1ibG9jayB0ZXh0LWxlZnQgY29sbGFwc2VkXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZVR3b1wiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZVR3b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCdXNjYXIgcG9yIGVzdGFkbyBkZSBlbnRyZWdhXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29sbGFwc2VUd29cIiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdUd29cIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25FeGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZXN0YWRvZW50cmVnYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGd1YXJkYXJGaWx0cm9CdXNxdWVkYSh7IC4uLm1vZGlmaWNhckRhdG9zLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkVzdGFkbyBkZSBlbnRyZWdhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwZW5kaWVudGVcIj5QZW5kaWVudGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVuIHByb2Nlc29cIj5FbiBQcm9jZXNvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlbnRyZWdhZG9cIj5FbnRyZWdhZG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNhbmNlbGFkb1wiPkNhbmNlbGFkbzwvb3B0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0RpdkFjb3JkZW9uQnVzY2Fkb3I+XHJcbiAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHsvKiBlbCByZXN1bHRhZG8gZGUgbGEgYnVzcXVlZGEgYXBhcmVjZSBjdWFuZG8gc2UgbGUgZGEgY2xpY2sgKi99XHJcbiAgICAgICAgICAgIHtidXNjYXJcclxuICAgICAgICAgICAgICAgID8gPENhcmQgY2xhc3NOYW1lPVwiY2FyZCBiZy1saWdodCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Jlc3VsdGFkb0J1c3F1ZWRhLm1hcChwZWRpZG8gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlZGlkby5lc3RhZG9lbnRyZWdhID09PSAnZW50cmVnYWRvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCIgPlBlZGlkbyBFbnRyZWdhZG88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLmVzdGFkb2VudHJlZ2EgPT09ICdwZW5kaWVudGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIiA+UGVkaWRvIFBlbmRpZW50ZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8uZXN0YWRvZW50cmVnYSA9PT0gJ2NhbmNlbGFkbydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgPlBlZGlkbyBDYW5jZWxhZG88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLmVzdGFkb2VudHJlZ2EgPT09ICdlbiBwcm9jZXNvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1wcmltYXJ5XCIgPlBlZGlkbyBFbiBQcm9jZXNvPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYm9keS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5SZWZlcmVuY2lhOiB7cGVkaWRvLnJlZmVyZW5jZX0gPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlRpZW1wbyBFc3RpbWFkbyBkZSBFbnRyZWdhOiB7cGVkaWRvLnByb21lZGlvZW50cmVnYX0gPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlRpcG8gZGUgRW50cmVnYToge3BlZGlkby50aXBvZW50cmVnYX0gPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPk1ldG9kbyBkZSBQYWdvOiB7cGVkaWRvLm1ldG9kb3BhZ299IDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGVzdGFkbyBkZWwgcGFnbyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLmVzdGFkb3BhZ28gPT09ICdwZW5kaWVudGUnID8gPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgYWxlcnQgYWxlcnQtd2FybmluZ1wiPkVzdGFkbyBkZWwgUGFnbzoge3BlZGlkby5lc3RhZG9wYWdvfSA8L2g2PiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlZGlkby5lc3RhZG9wYWdvID09PSAncGFnYWRvJyA/IDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGFsZXJ0IGFsZXJ0LWluZm9cIj5Fc3RhZG8gZGVsIFBhZ286IHtwZWRpZG8uZXN0YWRvcGFnb30gPC9oNj4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8uZXN0YWRvcGFnbyA9PT0gJ3JlY2hhemFkbycgPyA8aDYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBhbGVydCBhbGVydC1kYW5nZXJcIj5Fc3RhZG8gZGVsIFBhZ286IHtwZWRpZG8uZXN0YWRvcGFnb30gPC9oNj4gOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5Fc3RhZG8gZGUgbGEgZW50cmVnYToge3BlZGlkby5lc3RhZG9lbnRyZWdhfSA8L2g2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLm9ic2VydmFjaW9uZXMub2JzZXJ2YWNpb24gPT09ICcnID8gbnVsbCA6IDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+T2JzZXJ2YWNpb25lcyBkZWwgUGVkaWRvOiB7cGVkaWRvLm9ic2VydmFjaW9uZXMub2JzZXJ2YWNpb259IDwvaDY+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiN2ZXItcHJvZHVjdG9zXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlRXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVyIFByb2R1Y3Rvc1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2VcIiBpZD1cInZlci1wcm9kdWN0b3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLnByb2R1Y3Rvcy5tYXAocHJvZHVjdG8gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm9tYnJlOiB7cHJvZHVjdG8ubm9tYnJlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2FudGlkYWQ6IHtwcm9kdWN0by5jYW50aWRhZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlZhbG9yIGRlbCBQZWRpZG86ICR7cGVkaWRvLnByZWNpb2ZpbmFsfTwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtYm9keSBteS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5EYXRvcyBkZWwgQ2xpZW50ZTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5vbWJyZToge3BlZGlkby5jbGllbnRlZGF0b3Mubm9tYnJlfTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8uY2xpZW50ZWRhdG9zLm51bWVybyA9PT0gdW5kZWZpbmVkIHx8IHBlZGlkby5jbGllbnRlZGF0b3MuZGlyZWNjaW9uID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TnVtZXJvOiB7cGVkaWRvLmNsaWVudGVkYXRvcy5udW1lcm99PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNhbnRpZGFkOiB7cGVkaWRvLmNsaWVudGVkYXRvcy5kaXJlY2Npb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5FZGl0YXIgRGF0b3M8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aWVtcG9lbnRyZWdhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGd1YXJkYXJNb2RpZmljYXJEYXRvcyh7IC4uLm1vZGlmaWNhckRhdG9zLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGllbXBvIEVudHJlZ2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVzdGFkb3BhZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGd1YXJkYXJNb2RpZmljYXJEYXRvcyh7IC4uLm1vZGlmaWNhckRhdG9zLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Fc3RhZG8gZGUgcGFnbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBlbmRpZW50ZVwiPlBlbmRpZW50ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBhZ2Fkb1wiPlBhZ2Fkbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJlY2hhemFkb1wiPlJlY2hhemFkbzwvb3B0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZXN0YWRvZW50cmVnYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gZ3VhcmRhck1vZGlmaWNhckRhdG9zKHsgLi4ubW9kaWZpY2FyRGF0b3MsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkVzdGFkbyBkZSBlbnRyZWdhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVuZGllbnRlXCI+UGVuZGllbnRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZW4gcHJvY2Vzb1wiPkVuIFByb2Nlc288L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlbnRyZWdhZG9cIj5FbnRyZWdhZG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjYW5jZWxhZG9cIj5DYW5jZWxhZG88L29wdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IGVkaXRhckNhbXBvcyhwZWRpZG8uaWR0b3RhbHBlZGlkb3MpfT4gRWRpdGFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FkbWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3RvbkVsaW1pbmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZWNpYmlySUQocGVkaWRvLmlkdG90YWxwZWRpZG9zKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbW9kYWwtZWxpbWluYWNpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCIgPkVsaW1pbmFyPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3RvbkVsaW1pbmFyPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwibW9kYWwtZWxpbWluYWNpb25cIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5FbGltaW5hcj88L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIG9uQ2xpY2s9eygpID0+IGNlcnJhck1vZGFsKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhbG1lbnRlIGRlc2VhIEVsaW1pbmFyIGVzdGUgUHJvZHVjdG8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9eygpID0+IGNhbmNlbGFyQ29uZmlybWFyUHJvZHVjdG8oKX0+Q2FuY2VsYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXsoKSA9PiBjb25maXJtYXJQcm9kdWN0bygpfT5FbGltaW5hcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQgPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgey8qIHNpIG5vIGhheSB1biBhZG1pbiBhcGFyZWNlIHVuIG1lbnNhamUgKi99XHJcbiAgICAgICAgICAgIHshYWRtaW4gPyA8Q2VudHJhckgyPk5vIHRpZW5lcyBQZXJtaXNvIGRlIEVzdGFyIGFxdWk8L0NlbnRyYXJIMj4gOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgey8qIHNpIGhheSB1biBhZG1pbiB5IG5vIHNlIGVzdGEgYnVzY2FuZG8gYXBhcmVjZW4gdG9kb3MgbG9zIHBlZGlkb3MgKi99XHJcbiAgICAgICAgICAgIHshYWRtaW4gfHwgYnVzY2FyXHJcbiAgICAgICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgICAgIDogPENhcmQgY2xhc3NOYW1lPVwiY2FyZCBiZy1saWdodCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3BlZGlkb3MubWFwKHBlZGlkbyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLmVzdGFkb2VudHJlZ2EgPT09ICdlbnRyZWdhZG8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIiA+UGVkaWRvIEVudHJlZ2FkbzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8uZXN0YWRvZW50cmVnYSA9PT0gJ3BlbmRpZW50ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiID5QZWRpZG8gUGVuZGllbnRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlZGlkby5lc3RhZG9lbnRyZWdhID09PSAnY2FuY2VsYWRvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiA+UGVkaWRvIENhbmNlbGFkbzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8uZXN0YWRvZW50cmVnYSA9PT0gJ2VuIHByb2Nlc28nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXByaW1hcnlcIiA+UGVkaWRvIEVuIFByb2Nlc288L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBib2R5LWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlJlZmVyZW5jaWE6IHtwZWRpZG8ucmVmZXJlbmNlfSA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+VGllbXBvIEVzdGltYWRvIGRlIEVudHJlZ2E6IHtwZWRpZG8ucHJvbWVkaW9lbnRyZWdhfSA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+VGlwbyBkZSBFbnRyZWdhOiB7cGVkaWRvLnRpcG9lbnRyZWdhfSA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+TWV0b2RvIGRlIFBhZ286IHtwZWRpZG8ubWV0b2RvcGFnb30gPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogZXN0YWRvIGRlbCBwYWdvICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8uZXN0YWRvcGFnbyA9PT0gJ3BlbmRpZW50ZScgPyA8aDYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBhbGVydCBhbGVydC13YXJuaW5nXCI+RXN0YWRvIGRlbCBQYWdvOiB7cGVkaWRvLmVzdGFkb3BhZ299IDwvaDY+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLmVzdGFkb3BhZ28gPT09ICdwYWdhZG8nID8gPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgYWxlcnQgYWxlcnQtaW5mb1wiPkVzdGFkbyBkZWwgUGFnbzoge3BlZGlkby5lc3RhZG9wYWdvfSA8L2g2PiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlZGlkby5lc3RhZG9wYWdvID09PSAncmVjaGF6YWRvJyA/IDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGFsZXJ0IGFsZXJ0LWRhbmdlclwiPkVzdGFkbyBkZWwgUGFnbzoge3BlZGlkby5lc3RhZG9wYWdvfSA8L2g2PiA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkVzdGFkbyBkZSBsYSBlbnRyZWdhOiB7cGVkaWRvLmVzdGFkb2VudHJlZ2F9IDwvaDY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8ub2JzZXJ2YWNpb25lcy5vYnNlcnZhY2lvbiA9PT0gJycgPyBudWxsIDogPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5PYnNlcnZhY2lvbmVzIGRlbCBQZWRpZG86IHtwZWRpZG8ub2JzZXJ2YWNpb25lcy5vYnNlcnZhY2lvbn0gPC9oNj59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjdmVyLXByb2R1Y3Rvc1wiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZUV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlciBQcm9kdWN0b3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2VcIiBpZD1cInZlci1wcm9kdWN0b3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLnByb2R1Y3Rvcy5tYXAocHJvZHVjdG8gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm9tYnJlOiB7cHJvZHVjdG8ubm9tYnJlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2FudGlkYWQ6IHtwcm9kdWN0by5jYW50aWRhZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlZhbG9yIGRlbCBQZWRpZG86ICR7cGVkaWRvLnByZWNpb2ZpbmFsfTwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtYm9keSBteS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5EYXRvcyBkZWwgQ2xpZW50ZTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5vbWJyZToge3BlZGlkby5jbGllbnRlZGF0b3Mubm9tYnJlfTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8uY2xpZW50ZWRhdG9zLm51bWVybyA9PT0gdW5kZWZpbmVkIHx8IHBlZGlkby5jbGllbnRlZGF0b3MuZGlyZWNjaW9uID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TnVtZXJvOiB7cGVkaWRvLmNsaWVudGVkYXRvcy5udW1lcm99PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNhbnRpZGFkOiB7cGVkaWRvLmNsaWVudGVkYXRvcy5kaXJlY2Npb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5FZGl0YXIgRGF0b3M8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aWVtcG9lbnRyZWdhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGd1YXJkYXJNb2RpZmljYXJEYXRvcyh7IC4uLm1vZGlmaWNhckRhdG9zLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGllbXBvIEVudHJlZ2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVzdGFkb3BhZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGd1YXJkYXJNb2RpZmljYXJEYXRvcyh7IC4uLm1vZGlmaWNhckRhdG9zLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Fc3RhZG8gZGUgcGFnbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBlbmRpZW50ZVwiPlBlbmRpZW50ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBhZ2Fkb1wiPlBhZ2Fkbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJlY2hhemFkb1wiPlJlY2hhemFkbzwvb3B0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZXN0YWRvZW50cmVnYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gZ3VhcmRhck1vZGlmaWNhckRhdG9zKHsgLi4ubW9kaWZpY2FyRGF0b3MsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkVzdGFkbyBkZSBlbnRyZWdhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVuZGllbnRlXCI+UGVuZGllbnRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZW4gcHJvY2Vzb1wiPkVuIFByb2Nlc288L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlbnRyZWdhZG9cIj5FbnRyZWdhZG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjYW5jZWxhZG9cIj5DYW5jZWxhZG88L29wdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IGVkaXRhckNhbXBvcyhwZWRpZG8uaWR0b3RhbHBlZGlkb3MpfT4gRWRpdGFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FkbWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3RvbkVsaW1pbmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZWNpYmlySUQocGVkaWRvLmlkdG90YWxwZWRpZG9zKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbW9kYWwtZWxpbWluYWNpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCIgPkVsaW1pbmFyPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3RvbkVsaW1pbmFyPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwibW9kYWwtZWxpbWluYWNpb25cIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5FbGltaW5hcj88L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIG9uQ2xpY2s9eygpID0+IGNlcnJhck1vZGFsKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhbG1lbnRlIGRlc2VhIEVsaW1pbmFyIGVzdGUgUHJvZHVjdG8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17KCkgPT4gY2FuY2VsYXJDb25maXJtYXJQcm9kdWN0bygpfT5DYW5jZWxhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9eygpID0+IGNvbmZpcm1hclByb2R1Y3RvKCl9PkVsaW1pbmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvQ2FyZCA+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxEaXZTZXBhcmFjaW9uPlxyXG5cclxuICAgICAgICAgICAgPC9EaXZTZXBhcmFjaW9uPlxyXG5cclxuXHJcbiAgICAgICAgPC9MYXlvdXQgPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVkaWRvQWRtaW47Il0sInNvdXJjZVJvb3QiOiIifQ==