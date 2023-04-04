"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
function ensureAuthenticated(request, response, next) {
    try {
        const { 'x-api-key': xApiKey } = request.headers;
        if (!xApiKey) {
            response.status(401).json({ 'Bad Request 2': 'Something went wrong!' });
        }
        if (xApiKey !== process.env.x_api_key) {
            response.status(401).json({ 'Bad Request 34': 'Something went wrong!' });
        }
        next();
    }
    catch (error) {
        throw new Error('Invalid token');
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
