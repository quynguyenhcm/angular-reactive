(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/advanced-search-model.ts":
/*!******************************************!*\
  !*** ./src/app/advanced-search-model.ts ***!
  \******************************************/
/*! exports provided: AdvancedSearchModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedSearchModel", function() { return AdvancedSearchModel; });
var AdvancedSearchModel = /** @class */ (function () {
    function AdvancedSearchModel(q, language, user, size, stars, topic) {
        this.q = q;
        this.language = language;
        this.user = user;
        this.size = size;
        this.stars = stars;
        this.topic = topic;
    }
    return AdvancedSearchModel;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n    <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'GitHub Browser With Angular React';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _git_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./git-search.service */ "./src/app/git-search.service.ts");
/* harmony import */ var _git_search_git_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./git-search/git-search.component */ "./src/app/git-search/git-search.component.ts");
/* harmony import */ var _git_code_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./git-code-search.service */ "./src/app/git-code-search.service.ts");
/* harmony import */ var _unified_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./unified-search.service */ "./src/app/unified-search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _no_special_chars_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./no-special-chars.directive */ "./src/app/no-special-chars.directive.ts");
/* harmony import */ var _favorite_text_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./favorite-text.pipe */ "./src/app/favorite-text.pipe.ts");
/* harmony import */ var _repository_display_repository_display_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./repository-display/repository-display.component */ "./src/app/repository-display/repository-display.component.ts");
/* harmony import */ var _code_display_code_display_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./code-display/code-display.component */ "./src/app/code-display/code-display.component.ts");
/* harmony import */ var _fade_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fade.directive */ "./src/app/fade.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: '',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"]
    },
    { path: 'search',
        redirectTo: '/search/angular',
        pathMatch: 'full' },
    {
        path: 'search/:query',
        component: _git_search_git_search_component__WEBPACK_IMPORTED_MODULE_6__["GitSearchComponent"],
        data: { title: 'Git Search' }
    },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _git_search_git_search_component__WEBPACK_IMPORTED_MODULE_6__["GitSearchComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
                _no_special_chars_directive__WEBPACK_IMPORTED_MODULE_12__["NoSpecialCharsDirective"],
                _favorite_text_pipe__WEBPACK_IMPORTED_MODULE_13__["FavoriteTextPipe"],
                _repository_display_repository_display_component__WEBPACK_IMPORTED_MODULE_14__["RepositoryDisplayComponent"],
                _code_display_code_display_component__WEBPACK_IMPORTED_MODULE_15__["CodeDisplayComponent"],
                _fade_directive__WEBPACK_IMPORTED_MODULE_16__["FadeDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [_git_search_service__WEBPACK_IMPORTED_MODULE_5__["GitSearchService"], _git_code_search_service__WEBPACK_IMPORTED_MODULE_7__["GitCodeSearchService"], _unified_search_service__WEBPACK_IMPORTED_MODULE_8__["UnifiedSearchService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/code-display/code-display.component.css":
/*!*********************************************************!*\
  !*** ./src/app/code-display/code-display.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list_item {\r\n    border:1px solid black;\r\n    height: 165px;\r\n    margin-top: 20px;\r\n    padding-top: 10px;\r\n    padding-left: 10px;\r\n}\r\n.avatar {\r\n    width:150px;\r\n    height:150px;\r\n    float:left;\r\n}\r\n.title {\r\n    font-size:20px;\r\n}\r\n.description {\r\n    font-size:18px;\r\n}\r\n.favorite_icon {\r\n    position: relative;\r\n    float: right;\r\n    bottom: 95px;\r\n    font-size: 36px;\r\n    cursor: pointer;\r\n}\r\n.favorited {\r\n    color: yellow;\r\n    text-shadow:\r\n        -1px -1px 0 #000,  \r\n        1px -1px 0 #000,\r\n        -1px 1px 0 #000,\r\n        1px 1px 0 #000;\r\n}"

/***/ }),

