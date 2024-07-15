"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HDD = exports.SSD = void 0;
var SSD = /** @class */ (function () {
    function SSD() {
    }
    SSD.prototype.store = function () {
        return "SSD storing data";
    };
    SSD.prototype.retrieve = function () {
        return "SSD retrieving data";
    };
    return SSD;
}());
exports.SSD = SSD;
var HDD = /** @class */ (function () {
    function HDD() {
    }
    HDD.prototype.store = function () {
        return "HDD storing data";
    };
    HDD.prototype.retrieve = function () {
        return "HDD retrieving data";
    };
    return HDD;
}());
exports.HDD = HDD;
