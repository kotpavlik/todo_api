import {
  Router
} from "express";
import projectController from "../Controllers/projectController.js";
import userController from "../Controllers/userController.js";
import taskController from "../Controllers/tasksController.js";
import reqFilter from '../supporting_functions/reqFilter.js';
import commentsController from '../Controllers/commentsController.js'



const router = Router()

router.get('/user', userController.getUsers);
router.post('/user', userController.addUser);
router.put('/user', userController.updateUser);
router.delete('/user', userController.deleteUser);

router.get('/', projectController.getProjects);
router.get('/:proj_id', projectController.getOneProject)
router.post('/', projectController.createProject);
router.put('/', projectController.updateProject)
router.delete('/', projectController.removeProject)

router.post('/:proj_id/tasks', reqFilter.filterTaskFields, taskController.createTask);
router.get('/:proj_id/tasks', taskController.getAllTasks);
router.put('/:proj_id/tasks', reqFilter.filterTaskFields, taskController.updateTask)
router.delete('/:proj_id/tasks', taskController.removeTask)

router.post('/:proj_id/tasks/comment', reqFilter.filtercommentFields, commentsController.createComment)
router.get('/:proj_id/tasks/comment', commentsController.addAllComments)
router.delete('/:proj_id/tasks/comment', commentsController.removeComment)






export default router;