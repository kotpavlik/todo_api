import commentService from "../Service/commentService.js";

class commentsController {
  async createComment(req, res) {
    try {
      const new_coment = await commentService.createComment(req.body);
      return res.status(200).json(new_coment)
    } catch (e) {
      res.status(500).json(`Error ${e}`)
    }
  }
  async removeComment(req, res) {
    try {
      const {
        comment_id
      } = req.body
      const deleted_comment = await commentService.deleteComment(comment_id);
      return res.satus(200).json(deleted_comment)
    } catch (e) {
      res.status(500).json(`Error ${e}`)
    }
  }
}

export default new commentsController()
