
import React, { useState } from 'react';
import edit from '../svg/edit.svg'

const ModalComponent = ({ isVisible, onClose, id, todoList, setTodoList }) => {

    // const findPrimaryText = todoList.find(e=> e.id== id).text;
    const todoItem = todoList.find(item => item.id === id);

    const [inputValueEdited, setInputValueEdited] = useState(todoItem ? todoItem.text : '');


    function submitEditedText() {

        let temp = [...todoList];

        const itemToEdit = temp.find(item => item.id === id);

        if (itemToEdit) {
            itemToEdit.text = inputValueEdited;

            setTodoList(temp);
            onClose();

        } else {
            console.error("Item not found!");
        }
    }




    if (!isVisible) return null;
    console.log(id);
    console.log(todoList);


    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-[rgba(0,0,0,0.4)]">
            <div className="w-[90%] sm:w-[45%] lg:w-[26%] bg-white">


                <div className='flex pr-[5px] pt-[10px] justify-end items-center'><svg onClick={onClose} width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Edit / Close_Circle">
                        <path id="Vector" d="M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                </svg></div>


                <div className='px-[17px]'>


                    <div><p className='font-bold text-2xl pl-[5px]'>Edit Task</p></div>
                    <div className='pl-[5px]'><p className='pb-[5px]'>Task Name</p>
                        <input className='w-[100%] h-[40px] border-[#3E82C3] border-[2px] focus:outline-none rounded p-2'  value={inputValueEdited} onChange={(e) => {

                            setInputValueEdited(e.target.value);
                        }} />

                    </div>
                    <div className='py-[20px] flex justify-end'>


                        <div onClick={submitEditedText} className='bg-[#3E82C3] p-[7px] min-w-[27%] flex justify-center items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="#FFFFFF" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>
                            <p className='text-white text-[17px] font-bold'>save</p>
                      
                        </div>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default ModalComponent;
