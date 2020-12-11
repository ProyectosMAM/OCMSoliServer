import { EntityRepository, Repository } from 'typeorm';
import Solicitud from '../domain/solicitud.entity';

@EntityRepository(Solicitud)
export class SolicitudRepository extends Repository<Solicitud> {}
