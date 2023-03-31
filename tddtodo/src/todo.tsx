import React, {useState} from 'react';

const Todo = () => {
    const [toDo, setTodo] = useState<string>("");
    const [toDos, setTodos] = useState<any>([]);
    const onSubmit = (e: any) => {
        e.preventDefault();
        if (toDo === "") {
            return
        }
        setTodos((currentArray: any) => [toDo, ...currentArray])
        setTodo("")
    }
    const onChange = (e: any) => {
        setTodo(e.target.value)
    }

    const handleOnChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.checked ? e.currentTarget.classList.add('checked') : e.currentTarget.classList.remove('checked')
    }

    return (
        <>
            Weplanet's To-do List
            <form onSubmit={onSubmit} data-testid={"testForm"}>
                <input required={true} data-testid={"testInput"} type="text" placeholder="입력하세요" onChange={onChange}
                       value={toDo}/>
                <button>등록하기</button>
            </form>
            <ul data-testId="todoList">
                {
                    toDos?.map((item: any, index: any) =>
                        <p key={index}>
                            <label>
                                <input type={"checkbox"} data-testid={"testCheckbox"} onChange={handleOnChecked}/>
                                {item}
                            </label>
                        </p>
                    )}
            </ul>
        </>
    );
};

export default Todo;