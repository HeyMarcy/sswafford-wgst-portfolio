export default function (id) {
  return (dispatch) => {
    dispatch({ type: 'SHOW_MENU' });
    setTimeout(() => dispatch({ type: 'OPEN_ENTRY' }), 500);
  }
}
