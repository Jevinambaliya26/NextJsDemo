"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/email":
/*!********************************************!*\
  !*** external "next-auth/providers/email" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/email");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! auth */ \"../../packages/auth/index.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()(auth__WEBPACK_IMPORTED_MODULE_0__.config));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkI7QUFDRztBQUVoQyxpRUFBZUMsZ0RBQVEsQ0FBQ0Qsd0NBQU0sQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZWxsaUthbS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiYXV0aFwiO1xuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoY29uZmlnKTtcbiJdLCJuYW1lcyI6WyJjb25maWciLCJOZXh0QXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "../../packages/auth/config.ts":
/*!*************************************!*\
  !*** ../../packages/auth/config.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/email */ \"next-auth/providers/email\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_email__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! db */ \"../../packages/db/index.ts\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ \"../../packages/auth/types.ts\");\n\n\n\n\n\nconst emailConfig = {\n    server: {\n        service: \"Mandrill\",\n        auth: {\n            user: \"MandrillUser\",\n            pass: process.env.MANDRILL_API_KEY\n        },\n        logger: \"development\" === \"development\"\n    },\n    from: process.env.MANDRILL_EMAIL_FROM\n};\nconst googleConfig = {\n    clientId: process.env.GOOGLE_CLIENT_ID,\n    clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n    authorizationUrl: \"https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code\"\n};\nconst config = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__.PrismaAdapter)(db__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n    secret: process.env.SECRET,\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        next_auth_providers_email__WEBPACK_IMPORTED_MODULE_0___default()(emailConfig),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()(googleConfig)\n    ],\n    callbacks: {\n        /**\n     * @param  {object} user     User object\n     * @param  {object} account  Provider account\n     * @param  {object} profile  Provider profile\n     * @return {boolean|string}  Return `true` to allow sign in\n     *                           Return `false` to deny access\n     *                           Return `string` to redirect to (eg.: \"/unauthorized\")\n     */ async signIn () {\n            return true;\n        },\n        /**\n     * @param  {string} url      URL provided as callback URL by the client\n     * @param  {string} baseUrl  Default base URL of site (can be used as fallback)\n     * @return {string}          URL the client will be redirect to\n     */ async redirect ({ url , baseUrl  }) {\n            if (url.startsWith(baseUrl)) {\n                return url;\n            }\n            return baseUrl;\n        },\n        /**\n     * @param  {object}  token     Decrypted JSON Web Token\n     * @param  {object}  user      User object      (only available on sign in)\n     * @param  {object}  account   Provider account (only available on sign in)\n     * @param  {object}  profile   Provider profile (only available on sign in)\n     * @param  {boolean} isNewUser True if new user (only available on sign in)\n     * @return {object}            JSON Web Token that will be saved\n     */ async jwt ({ token , user , account  }) {\n            // Add access_token to the token right after signin\n            if (account?.accessToken) {\n                token.accessToken = account.accessToken;\n            }\n            if (user?.id) {\n                token.id = user.id;\n            }\n            return token;\n        },\n        /**\n     * @param  {object} session      Session object\n     * @param  {object} user         User object    (if using database sessions)\n     * @return {object}              Session that will be returned to the client\n     */ async session ({ session , token  }) {\n            if (token && session.user) {\n                session.user.id = token.id;\n            }\n            return session;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvYXV0aC9jb25maWcudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ0U7QUFDaEM7QUFDa0M7QUFFekM7QUFFaEIsS0FBSyxDQUFDSSxXQUFXLEdBQUcsQ0FBQztJQUNuQkMsTUFBTSxFQUFFLENBQUM7UUFDUEMsT0FBTyxFQUFFLENBQVU7UUFDbkJDLElBQUksRUFBRSxDQUFDO1lBQ0xDLElBQUksRUFBRSxDQUFjO1lBQ3BCQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxnQkFBZ0I7UUFDcEMsQ0FBQztRQUNEQyxNQUFNLEVBZFYsQ0FBYSxpQkFjd0IsQ0FBYTtJQUNoRCxDQUFDO0lBQ0RDLElBQUksRUFBRUosT0FBTyxDQUFDQyxHQUFHLENBQUNJLG1CQUFtQjtBQUN2QyxDQUFDO0FBRUQsS0FBSyxDQUFDQyxZQUFZLEdBQUcsQ0FBQztJQUNwQkMsUUFBUSxFQUFFUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ08sZ0JBQWdCO0lBQ3RDQyxZQUFZLEVBQUVULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUyxvQkFBb0I7SUFDOUNDLGdCQUFnQixFQUNkLENBQW9HO0FBQ3hHLENBQUM7QUFFTSxLQUFLLENBQUNDLE1BQU0sR0FBb0IsQ0FBQztJQUN0Q0MsT0FBTyxFQUFFcEIsd0VBQWEsQ0FBQ0QsMENBQU07SUFDN0JzQixNQUFNLEVBQUVkLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYyxNQUFNO0lBQzFCQyxPQUFPLEVBQUUsQ0FBQztRQUFDQyxRQUFRLEVBQUUsQ0FBSztJQUFDLENBQUM7SUFDNUJDLFNBQVMsRUFBRSxDQUFDNUI7UUFBQUEsZ0VBQWEsQ0FBQ0ksV0FBVztRQUFHSCxpRUFBYyxDQUFDZSxZQUFZO0lBQUMsQ0FBQztJQUNyRWEsU0FBUyxFQUFFLENBQUM7UUFDVixFQU9HOzs7Ozs7O0tBQUEsU0FDR0MsTUFBTSxJQUFHLENBQUM7WUFDZCxNQUFNLENBQUMsSUFBSTtRQUNiLENBQUM7UUFDRCxFQUlHOzs7O0tBQUEsU0FDR0MsUUFBUSxFQUFDLENBQUMsQ0FBQ0MsR0FBRyxHQUFFQyxPQUFPLEVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDaEMsRUFBRSxFQUFFRCxHQUFHLENBQUNFLFVBQVUsQ0FBQ0QsT0FBTyxHQUFHLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQ0QsR0FBRztZQUNaLENBQUM7WUFFRCxNQUFNLENBQUNDLE9BQU87UUFDaEIsQ0FBQztRQUNELEVBT0c7Ozs7Ozs7S0FBQSxTQUNHRSxHQUFHLEVBQUMsQ0FBQyxDQUFDQyxLQUFLLEdBQUU1QixJQUFJLEdBQUU2QixPQUFPLEVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDbkMsRUFBbUQ7WUFDbkQsRUFBRSxFQUFFQSxPQUFPLEVBQUVDLFdBQVcsRUFBRSxDQUFDO2dCQUN6QkYsS0FBSyxDQUFDRSxXQUFXLEdBQUdELE9BQU8sQ0FBQ0MsV0FBVztZQUN6QyxDQUFDO1lBRUQsRUFBRSxFQUFFOUIsSUFBSSxFQUFFK0IsRUFBRSxFQUFFLENBQUM7Z0JBQ2JILEtBQUssQ0FBQ0csRUFBRSxHQUFHL0IsSUFBSSxDQUFDK0IsRUFBRTtZQUNwQixDQUFDO1lBRUQsTUFBTSxDQUFDSCxLQUFLO1FBQ2QsQ0FBQztRQUNELEVBSUc7Ozs7S0FBQSxTQUNHVixPQUFPLEVBQUMsQ0FBQyxDQUFDQSxPQUFPLEdBQUVVLEtBQUssRUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNqQyxFQUFFLEVBQUVBLEtBQUssSUFBSVYsT0FBTyxDQUFDbEIsSUFBSSxFQUFFLENBQUM7Z0JBQzFCa0IsT0FBTyxDQUFDbEIsSUFBSSxDQUFDK0IsRUFBRSxHQUFHSCxLQUFLLENBQUNHLEVBQUU7WUFDNUIsQ0FBQztZQUVELE1BQU0sQ0FBQ2IsT0FBTztRQUNoQixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlbGxpS2FtLy4uLy4uL3BhY2thZ2VzL2F1dGgvY29uZmlnLnRzPzQ3OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVtYWlsUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZW1haWxcIlxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiXG5pbXBvcnQgcHJpc21hIGZyb20gXCJkYlwiXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIlxuaW1wb3J0IHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgJy4vdHlwZXMnXG5cbmNvbnN0IGVtYWlsQ29uZmlnID0ge1xuICBzZXJ2ZXI6IHtcbiAgICBzZXJ2aWNlOiBcIk1hbmRyaWxsXCIsXG4gICAgYXV0aDoge1xuICAgICAgdXNlcjogXCJNYW5kcmlsbFVzZXJcIixcbiAgICAgIHBhc3M6IHByb2Nlc3MuZW52Lk1BTkRSSUxMX0FQSV9LRVksXG4gICAgfSxcbiAgICBsb2dnZXI6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXG4gIH0sXG4gIGZyb206IHByb2Nlc3MuZW52Lk1BTkRSSUxMX0VNQUlMX0ZST00sXG59XG5cbmNvbnN0IGdvb2dsZUNvbmZpZyA9IHtcbiAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQgYXMgc3RyaW5nLFxuICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUIGFzIHN0cmluZywgXG4gIGF1dGhvcml6YXRpb25Vcmw6XG4gICAgXCJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvdjIvYXV0aD9wcm9tcHQ9Y29uc2VudCZhY2Nlc3NfdHlwZT1vZmZsaW5lJnJlc3BvbnNlX3R5cGU9Y29kZVwiLFxufVxuXG5leHBvcnQgY29uc3QgY29uZmlnOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5TRUNSRVQsXG4gIHNlc3Npb246IHsgc3RyYXRlZ3k6IFwiand0XCIgfSxcbiAgcHJvdmlkZXJzOiBbRW1haWxQcm92aWRlcihlbWFpbENvbmZpZyksIEdvb2dsZVByb3ZpZGVyKGdvb2dsZUNvbmZpZyldLFxuICBjYWxsYmFja3M6IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IHVzZXIgICAgIFVzZXIgb2JqZWN0XG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBhY2NvdW50ICBQcm92aWRlciBhY2NvdW50XG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBwcm9maWxlICBQcm92aWRlciBwcm9maWxlXG4gICAgICogQHJldHVybiB7Ym9vbGVhbnxzdHJpbmd9ICBSZXR1cm4gYHRydWVgIHRvIGFsbG93IHNpZ24gaW5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgIFJldHVybiBgZmFsc2VgIHRvIGRlbnkgYWNjZXNzXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICBSZXR1cm4gYHN0cmluZ2AgdG8gcmVkaXJlY3QgdG8gKGVnLjogXCIvdW5hdXRob3JpemVkXCIpXG4gICAgICovXG4gICAgYXN5bmMgc2lnbkluKCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdXJsICAgICAgVVJMIHByb3ZpZGVkIGFzIGNhbGxiYWNrIFVSTCBieSB0aGUgY2xpZW50XG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBiYXNlVXJsICBEZWZhdWx0IGJhc2UgVVJMIG9mIHNpdGUgKGNhbiBiZSB1c2VkIGFzIGZhbGxiYWNrKVxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gICAgICAgICAgVVJMIHRoZSBjbGllbnQgd2lsbCBiZSByZWRpcmVjdCB0b1xuICAgICAqL1xuICAgIGFzeW5jIHJlZGlyZWN0KHsgdXJsLCBiYXNlVXJsIH0pIHtcbiAgICAgIGlmICh1cmwuc3RhcnRzV2l0aChiYXNlVXJsKSkge1xuICAgICAgICByZXR1cm4gdXJsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBiYXNlVXJsXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9ICB0b2tlbiAgICAgRGVjcnlwdGVkIEpTT04gV2ViIFRva2VuXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSAgdXNlciAgICAgIFVzZXIgb2JqZWN0ICAgICAgKG9ubHkgYXZhaWxhYmxlIG9uIHNpZ24gaW4pXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSAgYWNjb3VudCAgIFByb3ZpZGVyIGFjY291bnQgKG9ubHkgYXZhaWxhYmxlIG9uIHNpZ24gaW4pXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSAgcHJvZmlsZSAgIFByb3ZpZGVyIHByb2ZpbGUgKG9ubHkgYXZhaWxhYmxlIG9uIHNpZ24gaW4pXG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gaXNOZXdVc2VyIFRydWUgaWYgbmV3IHVzZXIgKG9ubHkgYXZhaWxhYmxlIG9uIHNpZ24gaW4pXG4gICAgICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICAgIEpTT04gV2ViIFRva2VuIHRoYXQgd2lsbCBiZSBzYXZlZFxuICAgICAqL1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyLCBhY2NvdW50IH0pIHtcbiAgICAgIC8vIEFkZCBhY2Nlc3NfdG9rZW4gdG8gdGhlIHRva2VuIHJpZ2h0IGFmdGVyIHNpZ25pblxuICAgICAgaWYgKGFjY291bnQ/LmFjY2Vzc1Rva2VuKSB7XG4gICAgICAgIHRva2VuLmFjY2Vzc1Rva2VuID0gYWNjb3VudC5hY2Nlc3NUb2tlblxuICAgICAgfVxuXG4gICAgICBpZiAodXNlcj8uaWQpIHtcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0b2tlblxuICAgIH0sXG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBzZXNzaW9uICAgICAgU2Vzc2lvbiBvYmplY3RcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IHVzZXIgICAgICAgICBVc2VyIG9iamVjdCAgICAoaWYgdXNpbmcgZGF0YWJhc2Ugc2Vzc2lvbnMpXG4gICAgICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICAgICAgU2Vzc2lvbiB0aGF0IHdpbGwgYmUgcmV0dXJuZWQgdG8gdGhlIGNsaWVudFxuICAgICAqL1xuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAodG9rZW4gJiYgc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLmlkXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgfSxcbiAgfSxcbn1cbiJdLCJuYW1lcyI6WyJFbWFpbFByb3ZpZGVyIiwiR29vZ2xlUHJvdmlkZXIiLCJwcmlzbWEiLCJQcmlzbWFBZGFwdGVyIiwiZW1haWxDb25maWciLCJzZXJ2ZXIiLCJzZXJ2aWNlIiwiYXV0aCIsInVzZXIiLCJwYXNzIiwicHJvY2VzcyIsImVudiIsIk1BTkRSSUxMX0FQSV9LRVkiLCJsb2dnZXIiLCJmcm9tIiwiTUFORFJJTExfRU1BSUxfRlJPTSIsImdvb2dsZUNvbmZpZyIsImNsaWVudElkIiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiYXV0aG9yaXphdGlvblVybCIsImNvbmZpZyIsImFkYXB0ZXIiLCJzZWNyZXQiLCJTRUNSRVQiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJwcm92aWRlcnMiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJyZWRpcmVjdCIsInVybCIsImJhc2VVcmwiLCJzdGFydHNXaXRoIiwiand0IiwidG9rZW4iLCJhY2NvdW50IiwiYWNjZXNzVG9rZW4iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../packages/auth/config.ts\n");

