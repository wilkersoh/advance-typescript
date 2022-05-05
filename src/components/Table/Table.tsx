import React from "react";

interface TableProps<TItem> {
	items: TItem[];
	renderItem: (item: TItem) => React.ReactNode;
}

const Table = <TItem,>(props: TableProps<TItem>) => {
	console.log("props:  :>> ", props);
	return null;
};

export default Table;
