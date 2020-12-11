import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ISolicitud, Solicitud } from 'app/shared/model/solicitud.model';
import { SolicitudService } from './solicitud.service';

@Component({
  selector: 'jhi-solicitud-update',
  templateUrl: './solicitud-update.component.html'
})
export class SolicitudUpdateComponent implements OnInit {
  isSaving = false;
  fechaSolicitudDp: any;
  fechaRespuestaDp: any;

  editForm = this.fb.group({
    id: [],
    descripcion: [null, [Validators.required]],
    fechaSolicitud: [null, [Validators.required]],
    fechaRespuesta: [],
    observacion: []
  });

  constructor(protected solicitudService: SolicitudService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ solicitud }) => {
      this.updateForm(solicitud);
    });
  }

  updateForm(solicitud: ISolicitud): void {
    this.editForm.patchValue({
      id: solicitud.id,
      descripcion: solicitud.descripcion,
      fechaSolicitud: solicitud.fechaSolicitud,
      fechaRespuesta: solicitud.fechaRespuesta,
      observacion: solicitud.observacion
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const solicitud = this.createFromForm();
    if (solicitud.id !== undefined) {
      this.subscribeToSaveResponse(this.solicitudService.update(solicitud));
    } else {
      this.subscribeToSaveResponse(this.solicitudService.create(solicitud));
    }
  }

  private createFromForm(): ISolicitud {
    return {
      ...new Solicitud(),
      id: this.editForm.get(['id'])!.value,
      descripcion: this.editForm.get(['descripcion'])!.value,
      fechaSolicitud: this.editForm.get(['fechaSolicitud'])!.value,
      fechaRespuesta: this.editForm.get(['fechaRespuesta'])!.value,
      observacion: this.editForm.get(['observacion'])!.value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ISolicitud>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
