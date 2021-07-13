 
import './App.css';
import Sider from './Component/Sider';
import ProductTable from './Component/Table/ProductTable';

import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import Profile from './Component/Profile/Profile';
import ProductGroups from './Component/ProductGroups/ProductGroups';
import TextField from '@material-ui/core/TextField';
import TuneIcon from '@material-ui/icons/Tune';
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import 'antd/dist/antd.css';  
import data from './data'; 
 
function App() {
  return (
    <div className="App">
     <div className="container">
        <div className="left">
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo"></img>

         <div className="category-data">
          <div className="category-data--1">
              <p className="title">Danh mục dữ liệu </p>
              <p className="sub-title">Khởi tạo các dữ liệu gốc</p>
            </div>
            <div className="category-data--list">
            
              <Sider/>
            </div>
         </div>
        </div> 
        <div className="right">
          <div className="page-header">
            <NotificationsOutlinedIcon/>
            <Profile name='Vu Tuan' privilege='Admin' avater_path={process.env.PUBLIC_URL + "/images/avatar.png"}/>
          </div>
          <div className="page-content">
            <p>Nhóm sản phẩm</p>
            <div className="content">
          {/* Nhóm sản phẩm */}
              <div className="product-groups">
                  <ProductGroups text='bla' data={data} />
              </div>
              
              <div className="product-groups--detail">
            {/* Tìm kiếm */}
                  <div className="product--action">
                    <div className="product--action_left">
                        <TextField  
                        InputProps={{
                          className: "search",
                        }} 
                        id="outlined-basic" 
                        label="Tìm kiếm theo tên sản phẩm, tên khác và mã sản phẩm...." 
                        variant="outlined"
                         
                        />
                        <span className="filter">
                          <TuneIcon style={{marginTop:12}}/>
                          <p>Bộ lọc</p>
                        </span>
                    </div>
                    
                    <div className="product--action_right">
                       <span className="add-product">
                          <AddIcon style={{marginBottom:2, marginLeft:10}}/>
                          <p>Thêm sản phẩm</p>
                        </span>

                        <span className="actions">
                          
                          <p>Tác vụ</p>
                          <KeyboardArrowUpIcon style={{marginRight:20}}/>
                        </span>
                    </div>
                  </div>
            {/* Kết quả */}
                  <div className="product--result">
                    <div className="product--result_header">
                      <p>11,000 Kết quả</p>
                      <span className="pagination-bar">
                        
                        <p>Kết quả</p>
                      </span>
                    </div>
                    <ProductTable/>
                  </div>
              </div>
            </div>
          </div>
        </div> 
     </div>
    </div>
  );
}

export default App;
