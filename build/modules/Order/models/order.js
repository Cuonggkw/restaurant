"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _sequelize = require("sequelize");
var _database = _interopRequireDefault(require("../../../core/database"));
var _account = _interopRequireDefault(require("../../Account/models/account"));
var _table = _interopRequireDefault(require("../../Table/models/table"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var Orders = /*#__PURE__*/function (_Model) {
  function Orders() {
    _classCallCheck(this, Orders);
    return _callSuper(this, Orders, arguments);
  }
  _inherits(Orders, _Model);
  return _createClass(Orders, null, [{
    key: "associate",
    value: function associate(models) {
      // define association here
    }
  }]);
}(_sequelize.Model);
Orders.init({
  tableID: _sequelize.DataTypes.INTEGER,
  accountID: _sequelize.DataTypes.INTEGER,
  total_price: _sequelize.DataTypes.DECIMAL(10, 2),
  status: _sequelize.DataTypes.INTEGER,
  notes: _sequelize.DataTypes.TEXT("long"),
  payment: _sequelize.DataTypes.ENUM("cash", "credit card", "debit card", "other")
}, {
  sequelize: _database["default"],
  modelName: "Orders"
});
Orders.belongsTo(_table["default"], {
  foreignKey: "tableID",
  as: "tableData",
  targetKey: "id"
});
_table["default"].hasMany(Orders, {
  foreignKey: "tableID",
  as: "tableData"
});
Orders.belongsTo(_account["default"], {
  foreignKey: "accountID",
  as: "accountData",
  targetKey: "id"
});
_account["default"].hasMany(Orders, {
  foreignKey: "accountID",
  as: "accountData"
});
module.exports = Orders;