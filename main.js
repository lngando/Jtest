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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _juni_correction_juni_correction_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./juni-correction/juni-correction.component */ "./src/app/juni-correction/juni-correction.component.ts");
/* harmony import */ var _juni_test_juni_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./juni-test/juni-test.component */ "./src/app/juni-test/juni-test.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var routes = [
    { path: 'test', component: _juni_test_juni_test_component__WEBPACK_IMPORTED_MODULE_2__["JuniTestComponent"] },
    { path: 'correction', component: _juni_correction_juni_correction_component__WEBPACK_IMPORTED_MODULE_1__["JuniCorrectionComponent"] },
    { path: '**', redirectTo: 'test' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header (with the navigation) -->\n<mat-toolbar color=\"primary\">\n  <div class=\"topMenuLinks\">\n    <a mat-button [routerLink]=\"['/test']\" routerLinkActive=\"router-link-active\">TEST</a>\n    <a mat-button [routerLink]=\"['/correction']\" routerLinkActive=\"router-link-active\">CORRECTION</a>\n  </div>\n</mat-toolbar>\n<router-outlet></router-outlet>\n<!-- Footer -->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  padding-right: 1em;\n  text-decoration: none; }\n\n.topMenuLinks {\n  margin-left: 19.30em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW5vbmdhbmRvL0RvY3VtZW50cy90cmFpbm5pbmcvYW5ndWxhci9qdW5pcGVyLXRlc3Qvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0Usb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgcGFkZGluZy1yaWdodDogMWVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50b3BNZW51TGlua3Mge1xuICBtYXJnaW4tbGVmdDogMTkuMzBlbTtcbn1cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'juniper-test';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _juni_test_juni_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./juni-test/juni-test.component */ "./src/app/juni-test/juni-test.component.ts");
/* harmony import */ var _juni_correction_juni_correction_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./juni-correction/juni-correction.component */ "./src/app/juni-correction/juni-correction.component.ts");




/* Material section */








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _juni_test_juni_test_component__WEBPACK_IMPORTED_MODULE_10__["JuniTestComponent"],
                _juni_correction_juni_correction_component__WEBPACK_IMPORTED_MODULE_11__["JuniCorrectionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/juni-correction/juni-correction.component.html":
/*!****************************************************************!*\
  !*** ./src/app/juni-correction/juni-correction.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"comingSoon\">Feature comming soon...</h1>\n"

/***/ }),

/***/ "./src/app/juni-correction/juni-correction.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/juni-correction/juni-correction.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comingSoon {\n  margin-left: 25em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW5vbmdhbmRvL0RvY3VtZW50cy90cmFpbm5pbmcvYW5ndWxhci9qdW5pcGVyLXRlc3Qvc3JjL2FwcC9qdW5pLWNvcnJlY3Rpb24vanVuaS1jb3JyZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9qdW5pLWNvcnJlY3Rpb24vanVuaS1jb3JyZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbWluZ1Nvb24ge1xuICBtYXJnaW4tbGVmdDogMjVlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/juni-correction/juni-correction.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/juni-correction/juni-correction.component.ts ***!
  \**************************************************************/
/*! exports provided: JuniCorrectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuniCorrectionComponent", function() { return JuniCorrectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JuniCorrectionComponent = /** @class */ (function () {
    function JuniCorrectionComponent() {
    }
    JuniCorrectionComponent.prototype.ngOnInit = function () {
    };
    JuniCorrectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-juni-correction',
            template: __webpack_require__(/*! ./juni-correction.component.html */ "./src/app/juni-correction/juni-correction.component.html"),
            styles: [__webpack_require__(/*! ./juni-correction.component.scss */ "./src/app/juni-correction/juni-correction.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JuniCorrectionComponent);
    return JuniCorrectionComponent;
}());



/***/ }),

/***/ "./src/app/juni-test/juni-test.component.html":
/*!****************************************************!*\
  !*** ./src/app/juni-test/juni-test.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list class=\"questionList\">\n  <mat-list-item *ngFor=\"let question of questions\">\n    <h1 matLine>{{question.question.q}}</h1>\n    <h4 matLine *ngFor=\"let ans of question.answers\">\n      <mat-checkbox class=\"ckeckbox\">\n        <span [class.correcHighlight]=\"showAnswers && ans.correct\"> {{ans.key}}. {{ans.value}}</span>\n      </mat-checkbox>\n    </h4>\n    <mat-divider></mat-divider>\n  </mat-list-item>\n  <div class=\"footBtn\">\n    <button mat-raised-button (click)=\"this.nextQuestions()\">NEXT</button>\n    <button mat-raised-button (click)=\"show()\">SHOW ANSWERS</button>\n    <button mat-raised-button>VALIDATE</button>\n  </div>\n</mat-list>\n"

/***/ }),

