import allCathegories from './database/menuData';

const initialState =  [...allCathegories];

initialState.forEach((_,i) =>{
  initialState[i] = initialState[i][3];
  initialState[i].forEach((_,j) => {
    initialState[i][j].amount = 0;
  })
});

export default initialState;
