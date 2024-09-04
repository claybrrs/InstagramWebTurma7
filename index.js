"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_crypto_1 = require("node:crypto");
var faker_1 = require("@faker-js/faker");
var Post = /** @class */ (function () {
    function Post(userName, imageUrl, description) {
        this._userName = userName;
        this._imageUrl = imageUrl;
        this._description = description;
        this._numLikes = 0;
        this._id = (0, node_crypto_1.randomUUID)();
    }
    Object.defineProperty(Post.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "imageUrl", {
        get: function () {
            return this._imageUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (description) {
            this._description = description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "numLikes", {
        get: function () {
            return this._numLikes;
        },
        enumerable: false,
        configurable: true
    });
    Post.prototype.incrementLike = function () {
        this._numLikes += 1;
    };
    return Post;
}());
var posts = [];
for (var index = 0; index < 15; index++) {
    var post = new Post(faker_1.faker.person.firstName(), "http://...", "Imagem 1");
    posts.push(post);
}
console.log(posts);
