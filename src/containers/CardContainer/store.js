//Это библиотека Zustand, немецкая, условно создает штуку в которой хранятся все данные, ниэе описал подробнее

import {create} from 'zustand';
import {devtools} from 'zustand/middleware';

// interface item {
//     id: string,
//     title: string,
//     status: 'clear' | 'done' | 'canceled',
// }

// interface CardStore {
//     items: item[],
//     addItem: (title: string) => void,
//     deleteItem: (id: string) => void,
//     changeStatus: (id: string) => void,
// }

export const useCardStore = create()(devtools((set) => ({
    items: [], //Тут я создаю массив и называю его items
    //Это функция добавить объект в массив, поля которые есть в этом объекте описаны в интерфейсе выше 
    //(они закомментированы, т.к. это был TypeScript но я не уверен что не зная обычного ООП ты сможешь познать зачем нужна строгая типизация в проекте с динамической)
    addItem: title => set(state => ({ 
        items: [...state.items, {id: `${Math.random()}`, title: title, status: 'clear'}]
    })),
    //Это удалить
    deleteItem: id => set(state => ({
        items: [...state.items.filter(el => el.id !== id)]
    })),
    //Это менять статус через Switch case 
    changeStatus: id => set(state => ({
        items: [...state.items.filter(el => {
            if (el.id === id) {
                switch (el.status) {
                    case "clear":
                        el.status = 'done';
                        break;
                    case "done":
                        el.status = 'canceled';
                        break;
                    case "canceled":
                        el.status = 'clear';
                        break;
                }
            }
            return el;
        })]
    }))
})));