import React, { useState } from 'react';
import { Button } from 'antd';
import './styles.css';
import CreateNewForm  from  './CreateNewForm';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
 
function ButtonCreate1 (props){
    const [isOpen, setIsOpen] = useState(false);
    const {title} = props;
  
    const showModal = () => {
        setIsOpen(true);
         
      };
   
    return (
      <>
        <Button className='modal'  
          type="primary" 
          onClick={showModal} 
         
          icon={<AddCircleOutlineOutlinedIcon />} >
            
            {title}
        </Button>
        
        <CreateNewForm   title="Tạo mới" isOpen={isOpen} setIsOpen={setIsOpen}/>
        
      </>
    );

}

export default ButtonCreate1;