export const generateASCIITree = (input: string): string => {
  if (!input.trim()) return "";
  const lines = input.split('\n');
  return lines.map((line, index) => `${index + 1}. ${line}`).join('\n');
};
