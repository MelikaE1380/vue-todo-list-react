
import plus from './svg/plus.svg'
import './App.css';
import TopSection from './component/topSection/topSection';
import TodoCard from './component/todoCard/index';
import { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState("");


   const [todoList , setTodoList] = useState ([

    

   ]);

   
  //  console.log(typeof todoList);



   function addClickHandler(){

    if(inputValue.length>0){


      let newTodo = {
        id: Date.now(),
        text: inputValue
      };
   
      setTodoList([...todoList , newTodo ]);      
      setInputValue("");
    }

   }

  return (
    <>

      <div className='w-full h-screen flex justify-center flex-col items-center bg-gradient-to-t from-[#3A5E61] to-[#4BC582]'>

        <div className='pb-2'>
          <p className='text-white font-bold text-3xl md:text-4xl'>Vue Todo List</p>

        </div>
        <div className='w-11/12  bg-white sm:w-9/12 md:w-2/4 lg:w-5/12  xl:w-4/12'>

          
          <TopSection  todoList={todoList} setTodoList={setTodoList}/>

          <div className='h-[200px] py-[15px] px-[15px]'>
            
            {todoList.map(item=> 
  
             
              <TodoCard key={item.id} id={item.id} text={item.text} todoList={todoList} setTodoList={setTodoList} />
           )}

          </div>

           {console.log(todoList)}
          <div className='bg-[#F2F2F0] flex justify-center items-center py-[12px]'>

            <div className='w-10/12 h-[50px] relative flex items-center'>

              <input value={inputValue}
              onChange={(e)=> {
    
                setInputValue(e.target.value);
              }
             
              }
              placeholder='New Task' className='w-full text-[#757575] font-bold h-[50px] pl-[15px] text-[19px] rounded-3xl border-[3px] border-[#698DAB] focus:outline-none'  />
              <div onClick={addClickHandler} 
              
              className='bg-[#3F80C2] absolute right-[8px] rounded-full p-[5px]'><img className='w-[25px] h-[25px]' src={plus} /> </div>
            </div>

          </div>




        </div>


      </div>

    </>
  );
}

export default App;
