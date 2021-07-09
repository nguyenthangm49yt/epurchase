import React from 'react';
import './profile.css';

 
  
 
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            privilege:'',
        }
    }

    render(){
        const {name, privilege, avater_path} = this.props
        
        return(
            <>  
                <img className="style_img" src={avater_path}  alt="avtar"></img>
                <div className="style_info">
                    <p className="name">{name }</p>
                    <p>{privilege }</p>
                </div>
            </>

        )
    }
}
export default Profile;