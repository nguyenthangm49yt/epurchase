import React from 'react';
import './productGroups.css';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import { Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import CreateNewForm from '../Form/CreateNewForm'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const ChildLeaf = ({title}) => {
    
    return(
 
            <div className="childLeaf-container" >
                <p>{title}</p>
                <MoreHorizIcon className="childNode-more-action-icon"/>
            </div>
    ) 
}
class ProductGroups extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            privilege:'',
        }
    }
    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
      };
    render(){
        const { text} = this.props
        
        return(
            <div className = "PG-container">  
                 <div className="header">
                    <p className="header--title">NHÓM SẢN PHẨM</p>
                    <div className="header--action">
                        <CreateNewForm title='Thêm nhóm cấp 1'/>
                    </div>
                 </div>
                 <div className="find">
                     <Input 
                     placeholder="Tìm kiếm từ khóa nhóm sản phẩm..." 
                     inputProps={{ 'aria-label': 'description' }} 
                     style={{width:'100%'}}
                     endAdornment={<SearchIcon className="find-icon"/>}
                     />
                     
                 </div>

            {/* tree list       */}
                <div className="tree-list">
                <Tree
                    showLine
                    switcherIcon={<DownOutlined />}
                    defaultExpandedKeys={['0-0']}
                    onSelect={this.onSelect}
                    showLine= {{ hideLeafIcon: true }}
                    treeData={[
                   
                        {
                            title: 'Vật tư giấy',
                            
                            key: '0',
                            children: [
                            {
                                title: <ChildLeaf title='Bao bì nhựa' />,
                                 
                                key: '0-0',
                            },
                            {
                                title:<ChildLeaf title='Bao bì nhựa' />,
                                key: '0-1',
                            },
                            {
                                title: <ChildLeaf title='Bao bì nhựa' />,
                                key: '0-2',
                                
                            },
                            ],
                        },
                        {
                            title: 'Vật tư nhựa',
                            key: '1',
                            children: [
                            {
                                title: <ChildLeaf title='Bao bì nhựa' />,
                                key: '1-0',
                            },
                            {
                                title: <ChildLeaf title='Bao bì nhựa' />,
                                key: '1-1',
                            },
                            {
                                title: <ChildLeaf title='Bao bì nhựa' />,
                                key: '1-2',
                            },

                            ],
                        },
                        {
                            title: 'Công cụ dụng cụ',
                            key: '2',
                            children: [
                            {
                                title:<ChildLeaf title='Bao bì nhựa' />,
                                key: '2-0',
                            },
                            {
                                title: <ChildLeaf title='Bao bì nhựa' />,
                                key: '2-1',
                            },
                            {
                                title: <ChildLeaf title='Bao bì nhựa' />,
                                key: '2-2',
                            },
                            ],
                        },
                        {
                            title: 'Công cụ dụng cụ',
                            key: '3',
                            children: [
                            {
                                title: <ChildLeaf title='Bao bì nhựa' />,
                                key: '3-0',
                            },
                            {
                                title: <ChildLeaf title='Bao bì nhựa' />,
                                key: '3-1',
                            },
                            ],
                        },
                        
                     
                    ]}
                />
                 </div>
            </div>

        )
    }
}
export default ProductGroups;