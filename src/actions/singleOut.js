export default function (id) {
  return (dispatch) => {
    document.body.style.overflow = 'visible';
    dispatch({
      type: 'EXPOSE_ENTRY',
      payload: id
    });
    dispatch({
      type: 'OPEN_ENTRY',
      payload: id
    });
    dispatch({
      type: 'HIDE_MENU'
    });
  };
}
