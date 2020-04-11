/**
 * A 2D vector
 * @param {Number} [x] The X value
 * @param {Number} [y] The Y value
 * @constructor
 */
const Vector = function(x = 0, y = 0) {
    this.x = x;
    this.y = y;
};

/**
 * Copy this vector
 * @returns {Vector} A copy of the vector
 */
Vector.prototype.copy = function() {
    return new Vector(this.x, this.y);
};

/**
 * Set this vectors contents equal to those of another vector
 * @param {Vector} other A vector
 * @returns {Vector} The modified vector
 */
Vector.prototype.set = function(other) {
    this.x = other.x;
    this.y = other.y;

    return this;
};

/**
 * Add a vector to this vector
 * @param {Vector} vector A vector
 * @returns {Vector} The modified vector
 */
Vector.prototype.add = function(vector) {
    this.x += vector.x;
    this.y += vector.y;

    return this;
};

/**
 * Subtract a vector from this vector
 * @param {Vector} vector A vector
 * @returns {Vector} The modified vector
 */
Vector.prototype.subtract = function(vector) {
    this.x -= vector.x;
    this.y -= vector.y;

    return this;
};

/**
 * Multiply this vector by a scalar
 * @param {Number} scalar A number
 * @returns {Vector} The modified vector
 */
Vector.prototype.multiply = function(scalar) {
    this.x *= scalar;
    this.y *= scalar;

    return this;
};

/**
 * Divide this vector by a scalar
 * @param {Number} scalar A number
 * @returns {Vector} The modified vector
 */
Vector.prototype.divide = function(scalar) {
    return this.multiply(1 / scalar);
};

/**
 * Get the dot product of this vector and another vector
 * @param {Vector} vector A vector
 * @returns {Number} The dot product
 */
Vector.prototype.dot = function(vector) {
    return this.x * vector.x + this.y * vector.y;
};

/**
 * Calculate the length of this vector
 * @returns {Number} The length of this vector
 */
Vector.prototype.length = function() {
    return Math.sqrt(this.dot(this));
};

/**
 * Normalize this vector
 * @returns {Vector} The modified vector
 */
Vector.prototype.normalize = function() {
    return this.divide(this.length());
};

/**
 * Reflect this vector
 * @param {Vector} vector A surface normal to reflect against
 * @returns {Vector} The modified vector
 */
Vector.prototype.reflect = function(vector) {
    const ddot = this.dot(vector) * 2;

    this.x -= ddot * vector.x;
    this.y -= ddot * vector.y;

    return this;
};

/**
 * Get the angle this vector is pointing towards
 * @returns {Number} The angle in radians
 */
Vector.prototype.angle = function() {
    return Math.atan2(this.y, this.x);
};