/***/ "./src/app/code-display/code-display.component.html":
/*!**********************************************************!*\
  !*** ./src/app/code-display/code-display.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li [ngStyle]=\"{'background-color' : (i % 2 === 0) ? 'springgreen' : 'palegreen'}\" class=\"list_item\" *ngFor=\"let result of searchResults.items; index as i;\">\n  <a [href]=\"result.html_url\">\n    <img class=\"avatar\" [src]=\"result.repository.owner.avatar_url\" /> \n    <h4 class=\"title\">{{result.name | favoriteText:checkFavorite(result)}}\n      <small> by {{result.repository.owner.login | uppercase}}</small> \n    </h4>\n  </a> \n  <span class='favorite_icon' *ngIf=\"!checkFavorite(result)\" (click)=\"toggleFavorite(result)\">&#9983;</span>\n  <span class='favorite_icon favorited' *ngIf=\"checkFavorite(result)\">&#9733;</span>\n  <p class=\"description\"> {{result.repository.description}}</p> \n  <p> Path: {{result.path}} </p>\n</li>\n"

/***/ }),

/***/ "./src/app/code-display/code-display.component.ts":
/*!********************************************************!*\
  !*** ./src/app/code-display/code-display.component.ts ***!
  \********************************************************/
/*! exports provided: CodeDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeDisplayComponent", function() { return CodeDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CodeDisplayComponent = /** @class */ (function () {
    function CodeDisplayComponent() {
        var _this = this;
        this.updateFavorites = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeFavorites = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleFavorite = function (item) {
            return _this.updateFavorites.emit(item.repository.id);
        };
        this.checkFavorite = function (item) {
            return _this.favorites.indexOf(item.repository.id) > -1;
        };
    }
    CodeDisplayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CodeDisplayComponent.prototype, "searchResults", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CodeDisplayComponent.prototype, "favorites", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CodeDisplayComponent.prototype, "updateFavorites", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CodeDisplayComponent.prototype, "removeFavorites", void 0);
    CodeDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-code-display',
            template: __webpack_require__(/*! ./code-display.component.html */ "./src/app/code-display/code-display.component.html"),
            styles: [__webpack_require__(/*! ./code-display.component.css */ "./src/app/code-display/code-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CodeDisplayComponent);
    return CodeDisplayComponent;
}());



/***/ }),

/***/ "./src/app/fade.directive.ts":
/*!***********************************!*\
  !*** ./src/app/fade.directive.ts ***!
  \***********************************/
/*! exports provided: FadeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FadeDirective", function() { return FadeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FadeDirective = /** @class */ (function () {
    function FadeDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        renderer.setElementStyle(el.nativeElement, 'opacity', '.6');
        renderer.setElementStyle(el.nativeElement, 'transition', '.4s opacity');
    }
    FadeDirective.prototype.mouseover = function () {
        this.renderer.setElementStyle(this.el.nativeElement, 'opacity', '1');
    };
    FadeDirective.prototype.mouseout = function () {
        this.renderer.setElementStyle(this.el.nativeElement, 'opacity', '.6');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FadeDirective.prototype, "mouseover", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FadeDirective.prototype, "mouseout", null);
    FadeDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appFade]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], FadeDirective);
    return FadeDirective;
}());



/***/ }),

/***/ "./src/app/favorite-text.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/favorite-text.pipe.ts ***!
  \***************************************/
/*! exports provided: FavoriteTextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteTextPipe", function() { return FavoriteTextPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FavoriteTextPipe = /** @class */ (function () {
    function FavoriteTextPipe() {
    }
    FavoriteTextPipe.prototype.transform = function (value, args) {
        if (args) {
            return value + '* Favorite';
        }
        else {
            return value;
        }
    };
    FavoriteTextPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'favoriteText'
        })
    ], FavoriteTextPipe);
    return FavoriteTextPipe;
}());



/***/ }),

/***/ "./src/app/git-code-search.service.ts":
/*!********************************************!*\
  !*** ./src/app/git-code-search.service.ts ***!
  \********************************************/
/*! exports provided: GitCodeSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitCodeSearchService", function() { return GitCodeSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_publishReplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/publishReplay */ "./node_modules/rxjs-compat/_esm5/add/operator/publishReplay.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GitCodeSearchService = /** @class */ (function () {
    function GitCodeSearchService(http) {
        var _this = this;
        this.http = http;
        this.codeSearch = function (query) {
            if (query.indexOf('user') <= -1) {
                query = query + '+user:angular';
            }
            if (!_this.search) {
                _this.search = _this.http.get('https://api.github.com/search/code?q=' + query)
                    .publishReplay(1)
                    .refCount();
                _this.cachedValue = query;
            }
            else if (_this.cachedValue !== query) {
                _this.search = null;
                _this.codeSearch(query);
            }
            return _this.search;
        };
    }
    GitCodeSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GitCodeSearchService);
    return GitCodeSearchService;
}());



/***/ }),

