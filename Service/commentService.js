import commentSchema from "../model/commentSchema.js";

class commentService {
  async createComment(comment_data) {
    const new_comment = await commentSchema.create(comment_data)
    return new_comment
  }
  async deleteComment() {
    console.log('work');
  }
}

export default new commentService()
