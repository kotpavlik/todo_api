import commentService from "../Service/commentService.js";

class commentsController {
  async createComment(req, res) {
    try {
      const {
        task_id,
        text,
        author,
        replise
      } = req.body
      const new_coment = await commentService.createComment({
        task_id,
        text,
        author,
        replise
      });
      return res.status(200).json(new_coment)
    } catch (e) {
      res.status(500).json(`Error ${e}`)
    }
  }
  async addAllComments(req, res) {
    try {
      const {
        task_id
      } = req.body
      const all_comments = await commentService.getAllComments(task_id);
      return res.status(200).json(all_comments)
    } catch (e) {
      res.status(500).json(`Error all comments ${e}`)
    }
  }
  async removeComment(req, res) {
    try {
      const {
        comment_id,
        task_id
      } = req.body
      const deleted_comment = await commentService.deleteComment(comment_id, task_id);
      return res.status(200).json(deleted_comment)
    } catch (e) {
      res.status(500).json(`Error ${e}`)
    }
  }
}

export default new commentsController()
