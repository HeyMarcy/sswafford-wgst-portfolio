export default function (state = { ready: false }, action) {
  if (action.type === 'READY') {
    return { ...state, ready: true }
  }
  return state;
}
