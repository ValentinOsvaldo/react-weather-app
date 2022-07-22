export const weatherReducer = (state, action) => {
  switch (action.type) {
    case 'Add Location':
      return {
        ...state,
        location: action.payload,
      };

    case 'Add Weather':
      return {
        ...state,
        weather: action.payload,
      };

    case 'Open Bar':
      return {
        ...state,
        activeSearch: true,
      };

    case 'Close Bar':
      return {
        ...state,
        activeSearch: false,
      };

    case 'Set C':
      return {
        ...state,
        unity: 'c',
      };

    case 'Set F':
      return {
        ...state,
        unity: 'f',
      };

    default:
      return state;
  }
};
