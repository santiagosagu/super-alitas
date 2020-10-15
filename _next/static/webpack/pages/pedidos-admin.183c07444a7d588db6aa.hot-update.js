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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\n    margin: 1rem;\n    font-weight: bold;\n    \n\n    @media (min-width: 768px) {\n        margin: 5% 45%; \n        align-items: center;\n        text-align: center;\n        border: 1px solid #e1e1e1;\n        display: inline-block;\n        padding: 1rem 1.5rem;\n        border-radius: 5px;\n    }\n"]);

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
var BotonBuscar = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].h5(_templateObject2());
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
      lineNumber: 299,
      columnNumber: 9
    }
  }, pedidos.length === 0 ? __jsx(AlertaSInProductos, {
    className: "card-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 37
    }
  }, "Aun no Hay Pedidos") : null, !admin ? null : __jsx(BotonBuscar, {
    onClick: function onClick() {
      return abrirBuscadorFn();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 19
    }
  }, "Buscar"), abrirBuscador ? __jsx(DivAcordeonBuscador, {
    className: "accordion ",
    id: "accordionExample",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "card-header",
    id: "headingOne",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 25
    }
  }, __jsx("h2", {
    className: "mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
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
      lineNumber: 315,
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
      lineNumber: 321,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
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
      lineNumber: 323,
      columnNumber: 33
    }
  })))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "card-header",
    id: "headingTwo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 25
    }
  }, __jsx("h2", {
    className: "mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
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
      lineNumber: 335,
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
      lineNumber: 340,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
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
      lineNumber: 342,
      columnNumber: 33
    }
  }, __jsx("option", {
    value: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 37
    }
  }, "Estado de entrega"), __jsx("option", {
    value: "pendiente",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 37
    }
  }, "Pendiente"), __jsx("option", {
    value: "en proceso",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 37
    }
  }, "En Proceso"), __jsx("option", {
    value: "entregado",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 37
    }
  }, "Entregado"), __jsx("option", {
    value: "cancelado",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 37
    }
  }, "Cancelado")))))) : null, buscar ? __jsx(Card, {
    className: "card bg-light mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 19
    }
  }, resultadoBusqueda.map(function (pedido) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, pedido.estadoentrega === 'entregado' ? __jsx("div", {
      className: "alert alert-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 35
      }
    }, "Pedido Entregado") : null, pedido.estadoentrega === 'pendiente' ? __jsx("div", {
      className: "alert alert-warning",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 35
      }
    }, "Pedido Pendiente") : null, pedido.estadoentrega === 'cancelado' ? __jsx("div", {
      className: "alert alert-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 35
      }
    }, "Pedido Cancelado") : null, pedido.estadoentrega === 'en proceso' ? __jsx("div", {
      className: "alert alert-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 35
      }
    }, "Pedido En Proceso") : null, __jsx("div", {
      className: "card-body body-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 29
      }
    }, __jsx("h5", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389,
        columnNumber: 33
      }
    }, "Referencia: ", pedido.reference, " "), __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 33
      }
    }, "Tiempo Estimado de Entrega: ", pedido.promedioentrega, " "), __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 33
      }
    }, "Tipo de Entrega: ", pedido.tipoentrega, " "), __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 33
      }
    }, "Metodo de Pago: ", pedido.metodopago, " "), pedido.estadopago === 'pendiente' ? __jsx("h6", {
      className: "card-title alert alert-warning",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 70
      }
    }, "Estado del Pago: ", pedido.estadopago, " ") : null, pedido.estadopago === 'pagado' ? __jsx("h6", {
      className: "card-title alert alert-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395,
        columnNumber: 67
      }
    }, "Estado del Pago: ", pedido.estadopago, " ") : null, pedido.estadopago === 'rechazado' ? __jsx("h6", {
      className: "card-title alert alert-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 70
      }
    }, "Estado del Pago: ", pedido.estadopago, " ") : null, pedido.observaciones.observacion === '' ? null : __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 83
      }
    }, "Observaciones del Pedido: ", pedido.observaciones.observacion, " "), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401,
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
        lineNumber: 403,
        columnNumber: 37
      }
    }, "Ver Productos")), __jsx("div", {
      "class": "collapse",
      id: "ver-productos",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408,
        columnNumber: 33
      }
    }, __jsx("div", {
      "class": "card card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 37
      }
    }, pedido.productos.map(function (producto) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 45
        }
      }, __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412,
          columnNumber: 49
        }
      }, "Nombre: ", producto.nombre), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413,
          columnNumber: 49
        }
      }, "Cantidad: ", producto.cantidad));
    }))), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 33
      }
    }, "Valor del Pedido: $", pedido.preciofinal), __jsx("div", {
      "class": "card card-body my-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 33
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 37
      }
    }, "Datos del Cliente"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426,
        columnNumber: 37
      }
    }, "Nombre: ", pedido.clientedatos.nombre), pedido.clientedatos.numero === undefined || pedido.clientedatos.direccion === undefined ? null : __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 43
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 45
      }
    }, "Numero: ", pedido.clientedatos.numero), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 45
      }
    }, "Cantidad: ", pedido.clientedatos.direccion))), __jsx("div", {
      "class": "card card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438,
        columnNumber: 33
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439,
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
        lineNumber: 440,
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
        lineNumber: 447,
        columnNumber: 37
      }
    }, __jsx("option", {
      value: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 452,
        columnNumber: 41
      }
    }, "Estado de pago"), __jsx("option", {
      value: "pendiente",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453,
        columnNumber: 41
      }
    }, "Pendiente"), __jsx("option", {
      value: "pagado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 454,
        columnNumber: 41
      }
    }, "Pagado"), __jsx("option", {
      value: "rechazado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 455,
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
        lineNumber: 459,
        columnNumber: 37
      }
    }, __jsx("option", {
      value: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464,
        columnNumber: 41
      }
    }, "Estado de entrega"), __jsx("option", {
      value: "pendiente",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465,
        columnNumber: 41
      }
    }, "Pendiente"), __jsx("option", {
      value: "en proceso",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 466,
        columnNumber: 41
      }
    }, "En Proceso"), __jsx("option", {
      value: "entregado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 467,
        columnNumber: 41
      }
    }, "Entregado"), __jsx("option", {
      value: "cancelado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 468,
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
        lineNumber: 472,
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
        lineNumber: 480,
        columnNumber: 37
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 486,
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
        lineNumber: 490,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "modal-dialog",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 491,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "modal-content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 492,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: "modal-header",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 493,
        columnNumber: 49
      }
    }, __jsx("h5", {
      className: "modal-title",
      id: "exampleModalLabel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494,
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
        lineNumber: 495,
        columnNumber: 53
      }
    }, __jsx("span", {
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 496,
        columnNumber: 57
      }
    }, "\xD7"))), __jsx("div", {
      className: "modal-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 499,
        columnNumber: 49
      }
    }, "Realmente desea Eliminar este Producto?"), __jsx("div", {
      className: "modal-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 502,
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
        lineNumber: 503,
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
        lineNumber: 504,
        columnNumber: 53
      }
    }, "Eliminar")))))) : null);
  })) : null, !admin ? __jsx(CentrarH2, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 23
    }
  }, "No tienes Permiso de Estar aqui") : null, !admin || buscar ? null : __jsx(Card, {
    className: "card bg-light mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 19
    }
  }, pedidos.map(function (pedido) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, pedido.estadoentrega === 'entregado' ? __jsx("div", {
      className: "alert alert-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 527,
        columnNumber: 35
      }
    }, "Pedido Entregado") : null, pedido.estadoentrega === 'pendiente' ? __jsx("div", {
      className: "alert alert-warning",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 532,
        columnNumber: 35
      }
    }, "Pedido Pendiente") : null, pedido.estadoentrega === 'cancelado' ? __jsx("div", {
      className: "alert alert-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 537,
        columnNumber: 35
      }
    }, "Pedido Cancelado") : null, pedido.estadoentrega === 'en proceso' ? __jsx("div", {
      className: "alert alert-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542,
        columnNumber: 35
      }
    }, "Pedido En Proceso") : null, __jsx("div", {
      className: "card-body body-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 546,
        columnNumber: 29
      }
    }, __jsx("h5", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 547,
        columnNumber: 33
      }
    }, "Referencia: ", pedido.reference, " "), __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 548,
        columnNumber: 33
      }
    }, "Tiempo Estimado de Entrega: ", pedido.promedioentrega, " "), __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 549,
        columnNumber: 33
      }
    }, "Tipo de Entrega: ", pedido.tipoentrega, " "), __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 550,
        columnNumber: 33
      }
    }, "Metodo de Pago: ", pedido.metodopago, " "), pedido.estadopago === 'pendiente' ? __jsx("h6", {
      className: "card-title alert alert-warning",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 552,
        columnNumber: 70
      }
    }, "Estado del Pago: ", pedido.estadopago, " ") : null, pedido.estadopago === 'pagado' ? __jsx("h6", {
      className: "card-title alert alert-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 553,
        columnNumber: 67
      }
    }, "Estado del Pago: ", pedido.estadopago, " ") : null, pedido.estadopago === 'rechazado' ? __jsx("h6", {
      className: "card-title alert alert-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 554,
        columnNumber: 70
      }
    }, "Estado del Pago: ", pedido.estadopago, " ") : null, pedido.observaciones.observacion === '' ? null : __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 557,
        columnNumber: 83
      }
    }, "Observaciones del Pedido: ", pedido.observaciones.observacion, " "), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 559,
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
        lineNumber: 561,
        columnNumber: 37
      }
    }, "Ver Productos")), __jsx("div", {
      "class": "collapse",
      id: "ver-productos",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 566,
        columnNumber: 33
      }
    }, __jsx("div", {
      "class": "card card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 567,
        columnNumber: 37
      }
    }, pedido.productos.map(function (producto) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569,
          columnNumber: 45
        }
      }, __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570,
          columnNumber: 49
        }
      }, "Nombre: ", producto.nombre), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571,
          columnNumber: 49
        }
      }, "Cantidad: ", producto.cantidad));
    }))), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 580,
        columnNumber: 33
      }
    }, "Valor del Pedido: $", pedido.preciofinal), __jsx("div", {
      "class": "card card-body my-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 582,
        columnNumber: 33
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 583,
        columnNumber: 37
      }
    }, "Datos del Cliente"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 584,
        columnNumber: 37
      }
    }, "Nombre: ", pedido.clientedatos.nombre), pedido.clientedatos.numero === undefined || pedido.clientedatos.direccion === undefined ? null : __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 588,
        columnNumber: 43
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 589,
        columnNumber: 45
      }
    }, "Numero: ", pedido.clientedatos.numero), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 590,
        columnNumber: 45
      }
    }, "Cantidad: ", pedido.clientedatos.direccion))), __jsx("div", {
      "class": "card card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 596,
        columnNumber: 33
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 597,
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
        lineNumber: 598,
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
        lineNumber: 605,
        columnNumber: 37
      }
    }, __jsx("option", {
      value: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 610,
        columnNumber: 41
      }
    }, "Estado de pago"), __jsx("option", {
      value: "pendiente",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 611,
        columnNumber: 41
      }
    }, "Pendiente"), __jsx("option", {
      value: "pagado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 612,
        columnNumber: 41
      }
    }, "Pagado"), __jsx("option", {
      value: "rechazado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 613,
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
        lineNumber: 617,
        columnNumber: 37
      }
    }, __jsx("option", {
      value: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 622,
        columnNumber: 41
      }
    }, "Estado de entrega"), __jsx("option", {
      value: "pendiente",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 623,
        columnNumber: 41
      }
    }, "Pendiente"), __jsx("option", {
      value: "en proceso",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 624,
        columnNumber: 41
      }
    }, "En Proceso"), __jsx("option", {
      value: "entregado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 625,
        columnNumber: 41
      }
    }, "Entregado"), __jsx("option", {
      value: "cancelado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 626,
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
        lineNumber: 630,
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
        lineNumber: 638,
        columnNumber: 37
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 644,
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
        lineNumber: 648,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "modal-dialog",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 649,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "modal-content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 650,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: "modal-header",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 651,
        columnNumber: 49
      }
    }, __jsx("h5", {
      className: "modal-title",
      id: "exampleModalLabel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 652,
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
        lineNumber: 653,
        columnNumber: 53
      }
    }, __jsx("span", {
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 654,
        columnNumber: 57
      }
    }, "\xD7"))), __jsx("div", {
      className: "modal-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 657,
        columnNumber: 49
      }
    }, "Realmente desea Eliminar este Producto?"), __jsx("div", {
      className: "modal-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 660,
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
        lineNumber: 661,
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
        lineNumber: 662,
        columnNumber: 53
      }
    }, "Eliminar")))))) : null);
  })), __jsx(DivSeparacion, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGVkaWRvcy1hZG1pbi5qcyJdLCJuYW1lcyI6WyJDZW50cmFySDIiLCJzdHlsZWQiLCJoMiIsIkJvdG9uQnVzY2FyIiwiaDUiLCJEaXZBY29yZGVvbkJ1c2NhZG9yIiwiZGl2IiwiQWxlcnRhU0luUHJvZHVjdG9zIiwiQ2FyZCIsIkRpdlNlcGFyYWNpb24iLCJCb3RvbkVsaW1pbmFyIiwicCIsIlBlZGlkb0FkbWluIiwidXNlU3RhdGUiLCJwZWRpZG9zIiwiZ3VyZGFyUGVkaWRvcyIsInRpZW1wb2VudHJlZ2EiLCJlc3RhZG9wYWdvIiwiZXN0YWRvZW50cmVnYSIsIm1vZGlmaWNhckRhdG9zIiwiZ3VhcmRhck1vZGlmaWNhckRhdG9zIiwiYWJyaXJCdXNjYWRvciIsImd1YXJkYXJBYnJpckJ1c2NhZG9yIiwiYnVzcXVlZGFnZW5lcmFsIiwibWV0b2RvcGFnbyIsImZpbHRyb0J1c3F1ZWRhIiwiZ3VhcmRhckZpbHRyb0J1c3F1ZWRhIiwicmVzdWx0YWRvQnVzcXVlZGEiLCJndWFyZGFyUmVzdWx0YWRvQnVzcXVlZGEiLCJidXNjYXIiLCJndWFyZGFyQnVzY2FyIiwidXNlQ29udGV4dCIsIkZpcmViYXNlQ29udGV4dCIsImZpcmViYXNlIiwidXN1YXJpbyIsInVzZUFkbWluIiwiYWRtaW4iLCJ1c2VFbGltaW5hclByb2R1Y3RvIiwicHJvZHVjdG9FbGltaW5hciIsImd1YXJkYXJQZWRpZG9FbGltaW5hciIsImd1YXJkYXJDb25maXJtYWNpb25FbGltaW5hclByb2R1Y3RvIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0Iiwib2J0ZW5lclByb2R1Y3RvcyIsImRiIiwiY29sbGVjdGlvbiIsIm9yZGVyQnkiLCJvblNuYXBzaG90IiwibWFuZWphclNuYXBzaG90Iiwic25hcHNob3QiLCJwZWRpZG8iLCJkb2NzIiwibWFwIiwiZG9jIiwiaWR0b3RhbHBlZGlkb3MiLCJpZCIsImRhdGEiLCJ1bmRlZmluZWQiLCJidXNjYXJHZW5lcmFsRm4iLCJidXNxdWVkYSIsInRvTG93ZXJDYXNlIiwicmVzdWx0YWRvIiwiZmlsdGVyIiwicHJvbWVkaW9lbnRyZWdhIiwiaW5jbHVkZXMiLCJ0aXBvZW50cmVnYSIsImNsaWVudGVkYXRvcyIsIm5vbWJyZSIsInJlZmVyZW5jZSIsImJ1c3F1ZWRhRXN0YWRvRW50cmVnYUZuIiwiZWRpdGFyQ2FtcG9zIiwiZWRpdGFyUGVkaWRvIiwiZWRpdGFyVGllbXBvIiwidXBkYXRlIiwiZWRpdGFyRXN0YWRvUGFnbyIsImVkaXRhckVzdGFkb0VudHJlZ2EiLCJyZWNpYmlySUQiLCJjb25zb2xlIiwibG9nIiwiY29uZmlybWFyUHJvZHVjdG8iLCJjYW5jZWxhckNvbmZpcm1hclByb2R1Y3RvIiwiY2VycmFyTW9kYWwiLCJhYnJpckJ1c2NhZG9yRm4iLCJsZW5ndGgiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwib2JzZXJ2YWNpb25lcyIsIm9ic2VydmFjaW9uIiwicHJvZHVjdG9zIiwicHJvZHVjdG8iLCJjYW50aWRhZCIsInByZWNpb2ZpbmFsIiwibnVtZXJvIiwiZGlyZWNjaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsdURBQU0sQ0FBQ0MsRUFBVixtQkFBZjtLQUFNRixTO0FBUU4sSUFBTUcsV0FBVyxHQUFHRix1REFBTSxDQUFDRyxFQUFWLG9CQUFqQjtNQUFNRCxXO0FBaUJOLElBQU1FLG1CQUFtQixHQUFHSix1REFBTSxDQUFDSyxHQUFWLG9CQUF6QjtNQUFNRCxtQjtBQU9OLElBQU1FLGtCQUFrQixHQUFHTix1REFBTSxDQUFDSyxHQUFWLG9CQUF4QjtNQUFNQyxrQjtBQVFOLElBQU1DLElBQUksR0FBR1AsdURBQU0sQ0FBQ0ssR0FBVixvQkFBVjtNQUFNRSxJO0FBNEJOLElBQU1DLGFBQWEsR0FBR1IsdURBQU0sQ0FBQ0ssR0FBVixvQkFBbkI7TUFBTUcsYTtBQUlOLElBQU1DLGFBQWEsR0FBR1QsdURBQU0sQ0FBQ1UsQ0FBVixvQkFBbkI7TUFBTUQsYTs7QUFxQk4sSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUV0QjtBQUZzQixrQkFHV0Msc0RBQVEsQ0FBQyxFQUFELENBSG5CO0FBQUEsTUFHZkMsT0FIZTtBQUFBLE1BR05DLGFBSE0saUJBS3RCOzs7QUFMc0IsbUJBTTBCRixzREFBUSxDQUFDO0FBQ3JERyxpQkFBYSxFQUFFLEVBRHNDO0FBRXJEQyxjQUFVLEVBQUUsRUFGeUM7QUFHckRDLGlCQUFhLEVBQUU7QUFIc0MsR0FBRCxDQU5sQztBQUFBLE1BTWZDLGNBTmU7QUFBQSxNQU1DQyxxQkFORCxrQkFZdEI7OztBQVpzQixtQkFhd0JQLHNEQUFRLENBQUMsS0FBRCxDQWJoQztBQUFBLE1BYWZRLGFBYmU7QUFBQSxNQWFBQyxvQkFiQSxrQkFnQnRCOzs7QUFoQnNCLG1CQWlCMEJULHNEQUFRLENBQUM7QUFDckRVLG1CQUFlLEVBQUUsRUFEb0M7QUFFckRMLGlCQUFhLEVBQUUsRUFGc0M7QUFHckRNLGNBQVUsRUFBRTtBQUh5QyxHQUFELENBakJsQztBQUFBLE1BaUJmQyxjQWpCZTtBQUFBLE1BaUJDQyxxQkFqQkQsa0JBdUJ0Qjs7O0FBdkJzQixtQkF3QmdDYixzREFBUSxDQUFDLEVBQUQsQ0F4QnhDO0FBQUEsTUF3QmZjLGlCQXhCZTtBQUFBLE1Bd0JJQyx3QkF4Qkosa0JBMEJ0Qjs7O0FBMUJzQixtQkEyQlVmLHNEQUFRLENBQUMsS0FBRCxDQTNCbEI7QUFBQSxNQTJCZmdCLE1BM0JlO0FBQUEsTUEyQlBDLGFBM0JPOztBQUFBLG9CQTZCUUMsd0RBQVUsQ0FBQ0MseURBQUQsQ0E3QmxCO0FBQUEsTUE2QmRDLFFBN0JjLGVBNkJkQSxRQTdCYztBQUFBLE1BNkJKQyxPQTdCSSxlQTZCSkEsT0E3Qkk7O0FBQUEsa0JBOEJKQywrREFBUSxFQTlCSjtBQUFBLE1BOEJkQyxLQTlCYyxhQThCZEEsS0E5QmMsRUFnQ3RCOzs7QUFoQ3NCLDZCQWlDbUVDLDBFQUFtQixFQWpDdEY7QUFBQSxNQWlDZEMsZ0JBakNjLHdCQWlDZEEsZ0JBakNjO0FBQUEsTUFpQ0lDLHFCQWpDSix3QkFpQ0lBLHFCQWpDSjtBQUFBLE1BaUMyQkMsbUNBakMzQix3QkFpQzJCQSxtQ0FqQzNCLEVBbUN0Qjs7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQXBDc0IsQ0FzQ3RCOztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDM0JYLGNBQVEsQ0FBQ1ksRUFBVCxDQUFZQyxVQUFaLENBQXVCLGNBQXZCLEVBQXVDQyxPQUF2QyxDQUErQyxhQUEvQyxFQUE4RCxLQUE5RCxFQUFxRUMsVUFBckUsQ0FBZ0ZDLGVBQWhGO0FBQ0gsS0FGRDs7QUFJQUwsb0JBQWdCO0FBRW5CLEdBUFEsRUFPTixFQVBNLENBQVQ7O0FBU0EsV0FBU0ssZUFBVCxDQUF5QkMsUUFBekIsRUFBbUM7QUFDL0IsUUFBTUMsTUFBTSxHQUFHRCxRQUFRLENBQUNFLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFBQyxHQUFHLEVBQUk7QUFDcEM7QUFDSUMsc0JBQWMsRUFBRUQsR0FBRyxDQUFDRTtBQUR4QixTQUVPRixHQUFHLENBQUNHLElBQUosRUFGUDtBQUlILEtBTGMsQ0FBZjtBQU1BMUMsaUJBQWEsQ0FBQ29DLE1BQUQsQ0FBYjtBQUVILEdBekRxQixDQTJEdEI7OztBQUNBUix5REFBUyxDQUFDLFlBQU07QUFFWjtBQUNBLFFBQUlsQixjQUFjLENBQUNGLGVBQWYsS0FBbUNtQyxTQUF2QyxFQUFrRCxDQUdqRCxDQUhELE1BR087QUFDSCxVQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDMUIsWUFBTUMsUUFBUSxHQUFHbkMsY0FBYyxDQUFDRixlQUFmLENBQStCc0MsV0FBL0IsRUFBakI7QUFDQSxZQUFNQyxTQUFTLEdBQUdoRCxPQUFPLENBQUNpRCxNQUFSLENBQWUsVUFBQVosTUFBTSxFQUFJO0FBRXZDLGlCQUNJQSxNQUFNLENBQUNhLGVBQVAsQ0FBdUJILFdBQXZCLEdBQXFDSSxRQUFyQyxDQUE4Q0wsUUFBOUMsS0FDQVQsTUFBTSxDQUFDbEMsVUFBUCxDQUFrQjRDLFdBQWxCLEdBQWdDSSxRQUFoQyxDQUF5Q0wsUUFBekMsQ0FEQSxJQUVBVCxNQUFNLENBQUMzQixVQUFQLENBQWtCcUMsV0FBbEIsR0FBZ0NJLFFBQWhDLENBQXlDTCxRQUF6QyxDQUZBLElBR0FULE1BQU0sQ0FBQ2UsV0FBUCxDQUFtQkwsV0FBbkIsR0FBaUNJLFFBQWpDLENBQTBDTCxRQUExQyxDQUhBLElBSUFULE1BQU0sQ0FBQ2dCLFlBQVAsQ0FBb0JDLE1BQXBCLENBQTJCUCxXQUEzQixHQUF5Q0ksUUFBekMsQ0FBa0RMLFFBQWxELENBSkEsSUFLQVQsTUFBTSxDQUFDakMsYUFBUCxDQUFxQjJDLFdBQXJCLEdBQW1DSSxRQUFuQyxDQUE0Q0wsUUFBNUMsQ0FMQSxJQU1BVCxNQUFNLENBQUNrQixTQUFQLENBQWlCUixXQUFqQixHQUErQkksUUFBL0IsQ0FBd0NMLFFBQXhDLENBUEo7QUFVSCxTQVppQixDQUFsQjtBQWNBaEMsZ0NBQXdCLENBQUNrQyxTQUFELENBQXhCO0FBSUgsT0FwQkQ7O0FBcUJBSCxxQkFBZTtBQUNsQjtBQUVKLEdBL0JRLEVBK0JOLENBQUNsQyxjQUFELEVBQWlCWCxPQUFqQixDQS9CTSxDQUFUO0FBaUNBNkIseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSWxCLGNBQWMsQ0FBQ1AsYUFBZixLQUFpQyxFQUFqQyxJQUF1Q08sY0FBYyxDQUFDRCxVQUFmLEtBQThCa0MsU0FBckUsSUFBa0ZqQyxjQUFjLENBQUNGLGVBQWYsS0FBbUNtQyxTQUF6SCxFQUFvSTtBQUNoSSxVQUFNWSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQU07QUFDbEMsWUFBTVYsUUFBUSxHQUFHbkMsY0FBYyxDQUFDUCxhQUFoQztBQUNBLFlBQU00QyxTQUFTLEdBQUdoRCxPQUFPLENBQUNpRCxNQUFSLENBQWUsVUFBQVosTUFBTTtBQUFBLGlCQUFJQSxNQUFNLENBQUNqQyxhQUFQLEtBQXlCMEMsUUFBN0I7QUFBQSxTQUFyQixDQUFsQjtBQUVBaEMsZ0NBQXdCLENBQUNrQyxTQUFELENBQXhCO0FBRUgsT0FORDs7QUFPQVEsNkJBQXVCO0FBQzFCO0FBSUosR0FkUSxFQWNOLENBQUM3QyxjQUFELEVBQWlCWCxPQUFqQixDQWRNLENBQVQsQ0E3RnNCLENBK0d0Qjs7QUFDQSxNQUFNeUQsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQWYsRUFBRSxFQUFJO0FBRXZCLFFBQU1nQixZQUFZLEdBQUd2QyxRQUFRLENBQUNZLEVBQVQsQ0FBWUMsVUFBWixDQUF1QixjQUF2QixFQUF1Q1EsR0FBdkMsQ0FBMkNFLEVBQTNDLENBQXJCOztBQUVBLFFBQU1pQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCLFVBQUl0RCxjQUFjLENBQUNILGFBQWYsS0FBaUMsRUFBckMsRUFBeUM7QUFDckM7QUFDSCxPQUZELE1BRU87QUFDSCxlQUFPd0QsWUFBWSxDQUFDRSxNQUFiLENBQW9CO0FBQ3ZCVix5QkFBZSxFQUFFN0MsY0FBYyxDQUFDSDtBQURULFNBQXBCLENBQVA7QUFJSDtBQUNKLEtBVEQ7O0FBV0F5RCxnQkFBWTs7QUFFWixRQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDM0IsVUFBSXhELGNBQWMsQ0FBQ0YsVUFBZixLQUE4QixFQUFsQyxFQUFzQztBQUNsQztBQUNILE9BRkQsTUFFTztBQUNILGVBQU91RCxZQUFZLENBQUNFLE1BQWIsQ0FBb0I7QUFDdkJ6RCxvQkFBVSxFQUFFRSxjQUFjLENBQUNGO0FBREosU0FBcEIsQ0FBUDtBQUtIO0FBQ0osS0FWRDs7QUFZQTBELG9CQUFnQjs7QUFFaEIsUUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQzlCLFVBQUl6RCxjQUFjLENBQUNELGFBQWYsS0FBaUMsRUFBckMsRUFBeUM7QUFDckM7QUFDSCxPQUZELE1BRU87QUFDSCxlQUFPc0QsWUFBWSxDQUFDRSxNQUFiLENBQW9CO0FBQ3ZCeEQsdUJBQWEsRUFBRUMsY0FBYyxDQUFDRDtBQURQLFNBQXBCLENBQVA7QUFJSDtBQUNKLEtBVEQ7O0FBV0EwRCx1QkFBbUI7QUFFdEIsR0E1Q0QsQ0FoSHNCLENBK0p0Qjs7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQXJCLEVBQUUsRUFBSTtBQUNwQnNCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZdkIsRUFBWjtBQUNBakIseUJBQXFCLENBQUNpQixFQUFELENBQXJCO0FBQ0gsR0FIRCxDQWhLc0IsQ0FzS3RCOzs7QUFDQSxNQUFNd0IsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzVCeEMsdUNBQW1DLENBQUMsSUFBRCxDQUFuQztBQUVILEdBSEQsQ0F2S3NCLENBNEt0Qjs7O0FBQ0EsTUFBTXlDLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsR0FBTTtBQUNwQ3pDLHVDQUFtQyxDQUFDLEtBQUQsQ0FBbkM7QUFDQUQseUJBQXFCLENBQUMsRUFBRCxDQUFyQjtBQUNILEdBSEQsQ0E3S3NCLENBa0x0Qjs7O0FBQ0EsTUFBTTJDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEIxQyx1Q0FBbUMsQ0FBQyxLQUFELENBQW5DO0FBQ0FELHlCQUFxQixDQUFDLEVBQUQsQ0FBckI7QUFDSCxHQUhELENBbkxzQixDQXdMdEI7OztBQUNBLE1BQU00QyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDMUIsUUFBSTlELGFBQUosRUFBbUI7QUFDZkMsMEJBQW9CLENBQUMsS0FBRCxDQUFwQjtBQUNBUSxtQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNILEtBSEQsTUFHTztBQUNIUiwwQkFBb0IsQ0FBQyxJQUFELENBQXBCO0FBQ0FRLG1CQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0g7QUFFSixHQVREOztBQVdBLFNBQ0ksTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUtoQixPQUFPLENBQUNzRSxNQUFSLEtBQW1CLENBQW5CLEdBQXVCLE1BQUMsa0JBQUQ7QUFBb0IsYUFBUyxFQUFDLGFBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQXZCLEdBQTZHLElBRmxILEVBS0ssQ0FBQ2hELEtBQUQsR0FDSyxJQURMLEdBRUssTUFBQyxXQUFEO0FBQWEsV0FBTyxFQUFFO0FBQUEsYUFBTStDLGVBQWUsRUFBckI7QUFBQSxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUFYsRUFXSzlELGFBQWEsR0FDUixNQUFDLG1CQUFEO0FBQXFCLGFBQVMsRUFBQyxZQUEvQjtBQUE0QyxNQUFFLEVBQUMsa0JBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQTZCLE1BQUUsRUFBQyxZQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxhQUFTLEVBQUMsa0NBQWxCO0FBQXFELFFBQUksRUFBQyxRQUExRDtBQUFtRSxtQkFBWSxVQUEvRTtBQUEwRixtQkFBWSxjQUF0RztBQUFxSCxxQkFBYyxNQUFuSTtBQUEwSSxxQkFBYyxhQUF4SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLENBREosQ0FESixFQVNJO0FBQUssTUFBRSxFQUFDLGFBQVI7QUFBc0IsYUFBUyxFQUFDLGVBQWhDO0FBQWdELHVCQUFnQixZQUFoRTtBQUE2RSxtQkFBWSxtQkFBekY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksUUFBSSxFQUFDLGlCQURUO0FBRUksWUFBUSxFQUFFLGtCQUFBZ0UsQ0FBQztBQUFBLGFBQUkzRCxxQkFBcUIsaUNBQU1QLGNBQU4scUdBQXVCa0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLElBQWhDLEVBQXVDRixDQUFDLENBQUNDLE1BQUYsQ0FBU0UsS0FBaEQsR0FBekI7QUFBQSxLQUZmO0FBR0ksYUFBUyxFQUFDLG9CQUhkO0FBSUksZUFBVyxFQUFDLG1CQUpoQjtBQUtJLFFBQUksRUFBQyxNQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBVEosQ0FERixFQXFCRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQTZCLE1BQUUsRUFBQyxZQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxhQUFTLEVBQUMsNENBQWxCO0FBQStELFFBQUksRUFBQyxRQUFwRTtBQUE2RSxtQkFBWSxVQUF6RjtBQUFvRyxtQkFBWSxjQUFoSDtBQUErSCxxQkFBYyxPQUE3STtBQUFxSixxQkFBYyxhQUFuSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQURKLENBREosQ0FESixFQVFJO0FBQUssTUFBRSxFQUFDLGFBQVI7QUFBc0IsYUFBUyxFQUFDLFVBQWhDO0FBQTJDLHVCQUFnQixZQUEzRDtBQUF3RSxtQkFBWSxtQkFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksUUFBSSxFQUFDLE1BRFQ7QUFFSSxRQUFJLEVBQUMsZUFGVDtBQUdJLGFBQVMsRUFBQyxvQkFIZDtBQUlJLFlBQVEsRUFBRSxrQkFBQUgsQ0FBQztBQUFBLGFBQUkzRCxxQkFBcUIsaUNBQU1QLGNBQU4scUdBQXVCa0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLElBQWhDLEVBQXVDRixDQUFDLENBQUNDLE1BQUYsQ0FBU0UsS0FBaEQsR0FBekI7QUFBQSxLQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSTtBQUFRLFNBQUssRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEosRUFNSTtBQUFRLFNBQUssRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkosRUFPSTtBQUFRLFNBQUssRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEosRUFRSTtBQUFRLFNBQUssRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkosRUFTSTtBQUFRLFNBQUssRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEosQ0FESixDQURKLENBUkosQ0FyQkYsQ0FEUSxHQWlEUixJQTVEVixFQWlFSzNELE1BQU0sR0FDRCxNQUFDLElBQUQ7QUFBTSxhQUFTLEVBQUMsb0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsaUJBQWlCLENBQUMwQixHQUFsQixDQUFzQixVQUFBRixNQUFNO0FBQUEsV0FDekIsbUVBQ0tBLE1BQU0sQ0FBQ2pDLGFBQVAsS0FBeUIsV0FBekIsR0FDSztBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURMLEdBRUssSUFIVixFQU1LaUMsTUFBTSxDQUFDakMsYUFBUCxLQUF5QixXQUF6QixHQUNLO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREwsR0FFSyxJQVJWLEVBV0tpQyxNQUFNLENBQUNqQyxhQUFQLEtBQXlCLFdBQXpCLEdBQ0s7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFETCxHQUVLLElBYlYsRUFnQktpQyxNQUFNLENBQUNqQyxhQUFQLEtBQXlCLFlBQXpCLEdBQ0s7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFETCxHQUVLLElBbEJWLEVBcUJJO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFJLGVBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXdDaUMsTUFBTSxDQUFDa0IsU0FBL0MsTUFESixFQUVJO0FBQUksZUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FBd0RsQixNQUFNLENBQUNhLGVBQS9ELE1BRkosRUFHSTtBQUFJLGVBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQTZDYixNQUFNLENBQUNlLFdBQXBELE1BSEosRUFJSTtBQUFJLGVBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQTRDZixNQUFNLENBQUMzQixVQUFuRCxNQUpKLEVBTUsyQixNQUFNLENBQUNsQyxVQUFQLEtBQXNCLFdBQXRCLEdBQW9DO0FBQUksZUFBUyxFQUFDLGdDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQWlFa0MsTUFBTSxDQUFDbEMsVUFBeEUsTUFBcEMsR0FBZ0ksSUFOckksRUFPS2tDLE1BQU0sQ0FBQ2xDLFVBQVAsS0FBc0IsUUFBdEIsR0FBaUM7QUFBSSxlQUFTLEVBQUMsNkJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBOERrQyxNQUFNLENBQUNsQyxVQUFyRSxNQUFqQyxHQUEwSCxJQVAvSCxFQVFLa0MsTUFBTSxDQUFDbEMsVUFBUCxLQUFzQixXQUF0QixHQUFvQztBQUFJLGVBQVMsRUFBQywrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFnRWtDLE1BQU0sQ0FBQ2xDLFVBQXZFLE1BQXBDLEdBQStILElBUnBJLEVBV0trQyxNQUFNLENBQUNzQyxhQUFQLENBQXFCQyxXQUFyQixLQUFxQyxFQUFyQyxHQUEwQyxJQUExQyxHQUFpRDtBQUFJLGVBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBQXNEdkMsTUFBTSxDQUFDc0MsYUFBUCxDQUFxQkMsV0FBM0UsTUFYdEQsRUFhSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUk7QUFBUSxlQUFTLEVBQUMsaUJBQWxCO0FBQW9DLFVBQUksRUFBQyxRQUF6QztBQUFrRCxxQkFBWSxVQUE5RDtBQUF5RSxxQkFBWSxnQkFBckY7QUFBc0csdUJBQWMsT0FBcEg7QUFBNEgsdUJBQWMsaUJBQTFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosQ0FiSixFQW9CSTtBQUFLLGVBQU0sVUFBWDtBQUFzQixRQUFFLEVBQUMsZUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBTSxnQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0t2QyxNQUFNLENBQUN3QyxTQUFQLENBQWlCdEMsR0FBakIsQ0FBcUIsVUFBQXVDLFFBQVE7QUFBQSxhQUMxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBWUEsUUFBUSxDQUFDeEIsTUFBckIsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQWN3QixRQUFRLENBQUNDLFFBQXZCLENBRkosQ0FEMEI7QUFBQSxLQUE3QixDQURMLENBREosQ0FwQkosRUFrQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBd0IxQyxNQUFNLENBQUMyQyxXQUEvQixDQWxDSixFQW9DSTtBQUFLLGVBQU0scUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFZM0MsTUFBTSxDQUFDZ0IsWUFBUCxDQUFvQkMsTUFBaEMsQ0FGSixFQUlLakIsTUFBTSxDQUFDZ0IsWUFBUCxDQUFvQjRCLE1BQXBCLEtBQStCckMsU0FBL0IsSUFBNENQLE1BQU0sQ0FBQ2dCLFlBQVAsQ0FBb0I2QixTQUFwQixLQUFrQ3RDLFNBQTlFLEdBQ0ssSUFETCxHQUVLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFZUCxNQUFNLENBQUNnQixZQUFQLENBQW9CNEIsTUFBaEMsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWM1QyxNQUFNLENBQUNnQixZQUFQLENBQW9CNkIsU0FBbEMsQ0FGRixDQU5WLENBcENKLEVBa0RJO0FBQUssZUFBTSxnQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixFQUVJO0FBQ0ksVUFBSSxFQUFDLGVBRFQ7QUFFSSxjQUFRLEVBQUUsa0JBQUFYLENBQUM7QUFBQSxlQUFJakUscUJBQXFCLGlDQUFNRCxjQUFOLHFHQUF1QmtFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxJQUFoQyxFQUF1Q0YsQ0FBQyxDQUFDQyxNQUFGLENBQVNFLEtBQWhELEdBQXpCO0FBQUEsT0FGZjtBQUdJLGVBQVMsRUFBQyxvQkFIZDtBQUlJLGlCQUFXLEVBQUMsZ0JBSmhCO0FBS0ksVUFBSSxFQUFDLE1BTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLEVBU0k7QUFDSSxVQUFJLEVBQUMsTUFEVDtBQUVJLFVBQUksRUFBQyxZQUZUO0FBR0ksZUFBUyxFQUFDLG9CQUhkO0FBSUksY0FBUSxFQUFFLGtCQUFBSCxDQUFDO0FBQUEsZUFBSWpFLHFCQUFxQixpQ0FBTUQsY0FBTixxR0FBdUJrRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsSUFBaEMsRUFBdUNGLENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxLQUFoRCxHQUF6QjtBQUFBLE9BSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtJO0FBQVEsV0FBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFMSixFQU1JO0FBQVEsV0FBSyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSixFQU9JO0FBQVEsV0FBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSixFQVFJO0FBQVEsV0FBSyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSSixDQVRKLEVBcUJJO0FBQ0ksVUFBSSxFQUFDLE1BRFQ7QUFFSSxVQUFJLEVBQUMsZUFGVDtBQUdJLGVBQVMsRUFBQyxvQkFIZDtBQUlJLGNBQVEsRUFBRSxrQkFBQUgsQ0FBQztBQUFBLGVBQUlqRSxxQkFBcUIsaUNBQU1ELGNBQU4scUdBQXVCa0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLElBQWhDLEVBQXVDRixDQUFDLENBQUNDLE1BQUYsQ0FBU0UsS0FBaEQsR0FBekI7QUFBQSxPQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLSTtBQUFRLFdBQUssRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTEosRUFNSTtBQUFRLFdBQUssRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkosRUFPSTtBQUFRLFdBQUssRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEosRUFRSTtBQUFRLFdBQUssRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkosRUFTSTtBQUFRLFdBQUssRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEosQ0FyQkosRUFrQ0k7QUFBUSxlQUFNLGlCQUFkO0FBQWdDLGFBQU8sRUFBRTtBQUFBLGVBQU1qQixZQUFZLENBQUNwQixNQUFNLENBQUNJLGNBQVIsQ0FBbEI7QUFBQSxPQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxDSixDQWxESixDQXJCSixFQThHS25CLEtBQUssR0FFRixtRUFDSSxNQUFDLGFBQUQ7QUFDSSxhQUFPLEVBQUU7QUFBQSxlQUFNeUMsU0FBUyxDQUFDMUIsTUFBTSxDQUFDSSxjQUFSLENBQWY7QUFBQSxPQURiO0FBRUksZUFBUyxFQUFDLFdBRmQ7QUFHSSxVQUFJLEVBQUMsUUFIVDtBQUlJLHFCQUFZLE9BSmhCO0FBS0kscUJBQVksb0JBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FNSTtBQUFPLGVBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KLENBREosRUFXSTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQTRCLFFBQUUsRUFBQyxtQkFBL0I7QUFBbUQseUJBQWdCLG1CQUFuRTtBQUF1RixxQkFBWSxNQUFuRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSSxlQUFTLEVBQUMsYUFBZDtBQUE0QixRQUFFLEVBQUMsbUJBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosRUFFSTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLGVBQVMsRUFBQyxPQUFoQztBQUF3QyxzQkFBYSxPQUFyRDtBQUE2RCxvQkFBVyxPQUF4RTtBQUFnRixhQUFPLEVBQUU7QUFBQSxlQUFNMkIsV0FBVyxFQUFqQjtBQUFBLE9BQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFNLHFCQUFZLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixDQUZKLENBREosRUFPSTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBUEosRUFVSTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLGVBQVMsRUFBQyxtQkFBaEM7QUFBb0Qsc0JBQWEsT0FBakU7QUFBeUUsYUFBTyxFQUFFO0FBQUEsZUFBTUQseUJBQXlCLEVBQS9CO0FBQUEsT0FBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQUVJO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBUyxFQUFDLGdCQUFoQztBQUFpRCxzQkFBYSxPQUE5RDtBQUFzRSxhQUFPLEVBQUU7QUFBQSxlQUFNRCxpQkFBaUIsRUFBdkI7QUFBQSxPQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLENBVkosQ0FESixDQURKLENBWEosQ0FGRSxHQWlDQSxJQS9JVixDQUR5QjtBQUFBLEdBQTVCLENBREgsQ0FEQyxHQXVKRCxJQXhOVixFQTJOSyxDQUFDNUMsS0FBRCxHQUFTLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUFULEdBQWtFLElBM052RSxFQThOSyxDQUFDQSxLQUFELElBQVVQLE1BQVYsR0FDSyxJQURMLEdBRUssTUFBQyxJQUFEO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dmLE9BQU8sQ0FBQ3VDLEdBQVIsQ0FBWSxVQUFBRixNQUFNO0FBQUEsV0FDZixtRUFDS0EsTUFBTSxDQUFDakMsYUFBUCxLQUF5QixXQUF6QixHQUNLO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREwsR0FFSyxJQUhWLEVBTUtpQyxNQUFNLENBQUNqQyxhQUFQLEtBQXlCLFdBQXpCLEdBQ0s7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFETCxHQUVLLElBUlYsRUFXS2lDLE1BQU0sQ0FBQ2pDLGFBQVAsS0FBeUIsV0FBekIsR0FDSztBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURMLEdBRUssSUFiVixFQWdCS2lDLE1BQU0sQ0FBQ2pDLGFBQVAsS0FBeUIsWUFBekIsR0FDSztBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURMLEdBRUssSUFsQlYsRUFxQkk7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUksZUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBd0NpQyxNQUFNLENBQUNrQixTQUEvQyxNQURKLEVBRUk7QUFBSSxlQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUF3RGxCLE1BQU0sQ0FBQ2EsZUFBL0QsTUFGSixFQUdJO0FBQUksZUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBNkNiLE1BQU0sQ0FBQ2UsV0FBcEQsTUFISixFQUlJO0FBQUksZUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBNENmLE1BQU0sQ0FBQzNCLFVBQW5ELE1BSkosRUFNSzJCLE1BQU0sQ0FBQ2xDLFVBQVAsS0FBc0IsV0FBdEIsR0FBb0M7QUFBSSxlQUFTLEVBQUMsZ0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBaUVrQyxNQUFNLENBQUNsQyxVQUF4RSxNQUFwQyxHQUFnSSxJQU5ySSxFQU9La0MsTUFBTSxDQUFDbEMsVUFBUCxLQUFzQixRQUF0QixHQUFpQztBQUFJLGVBQVMsRUFBQyw2QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUE4RGtDLE1BQU0sQ0FBQ2xDLFVBQXJFLE1BQWpDLEdBQTBILElBUC9ILEVBUUtrQyxNQUFNLENBQUNsQyxVQUFQLEtBQXNCLFdBQXRCLEdBQW9DO0FBQUksZUFBUyxFQUFDLCtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQWdFa0MsTUFBTSxDQUFDbEMsVUFBdkUsTUFBcEMsR0FBK0gsSUFScEksRUFXS2tDLE1BQU0sQ0FBQ3NDLGFBQVAsQ0FBcUJDLFdBQXJCLEtBQXFDLEVBQXJDLEdBQTBDLElBQTFDLEdBQWlEO0FBQUksZUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FBc0R2QyxNQUFNLENBQUNzQyxhQUFQLENBQXFCQyxXQUEzRSxNQVh0RCxFQWFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFSTtBQUFRLGVBQU0saUJBQWQ7QUFBZ0MsVUFBSSxFQUFDLFFBQXJDO0FBQThDLHFCQUFZLFVBQTFEO0FBQXFFLHFCQUFZLGdCQUFqRjtBQUFrRyx1QkFBYyxPQUFoSDtBQUF3SCx1QkFBYyxpQkFBdEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSixDQWJKLEVBb0JJO0FBQUssZUFBTSxVQUFYO0FBQXNCLFFBQUUsRUFBQyxlQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxlQUFNLGdCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS3ZDLE1BQU0sQ0FBQ3dDLFNBQVAsQ0FBaUJ0QyxHQUFqQixDQUFxQixVQUFBdUMsUUFBUTtBQUFBLGFBQzFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFZQSxRQUFRLENBQUN4QixNQUFyQixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBY3dCLFFBQVEsQ0FBQ0MsUUFBdkIsQ0FGSixDQUQwQjtBQUFBLEtBQTdCLENBREwsQ0FESixDQXBCSixFQWtDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUF3QjFDLE1BQU0sQ0FBQzJDLFdBQS9CLENBbENKLEVBb0NJO0FBQUssZUFBTSxxQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVkzQyxNQUFNLENBQUNnQixZQUFQLENBQW9CQyxNQUFoQyxDQUZKLEVBSUtqQixNQUFNLENBQUNnQixZQUFQLENBQW9CNEIsTUFBcEIsS0FBK0JyQyxTQUEvQixJQUE0Q1AsTUFBTSxDQUFDZ0IsWUFBUCxDQUFvQjZCLFNBQXBCLEtBQWtDdEMsU0FBOUUsR0FDSyxJQURMLEdBRUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVlQLE1BQU0sQ0FBQ2dCLFlBQVAsQ0FBb0I0QixNQUFoQyxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBYzVDLE1BQU0sQ0FBQ2dCLFlBQVAsQ0FBb0I2QixTQUFsQyxDQUZGLENBTlYsQ0FwQ0osRUFrREk7QUFBSyxlQUFNLGdCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLEVBRUk7QUFDSSxVQUFJLEVBQUMsZUFEVDtBQUVJLGNBQVEsRUFBRSxrQkFBQVgsQ0FBQztBQUFBLGVBQUlqRSxxQkFBcUIsaUNBQU1ELGNBQU4scUdBQXVCa0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLElBQWhDLEVBQXVDRixDQUFDLENBQUNDLE1BQUYsQ0FBU0UsS0FBaEQsR0FBekI7QUFBQSxPQUZmO0FBR0ksZUFBUyxFQUFDLG9CQUhkO0FBSUksaUJBQVcsRUFBQyxnQkFKaEI7QUFLSSxVQUFJLEVBQUMsTUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosRUFTSTtBQUNJLFVBQUksRUFBQyxNQURUO0FBRUksVUFBSSxFQUFDLFlBRlQ7QUFHSSxlQUFTLEVBQUMsb0JBSGQ7QUFJSSxjQUFRLEVBQUUsa0JBQUFILENBQUM7QUFBQSxlQUFJakUscUJBQXFCLGlDQUFNRCxjQUFOLHFHQUF1QmtFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxJQUFoQyxFQUF1Q0YsQ0FBQyxDQUFDQyxNQUFGLENBQVNFLEtBQWhELEdBQXpCO0FBQUEsT0FKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0k7QUFBUSxXQUFLLEVBQUMsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUxKLEVBTUk7QUFBUSxXQUFLLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KLEVBT0k7QUFBUSxXQUFLLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKLEVBUUk7QUFBUSxXQUFLLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKLENBVEosRUFxQkk7QUFDSSxVQUFJLEVBQUMsTUFEVDtBQUVJLFVBQUksRUFBQyxlQUZUO0FBR0ksZUFBUyxFQUFDLG9CQUhkO0FBSUksY0FBUSxFQUFFLGtCQUFBSCxDQUFDO0FBQUEsZUFBSWpFLHFCQUFxQixpQ0FBTUQsY0FBTixxR0FBdUJrRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsSUFBaEMsRUFBdUNGLENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxLQUFoRCxHQUF6QjtBQUFBLE9BSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtJO0FBQVEsV0FBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFMSixFQU1JO0FBQVEsV0FBSyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSixFQU9JO0FBQVEsV0FBSyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQSixFQVFJO0FBQVEsV0FBSyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSSixFQVNJO0FBQVEsV0FBSyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUSixDQXJCSixFQWtDSTtBQUFRLGVBQU0saUJBQWQ7QUFBZ0MsYUFBTyxFQUFFO0FBQUEsZUFBTWpCLFlBQVksQ0FBQ3BCLE1BQU0sQ0FBQ0ksY0FBUixDQUFsQjtBQUFBLE9BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbENKLENBbERKLENBckJKLEVBOEdLbkIsS0FBSyxHQUVGLG1FQUNJLE1BQUMsYUFBRDtBQUNJLGFBQU8sRUFBRTtBQUFBLGVBQU15QyxTQUFTLENBQUMxQixNQUFNLENBQUNJLGNBQVIsQ0FBZjtBQUFBLE9BRGI7QUFFSSxlQUFTLEVBQUMsV0FGZDtBQUdJLFVBQUksRUFBQyxRQUhUO0FBSUkscUJBQVksT0FKaEI7QUFLSSxxQkFBWSxvQkFMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1JO0FBQU8sZUFBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkosQ0FESixFQVdJO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBNEIsUUFBRSxFQUFDLG1CQUEvQjtBQUFtRCx5QkFBZ0IsbUJBQW5FO0FBQXVGLHFCQUFZLE1BQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFJLGVBQVMsRUFBQyxhQUFkO0FBQTRCLFFBQUUsRUFBQyxtQkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUVJO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBUyxFQUFDLE9BQWhDO0FBQXdDLHNCQUFhLE9BQXJEO0FBQTZELG9CQUFXLE9BQXhFO0FBQWdGLGFBQU8sRUFBRTtBQUFBLGVBQU0yQixXQUFXLEVBQWpCO0FBQUEsT0FBekY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQU0scUJBQVksTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLENBRkosQ0FESixFQU9JO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpREFQSixFQVVJO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBUyxFQUFDLG1CQUFoQztBQUFvRCxzQkFBYSxPQUFqRTtBQUF5RSxhQUFPLEVBQUU7QUFBQSxlQUFNRCx5QkFBeUIsRUFBL0I7QUFBQSxPQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLEVBRUk7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFTLEVBQUMsZ0JBQWhDO0FBQWlELHNCQUFhLE9BQTlEO0FBQXNFLGFBQU8sRUFBRTtBQUFBLGVBQU1ELGlCQUFpQixFQUF2QjtBQUFBLE9BQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosQ0FWSixDQURKLENBREosQ0FYSixDQUZFLEdBaUNBLElBL0lWLENBRGU7QUFBQSxHQUFsQixDQURILENBaE9WLEVBd1hJLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeFhKLENBREo7QUFnWUgsQ0Fwa0JEOztHQUFNcEUsVztVQThCZ0J1Qix1RCxFQUd1RUUsa0UsRUFHMUVLLHFEOzs7TUFwQ2I5QixXO0FBc2tCU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGVkaWRvcy1hZG1pbi4xODNjMDc0NDRhN2Q1ODhkYjZhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IHsgRmlyZWJhc2VDb250ZXh0IH0gZnJvbSAnLi4vZmlyZWJhc2UnXHJcbmltcG9ydCB1c2VBZG1pbiBmcm9tICcuLi9ob29rcy91c2VBZG1pbidcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHVzZUVsaW1pbmFyUHJvZHVjdG8gZnJvbSAnLi4vaG9va3MvdXNlRWxpbWluYXJQcm9kdWN0bydcclxuXHJcbmNvbnN0IENlbnRyYXJIMiA9IHN0eWxlZC5oMmBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTsgXHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IEJvdG9uQnVzY2FyID0gc3R5bGVkLmg1YFxyXG5cclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgXHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWFyZ2luOiA1JSA0NSU7IFxyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgRGl2QWNvcmRlb25CdXNjYWRvciA9IHN0eWxlZC5kaXZgXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBtYXJnaW46IDElIDhyZW07IFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBBbGVydGFTSW5Qcm9kdWN0b3MgPSBzdHlsZWQuZGl2YFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcclxuICAgIFxyXG4gICAgbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgICAgICAgbWFyZ2luOiA1JSA4cmVtO1xyXG5cclxuICAgICAgICAuYm9keS1jYXJkIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbmBcclxuXHJcbmNvbnN0IERpdlNlcGFyYWNpb24gPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuYFxyXG5jb25zdCBCb3RvbkVsaW1pbmFyID0gc3R5bGVkLnBgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgc21hbGwge1xyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MC4ycmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5gXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBQZWRpZG9BZG1pbiA9ICgpID0+IHtcclxuXHJcbiAgICAvL3N0YXRlIGRlIHRvZG9zIGxvcyBwZWRpZG9zXHJcbiAgICBjb25zdCBbcGVkaWRvcywgZ3VyZGFyUGVkaWRvc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICAvL3N0YXRlIHBhcmEgZWRpdGFyXHJcbiAgICBjb25zdCBbbW9kaWZpY2FyRGF0b3MsIGd1YXJkYXJNb2RpZmljYXJEYXRvc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdGllbXBvZW50cmVnYTogJycsXHJcbiAgICAgICAgZXN0YWRvcGFnbzogJycsXHJcbiAgICAgICAgZXN0YWRvZW50cmVnYTogJydcclxuICAgIH0pXHJcblxyXG4gICAgLy8gc3RhdGUgYWJyaXIgYnVzY2Fkb3JcclxuICAgIGNvbnN0IFthYnJpckJ1c2NhZG9yLCBndWFyZGFyQWJyaXJCdXNjYWRvcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblxyXG4gICAgLy8gc3RhdGUgZGVsIGZpbHRybyBkZSBidXNjYXJcclxuICAgIGNvbnN0IFtmaWx0cm9CdXNxdWVkYSwgZ3VhcmRhckZpbHRyb0J1c3F1ZWRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBidXNxdWVkYWdlbmVyYWw6ICcnLFxyXG4gICAgICAgIGVzdGFkb2VudHJlZ2E6ICcnLFxyXG4gICAgICAgIG1ldG9kb3BhZ286ICcnXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIHN0YXRlIGNvbiBsb3MgcGVkaWRvcyBkZSBsYSBidXNxdWVkYVxyXG4gICAgY29uc3QgW3Jlc3VsdGFkb0J1c3F1ZWRhLCBndWFyZGFyUmVzdWx0YWRvQnVzcXVlZGFdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgLy8gc3RhdGUgZGUgYnVzY2FyXHJcbiAgICBjb25zdCBbYnVzY2FyLCBndWFyZGFyQnVzY2FyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IHsgZmlyZWJhc2UsIHVzdWFyaW8gfSA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KVxyXG4gICAgY29uc3QgeyBhZG1pbiB9ID0gdXNlQWRtaW4oKVxyXG5cclxuICAgIC8vdXRpbGl6YW1vcyBlbCB1c2UgZWxpbWluYXIgcHJvZHVjdG9cclxuICAgIGNvbnN0IHsgcHJvZHVjdG9FbGltaW5hciwgZ3VhcmRhclBlZGlkb0VsaW1pbmFyLCBndWFyZGFyQ29uZmlybWFjaW9uRWxpbWluYXJQcm9kdWN0byB9ID0gdXNlRWxpbWluYXJQcm9kdWN0bygpXHJcblxyXG4gICAgLy9kZWZpbmltb3MgZWwgcm91dGVyXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICAvL3RyYWVyIHRvZG9zIGxvcyBwZWRpZG9zXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9idGVuZXJQcm9kdWN0b3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3RvdGFscGVkaWRvcycpLm9yZGVyQnkoXCJmZWNoYXBlZGlkb1wiLCBcImFzY1wiKS5vblNuYXBzaG90KG1hbmVqYXJTbmFwc2hvdClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9idGVuZXJQcm9kdWN0b3MoKVxyXG5cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGZ1bmN0aW9uIG1hbmVqYXJTbmFwc2hvdChzbmFwc2hvdCkge1xyXG4gICAgICAgIGNvbnN0IHBlZGlkbyA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpZHRvdGFscGVkaWRvczogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBndXJkYXJQZWRpZG9zKHBlZGlkbylcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmlsdHJhciBsYXMgYnVzcXVlZGFzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICAvL2J1c3F1ZWRhIGdlbmVyYWxcclxuICAgICAgICBpZiAoZmlsdHJvQnVzcXVlZGEuYnVzcXVlZGFnZW5lcmFsID09PSB1bmRlZmluZWQpIHtcclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1c2NhckdlbmVyYWxGbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1c3F1ZWRhID0gZmlsdHJvQnVzcXVlZGEuYnVzcXVlZGFnZW5lcmFsLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IHBlZGlkb3MuZmlsdGVyKHBlZGlkbyA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlZGlkby5wcm9tZWRpb2VudHJlZ2EudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhidXNxdWVkYSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVkaWRvLmVzdGFkb3BhZ28udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhidXNxdWVkYSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVkaWRvLm1ldG9kb3BhZ28udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhidXNxdWVkYSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVkaWRvLnRpcG9lbnRyZWdhLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYnVzcXVlZGEpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlZGlkby5jbGllbnRlZGF0b3Mubm9tYnJlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYnVzcXVlZGEpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlZGlkby5lc3RhZG9lbnRyZWdhLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYnVzcXVlZGEpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlZGlkby5yZWZlcmVuY2UudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhidXNxdWVkYSlcclxuICAgICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBndWFyZGFyUmVzdWx0YWRvQnVzcXVlZGEocmVzdWx0YWRvKVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1c2NhckdlbmVyYWxGbigpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIFtmaWx0cm9CdXNxdWVkYSwgcGVkaWRvc10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZmlsdHJvQnVzcXVlZGEuZXN0YWRvZW50cmVnYSAhPT0gJycgJiYgZmlsdHJvQnVzcXVlZGEubWV0b2RvcGFnbyA9PT0gdW5kZWZpbmVkICYmIGZpbHRyb0J1c3F1ZWRhLmJ1c3F1ZWRhZ2VuZXJhbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1c3F1ZWRhRXN0YWRvRW50cmVnYUZuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVzcXVlZGEgPSBmaWx0cm9CdXNxdWVkYS5lc3RhZG9lbnRyZWdhXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBwZWRpZG9zLmZpbHRlcihwZWRpZG8gPT4gcGVkaWRvLmVzdGFkb2VudHJlZ2EgPT09IGJ1c3F1ZWRhKVxyXG5cclxuICAgICAgICAgICAgICAgIGd1YXJkYXJSZXN1bHRhZG9CdXNxdWVkYShyZXN1bHRhZG8pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1c3F1ZWRhRXN0YWRvRW50cmVnYUZuKClcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9LCBbZmlsdHJvQnVzcXVlZGEsIHBlZGlkb3NdKVxyXG5cclxuXHJcblxyXG4gICAgLy9FZGl0YXIgY2FtcG9zXHJcbiAgICBjb25zdCBlZGl0YXJDYW1wb3MgPSBpZCA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGVkaXRhclBlZGlkbyA9IGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oXCJ0b3RhbHBlZGlkb3NcIikuZG9jKGlkKTtcclxuXHJcbiAgICAgICAgY29uc3QgZWRpdGFyVGllbXBvID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobW9kaWZpY2FyRGF0b3MudGllbXBvZW50cmVnYSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRhclBlZGlkby51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21lZGlvZW50cmVnYTogbW9kaWZpY2FyRGF0b3MudGllbXBvZW50cmVnYVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVkaXRhclRpZW1wbygpXHJcblxyXG4gICAgICAgIGNvbnN0IGVkaXRhckVzdGFkb1BhZ28gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtb2RpZmljYXJEYXRvcy5lc3RhZG9wYWdvID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWRpdGFyUGVkaWRvLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXN0YWRvcGFnbzogbW9kaWZpY2FyRGF0b3MuZXN0YWRvcGFnb1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlZGl0YXJFc3RhZG9QYWdvKClcclxuXHJcbiAgICAgICAgY29uc3QgZWRpdGFyRXN0YWRvRW50cmVnYSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1vZGlmaWNhckRhdG9zLmVzdGFkb2VudHJlZ2EgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlZGl0YXJQZWRpZG8udXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBlc3RhZG9lbnRyZWdhOiBtb2RpZmljYXJEYXRvcy5lc3RhZG9lbnRyZWdhXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWRpdGFyRXN0YWRvRW50cmVnYSgpXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL3JlY2liaXIgaWQgYSBlbGltaW5hclxyXG4gICAgY29uc3QgcmVjaWJpcklEID0gaWQgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIGd1YXJkYXJQZWRpZG9FbGltaW5hcihpZClcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy9jb25maXJtYW1vcyBlbGltaW5hY2lvblxyXG4gICAgY29uc3QgY29uZmlybWFyUHJvZHVjdG8gPSAoKSA9PiB7XHJcbiAgICAgICAgZ3VhcmRhckNvbmZpcm1hY2lvbkVsaW1pbmFyUHJvZHVjdG8odHJ1ZSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9jYW5jZWxhciBlbGltaW5hY2lvbiBwcm9kdWN0b1xyXG4gICAgY29uc3QgY2FuY2VsYXJDb25maXJtYXJQcm9kdWN0byA9ICgpID0+IHtcclxuICAgICAgICBndWFyZGFyQ29uZmlybWFjaW9uRWxpbWluYXJQcm9kdWN0byhmYWxzZSlcclxuICAgICAgICBndWFyZGFyUGVkaWRvRWxpbWluYXIoJycpXHJcbiAgICB9XHJcblxyXG4gICAgLy9jZXJyYXIgZWwgbW9kYWxcclxuICAgIGNvbnN0IGNlcnJhck1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIGd1YXJkYXJDb25maXJtYWNpb25FbGltaW5hclByb2R1Y3RvKGZhbHNlKVxyXG4gICAgICAgIGd1YXJkYXJQZWRpZG9FbGltaW5hcignJylcclxuICAgIH1cclxuXHJcbiAgICAvLyBhYnJpciB5IGNlcnJhciBlbCBidXNjYWRvclxyXG4gICAgY29uc3QgYWJyaXJCdXNjYWRvckZuID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChhYnJpckJ1c2NhZG9yKSB7XHJcbiAgICAgICAgICAgIGd1YXJkYXJBYnJpckJ1c2NhZG9yKGZhbHNlKVxyXG4gICAgICAgICAgICBndWFyZGFyQnVzY2FyKGZhbHNlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGd1YXJkYXJBYnJpckJ1c2NhZG9yKHRydWUpXHJcbiAgICAgICAgICAgIGd1YXJkYXJCdXNjYXIodHJ1ZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuXHJcbiAgICAgICAgICAgIHtwZWRpZG9zLmxlbmd0aCA9PT0gMCA/IDxBbGVydGFTSW5Qcm9kdWN0b3MgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5BdW4gbm8gSGF5IFBlZGlkb3M8L0FsZXJ0YVNJblByb2R1Y3Rvcz4gOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgey8qIGVsIGJvdG9uIGJ1c2NhciBhcGFyZWNlIGN1YW5kbyBoYXkgdW4gYWRtaW4gKi99XHJcbiAgICAgICAgICAgIHshYWRtaW5cclxuICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgOiA8Qm90b25CdXNjYXIgb25DbGljaz17KCkgPT4gYWJyaXJCdXNjYWRvckZuKCl9PkJ1c2NhcjwvQm90b25CdXNjYXI+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHsvKiBmaWx0cm9zIGRlIGJ1c3F1ZWRhcyAqL31cclxuICAgICAgICAgICAge2FicmlyQnVzY2Fkb3JcclxuICAgICAgICAgICAgICAgID8gPERpdkFjb3JkZW9uQnVzY2Fkb3IgY2xhc3NOYW1lPVwiYWNjb3JkaW9uIFwiIGlkPVwiYWNjb3JkaW9uRXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCIgaWQ9XCJoZWFkaW5nT25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIGJ0bi1ibG9jayB0ZXh0LWxlZnRcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlT25lXCIgYXJpYS1leHBhbmRlZD1cInRydWVcIiBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VPbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnVzY2FyIGVuIFRvZG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbGxhcHNlT25lXCIgY2xhc3NOYW1lPVwiY29sbGFwc2Ugc2hvd1wiIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdPbmVcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25FeGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYnVzcXVlZGFnZW5lcmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gZ3VhcmRhckZpbHRyb0J1c3F1ZWRhKHsgLi4ubW9kaWZpY2FyRGF0b3MsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnVzY2FyIGVuIGdlbmVyYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIiBpZD1cImhlYWRpbmdUd29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgYnRuLWJsb2NrIHRleHQtbGVmdCBjb2xsYXBzZWRcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlVHdvXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlVHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1c2NhciBwb3IgZXN0YWRvIGRlIGVudHJlZ2FcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb2xsYXBzZVR3b1wiIGNsYXNzTmFtZT1cImNvbGxhcHNlXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZ1R3b1wiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbkV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlc3RhZG9lbnRyZWdhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gZ3VhcmRhckZpbHRyb0J1c3F1ZWRhKHsgLi4ubW9kaWZpY2FyRGF0b3MsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+RXN0YWRvIGRlIGVudHJlZ2E8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBlbmRpZW50ZVwiPlBlbmRpZW50ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZW4gcHJvY2Vzb1wiPkVuIFByb2Nlc288L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVudHJlZ2Fkb1wiPkVudHJlZ2Fkbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2FuY2VsYWRvXCI+Q2FuY2VsYWRvPC9vcHRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvRGl2QWNvcmRlb25CdXNjYWRvcj5cclxuICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgey8qIGVsIHJlc3VsdGFkbyBkZSBsYSBidXNxdWVkYSBhcGFyZWNlIGN1YW5kbyBzZSBsZSBkYSBjbGljayAqL31cclxuICAgICAgICAgICAge2J1c2NhclxyXG4gICAgICAgICAgICAgICAgPyA8Q2FyZCBjbGFzc05hbWU9XCJjYXJkIGJnLWxpZ2h0IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cmVzdWx0YWRvQnVzcXVlZGEubWFwKHBlZGlkbyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLmVzdGFkb2VudHJlZ2EgPT09ICdlbnRyZWdhZG8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIiA+UGVkaWRvIEVudHJlZ2FkbzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8uZXN0YWRvZW50cmVnYSA9PT0gJ3BlbmRpZW50ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiID5QZWRpZG8gUGVuZGllbnRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlZGlkby5lc3RhZG9lbnRyZWdhID09PSAnY2FuY2VsYWRvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiA+UGVkaWRvIENhbmNlbGFkbzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8uZXN0YWRvZW50cmVnYSA9PT0gJ2VuIHByb2Nlc28nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXByaW1hcnlcIiA+UGVkaWRvIEVuIFByb2Nlc288L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBib2R5LWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlJlZmVyZW5jaWE6IHtwZWRpZG8ucmVmZXJlbmNlfSA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+VGllbXBvIEVzdGltYWRvIGRlIEVudHJlZ2E6IHtwZWRpZG8ucHJvbWVkaW9lbnRyZWdhfSA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+VGlwbyBkZSBFbnRyZWdhOiB7cGVkaWRvLnRpcG9lbnRyZWdhfSA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+TWV0b2RvIGRlIFBhZ286IHtwZWRpZG8ubWV0b2RvcGFnb30gPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogZXN0YWRvIGRlbCBwYWdvICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8uZXN0YWRvcGFnbyA9PT0gJ3BlbmRpZW50ZScgPyA8aDYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBhbGVydCBhbGVydC13YXJuaW5nXCI+RXN0YWRvIGRlbCBQYWdvOiB7cGVkaWRvLmVzdGFkb3BhZ299IDwvaDY+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLmVzdGFkb3BhZ28gPT09ICdwYWdhZG8nID8gPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgYWxlcnQgYWxlcnQtaW5mb1wiPkVzdGFkbyBkZWwgUGFnbzoge3BlZGlkby5lc3RhZG9wYWdvfSA8L2g2PiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlZGlkby5lc3RhZG9wYWdvID09PSAncmVjaGF6YWRvJyA/IDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGFsZXJ0IGFsZXJ0LWRhbmdlclwiPkVzdGFkbyBkZWwgUGFnbzoge3BlZGlkby5lc3RhZG9wYWdvfSA8L2g2PiA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkVzdGFkbyBkZSBsYSBlbnRyZWdhOiB7cGVkaWRvLmVzdGFkb2VudHJlZ2F9IDwvaDY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8ub2JzZXJ2YWNpb25lcy5vYnNlcnZhY2lvbiA9PT0gJycgPyBudWxsIDogPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5PYnNlcnZhY2lvbmVzIGRlbCBQZWRpZG86IHtwZWRpZG8ub2JzZXJ2YWNpb25lcy5vYnNlcnZhY2lvbn0gPC9oNj59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI3Zlci1wcm9kdWN0b3NcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VFeGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXIgUHJvZHVjdG9zXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZVwiIGlkPVwidmVyLXByb2R1Y3Rvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8ucHJvZHVjdG9zLm1hcChwcm9kdWN0byA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ob21icmU6IHtwcm9kdWN0by5ub21icmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DYW50aWRhZDoge3Byb2R1Y3RvLmNhbnRpZGFkfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+VmFsb3IgZGVsIFBlZGlkbzogJHtwZWRpZG8ucHJlY2lvZmluYWx9PC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1ib2R5IG15LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkRhdG9zIGRlbCBDbGllbnRlPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm9tYnJlOiB7cGVkaWRvLmNsaWVudGVkYXRvcy5ub21icmV9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlZGlkby5jbGllbnRlZGF0b3MubnVtZXJvID09PSB1bmRlZmluZWQgfHwgcGVkaWRvLmNsaWVudGVkYXRvcy5kaXJlY2Npb24gPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5OdW1lcm86IHtwZWRpZG8uY2xpZW50ZWRhdG9zLm51bWVyb308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2FudGlkYWQ6IHtwZWRpZG8uY2xpZW50ZWRhdG9zLmRpcmVjY2lvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkVkaXRhciBEYXRvczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpZW1wb2VudHJlZ2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gZ3VhcmRhck1vZGlmaWNhckRhdG9zKHsgLi4ubW9kaWZpY2FyRGF0b3MsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaWVtcG8gRW50cmVnYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZXN0YWRvcGFnb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gZ3VhcmRhck1vZGlmaWNhckRhdG9zKHsgLi4ubW9kaWZpY2FyRGF0b3MsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkVzdGFkbyBkZSBwYWdvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVuZGllbnRlXCI+UGVuZGllbnRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGFnYWRvXCI+UGFnYWRvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmVjaGF6YWRvXCI+UmVjaGF6YWRvPC9vcHRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlc3RhZG9lbnRyZWdhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBndWFyZGFyTW9kaWZpY2FyRGF0b3MoeyAuLi5tb2RpZmljYXJEYXRvcywgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+RXN0YWRvIGRlIGVudHJlZ2E8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwZW5kaWVudGVcIj5QZW5kaWVudGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlbiBwcm9jZXNvXCI+RW4gUHJvY2Vzbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVudHJlZ2Fkb1wiPkVudHJlZ2Fkbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNhbmNlbGFkb1wiPkNhbmNlbGFkbzwvb3B0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4gZWRpdGFyQ2FtcG9zKHBlZGlkby5pZHRvdGFscGVkaWRvcyl9PiBFZGl0YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWRtaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdG9uRWxpbWluYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlY2liaXJJRChwZWRpZG8uaWR0b3RhbHBlZGlkb3MpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNtb2RhbC1lbGltaW5hY2lvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIiA+RWxpbWluYXI8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JvdG9uRWxpbWluYXI+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJtb2RhbC1lbGltaW5hY2lvblwiIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPkVsaW1pbmFyPzwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgb25DbGljaz17KCkgPT4gY2VycmFyTW9kYWwoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFsbWVudGUgZGVzZWEgRWxpbWluYXIgZXN0ZSBQcm9kdWN0bz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17KCkgPT4gY2FuY2VsYXJDb25maXJtYXJQcm9kdWN0bygpfT5DYW5jZWxhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9eygpID0+IGNvbmZpcm1hclByb2R1Y3RvKCl9PkVsaW1pbmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvQ2FyZCA+XHJcbiAgICAgICAgICAgICAgICA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICB7Lyogc2kgbm8gaGF5IHVuIGFkbWluIGFwYXJlY2UgdW4gbWVuc2FqZSAqL31cclxuICAgICAgICAgICAgeyFhZG1pbiA/IDxDZW50cmFySDI+Tm8gdGllbmVzIFBlcm1pc28gZGUgRXN0YXIgYXF1aTwvQ2VudHJhckgyPiA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICB7Lyogc2kgaGF5IHVuIGFkbWluIHkgbm8gc2UgZXN0YSBidXNjYW5kbyBhcGFyZWNlbiB0b2RvcyBsb3MgcGVkaWRvcyAqL31cclxuICAgICAgICAgICAgeyFhZG1pbiB8fCBidXNjYXJcclxuICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgOiA8Q2FyZCBjbGFzc05hbWU9XCJjYXJkIGJnLWxpZ2h0IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cGVkaWRvcy5tYXAocGVkaWRvID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8uZXN0YWRvZW50cmVnYSA9PT0gJ2VudHJlZ2FkbydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiID5QZWRpZG8gRW50cmVnYWRvPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlZGlkby5lc3RhZG9lbnRyZWdhID09PSAncGVuZGllbnRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC13YXJuaW5nXCIgPlBlZGlkbyBQZW5kaWVudGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLmVzdGFkb2VudHJlZ2EgPT09ICdjYW5jZWxhZG8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiID5QZWRpZG8gQ2FuY2VsYWRvPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlZGlkby5lc3RhZG9lbnRyZWdhID09PSAnZW4gcHJvY2VzbydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtcHJpbWFyeVwiID5QZWRpZG8gRW4gUHJvY2VzbzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJvZHktY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+UmVmZXJlbmNpYToge3BlZGlkby5yZWZlcmVuY2V9IDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5UaWVtcG8gRXN0aW1hZG8gZGUgRW50cmVnYToge3BlZGlkby5wcm9tZWRpb2VudHJlZ2F9IDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5UaXBvIGRlIEVudHJlZ2E6IHtwZWRpZG8udGlwb2VudHJlZ2F9IDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5NZXRvZG8gZGUgUGFnbzoge3BlZGlkby5tZXRvZG9wYWdvfSA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBlc3RhZG8gZGVsIHBhZ28gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlZGlkby5lc3RhZG9wYWdvID09PSAncGVuZGllbnRlJyA/IDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGFsZXJ0IGFsZXJ0LXdhcm5pbmdcIj5Fc3RhZG8gZGVsIFBhZ286IHtwZWRpZG8uZXN0YWRvcGFnb30gPC9oNj4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8uZXN0YWRvcGFnbyA9PT0gJ3BhZ2FkbycgPyA8aDYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBhbGVydCBhbGVydC1pbmZvXCI+RXN0YWRvIGRlbCBQYWdvOiB7cGVkaWRvLmVzdGFkb3BhZ299IDwvaDY+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLmVzdGFkb3BhZ28gPT09ICdyZWNoYXphZG8nID8gPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgYWxlcnQgYWxlcnQtZGFuZ2VyXCI+RXN0YWRvIGRlbCBQYWdvOiB7cGVkaWRvLmVzdGFkb3BhZ299IDwvaDY+IDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+RXN0YWRvIGRlIGxhIGVudHJlZ2E6IHtwZWRpZG8uZXN0YWRvZW50cmVnYX0gPC9oNj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlZGlkby5vYnNlcnZhY2lvbmVzLm9ic2VydmFjaW9uID09PSAnJyA/IG51bGwgOiA8aDYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPk9ic2VydmFjaW9uZXMgZGVsIFBlZGlkbzoge3BlZGlkby5vYnNlcnZhY2lvbmVzLm9ic2VydmFjaW9ufSA8L2g2Pn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiN2ZXItcHJvZHVjdG9zXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlRXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVyIFByb2R1Y3Rvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZVwiIGlkPVwidmVyLXByb2R1Y3Rvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8ucHJvZHVjdG9zLm1hcChwcm9kdWN0byA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ob21icmU6IHtwcm9kdWN0by5ub21icmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DYW50aWRhZDoge3Byb2R1Y3RvLmNhbnRpZGFkfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+VmFsb3IgZGVsIFBlZGlkbzogJHtwZWRpZG8ucHJlY2lvZmluYWx9PC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1ib2R5IG15LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkRhdG9zIGRlbCBDbGllbnRlPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm9tYnJlOiB7cGVkaWRvLmNsaWVudGVkYXRvcy5ub21icmV9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlZGlkby5jbGllbnRlZGF0b3MubnVtZXJvID09PSB1bmRlZmluZWQgfHwgcGVkaWRvLmNsaWVudGVkYXRvcy5kaXJlY2Npb24gPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5OdW1lcm86IHtwZWRpZG8uY2xpZW50ZWRhdG9zLm51bWVyb308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2FudGlkYWQ6IHtwZWRpZG8uY2xpZW50ZWRhdG9zLmRpcmVjY2lvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkVkaXRhciBEYXRvczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpZW1wb2VudHJlZ2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gZ3VhcmRhck1vZGlmaWNhckRhdG9zKHsgLi4ubW9kaWZpY2FyRGF0b3MsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaWVtcG8gRW50cmVnYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZXN0YWRvcGFnb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gZ3VhcmRhck1vZGlmaWNhckRhdG9zKHsgLi4ubW9kaWZpY2FyRGF0b3MsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkVzdGFkbyBkZSBwYWdvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVuZGllbnRlXCI+UGVuZGllbnRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGFnYWRvXCI+UGFnYWRvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmVjaGF6YWRvXCI+UmVjaGF6YWRvPC9vcHRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlc3RhZG9lbnRyZWdhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBndWFyZGFyTW9kaWZpY2FyRGF0b3MoeyAuLi5tb2RpZmljYXJEYXRvcywgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+RXN0YWRvIGRlIGVudHJlZ2E8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwZW5kaWVudGVcIj5QZW5kaWVudGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlbiBwcm9jZXNvXCI+RW4gUHJvY2Vzbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVudHJlZ2Fkb1wiPkVudHJlZ2Fkbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNhbmNlbGFkb1wiPkNhbmNlbGFkbzwvb3B0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4gZWRpdGFyQ2FtcG9zKHBlZGlkby5pZHRvdGFscGVkaWRvcyl9PiBFZGl0YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWRtaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdG9uRWxpbWluYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlY2liaXJJRChwZWRpZG8uaWR0b3RhbHBlZGlkb3MpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNtb2RhbC1lbGltaW5hY2lvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIiA+RWxpbWluYXI8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JvdG9uRWxpbWluYXI+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJtb2RhbC1lbGltaW5hY2lvblwiIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPkVsaW1pbmFyPzwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgb25DbGljaz17KCkgPT4gY2VycmFyTW9kYWwoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFsbWVudGUgZGVzZWEgRWxpbWluYXIgZXN0ZSBQcm9kdWN0bz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXsoKSA9PiBjYW5jZWxhckNvbmZpcm1hclByb2R1Y3RvKCl9PkNhbmNlbGFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17KCkgPT4gY29uZmlybWFyUHJvZHVjdG8oKX0+RWxpbWluYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJkID5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPERpdlNlcGFyYWNpb24+XHJcblxyXG4gICAgICAgICAgICA8L0RpdlNlcGFyYWNpb24+XHJcblxyXG5cclxuICAgICAgICA8L0xheW91dCA+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZWRpZG9BZG1pbjsiXSwic291cmNlUm9vdCI6IiJ9