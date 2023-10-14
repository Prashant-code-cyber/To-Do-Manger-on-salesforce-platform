import { LightningElement } from 'lwc';

export default class ToDoManager extends LightningElement {
    refreshtodo(){
        this.refs.pendingToDo.refreshList();
        this.refs.completedToDo.refreshList();
    }
}