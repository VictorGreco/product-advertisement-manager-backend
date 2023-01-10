"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementGraphQLModel = void 0;
const eager_import_0 = require("../../../mongoose");
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("mongoose");
let AdvertisementGraphQLModel = class AdvertisementGraphQLModel {
    static _GRAPHQL_METADATA_FACTORY() {
        return { _id: { type: () => require("../../../mongoose").Types.ObjectId }, product_id: { type: () => Number }, title: { type: () => String }, valid_until: { type: () => Date }, discount_percentage: { type: () => Number } };
    }
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], AdvertisementGraphQLModel.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(type => graphql_1.Int),
    __metadata("design:type", Number)
], AdvertisementGraphQLModel.prototype, "product_id", void 0);
__decorate([
    (0, graphql_1.Directive)('@upper'),
    __metadata("design:type", String)
], AdvertisementGraphQLModel.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], AdvertisementGraphQLModel.prototype, "valid_until", void 0);
__decorate([
    (0, graphql_1.Field)(type => graphql_1.Int),
    __metadata("design:type", Number)
], AdvertisementGraphQLModel.prototype, "discount_percentage", void 0);
AdvertisementGraphQLModel = __decorate([
    (0, graphql_1.ObjectType)({ description: 'advertisement' })
], AdvertisementGraphQLModel);
exports.AdvertisementGraphQLModel = AdvertisementGraphQLModel;
//# sourceMappingURL=advertisement.model.js.map