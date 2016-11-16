export default function (id) {
  return (dispatch) => {
    dispatch({
      type: 'OPEN_ENTRY',
      payload: id
    });

    setTimeout(() => {
      dispatch({
        type: 'HIDE_MENU'
      });
    }, 1000);
  }
}