/***/ }),

/***/ "../../packages/auth/index.ts":
/*!************************************!*\
  !*** ../../packages/auth/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"../../packages/auth/config.ts\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _config__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _config__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvYXV0aC9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVsbGlLYW0vLi4vLi4vcGFja2FnZXMvYXV0aC9pbmRleC50cz82Mjc2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2NvbmZpZ1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../packages/auth/index.ts\n");

/***/ }),

/***/ "../../packages/auth/types.ts":
/*!************************************!*\
  !*** ../../packages/auth/types.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvYXV0aC90eXBlcy50cy5qcyIsIm1hcHBpbmdzIjoiO0FBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlbGxpS2FtLy4uLy4uL3BhY2thZ2VzL2F1dGgvdHlwZXMudHM/ODQ0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWZhdWx0VXNlciB9IGZyb20gXCJuZXh0LWF1dGhcIjtcblxuZGVjbGFyZSBtb2R1bGUgXCJuZXh0LWF1dGhcIiB7XG4gIGludGVyZmFjZSBTZXNzaW9uIHtcbiAgICB1c2VyPzogRGVmYXVsdFVzZXI7XG4gIH1cbn1cblxuZGVjbGFyZSBtb2R1bGUgXCJuZXh0LWF1dGgvand0XCIge1xuICBpbnRlcmZhY2UgSldUIHtcbiAgICBpZDogc3RyaW5nO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../packages/auth/types.ts\n");

/***/ }),

