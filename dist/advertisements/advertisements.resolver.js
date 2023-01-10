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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementsResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const new_advertisement_input_1 = require("./dto/new-advertisement.input");
const update_advertisement_input_1 = require("./dto/update-advertisement.input");
const advertisement_model_1 = require("./models/advertisement.model");
const advertisements_service_1 = require("./advertisements.service");
let AdvertisementsResolver = class AdvertisementsResolver {
    constructor(advertisementsService) {
        this.advertisementsService = advertisementsService;
    }
    async advertisement(id) {
        const advertisement = await this.advertisementsService.findOneById(id);
        if (!advertisement) {
            throw new common_1.NotFoundException(id);
        }
        return advertisement;
    }
    advertisements() {
        return this.advertisementsService.findAll();
    }
    async addAdvertisement(newAdvertisementData) {
        const advertisement = await this.advertisementsService.create(newAdvertisementData);
        return advertisement;
    }
    async updateAdvertisement(advertisementId, updateAdvertisementData) {
        return this.advertisementsService.update(advertisementId, updateAdvertisementData);
    }
    async removeAdvertisement(id) {
        return this.advertisementsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Query)(returns => advertisement_model_1.AdvertisementGraphQLModel),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdvertisementsResolver.prototype, "advertisement", null);
__decorate([
    (0, graphql_1.Query)(returns => [advertisement_model_1.AdvertisementGraphQLModel]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdvertisementsResolver.prototype, "advertisements", null);
__decorate([
    (0, graphql_1.Mutation)(returns => advertisement_model_1.AdvertisementGraphQLModel),
    __param(0, (0, graphql_1.Args)('newAdvertisementData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_advertisement_input_1.NewAdvertisementInput]),
    __metadata("design:returntype", Promise)
], AdvertisementsResolver.prototype, "addAdvertisement", null);
__decorate([
    (0, graphql_1.Mutation)(returns => Boolean),
    __param(0, (0, graphql_1.Args)('advertisementId')),
    __param(1, (0, graphql_1.Args)('updateAdvertisementData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_advertisement_input_1.UpdateAdvertisementInput]),
    __metadata("design:returntype", Promise)
], AdvertisementsResolver.prototype, "updateAdvertisement", null);
__decorate([
    (0, graphql_1.Mutation)(returns => Boolean),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdvertisementsResolver.prototype, "removeAdvertisement", null);
AdvertisementsResolver = __decorate([
    (0, graphql_1.Resolver)(of => advertisement_model_1.AdvertisementGraphQLModel),
    __metadata("design:paramtypes", [advertisements_service_1.AdvertisementsService])
], AdvertisementsResolver);
exports.AdvertisementsResolver = AdvertisementsResolver;
//# sourceMappingURL=advertisements.resolver.js.map