import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
      super(props);
      this.state={
        id:this.props.userEditObject.id,
        name:this.props.userEditObject.name,
        tel:this.props.userEditObject.tel,
        permissions:this.props.userEditObject.permissions

      }
    }
    
    isChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]:value
      })
    }
    saveButton = ()=>{
      var info={};
      info.id = this.state.id;
      info.name = this.state.name;
      info.tel = this.state.tel;
      info.permissions = this.state.permissions;

      this.props.getCorrectedInformation(info);
      this.props.isChangeEditUserStatus();//an nut
      
    }
    render() {
        return (
            <div className="col">
        <div className="card border-primary mb-3 mt-2">
          <form>
  <div className="card-header text-center text-primary"><h3> EDIT USER </h3></div>
  <div className="card-body text-primary">
    <div className="form-group">
      <label>Edit name</label>
      <input defaultValue={this.props.userEditObject.name} onChange={(event)=>{this.isChange(event)}} className="form-control"  name="name" placeholder="nhập tên" />
    </div>
    <div className="form-group">
      <label >Edit phone number</label>
      <input defaultValue={this.props.userEditObject.tel} onChange={(event)=>{this.isChange(event)}}   className="form-control"  name="tel" placeholder="nhập số điện thoại" />
    </div>
    <div className="form-group">
      <label >edit permissions</label>
      <select defaultValue={this.props.userEditObject.permissions} onChange={(event)=>{this.isChange(event)}}   className="form-control"  name="permissions">
        <option value={0}>Chọn quyền mặc định</option>
        <option value={3}>Normal</option>
        
        <option value={1}>Admin</option>
        <option value={2}>Modrator</option>
      </select>
    </div>
    <div className="form-group text-center">
      <input type="button" className="btn btn-primary" onClick={()=>this.saveButton()} value=" SIVE "/>
    </div>
        
  </div>
  </form>
</div>
</div>
        );
    }
}

export default EditUser;