"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function phoneNumberValidator(control) {
    var valid = /^\d+$/.test(control.value);
    return valid ? null : { invalidNumber: { valid: false, value: control.value } };
}
exports.phoneNumberValidator = phoneNumberValidator;
//# sourceMappingURL=mobilenumber-validator.js.map