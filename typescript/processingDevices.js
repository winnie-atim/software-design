"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GPU = exports.CPU = void 0;
var CPU = /** @class */ (function () {
    function CPU() {
    }
    CPU.prototype.process = function () {
        return "CPU processing data";
    };
    return CPU;
}());
exports.CPU = CPU;
var GPU = /** @class */ (function () {
    function GPU() {
    }
    GPU.prototype.process = function () {
        return "GPU processing data";
    };
    return GPU;
}());
exports.GPU = GPU;
