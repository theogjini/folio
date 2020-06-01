import content from "./content.json";

const initialState = {
  ...content,
};

export default function contentReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }
  return state;
}
