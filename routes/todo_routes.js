import {
  Router
} from "express";
import projectController from "../Controllers/projectController.js";
import userController from "../Controllers/userController.js";
import taskController from "../Controllers/tasksController.js";
import filterTaskFields from '../supporting_functions/reqFilter.js'



const router = Router()

router.get('/', projectController.getProjects);
router.get('/:proj_id', projectController.getOneProject)
router.post('/', projectController.createProject);
router.put('/', projectController.updateProject)
router.delete('/', projectController.removeProject)

router.post('/:proj_id/tasks', filterTaskFields, taskController.createTask);
router.get('/:proj_id/tasks', taskController.getAllTasks);
router.put('/:proj_id/tasks', filterTaskFields, taskController.updateTask)
router.delete('/:proj_id/tasks', taskController.removeTask)

router.get('/user', userController.getUsers);
router.post('/user', userController.addUser);
router.put('/user', userController.updateUser);
router.delete('/user/', userController.deleteUser);




export default router;
