// const minicardObject = {
//   FETCH_MINICARD_DATA: (state, action) => {
//     return {
//       ...state,
//       minicardData: action.payload,
//     };
//   },
// };

export default function minicard(state = {}, action) {
  switch (action.type) {
    case 'FETCH_MINICARD_DATA':
      return action.payload;
    default:
      return state;
  }
  //   const data = minicardObject[action.type];
  //   return data ? data() : state;
}
