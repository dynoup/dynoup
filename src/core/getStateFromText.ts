import { STATE_REGEX } from './regex';

export default function getStatesFromText(text: string) {
  return text.match(STATE_REGEX)?.map((state) => state.slice(2, -2)) || [];
}
