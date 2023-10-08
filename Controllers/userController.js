import UserService from "../Service/userService.js";

class userController {
  async getUsers(req, res) {
    try {
      const all_users = await UserService.getUsrs()
      return res.status(200).json(all_users)
    } catch (e) {
      res.status(500).json(`Error is here: ${e}`)
    }
  }
  async addUser(req, res) {
    try {
      if (req.username.lenght <= 1) {
        return res.status(400).json('username length a really short')
      }
      const new_user = await UserService.addUser(req.body)
      return res.status(200).json(new_user)
    } catch (e) {
      res.status(500).json(`Error: ${e}`)
    }
  }
  async updateUser(req, res) {
    try {
      const updated_user = await UserService.updateUser(req.body)
      return res.status(200).json(updated_user)
    } catch (e) {
      res.status(500).json(`Error: ${e}`)
    }
  }
  async deleteUser(req, res) {
    try {
      const {
        user_id
      } = req.query
      const deleted_user = await UserService.deleteUser(user_id)
      return res.status(200).json(deleted_user)
    } catch (e) {
      res.status(500).json(`Error: ${e}`)
    }
  }
}

export default new userController();