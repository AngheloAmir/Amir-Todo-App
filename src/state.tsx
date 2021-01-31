export interface TodoItemInterface {
    text:       string;
    isMarked:   boolean;
}

export function createState() : Array<TodoItemInterface> {
    const temp : Array<TodoItemInterface> = [
        {
            text: "My todo",
            isMarked: false
        },
        {
            text: 'Todo two',
            isMarked: true
        },
        {
            text: 'Todo two',
            isMarked: false
        },
    ];
    return temp;
}