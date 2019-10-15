import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  imports: [MatButtonModule,
           MatCheckboxModule,
           MatAutocompleteModule,
           MatFormFieldModule, 
           MatInputModule,
           MatDatepickerModule,
           MatTableModule,
           MatToolbarModule,
           MatIconModule, 
           MatNativeDateModule,
           MatRadioModule,
           MatSelectModule,
           MatSliderModule ],
  exports: [MatButtonModule, 
            MatCheckboxModule,
            MatAutocompleteModule,
            MatFormFieldModule, 
            MatInputModule,
            MatDatepickerModule,
            MatTableModule,
            MatToolbarModule,
            MatIconModule, 
            MatNativeDateModule,
            MatRadioModule,
            MatSelectModule,
            MatSliderModule ],
  providers: [
    MatDatepickerModule
  ]
})

export class MyComponentModule { }