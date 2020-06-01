const initialState = {
  locale: "fr",
  darkMode: false,
};

export default function uiReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  console.log(state);

  switch (action.type) {
    case "CHANGE_LOCALE_TO_ENG": {
      state.locale = "eng";
      break;
    }

    case "CHANGE_LOCALE_TO_FR": {
      state.locale = "fr";
      break;
    }

    case "TOGGLE_THEME": {
      state.darkMode = !state.darkMode;
      break;
    }

    default: {
      return state;
    }
  }
  return state;
}
