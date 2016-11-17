export default function (id) {
  return (dispatch) => {
    dispatch({
      type: 'OPEN_ENTRY',
      payload: id
    });

    setTimeout(() => {
      document.body.style.overflow = 'visible';
      dispatch({
        type: 'HIDE_MENU'
      });
    }, 1000);
  }
}
