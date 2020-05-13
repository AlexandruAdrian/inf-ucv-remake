export const teachersReducer = (teachers, action) => {
  switch (action.type) {
    case 'FETCH_TEACHERS':
      return [...action.payload];

    case 'DELETE_TEACHER':
      let teachers_delete = [...teachers];
      teachers_delete = teachers_delete.filter(teacher => teacher.Id !== action.payload);
      return [...teachers_delete];

    case 'ADD_TEACHER':
      return [action.payload, ...teachers];

    case 'EDIT_TEACHER':
      return;

    default:
      return;
  }
}