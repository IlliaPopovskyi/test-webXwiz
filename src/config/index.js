"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require('dotenv').config();
exports.config = {
    dbUri: process.env.DB_URI,
};
