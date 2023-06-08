import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import './MyProjects.css'
import '../../App.css'
const MyProjects = ({theme}) => {
   console.log(theme);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    
    const modalStyle = {
        backgroundColor:  theme === "dark" ? '#343A40' : '#FFFFFF',
        color:  theme === "dark" ? '#fff' : 'black'
        
      };
    
  return (

    <div>
          <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>

      <Modal    open={isModalOpen} 
    //    onOk={handleOk} 
    onCancel={handleCancel}
         style={modalStyle}
      >
        <div className="body">
            hamza
        </div>
       
      </Modal>
      
    </div>
  )
}

export default MyProjects
