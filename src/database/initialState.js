import allCategories from './menuData';

const initialState =  [...allCategories];

initialState.forEach((_,i) =>{
  initialState[i] = initialState[i].items;
  initialState[i].forEach((_,j) => {
    initialState[i][j].amount = 0;
  })
});

export default initialState;
