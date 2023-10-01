import projectSchema from "../model/projectSchema.js";
import taskSchema from "../model/taskSchema.js";

class taskService {

  async getAllTasks(proj_id) {
    const find_project = await projectSchema.findById(proj_id)
    if (!find_project._id) {
      throw new Error(` I can't created new task, because I haven't project id`)
    }
    const all_tasks = await taskSchema.find()
    if (!all_tasks) {
      throw new Error(`Database crashed`)
    }
    const tasks_of_proj = []
    all_tasks.forEach((task) => {
      find_project.tasks.forEach((task_id) => {
        task_id.toString() === task._id.toString() &&
          tasks_of_proj.push(task)
      })
    })
    return tasks_of_proj
  }

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
    await projectSchema.findByIdAndUpdate(proj_id, {
      tasks
    }, {
      new: true
    })

    return new_task
  }

  async removeTask(proj_id, task_id) {
    const find_project = await projectSchema.findById(proj_id)
    if (!find_project._id) {
      throw new Error(` I can't created new task, because I haven't project id`)
    }

    const find_project_without_deleted_task = find_project.tasks.filter(task => task_id !== task.toString());

    await projectSchema.findByIdAndUpdate(proj_id, {
      tasks: find_project_without_deleted_task
    }, {
      new: true
    })

    const deleted_task = await taskSchema.findByIdAndDelete(task_id)

    return deleted_task
  }
}

export default new taskService();
