
import React, { useState } from 'react';
import edit from '../svg/edit.svg'

const ModalComponent = ({ isVisible, onClose, id, todoList, setTodoList }) => {

    // const findPrimaryText = todoList.find(e=> e.id== id).text;
    const todoItem = todoList.find(item => item.id === id);

    const[inputValueEdited,setInputValueEdited] = useState(todoItem ? todoItem.text : '');


        function submitEditedText() {
         
            let temp = [...todoList];
    
            const itemToEdit = temp.find(item => item.id === id);
            
            if (itemToEdit) {
                itemToEdit.text = inputValueEdited;
            
                setTodoList(temp);
               
            } else {
                console.error("Item not found!");
            }
        }
    
    


    if (!isVisible) return null;
    console.log(id);
    console.log(todoList);


    return (
        <div className="flex  justify-center items-center z-1 w-full h-full bg-[rgba(0,0,0,0.4)]">
            <div className="w-[80%] bg-white">


                <div className='flex pr-[5px] pt-[10px] justify-end items-center'><svg onClick={onClose} width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Edit / Close_Circle">
                        <path id="Vector" d="M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                </svg></div>
                <div><p className='font-bold text-2xl pl-[5px]'>Edit Task</p></div>
                <div className='pl-[5px]'><p>Task Name</p>
                    <input className='w-[90%]' value={inputValueEdited} onChange={(e)=> {
                       
                        setInputValueEdited(e.target.value);
                    }} />

                </div>
                    <div>


                        <div>

                            <p onClick={submitEditedText}>save</p>
                            <img src={edit} />
                        </div>
                    </div>

            </div>
        </div>
    );
};

export default ModalComponent;
