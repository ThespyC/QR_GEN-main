import React, { useEffect } from 'react';
import PulseLoader from "react-spinners/PulseLoader";
import { useState } from 'react';
import Loader from './components/Loader';
import ViewPDF from './components/ViewPDF';
import Spreadsheet from './components/Spreadsheet';


const Main = () => {

    const [paper, setPaper] = useState('paper3');
    const [selectedOption, setSelectedOption] = useState('A4');
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const togglePaper = (event) => {
        setPaper(event.target.value);
    };


    let content = null;

    if (paper === 'paper1') {
        
        content =  <div className='flex flex-row mr-5 w-full'>
        <select className='border-2 border-black dark:border-white rounded-md p-1 w-full' onChange={handleOptionChange}>
            <option value="A4">A4/24</option>
            <option value="A5">A4/65</option>
        </select>
        
    </div>
    }
    else if (paper === 'paper2') {
        content = <div className='container m-auto grid grid-cols-2 gap-3 text-xs font-medium'>
 <div className='flex justify-between items-center'>
        <label for="paperWidth">Width</label>
        <div className='flex flex-row justify-center items-center border border-gray-300 rounded-lg p-1.5'>
        <input className='  text-gray-900 text-sm rounded-lg outline-none block w-[50px] p-1.5 dark:bg-gray-700 ' type="number" id="paperWidth" name="paperWidth" />
        <span className='ml-2 text-gray-400'>mm</span>
        </div>
        </div>
        <div className='flex justify-between items-center '>
        <label for="paperHeight">Height</label>
        <div className='flex flex-row justify-center items-center border border-gray-300 rounded-lg p-1'>

        <input className='  text-gray-900 text-sm rounded-lg outline-none block w-[50px] p-1.5 dark:bg-gray-700 '  type="number" id="paperWidth" name="paperWidth" />
        <span className='ml-2 text-gray-400'>mm</span>
        </div>
        </div>
        </div>;
    }
    else if (paper === 'paper3') {
        content = <div className='container m-auto grid grid-cols-2 gap-3 text-xs font-medium'>
            
        <div className='flex justify-between items-center'>
        <label for="paperWidth">Paper Width</label>
        <div className='flex flex-row justify-center items-center border border-gray-300 rounded-lg p-1'>
        <input className='  text-gray-900 text-sm rounded-lg outline-none block w-[50px] py-1 px-1.5 dark:bg-gray-700 ' type="number" id="paperWidth" name="paperWidth" />
        <span className='ml-2 text-gray-400'>mm</span>
        </div>
        </div>
        <div className='flex justify-between items-center '>
        <label for="paperHeight">Paper Height</label>
        <div className='flex flex-row justify-center items-center border border-gray-300 rounded-lg p-1'>

        <input className='  text-gray-900 text-sm rounded-lg outline-none block w-[50px] py-1 px-1.5 dark:bg-gray-700 '  type="number" id="paperWidth" name="paperWidth" />
        <span className='ml-2 text-gray-400'>mm</span>
        </div>
        </div>
        <div className='flex justify-between items-center '>
        <label for="labelWidth">Label Width</label>
        <div className='flex flex-row justify-center items-center border border-gray-300 rounded-lg p-1'>
        <input className='  text-gray-900 text-sm rounded-lg outline-none block w-[50px] py-1 px-1.5 dark:bg-gray-700 '  type="number" id="paperWidth" name="paperWidth" />
        <span className='ml-2 text-gray-400'>mm</span>
        </div>
        </div>
        <div className='flex justify-between items-center '>
        <label for="labelHeight">Label Height</label>
        <div className='flex flex-row justify-center items-center border border-gray-300 rounded-lg p-1'>

        <input className='  text-gray-900 text-sm rounded-lg outline-none block w-[50px] py-1 px-1.5 dark:bg-gray-700 '  type="number" id="paperWidth" name="paperWidth" />
        <span className='ml-2 text-gray-400'>mm</span>
        </div>
        </div>
        <div className='flex justify-between items-center '>
        <label for="numberOfCols"># of columns</label>
        <div className='flex flex-row justify-center items-center border border-gray-300 rounded-lg p-1'>

        <input className='  text-gray-900 text-sm rounded-lg outline-none block w-[50px] py-1 px-1.5 dark:bg-gray-700 '  type="number" id="paperWidth" name="paperWidth" />
        <span className='ml-2 opacity-0'>mm</span>
        </div>
        </div>
        <div className='flex justify-between items-center '>
            
        <label for="numberOfRows"># of rows</label>
        <div className='flex flex-row justify-center items-center border border-gray-300 rounded-lg p-1'>

        <input className='  text-gray-900 text-sm rounded-lg outline-none block w-[50px] py-1 px-1.5 dark:bg-gray-700 '  type="number" id="paperWidth" name="paperWidth" />
        <span className='ml-2 opacity-0'>mm</span>
        </div>
        </div>
        <div className='flex justify-between items-center '>
        <label for="pageTopMargin">Page Top Margin</label>
        <div className='flex flex-row justify-center items-center border border-gray-300 rounded-lg p-1'>

        <input className='  text-gray-900 text-sm rounded-lg outline-none block w-[50px] py-1 px-1.5 dark:bg-gray-700 '  type="number" id="paperWidth" name="paperWidth" />
        <span className='ml-2 text-gray-400'>mm</span>
        </div>
        </div>
        <div className='flex justify-between items-center '>
        
        <label for="pageBottomMargin">Page Bottom Margin</label>
        <div className='flex flex-row justify-center items-center border border-gray-300 rounded-lg p-1'>


        <input className='  text-gray-900 text-sm rounded-lg outline-none block w-[50px] py-1 px-1.5 dark:bg-gray-700 '  type="number" id="paperWidth" name="paperWidth" />
        <span className='ml-2 text-gray-400'>mm</span>
        </div>
        </div>
        <div className='flex justify-between items-center '>
        <label for="pageLeftMargin">Page Left Margin</label>
        <div className='flex flex-row justify-center items-center border border-gray-300 rounded-lg p-1'>

        <input className='  text-gray-900 text-sm rounded-lg outline-none block w-[50px] py-1 px-1.5 dark:bg-gray-700 '  type="number" id="paperWidth" name="paperWidth" />
        <span className='ml-2 text-gray-400'>mm</span>
        </div>
        </div>
        <div className='flex justify-between items-center '>
            
        <label for="pageRightMargin">Page Right Margin</label>
        <div className='flex flex-row justify-center items-center border border-gray-300 rounded-lg p-1'>

        <input className='  text-gray-900 text-sm rounded-lg outline-none block w-[50px] py-1 px-1.5 dark:bg-gray-700 '  type="number" id="paperWidth" name="paperWidth" />
        <span className='ml-2 text-gray-400'>mm</span>
        
        </div>
        </div>
        </div>;
    }
    else {
        content = null;
    }
    



    return <>
    <Loader />
        <div className='mt-20 min-h-screen min-w-full h-full w-full bg-white dark:bg-slate-950 flex text-black dark:text-white flex-col justify-center items-center '>
                   
            <div className='w-full bg-grayBg flex flex-col md:flex-row h-full'>
                <div className='rightt bg-white px-5  dark:bg-slate-800 w-full h-[20%] md:h-screen  md:h-full md:w-[30%] flex flex-col justify-between'>
                <h1 className='text-lg font-bold text-black dark:text-white mt-10 ml-5 mb-5'>1. Types of Paper</h1>
                <div className='w-[90%] ml-5 flex justify-between'>
                  <div className='flex flex-row mr-5'>
                  <input className='mr-2' type="radio" id="paper1" name="paper" value="paper1" onChange={togglePaper}/>
                  <label for="paper1">Label Sheet</label>
                  </div>
                   
                  <div className='flex flex-row mr-5'>
                  <input className='mr-2' type="radio" id="paper3" name="paper" value="paper3" onChange={togglePaper}/>
                  <label for="paper3">Custom</label>
                  </div>
                </div>

                <div className='paper w-[90%] ml-5 flex justify-between mt-5'>
    
                    { content }
            
                </div>

                <h1 className='text-lg font-bold text-black dark:text-white mt-10 ml-5'>2. Label Design</h1>
                <div>
                <form className='mx-10 mt-5'>
   <section className="snap-x snap-mandatory pretty-scrollbar pb-[10px] flex gap-[10px] overflow-x-auto overscroll-contain" role="radiogroup">
      <h3 className="hidden">List of Label Design</h3>
      <div className="relative snap-start snap-always h-[120px] flex-none cursor-pointer overflow-hidden rounded-[8px] border-2 border-solid border-gray-4 active:border-main-4" role="radio" aria-label="Design : barcodeSimple"><img src="../s1.png"  alt="preview" width="226.77165354599998" height="113.38582677299999" decoding="async" data-nimg="1" className="h-full w-full object-cover" /></div>
      <div className="relative snap-start snap-always h-[120px] flex-none cursor-pointer overflow-hidden rounded-[8px] border-2 border-solid border-primary"  role="radio" aria-label="Design : barcodeWithTitle"><img alt="preview" width="264.566929137" height="132.2834645685" decoding="async" data-nimg="1" className="h-full w-full object-cover" src="../s1.png" /></div>
      <div className="relative snap-start snap-always h-[120px] flex-none cursor-pointer overflow-hidden rounded-[8px] border-2 border-solid border-gray-4"  role="radio" aria-label="Design : qrSimple"><img alt="preview" width="188.976377955" height="188.976377955" decoding="async" data-nimg="1" className="h-full w-full object-cover" src="../s2.png" /></div>
      <div className="relative snap-start snap-always h-[120px] flex-none cursor-pointer overflow-hidden rounded-[8px] border-2 border-solid border-gray-4"  role="radio" aria-label="Design : qrWithTitle"><img alt="preview" width="188.976377955" height="188.976377955" decoding="async" data-nimg="1" className="h-full w-full object-cover" src="../s2.png" /></div>
      <div className="relative snap-start snap-always h-[120px] flex-none cursor-pointer overflow-hidden rounded-[8px] border-2 border-solid border-gray-4"  role="radio" aria-label="Design : qrHorizontal"><img alt="preview" width="226.77165354599998" height="132.2834645685" decoding="async" data-nimg="1" className="h-full w-full object-cover" src="../s3.png" /></div>
      <div className="relative snap-start snap-always h-[120px] flex-none cursor-pointer overflow-hidden rounded-[8px] border-2 border-solid border-gray-4" role="radio" aria-label="Design : textOnly"><img alt="preview" width="226.77165354599998" height="113.38582677299999" decoding="async" data-nimg="1" className="h-full w-full object-cover" src="../s4.png"/></div>
   </section>
   
</form> 
                <div className='w-[90%] ml-5 flex justify-between flex-col pt-10'>
                <h1 className='font-bold'>Titre</h1>
                <input className='border-2 border-black dark:border-white rounded-md p-1'/>
                <hr className='my-5'/>
                <h1 className='font-bold'>Description</h1>

                <input className='border-2 border-black dark:border-white rounded-md p-1'/>
                <hr className='my-5'/>
                <h1 className='font-bold'>Barcode</h1>
                <input className='border-2 border-black dark:border-white rounded-md p-1'/>
                <hr className='my-5'/>
                <h1 className='font-bold'>Barcode Text</h1>
                <input className='border-2 border-black dark:border-white rounded-md p-1'/>
                <hr className='my-5'/>
                  </div>
                  <div className='w-[90%] ml-5 flex justify-between flex-col pt-10'>
                    <Spreadsheet />
                  </div>
                  <div className='w-full'>
                    <button className='ml-40 mb-10 mt-17 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-32' style={{ backgroundColor: '#4F67FF' , transition: 'background-color 0.3s'}}>Print</button>
                </div>
                </div>
                </div>
    
                <div className='leftt bg-[#525659] w-full h-[80%] md:h-full md:w-[70%] w-full'>
                <ViewPDF selectedOption={selectedOption} />
                </div>
                
            </div>
    </div>
    </>
}
;

export default Main