/***/ "./src/app/git-search.service.ts":
/*!***************************************!*\
  !*** ./src/app/git-search.service.ts ***!
  \***************************************/
/*! exports provided: GitSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitSearchService", function() { return GitSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_publishReplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/publishReplay */ "./node_modules/rxjs-compat/_esm5/add/operator/publishReplay.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GitSearchService = /** @class */ (function () {
    function GitSearchService(http) {
        var _this = this;
        this.http = http;
        this.cachedUsers = [];
        this.gitSearch = function (query) {
            if (!_this.search) {
                _this.search = _this.http.get('https://api.github.com/search/repositories?q=' + query)
                    .publishReplay(1)
                    .refCount();
                _this.cachedValue = query;
            }
            else if (_this.cachedValue !== query) {
                _this.search = null;
                _this.gitSearch(query);
            }
            return _this.search;
        };
        this.gitUsers = function (query) {
            var promise = new Promise(function (resolve, reject) {
                if (_this.cachedUsers[query]) {
                    resolve(_this.cachedUsers[query]);
                }
                else {
                    _this.http.get('https://api.github.com/search/users?q=' + query)
                        .toPromise()
                        .then(function (response) {
                        resolve(response);
                    }, function (error) {
                        reject(error);
                    });
                }
            });
            return promise;
        };
    }
    GitSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GitSearchService);
    return GitSearchService;
}());



/***/ }),

/***/ "./src/app/git-search/git-search.component.css":
/*!*****************************************************!*\
  !*** ./src/app/git-search/git-search.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".total {\r\n    font-size:24px;\r\n}\r\n.list {\r\n    list-style-type: none;\r\n}\r\n.list_item {\r\n    border:1px solid black;\r\n    height: 165px;\r\n    margin-top: 20px;\r\n    padding-top: 10px;\r\n    padding-left: 10px;\r\n}\r\n.avatar {\r\n    width:150px;\r\n    height:150px;\r\n    float:left;\r\n}\r\n.title {\r\n    font-size:20px;\r\n}\r\n.description {\r\n    font-size:18px;\r\n}\r\n.ng-valid:not(form)  {\r\n    border: 2px solid #42A948; /* green */\r\n  }\r\n.ng-invalid:not(form)  {\r\n    border: 2px solid #a94442; /* red */\r\n}"

/***/ }),

/***/ "./src/app/git-search/git-search.component.html":
/*!******************************************************!*\
  !*** ./src/app/git-search/git-search.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{title}} - {{displayQuery}}</h3>\n<form #myForm=\"ngForm\" (ngSubmit)=\"sendQuery()\">\n<form #myForm=\"ngForm\" (ngSubmit)=\"sendQuery()\">\n  <div *ngFor=\"let key of modelKeys\">\n      {{key}}\n      <input name=\"{{key}}\" placeholder=\"Enter {{key}} Here\" [(ngModel)]=\"model[key]\" required *ngIf=\"key === 'q'\" appNoSpecialChars />\n      <input name=\"{{key}}\" placeholder=\"Enter {{key}} Here\" [(ngModel)]=\"model[key]\" minlength='2' maxlength='4' *ngIf=\"key === 'stars'\" appNoSpecialChars />\n      <input name=\"{{key}}\" placeholder=\"Enter {{key}} Here\" [(ngModel)]=\"model[key]\" *ngIf=\"key !== 'q' && key !== 'stars'\" appNoSpecialChars />\n  </div>\n  <button type=\"submit\" [disabled]=\"!myForm.valid\">Submit</button>\n</form>\n<div *ngIf=\"searchResults; else elseBlock\">\n  <h3 class=\"total\">Total Results: {{searchResults.total_count}}</h3>\n  <ul class=\"list\">\n    <app-repository-display [searchResults]=\"searchResults.repositories\" [favorites]=\"favorites\" (updateFavorites)=\"handleFavorite($event)\" *ngIf=\"searchResults.repositories\"></app-repository-display>\n    <app-code-display [searchResults]=\"searchResults.code\" [favorites]=\"favorites\" (updateFavorites)=\"handleFavorite($event)\" *ngIf=\"searchResults.code\"></app-code-display>\n  </ul>\n</div>\n<ng-template #elseBlock>Loading...</ng-template>"

/***/ }),

/***/ "./src/app/git-search/git-search.component.ts":
/*!****************************************************!*\
  !*** ./src/app/git-search/git-search.component.ts ***!
  \****************************************************/
