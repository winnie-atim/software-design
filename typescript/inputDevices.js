"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mouse = exports.Keyboard = void 0;
var Keyboard = /** @class */ (function () {
    function Keyboard() {
    }
    Keyboard.prototype.input = function () {
        return "Keyboard input";
    };
    return Keyboard;
}());
exports.Keyboard = Keyboard;
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    Mouse.prototype.input = function () {
        return "Mouse input";
    };
    return Mouse;
}());
exports.Mouse = Mouse;
