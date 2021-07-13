import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
 
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';

const { SubMenu } = Menu;

class Sider extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {

    const menu = {
      backgroundColor: '#EEEEEE',
      width: 238,
      borderRadius: 7,
     
      fontFamily: 'Montserrat'
    };
    const submenu = {
      backgroundColor: '#FFFFFF',
      width: 238,
      borderRadius: 7,
      
      fontFamily: 'Montserrat'
    };
    return (

    
      <Menu
        onClick={this.handleClick}
        style={menu}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub0" icon={<ViewAgendaOutlinedIcon />} title="Danh mục dữ liệu">
         
             

            <SubMenu   key="sub1" title="Sản phẩm">
              <Menu.Item key="1">Danh mục</Menu.Item>
              <Menu.Item key="2">Sản phẩm </Menu.Item>
              <Menu.Item key="3">Nhóm sản phẩm </Menu.Item>              
              <Menu.Item key="4">Loại sản phẩm </Menu.Item>
              <Menu.Item key="5">Đơn vị tính </Menu.Item>
              <Menu.Item key="6">Loại thuế </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="Đối tác">
              <Menu.Item key="7">Nhà cung cấp </Menu.Item>
              <Menu.Item key="8">Nhãn hiệu </Menu.Item>
              <Menu.Item key="9">Tiêu chí đánh giá NCC </Menu.Item>
              <Menu.Item key="10">Điều kiện thương mại </Menu.Item>
              
            </SubMenu>
            <SubMenu key="sub3" title="Tiền tệ">
              <Menu.Item key="11"> </Menu.Item>
            </SubMenu>

          
        </SubMenu>
         
      </Menu>
    );
  }
}

 
export default Sider;