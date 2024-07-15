"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Printer = exports.Monitor = void 0;
var Monitor = /** @class */ (function () {
    function Monitor() {
    }
    Monitor.prototype.output = function () {
        return "Monitor output";
    };
    return Monitor;
}());
exports.Monitor = Monitor;
var Printer = /** @class */ (function () {
    function Printer() {
    }
    Printer.prototype.output = function () {
        return "Printer output";
    };
    return Printer;
}());
exports.Printer = Printer;
