import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
 //crearemos los metodos 
  constructor(private firestore:AngularFirestore) {}

// crearemmos nuevos elementos
  create_NewStudent(record){
    return this.firestore.collection('students').add(record);
  }

// leeremos los elementoso
  read_Students(){
    return this.firestore.collection('students').snapshotChanges();
  }

// actualizaremos nuevos datos

update_Student(recordID,record){
  
  this.firestore.doc('students/'+ recordID).update(record);

}

delete_Student(record_id){
  this.firestore.doc('students/'+ record_id).delete();

}


}
