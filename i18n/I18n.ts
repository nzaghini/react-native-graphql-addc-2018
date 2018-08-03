import I18n from "react-native-i18n";
import en from "./languages/en";
import it from "./languages/it";

I18n.fallbacks = true;

I18n.translations = {
  en,
  it,
};

export const i18n = (name: string, params = {}): string => {
  return I18n.t(name, params);
};

export default I18n;
