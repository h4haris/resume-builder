import { NgModule } from "@angular/core";

//Prime NG Material Module
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SidebarModule } from "primeng/sidebar";
import { TableModule } from 'primeng/table';


const PRIMENG_MODULES = [
  ButtonModule,
  ChipsModule,
  DialogModule,
  DropdownModule,
  FileUploadModule,
  InputTextareaModule,
  InputTextModule,
  MultiSelectModule,
  SidebarModule,
  TableModule
];

@NgModule( {
  imports: [ ...PRIMENG_MODULES ],
  exports: [ ...PRIMENG_MODULES ],
} )
export class PrimeNgMaterialModule { }
