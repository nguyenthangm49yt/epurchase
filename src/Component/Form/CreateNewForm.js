import React, { useState } from 'react';
import { Modal, Button,Switch } from 'antd';
import './styles.css';
import Input from '@material-ui/core/Input';
import ViewCarouselOutlinedIcon from '@material-ui/icons/ViewCarouselOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import { Select } from 'antd';
import { Tag, Divider } from 'antd';

import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  
} from '@ant-design/icons';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
 

 
const InputText = (props)=>{
  const {title, placeholder, icon} = props;
  return (
    <div className="input-text">

        <p >{title}</p>
      
        <Input 
        placeholder={placeholder} 
        inputProps={{ 'aria-label': 'description' }} 
        style={{width:'100%'}}
        endAdornment={icon}
        />
  
    </div>
    
  )
}

const InputSelect = (props)=>{
  const {title, placeholder, icon} = props;
  const { Option } = Select;

  const onChange = (value) => {
    console.log(`selected ${value}`);
  }
  
  const onBlur =() => {
    console.log('blur');
  }
  
  const onFocus =()=>  {
    console.log('focus');
  }
  
  const onSearch =(val) => {
    console.log('search:', val);
  }
  return (
    <div className="input-select">

        <p>{title}</p>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Chọn nhóm cha"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
            <Option value="Vật phẩm nhựa">Vật phẩm nhựa</Option>
            <Option value="Vật phẩm giấy">Vật phẩm giấy</Option>
            <Option value="Vật phẩm kim loại">Vật phẩm kim loại</Option>
        </Select>
    </div>
    
  )
}

function CreateNewForm (props){
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {title} = props;
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    function onChangeSwitch(checked) {
      console.log(`switch to ${checked}`);
    }

   
    return (
      <>
        <Button className='modal'  
          type="primary" 
          onClick={showModal} 
         
          icon={<AddCircleOutlineOutlinedIcon />} >
            
            {title}
        </Button>
        
        <Modal title="Tạo mới" 
          visible={isModalVisible} 
          closable='true'
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Tag icon={<CheckCircleOutlined />} className='save-tag' onClick={handleOk}>
              Lưu
            </Tag>,
            <Tag icon={<CloseCircleOutlined  />} className='cancel-tag' onClick={handleCancel}>
              Hủy
            </Tag>
          ]}
        >
              <div style ={{display:'flex', justifyContent:'space-between'}}>
                <InputText title='Tên nhóm' placeholder='Nhập tên nhóm...' icon={<ViewCarouselOutlinedIcon/>}/>
                <InputText title='Mã nhóm' placeholder='Nhập mã nhóm...' icon={<ViewCarouselOutlinedIcon/>}/>
              </div>

               <InputText title='Mô tả nhóm' placeholder='Nhập mô tả nhóm...' icon={<ChatOutlinedIcon/>}/>

               <div style ={{display:'flex', justifyContent:'space-between'}}>
                  <InputSelect title='Nhóm cha' placeholder='Chọn nhóm cha' />
   
                  <span className='status'>
                    <Switch defaultChecked onChange={onChangeSwitch} />
                    <p>Trạng thái</p>
                  </span>

                </div>
           
        </Modal>
      </>
    );

}

export default CreateNewForm;