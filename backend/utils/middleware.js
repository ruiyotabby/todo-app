const uknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'uknown endpoint' });
};

const errorHandler = (error, request, response, next) => {
  console.error(error);

  response.status(400).json({ error: error.message });

  next(error);
};

module.exports = {
  uknownEndpoint,
  errorHandler,
};
