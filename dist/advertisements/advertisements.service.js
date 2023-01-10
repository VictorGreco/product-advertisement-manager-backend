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
exports.AdvertisementsService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const advertisement_schema_1 = require("./schemas/advertisement.schema");
let AdvertisementsService = class AdvertisementsService {
    constructor(advertisementModel) {
        this.advertisementModel = advertisementModel;
    }
    async create(data) {
        const createAdvertisement = new this.advertisementModel(data);
        return createAdvertisement.save();
    }
    async findOneById(id) {
        return this.advertisementModel.findById(id).exec();
    }
    async findAll() {
        return this.advertisementModel.find().exec();
    }
    async update(id, data) {
        await this.advertisementModel.update({ id }, data);
        return true;
    }
    async remove(id) {
        await this.advertisementModel.deleteOne({ id });
        return true;
    }
};
AdvertisementsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(advertisement_schema_1.Advertisement.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AdvertisementsService);
exports.AdvertisementsService = AdvertisementsService;
//# sourceMappingURL=advertisements.service.js.map