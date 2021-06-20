import React, { Component } from 'react';
import EditUser from './EditUser';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      trungGian:'',
      infoObject:{}
    }
  }
  
  // ham nhan checkConnect == this.props.checkConnectProps
  isChange = (event) => {
    //console.log(event.target.value);
    this.setState({
      trungGian:event.target.value
    })
    this.props.getTextSearchProps(this.state.trungGian)
  }
    HienThiNut = () => {
      if(this.props.hienThiTrangThai === true){
        return <div className="btn btn-block btn-outline-primary " onClick={() => this.props.ketNoi()}>Đóng lại</div>
      }else {
        return <div className="btn btn-block btn-outline-primary "onClick={() => this.props.ketNoi()}>Thêm mới</div>
      }
    }


    //get corrected information from EditUser
    getCorrectedInformation = (info) =>{
      this.setState({
        infoObject:info
      })
      this.props.getCorrectedInformationApp(info);
    } 

    //edit User
    isShowEditUser = () => {
      if(this.props.editUserStatus === true){
        return <EditUser 
        getCorrectedInformation={(info)=>this.getCorrectedInformation(info)}
        userEditObject={this.props.userEditObject}
        isChangeEditUserStatus={()=>this.props.isChangeEditUserStatus()}/>
      }
    }
    render() {
        return (
            <div className="col-12">
              {
                this.isShowEditUser()
              }
  <div className="form-group">
    <div className="btn-group">
      <input className="form-control" placeholder="Nhập từ khóa tìm kiếm" onChange={(event)=>{this.isChange(event)}}/>
      <div className="btn btn-primary" onClick={(event) => this.props.getTextSearchProps(this.state.trungGian)}>Tìm</div>
    </div>
  </div>
  <div className="btn-group1 mt-3">
          {
            this.HienThiNut()
          }
  
  </div>
  <hr/>
</div>

        );
    }
}

export default SearchForm;