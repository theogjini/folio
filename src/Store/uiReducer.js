import { initialState } from "./initialState";

export default function uiReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }
  switch (action.type) {
    case "CHANGE_LOCALE_TO_ENG": {
      state.UI.locale = "eng";
      break;
    }
    case "CHANGE_LOCALE_TO_FR": {
      state.UI.locale = "fr";
      break;
    }
    default: {
      return state;
    }
  }
}
