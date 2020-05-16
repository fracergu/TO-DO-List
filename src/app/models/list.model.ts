import { ListItem } from './list-item.model';

export class List {

    id            : number;
    title         : string;
    creationDate  : Date;
    completionDate: Date;
    completed     : boolean;
    items         : ListItem[];

    constructor( titulo: string)
    {
        this.id           = new Date().getTime();
        this.title        = titulo;
        this.creationDate = new Date();
        this.completed    = false;
        this.items        = [];
    }
    

}