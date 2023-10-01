import taskService from '../Service/taskService.js'

class TaskController {

  async getAllTasks(req, res) {
    const {
      proj_id
    } = req.params
    const all_tasks = await taskService.getAllTasks(proj_id);
    return res.status(200).json(all_tasks)
  }

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
    const {
      task_id
    } = req.body
    const deleted_task = await taskService.removeTask(proj_id, task_id)
    return res.status(200).json(deleted_task)
  }
}




export default new TaskController();
