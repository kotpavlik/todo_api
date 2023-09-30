import projectSchema from "../model/projectSchema.js";

class ProjectService {
  async getProjects() {
    const projects = await projectSchema.find();
    if (!projects) {
      throw new Error('Something error');
    }
    return projects
  }

  async getOneProject(project_id) {
    if (!project_id) {
      throw new Error('Project id founded')
    }
    const project = await projectSchema.findById(project_id);
    return project
  }

  async createProject(req_project_data) {
    const new_project = await projectSchema.create(req_project_data);
    return new_project
  }

  async updateProject({
    _id,
    project_name
  }) {
    if (!_id) {
      throw new Error(`Project not founded`);
    }
    const updated_project = await projectSchema.findByIdAndUpdate(_id, {
      project_name
    }, {
      new: true
    })
    return updated_project
  }

  async removeProject(project_id) {
    if (!project_id) {
      throw new Error('Project with this id not founded');
    }

    const deleted_project = await projectSchema.findByIdAndDelete(project_id)
    return deleted_project
  }
}

export default new ProjectService();
