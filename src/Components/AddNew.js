import React, { Component } from 'react';

class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state={
      id:"",
      name:"",
      tel:"",
      permissions:""
    }
  }
  


  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    })
    var item={};
    item.id = this.state.id;
    item.name = this.state.name;
    item.tel = this.state.tel;
    item.permissions = this.state.permissions;

    //console.log(item);
  }



  hienThi = () => {
    if(this.props.hienThiTrangThai===true){
      return (
        <div className="col">
        <div className="card border-primary mb-3 mt-2">
          <form>
  <div className="card-header text-center text-primary"><h3>ADD NEW USER</h3></div>
  <div className="card-body text-primary">
    <div className="form-group">
      <label>Add name</label>
      <input className="form-control" onChange={(event)=>this.isChange(event)} name="name" placeholder="nhập tên" />
    </div>
    <div className="form-group">
      <label >Add phone number</label>
      <input className="form-control" onChange={(event)=>this.isChange(event)} name="tel" placeholder="nhập số điện thoại" />
    </div>
    <div className="form-group">
      <label >choose authority</label>
      <select className="form-control" onChange={(event)=>this.isChange(event)} name="permissions">
        <option value={0}>Chọn quyền mặc định</option>
        <option value={3}>Normal</option>
        
        <option value={1}>Admin</option>
        <option value={2}>Modrator</option>
      </select>
    </div>
    <div className="form-group text-center">
      <input type="reset" className="btn btn-primary" onClick={(name,tel,permissions)=> this.props.add(this.state.name,this.state.tel,this.state.permissions)} value=" ADD "/>
    </div>
        
  </div>
  </form>
</div>
</div>
      )
    }
  }
    render() {
      //console.log(this.props.hienThiTrangThai);
      
        return (
            <div>
              {
                this.hienThi()
              }
    </div>
        );
    }
}

export default AddNew;