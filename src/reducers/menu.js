export default function (state, action) {
  switch (action.type) {
    case 'SHOW_MENU': {
      return {
        ...state,
        visible: true
      };
    }
    case 'HIDE_MENU': {
      return {
        ...state,
        visible: false
      };
    }
    default: {
      return state || {
        visible: true
      };
    }
  }
}
