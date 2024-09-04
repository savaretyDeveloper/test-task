/**
 * Centralized error handling middleware.
 * @param {Object} err - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const errorHandler = (err, req, res) => {
    res.status(500).send(err.message); // Generic error message
};

module.exports = errorHandler;
