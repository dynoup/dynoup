// component를 생성하는데 필요한 정규표현식
// export const COMPONENT_TAG_REGEX = /<([A-Z][a-z]*)(.*)>|<\/([A-Z][a-z]*)>/g; // TODO: 이게 맞나.....
export const COMPONENT_START_TAG_REGEX = /<([A-Z][a-z]*)(.*)>/g;
export const COMPONENT_END_TAG_REGEX = /<\/([A-Z][a-z]*)>/g;
export const CHILDREN_PROPS_REGEX = /{{children}}/g;
export const VARIABLE_REGEX = /@[a-zA-Z]*/;
export const STATE_REGEX = /{{.*}}/g;
