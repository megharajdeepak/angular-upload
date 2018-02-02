webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-file-uploader></app-file-uploader>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_file_uploader_file_uploader_component__ = __webpack_require__("../../../../../src/app/components/file-uploader/file-uploader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_file_uploader_file_uploader_component__["a" /* FileUploaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/file-uploader/file-uploader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn:focus,\r\n.upload-btn:focus {\r\n    outline: 0 !important;\r\n}\r\n\r\n.row {\r\n    margin-top: 80px;\r\n}\r\n\r\n.upload-btn {\r\n    color: #ffffff;\r\n    background-color: #893380;\r\n    border: none;\r\n    -webkit-transition: all 1s ease;\r\n    transition: all 1s ease;\r\n}\r\n\r\n.upload-btn:hover,\r\n.upload-btn:focus,\r\n.upload-btn:active,\r\n.upload-btn.active {\r\n    color: #ffffff;\r\n    background-color: #530b4c;\r\n    border: none;\r\n}\r\n\r\nh4 {\r\n    padding-bottom: 30px;\r\n    color: #B8BDC1;\r\n}\r\n\r\n.glyphicon {\r\n    font-size: 5em;\r\n    color: #9CA3A9;\r\n}\r\n\r\nh2 {\r\n    margin-top: 15px;\r\n    color: #68757E;\r\n}\r\n\r\n.panel {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\nh3.error {\r\n    background: rgb(247, 54, 54);\r\n    color: rgb(248, 248, 248);\r\n    padding: 0.8em;\r\n}\r\n\r\n#upload-input {\r\n    display: none;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .main-container {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .container {\r\n        width: 450px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/file-uploader/file-uploader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <div class=\"panel panel-default\">\n                <img style=\"height:100px;width:100%;\" src=\"http://www.inspirata.com/wp-content/themes/inspirata/images/logo-color.svg\">\n                <div class=\"panel-body\">\n                    <span class=\"glyphicon glyphicon-cloud-upload\"></span>\n                    <h2>File Uploader</h2>\n                    <h4>Inspirata</h4>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar\" [style.width]=\"progressWidth\">{{progressText}}</div>\n                    </div>\n                    <button class=\"btn btn-lg upload-btn\" type=\"button\" (click)=\"onUploadClick()\">Upload File</button>\n                    <h3 class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</h3>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<input #file id=\"upload-input\" type=\"file\" (change)=\"onSelect($event)\">"

/***/ }),

/***/ "../../../../../src/app/components/file-uploader/file-uploader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_upload_service__ = __webpack_require__("../../../../../src/app/providers/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_contants_class__ = __webpack_require__("../../../../../src/app/utils/contants.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileUploaderComponent = /** @class */ (function () {
    function FileUploaderComponent(uploadService) {
        this.uploadService = uploadService;
    }
    FileUploaderComponent.prototype.ngOnInit = function () {
    };
    FileUploaderComponent.prototype.onUploadClick = function () {
        this.errorMessage = null;
        this.progressWidth = "0%";
        this.progressText = "0%";
        this.file.nativeElement.click();
    };
    FileUploaderComponent.prototype.onSelect = function (event) {
        //approach 1
        this.uploadFile(event.target.files);
        //approach 2
        //this.uploadService.uploadFile2(event);
    };
    FileUploaderComponent.prototype.uploadFile = function (files) {
        var _this = this;
        if (files.length == 0) {
            var msg = __WEBPACK_IMPORTED_MODULE_3__utils_contants_class__["a" /* default */].MSG_SELECT_FILE;
            console.log(msg);
            this.errorMessage = msg;
            return;
        }
        else {
            var file = files[0]; //select a single file
            if (file.size > __WEBPACK_IMPORTED_MODULE_3__utils_contants_class__["a" /* default */].MAX_FILE_SIZE) {
                var msg = __WEBPACK_IMPORTED_MODULE_3__utils_contants_class__["a" /* default */].MSG_FILE_SIZE_EXCEED;
                console.log(msg);
                this.errorMessage = msg;
                return;
            }
            else {
                this.uploadService.uploadFile(__WEBPACK_IMPORTED_MODULE_3__utils_contants_class__["a" /* default */].FILE_UPLOAD_API, file)
                    .subscribe(function (event) {
                    if (event.type == __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                        var percentDone = Math.round(100 * event.loaded / event.total);
                        _this.progressText = percentDone + "%";
                        _this.progressWidth = percentDone + "%";
                        console.log("File is " + percentDone + "% loaded.");
                    }
                    else if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["e" /* HttpResponse */]) {
                        console.log('File is completely uploaded.');
                    }
                }, function (err) {
                    console.error("Upload Error:", err);
                }, function () {
                    console.log("Upload Complete");
                    _this.progressText = "Upload Complete";
                });
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('file'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], FileUploaderComponent.prototype, "file", void 0);
    FileUploaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-file-uploader',
            template: __webpack_require__("../../../../../src/app/components/file-uploader/file-uploader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/file-uploader/file-uploader.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_upload_service__["a" /* UploadService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_upload_service__["a" /* UploadService */]])
    ], FileUploaderComponent);
    return FileUploaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/providers/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_contants_class__ = __webpack_require__("../../../../../src/app/utils/contants.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
    }
    //approach 1
    UploadService.prototype.uploadFile = function (url, file) {
        var formData = new FormData();
        formData.append('upload', file);
        var req = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpRequest */]('POST', url, formData, { reportProgress: true, responseType: 'blob' });
        return this.http.request(req);
    };
    //approach 2
    UploadService.prototype.uploadFile2 = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('uploadFile', file, file.name);
            this.http.post(__WEBPACK_IMPORTED_MODULE_2__utils_contants_class__["a" /* default */].FILE_UPLOAD_API, formData, { responseType: 'blob' })
                .subscribe(function (data) {
                console.log('success', data);
            }, function (error) {
                //console.log('error');
                console.log("error", error);
            });
        }
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "../../../../../src/app/utils/contants.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.MAX_FILE_SIZE = 25 * 1024 * 1024; //25MB
    Constants.MSG_SELECT_FILE = "Please select a file to upload.";
    Constants.MSG_FILE_SIZE_EXCEED = "File size limit is 25MB.";
    Constants.FILE_UPLOAD_API = "http://localhost:3000/upload";
    return Constants;
}());
/* harmony default export */ __webpack_exports__["a"] = (Constants);


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map