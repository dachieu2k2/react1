import React, { Component } from 'react';

class TableDataUser extends Component {
    
    Checkpermissions = () => {
        if(this.props.permissions===1 || this.props.permissions==='1'){
            return "Admin";
        }else if(this.props.permissions===2|| this.props.permissions==='2'){
            return "Modrator";
        }else if(this.props.permissions===3|| this.props.permissions==='3'){
            return "Normal";
        }
    }
    render() {
        return (
            <tr>
        <td >{this.props.stt}</td>
        <td>{this.props.name}</td>
        <td>{this.props.tel}</td>
        <td>{this.Checkpermissions()}</td>
        <td>
          <div className="btn-group">
            <div className="btn btn-warning" onClick={()=>{
                this.props.isChangeEditUserStatus()
                this.props.editFunClick()
            }}><i className="fas fa-edit" />Sửa</div>
            <div className="btn btn-danger" onClick={(idUser) => this.props.DeleteButtonClick(this.props.id)}><i className="fas fa-delete" />Xóa</div>
          </div>
        </td>
      </tr>
        );
    }
}

export default TableDataUser;