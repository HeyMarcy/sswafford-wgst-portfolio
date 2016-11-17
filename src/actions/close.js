export default function (id) {
  return (dispatch) => {
    dispatch({ type: 'SHOW_MENU' });
    setTimeout(() => {
      dispatch({ type: 'OPEN_ENTRY' });
      document.body.style.overflow = 'hidden';
    }, 500);
  }
}
