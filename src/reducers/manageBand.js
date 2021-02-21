import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        id: uuid(),
        band: action.name
      }

      return { ...state, bands: [...state.bands, band] }
      // return { ...state, bands: [...state.bands, action.name] }
    case 'DELETE_BAND':
      return {bands: state.bands.filter(band => band.id !== action.id)}
    default:
      return state;
  }
};
