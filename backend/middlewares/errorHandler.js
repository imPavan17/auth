const errorHandler = (err, req, res, next) => {
  // What ever we setting in res.status(400) before throwing err
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  //   throw new Error("Please enter all fields"); <- err.message
  res.json({
    message: err.message,
    stack: err.stack,
  });
};

module.exports = errorHandler;
