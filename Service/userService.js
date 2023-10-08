import userSchema from "../model/userSchema.js"


class UserService {
  async getUsrs() {
    const all_users = await userSchema.find();
    return all_users
  }
  async addUser(username) {
    const new_user = await userSchema.create(username);
    return new_user
  }
  async updateUser(user_data) {
    if (!user_data._id) {
      throw new Error('User not founded')
    }
    const {
      username
    } = user_data
    const updated_user = await userSchema.findByIdAndUpdate(user_data._id, {
      username
    }, {
      new: true
    })
    return updated_user
  }

  async deleteUser(user_id) {
    if (!user_id) {
      throw new Error('Id not found')
    }
    const deleted_user = await userSchema.findByIdAndDelete(user_id)
    return deleted_user
  }
}


export default new UserService()