/***/ "../../packages/db/index.ts":
/*!**********************************!*\
  !*** ../../packages/db/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPrismaClient\": () => (/* binding */ getPrismaClient),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/// <reference types=\"./types\" />\n\n// Prevent multiple instances of Prisma Client in development\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        'query'\n    ]\n});\nif (true) global.prisma = prisma;\nconst getPrismaClient = (DATABASE_NAME)=>{\n    const DATABASE_USER_NAME = process.env.DATABASE_USER_NAME;\n    const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;\n    const DATABASE_HOST = process.env.DATABASE_HOST;\n    const client = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n        datasources: {\n            db: {\n                url: `mysql://${DATABASE_USER_NAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${DATABASE_NAME}`\n            }\n        }\n    });\n    return client;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvZGIvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEVBQWlDO0FBRVk7QUFFN0MsRUFBNkQ7QUFDN0QsS0FBSyxDQUFDQyxNQUFNLEdBQ1ZDLE1BQU0sQ0FBQ0QsTUFBTSxJQUNiLEdBQUcsQ0FBQ0Qsd0RBQVksQ0FBQyxDQUFDO0lBQ2hCRyxHQUFHLEVBQUUsQ0FBQztRQUFBLENBQU87SUFBQSxDQUFDO0FBQ2hCLENBQUM7QUFFSCxFQUFFLEVBWEYsSUFXeUMsRUFBRUQsTUFBTSxDQUFDRCxNQUFNLEdBQUdBLE1BQU07QUFFMUQsS0FBSyxDQUFDRyxlQUFlLElBQUlDLGFBQXFCLEdBQUssQ0FBQztJQUN6RCxLQUFLLENBQUNDLGtCQUFrQixHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0Ysa0JBQWtCO0lBQ3pELEtBQUssQ0FBQ0csaUJBQWlCLEdBQUdGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUI7SUFDdkQsS0FBSyxDQUFDQyxhQUFhLEdBQUdILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxhQUFhO0lBRS9DLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsQ0FBQ1gsd0RBQVksQ0FBQyxDQUFDO1FBQy9CWSxXQUFXLEVBQUUsQ0FBQztZQUNaQyxFQUFFLEVBQUUsQ0FBQztnQkFBQ0MsR0FBRyxHQUFHLFFBQVEsRUFBRVIsa0JBQWtCLENBQUMsQ0FBQyxFQUFFRyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUVDLGFBQWEsQ0FBQyxDQUFDLEVBQUVMLGFBQWE7WUFBRyxDQUFDO1FBQ3JHLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDTSxNQUFNO0FBQ2YsQ0FBQztBQUVELGlFQUFlVixNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZWxsaUthbS8uLi8uLi9wYWNrYWdlcy9kYi9pbmRleC50cz9kZmI2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiLi90eXBlc1wiIC8+XG5cbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG4vLyBQcmV2ZW50IG11bHRpcGxlIGluc3RhbmNlcyBvZiBQcmlzbWEgQ2xpZW50IGluIGRldmVsb3BtZW50XG5jb25zdCBwcmlzbWEgPVxuICBnbG9iYWwucHJpc21hIHx8XG4gIG5ldyBQcmlzbWFDbGllbnQoe1xuICAgIGxvZzogWydxdWVyeSddLFxuICB9KVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsLnByaXNtYSA9IHByaXNtYVxuXG5leHBvcnQgY29uc3QgZ2V0UHJpc21hQ2xpZW50ID0gKERBVEFCQVNFX05BTUU6IHN0cmluZykgPT4ge1xuICBjb25zdCBEQVRBQkFTRV9VU0VSX05BTUUgPSBwcm9jZXNzLmVudi5EQVRBQkFTRV9VU0VSX05BTUVcbiAgY29uc3QgREFUQUJBU0VfUEFTU1dPUkQgPSBwcm9jZXNzLmVudi5EQVRBQkFTRV9QQVNTV09SRFxuICBjb25zdCBEQVRBQkFTRV9IT1NUID0gcHJvY2Vzcy5lbnYuREFUQUJBU0VfSE9TVFxuXG4gIGNvbnN0IGNsaWVudCA9IG5ldyBQcmlzbWFDbGllbnQoe1xuICAgIGRhdGFzb3VyY2VzOiB7XG4gICAgICBkYjogeyB1cmw6IGBteXNxbDovLyR7REFUQUJBU0VfVVNFUl9OQU1FfToke0RBVEFCQVNFX1BBU1NXT1JEfUAke0RBVEFCQVNFX0hPU1R9LyR7REFUQUJBU0VfTkFNRX1gIH0sXG4gICAgfSxcbiAgfSlcblxuICByZXR1cm4gY2xpZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCIsImxvZyIsImdldFByaXNtYUNsaWVudCIsIkRBVEFCQVNFX05BTUUiLCJEQVRBQkFTRV9VU0VSX05BTUUiLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfUEFTU1dPUkQiLCJEQVRBQkFTRV9IT1NUIiwiY2xpZW50IiwiZGF0YXNvdXJjZXMiLCJkYiIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../packages/db/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();