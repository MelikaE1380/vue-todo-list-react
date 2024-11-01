import trashbin from '../../svg/trashbin.svg'


function TopSection({todoList,setTodoList , completedTasksCount}){



  function deleteTasksFromTrueManner(){

    let temp = [...todoList];
   temp.forEach(item=> {
    item.isDone = false;
   });
   setTodoList(temp);
   console.log(todoList);
}


function deleteAllTasks(){
  let temp = [];
  setTodoList(temp);
 
}

    return(

<>

<div className='w-full font-bold bg-[#F2F2F2] p-[10px] flex justify-end items-center gap-[10px] flex-wrap'>

            <div className='flex pl-[10px] pr-[2px] py-[1px] justify-center items-center bg-[#3F80C2] gap-[5px] rounded-3xl'>

              <p className='text-white font-bold'>Tasks</p>
              <div className='w-[20px] h-[20px] rounded-full flex justify-center items-center bg-white text-[#3F80C2]'>
                <span className='font-bold'>{todoList.length}</span>
              </div>
            </div>


            <div className='flex pl-[10px] pr-[2px] py-[1px] justify-center items-center bg-[#3F80C2] gap-[5px] rounded-3xl'>

              <p className='text-white font-bold'>Tasks Done</p>
              <div className='w-[20px] h-[20px] rounded-full flex justify-center items-center bg-white text-[#3F80C2]'>
                <span className='font-bold'>{todoList.filter(elem=> elem.isDone===true).length}</span>
              </div>
            </div>


            
          
            <div onClick={deleteTasksFromTrueManner} className={`${completedTasksCount > 0 ? 'flex' : 'hidden'} bg-[#F65050] p-[5px] justify-center items-center gap-[5px]`}>
              <img src={trashbin} />
              <p className='text-white'>Tasks Done</p>
            </div>


            <div onClick={deleteAllTasks} className='bg-[#F65050] p-[5px] flex justify-center items-center gap-[5px]'>
              <img src={trashbin} />
              <p className='text-white'>Tasks</p>
            </div>

          </div>

</>
        
    )
}

export default TopSection;