export function dartValueType(type) {
  if (type.toLowerCase().indexOf("enum") > -1) return "String";
  switch (type) {
    case "string":
      return "String";
    case "bool":
      return "bool";
    case "float":
    case "double":
      return "double";
    case "int32":
      return "int";
    case "int64":
      return "Int64";
    default:
      return type;
  }
}

export function tsValueType(type) {
  if (type.toLowerCase().indexOf("enum") > -1) return "String";
  switch (type) {
    case "string":
    case "int64":
      return "string";
    case "bool":
      return "boolean";
    case "float":
    case "double":
    case "int32":
      return "number";
    default:
      return type;
  }
}
