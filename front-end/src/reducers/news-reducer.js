export const newsReducer = (news, action) => {
  switch (action.type) {
    case 'FETCH_NEWS': ;
      return [...action.payload];

    case 'DELETE_ARTICLE':
      let news_delete = [...news];
      news_delete = news_delete.filter(n => n.Id !== action.payload);
      return [...news_delete];

    case 'EDIT_ARTICLE':
      let news_edit = [...news];
      news_edit[0] = action.payload;
      console.log(news_edit);

      return [...news_edit];

    case 'CATEGORY_NEWS':
      return [...action.payload]

    case 'ARTICLE':
      const article = action.payload;
      return [article];

    default:
      return;

  }
}