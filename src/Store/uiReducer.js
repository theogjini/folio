const initialState = {
  locale: "fr",
  darkMode: false,
  path: "/",
};

export default function uiReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  console.log(state);

  switch (action.type) {
    case "CHANGE_LOCALE_TO_ENG": {
      state.locale = "en";
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

    case "CHANGE_PATH": {
      state.path = action.path;
      break;
    }

    default: {
      return state;
    }
  }
  return state;
}
