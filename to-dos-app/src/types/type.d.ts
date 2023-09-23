    export type Todo = {
        Id: number;
        Task: string;
        CreatedDateTime: Date;
        CompletedDateTime?: Date;
    };
    
    export type TodoState = { 
        completedTodos: Todo[], 
        notCompletedTodos: Todo[],
        activeTodos: Todo[]
    };
    
    export type TodoAction = {
        type: ActionType,
        payload: { 
            todo?: Todo; 
            completedTodos?: Todo[];
            notCompletedTodos?: Todo[];
            activeTodos?: Todo[]
        };
    };

    export type OdataResponse = {
        "@odata.context": string;
        "value": Todo[];
    }
  
    export type DispatchType = (args: TodoAction) => TodoAction