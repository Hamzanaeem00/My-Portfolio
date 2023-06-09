import React from 'react'
import resume from '../../assets/resume/HamzaNaeemResume.pdf'

const DownloadResume = () => {


    const handleDownload = async () => {
        const fileUrl = resume
        try {
          const response = await fetch(fileUrl);
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
    
          const link = document.createElement('a');
          link.href = url;
          link.download = 'resume.pdf';
          link.click();
    
          window.URL.revokeObjectURL(url);
        } catch (error) {
          console.error('Error downloading the file:', error);
        }
      };
    

  return (
    <div className='hire mt-5'>
      <button className= ' mx-3 btn-hire' onClick={handleDownload}>
      Download Resume
      {/* {resume} */}
    </button>
    </div>
  )
}

export default DownloadResume
