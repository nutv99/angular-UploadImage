import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  file: File = null; // Variable to store file
  loading: boolean = false; // Flag variable

  constructor(private http: HttpClient) {}

  onChange(event) {
    this.file = event.target.files[0];
  }
  baseApiUrl = 'https://lovetoshopmall.com/dataservice/uploadImage.php';

  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    const formData = new FormData();
    // Store form name as "file" with file data
    formData.append('file', this.file, this.file.name);
    this.http.post(this.baseApiUrl, formData).subscribe((response) => {
      console.log(response);
    });
    console.log(this.file);
  }

  
}
