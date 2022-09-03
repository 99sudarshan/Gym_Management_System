export const onSort = (
  col,
  sortData,
  setSortData,
  sortColumn,
  setSortColumn
) => {
  if (sortColumn.order === "asc") {
    const sorted = [...sortData].sort((a, b) => {
      if (a.package_details[col] || b.package_details[col]) {
        return a.package_details[col].toLowerCase() >
          b.package_details[col].toLowerCase()
          ? 1
          : -1;
      } else if (isNaN(a[col]) || isNaN(b[col])) {
        return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1;
      } else {
        return a[col] > b[col] ? 1 : -1;
      }
    });

    setSortData(sorted);
    setSortColumn({ path: col, order: "desc" });
  }
  if (sortColumn.order === "desc") {
    const sorted = [...sortData].sort((a, b) => {
      if (a.package_details[col] || b.package_details[col]) {
        return a.package_details[col].toLowerCase() <
          b.package_details[col].toLowerCase()
          ? 1
          : -1;
      } else if (isNaN(a[col]) || isNaN(b[col])) {
        return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1;
      } else {
        return a[col] < b[col] ? 1 : -1;
      }
    });
    setSortData(sorted);
    setSortColumn({ path: col, order: "asc" });
  }
};
