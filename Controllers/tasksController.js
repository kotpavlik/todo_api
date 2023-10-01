import taskService from '../Service/taskService.js';




class TaskController {

  async getAllTasks(req, res) {
    try {
      const {
        proj_id
      } = req.params
      const all_tasks = await taskService.getAllTasks(proj_id);
      return res.status(200).json(all_tasks)
    } catch (e) {
      res.status(500).json(`Error: ${e}`)
    }

  }

  async createTask(req, res) {
    try {
      const {
        proj_id
      } = req.params
      const new_task = await taskService.createTask(proj_id, req.body)
      return res.status(200).json(new_task)
    } catch (e) {
      res.status(500).json(`Error: ${e}`)
    }
  }

  async removeTask(req, res) {
    try {
      const {
        proj_id
      } = req.params
      const {
        task_id
      } = req.body
      const deleted_task = await taskService.removeTask(proj_id, task_id)
      return res.status(200).json(deleted_task)
    } catch (e) {
      res.status(500).json(`Error: ${e}`)
    }
  }

  async updateTask(req, res) {
    try {

      const updated_task = await taskService.updateTask(req.body);
      if (!updated_task) {
        return res.status(400).json(`There haven't task with id:${req.body._id} in database`)
      }
      return res.status(200).json(updated_task)
    } catch (e) {
      res.status(500).json(`Error is here: ${e}`)
    }

  }
}




export default new TaskController();