/***/ "./src/app/juni-test/juni-test.component.scss":
/*!****************************************************!*\
  !*** ./src/app/juni-test/juni-test.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".questionList {\n  margin: 0em 25em 0em 25em; }\n\n.ans {\n  margin-top: 2em; }\n\n.footBtn {\n  margin-right: 2em; }\n\n.correcHighlight {\n  background-color: greenyellow; }\n\n.ckeckbox {\n  border-color: greenyellow; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW5vbmdhbmRvL0RvY3VtZW50cy90cmFpbm5pbmcvYW5ndWxhci9qdW5pcGVyLXRlc3Qvc3JjL2FwcC9qdW5pLXRlc3QvanVuaS10ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLDZCQUE2QixFQUFBOztBQU8vQjtFQUNFLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvanVuaS10ZXN0L2p1bmktdGVzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWVzdGlvbkxpc3Qge1xuICBtYXJnaW46IDBlbSAyNWVtIDBlbSAyNWVtO1xufVxuXG4uYW5zIHtcbiAgbWFyZ2luLXRvcDogMmVtO1xufVxuXG4uZm9vdEJ0biB7XG4gIG1hcmdpbi1yaWdodDogMmVtO1xufVxuXG4uY29ycmVjSGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XG59XG5cbi5nb29kQW5zd2VyIHt9XG5cbi5iYWRBbnN3ZXIge31cblxuLmNrZWNrYm94IHtcbiAgYm9yZGVyLWNvbG9yOiBncmVlbnllbGxvdztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/juni-test/juni-test.component.ts":
/*!**************************************************!*\
  !*** ./src/app/juni-test/juni-test.component.ts ***!
  \**************************************************/
/*! exports provided: JuniTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuniTestComponent", function() { return JuniTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/question.service */ "./src/app/services/question.service.ts");



var JuniTestComponent = /** @class */ (function () {
    function JuniTestComponent(questioService) {
        this.questioService = questioService;
        this.questionsArr = [];
        this.questions = [];
        this.nextSection = 0;
        this.showAnswers = false;
    }
    JuniTestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questioService.getQuestions()
            .subscribe(function (allQuestions) {
            allQuestions = allQuestions.map(function (q) {
                q.answers = _this.questioService.formatAnswer(q);
                return q;
            });
            _this.questionsArr = allQuestions;
            _this.questions = allQuestions.slice(_this.nextSection, _this.nextSection + 60);
            _this.nextSection += 60;
        });
    };
    JuniTestComponent.prototype.nextQuestions = function () {
        var _this = this;
        if (this.nextSection === this.questionsArr.length) {
            return;
        }
        this.questions = [];
        this.questionsArr.slice(this.nextSection, this.nextSection + 60).forEach(function (x) { return _this.questions.push(x); });
        this.nextSection += 60;
    };
    JuniTestComponent.prototype.show = function () {
        this.showAnswers = !this.showAnswers;
    };
    JuniTestComponent.prototype.selectCorrectAnswer = function (ans) {
        var responses = ans.response.split(',');
    };
    JuniTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-juni-test',
            template: __webpack_require__(/*! ./juni-test.component.html */ "./src/app/juni-test/juni-test.component.html"),
            styles: [__webpack_require__(/*! ./juni-test.component.scss */ "./src/app/juni-test/juni-test.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]])
    ], JuniTestComponent);
    return JuniTestComponent;
}());



/***/ }),

/***/ "./src/app/services/question.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/question.service.ts ***!
  \**********************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var QuestionService = /** @class */ (function () {
    function QuestionService(http) {
        this.http = http;
    }
    QuestionService.prototype.ngOnInit = function () {
    };
    QuestionService.prototype.getQuestions = function () {
        return this.http.get('../assets/juniper2.json');
    };
    QuestionService.prototype.formatAnswer = function (question) {
        var _this = this;
        return Object.keys(question.answers).map(function (key) {
            return { key: key, value: question.answers[key], checked: false, correct: _this.detectCorrectAnswer(question, key) };
        });
    };
    QuestionService.prototype.detectCorrectAnswer = function (question, qKey) {
        if (question.response.split(',').includes(qKey)) {
            return true;
        }
        else {
            return false;
        }
    };
    QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], QuestionService);
    return QuestionService;
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
// This file can be replaced during build by using the `fileReplacements` array.
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/linongando/Documents/trainning/angular/juniper-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map