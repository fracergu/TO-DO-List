import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  lists: List[] = [];

  constructor() { 

    this.loadStorage();

  }

  createList( title: string)
  {
    const newList = new List(title);
    this.lists.push(newList);
    this.saveStorage();

    return newList.id;
  }

  deleteList( lista: List){
    this.lists = this.lists.filter( l => l.id !== lista.id)
    this.saveStorage();
  }


  saveStorage(){

    localStorage.setItem('data', JSON.stringify(this.lists));

  }

  getList( id: string | number){
    id = Number(id);
    return this.lists.find( l => l.id === id);

  }

  loadStorage(){

    if (localStorage.getItem('data')){
      this.lists = JSON.parse(localStorage.getItem('data'));
    }
  }


}
