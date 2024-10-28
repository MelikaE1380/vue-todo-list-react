import { useState } from 'react';
import check from '../../svg/check.svg';
import edit from '../../svg/edit.svg';
import trashbin2 from '../../svg/trashbin2.svg';



const TodoCard = ({ text, id ,todoList , setTodoList }) => {

    const[doneTasks , setDoneTasks] = useState([


    ]);

    
    // function doneTaskClickHandler(){
    //     // باید یه سری تغییرات ظاهری بدیم روی همون تسک و همین تسک را به تسکهای انجام شده اضافه کنیم
    //     //و اگر دوباره روش کلیک کردیم به حالت اولیه برگرده و از تسک های انجام شده حذف بشه
    // let temp  = [...doneTasks];  // هرچی توی آرایه تسکهای انجام شده است میگیرد

    // console.log(text);
    // console.log(id);
    // temp=temp.concat({
    //     text: text,
    //     id:id,
      
    // })

    // setDoneTasks(temp);


    // }
    

    function doneTaskClickHandler(){
        // باید یه سری تغییرات ظاهری بدیم روی همون تسک و همین تسک را به تسکهای انجام شده اضافه کنیم
        //و اگر دوباره روش کلیک کردیم به حالت اولیه برگرده و از تسک های انجام شده حذف بشه
   
        let newTaskDone = {
            id: id,
            text:text
        };
        setDoneTasks([...doneTasks , newTaskDone ]);      

    }
    


    function deleteClickHandler(){
        console.log(id);
        let temp = [...todoList];   //مساوی با آرایه ای از اطلاعات داخل تودولیست برای جلوگیری از رفرنس کپی
        temp = temp.filter(e => e.id !== id);

        setTodoList(temp);
    }

    return (

        <>

            <div className=" border-[#EFEFEF] border-[2px]  flex justify-between items-center py-[5px] overflow-y-auto px-[20px] hover:bg-[#F2F2F2]">
                <div className='flex gap-[6px] items-center'>
                <img src={check} onClick={doneTaskClickHandler}/>
                    <p>{text}</p>
       

                    </div>
                <div className='flex gap-[5px] justify-around items-center'>
                    <img src={edit} />
                    <img src={trashbin2} onClick={deleteClickHandler} />

                </div>
            </div>


        </>

    )
}


export default TodoCard;