import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  // converting items array to a lodash wrapper
  // slice items array starting from startIndex
  // take items for the current page pageSize or less
  // and convert the lodash wrapper to a regular array with value method
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
