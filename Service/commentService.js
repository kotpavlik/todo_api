import commentSchema from "../model/commentSchema.js";
import taskSchema from "../model/taskSchema.js";

class commentService {
  async createComment({
    task_id,
    text,
    author,
    replise
  }) {
    const new_comment = await commentSchema.create({
      text,
      author,
      replise
    })
    if (!new_comment) {
      throw new Error(`Something wrong `)
    }

    const update_comments_obj = await taskSchema.findById(task_id)
    update_comments_obj.comments.push(new_comment)
    await taskSchema.findByIdAndUpdate(task_id, update_comments_obj, {
      new: true
    })
    return new_comment
  }

  async deleteComment(comment_id, task_id) {
    if (!comment_id) {
      throw new Error(`This comment not fouded`)
    }
    const deleted_comment = await commentSchema.findByIdAndDelete(comment_id)
    const update_comments_obj = await taskSchema.findById(task_id)
    const our_comment = update_comments_obj.comments.findIndex(el => el.toString() === comment_id)
    if (our_comment === -1) {
      throw new Error(`comment with id=${our_comment} not founded`)
    }
    update_comments_obj.comments.splice(our_comment, 1)
    await taskSchema.findByIdAndUpdate(task_id, update_comments_obj, {
      new: true
    })
    return deleted_comment
  }

  async getAllComments(task_id) {
    if (!task_id) {
      throw new Error(`This task not fouded`)
    }
    const our_task = await taskSchema.findById(task_id)
    console.log(our_task)

  }
}

export default new commentService()
