export default {
  async getAllUsers(req, res) {
    res.status(200).send({ success: true, message: 'hello world' });
  },
};
