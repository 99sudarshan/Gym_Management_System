import React from "react";
import { PDFExport } from "@progress/kendo-react-pdf";

export const downloadPdf = (pdfRef) => {
  if (pdfRef.current) {
    pdfRef.current.save();
  }
};

const KendoPdfDownload = React.forwardRef(({ fileName, children }, ref) => {
  return (
    <div className="fixed top-0 left-0 transform -translate-x-[100%]">
      <PDFExport
        ref={ref}
        margin={{ top: 10, left: 20, right: 10, bottom: 10 }}
        paperSize="A4"
        fileName={fileName}
        scale={0.5}
        avoidLinks={true}
        landscape={true}
      >
        {children}
      </PDFExport>
    </div>
  );
});

export default KendoPdfDownload;
