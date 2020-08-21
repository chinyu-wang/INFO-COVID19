function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/_services/marker.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/_services/marker.service.ts ***!
    \*********************************************/

  /*! exports provided: MarkerService */

  /***/
  function srcApp_servicesMarkerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkerService", function () {
      return MarkerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _pop_up_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pop-up.service */
    "./src/app/_services/pop-up.service.ts");

    var MarkerService = /*#__PURE__*/function () {
      function MarkerService(http, popup) {
        _classCallCheck(this, MarkerService);

        this.http = http;
        this.popup = popup;
        this.capitals = './assets/data/usa-capitals.geojson';
      }

      _createClass(MarkerService, [{
        key: "makeCapitalMarkers",
        value: function makeCapitalMarkers(map) {
          var _this = this;

          this.http.get(this.capitals).subscribe(function (res) {
            //console.log(res.features);
            var _iterator = _createForOfIteratorHelper(res.features),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var c = _step.value;
                var lat = c.geometry.coordinates[0];
                var lon = c.geometry.coordinates[1];
                var marker = leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"]([lon, lat], {
                  title: c.properties.state
                }) //.bindPopup('<h1>'+ c.properties.state + '<br>' + c.properties.name + '</h1>');
                .bindPopup(_this.popup.makeCapitalPopup(c.properties)).addTo(map);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          });
        }
      }, {
        key: "makeCapitalCircleMarkers",
        value: function makeCapitalCircleMarkers(map) {
          var _this2 = this;

          this.http.get(this.capitals).subscribe(function (res) {
            // Find the maximum population to scale the radii by.
            var maxVal = Math.max.apply(Math, _toConsumableArray(res.features.map(function (x) {
              return x.properties.population;
            })).concat([0]));

            var _iterator2 = _createForOfIteratorHelper(res.features),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var c = _step2.value;
                var lat = c.geometry.coordinates[0];
                var lon = c.geometry.coordinates[1];
                var circle = leaflet__WEBPACK_IMPORTED_MODULE_1__["circleMarker"]([lon, lat], {
                  radius: MarkerService.ScaledRadius(c.properties.population, maxVal)
                }); //.addTo(map); <-- removed this

                circle.bindPopup(_this2.popup.makeCapitalPopup(c));
                circle.addTo(map);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          });
        }
      }], [{
        key: "ScaledRadius",
        value: function ScaledRadius(val, maxVal) {
          return 20 * (val / maxVal);
        }
      }]);

      return MarkerService;
    }();

    MarkerService.ɵfac = function MarkerService_Factory(t) {
      return new (t || MarkerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_pop_up_service__WEBPACK_IMPORTED_MODULE_3__["PopUpService"]));
    };

    MarkerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MarkerService,
      factory: MarkerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _pop_up_service__WEBPACK_IMPORTED_MODULE_3__["PopUpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/pop-up.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/_services/pop-up.service.ts ***!
    \*********************************************/

  /*! exports provided: PopUpService */

  /***/
  function srcApp_servicesPopUpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopUpService", function () {
      return PopUpService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PopUpService = /*#__PURE__*/function () {
      function PopUpService() {
        _classCallCheck(this, PopUpService);
      }

      _createClass(PopUpService, [{
        key: "makeCapitalPopup",
        value: function makeCapitalPopup(data) {
          return String("" + "<div>Capital: ".concat(data.name, "</div>") + "<div>State: ".concat(data.state, "</div>")); //`<div> Population: ${data.population}</div>`
        }
      }]);

      return PopUpService;
    }();

    PopUpService.ɵfac = function PopUpService_Factory(t) {
      return new (t || PopUpService)();
    };

    PopUpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PopUpService,
      factory: PopUpService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopUpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/shape.service.ts":
  /*!********************************************!*\
    !*** ./src/app/_services/shape.service.ts ***!
    \********************************************/

  /*! exports provided: ShapeService */

  /***/
  function srcApp_servicesShapeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShapeService", function () {
      return ShapeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ShapeService = /*#__PURE__*/function () {
      function ShapeService(http) {
        _classCallCheck(this, ShapeService);

        this.http = http;
      }

      _createClass(ShapeService, [{
        key: "getStateShapes",
        value: function getStateShapes() {
          return this.http.get('./assets/data/usa-states.geojson');
        }
      }, {
        key: "getWorldShapes",
        value: function getWorldShapes() {
          return this.http.get('./assets/data/w.js');
        }
      }, {
        key: "getConfirmedData",
        value: function getConfirmedData() {
          return this.http.get('./assets/data/c-20200821.js');
        }
      }, {
        key: "getExternalCSV",
        value: function getExternalCSV() {
          //    return this.http.get('https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv');
          return;
        }
      }]);

      return ShapeService;
    }();

    ShapeService.ɵfac = function ShapeService_Factory(t) {
      return new (t || ShapeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ShapeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ShapeService,
      factory: ShapeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShapeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_marker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./_services/marker.service */
    "./src/app/_services/marker.service.ts");
    /* harmony import */


    var _services_shape_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./_services/shape.service */
    "./src/app/_services/shape.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./map/map.component */
    "./src/app/map/map.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(markerService, shapeService) {
        _classCallCheck(this, AppComponent);

        this.markerService = markerService;
        this.shapeService = shapeService;
        this.title = 'COVID-19 全球疫情資訊 1.0';
        this.confirmed = 22683770;
        this.death = 793773;
        this.update_date = '2020-08-21 下午3:27';
      }

      _createClass(AppComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this3 = this;

          this.shapeService.getConfirmedData().subscribe(function (confirmed) {
            _this3.confirmed_array = confirmed;
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_marker_service__WEBPACK_IMPORTED_MODULE_1__["MarkerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shape_service__WEBPACK_IMPORTED_MODULE_2__["ShapeService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 10,
      vars: 6,
      consts: [[1, "container-fluid"], [1, "row", "h-100"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [3, "title", "confirmed", "death"], [3, "death", "confirmed"], [3, "update_date"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-map", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("confirmed", ctx.confirmed)("death", ctx.death);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("death", ctx.death)("confirmed", ctx.confirmed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("update_date", ctx.update_date);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _services_marker_service__WEBPACK_IMPORTED_MODULE_1__["MarkerService"]
        }, {
          type: _services_shape_service__WEBPACK_IMPORTED_MODULE_2__["ShapeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./map/map.component */
    "./src/app/map/map.component.ts");
    /* harmony import */


    var _services_marker_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./_services/marker.service */
    "./src/app/_services/marker.service.ts");
    /* harmony import */


    var _services_pop_up_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./_services/pop-up.service */
    "./src/app/_services/pop-up.service.ts");
    /* harmony import */


    var _services_shape_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./_services/shape.service */
    "./src/app/_services/shape.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var ngx_countup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-countup */
    "./node_modules/ngx-countup/__ivy_ngcc__/fesm2015/ngx-countup.js");

    var appRoutes = [{
      path: '',
      component: _map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"]
    }, {
      path: 'country',
      component: _map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"]
    }, {
      path: 'header',
      component: _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"]
    }, {
      path: 'footer',
      component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_marker_service__WEBPACK_IMPORTED_MODULE_7__["MarkerService"], _services_pop_up_service__WEBPACK_IMPORTED_MODULE_8__["PopUpService"], _services_shape_service__WEBPACK_IMPORTED_MODULE_9__["ShapeService"]],
      imports: [[ngx_countup__WEBPACK_IMPORTED_MODULE_15__["CountUpModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]],
        imports: [ngx_countup__WEBPACK_IMPORTED_MODULE_15__["CountUpModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]],
          imports: [ngx_countup__WEBPACK_IMPORTED_MODULE_15__["CountUpModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)],
          providers: [_services_marker_service__WEBPACK_IMPORTED_MODULE_7__["MarkerService"], _services_pop_up_service__WEBPACK_IMPORTED_MODULE_8__["PopUpService"], _services_shape_service__WEBPACK_IMPORTED_MODULE_9__["ShapeService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      inputs: {
        update_date: "update_date"
      },
      decls: 19,
      vars: 1,
      consts: [[1, "row", 2, "background-color", "black", "color", "white"], [1, "col-10", "text-right"], ["href", "#"], ["target", "_blank", "href", "https://github.com/CSSEGISandData/COVID-19"], ["src", "assets/images/logo.jpeg", "width", "80px", 2, "border-radius", "80px"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " This page was created by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Chin-Yu Wang");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Leaflet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " | \u8CC7\u6599\u4F86\u6E90: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Github");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | \u66F4\u65B0\u65E5\u671F: ", ctx.update_date, " \xA0\xA0");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, {
        update_date: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      inputs: {
        title: "title",
        confirmed: "confirmed",
        death: "death",
        update_date: "update_date"
      },
      decls: 4,
      vars: 1,
      consts: [[1, "row", 2, "background-color", "black", "color", "white"], [1, "col-12", "text-center"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        confirmed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        death: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        update_date: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/map/map.component.ts":
  /*!**************************************!*\
    !*** ./src/app/map/map.component.ts ***!
    \**************************************/

  /*! exports provided: MapComponent */

  /***/
  function srcAppMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_marker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/marker.service */
    "./src/app/_services/marker.service.ts");
    /* harmony import */


    var _services_shape_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_services/shape.service */
    "./src/app/_services/shape.service.ts");
    /* harmony import */


    var ngx_countup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-countup */
    "./node_modules/ngx-countup/__ivy_ngcc__/fesm2015/ngx-countup.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MapComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u75AB\u60C5\u8CC7\u8A0A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.n_flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.n_name);
      }
    }

    function MapComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u78BA\u8A3A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u7E3D\u4EBA\u53E3 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r1.n_population * 1000000), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("countUp", ctx_r1.n_confirmed);
      }
    }

    function MapComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u5168\u7403\u75AB\u60C5\u8CC7\u8A0A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MapComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u78BA\u8A3A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u6B7B\u4EA1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("countUp", ctx_r3.confirmed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("countUp", ctx_r3.death);
      }
    }

    function MapComponent_a_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapComponent_a_26_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var item_r7 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.changeCountryByName(item_r7.cname);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.cname + " " + item_r7.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("countUp", item_r7.confirmed);
      }
    }

    var iconRetinaUrl = 'assets/images/marker-icon-2x.png';
    var iconUrl = 'assets/images/marker-icon.png';
    var shadowUrl = 'assets/images/marker-shadow.png';
    var iconDefault = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
      iconRetinaUrl: iconRetinaUrl,
      iconUrl: iconUrl,
      shadowUrl: shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    leaflet__WEBPACK_IMPORTED_MODULE_1__["Marker"].prototype.options.icon = iconDefault;

    var MapComponent = /*#__PURE__*/function () {
      function MapComponent(markerService, shapeService) {
        _classCallCheck(this, MapComponent);

        this.markerService = markerService;
        this.shapeService = shapeService;
        this.latlng = [];
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.selectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(MapComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this4 = this;

          this.setLatLng();
          this.initMap(); //this.markerService.makeCapitalMarkers(this.map);
          //    this.shapeService.getExternalCSV().subscribe(d => console.log(d));

          this.shapeService.getConfirmedData().subscribe(function (confirmed) {
            _this4.confirmed_array = confirmed.sort(function (a, b) {
              return a.confirmed < b.confirmed ? 1 : -1;
            });
            _this4.n_search_result = _this4.confirmed_array; // for(let i=0; i<this.confirmed_array.length; i++) {
            //   let textLatLng = [this.confirmed_array[i].lat, this.confirmed_array[i].lng];
            //   let label = new L.Label();
            //   label.setContent(this.confirmed_array[i].cname);
            //   label.setLatLng(textLatLng);
            //   this.map.showLabel(label);
            // }
          }); //this.markerService.makeCapitalCircleMarkers(this.map);
          // this.shapeService.getStateShapes().subscribe(states => {
          //     this.states = states;
          //     this.initStatesLayer();
          // });

          this.shapeService.getWorldShapes().subscribe(function (states) {
            _this4.states = states;

            _this4.initStatesLayer();
          });
        }
      }, {
        key: "initStatesLayer",
        value: function initStatesLayer() {
          var _this5 = this;

          var stateLayer = leaflet__WEBPACK_IMPORTED_MODULE_1__["geoJSON"](this.states, {
            style: function style(feature) {
              return {
                weight: 1,
                opacity: 0.5,
                color: 'white',
                fillOpacity: 0.8,
                fillColor: _this5.getColor(feature)
              };
            },
            onEachFeature: function onEachFeature(feature, layer) {
              return layer.on({
                mouseover: function mouseover(e) {
                  return _this5.highlightFeature(e);
                },
                mouseout: function mouseout(e) {
                  return _this5.resetFeature(e);
                }
              });
            }
          });
          stateLayer.legend = "<h2>this is HTML string</h2>";
          this.map.addLayer(stateLayer); //stateLayer.bringToBack();
          //console.log(this.states.features);

          var _loop = function _loop(i) {
            _this5.states.features[i].properties.confirmed = -1;
            _this5.states.features[i].properties.cname = '';

            var node = _this5.confirmed_array.find(function (el) {
              return el.iso == _this5.states.features[i].properties.iso_a3;
            });

            if (node != undefined) {
              _this5.states.features[i].properties.confirmed = node.confirmed;
              _this5.states.features[i].properties.cname = node.cname;
            }
          };

          for (var i = 0; i < this.states.features.length; i++) {
            _loop(i);
          }

          var _loop2 = function _loop2(_i) {
            var node = _this5.latlng.find(function (el) {
              return el.code == _this5.confirmed_array[_i].iso2;
            }); //console.log(node);


            if (node != undefined) {
              _this5.confirmed_array[_i].lat = node.location[0];
              _this5.confirmed_array[_i].lng = node.location[1];
              _this5.confirmed_array[_i].population = node.population;
            }
          };

          for (var _i = 0; _i < this.confirmed_array.length; _i++) {
            _loop2(_i);
          }

          var nodata = '';
          stateLayer.eachLayer(function (layer) {
            //      layer.feature.properties.cname=layer.feature.properties.admin=="Northern Cyprus"?"北賽普勒斯":"";
            //      this.n_flag= "https://www.countryflags.io/" + layer.feature.properties.iso_a2 + "/shiny/64.png";
            layer.bindPopup(layer.feature.properties.cname + " " + layer.feature.properties.admin + "<br>" + "確診:" + layer.feature.properties.confirmed + "<br>" + //        (layer.feature.properties.admin!=layer.feature.properties.sovereignt? "<br>" +
            //          layer.feature.properties.sovereignt:"") +
            "<img src=" + "https://www.countryflags.io/" + layer.feature.properties.iso_a2 + "/shiny/64.png>");
          });
        }
      }, {
        key: "getColor",
        value: function getColor(feature) {
          var node = this.confirmed_array.find(function (el) {
            return el.iso == feature.properties.iso_a3;
          });
          if (node == undefined) return '#fff5f0';else {
            //console.log(node);
            var d = node.confirmed;
            return d > 200000 ? '#67000d' : d > 100000 ? '#a50f15' : d > 50000 ? '#cb181d' : d > 10000 ? '#ef3b2c' : d > 5000 ? '#fb6a4a' : d > 2000 ? '#fc9272' : d > 1000 ? '#fcbba1' : d > 500 ? '#fee0d2' : '#fff5f0';
          }
        }
      }, {
        key: "getColor2",
        value: function getColor2(d) {
          return d > 200000 ? '#67000d' : d > 100000 ? '#a50f15' : d > 50000 ? '#cb181d' : d > 10000 ? '#ef3b2c' : d > 5000 ? '#fb6a4a' : d > 2000 ? '#fc9272' : d > 1000 ? '#fcbba1' : d > 500 ? '#fee0d2' : '#fff5f0';
        }
      }, {
        key: "highlightFeature",
        value: function highlightFeature(e) {
          var layer = e.target;
          layer.setStyle({
            weight: 5,
            // color: '#000000',
            fillOpacity: 0.8
          });
        }
      }, {
        key: "resetFeature",
        value: function resetFeature(e) {
          var layer = e.target;
          layer.setStyle({
            weight: 1,
            fillOpacity: 0.8
          });
        }
      }, {
        key: "initMap",
        value: function initMap() {
          this.map = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('map', {
            center: [47.143767, 9.520364],
            // maxBounds: [
            //   [90,-180],
            //   [-90, 180]
            // ],
            zoom: 2
          });
          this.map.createPane('labels');
          this.map.getPane('labels').style.zIndex = 650;
          this.map.getPane('labels').style.pointerEvents = 'none'; //     L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-labels/{z}/{x}/{y}{r}.{ext}', {
          //       attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          //       subdomains: 'abcd',
          //       minZoom: 0,
          //       maxZoom: 18,
          // //      tileSize: 512,
          // //      zoomOffset: -1,
          //       nowrap: true,
          //       ext: 'png'
          //     }).addTo(this.map);
          // L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
          //   attribution: '©OpenStreetMap, ©CartoDB'
          // }).addTo(this.map);
          // L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
          //   attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          //   subdomains: 'abcd',
          //   minZoom: 0,
          //   maxZoom: 18,
          //   ext: 'png'
          // }).addTo(this.map);
          // L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
          //   maxZoom: 20,
          //   attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          // }).addTo(this.map);

          leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 10,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1
          }).addTo(this.map); // L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
          //    attribution: '©OpenStreetMap, ©CartoDB',
          //    tileSize: 512,
          //    zoomOffset: -1,
          //    pane: 'labels'
          //  }).addTo(this.map);
        }
      }, {
        key: "legend",
        value: function legend() {
          var legend = leaflet__WEBPACK_IMPORTED_MODULE_1__["control"]({
            position: 'bottomright'
          });

          legend.onAdd = function (map) {
            var div = leaflet__WEBPACK_IMPORTED_MODULE_1__["DomUtil"].create('div', 'info legend'),
                grades = [0, 500, 1000, 2000, 5000, 10000, 50000, 100000, 200000],
                labels = [],
                from,
                to;

            for (var i = 0; i < grades.length; i++) {
              from = grades[i];
              to = grades[i + 1];
              labels.push('<i style="background:' + this.getColor2(from + 1) + '"></i> ' + from + (to ? '&ndash;' + to : '+'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
          };

          legend.addTo(this.map);
        }
      }, {
        key: "changeCountryEx",
        value: function changeCountryEx(index) {
          //this.areaList = this.cityData[index].AreaList;
          //this.select.City = this.cityData[index].CityName;
          //this.select.Area = this.areaList[0].AreaName;
          this.map.setView([this.confirmed_array[index].lat, this.confirmed_array[index].lng], 3); //window.alert(this.confirmed_array[index].cname + " " + this.confirmed_array[index].name + "\n" +
          //    "確診人數：" + this.confirmed_array[index].confirmed);

          this.n_name = this.confirmed_array[index].cname + " " + this.confirmed_array[index].name;
          this.n_confirmed = +this.confirmed_array[index].confirmed;
          this.n_population = +this.confirmed_array[index].population;
          this.selectEvent.emit(this.select); //console.log(this.n_confirmed);

          var marker = leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"]([this.confirmed_array[index].lat, this.confirmed_array[index].lng]).bindPopup(this.n_name + "<br>" + this.n_confirmed + "<br>" + "<img src=" + "https://www.countryflags.io/" + this.confirmed_array[index].iso2 + "/shiny/64.png>").openPopup().addTo(this.map);
          this.n_flag = "https://www.countryflags.io/" + this.confirmed_array[index].iso2 + "/shiny/64.png"; //console.log(this.n_flag);
        }
      }, {
        key: "changeCountry",
        value: function changeCountry($event) {
          var index = $event.target.value;
          this.changeCountryEx(index);
        }
      }, {
        key: "changeCountryByName",
        value: function changeCountryByName(cname) {
          var index = this.confirmed_array.findIndex(function (el) {
            return el.cname == cname;
          });

          if (index != -1) {
            this.changeCountryEx(index);
          }
        }
      }, {
        key: "showAll",
        value: function showAll() {
          this.n_search_result = this.confirmed_array;
        }
      }, {
        key: "search",
        value: function search(term) {
          // if(term==='')
          //   this.n_search_result=[];
          // else {
          this.n_search_result = this.confirmed_array.filter(function (el) {
            return (// el.cname.indexOf(term) != -1
              //   ||
              // el.name.toLowerCase().indexOf(term) != -1
              el.cname.indexOf(term) == 0 || el.name.toLowerCase().indexOf(term) == 0
            );
          }); // console.log(this.n_search_result);
          // }
        }
      }, {
        key: "setLatLng",
        value: function setLatLng() {
          this.latlng.push({
            country: "Algeria",
            population: 40.969443,
            code: "DZ",
            captial: "Algiers",
            location: [36.753768, 3.0587561]
          });
          this.latlng.push({
            country: "Angola",
            population: 29.310273,
            code: "AO",
            captial: "Luanda",
            location: [-8.8146556, 13.2301756]
          });
          this.latlng.push({
            country: "Benin",
            population: 11.038805,
            code: "BJ",
            captial: "Porto-Novo",
            location: [6.4968574, 2.6288523]
          });
          this.latlng.push({
            country: "Botswana",
            population: 2.214858,
            code: "BW",
            captial: "Gaborone",
            location: [-24.6282079, 25.9231471]
          });
          this.latlng.push({
            country: "British Indian Ocean Territory",
            population: 0.004,
            code: "IO",
            captial: "Diego Garcia",
            location: [-7.3195005, 72.4228556]
          });
          this.latlng.push({
            country: "Burkina Faso",
            population: 20.107509,
            code: "BF",
            captial: "Ouagadougou",
            location: [12.3714277, -1.5196603]
          });
          this.latlng.push({
            country: "Burundi",
            population: 11.466756,
            code: "BI",
            captial: "Bujumbura",
            location: [-3.361378, 29.3598782]
          });
          this.latlng.push({
            country: "Cape Verde",
            population: 0.560899,
            code: "CV",
            captial: "Praia",
            location: [14.93305, -23.5133267]
          });
          this.latlng.push({
            country: "Cameroon",
            population: 24.994885,
            code: "CM",
            captial: "Yaoundé",
            location: [3.8480325, 11.5020752]
          });
          this.latlng.push({
            country: "Central African Republic",
            population: 5.625118,
            code: "CF",
            captial: "Bangui",
            location: [4.3946735, 18.5581899]
          });
          this.latlng.push({
            country: "Chad",
            population: 12.075985,
            code: "TD",
            captial: "N'Djamena",
            location: [12.1348457, 15.0557415]
          });
          this.latlng.push({
            country: "Comoros",
            population: 0.80808,
            code: "KM",
            captial: "Moroni",
            location: [39.5249615, -111.5904725]
          });
          this.latlng.push({
            country: "Democratic Republic of the Congo",
            population: 83.301151,
            code: "CD",
            captial: "Kinshasa",
            location: [-4.4419311, 15.2662931]
          });
          this.latlng.push({
            country: "Djibouti",
            population: 0.865267,
            code: "DJ",
            captial: "Djibouti",
            location: [11.825138, 42.590275]
          });
          this.latlng.push({
            country: "Egypt",
            population: 97.041072,
            code: "EG",
            captial: "Cairo",
            location: [30.0444196, 31.2357116]
          });
          this.latlng.push({
            country: "Equatorial Guinea",
            population: 0.778358,
            code: "GQ",
            captial: "Malabo",
            location: [3.7549606, 8.7821344]
          });
          this.latlng.push({
            country: "Eritrea",
            population: 5.918919,
            code: "ER",
            captial: "Asmara",
            location: [15.3228767, 38.9250517]
          });
          this.latlng.push({
            country: "eSwatini",
            population: 1.467152,
            code: "SZ",
            captial: "Lobamba",
            location: [-26.400429, 31.1824925]
          });
          this.latlng.push({
            country: "Ethiopia",
            population: 105.35002,
            code: "ET",
            captial: "Addis Ababa",
            location: [8.9806034, 38.7577605]
          });
          this.latlng.push({
            country: "French Southern and Antarctic Lands",
            population: 0.00014,
            code: "TF",
            captial: "Port-aux-Français",
            location: [-49.3496422, 70.218004]
          });
          this.latlng.push({
            country: "Gabon",
            population: 1.772255,
            code: "GA",
            captial: "Libreville",
            location: [0.4161976, 9.4672676]
          });
          this.latlng.push({
            country: "Gambia",
            population: 2.051363,
            code: "GM",
            captial: "Banjul",
            location: [13.4548761, -16.5790323]
          });
          this.latlng.push({
            country: "Ghana",
            population: 27.499924,
            code: "GH",
            captial: "Accra",
            location: [5.6037168, -0.1869644]
          });
          this.latlng.push({
            country: "Guinea",
            population: 12.413867,
            code: "GN",
            captial: "Conakry",
            location: [9.6411855, -13.5784012]
          });
          this.latlng.push({
            country: "Guinea-Bissau",
            population: 1.792338,
            code: "GW",
            captial: "Bissau",
            location: [11.8632196, -15.5843227]
          });
          this.latlng.push({
            country: "Ivory Coast",
            population: 24.18481,
            code: "CI",
            captial: "Yamoussoukro",
            location: [6.8276228, -5.2893433]
          });
          this.latlng.push({
            country: "Kenya",
            population: 47.615739,
            code: "KE",
            captial: "Nairobi",
            location: [-1.2920659, 36.8219462]
          });
          this.latlng.push({
            country: "Lesotho",
            population: 1.958042,
            code: "LS",
            captial: "Maseru",
            location: [-29.3150767, 27.4869229]
          });
          this.latlng.push({
            country: "Liberia",
            population: 4.689021,
            code: "LR",
            captial: "Monrovia",
            location: [34.1442616, -118.0019482]
          });
          this.latlng.push({
            country: "Libya",
            population: 6.65321,
            code: "LY",
            captial: "Tripoli",
            location: [32.8872094, 13.1913383]
          });
          this.latlng.push({
            country: "Madagascar",
            population: 25.054161,
            code: "MG",
            captial: "Antananarivo",
            location: [-18.8791902, 47.5079055]
          });
          this.latlng.push({
            country: "Malawi",
            population: 19.196246,
            code: "MW",
            captial: "Lilongwe",
            location: [-13.9626121, 33.7741195]
          });
          this.latlng.push({
            country: "Mali",
            population: 17.885245,
            code: "ML",
            captial: "Bamako",
            location: [12.6392316, -8.0028892]
          });
          this.latlng.push({
            country: "Mauritania",
            population: 3.758571,
            code: "MR",
            captial: "Nouakchott",
            location: [18.0735299, -15.9582372]
          });
          this.latlng.push({
            country: "Mauritius",
            population: 1.356388,
            code: "MU",
            captial: "Port Louis",
            location: [-20.1608912, 57.5012222]
          });
          this.latlng.push({
            country: "Morocco",
            population: 33.986655,
            code: "MA",
            captial: "Rabat",
            location: [33.9715904, -6.8498129]
          });
          this.latlng.push({
            country: "Mozambique",
            population: 26.573706,
            code: "MZ",
            captial: "Maputo",
            location: [-25.969248, 32.5731746]
          });
          this.latlng.push({
            country: "Namibia",
            population: 2.48478,
            code: "NA",
            captial: "Windhoek",
            location: [-22.5608807, 17.0657549]
          });
          this.latlng.push({
            country: "Niger",
            population: 19.245344,
            code: "NE",
            captial: "Niamey",
            location: [13.5115963, 2.1253854]
          });
          this.latlng.push({
            country: "Nigeria",
            population: 190.632261,
            code: "NG",
            captial: "Abuja",
            location: [9.0764785, 7.398574]
          });
          this.latlng.push({
            country: "Republic of the Congo",
            population: 4.954674,
            code: "CG",
            captial: "Brazzaville",
            location: [-4.2633597, 15.2428853]
          });
          this.latlng.push({
            country: "Rwanda",
            population: 11.901484,
            code: "RW",
            captial: "Kigali",
            location: [-1.9440727, 30.0618851]
          });
          this.latlng.push({
            country: "São Tomé and Principe",
            population: 0.201025,
            code: "ST",
            captial: "São Tomé",
            location: [0.3301924, 6.733343]
          });
          this.latlng.push({
            country: "Senegal",
            population: 14.668522,
            code: "SN",
            captial: "Dakar",
            location: [14.716677, -17.4676861]
          });
          this.latlng.push({
            country: "Seychelles",
            population: 0.09392,
            code: "SC",
            captial: "Victoria",
            location: [28.8052674, -97.0035982]
          });
          this.latlng.push({
            country: "Sierra Leone",
            population: 6.163195,
            code: "SL",
            captial: "Freetown",
            location: [8.4656765, -13.2317225]
          });
          this.latlng.push({
            country: "Somalia",
            population: 7.531386,
            code: "SO",
            captial: "Mogadishu",
            location: [2.0469343, 45.3181623]
          });
          this.latlng.push({
            country: "South Africa",
            population: 54.841552,
            code: "ZA",
            captial: "Pretoria",
            location: [-25.7478676, 28.2292712]
          });
          this.latlng.push({
            country: "South Sudan",
            population: 13.026129,
            code: "SS",
            captial: "Juba",
            location: [4.859363, 31.57125]
          });
          this.latlng.push({
            country: "Sudan",
            population: 37.345935,
            code: "SD",
            captial: "Khartoum",
            location: [15.5006544, 32.5598994]
          });
          this.latlng.push({
            country: "Tanzania",
            population: 53.950935,
            code: "TZ",
            captial: "Dodoma",
            location: [-6.162959, 35.7516069]
          });
          this.latlng.push({
            country: "Togo",
            population: 7.965055,
            code: "TG",
            captial: "Lomé",
            location: [6.1256261, 1.2254183]
          });
          this.latlng.push({
            country: "Tunisia",
            population: 11.4038,
            code: "TN",
            captial: "Tunis",
            location: [36.8064948, 10.1815316]
          });
          this.latlng.push({
            country: "Uganda",
            population: 39.570125,
            code: "UG",
            captial: "Kampala",
            location: [0.3475964, 32.5825197]
          });
          this.latlng.push({
            country: "Western Sahara",
            population: 0.603253,
            code: "EH",
            captial: "El Aaiún",
            location: [27.1500384, -13.1990758]
          });
          this.latlng.push({
            country: "Zambia",
            population: 15.972,
            code: "ZM",
            captial: "Lusaka",
            location: [-15.3875259, 28.3228165]
          });
          this.latlng.push({
            country: "Zimbabwe",
            population: 13.805084,
            code: "ZW",
            captial: "Harare",
            location: [-17.8251657, 31.03351]
          });
          this.latlng.push({
            country: "Anguilla",
            population: 0.017087,
            code: "AI",
            captial: "The Valley",
            location: [34.1825782, -118.4396756]
          });
          this.latlng.push({
            country: "Antigua and Barbuda",
            population: 0.094731,
            code: "AG",
            captial: "Saint John's",
            location: [42.2926374, -71.7292468]
          });
          this.latlng.push({
            country: "Argentina",
            population: 44.293293,
            code: "AR",
            captial: "Buenos Aires",
            location: [-34.6036844, -58.3815591]
          });
          this.latlng.push({
            country: "Aruba",
            population: 0.11512,
            code: "AW",
            captial: "Oranjestad",
            location: [12.5092044, -70.0086306]
          });
          this.latlng.push({
            country: "Barbados",
            population: 0.292336,
            code: "BB",
            captial: "Bridgetown",
            location: [45.5484744, -122.6165137]
          });
          this.latlng.push({
            country: "Belize",
            population: 0.360346,
            code: "BZ",
            captial: "Belmopan",
            location: [17.2510114, -88.7590201]
          });
          this.latlng.push({
            country: "Bermuda",
            population: 0.070864,
            code: "BM",
            captial: "Hamilton",
            location: [37.9426096, -96.195132]
          });
          this.latlng.push({
            country: "Bolivia",
            population: 11.138234,
            code: "BO",
            captial: "Sucre",
            location: [33.057553, -96.689159]
          });
          this.latlng.push({
            country: "Brazil",
            population: 207.353391,
            code: "BR",
            captial: "Brasília",
            location: [-15.826691, -47.9218204]
          });
          this.latlng.push({
            country: "British Virgin Islands",
            population: 0.035015,
            code: "VG",
            captial: "Road Town",
            location: [18.4286115, -64.6184657]
          });
          this.latlng.push({
            country: "Canada",
            population: 35.62368,
            code: "CA",
            captial: "Ottawa",
            location: [45.4215296, -75.6971931]
          });
          this.latlng.push({
            country: "Cayman Islands",
            population: 0.058441,
            code: "KY",
            captial: "George Town",
            location: [38.9097057, -77.0653565]
          });
          this.latlng.push({
            country: "Chile",
            population: 17.789267,
            code: "CL",
            captial: "Santiago",
            location: [-33.4488897, -70.6692655]
          });
          this.latlng.push({
            country: "Colombia",
            population: 47.698524,
            code: "CO",
            captial: "Bogotá",
            location: [4.7109886, -74.072092]
          });
          this.latlng.push({
            country: "Costa Rica",
            population: 4.930258,
            code: "CR",
            captial: "San José",
            location: [37.3382082, -121.8863286]
          });
          this.latlng.push({
            country: "Cuba",
            population: 11.147407,
            code: "CU",
            captial: "Havana",
            location: [23.1135925, -82.3665956]
          });
          this.latlng.push({
            country: "Curaçao",
            population: 0.149648,
            code: "CW",
            captial: "Willemstad",
            location: [12.1224221, -68.8824233]
          });
          this.latlng.push({
            country: "Dominica",
            population: 0.073897,
            code: "DM",
            captial: "Roseau",
            location: [48.8460926, -95.762766]
          });
          this.latlng.push({
            country: "Dominican Republic",
            population: 10.734247,
            code: "DO",
            captial: "Santo Domingo",
            location: [18.4860575, -69.9312117]
          });
          this.latlng.push({
            country: "Ecuador",
            population: 16.290913,
            code: "EC",
            captial: "Quito",
            location: [-0.1806532, -78.4678382]
          });
          this.latlng.push({
            country: "El Salvador",
            population: 6.172011,
            code: "SV",
            captial: "San Salvador",
            location: [13.6929403, -89.2181911]
          });
          this.latlng.push({
            country: "Falkland Islands",
            population: 0.002931,
            code: "FK",
            captial: "Stanley",
            location: [36.1392867, -96.1020717]
          });
          this.latlng.push({
            country: "Greenland",
            population: 0.057713,
            code: "GL",
            captial: "Nuuk",
            location: [64.1814099, -51.6941381]
          });
          this.latlng.push({
            country: "Grenada",
            population: 0.111724,
            code: "GD",
            captial: "St. George's",
            location: [33.401738, -111.542688]
          });
          this.latlng.push({
            country: "Guatemala",
            population: 15.460732,
            code: "GT",
            captial: "Guatemala City",
            location: [14.6349149, -90.5068824]
          });
          this.latlng.push({
            country: "Guyana",
            population: 0.737718,
            code: "GY",
            captial: "Georgetown",
            location: [38.9076089, -77.0722585]
          });
          this.latlng.push({
            country: "Haiti",
            population: 10.646714,
            code: "HT",
            captial: "Port-au-Prince",
            location: [18.594395, -72.3074326]
          });
          this.latlng.push({
            country: "Honduras",
            population: 9.038741,
            code: "HN",
            captial: "Tegucigalpa",
            location: [14.065049, -87.1715002]
          });
          this.latlng.push({
            country: "Jamaica",
            population: 2.990561,
            code: "JM",
            captial: "Kingston",
            location: [41.9270367, -73.9973608]
          });
          this.latlng.push({
            country: "Mexico",
            population: 124.574795,
            code: "MX",
            captial: "Mexico City",
            location: [19.4326077, -99.133208]
          });
          this.latlng.push({
            country: "Montserrat",
            population: 0.005292,
            code: "MS",
            captial: "Plymouth",
            location: [41.9584457, -70.6672621]
          });
          this.latlng.push({
            country: "Nicaragua",
            population: 6.025951,
            code: "NI",
            captial: "Managua",
            location: [12.1149926, -86.2361744]
          });
          this.latlng.push({
            country: "Panama",
            population: 3.753142,
            code: "PA",
            captial: "Panama City",
            location: [30.1588129, -85.6602058]
          });
          this.latlng.push({
            country: "Paraguay",
            population: 6.943739,
            code: "PY",
            captial: "Asunción",
            location: [-25.2637399, -57.575926]
          });
          this.latlng.push({
            country: "Peru",
            population: 31.036656,
            code: "PE",
            captial: "Lima",
            location: [-12.0463731, -77.042754]
          });
          this.latlng.push({
            country: "Puerto Rico",
            population: 3.351827,
            code: "PR",
            captial: "San Juan",
            location: [38.6659113, -121.2855249]
          });
          this.latlng.push({
            country: "Saint Barthélemy",
            population: 0.007184,
            code: "BL",
            captial: "Gustavia",
            location: [17.8964345, -62.852201]
          });
          this.latlng.push({
            country: "Saint Kitts and Nevis",
            population: 0.052715,
            code: "KN",
            captial: "Basseterre",
            location: [17.3026058, -62.7176924]
          });
          this.latlng.push({
            country: "Saint Lucia",
            population: 0.164994,
            code: "LC",
            captial: "Castries",
            location: [14.0101094, -60.9874687]
          });
          this.latlng.push({
            country: "Saint Martin",
            population: 0.032125,
            code: "MF",
            captial: "Marigot",
            location: [18.0675189, -63.0824656]
          });
          this.latlng.push({
            country: "Saint Pierre and Miquelon",
            population: 0.005533,
            code: "PM",
            captial: "Saint-Pierre",
            location: [46.7758459, -56.1806363]
          });
          this.latlng.push({
            country: "Saint Vincent and the Grenadines",
            population: 0.102089,
            code: "VC",
            captial: "Kingstown",
            location: [13.1600249, -61.2248157]
          });
          this.latlng.push({
            country: "Sint Maarten",
            population: 0.042083,
            code: "SX",
            captial: "Philipsburg",
            location: [46.332506, -113.2944165]
          });
          this.latlng.push({
            country: "South Georgia and the Islands",
            population: 0.00003,
            code: "GS",
            captial: "King Edward Point",
            location: [-54.2832502, -36.493735]
          });
          this.latlng.push({
            country: "Suriname",
            population: 0.591919,
            code: "SR",
            captial: "Paramaribo",
            location: [5.8520355, -55.2038278]
          });
          this.latlng.push({
            country: "The Bahamas",
            population: 0.329988,
            code: "BS",
            captial: "Nassau",
            location: [25.0443312, -77.3503609]
          });
          this.latlng.push({
            country: "Trinidad and Tobago",
            population: 1.218208,
            code: "TT",
            captial: "Port of Spain",
            location: [10.6603196, -61.5085625]
          });
          this.latlng.push({
            country: "Turks and Caicos Islands",
            population: 0.05257,
            code: "TC",
            captial: "Cockburn Town",
            location: [21.4674584, -71.1389101]
          });
          this.latlng.push({
            country: "United States of America",
            population: 326.625791,
            code: "US",
            captial: "Washington D.C.",
            location: [38.9071923, -77.0368707]
          });
          this.latlng.push({
            country: "United States Virgin Islands",
            population: 0.107268,
            code: "VI",
            captial: "Charlotte Amalie",
            location: [18.3419004, -64.9307007]
          });
          this.latlng.push({
            country: "Uruguay",
            population: 3.360148,
            code: "UY",
            captial: "Montevideo",
            location: [-34.9011127, -56.1645314]
          });
          this.latlng.push({
            country: "Venezuela",
            population: 31.304016,
            code: "VE",
            captial: "Caracas",
            location: [10.4805937, -66.9036063]
          });
          this.latlng.push({
            country: "Afghanistan",
            population: 34.124811,
            code: "AF",
            captial: "Kabul",
            location: [34.5553494, 69.207486]
          });
          this.latlng.push({
            country: "Armenia",
            population: 3.045191,
            code: "AM",
            captial: "Yerevan",
            location: [40.1872023, 44.515209]
          });
          this.latlng.push({
            country: "Azerbaijan",
            population: 9.961396,
            code: "AZ",
            captial: "Baku",
            location: [40.4092617, 49.8670924]
          });
          this.latlng.push({
            country: "Bahrain",
            population: 1.410942,
            code: "BH",
            captial: "Manama",
            location: [26.2235305, 50.5875935]
          });
          this.latlng.push({
            country: "Bangladesh",
            population: 157.826578,
            code: "BD",
            captial: "Dhaka",
            location: [23.810332, 90.4125181]
          });
          this.latlng.push({
            country: "Bhutan",
            population: 0.758288,
            code: "BT",
            captial: "Thimphu",
            location: [27.4712216, 89.6339041]
          });
          this.latlng.push({
            country: "Brunei",
            population: 0.443593,
            code: "BN",
            captial: "Bandar Seri Begawan",
            location: [4.9030522, 114.939821]
          });
          this.latlng.push({
            country: "Cambodia",
            population: 16.204486,
            code: "KH",
            captial: "Phnom Penh",
            location: [11.5563738, 104.9282099]
          });
          this.latlng.push({
            country: "China",
            population: 1379.302771,
            code: "CN",
            captial: "Beijing",
            location: [39.9041999, 116.4073963]
          });
          this.latlng.push({
            country: "Cyprus",
            population: 1.221549,
            code: "CY",
            captial: "Nicosia",
            location: [35.1855659, 33.3822764]
          });
          this.latlng.push({
            country: "East Timor",
            population: 1.291358,
            code: "TL",
            captial: "Dili",
            location: [-8.5568557, 125.5603143]
          });
          this.latlng.push({
            country: "Georgia",
            population: 4.92633,
            code: "GE",
            captial: "Tbilisi",
            location: [41.7151377, 44.827096]
          });
          this.latlng.push({
            country: "India",
            population: 1281.935911,
            code: "IN",
            captial: "New Delhi",
            location: [28.6139391, 77.2090212]
          });
          this.latlng.push({
            country: "Indonesia",
            population: 260.580739,
            code: "ID",
            captial: "Jakarta",
            location: [-6.2087634, 106.845599]
          });
          this.latlng.push({
            country: "Iran",
            population: 82.021564,
            code: "IR",
            captial: "Tehran",
            location: [35.6891975, 51.3889736]
          });
          this.latlng.push({
            country: "Iraq",
            population: 39.192111,
            code: "IQ",
            captial: "Baghdad",
            location: [33.315241, 44.3660671]
          });
          this.latlng.push({
            country: "Israel",
            population: 8.299706,
            code: "IL",
            captial: "Jerusalem",
            location: [31.768319, 35.21371]
          });
          this.latlng.push({
            country: "Japan",
            population: 126.451398,
            code: "JP",
            captial: "Tokyo",
            location: [35.6803997, 139.7690174]
          });
          this.latlng.push({
            country: "Jordan",
            population: 10.248069,
            code: "JO",
            captial: "Amman",
            location: [31.9539494, 35.910635]
          });
          this.latlng.push({
            country: "Kazakhstan",
            population: 18.556698,
            code: "KZ",
            captial: "Astana",
            location: [51.1605227, 71.4703558]
          });
          this.latlng.push({
            country: "Kuwait",
            population: 2.875422,
            code: "KW",
            captial: "Kuwait City",
            location: [29.375859, 47.9774052]
          });
          this.latlng.push({
            country: "Kyrgyzstan",
            population: 5.789122,
            code: "KG",
            captial: "Bishkek",
            location: [42.8746212, 74.5697617]
          });
          this.latlng.push({
            country: "Laos",
            population: 7.126706,
            code: "LA",
            captial: "Vientiane",
            location: [17.9757058, 102.6331035]
          });
          this.latlng.push({
            country: "Lebanon",
            population: 6.229794,
            code: "LB",
            captial: "Beirut",
            location: [33.8937913, 35.5017767]
          });
          this.latlng.push({
            country: "Malaysia",
            population: 31.381992,
            code: "MY",
            captial: "Kuala Lumpur",
            location: [3.139003, 101.686855]
          });
          this.latlng.push({
            country: "Maldives",
            population: 0.392709,
            code: "MV",
            captial: "Malé",
            location: [4.1754959, 73.5093474]
          });
          this.latlng.push({
            country: "Mongolia",
            population: 3.068243,
            code: "MN",
            captial: "Ulan Bator",
            location: [47.8863988, 106.9057439]
          });
          this.latlng.push({
            country: "Myanmar",
            population: 55.123814,
            code: "MM",
            captial: "Naypyidaw",
            location: [19.7633057, 96.0785104]
          });
          this.latlng.push({
            country: "Nepal",
            population: 29.384297,
            code: "NP",
            captial: "Kathmandu",
            location: [27.7172453, 85.3239605]
          });
          this.latlng.push({
            country: "North Korea",
            population: 25.24814,
            code: "KP",
            captial: "Pyongyang",
            location: [39.0392193, 125.7625241]
          });
          this.latlng.push({
            country: "Oman",
            population: 3.424386,
            code: "OM",
            captial: "Muscat",
            location: [23.5880307, 58.3828717]
          });
          this.latlng.push({
            country: "Pakistan",
            population: 204.924861,
            code: "PK",
            captial: "Islamabad",
            location: [33.6844202, 73.0478848]
          });
          this.latlng.push({
            country: "Palestine",
            population: 4.543126,
            code: "PS",
            captial: "Ramallah",
            location: [31.9037641, 35.2034184]
          });
          this.latlng.push({
            country: "Philippines",
            population: 104.256076,
            code: "PH",
            captial: "Manila",
            location: [14.5995124, 120.9842195]
          });
          this.latlng.push({
            country: "Qatar",
            population: 2.314307,
            code: "QA",
            captial: "Doha",
            location: [25.2854473, 51.5310398]
          });
          this.latlng.push({
            country: "Saudi Arabia",
            population: 28.57177,
            code: "SA",
            captial: "Riyadh",
            location: [24.7135517, 46.6752957]
          });
          this.latlng.push({
            country: "Singapore",
            population: 5.888926,
            code: "SG",
            captial: "Singapore",
            location: [1.352083, 103.819836]
          });
          this.latlng.push({
            country: "South Korea",
            population: 51.181299,
            code: "KR",
            captial: "Seoul",
            location: [37.566535, 126.9779692]
          });
          this.latlng.push({
            country: "Sri Lanka",
            population: 22.409381,
            code: "LK",
            captial: "Colombo",
            location: [6.9270786, 79.861243]
          });
          this.latlng.push({
            country: "Syria",
            population: 18.028549,
            code: "SY",
            captial: "Damascus",
            location: [33.5138073, 36.2765279]
          });
          this.latlng.push({
            country: "Taiwan",
            population: 23.508428,
            code: "TW",
            captial: "Taipei",
            location: [25.0329694, 121.5654177]
          });
          this.latlng.push({
            country: "Tajikistan",
            population: 8.468555,
            code: "TJ",
            captial: "Dushanbe",
            location: [38.5597722, 68.7870384]
          });
          this.latlng.push({
            country: "Thailand",
            population: 68.414135,
            code: "TH",
            captial: "Bangkok",
            location: [13.7563309, 100.5017651]
          });
          this.latlng.push({
            country: "Turkey",
            population: 80.845215,
            code: "TR",
            captial: "Ankara",
            location: [39.9333635, 32.8597419]
          });
          this.latlng.push({
            country: "Turkmenistan",
            population: 5.351277,
            code: "TM",
            captial: "Ashgabat",
            location: [37.9600766, 58.3260629]
          });
          this.latlng.push({
            country: "United Arab Emirates",
            population: 6.072475,
            code: "AE",
            captial: "Abu Dhabi",
            location: [24.453884, 54.3773438]
          });
          this.latlng.push({
            country: "Uzbekistan",
            population: 29.748859,
            code: "UZ",
            captial: "Tashkent",
            location: [41.2994958, 69.2400734]
          });
          this.latlng.push({
            country: "Vietnam",
            population: 96.160163,
            code: "VN",
            captial: "Hanoi",
            location: [21.0277644, 105.8341598]
          });
          this.latlng.push({
            country: "Yemen",
            population: 28.036829,
            code: "YE",
            captial: "Sana'a",
            location: [15.3694451, 44.1910066]
          });
          this.latlng.push({
            country: "Åland Islands",
            population: 0.027153,
            code: "AX",
            captial: "Mariehamn",
            location: [60.0970945, 19.9348339]
          });
          this.latlng.push({
            country: "Albania",
            population: 3.047987,
            code: "AL",
            captial: "Tirana",
            location: [41.3275459, 19.8186982]
          });
          this.latlng.push({
            country: "Andorra",
            population: 0.085702,
            code: "AD",
            captial: "Andorra la Vella",
            location: [42.5063174, 1.5218355]
          });
          this.latlng.push({
            country: "Austria",
            population: 8.754413,
            code: "AT",
            captial: "Vienna",
            location: [48.2081743, 16.3738189]
          });
          this.latlng.push({
            country: "Belarus",
            population: 9.549747,
            code: "BY",
            captial: "Minsk",
            location: [53.9006011, 27.558972]
          });
          this.latlng.push({
            country: "Belgium",
            population: 11.491346,
            code: "BE",
            captial: "Brussels",
            location: [50.8503396, 4.3517103]
          });
          this.latlng.push({
            country: "Bosnia and Herzegovina",
            population: 3.856181,
            code: "BA",
            captial: "Sarajevo",
            location: [43.8562586, 18.4130763]
          });
          this.latlng.push({
            country: "Bulgaria",
            population: 7.10151,
            code: "BG",
            captial: "Sofia",
            location: [42.6977082, 23.3218675]
          });
          this.latlng.push({
            country: "Croatia",
            population: 4.292095,
            code: "HR",
            captial: "Zagreb",
            location: [45.8150108, 15.9819189]
          });
          this.latlng.push({
            country: "Czechia",
            population: 10.674723,
            code: "CZ",
            captial: "Prague",
            location: [50.0755381, 14.4378005]
          });
          this.latlng.push({
            country: "Denmark",
            population: 5.605948,
            code: "DK",
            captial: "Copenhagen",
            location: [55.6760968, 12.5683372]
          });
          this.latlng.push({
            country: "Estonia",
            population: 1.251581,
            code: "EE",
            captial: "Tallinn",
            location: [59.4369608, 24.7535747]
          });
          this.latlng.push({
            country: "Faroe Islands",
            population: 0.05073,
            code: "FO",
            captial: "Tórshavn",
            location: [62.0107248, -6.7740852]
          });
          this.latlng.push({
            country: "Finland",
            population: 5.491218,
            code: "FI",
            captial: "Helsinki",
            location: [60.1698557, 24.9383791]
          });
          this.latlng.push({
            country: "France",
            population: 67.106161,
            code: "FR",
            captial: "Paris",
            location: [48.856614, 2.3522219]
          });
          this.latlng.push({
            country: "Germany",
            population: 80.594017,
            code: "DE",
            captial: "Berlin",
            location: [52.5200066, 13.404954]
          });
          this.latlng.push({
            country: "Greece",
            population: 10.768477,
            code: "GR",
            captial: "Athens",
            location: [37.9838096, 23.7275388]
          });
          this.latlng.push({
            country: "Guernsey",
            population: 0.066502,
            code: "GG",
            captial: "St. Peter Port",
            location: [49.4541677, -2.5497069]
          });
          this.latlng.push({
            country: "Hungary",
            population: 9.850845,
            code: "HU",
            captial: "Budapest",
            location: [47.497912, 19.040235]
          });
          this.latlng.push({
            country: "Iceland",
            population: 0.339747,
            code: "IS",
            captial: "Reykjavik",
            location: [64.146582, -21.9426354]
          });
          this.latlng.push({
            country: "Ireland",
            population: 5.011102,
            code: "IE",
            captial: "Dublin",
            location: [53.3498053, -6.2603097]
          });
          this.latlng.push({
            country: "Isle of Man",
            population: 0.088815,
            code: "IM",
            captial: "Douglas",
            location: [46.3490012, -91.7576889]
          });
          this.latlng.push({
            country: "Italy",
            population: 62.137802,
            code: "IT",
            captial: "Rome",
            location: [41.9027835, 12.4963655]
          });
          this.latlng.push({
            country: "Jersey",
            population: 0.09884,
            code: "JE",
            captial: "Saint Helier",
            location: [49.1805019, -2.103233]
          });
          this.latlng.push({
            country: "Kosovo",
            population: 1.89525,
            code: "XK",
            captial: "Pristina",
            location: [42.6629138, 21.1655028]
          });
          this.latlng.push({
            country: "Latvia",
            population: 1.944643,
            code: "LV",
            captial: "Riga",
            location: [56.9496487, 24.1051865]
          });
          this.latlng.push({
            country: "Liechtenstein",
            population: 0.038244,
            code: "LI",
            captial: "Vaduz",
            location: [47.1410303, 9.5209277]
          });
          this.latlng.push({
            country: "Lithuania",
            population: 2.823859,
            code: "LT",
            captial: "Vilnius",
            location: [54.6871555, 25.2796514]
          });
          this.latlng.push({
            country: "Luxembourg",
            population: 0.59413,
            code: "LU",
            captial: "Luxembourg",
            location: [49.815273, 6.129583]
          });
          this.latlng.push({
            country: "North Macedonia",
            population: 2.103721,
            code: "MK",
            captial: "Skopje",
            location: [41.9981294, 21.4254355]
          });
          this.latlng.push({
            country: "Malta",
            population: 0.416338,
            code: "MT",
            captial: "Valletta",
            location: [35.8989085, 14.5145528]
          });
          this.latlng.push({
            country: "Moldova",
            population: 3.474121,
            code: "MD",
            captial: "Chișinău",
            location: [47.0104529, 28.8638102]
          });
          this.latlng.push({
            country: "Monaco",
            population: 0.030645,
            code: "MC",
            captial: "Monaco",
            location: [43.7384176, 7.4246158]
          });
          this.latlng.push({
            country: "Montenegro",
            population: 0.64255,
            code: "ME",
            captial: "Podgorica",
            location: [42.4304196, 19.2593642]
          });
          this.latlng.push({
            country: "Netherlands",
            population: 17.084719,
            code: "NL",
            captial: "Amsterdam",
            location: [52.3666969, 4.8945398]
          });
          this.latlng.push({
            country: "Norway",
            population: 5.320045,
            code: "NO",
            captial: "Oslo",
            location: [59.9138688, 10.7522454]
          });
          this.latlng.push({
            country: "Poland",
            population: 38.476269,
            code: "PL",
            captial: "Warsaw",
            location: [52.2296756, 21.0122287]
          });
          this.latlng.push({
            country: "Portugal",
            population: 10.839514,
            code: "PT",
            captial: "Lisbon",
            location: [38.7222524, -9.1393366]
          });
          this.latlng.push({
            country: "Republic of Serbia",
            population: 7.111024,
            code: "RS",
            captial: "Belgrade",
            location: [44.786568, 20.4489216]
          });
          this.latlng.push({
            country: "Romania",
            population: 21.529967,
            code: "RO",
            captial: "Bucharest",
            location: [44.4267674, 26.1025384]
          });
          this.latlng.push({
            country: "Russia",
            population: 142.257519,
            code: "RU",
            captial: "Moscow",
            location: [55.755826, 37.6172999]
          });
          this.latlng.push({
            country: "San Marino",
            population: 0.033537,
            code: "SM",
            captial: "City of San Marino",
            location: [34.1215338, -118.1059519]
          });
          this.latlng.push({
            country: "Slovakia",
            population: 5.445829,
            code: "SK",
            captial: "Bratislava",
            location: [48.1485965, 17.1077478]
          });
          this.latlng.push({
            country: "Slovenia",
            population: 1.972126,
            code: "SI",
            captial: "Ljubljana",
            location: [46.0569465, 14.5057515]
          });
          this.latlng.push({
            country: "Spain",
            population: 48.958159,
            code: "ES",
            captial: "Madrid",
            location: [40.4167754, -3.7037902]
          });
          this.latlng.push({
            country: "Sweden",
            population: 9.960487,
            code: "SE",
            captial: "Stockholm",
            location: [59.3293235, 18.0685808]
          });
          this.latlng.push({
            country: "Switzerland",
            population: 8.236303,
            code: "CH",
            captial: "Bern",
            location: [46.9479739, 7.4474468]
          });
          this.latlng.push({
            country: "Ukraine",
            population: 44.033874,
            code: "UA",
            captial: "Kiev",
            location: [50.4501, 30.5234]
          });
          this.latlng.push({
            country: "United Kingdom",
            population: 64.769452,
            code: "GB",
            captial: "London",
            location: [51.5073509, -0.1277583]
          });
          this.latlng.push({
            country: "Vatican",
            population: 0.001,
            code: "VA",
            captial: "Vatican City",
            location: [41.902916, 12.453389]
          });
          this.latlng.push({
            country: "American Samoa",
            population: 0.051504,
            code: "AS",
            captial: "Pago Pago",
            location: [-14.2756319, -170.7020359]
          });
          this.latlng.push({
            country: "Australia",
            population: 23.232413,
            code: "AU",
            captial: "Canberra",
            location: [-35.2809368, 149.1300092]
          });
          this.latlng.push({
            country: "Cook Islands",
            population: 0.00929,
            code: "CK",
            captial: "Avarua",
            location: [-21.2129007, -159.7823059]
          });
          this.latlng.push({
            country: "Federated States of Micronesia",
            population: 0.104196,
            code: "FM",
            captial: "Palikir",
            location: [6.9147118, 158.1610274]
          });
          this.latlng.push({
            country: "Fiji",
            population: 0.920938,
            code: "FJ",
            captial: "Suva",
            location: [-18.1248086, 178.4500789]
          });
          this.latlng.push({
            country: "French Polynesia",
            population: 0.287881,
            code: "PF",
            captial: "Papeetē",
            location: [-17.5324608, -149.5677151]
          });
          this.latlng.push({
            country: "Guam",
            population: 0.167358,
            code: "GU",
            captial: "Hagåtña",
            location: [13.4762824, 144.7502228]
          });
          this.latlng.push({
            country: "Kiribati",
            population: 0.108145,
            code: "KI",
            captial: "South Tarawa",
            location: [1.433333, 173]
          });
          this.latlng.push({
            country: "Marshall Islands",
            population: 0.074539,
            code: "MH",
            captial: "Majuro",
            location: [7.0690279, 171.2828766]
          });
          this.latlng.push({
            country: "Nauru",
            population: 0.009642,
            code: "NR",
            captial: "Yaren",
            location: [-0.5466857, 166.9210913]
          });
          this.latlng.push({
            country: "New Caledonia",
            population: 0.27907,
            code: "NC",
            captial: "Nouméa",
            location: [-22.2734912, 166.4480887]
          });
          this.latlng.push({
            country: "New Zealand",
            population: 4.510327,
            code: "NZ",
            captial: "Wellington",
            location: [-41.2864603, 174.776236]
          });
          this.latlng.push({
            country: "Niue",
            population: 0.001626,
            code: "NU",
            captial: "Alofi",
            location: [-19.0553711, -169.9178709]
          });
          this.latlng.push({
            country: "Norfolk Island",
            population: 0.00221,
            code: "NF",
            captial: "Kingston",
            location: [41.9270367, -73.9973608]
          });
          this.latlng.push({
            country: "Northern Mariana Islands",
            population: 0.052263,
            code: "MP",
            captial: "Saipan",
            location: [15.1850483, 145.7467259]
          });
          this.latlng.push({
            country: "Palau",
            population: 0.021431,
            code: "PW",
            captial: "Ngerulmud",
            location: [7.5003835, 134.624289]
          });
          this.latlng.push({
            country: "Papua New Guinea",
            population: 6.909701,
            code: "PG",
            captial: "Port Moresby",
            location: [-9.4438004, 147.1802671]
          });
          this.latlng.push({
            country: "Pitcairn Islands",
            population: 0.000054,
            code: "PN",
            captial: "Adamstown",
            location: [-25.0662897, -130.1004636]
          });
          this.latlng.push({
            country: "Samoa",
            population: 0.200108,
            code: "WS",
            captial: "Apia",
            location: [-13.8506958, -171.7513551]
          });
          this.latlng.push({
            country: "Solomon Islands",
            population: 0.647581,
            code: "SB",
            captial: "Honiara",
            location: [-9.4456381, 159.9728999]
          });
          this.latlng.push({
            country: "Tonga",
            population: 0.106479,
            code: "TO",
            captial: "Nuku'alofa",
            location: [-21.1393418, -175.204947]
          });
          this.latlng.push({
            country: "Vanuatu",
            population: 0.282814,
            code: "VU",
            captial: "Port Vila",
            location: [-17.7332512, 168.3273245]
          });
          this.latlng.push({
            country: "Wallis and Futuna",
            population: 0.015714,
            code: "WF",
            captial: "Mata-Utu",
            location: [-13.2825091, -176.1764475]
          });
        }
      }]);

      return MapComponent;
    }();

    MapComponent.ɵfac = function MapComponent_Factory(t) {
      return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_marker_service__WEBPACK_IMPORTED_MODULE_3__["MarkerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shape_service__WEBPACK_IMPORTED_MODULE_4__["ShapeService"]));
    };

    MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapComponent,
      selectors: [["app-map"]],
      inputs: {
        confirmed: "confirmed",
        death: "death"
      },
      outputs: {
        selectEvent: "selectEvent"
      },
      decls: 30,
      vars: 7,
      consts: [[1, "container-fluid"], [1, "row", "h-100"], [1, "col-xs-6", "col-lg-4"], ["autocomplete", "off"], [1, "form-group"], [1, "text-center"], [1, "card-text", "badge", "badge-info", "text-white"], [1, "bg-danger", "badge", "text-center", "text-white", 3, "countUp"], [1, "card", "border-dark", "mb-3"], ["class", "card-header text-center", 4, "ngIf"], ["class", "card-body text-center", 4, "ngIf"], ["class", "card-body card-text text-center", 4, "ngIf"], ["for", "txtSearch"], ["autocomplete", "off", "id", "search-box", "aria-describedby", "searchHelp", "placeholder", "\u8F38\u5165\u570B\u5BB6\u540D\u7A31", 1, "form-control", 3, "input"], ["searchBox", ""], [1, "list-group", 2, "height", "250px", "overflow", "scroll"], ["showResult", ""], ["href", "#", "class", "list-group-item list-group-item-action\n                                list-group-item-light\n                                d-flex justify-content-between\n                                align-items-center", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-xs-6", "col-lg-8"], ["id", "map", 2, "height", "500px"], [1, "card-header", "text-center"], ["alt", "Card image cap", 1, "card-img-top", 2, "width", "32px", "height", "32px", 3, "src"], [1, "card-title", "font-weight-bolder"], [1, "card-body", "text-center"], [1, "card-text", "badge", "badge-danger", "text-white", 3, "countUp"], [1, "card-body", "card-text", "text-center"], ["href", "#", 1, "list-group-item", "list-group-item-action", "list-group-item-light", "d-flex", "justify-content-between", "align-items-center", 3, "click"], [1, "badge", "badge-danger", "badge-pill", 3, "countUp"]],
      template: function MapComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u5168\u7403\u78BA\u8A3A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u5168\u7403\u6B7B\u4EA1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MapComponent_div_15_Template, 6, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MapComponent_div_16_Template, 8, 4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MapComponent_div_17_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MapComponent_div_18_Template, 8, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u570B\u5BB6\u641C\u5C0B(\u7E41\u4E2D/\u82F1\u6587)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MapComponent_Template_input_input_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return ctx.search(_r4.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MapComponent_a_26_Template, 3, 2, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("countUp", ctx.confirmed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("countUp", ctx.death);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.n_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.n_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.n_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.n_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.n_search_result);
        }
      },
      directives: [ngx_countup__WEBPACK_IMPORTED_MODULE_5__["CountUpDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]],
      styles: ["#map[_ngcontent-%COMP%] {\n  height: 100%;\n  background: black;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4jbWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-map',
          templateUrl: './map.component.html',
          styleUrls: ['./map.component.scss']
        }]
      }], function () {
        return [{
          type: _services_marker_service__WEBPACK_IMPORTED_MODULE_3__["MarkerService"]
        }, {
          type: _services_shape_service__WEBPACK_IMPORTED_MODULE_4__["ShapeService"]
        }];
      }, {
        confirmed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        death: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/chinyu/www/covid19/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map