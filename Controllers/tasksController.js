import taskService from '../Service/taskService.js'

class TaskController {
  async createTask(req, res) {
    const {
      proj_id
    } = req.params
    const new_task = await taskService.createTask(proj_id, req.body)
    return res.status(200).json(new_task)
  }

  async removeTask(req, res) {
    const {
      proj_id
    } = req.params
    const deleted_task = await taskService.removeTask(proj_id, req.body)
    return res.status(200).json(deleted_task)
  }
}




export default new TaskController();
