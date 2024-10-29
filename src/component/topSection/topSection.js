import trashbin from '../../svg/trashbin.svg'


function TopSection({todoList,setTodoList , doneTasks, setDoneTasks}){




// console.log(todoList);
    return(

<>

<div className='w-full bg-[#F2F2F2] p-[10px] flex justify-end items-center gap-[10px] flex-wrap'>

            <div className='flex pl-[10px] pr-[5px] py-[5px] justify-center items-center bg-[#3F80C2] gap-[5px] rounded-3xl'>

              <p className='text-white'>Tasks</p>
              <div className='w-[25px] h-[25px] rounded-full flex justify-center items-center bg-white text-[#3F80C2]'>
                <span className='font-bold'>{todoList.length}</span>
              </div>
            </div>


            <div className='flex pl-[10px] pr-[5px] py-[5px] justify-center items-center bg-[#3F80C2] gap-[5px] rounded-3xl'>

              <p className='text-white'>Tasks Done</p>
              <div className='w-[25px] h-[25px] rounded-full flex justify-center items-center bg-white text-[#3F80C2]'>
                <span className='font-bold'>0</span>
              </div>
            </div>



            <div className='bg-[#E93B54] p-[5px] flex justify-center items-center gap-[5px]'>
              <img src={trashbin} />
              <p className='text-white'>Tasks</p>
            </div>

          </div>

</>
        
    )
}

export default TopSection;