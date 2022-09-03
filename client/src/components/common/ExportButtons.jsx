import React from "react";
import ReactHtmlTableToExcel from "react-html-table-to-excel";
import { CSVLink } from "react-csv/lib/index";
import { useReactToPrint } from "react-to-print/lib/index";

const ExportButtons = React.forwardRef(({ data, fileName }, ref) => {
  const componentRef = ref;
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: () => window.close(),
  });

  return (
    <>
      <ReactHtmlTableToExcel
        className="export-button"
        filename={fileName}
        table="table-to-xls"
        sheet={fileName}
        buttonText="Excel"
      />
      <CSVLink
        className="export-button hover:text-gray-700"
        data={data}
        filename={fileName}
      >
        CSV
      </CSVLink>
      {/* <ReactToPrint
        trigger={() => <button className="export-button">Print</button>}
        content={() => ref.current}
      /> */}
      <button className="export-button" onClick={handlePrint}>
        Print
      </button>
    </>
  );
});

export default ExportButtons;
