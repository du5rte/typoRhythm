'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (args) {
  return new TypoRhythm().render(args);
};

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TypoRhythm = exports.TypoRhythm = function () {
  function TypoRhythm(fontsize, base, unit) {
    _classCallCheck(this, TypoRhythm);

    this.fontsize = fontsize || 16;
    this.base = base || 24;
    this.unit = unit || 'em';
  }

  _createClass(TypoRhythm, [{
    key: 'fontSize',
    value: function fontSize(size) {
      var unit = arguments.length <= 1 || arguments[1] === undefined ? this.unit : arguments[1];

      return size / this.fontsize + unit;
    }
  }, {
    key: 'lineHeight',
    value: function lineHeight(size) {
      var base = arguments.length <= 1 || arguments[1] === undefined ? this.base : arguments[1];

      return base / size;
    }
  }, {
    key: 'baseContext',
    value: function baseContext(size) {
      var multipler = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

      return multipler * (this.base / size) + this.unit;
    }
  }, {
    key: 'lineHeightContext',
    value: function lineHeightContext(size) {
      var remaining = size % this.base;
      var biggerBase = this.base + (size - remaining);
      return remaining > 0 ? this.lineHeight(size, biggerBase) : 1;
    }
  }, {
    key: 'render',
    value: function render() {
      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var size = _ref.size;
      var padding = _ref.padding;
      var margin = _ref.margin;
      var lineHeight = _ref.lineHeight;
      var unit = _ref.unit;

      return {
        fontSize: this.fontSize(size, unit),
        padding: padding ? this.baseContext(size, padding) : null,
        marginBottom: margin ? this.baseContext(size, margin) : null,
        lineHeight: lineHeight ? lineHeight * lineHeight(size) : this.lineHeightContext(size)
      };
    }
  }]);

  return TypoRhythm;
}();

var typoRhythm = exports.typoRhythm = new TypoRhythm();