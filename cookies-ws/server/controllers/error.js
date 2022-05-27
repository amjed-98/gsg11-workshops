exports.client = (req, res) => {
  const notFoundPage =
    '<p style="font-size: 10vh; text-align: center;">404!</p>';
  res.status(404).send(notFoundPage);
};
