//import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Button, Input, Table} from 'antd';
import {useState} from "react";
import {SearchOutlined} from '@ant-design/icons'

function App() {
  const [dataSource,setDataSource]=useState([
    {
      name:"john",
      age:32,
      address:'New York'
    },

    {
      name:"neeta",
      age:30,
      address:'Canada'
    },
    {
      name:"pushpa",
      age:28,
      address:'Soudi Arebia'
    },
    {
      name:"Mayuri",
      age:27,
      address:'Inadia'
    },
    {
      name:"Jagadish",
      age:35,
      address:'America'

    }
  ]);
  const columns=[
    {
      title:"Name",
      dataIndex:'name',
      filterDropdown:({setSelectedKeys,selectedKeys,confirm,clearFilters})=>{
        return (
          <>
          <Input 
        autofocus 
        placeholder="Type text here"

        value={selectedKeys[0]}

        onChange={(e)=>{
          setSelectedKeys(e.target.value?[e.target.value]:[])
          confirm({closeDropDown:false});
        }}

         onPressEnter={() => {
           confirm();
         }}
        onBlur={() => {
          confirm();
        }}></Input>
        <Button onClick={()=>{confirm();}} type='primary'>Search </Button>

        <Button onClick={()=>{clearFilters();}} type='danger'>Reset </Button>
        </>
        );
      },
      filterIcon: () =>{
        return <SearchOutlined/>;
      },
      onFilter:(value,record)=>{
        return record.name.toLowerCase().includes(value.toLowerCase())
        //return record.age==value; if run this line delete name.tolowercase line.
      },


    },

    {
      title:"Age",
      dataIndex:'age'
    },

    {
      title:"Address",
      dataIndex:'address'
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
       <Table style={{display:'flex',flex:2,margin:30}}
       columns={columns}
       dataSource={dataSource}>

       </Table>
      </header>

      

    </div>
  );
}

export default App;
