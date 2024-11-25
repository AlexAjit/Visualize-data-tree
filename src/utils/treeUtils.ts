// Parses the folder structure from text input
export function parseInputToTree(input: string): any {
    const lines = input.trim().split('\n');
    const root: any = {};
    const stack: { [key: string]: any }[] = [root];
    let prevIndent = 0;
  
    lines.forEach(line => {
      const indent = line.search(/\S|$/); // Get indentation level (2 spaces per level)
      const name = line.trim();
      const node = { name, children: {} };
  
      if (indent > prevIndent) {
        stack.push(stack[stack.length - 1][Object.keys(stack[stack.length - 1])[0]].children);
      } else if (indent < prevIndent) {
        stack.splice(-(prevIndent - indent) / 2);
      }
      
      stack[stack.length - 1][name] = node;
      prevIndent = indent;
    });
  
    return root;
  }
  
  // Generates ASCII tree from parsed structure
  export function generateAsciiTree(node: any, prefix = ''): string {
    let tree = '';
    const entries = Object.keys(node);
  
    entries.forEach((key, index) => {
      const isLast = index === entries.length - 1;
      const newPrefix = `${prefix}${isLast ? '└── ' : '├── '}`;
      tree += `${newPrefix}${key}\n`;
  
      if (node[key].children && Object.keys(node[key].children).length > 0) {
        tree += generateAsciiTree(node[key].children, `${prefix}${isLast ? '    ' : '│   '}`);
      }
    });
  
    return tree;
  }
  