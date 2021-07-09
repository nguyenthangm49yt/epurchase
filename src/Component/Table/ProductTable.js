
import React from "react";
import { Table } from 'antd';
import { Tag } from 'antd';
import './table-style.css'
import {Product} from "./Product";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Pagination } from 'antd';
const Name = (props) =>{
  const {name, productCode, pathImg} =  props;
  return (
          <div className='name-container'>
              <img  className='img-product' src={pathImg}></img>
              <div className='name-text'>
                    <p style={{fontWeight: 'bold', fontSize: 13}}>{name}</p>
                    <p style={{fontWeight: 500, fontSize: 13, color: "#8181A5"}}>{productCode}</p>
              </div>
          </div>
  )
}

const NormalCell = (props) =>{
  const {title,subtitle} =  props;
  return (
          <div className='NormalCell-container'>
            
            <p style={{fontWeight: 500, fontSize: 13, color: '#35455C'}}>{title}</p>
            <p style={{fontWeight: 500, fontSize: 13, color: "#979797"}}>{subtitle}</p>
           
          </div>
  )
}

const columns = [
  {
    title: 'Tên',
    dataIndex: 'name',
    width: '30%',
  },
  {
    title: 'Loại sản phẩm',
    dataIndex: 'type',
    width: '20%',

  },
  {
    title: 'Phiên bản',
    dataIndex: 'version',
    width: '20%',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    width: '15%',
  },
  {
    title: '',
    dataIndex: 'action',
    width: '5%',
  },
];

const data = [];
const dataProduct = []

for (let i = 0; i < 80; i++) {
  dataProduct.push(  {
    id: i,
    name: 'macbook',
    productCode: 'SKU 345-091',
    type: 'Vật tư',
    typeDescription: 'Loại sản phẩm',
    version: 'Không sử dụng',
    versionDescription: 'Phiên bản',
    status: 'Sử dụng',
  });
}

for (let i = 0; i < dataProduct.length; i++) {
  data.push({
    key: i,
    name: <Name name={dataProduct[i].name} 
            productCode={dataProduct[i].productCode + i} 
            pathImg= {process.env.PUBLIC_URL + "/images/product1.png"}>
              
          </Name>,
    type: <NormalCell title={dataProduct[i].type} subtitle={dataProduct[i].typeDescription}/>,
    version: <NormalCell title={dataProduct[i].version} subtitle={dataProduct[i].versionDescription}/>,
    status: dataProduct[i].status === 'Sử dụng' ? (<Tag color="green">Sử dụng</Tag>) : (<Tag color="red">Ngừng</Tag>) ,
    action: <MoreHorizIcon/> ,
  });
}



class ProductTable extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
        
          <span style={{ marginLeft: 8   }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table
        
        rowSelection={rowSelection} 
        columns={columns} 
        dataSource={data}
        pagination={<Pagination style={{padding:1000}} size="medium" total={50} showSizeChanger   />} 
        scroll={{ y: 657}}
        />
      </div>
    );
  }
}

export default ProductTable;

 