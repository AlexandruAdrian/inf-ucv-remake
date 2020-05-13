export const teachersReducer = (teachers, action) => {
  switch (action.type) {
    case 'FETCH_TEACHERS':
      return [...action.payload];

    case 'DELETE_TEACHER':
      let teachers_delete = [...teachers];
      teachers_delete = teachers_delete.filter(teacher => teacher.Id !== action.payload);
      return [...teachers_delete];

    case 'EDIT_TEACHER':
      let teachers_edit = [...teachers];
      teachers_edit = teachers_edit.map(teacher => {
        if (teacher.Id === action.payload.Id) {
          teacher = action.payload;
        }
        return teacher;
      })
      return [...teachers_edit];

    case 'ADD_TEACHER':
      return [...teachers, action.payload];

    default:
      return;
  }
}