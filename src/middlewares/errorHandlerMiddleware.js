export const errorMiddleWare = (err, req, res, next) => {
  return res.status(err.statusCode).json({ msg: err.message });
};
