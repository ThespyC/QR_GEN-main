import { useState, useEffect } from "react";
import * as XLSX from 'xlsx';

function Spreadsheet() {
  useEffect(() => {
    //get form 
    const form = document.getElementById('form');
    //add event listener
    form.addEventListener('submit', (e) => {
      handleFileSubmit(e);
    });
  }, []);

  // onchange states
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);

  // submit state
  const [excelData, setExcelData] = useState(null);

  useEffect(() => {
    // Load template file when component mounts
    fetchTemplate();
  }, []);

  const fetchTemplate = async () => {
    try {
      const response = await fetch('/template.xlsx');
      const blob = await response.blob();
      console.log('blob:', blob);
      setExcelFile(blob);
    } catch (error) {
      console.error('Error fetching template:', error);
    }
  };

  const handleTemplateData = async () => {
    const reader = new FileReader();
    reader.onload = () => {
      const workbook = XLSX.read(reader.result, { type: 'binary' });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      // setExcelData(data.slice(0, 10));
      setExcelData(data);
    };
    reader.readAsBinaryString(excelFile);
  }

  useEffect(() => {
    if (excelFile) {
      handleTemplateData();
    }
  }, [excelFile]);

  // onchange event
  const handleFile = (e) => {
    let fileTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        setExcelFile(selectedFile);
      }
      else {
        setTypeError('Please select only Excel file types');
        setExcelFile(null);
      }
    }
    else {
      console.log('Please select your file');
    }
  }

  // submit event
  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const reader = new FileReader();
      reader.onload = () => {
        const workbook = XLSX.read(reader.result, { type: 'binary' });
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        const data = XLSX.utils.sheet_to_json(worksheet);
        setExcelData(data);
      };
      reader.readAsBinaryString(excelFile);
    }
  }

  return (
    <div className="mt-5 w-full">
      {/* view data */}
      <div className="viewer overflow-x-auto overflow-y-auto overscroll-contain pretty-scrollbar max-h-96">
        {excelData ? (
                        <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                  {Object.keys(excelData[0]).map((key) => (
                    <th scope='col' className="px-6 py-4" key={key}>{key}</th>
                  ))}
                </tr>
                        </thead>
                        <tbody>
                {excelData.map((individualExcelData, index) => (
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600" key={index}>
                    {Object.keys(individualExcelData).map((key) => (
                      <td  className="whitespace-nowrap px-6 py-4" key={key}>{individualExcelData[key]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
                      </table>
          

        ) : (
          <div>No File is uploaded yet!</div>
        )}
      </div>
      {/* form */}
      <form className="flex flex-col mt-5 mb-10" id="form" onSubmit={handleFileSubmit}>
      <input
    type="file"
    class="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4 file:rounded-md
        file:border-0 file:text-sm file:font-semibold
        file:bg-slate-100 file:text-slate-900 file:rounded-md
        hover:file:bg-slate-200"
  onChange={handleFile}/>
        
        {typeError && (
          <div className="alert alert-danger" role="alert">{typeError}</div>
        )}
      </form>
    </div>
  );
}

export default Spreadsheet;
