class reqFilter {
  filterTaskFields(req, res, next) {
    const allowedFields = [
      '_id',
      'title',
      'description',
      'date_start',
      'date_end',
      'priority',
      'status',
      'subtasks',
      'comments'
    ];

    for (const field in req.body) {
      if (!allowedFields.includes(field)) {
        delete req.body[field];
      }
    }

    next();
  }
  filtercommentFields(req, res, next) {
    const allowedFields = [
      'text',
      'task_id',
      'author',
      'replise',
      '_id'
    ];
    for (const field in req.body) {
      if (!allowedFields.includes(field)) {
        delete req.body[field];
      }
    }

    next();
  }
}

export default new reqFilter()