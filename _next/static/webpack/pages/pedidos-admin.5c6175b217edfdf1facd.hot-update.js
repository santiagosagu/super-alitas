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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    display: flex;\n    justify-content: flex-end;\n    font-size: 1.2rem;\n    margin: 2rem 1rem;\n    cursor: pointer;\n\n    small {\n        &:hover{\n            background-color: #343a40;\n            padding:0.2rem;\n            color: #fff!important;\n            border-radius: 5px;\n    }\n    }\n    \n"]);

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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\n    \n    \n    li {\n        list-style: none;\n        border-bottom: 1px solid #e1e1e1;\n    }\n\n    .input {\n            margin-bottom: 0.5rem;\n            text-align: center;\n        }\n    \n    @media (min-width: 768px) {\n\n        margin: 2% 8rem 5% 8rem; \n        \n\n        .body-card {\n            align-items: center;\n            text-align: center;\n            display: flex;\n            flex-direction: column;\n            justify-content:center;\n            margin-top: 2rem;\n        }\n    }\n\n    \n"]);

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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\n    padding: 1rem;\n    margin: 1rem;\n    font-weight: bold;\n    color: white;\n\n    @media (min-width: 768px) {\n        margin: 5% 45% 1% 45%; \n        align-items: center;\n        text-align: center;\n        border: 1px solid #e1e1e1;\n        display: inline-block;\n        padding: 1rem 1.5rem;\n        border-radius: 5px;\n        cursor: pointer;\n    }\n"]);

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
      lineNumber: 305,
      columnNumber: 9
    }
  }, pedidos.length === 0 ? __jsx(AlertaSInProductos, {
    className: "card-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 37
    }
  }, "Aun no Hay Pedidos") : null, !admin || pedidos.length === 0 ? null : __jsx(BotonBuscar, {
    className: "bg-dark",
    onClick: function onClick() {
      return abrirBuscadorFn();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 19
    }
  }, "Buscar"), abrirBuscador ? __jsx(DivAcordeonBuscador, {
    className: "accordion ",
    id: "accordionExample",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "card-header",
    id: "headingOne",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 25
    }
  }, __jsx("h2", {
    className: "mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 29
    }
  }, __jsx("button", {
    className: "btn nav-link btn-block text-left",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapseOne",
    "aria-expanded": "true",
    "aria-controls": "collapseOne",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
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
      lineNumber: 327,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
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
      lineNumber: 329,
      columnNumber: 33
    }
  })))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "card-header",
    id: "headingTwo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 25
    }
  }, __jsx("h2", {
    className: "mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 29
    }
  }, __jsx("button", {
    className: "btn nav-link btn-block text-left collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapseTwo",
    "aria-expanded": "false",
    "aria-controls": "collapseTwo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
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
      lineNumber: 346,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
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
      lineNumber: 348,
      columnNumber: 33
    }
  }, __jsx("option", {
    value: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 37
    }
  }, "Estado de entrega"), __jsx("option", {
    value: "pendiente",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 37
    }
  }, "Pendiente"), __jsx("option", {
    value: "en proceso",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 37
    }
  }, "En Proceso"), __jsx("option", {
    value: "entregado",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 37
    }
  }, "Entregado"), __jsx("option", {
    value: "cancelado",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 37
    }
  }, "Cancelado")))))) : null, buscar ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 19
    }
  }, resultadoBusqueda.map(function (pedido) {
    return __jsx(Card, {
      className: "card bg-light my-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 21
      }
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, pedido.estadoentrega === 'entregado' ? __jsx("div", {
      className: "alert alert-info ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 35
      }
    }, "Pedido Entregado") : null, pedido.estadoentrega === 'pendiente' ? __jsx("div", {
      className: "alert alert-warning ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 35
      }
    }, "Pedido Pendiente") : null, pedido.estadoentrega === 'cancelado' ? __jsx("div", {
      className: "alert alert-danger ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 35
      }
    }, "Pedido Cancelado") : null, pedido.estadoentrega === 'en proceso' ? __jsx("div", {
      className: "alert alert-primary ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 35
      }
    }, "Pedido En Proceso") : null, __jsx("div", {
      className: "card-body body-card my-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395,
        columnNumber: 29
      }
    }, __jsx("h5", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 33
      }
    }, "Referencia: ", pedido.reference, " "), __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 33
      }
    }, "Tiempo Estimado de Entrega: ", pedido.promedioentrega, " "), __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 33
      }
    }, "Tipo de Entrega: ", pedido.tipoentrega, " "), __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 33
      }
    }, "Metodo de Pago: ", pedido.metodopago, " "), pedido.estadopago === 'pendiente' ? __jsx("h6", {
      className: "card-title alert alert-warning",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 70
      }
    }, "Estado del Pago: ", pedido.estadopago, " ") : null, pedido.estadopago === 'pagado' ? __jsx("h6", {
      className: "card-title alert alert-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 67
      }
    }, "Estado del Pago: ", pedido.estadopago, " ") : null, pedido.estadopago === 'rechazado' ? __jsx("h6", {
      className: "card-title alert alert-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403,
        columnNumber: 70
      }
    }, "Estado del Pago: ", pedido.estadopago, " ") : null, pedido.observaciones.observacion === '' ? null : __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 83
      }
    }, "Observaciones del Pedido: ", pedido.observaciones.observacion, " "), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408,
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
        lineNumber: 410,
        columnNumber: 37
      }
    }, "Ver Productos")), __jsx("div", {
      "class": "collapse",
      id: "ver-productos",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 33
      }
    }, __jsx("div", {
      "class": "card card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 37
      }
    }, pedido.productos.map(function (producto) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418,
          columnNumber: 45
        }
      }, __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419,
          columnNumber: 49
        }
      }, "Nombre: ", producto.nombre), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420,
          columnNumber: 49
        }
      }, "Cantidad: ", producto.cantidad));
    }))), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 33
      }
    }, "Valor del Pedido: $", pedido.preciofinal), __jsx("div", {
      "class": "card card-body my-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 33
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 37
      }
    }, "Datos del Cliente"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433,
        columnNumber: 37
      }
    }, "Nombre: ", pedido.clientedatos.nombre), pedido.clientedatos.numero === undefined || pedido.clientedatos.direccion === undefined ? null : __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437,
        columnNumber: 43
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438,
        columnNumber: 45
      }
    }, "Numero: ", pedido.clientedatos.numero), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439,
        columnNumber: 45
      }
    }, "Cantidad: ", pedido.clientedatos.direccion))), __jsx("div", {
      "class": "card card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 33
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446,
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
        lineNumber: 447,
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
        lineNumber: 454,
        columnNumber: 37
      }
    }, __jsx("option", {
      value: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459,
        columnNumber: 41
      }
    }, "Estado de pago"), __jsx("option", {
      value: "pendiente",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460,
        columnNumber: 41
      }
    }, "Pendiente"), __jsx("option", {
      value: "pagado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 461,
        columnNumber: 41
      }
    }, "Pagado"), __jsx("option", {
      value: "rechazado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462,
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
        lineNumber: 466,
        columnNumber: 37
      }
    }, __jsx("option", {
      value: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 471,
        columnNumber: 41
      }
    }, "Estado de entrega"), __jsx("option", {
      value: "pendiente",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 472,
        columnNumber: 41
      }
    }, "Pendiente"), __jsx("option", {
      value: "en proceso",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 473,
        columnNumber: 41
      }
    }, "En Proceso"), __jsx("option", {
      value: "entregado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 474,
        columnNumber: 41
      }
    }, "Entregado"), __jsx("option", {
      value: "cancelado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 475,
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
        lineNumber: 479,
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
        lineNumber: 487,
        columnNumber: 37
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 493,
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
        lineNumber: 497,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "modal-dialog",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "modal-content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 499,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: "modal-header",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 500,
        columnNumber: 49
      }
    }, __jsx("h5", {
      className: "modal-title",
      id: "exampleModalLabel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 501,
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
        lineNumber: 502,
        columnNumber: 53
      }
    }, __jsx("span", {
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503,
        columnNumber: 57
      }
    }, "\xD7"))), __jsx("div", {
      className: "modal-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 506,
        columnNumber: 49
      }
    }, "Realmente desea Eliminar este Producto?"), __jsx("div", {
      className: "modal-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 509,
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
        lineNumber: 510,
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
        lineNumber: 511,
        columnNumber: 53
      }
    }, "Eliminar")))))) : null));
  })) : null, !admin ? __jsx(CentrarH2, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 23
    }
  }, "No tienes Permiso de Estar aqui") : null, !admin || buscar ? null : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 19
    }
  }, pedidos.map(function (pedido) {
    return __jsx(Card, {
      className: "card bg-light my-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 533,
        columnNumber: 21
      }
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, pedido.estadoentrega === 'entregado' ? __jsx("div", {
      className: "alert alert-info ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 537,
        columnNumber: 35
      }
    }, "Pedido Entregado") : null, pedido.estadoentrega === 'pendiente' ? __jsx("div", {
      className: "alert alert-warning ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542,
        columnNumber: 35
      }
    }, "Pedido Pendiente") : null, pedido.estadoentrega === 'cancelado' ? __jsx("div", {
      className: "alert alert-danger ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 547,
        columnNumber: 35
      }
    }, "Pedido Cancelado") : null, pedido.estadoentrega === 'en proceso' ? __jsx("div", {
      className: "alert alert-primary ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 552,
        columnNumber: 35
      }
    }, "Pedido En Proceso") : null, __jsx("div", {
      className: "card-body body-card my-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 556,
        columnNumber: 29
      }
    }, __jsx("h5", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 557,
        columnNumber: 33
      }
    }, "Referencia: ", pedido.reference, " "), __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 558,
        columnNumber: 33
      }
    }, "Tiempo Estimado de Entrega: ", pedido.promedioentrega, " "), __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 559,
        columnNumber: 33
      }
    }, "Tipo de Entrega: ", pedido.tipoentrega, " "), __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 560,
        columnNumber: 33
      }
    }, "Metodo de Pago: ", pedido.metodopago, " "), pedido.estadopago === 'pendiente' ? __jsx("h6", {
      className: "card-title alert alert-warning my-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 562,
        columnNumber: 70
      }
    }, "Estado del Pago: ", pedido.estadopago, " ") : null, pedido.estadopago === 'pagado' ? __jsx("h6", {
      className: "card-title alert alert-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 563,
        columnNumber: 67
      }
    }, "Estado del Pago: ", pedido.estadopago, " ") : null, pedido.estadopago === 'rechazado' ? __jsx("h6", {
      className: "card-title alert alert-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 564,
        columnNumber: 70
      }
    }, "Estado del Pago: ", pedido.estadopago, " ") : null, pedido.observaciones.observacion === '' ? null : __jsx("h6", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 567,
        columnNumber: 83
      }
    }, "Observaciones del Pedido: ", pedido.observaciones.observacion, " "), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 569,
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
        lineNumber: 571,
        columnNumber: 37
      }
    }, "Ver Productos")), __jsx("div", {
      "class": "collapse",
      id: "ver-productos",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 576,
        columnNumber: 33
      }
    }, __jsx("div", {
      "class": "card card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 577,
        columnNumber: 37
      }
    }, pedido.productos.map(function (producto) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579,
          columnNumber: 45
        }
      }, __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580,
          columnNumber: 49
        }
      }, "Nombre: ", producto.nombre), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581,
          columnNumber: 49
        }
      }, "Cantidad: ", producto.cantidad));
    }))), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 590,
        columnNumber: 33
      }
    }, "Valor del Pedido: $", pedido.preciofinal), __jsx("div", {
      "class": "card card-body my-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 592,
        columnNumber: 33
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 593,
        columnNumber: 37
      }
    }, "Datos del Cliente"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 594,
        columnNumber: 37
      }
    }, "Nombre: ", pedido.clientedatos.nombre), pedido.clientedatos.numero === undefined || pedido.clientedatos.direccion === undefined ? null : __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 598,
        columnNumber: 43
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 599,
        columnNumber: 45
      }
    }, "Numero: ", pedido.clientedatos.numero), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 600,
        columnNumber: 45
      }
    }, "Cantidad: ", pedido.clientedatos.direccion))), __jsx("div", {
      "class": "card card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 606,
        columnNumber: 33
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 607,
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
        lineNumber: 608,
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
    }, "Estado de pago"), __jsx("option", {
      value: "pendiente",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 621,
        columnNumber: 41
      }
    }, "Pendiente"), __jsx("option", {
      value: "pagado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 622,
        columnNumber: 41
      }
    }, "Pagado"), __jsx("option", {
      value: "rechazado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 623,
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
        lineNumber: 627,
        columnNumber: 37
      }
    }, __jsx("option", {
      value: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 632,
        columnNumber: 41
      }
    }, "Estado de entrega"), __jsx("option", {
      value: "pendiente",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 633,
        columnNumber: 41
      }
    }, "Pendiente"), __jsx("option", {
      value: "en proceso",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 634,
        columnNumber: 41
      }
    }, "En Proceso"), __jsx("option", {
      value: "entregado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 635,
        columnNumber: 41
      }
    }, "Entregado"), __jsx("option", {
      value: "cancelado",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 636,
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
        lineNumber: 640,
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
        lineNumber: 648,
        columnNumber: 37
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 654,
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
        lineNumber: 658,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "modal-dialog",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 659,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "modal-content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 660,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: "modal-header",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 661,
        columnNumber: 49
      }
    }, __jsx("h5", {
      className: "modal-title",
      id: "exampleModalLabel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 662,
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
        lineNumber: 663,
        columnNumber: 53
      }
    }, __jsx("span", {
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 664,
        columnNumber: 57
      }
    }, "\xD7"))), __jsx("div", {
      className: "modal-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 667,
        columnNumber: 49
      }
    }, "Realmente desea Eliminar este Producto?"), __jsx("div", {
      className: "modal-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 670,
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
        lineNumber: 671,
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
        lineNumber: 672,
        columnNumber: 53
      }
    }, "Eliminar")))))) : null));
  })), __jsx(DivSeparacion, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGVkaWRvcy1hZG1pbi5qcyJdLCJuYW1lcyI6WyJDZW50cmFySDIiLCJzdHlsZWQiLCJoMiIsIkJvdG9uQnVzY2FyIiwiaDUiLCJEaXZBY29yZGVvbkJ1c2NhZG9yIiwiZGl2IiwiQWxlcnRhU0luUHJvZHVjdG9zIiwiQ2FyZCIsIkRpdlNlcGFyYWNpb24iLCJCb3RvbkVsaW1pbmFyIiwicCIsIlBlZGlkb0FkbWluIiwidXNlU3RhdGUiLCJwZWRpZG9zIiwiZ3VyZGFyUGVkaWRvcyIsInRpZW1wb2VudHJlZ2EiLCJlc3RhZG9wYWdvIiwiZXN0YWRvZW50cmVnYSIsIm1vZGlmaWNhckRhdG9zIiwiZ3VhcmRhck1vZGlmaWNhckRhdG9zIiwiYWJyaXJCdXNjYWRvciIsImd1YXJkYXJBYnJpckJ1c2NhZG9yIiwiYnVzcXVlZGFnZW5lcmFsIiwibWV0b2RvcGFnbyIsImZpbHRyb0J1c3F1ZWRhIiwiZ3VhcmRhckZpbHRyb0J1c3F1ZWRhIiwicmVzdWx0YWRvQnVzcXVlZGEiLCJndWFyZGFyUmVzdWx0YWRvQnVzcXVlZGEiLCJidXNjYXIiLCJndWFyZGFyQnVzY2FyIiwidXNlQ29udGV4dCIsIkZpcmViYXNlQ29udGV4dCIsImZpcmViYXNlIiwidXN1YXJpbyIsInVzZUFkbWluIiwiYWRtaW4iLCJ1c2VFbGltaW5hclByb2R1Y3RvIiwicHJvZHVjdG9FbGltaW5hciIsImd1YXJkYXJQZWRpZG9FbGltaW5hciIsImd1YXJkYXJDb25maXJtYWNpb25FbGltaW5hclByb2R1Y3RvIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0Iiwib2J0ZW5lclByb2R1Y3RvcyIsImRiIiwiY29sbGVjdGlvbiIsIm9yZGVyQnkiLCJvblNuYXBzaG90IiwibWFuZWphclNuYXBzaG90Iiwic25hcHNob3QiLCJwZWRpZG8iLCJkb2NzIiwibWFwIiwiZG9jIiwiaWR0b3RhbHBlZGlkb3MiLCJpZCIsImRhdGEiLCJ1bmRlZmluZWQiLCJidXNjYXJHZW5lcmFsRm4iLCJidXNxdWVkYSIsInRvTG93ZXJDYXNlIiwicmVzdWx0YWRvIiwiZmlsdGVyIiwicHJvbWVkaW9lbnRyZWdhIiwiaW5jbHVkZXMiLCJ0aXBvZW50cmVnYSIsImNsaWVudGVkYXRvcyIsIm5vbWJyZSIsInJlZmVyZW5jZSIsImJ1c3F1ZWRhRXN0YWRvRW50cmVnYUZuIiwiZWRpdGFyQ2FtcG9zIiwiZWRpdGFyUGVkaWRvIiwiZWRpdGFyVGllbXBvIiwidXBkYXRlIiwiZWRpdGFyRXN0YWRvUGFnbyIsImVkaXRhckVzdGFkb0VudHJlZ2EiLCJyZWNpYmlySUQiLCJjb25zb2xlIiwibG9nIiwiY29uZmlybWFyUHJvZHVjdG8iLCJjYW5jZWxhckNvbmZpcm1hclByb2R1Y3RvIiwiY2VycmFyTW9kYWwiLCJhYnJpckJ1c2NhZG9yRm4iLCJsZW5ndGgiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwib2JzZXJ2YWNpb25lcyIsIm9ic2VydmFjaW9uIiwicHJvZHVjdG9zIiwicHJvZHVjdG8iLCJjYW50aWRhZCIsInByZWNpb2ZpbmFsIiwibnVtZXJvIiwiZGlyZWNjaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsdURBQU0sQ0FBQ0MsRUFBVixtQkFBZjtLQUFNRixTO0FBUU4sSUFBTUcsV0FBVyxHQUFHRix1REFBTSxDQUFDRyxFQUFWLG9CQUFqQjtNQUFNRCxXO0FBbUJOLElBQU1FLG1CQUFtQixHQUFHSix1REFBTSxDQUFDSyxHQUFWLG9CQUF6QjtNQUFNRCxtQjtBQU9OLElBQU1FLGtCQUFrQixHQUFHTix1REFBTSxDQUFDSyxHQUFWLG9CQUF4QjtNQUFNQyxrQjtBQVFOLElBQU1DLElBQUksR0FB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SixDQVZKLENBREosQ0FESixDQVhKLENBRkUsR0FpQ0EsSUEvSVYsQ0FGSixDQURzQjtBQUFBLEdBQWxCLENBQU4sQ0FuT1YsRUFnWUksTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoWUosQ0FESjtBQXdZSCxDQTVrQkQ7O0dBQU1wRSxXO1VBOEJnQnVCLHVELEVBR3VFRSxrRSxFQUcxRUsscUQ7OztNQXBDYjlCLFc7QUE4a0JTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZWRpZG9zLWFkbWluLjVjNjE3NWIyMTdlZGZkZjFmYWNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5pbXBvcnQgeyBGaXJlYmFzZUNvbnRleHQgfSBmcm9tICcuLi9maXJlYmFzZSdcclxuaW1wb3J0IHVzZUFkbWluIGZyb20gJy4uL2hvb2tzL3VzZUFkbWluJ1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgdXNlRWxpbWluYXJQcm9kdWN0byBmcm9tICcuLi9ob29rcy91c2VFbGltaW5hclByb2R1Y3RvJ1xyXG5cclxuY29uc3QgQ2VudHJhckgyID0gc3R5bGVkLmgyYFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlOyBcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgQm90b25CdXNjYXIgPSBzdHlsZWQuaDVgXHJcblxyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIG1hcmdpbjogNSUgNDUlIDElIDQ1JTsgXHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgRGl2QWNvcmRlb25CdXNjYWRvciA9IHN0eWxlZC5kaXZgXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBtYXJnaW46IDElIDhyZW07IFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBBbGVydGFTSW5Qcm9kdWN0b3MgPSBzdHlsZWQuZGl2YFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgICAgICAgbWFyZ2luOiAyJSA4cmVtIDUlIDhyZW07IFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAuYm9keS1jYXJkIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuYFxyXG5cclxuY29uc3QgRGl2U2VwYXJhY2lvbiA9IHN0eWxlZC5kaXZgXHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG5gXHJcbmNvbnN0IEJvdG9uRWxpbWluYXIgPSBzdHlsZWQucGBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW46IDJyZW0gMXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICBzbWFsbCB7XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcclxuICAgICAgICAgICAgcGFkZGluZzowLjJyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbmBcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IFBlZGlkb0FkbWluID0gKCkgPT4ge1xyXG5cclxuICAgIC8vc3RhdGUgZGUgdG9kb3MgbG9zIHBlZGlkb3NcclxuICAgIGNvbnN0IFtwZWRpZG9zLCBndXJkYXJQZWRpZG9zXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIC8vc3RhdGUgcGFyYSBlZGl0YXJcclxuICAgIGNvbnN0IFttb2RpZmljYXJEYXRvcywgZ3VhcmRhck1vZGlmaWNhckRhdG9zXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB0aWVtcG9lbnRyZWdhOiAnJyxcclxuICAgICAgICBlc3RhZG9wYWdvOiAnJyxcclxuICAgICAgICBlc3RhZG9lbnRyZWdhOiAnJ1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyBzdGF0ZSBhYnJpciBidXNjYWRvclxyXG4gICAgY29uc3QgW2FicmlyQnVzY2Fkb3IsIGd1YXJkYXJBYnJpckJ1c2NhZG9yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHJcbiAgICAvLyBzdGF0ZSBkZWwgZmlsdHJvIGRlIGJ1c2NhclxyXG4gICAgY29uc3QgW2ZpbHRyb0J1c3F1ZWRhLCBndWFyZGFyRmlsdHJvQnVzcXVlZGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGJ1c3F1ZWRhZ2VuZXJhbDogJycsXHJcbiAgICAgICAgZXN0YWRvZW50cmVnYTogJycsXHJcbiAgICAgICAgbWV0b2RvcGFnbzogJydcclxuICAgIH0pXHJcblxyXG4gICAgLy8gc3RhdGUgY29uIGxvcyBwZWRpZG9zIGRlIGxhIGJ1c3F1ZWRhXHJcbiAgICBjb25zdCBbcmVzdWx0YWRvQnVzcXVlZGEsIGd1YXJkYXJSZXN1bHRhZG9CdXNxdWVkYV0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICAvLyBzdGF0ZSBkZSBidXNjYXJcclxuICAgIGNvbnN0IFtidXNjYXIsIGd1YXJkYXJCdXNjYXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgeyBmaXJlYmFzZSwgdXN1YXJpbyB9ID0gdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpXHJcbiAgICBjb25zdCB7IGFkbWluIH0gPSB1c2VBZG1pbigpXHJcblxyXG4gICAgLy91dGlsaXphbW9zIGVsIHVzZSBlbGltaW5hciBwcm9kdWN0b1xyXG4gICAgY29uc3QgeyBwcm9kdWN0b0VsaW1pbmFyLCBndWFyZGFyUGVkaWRvRWxpbWluYXIsIGd1YXJkYXJDb25maXJtYWNpb25FbGltaW5hclByb2R1Y3RvIH0gPSB1c2VFbGltaW5hclByb2R1Y3RvKClcclxuXHJcbiAgICAvL2RlZmluaW1vcyBlbCByb3V0ZXJcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIC8vdHJhZXIgdG9kb3MgbG9zIHBlZGlkb3NcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2J0ZW5lclByb2R1Y3RvcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbigndG90YWxwZWRpZG9zJykub3JkZXJCeShcImZlY2hhcGVkaWRvXCIsIFwiYXNjXCIpLm9uU25hcHNob3QobWFuZWphclNuYXBzaG90KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2J0ZW5lclByb2R1Y3RvcygpXHJcblxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgZnVuY3Rpb24gbWFuZWphclNuYXBzaG90KHNuYXBzaG90KSB7XHJcbiAgICAgICAgY29uc3QgcGVkaWRvID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlkdG90YWxwZWRpZG9zOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGd1cmRhclBlZGlkb3MocGVkaWRvKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBmaWx0cmFyIGxhcyBidXNxdWVkYXNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vYnVzcXVlZGEgZ2VuZXJhbFxyXG4gICAgICAgIGlmIChmaWx0cm9CdXNxdWVkYS5idXNxdWVkYWdlbmVyYWwgPT09IHVuZGVmaW5lZCkge1xyXG5cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgYnVzY2FyR2VuZXJhbEZuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVzcXVlZGEgPSBmaWx0cm9CdXNxdWVkYS5idXNxdWVkYWdlbmVyYWwudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gcGVkaWRvcy5maWx0ZXIocGVkaWRvID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVkaWRvLnByb21lZGlvZW50cmVnYS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ1c3F1ZWRhKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZWRpZG8uZXN0YWRvcGFnby50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ1c3F1ZWRhKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZWRpZG8ubWV0b2RvcGFnby50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ1c3F1ZWRhKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZWRpZG8udGlwb2VudHJlZ2EudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhidXNxdWVkYSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVkaWRvLmNsaWVudGVkYXRvcy5ub21icmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhidXNxdWVkYSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVkaWRvLmVzdGFkb2VudHJlZ2EudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhidXNxdWVkYSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVkaWRvLnJlZmVyZW5jZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ1c3F1ZWRhKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIGd1YXJkYXJSZXN1bHRhZG9CdXNxdWVkYShyZXN1bHRhZG8pXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnVzY2FyR2VuZXJhbEZuKClcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW2ZpbHRyb0J1c3F1ZWRhLCBwZWRpZG9zXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChmaWx0cm9CdXNxdWVkYS5lc3RhZG9lbnRyZWdhICE9PSAnJyAmJiBmaWx0cm9CdXNxdWVkYS5tZXRvZG9wYWdvID09PSB1bmRlZmluZWQgJiYgZmlsdHJvQnVzcXVlZGEuYnVzcXVlZGFnZW5lcmFsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgYnVzcXVlZGFFc3RhZG9FbnRyZWdhRm4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidXNxdWVkYSA9IGZpbHRyb0J1c3F1ZWRhLmVzdGFkb2VudHJlZ2FcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IHBlZGlkb3MuZmlsdGVyKHBlZGlkbyA9PiBwZWRpZG8uZXN0YWRvZW50cmVnYSA9PT0gYnVzcXVlZGEpXHJcblxyXG4gICAgICAgICAgICAgICAgZ3VhcmRhclJlc3VsdGFkb0J1c3F1ZWRhKHJlc3VsdGFkbylcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnVzcXVlZGFFc3RhZG9FbnRyZWdhRm4oKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH0sIFtmaWx0cm9CdXNxdWVkYSwgcGVkaWRvc10pXHJcblxyXG5cclxuXHJcbiAgICAvL0VkaXRhciBjYW1wb3NcclxuICAgIGNvbnN0IGVkaXRhckNhbXBvcyA9IGlkID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZWRpdGFyUGVkaWRvID0gZmlyZWJhc2UuZGIuY29sbGVjdGlvbihcInRvdGFscGVkaWRvc1wiKS5kb2MoaWQpO1xyXG5cclxuICAgICAgICBjb25zdCBlZGl0YXJUaWVtcG8gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtb2RpZmljYXJEYXRvcy50aWVtcG9lbnRyZWdhID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWRpdGFyUGVkaWRvLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWVkaW9lbnRyZWdhOiBtb2RpZmljYXJEYXRvcy50aWVtcG9lbnRyZWdhXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWRpdGFyVGllbXBvKClcclxuXHJcbiAgICAgICAgY29uc3QgZWRpdGFyRXN0YWRvUGFnbyA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1vZGlmaWNhckRhdG9zLmVzdGFkb3BhZ28gPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlZGl0YXJQZWRpZG8udXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBlc3RhZG9wYWdvOiBtb2RpZmljYXJEYXRvcy5lc3RhZG9wYWdvXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVkaXRhckVzdGFkb1BhZ28oKVxyXG5cclxuICAgICAgICBjb25zdCBlZGl0YXJFc3RhZG9FbnRyZWdhID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobW9kaWZpY2FyRGF0b3MuZXN0YWRvZW50cmVnYSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRhclBlZGlkby51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVzdGFkb2VudHJlZ2E6IG1vZGlmaWNhckRhdG9zLmVzdGFkb2VudHJlZ2FcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlZGl0YXJFc3RhZG9FbnRyZWdhKClcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vcmVjaWJpciBpZCBhIGVsaW1pbmFyXHJcbiAgICBjb25zdCByZWNpYmlySUQgPSBpZCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICAgICAgZ3VhcmRhclBlZGlkb0VsaW1pbmFyKGlkKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL2NvbmZpcm1hbW9zIGVsaW1pbmFjaW9uXHJcbiAgICBjb25zdCBjb25maXJtYXJQcm9kdWN0byA9ICgpID0+IHtcclxuICAgICAgICBndWFyZGFyQ29uZmlybWFjaW9uRWxpbWluYXJQcm9kdWN0byh0cnVlKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL2NhbmNlbGFyIGVsaW1pbmFjaW9uIHByb2R1Y3RvXHJcbiAgICBjb25zdCBjYW5jZWxhckNvbmZpcm1hclByb2R1Y3RvID0gKCkgPT4ge1xyXG4gICAgICAgIGd1YXJkYXJDb25maXJtYWNpb25FbGltaW5hclByb2R1Y3RvKGZhbHNlKVxyXG4gICAgICAgIGd1YXJkYXJQZWRpZG9FbGltaW5hcignJylcclxuICAgIH1cclxuXHJcbiAgICAvL2NlcnJhciBlbCBtb2RhbFxyXG4gICAgY29uc3QgY2VycmFyTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgZ3VhcmRhckNvbmZpcm1hY2lvbkVsaW1pbmFyUHJvZHVjdG8oZmFsc2UpXHJcbiAgICAgICAgZ3VhcmRhclBlZGlkb0VsaW1pbmFyKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGFicmlyIHkgY2VycmFyIGVsIGJ1c2NhZG9yXHJcbiAgICBjb25zdCBhYnJpckJ1c2NhZG9yRm4gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGFicmlyQnVzY2Fkb3IpIHtcclxuICAgICAgICAgICAgZ3VhcmRhckFicmlyQnVzY2Fkb3IoZmFsc2UpXHJcbiAgICAgICAgICAgIGd1YXJkYXJCdXNjYXIoZmFsc2UpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ3VhcmRhckFicmlyQnVzY2Fkb3IodHJ1ZSlcclxuICAgICAgICAgICAgZ3VhcmRhckJ1c2Nhcih0cnVlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG5cclxuICAgICAgICAgICAge3BlZGlkb3MubGVuZ3RoID09PSAwID8gPEFsZXJ0YVNJblByb2R1Y3RvcyBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPkF1biBubyBIYXkgUGVkaWRvczwvQWxlcnRhU0luUHJvZHVjdG9zPiA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICB7LyogZWwgYm90b24gYnVzY2FyIGFwYXJlY2UgY3VhbmRvIGhheSB1biBhZG1pbiAqL31cclxuICAgICAgICAgICAgeyFhZG1pbiB8fCBwZWRpZG9zLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICA6IDxCb3RvbkJ1c2NhciBjbGFzc05hbWU9XCJiZy1kYXJrXCIgb25DbGljaz17KCkgPT4gYWJyaXJCdXNjYWRvckZuKCl9PkJ1c2NhcjwvQm90b25CdXNjYXI+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHsvKiBmaWx0cm9zIGRlIGJ1c3F1ZWRhcyAqL31cclxuICAgICAgICAgICAge2FicmlyQnVzY2Fkb3JcclxuICAgICAgICAgICAgICAgID8gPERpdkFjb3JkZW9uQnVzY2Fkb3IgY2xhc3NOYW1lPVwiYWNjb3JkaW9uIFwiIGlkPVwiYWNjb3JkaW9uRXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCIgaWQ9XCJoZWFkaW5nT25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIG5hdi1saW5rIGJ0bi1ibG9jayB0ZXh0LWxlZnRcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlT25lXCIgYXJpYS1leHBhbmRlZD1cInRydWVcIiBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VPbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnVzY2FyIGVuIFRvZG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbGxhcHNlT25lXCIgY2xhc3NOYW1lPVwiY29sbGFwc2Ugc2hvd1wiIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdPbmVcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25FeGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYnVzcXVlZGFnZW5lcmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gZ3VhcmRhckZpbHRyb0J1c3F1ZWRhKHsgLi4ubW9kaWZpY2FyRGF0b3MsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnVzY2FyIGVuIGdlbmVyYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIiBpZD1cImhlYWRpbmdUd29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gbmF2LWxpbmsgYnRuLWJsb2NrIHRleHQtbGVmdCBjb2xsYXBzZWRcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlVHdvXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlVHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1c2NhciBwb3IgZXN0YWRvIGRlIGVudHJlZ2FcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb2xsYXBzZVR3b1wiIGNsYXNzTmFtZT1cImNvbGxhcHNlXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZ1R3b1wiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbkV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlc3RhZG9lbnRyZWdhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gZ3VhcmRhckZpbHRyb0J1c3F1ZWRhKHsgLi4ubW9kaWZpY2FyRGF0b3MsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+RXN0YWRvIGRlIGVudHJlZ2E8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBlbmRpZW50ZVwiPlBlbmRpZW50ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZW4gcHJvY2Vzb1wiPkVuIFByb2Nlc288L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVudHJlZ2Fkb1wiPkVudHJlZ2Fkbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2FuY2VsYWRvXCI+Q2FuY2VsYWRvPC9vcHRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvRGl2QWNvcmRlb25CdXNjYWRvcj5cclxuICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgey8qIGVsIHJlc3VsdGFkbyBkZSBsYSBidXNxdWVkYSBhcGFyZWNlIGN1YW5kbyBzZSBsZSBkYSBjbGljayAqL31cclxuICAgICAgICAgICAge2J1c2NhclxyXG4gICAgICAgICAgICAgICAgPyA8ZGl2PntyZXN1bHRhZG9CdXNxdWVkYS5tYXAocGVkaWRvID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJjYXJkIGJnLWxpZ2h0IG15LTJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLmVzdGFkb2VudHJlZ2EgPT09ICdlbnRyZWdhZG8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm8gXCIgPlBlZGlkbyBFbnRyZWdhZG88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLmVzdGFkb2VudHJlZ2EgPT09ICdwZW5kaWVudGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXdhcm5pbmcgXCIgPlBlZGlkbyBQZW5kaWVudGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLmVzdGFkb2VudHJlZ2EgPT09ICdjYW5jZWxhZG8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlciBcIiA+UGVkaWRvIENhbmNlbGFkbzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8uZXN0YWRvZW50cmVnYSA9PT0gJ2VuIHByb2Nlc28nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXByaW1hcnkgXCIgPlBlZGlkbyBFbiBQcm9jZXNvPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYm9keS1jYXJkIG15LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlJlZmVyZW5jaWE6IHtwZWRpZG8ucmVmZXJlbmNlfSA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+VGllbXBvIEVzdGltYWRvIGRlIEVudHJlZ2E6IHtwZWRpZG8ucHJvbWVkaW9lbnRyZWdhfSA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+VGlwbyBkZSBFbnRyZWdhOiB7cGVkaWRvLnRpcG9lbnRyZWdhfSA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+TWV0b2RvIGRlIFBhZ286IHtwZWRpZG8ubWV0b2RvcGFnb30gPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogZXN0YWRvIGRlbCBwYWdvICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8uZXN0YWRvcGFnbyA9PT0gJ3BlbmRpZW50ZScgPyA8aDYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBhbGVydCBhbGVydC13YXJuaW5nXCI+RXN0YWRvIGRlbCBQYWdvOiB7cGVkaWRvLmVzdGFkb3BhZ299IDwvaDY+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLmVzdGFkb3BhZ28gPT09ICdwYWdhZG8nID8gPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgYWxlcnQgYWxlcnQtaW5mb1wiPkVzdGFkbyBkZWwgUGFnbzoge3BlZGlkby5lc3RhZG9wYWdvfSA8L2g2PiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlZGlkby5lc3RhZG9wYWdvID09PSAncmVjaGF6YWRvJyA/IDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGFsZXJ0IGFsZXJ0LWRhbmdlclwiPkVzdGFkbyBkZWwgUGFnbzoge3BlZGlkby5lc3RhZG9wYWdvfSA8L2g2PiA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkVzdGFkbyBkZSBsYSBlbnRyZWdhOiB7cGVkaWRvLmVzdGFkb2VudHJlZ2F9IDwvaDY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8ub2JzZXJ2YWNpb25lcy5vYnNlcnZhY2lvbiA9PT0gJycgPyBudWxsIDogPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5PYnNlcnZhY2lvbmVzIGRlbCBQZWRpZG86IHtwZWRpZG8ub2JzZXJ2YWNpb25lcy5vYnNlcnZhY2lvbn0gPC9oNj59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI3Zlci1wcm9kdWN0b3NcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VFeGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXIgUHJvZHVjdG9zXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZVwiIGlkPVwidmVyLXByb2R1Y3Rvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8ucHJvZHVjdG9zLm1hcChwcm9kdWN0byA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ob21icmU6IHtwcm9kdWN0by5ub21icmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DYW50aWRhZDoge3Byb2R1Y3RvLmNhbnRpZGFkfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+VmFsb3IgZGVsIFBlZGlkbzogJHtwZWRpZG8ucHJlY2lvZmluYWx9PC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1ib2R5IG15LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkRhdG9zIGRlbCBDbGllbnRlPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm9tYnJlOiB7cGVkaWRvLmNsaWVudGVkYXRvcy5ub21icmV9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlZGlkby5jbGllbnRlZGF0b3MubnVtZXJvID09PSB1bmRlZmluZWQgfHwgcGVkaWRvLmNsaWVudGVkYXRvcy5kaXJlY2Npb24gPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5OdW1lcm86IHtwZWRpZG8uY2xpZW50ZWRhdG9zLm51bWVyb308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2FudGlkYWQ6IHtwZWRpZG8uY2xpZW50ZWRhdG9zLmRpcmVjY2lvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkVkaXRhciBEYXRvczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpZW1wb2VudHJlZ2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gZ3VhcmRhck1vZGlmaWNhckRhdG9zKHsgLi4ubW9kaWZpY2FyRGF0b3MsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaWVtcG8gRW50cmVnYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZXN0YWRvcGFnb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gZ3VhcmRhck1vZGlmaWNhckRhdG9zKHsgLi4ubW9kaWZpY2FyRGF0b3MsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkVzdGFkbyBkZSBwYWdvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVuZGllbnRlXCI+UGVuZGllbnRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGFnYWRvXCI+UGFnYWRvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmVjaGF6YWRvXCI+UmVjaGF6YWRvPC9vcHRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlc3RhZG9lbnRyZWdhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBndWFyZGFyTW9kaWZpY2FyRGF0b3MoeyAuLi5tb2RpZmljYXJEYXRvcywgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+RXN0YWRvIGRlIGVudHJlZ2E8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwZW5kaWVudGVcIj5QZW5kaWVudGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlbiBwcm9jZXNvXCI+RW4gUHJvY2Vzbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVudHJlZ2Fkb1wiPkVudHJlZ2Fkbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNhbmNlbGFkb1wiPkNhbmNlbGFkbzwvb3B0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4gZWRpdGFyQ2FtcG9zKHBlZGlkby5pZHRvdGFscGVkaWRvcyl9PiBFZGl0YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWRtaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdG9uRWxpbWluYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlY2liaXJJRChwZWRpZG8uaWR0b3RhbHBlZGlkb3MpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNtb2RhbC1lbGltaW5hY2lvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIiA+RWxpbWluYXI8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JvdG9uRWxpbWluYXI+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJtb2RhbC1lbGltaW5hY2lvblwiIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPkVsaW1pbmFyPzwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgb25DbGljaz17KCkgPT4gY2VycmFyTW9kYWwoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFsbWVudGUgZGVzZWEgRWxpbWluYXIgZXN0ZSBQcm9kdWN0bz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17KCkgPT4gY2FuY2VsYXJDb25maXJtYXJQcm9kdWN0bygpfT5DYW5jZWxhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9eygpID0+IGNvbmZpcm1hclByb2R1Y3RvKCl9PkVsaW1pbmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQgPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICB7Lyogc2kgbm8gaGF5IHVuIGFkbWluIGFwYXJlY2UgdW4gbWVuc2FqZSAqL31cclxuICAgICAgICAgICAgeyFhZG1pbiA/IDxDZW50cmFySDI+Tm8gdGllbmVzIFBlcm1pc28gZGUgRXN0YXIgYXF1aTwvQ2VudHJhckgyPiA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICB7Lyogc2kgaGF5IHVuIGFkbWluIHkgbm8gc2UgZXN0YSBidXNjYW5kbyBhcGFyZWNlbiB0b2RvcyBsb3MgcGVkaWRvcyAqL31cclxuICAgICAgICAgICAgeyFhZG1pbiB8fCBidXNjYXJcclxuICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgOiA8ZGl2PntwZWRpZG9zLm1hcChwZWRpZG8gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImNhcmQgYmctbGlnaHQgbXktMlwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8uZXN0YWRvZW50cmVnYSA9PT0gJ2VudHJlZ2FkbydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mbyBcIiA+UGVkaWRvIEVudHJlZ2FkbzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8uZXN0YWRvZW50cmVnYSA9PT0gJ3BlbmRpZW50ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtd2FybmluZyBcIiA+UGVkaWRvIFBlbmRpZW50ZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8uZXN0YWRvZW50cmVnYSA9PT0gJ2NhbmNlbGFkbydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyIFwiID5QZWRpZG8gQ2FuY2VsYWRvPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlZGlkby5lc3RhZG9lbnRyZWdhID09PSAnZW4gcHJvY2VzbydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtcHJpbWFyeSBcIiA+UGVkaWRvIEVuIFByb2Nlc288L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBib2R5LWNhcmQgbXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+UmVmZXJlbmNpYToge3BlZGlkby5yZWZlcmVuY2V9IDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5UaWVtcG8gRXN0aW1hZG8gZGUgRW50cmVnYToge3BlZGlkby5wcm9tZWRpb2VudHJlZ2F9IDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5UaXBvIGRlIEVudHJlZ2E6IHtwZWRpZG8udGlwb2VudHJlZ2F9IDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5NZXRvZG8gZGUgUGFnbzoge3BlZGlkby5tZXRvZG9wYWdvfSA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBlc3RhZG8gZGVsIHBhZ28gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlZGlkby5lc3RhZG9wYWdvID09PSAncGVuZGllbnRlJyA/IDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGFsZXJ0IGFsZXJ0LXdhcm5pbmcgbXktMVwiPkVzdGFkbyBkZWwgUGFnbzoge3BlZGlkby5lc3RhZG9wYWdvfSA8L2g2PiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlZGlkby5lc3RhZG9wYWdvID09PSAncGFnYWRvJyA/IDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGFsZXJ0IGFsZXJ0LWluZm9cIj5Fc3RhZG8gZGVsIFBhZ286IHtwZWRpZG8uZXN0YWRvcGFnb30gPC9oNj4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZWRpZG8uZXN0YWRvcGFnbyA9PT0gJ3JlY2hhemFkbycgPyA8aDYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBhbGVydCBhbGVydC1kYW5nZXJcIj5Fc3RhZG8gZGVsIFBhZ286IHtwZWRpZG8uZXN0YWRvcGFnb30gPC9oNj4gOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5Fc3RhZG8gZGUgbGEgZW50cmVnYToge3BlZGlkby5lc3RhZG9lbnRyZWdhfSA8L2g2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLm9ic2VydmFjaW9uZXMub2JzZXJ2YWNpb24gPT09ICcnID8gbnVsbCA6IDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+T2JzZXJ2YWNpb25lcyBkZWwgUGVkaWRvOiB7cGVkaWRvLm9ic2VydmFjaW9uZXMub2JzZXJ2YWNpb259IDwvaDY+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI3Zlci1wcm9kdWN0b3NcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VFeGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXIgUHJvZHVjdG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlXCIgaWQ9XCJ2ZXItcHJvZHVjdG9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlZGlkby5wcm9kdWN0b3MubWFwKHByb2R1Y3RvID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5vbWJyZToge3Byb2R1Y3RvLm5vbWJyZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNhbnRpZGFkOiB7cHJvZHVjdG8uY2FudGlkYWR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5WYWxvciBkZWwgUGVkaWRvOiAke3BlZGlkby5wcmVjaW9maW5hbH08L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWJvZHkgbXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+RGF0b3MgZGVsIENsaWVudGU8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ob21icmU6IHtwZWRpZG8uY2xpZW50ZWRhdG9zLm5vbWJyZX08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVkaWRvLmNsaWVudGVkYXRvcy5udW1lcm8gPT09IHVuZGVmaW5lZCB8fCBwZWRpZG8uY2xpZW50ZWRhdG9zLmRpcmVjY2lvbiA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk51bWVybzoge3BlZGlkby5jbGllbnRlZGF0b3MubnVtZXJvfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DYW50aWRhZDoge3BlZGlkby5jbGllbnRlZGF0b3MuZGlyZWNjaW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+RWRpdGFyIERhdG9zPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGllbXBvZW50cmVnYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBndWFyZGFyTW9kaWZpY2FyRGF0b3MoeyAuLi5tb2RpZmljYXJEYXRvcywgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpZW1wbyBFbnRyZWdhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlc3RhZG9wYWdvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBndWFyZGFyTW9kaWZpY2FyRGF0b3MoeyAuLi5tb2RpZmljYXJEYXRvcywgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+RXN0YWRvIGRlIHBhZ288L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwZW5kaWVudGVcIj5QZW5kaWVudGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwYWdhZG9cIj5QYWdhZG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyZWNoYXphZG9cIj5SZWNoYXphZG88L29wdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVzdGFkb2VudHJlZ2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGd1YXJkYXJNb2RpZmljYXJEYXRvcyh7IC4uLm1vZGlmaWNhckRhdG9zLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Fc3RhZG8gZGUgZW50cmVnYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBlbmRpZW50ZVwiPlBlbmRpZW50ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVuIHByb2Nlc29cIj5FbiBQcm9jZXNvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZW50cmVnYWRvXCI+RW50cmVnYWRvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2FuY2VsYWRvXCI+Q2FuY2VsYWRvPC9vcHRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBlZGl0YXJDYW1wb3MocGVkaWRvLmlkdG90YWxwZWRpZG9zKX0+IEVkaXRhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthZG1pblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm90b25FbGltaW5hclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVjaWJpcklEKHBlZGlkby5pZHRvdGFscGVkaWRvcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI21vZGFsLWVsaW1pbmFjaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiID5FbGltaW5hcjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm90b25FbGltaW5hcj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cIm1vZGFsLWVsaW1pbmFjaW9uXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+RWxpbWluYXI/PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBvbkNsaWNrPXsoKSA9PiBjZXJyYXJNb2RhbCgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWxtZW50ZSBkZXNlYSBFbGltaW5hciBlc3RlIFByb2R1Y3RvP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9eygpID0+IGNhbmNlbGFyQ29uZmlybWFyUHJvZHVjdG8oKX0+Q2FuY2VsYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXsoKSA9PiBjb25maXJtYXJQcm9kdWN0bygpfT5FbGltaW5hcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkID5cclxuICAgICAgICAgICAgICAgICkpfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxEaXZTZXBhcmFjaW9uPlxyXG5cclxuICAgICAgICAgICAgPC9EaXZTZXBhcmFjaW9uPlxyXG5cclxuXHJcbiAgICAgICAgPC9MYXlvdXQgPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVkaWRvQWRtaW47Il0sInNvdXJjZVJvb3QiOiIifQ==