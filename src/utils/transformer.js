export function transform(root) {
  const clazzes = [];

  function deconstruction({ node, clazzName }) {
    if (undefined !== node.fields) {
      // clazz
      clazzes.push({
        name: clazzName ?? "",
        type: "clazz",
        fields: Object.keys(node.fields).map((key) => {
          return {
            name: key,
            type: node.fields[key].type,
            isList: node.fields[key].rule === "repeated",
          };
        }),
      });
      return;
    }
    if (undefined !== node.values) {
      // enum
      clazzes.push({
        name: clazzName ?? "",
        type: "enum",
        fields: Object.keys(node.values).map((key) => {
          return {
            name: key,
            type: node.values[key],
          };
        }),
      });
      return;
    }
    if (undefined !== node.nested) {
      // continue recursion
      deconstruction({ node: node.nested });
      return;
    } else if (Object.keys(node).length > 0) {
      Object.keys(node).forEach((key) => {
        deconstruction({ node: node[key], clazzName: key });
      });
    }
  }

  deconstruction({ node: root.nested });

  return clazzes;
}