/*! exports provided: GitSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitSearchComponent", function() { return GitSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _unified_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unified-search.service */ "./src/app/unified-search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _advanced_search_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../advanced-search-model */ "./src/app/advanced-search-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GitSearchComponent = /** @class */ (function () {
    // tslint:disable-next-line:no-shadowed-variable
    function GitSearchComponent(UnifiedSearchService, route, router) {
        var _this = this;
        this.UnifiedSearchService = UnifiedSearchService;
        this.route = route;
        this.router = router;
        this.favorites = [];
        this.model = new _advanced_search_model__WEBPACK_IMPORTED_MODULE_3__["AdvancedSearchModel"]('', '', '', null, null, '');
        this.modelKeys = Object.keys(this.model);
        this.gitSearch = function () {
            _this.UnifiedSearchService.UnifiedSearch(_this.searchQuery).subscribe(function (response) {
                console.log(response);
                _this.searchResults = response;
            }, function (error) {
                alert('Error: ' + error.statusText);
            });
        };
        this.sendQuery = function () {
            _this.searchResults = null;
            var search = _this.model.q;
            var params = '';
            _this.modelKeys.forEach(function (elem) {
                if (elem === 'q') {
                    return false;
                }
                if (_this.model[elem]) {
                    params += '+' + elem + ':' + _this.model[elem];
                }
            });
            _this.searchQuery = search;
            if (params !== '') {
                _this.searchQuery = search + params;
            }
            _this.displayQuery = _this.searchQuery;
            _this.gitSearch();
        };
        this.checkType = function (key) {
            return typeof key === 'string' ? 'text' : typeof key;
        };
        this.handleFavorite = function (id) {
            var index = _this.favorites.indexOf(id, 0);
            if (index > -1) {
                return _this.favorites.splice(index, 1);
            }
            else {
                return _this.favorites.push(id);
            }
        };
    }
    GitSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.searchQuery = params.get('query');
            _this.displayQuery = params.get('query');
            _this.gitSearch();
        });
        this.route.data.subscribe(function (result) {
            _this.title = result.title;
        });
    };
    GitSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-git-search',
            template: __webpack_require__(/*! ./git-search.component.html */ "./src/app/git-search/git-search.component.html"),
            styles: [__webpack_require__(/*! ./git-search.component.css */ "./src/app/git-search/git-search.component.css")]
        }),
        __metadata("design:paramtypes", [_unified_search_service__WEBPACK_IMPORTED_MODULE_1__["UnifiedSearchService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GitSearchComponent);
    return GitSearchComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n    Welcome to the Angular Fundamentals Git Search!\n  </h1>\n  <nav>\n    <a routerLink=\"/search\" routerLinkActive=\"active\">\n      <button>Search For Repositories</button>\n    </a>\n  </nav>"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/no-special-chars.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/no-special-chars.directive.ts ***!
  \***********************************************/
/*! exports provided: NoSpecialCharsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoSpecialCharsDirective", function() { return NoSpecialCharsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoSpecialCharsDirective = /** @class */ (function () {
    function NoSpecialCharsDirective() {
    }
    NoSpecialCharsDirective_1 = NoSpecialCharsDirective;
    NoSpecialCharsDirective.prototype.validate = function (c) {
        var hasSpecialChars = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(c.value);
        var message = {
            'hasSpecialChars': {
                'message': 'No Special Characters Allowed'
            }
        };
        return hasSpecialChars ? message : null;
    };
    var NoSpecialCharsDirective_1;
    NoSpecialCharsDirective = NoSpecialCharsDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appNoSpecialChars]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: NoSpecialCharsDirective_1, multi: true }]
        }),
        __metadata("design:paramtypes", [])
    ], NoSpecialCharsDirective);
    return NoSpecialCharsDirective;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Oops! That page doesn't exist. Please select a link below.\n</h1>\n<nav>\n  <a routerLink=\"/\" routerLinkActive=\"active\">\n    <button>Home</button>\n  </a>\n  <a routerLink=\"/search\" routerLinkActive=\"active\">\n    <button>Search For Repositories</button>\n  </a>\n</nav>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/repository-display/repository-display.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/repository-display/repository-display.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list_item {\r\n    border:1px solid black;\r\n    height: 165px;\r\n    margin-top: 20px;\r\n    padding-top: 10px;\r\n    padding-left: 10px;\r\n}\r\n.avatar {\r\n    width:150px;\r\n    height:150px;\r\n    float:left;\r\n}\r\n.title {\r\n    font-size:20px;\r\n}\r\n.description {\r\n    font-size:18px;\r\n}\r\n.favorite_icon {\r\n    position: relative;\r\n    float: right;\r\n    bottom: 95px;\r\n    font-size: 36px;\r\n    cursor: pointer;\r\n}\r\n.favorited {\r\n    color: yellow;\r\n    text-shadow:\r\n     -1px -1px 0 #000,  \r\n      1px -1px 0 #000,\r\n      -1px 1px 0 #000,\r\n       1px 1px 0 #000;\r\n}\r\n   \r\n"

