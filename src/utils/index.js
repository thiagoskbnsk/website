export const ellipsisText = (text, number) => {
  return text != null && text.length > number ? `${text.substring(0, number)}...` : text;
}