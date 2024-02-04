class ApiError extends Error {
    constructor(statusCode, message, error) {
        super(message);
        this.success = false;
        this.statusCode = statusCode;
        error ? this.error = error : null
    }
}

module.exports = ApiError;
