import React, {useState} from 'react';
import './productGroups.css';
 
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import { Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import ButtonCreate1 from '../Form/ButtonCreate1'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Menu, Dropdown, Button, Space } from 'antd';
 
import { Modal } from 'antd';
import data from '../../data'; 
 

const {TreeNode} = Tree;


const ChildLeaf = ({title,id, parentId, onAdd, onEdit, onDelete}) => {
   
  const [isModalAddVisible, setIsModalAddVisible] = useState(false);
  const [isModalEditVisible, setIsModalEditVisible] = useState(false);
  const [text, setText] = useState('')
 
  // mở modal khi click 
  const showModalAdd = () => {
    setIsModalAddVisible(true);
  };

  const showModalEdit = () => {
    setIsModalEditVisible(true);
  };

 
//  xử lí khi ấn nút ok của modal
  const handleOk1 = () => {
    console.log('add')
    const currentNode = data.find(item => item.id === id)
   
    onAdd(currentNode, text)
    
    setIsModalAddVisible(false);
    
    
  };
  const handleOk2 = () => {
    console.log('edit')
    const currentNode = data.find(item => item.id === id)
   
    onEdit(currentNode, text)
    
    setIsModalEditVisible(false);
    
  };

  //  xử lí khi ấn nút cancel của modal
  const handleCancel = () => {
    setIsModalAddVisible(false);
    setIsModalEditVisible(false);
  };


 //  Lưu text của input
 const handleOnChange =(e) =>{
    setText(e.target.value)
  }

  const handleAdd = () =>{
    showModalAdd();
    
  }
  const handleEdit = () =>{
    showModalEdit();
    const currentNode = data.find(item => item.id === id)
    setText(currentNode.title)
  }

  const handleDelete = () =>{
    
    const currentNode = data.find(item => item.id === id)
    onDelete(currentNode)
    
  }
  
  
  const handleMenuClick = (e)=>{
    
    console.log('click', e);
  }
    
  const menu = (
   
            <Menu onClick={handleMenuClick}>
  
            <Menu.Item key="0" rel="noopener noreferrer"  >
              <a type="primary" onClick={handleAdd}>
                Thêm
              </a>
            </Menu.Item>
            <Menu.Item  key="1">
                <a target="_blank"  onClick={handleEdit}>
                Sửa
                </a>
            </Menu.Item>
            <Menu.Item  key="2">
                <a target="_blank" rel="" href="#" onClick={ handleDelete}>
                Xóa

                </a>
            </Menu.Item>
          </Menu>
  );
    return(
      <div className="childLeaf-container" >

        {/* title của nodetree */}
          <p>{title}</p>

        {/* icon action  */}
          <Dropdown overlay={menu} 
          trigger={'click'}> 
            <MoreHorizIcon className="childNode-more-action-icon"/>
          </Dropdown>

        {/* các modal của các actions */}
          <Modal title="Thêm" visible={isModalAddVisible} onOk={handleOk1} onCancel={handleCancel}>
            <input type="text" onChange={handleOnChange}></input>
          </Modal>

          <Modal title="Sửa" visible={isModalEditVisible} onOk={handleOk2} onCancel={handleCancel}>
              <input type="text" value={text} onChange={handleOnChange}></input>
          </Modal>
      </div>
    ) 
}


// hàm tạo data dạng tree
const generate_data_tree = (list) => {
  var map = {}, node, roots = [], i;
  
  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i; // initialize the map
    list[i].children = []; // initialize the children
  }
  
  for (i = 0; i < list.length; i += 1) {
    node = { ...list[i],
       title : list[i].title,
       key: list[i].id,
      };
    if (node.parentId !== "0") {
      // if you have dangling branches check that map[node.parentId] exists
      list[map[node.parentId]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  
  return roots;
  
}


class ProductGroups extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: [],
           
        }
    }


    componentDidMount(){
      this.setState({
        data: this.props.data,
      })
    }


    // hàm thêm 1 tree node
    onAdd = (item, childTitle) =>{
      let arr = this.state.data;
      let newId = Number(arr[arr.length - 1].id) + 1;
      const newChild = {
        'id' : newId.toString() ,
        'parentId' : item.id,
        'title' : childTitle,
        'level': (Number(item.level) + 1).toString(),
        'key': item.key + "-" + newId.toString() ,
        'children': null,


      }


      var newdata  = this.state.data
      newdata.push(newChild)
      this.setState({
        data: newdata,
      })
      console.log(this.state.data)
    }

      // hàm sủa 1 tree node
    onEdit = (item, childTitle) =>{
      const newChild = {
        'id' : item.id ,
        'parentId' : item.parentId,
        'title' : childTitle,
        'level': item.level,
        'key': item.key,
        'children': null,


      }

      let newdata = this.state.data;
      newdata[Number(item.id)-1] = newChild;
       this.setState({
        data: newdata,
      })

      console.log(this.state.data)
    }

    // hàm xóa 1 tree node và các children của nó
    removeNodeAndChild = (id, arr) => {
      //first time it's called id is put into an array
      let del = (Array.isArray(id))? id: [id]
  
      let newArr = []
  
      arr.forEach((obj) => {
          switch (true) {
              // removes topmost parent
              case del.includes(obj.id):
                  break;
              // removes subsequent children
              case del.includes(obj.parentId):
                  del.push(obj.id)
                  break;
              // retains the rest
              default:
                  newArr.push(obj)
          }
      })
  
      // if this pass did remove something, we call function again
      // since original array may not be sorted and deep grandchildren
      // are found in the beginning of the array
      if (arr.length !== newArr.length) {newArr = this.removeNodeAndChild(del, newArr)}
  
      // when no further changes are made, we return the result
      return newArr
  }



  // hàm xử lí sự kiện nút xóa
    onDelete = (item) => {
        
        let newdata = this.removeNodeAndChild(item.id, this.state.data)
        this.setState({
          data: newdata,
        })

        console.log(this.state.data)
        
    }
    
 
    
  render(){
      const treeData = generate_data_tree(this.state.data) 
      const loop = data => (
        data.map((item) =>
          (<TreeNode
            key={item.key}
            title={<ChildLeaf
                    id={item.id}
                    parentId={item.parentId}
                    title={item.title} 
                    onAdd={this.onAdd}
                    onEdit={this.onEdit}
                    onDelete={this.onDelete}
                    />}
           >
         {  (item.children && item.children.length) ? loop(item.children) : null}
          </TreeNode>)
        )
      )
      return(
            <div className = "PG-container">  
                 <div className="header">
                    <p className="header--title">NHÓM SẢN PHẨM</p>
                    <div className="header--action">
                        <ButtonCreate1 title='Thêm nhóm cấp 1'/>
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
                    defaultExpandedKeys={['0']}
                    showLine= {{ hideLeafIcon: true }}
                    
                    >
                    {loop(treeData)}
                  </Tree>
                    
                 </div>
            </div>

        )
    }
}
export default ProductGroups;