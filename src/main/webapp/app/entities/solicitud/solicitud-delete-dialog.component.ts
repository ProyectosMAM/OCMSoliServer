import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ISolicitud } from 'app/shared/model/solicitud.model';
import { SolicitudService } from './solicitud.service';

@Component({
  templateUrl: './solicitud-delete-dialog.component.html'
})
export class SolicitudDeleteDialogComponent {
  solicitud?: ISolicitud;

  constructor(protected solicitudService: SolicitudService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.solicitudService.delete(id).subscribe(() => {
      this.eventManager.broadcast('solicitudListModification');
      this.activeModal.close();
    });
  }
}
