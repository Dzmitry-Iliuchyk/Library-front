import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookInput } from '../types/BookInput.interface';
import { BackEndErrors } from '../types/BackEndErrors.interface';

@Component({
  selector: 'lib-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss'
})
export class BookFormComponent implements OnInit, OnChanges {
  @Input('initialValues') initialValuesProps: BookInput;
  @Input('isSubmitting') isSubmittingProps: boolean;
  @Input('errors') errorsProps: BackEndErrors | null;

  @Output('bookSubmit') bookSubmitEvent = new EventEmitter<FormData>();

  form: FormGroup;
  selectedFile: File|null;

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["initialValuesProps"] && this.form) {
      this.form.patchValue(this.initialValuesProps);
    } else if (changes["initialValuesProps"]) {
      this.initializeForm();
    }
    console.log(this.initialValuesProps);
  }

  ngOnInit(): void {
    this.initializeForm();
    console.log("ngOnInit" ,this.initialValuesProps);
  }

  initializeForm() {
    this.form = this.fb.group({
      title: this.initialValuesProps.title,
      isbn: this.initialValuesProps.isbn,
      genre: this.initialValuesProps.genre,
      description: this.initialValuesProps.description,
      authorId: this.initialValuesProps.authorId,
      image: [null]
    });
  }
  onFileSelected(event) {
    console.log(event)
    this.selectedFile = event.target.files[0];
    this.form.patchValue({
      image: this.selectedFile
    });
    console.log(this.selectedFile.name);
  }
  onSubmit(): void {
    const bookInput: BookInput = {
      title: this.form.value['title'],
      isbn: this.form.value['isbn'],
      genre: this.form.value['genre'],
      description: this.form.value['description'],
      authorId: this.form.value['authorId'],
      
    };
    const formData = new FormData();


  for (const key in bookInput) {
    if (bookInput.hasOwnProperty(key)) {
      formData.append(key, bookInput[key]);
    }
  }

  formData.append('image', this.selectedFile);
    console.log(this.form);
    this.bookSubmitEvent.emit( formData );
  }
}