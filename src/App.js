import React, { Component } from 'react';
import SearchForm from './Components/SearchForm';
import TableData from './Components/TableData';
import AddNew from './Components/AddNew';
import Header from './Components/Header';
import Data from './Components/Data.json';
// import { uuid } from 'uuidv4';
// import {v4 } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid';

// const { v4 } = require('uuidv4');
// const { v4: uuidv4 } = require('uuid');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      hienThiTrangThai: false,
      data: [],
      editUserStatus:false,
      userEditObject:{}
    })
  }
  

  componentWillMount() {
    if(localStorage.getItem('userData') === null){
      
      localStorage.setItem('userData',JSON.stringify(Data));
    }else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      })
    }
  }

  thayDoiTrangThai = () => {
    this.setState({
      hienThiTrangThai: !this.state.hienThiTrangThai
    })
  }
  getTextSearch = (event) =>{
    //console.log("du lieu app.js nhan duoc"+event);
    this.setState({
      searchText:event
    })
    
  }



  //add new user
  getNewUserData = (name,tel,permissions) => {
    var item={};
    item.id= uuidv4();
    item.name = name;
    item.tel = tel;
    item.permissions = permissions;
    //console.log("ket noi ok ok");
    //console.log(item);

    var items=this.state.data;
    items.push(item);
    this.setState({
      data:items
    })
    localStorage.setItem('userData',JSON.stringify(items));
    //console.log(items);
  }



  //connect tabledatauser
  editDataUser = (user) => {
    //console.log("da ket noi");
    //console.log(user);
    this.setState({
      userEditObject:user
    })
    localStorage.setItem('userData',JSON.stringify(user));
  }

  //editUser 
  isChangeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    })
  }


  //get corrected information via SearchForm from EditUser
  getCorrectedInformationApp = (info) =>{
    this.setState({
      infoObject:info
    })
    this.state.data.forEach((value,key)=>{
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permissions = info.permissions;
      }
    })
    localStorage.setItem('userData',JSON.stringify(info));
    //console.log("ket noi vs : "+ info.name);
  }
  //completed deletebutton Click
  DeleteButtonClickApp = (idUser) => {
      var tempData = this.state.data;
      tempData = tempData.filter(item => item.id !== idUser);
      this.setState({
        data:tempData
      })
      localStorage.setItem('userData',JSON.stringify(tempData));
  }
  
  
  
  render() {
    // //test local storage 
    // localStorage.setItem("name","Jony")
    // console.log(localStorage.getItem("name"));
    // localStorage.removeItem("name");

    
    var ketqua = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketqua.push(item);
      }
    })
    //console.log(ketqua);

    
    
    return (
      
      <div>
      <Header/>
      <div className="SearchForm">
        <div className="container"> 
          <div className="row">
            <SearchForm
            getCorrectedInformationApp={(info)=>this.getCorrectedInformationApp(info)}
            userEditObject={this.state.userEditObject}
            isChangeEditUserStatus={()=>this.isChangeEditUserStatus()}
            editUserStatus={this.state.editUserStatus}
            getTextSearchProps = {(event) => this.getTextSearch(event)}
             ketNoi={() => this.thayDoiTrangThai()} hienThiTrangThai={this.state.hienThiTrangThai}/>
            <TableData 
            DeleteButtonClickApp = {(idUser)=>{this.DeleteButtonClickApp(idUser)}}
            isChangeEditUserStatus={()=>this.isChangeEditUserStatus()}
            editFun = {(user) => this.editDataUser(user)}
            dataUser={ketqua}/>
            <AddNew add={(name,tel,permissions)=> this.getNewUserData(name,tel,permissions)}
            hienThiTrangThai={this.state.hienThiTrangThai}/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;