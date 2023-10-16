import projectService from "../Service/projectService.js";


class ProjectController {

  async getProjects(req, res) {
    try {
      const projects = await projectService.getProjects()
      return res.status(200).json(projects)
    } catch (e) {
      res.status(500).json(`Error: ${e}`)
    }
  }

  async getOneProject(req, res) {
    try {
      const project = await projectService.getOneProject(req.params.proj_id)
      return res.status(200).json(project)
    } catch (e) {
      res.status(500).json(`Error: ${e}`)
    }
  }

  async createProject(req, res) {
    try {
      const new_project = await projectService.createProject(req.body)
      return res.status(200).json(new_project)
    } catch (e) {
      res.status(500).json(`Error: ${e}`)
    }
  }

  async updateProject(req, res) {
    try {
      const {
        _id,
        project_name,
        creator
      } = req.body
      const updated_project = await projectService.updateProject({
        _id,
        project_name,
        creator
      })
      return res.status(200).json(updated_project)
    } catch (e) {
      res.status(500).json(`Error: ${e}`)
    }
  }

  async removeProject(req, res) {
    try {
      const {
        desk_id
      } = req.query
      const removed_project = await projectService.removeProject(desk_id)
      return res.status(200).json(removed_project)
    } catch (e) {
      res.status(500).json(`Error: ${e}`)
    }
  }

}

export default new ProjectController();