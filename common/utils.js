export const handleInput = ({target: { name, value}}, dispatch) => dispatch({type: 'CHANGE_INPUT', name, value })
