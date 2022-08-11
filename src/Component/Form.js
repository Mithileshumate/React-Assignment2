import React,{useState} from 'react'

const Form = () => {
  const [store,setStore]=useState({
   name:'',
   department:'',
   rating:''
  });
  const [out,setOut]=useState([]);
  const input1= (e)=>{
    const name= e.target.name;
    const value = e.target.value;

    setStore({...store,[name]:[value]});
  }
  const submitted = (e)=>{
    e.preventDefault();
    setOut([...out,{...store,id:out.length}])
  }
  return (
    <div className='bg'>
      <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>

    <form onSubmit={submitted} >
      <label className='text1'>
        Name:
      <input required className='box1' type="text" name="name" placeholder="Name" value={store.name} onChange={input1} />
      </label>
      <label  className='text2'> 
      Department:
        <input required className='box1' type="text" name="department" placeholder='Department' value={store.department}  onChange={input1} />
        </label>
        <label className='text3'>
          Rating:
      <input required className='box1' type="number" name="rating" placeholder='Rating' value={store.rating} onChange={input1}/>
      </label>
        <input  className='box2' type="submit" />
    </form>

    <div className="box4">
      {out.map(ele=>(<h4 className='text4'>Name: {ele.name} ||  Department:  {ele.department} || Rating: {ele.rating} </h4>))}
    </div>
    </div>
  )
}

export default Form
