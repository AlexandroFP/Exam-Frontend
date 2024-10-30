import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddressService } from 'src/app/services/address.service';


@Component({
  selector: 'app-addres-modal',
  templateUrl: './addres-modal.component.html',
  styleUrls: ['./addres-modal.component.css']
})
export class AddresModalComponent implements OnInit {
  isDisabled: boolean = true;
  addressForm: FormGroup;
  estados: string[] = [];    
  municipios: string[] = []; 
  colonias: string[] = []; 

  constructor(public dialog: MatDialog, private addressSrv: AddressService, private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      cp: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[0-9]*$')]],
      estado: [''],
      municipio: [''],
      colonia: ['']
    });
   }

  ngOnInit() {
    

    this.addressForm.get('cp')?.valueChanges.subscribe(value => {
      if (value.length === 5) {
        this.getAddress(value);
      }
    });
  }

  getAddress(cp: string){
    this.addressSrv.getAddressByCP(cp).subscribe((res:any) =>{
      const addres = JSON.parse(res['CatalogoJsonString'])
      const municipio = addres[0].Municipio.sMunicipio;
      const estado = addres[0].Municipio.Estado.sEstado;
      const colonias = addres[0].Ubicacion.map((u: any) => u.sUbicacion);

      this.estados = [estado];
      this.municipios = [municipio];
      this.colonias = colonias;
    
      this.addressForm.patchValue({
        estado: estado,
        municipio: municipio,
        colonia: colonias[0]
      });
    
    });
  }

}
