import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
selectedFiles: File[] = [];

  arrydata: Arrydata[] = [
    { userName: "A", Password: "AA", age: 10 },
    { userName: "B", Password: "BB", age: 20 },
    { userName: "C", Password: "CC", age: 30 }
  ];

  constructor() {
    this.arrydata = this.arrydata.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });

    let filedata = new FormData();
    this.selectedFiles?.forEach(file => {
      filedata.append("file", file, file.name)
    })
  }

  OnFileUpload(event : any) : void {
    var selected = event.target.files[0];
    var data = new FormData();
    data.append("file", selected, selected.name);
    console.log(data);
  }
}

export interface Arrydata
{
  userName : string;
  Password : string;
  age : number;
}

