import React, { Component } from 'react';
import TableDataUser from './TableDataUser';

class TableData extends Component {

  

  hienThiUser = () => this.props.dataUser.map( (value,key ) => {
    return (
      <TableDataUser 
      //complete delete button
      DeleteButtonClick = {(idUser)=>{this.props.DeleteButtonClickApp(idUser)}}
      // connect app js vowi tabledatauser de edit
      isChangeEditUserStatus={()=>this.props.isChangeEditUserStatus()}
      //connect App js voi tabledatauser
      editFunClick={(user) => this.props.editFun(value)}

      //data
      id ={value.id}
      key={key}
      stt ={key+1}
      name= {value.name}
      tel={value.tel}
      permissions={value.permissions}
    />
    )
    
  }

  )
    
  
  
    render() {
      //console.log(this.props.dataUser);
        return (
            
            <div className="col">
              
  <table className="table table-hover table-inverse">
    <thead className="thead-inverse">
      <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>Số điện thoại</th>
        <th>Quyền</th>
        <th>Thao tác</th>
      </tr>
    </thead>
    <tbody>
      {this.hienThiUser()}
    </tbody>
  </table>
</div>

        );
    }
}

export default TableData;