
import plus from './svg/plus.svg'
import './App.css';
import TopSection from './component/topSection/topSection';
import TodoCard from './component/todoCard/index';
import { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState("");


   const [todoList , setTodoList] = useState ([


   ]);

   const completedTasksCount = todoList.filter(elem=> elem.isDone===true).length;




   function addClickHandler(){

    if(inputValue.length>0){


      let newTodo = {
        id: Date.now(),
        text: inputValue,
        isDone: false
      };
   
      setTodoList([...todoList , newTodo ]);      
      setInputValue("");
    }

   }

  return (
    <>

      <div className='w-full h-screen flex justify-start flex-col items-center bg-gradient-to-t from-[#354A5E] to-[#42B782] pt-[20px]'>

        <div className='pb-2'>
          <p className='text-white font-bold text-[1.7rem] sm:text-[3.5rem]'>React Todo List</p>

        </div>
        <div className='w-11/12  bg-white sm:w-9/12 md:w-2/4 lg:w-5/12  xl:w-4/12'>

          
          <TopSection completedTasksCount={completedTasksCount} todoList={todoList} setTodoList={setTodoList}/>

          <div className='h-[200px] py-[15px] px-[15px] overflow-y-auto'>
            
            {todoList.map(item=> 
  
             
              <TodoCard completedTasksCount={completedTasksCount} isDone={item.isDone}  key={item.id} id={item.id} text={item.text} todoList={todoList} setTodoList={setTodoList} />
           )}

          </div>


          <div className='bg-[#F2F2F0] flex justify-center items-center py-[12px]'>

            <div className='w-10/12 h-[50px] relative flex items-center'>

              <input value={inputValue}
              onChange={(e)=> {
    
                setInputValue(e.target.value);
              }
             
              }
              placeholder='New Task' className='w-full text-[#3E82C3] h-[50px] pl-[15px] font-bold text-[17px] rounded-3xl border-[3px] border-[#698DAB] focus:outline-none'  />
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