/***/ }),

/***/ "./src/app/repository-display/repository-display.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/repository-display/repository-display.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li [ngStyle]=\"{'background-color' : (i % 2 === 0) ? 'silver' : 'white'}\" class=\"list_item\" *ngFor=\"let result of searchResults.items; index as i;\">\n  <a [href]=\"result.html_url\">\n    <img class=\"avatar\" [src]=\"result.owner.avatar_url\" /> \n    <h4 class=\"title\">{{result.name | favoriteText:checkFavorite(result)}}\n      <small> by {{result.owner.login | uppercase}}</small> \n    </h4>\n  </a> \n  <span class='favorite_icon' *ngIf=\"!checkFavorite(result)\" (click)=\"addFavorite(result)\">&#9983;</span>\n  <span class='favorite_icon favorited' *ngIf=\"checkFavorite(result)\">&#9733;</span>\n  <p class=\"description\"> {{result.description}}</p> \n  <p> Created On: {{result.created_at | date:'fullDate'}} </p>\n</li>\n\n\n"

/***/ }),

/***/ "./src/app/repository-display/repository-display.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/repository-display/repository-display.component.ts ***!
  \********************************************************************/
/*! exports provided: RepositoryDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoryDisplayComponent", function() { return RepositoryDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RepositoryDisplayComponent = /** @class */ (function () {
    function RepositoryDisplayComponent() {
        var _this = this;
        this.updateFavorites = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeFavorites = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addFavorite = function (item) {
            _this.updateFavorites.emit(item.id);
        };
        this.unFavorite = function (item) {
            return _this.removeFavorites.emit(item.repository.id);
        };
        this.checkFavorite = function (item) {
            return _this.favorites.indexOf(item.id) > -1;
        };
    }
    RepositoryDisplayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RepositoryDisplayComponent.prototype, "searchResults", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RepositoryDisplayComponent.prototype, "favorites", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RepositoryDisplayComponent.prototype, "updateFavorites", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RepositoryDisplayComponent.prototype, "removeFavorites", void 0);
    RepositoryDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-repository-display',
            template: __webpack_require__(/*! ./repository-display.component.html */ "./src/app/repository-display/repository-display.component.html"),
            styles: [__webpack_require__(/*! ./repository-display.component.css */ "./src/app/repository-display/repository-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RepositoryDisplayComponent);
    return RepositoryDisplayComponent;
}());



/***/ }),

/***/ "./src/app/unified-search.service.ts":
/*!*******************************************!*\
  !*** ./src/app/unified-search.service.ts ***!
  \*******************************************/
/*! exports provided: UnifiedSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnifiedSearchService", function() { return UnifiedSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _git_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./git-search.service */ "./src/app/git-search.service.ts");
/* harmony import */ var _git_code_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./git-code-search.service */ "./src/app/git-code-search.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UnifiedSearchService = /** @class */ (function () {
    function UnifiedSearchService(searchService, codeSearchService) {
        var _this = this;
        this.searchService = searchService;
        this.codeSearchService = codeSearchService;
        /*UnifiedSearch: Function = (query: string): Observable<UnifiedSearch> => {
          return forkJoin(this.searchService.gitSearch(query), this.codeSearchService.codeSearch(query))
          .map((response: [GitSearch, GitCodeSearch]) => {
            return {
              'repository': response [0],
              'code': response [1]
            };
          });
        }*/
        this.UnifiedSearch = function (query) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(_this.searchService.gitSearch(query), _this.codeSearchService.codeSearch(query))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return {
                    'repositories': response[0],
                    'code': response[1]
                };
            }));
        };
    }
    UnifiedSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_git_search_service__WEBPACK_IMPORTED_MODULE_1__["GitSearchService"], _git_code_search_service__WEBPACK_IMPORTED_MODULE_2__["GitCodeSearchService"]])
    ], UnifiedSearchService);
    return UnifiedSearchService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
else {
    alert('App is running in development mode.');
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\quyng\Projects\angular-reactive\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map