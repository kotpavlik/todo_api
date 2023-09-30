import projectSchema from "../model/projectSchema.js";
import taskSchema from "../model/taskSchema.js";

class taskService {
  async createTask(proj_id, task_data) {
    const find_project = await projectSchema.findById(proj_id)
    if (!find_project._id) {
      throw new Error(` I can't created new task, because I haven't project id`)
    }

    const new_task = await taskSchema.create(task_data);
    if (!new_task._id) {
      throw new Error(`I can't create object new_task`)
    }
    const tasks = [...find_project.tasks, new_task._id]
    const add_task_id_in_project = await projectSchema.findByIdAndUpdate(proj_id, {
      tasks
    }, {
      new: true
    })
    console.log(add_task_id_in_project)
    return new_task
  }
}

export default new taskService();
