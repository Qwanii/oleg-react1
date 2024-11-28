"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var use_store_1 = __importDefault(require("../../hooks/use-store"));
var use_selector_1 = __importDefault(require("../../hooks/use-selector"));
var use_init_1 = __importDefault(require("../../hooks/use-init"));
var use_translate_1 = __importDefault(require("../../hooks/use-translate"));
var item_basket_1 = __importDefault(require("../../components/item-basket"));
var list_1 = __importDefault(require("../../components/list"));
var basket_total_1 = __importDefault(require("../../components/basket-total"));
var controls_1 = __importDefault(require("../../components/controls/"));
function Basket() {
    var _this = this;
    var store = (0, use_store_1.default)();
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, use_init_1.default)(function () { return __awaiter(_this, void 0, void 0, function () {
        var newCatalog;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    store.create("modalCatalog", "catalog", true);
                    return [4 /*yield*/, store.actions.modalCatalog.initParams({}, false)];
                case 1:
                    newCatalog = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, []);
    var select = (0, use_selector_1.default)(function (state) { return ({
        list: state.basket.list,
        amount: state.basket.amount,
        sum: state.basket.sum,
    }); });
    var callbacks = {
        // Удаление из корзины
        removeFromBasket: (0, react_1.useCallback)(function (_id) { return store.actions.basket.removeFromBasket(_id); }, [store]),
        // Закрытие любой модалки
        closeModal: (0, react_1.useCallback)(function () {
            store.actions.modals.close();
            // dispatch(modalsActions.close());
        }, [store]),
        // Открытие модалки
        openModal: (0, react_1.useCallback)(function () { return __awaiter(_this, void 0, void 0, function () {
            var res, _i, res_1, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, store.actions.modals.open("another-item")];
                    case 1:
                        res = _a.sent();
                        if (!(res !== "close")) return [3 /*break*/, 5];
                        _i = 0, res_1 = res;
                        _a.label = 2;
                    case 2:
                        if (!(_i < res_1.length)) return [3 /*break*/, 5];
                        id = res_1[_i];
                        return [4 /*yield*/, store.actions.basket.addToBasket(id, 1)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        }); }, [store]),
    };
    var t = (0, use_translate_1.default)().t;
    var renders = {
        itemBasket: (0, react_1.useCallback)(function (item) { return (react_1.default.createElement(item_basket_1.default, { item: item, link: "/articles/".concat(item._id), onRemove: callbacks.removeFromBasket, onLink: callbacks.closeModal, labelUnit: t('basket.unit'), labelDelete: t('basket.delete') })); }, [callbacks.removeFromBasket, t]),
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(list_1.default, { list: select.list, renderItem: renders.itemBasket }),
        react_1.default.createElement(basket_total_1.default, { sum: select.sum, t: t }),
        select.amount > 0 && react_1.default.createElement(controls_1.default, { title: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0435 \u0442\u043E\u0432\u0430\u0440", onAdd: callbacks.openModal })));
}
exports.default = (0, react_1.memo)(Basket);
//# sourceMappingURL=index.js.map