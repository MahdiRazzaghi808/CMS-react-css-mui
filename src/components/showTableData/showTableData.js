const showItem = 15;


export const showTableData = (data, page) => data.slice(((showItem * page) - showItem), (showItem * page));
