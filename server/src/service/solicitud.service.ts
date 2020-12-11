import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import Solicitud from '../domain/solicitud.entity';
import { SolicitudRepository } from '../repository/solicitud.repository';

const relationshipNames = [];

@Injectable()
export class SolicitudService {
  logger = new Logger('SolicitudService');

  constructor(@InjectRepository(SolicitudRepository) private solicitudRepository: SolicitudRepository) {}

  async findById(id: string): Promise<Solicitud | undefined> {
    const options = { relations: relationshipNames };
    return await this.solicitudRepository.findOne(id, options);
  }

  async findByfields(options: FindOneOptions<Solicitud>): Promise<Solicitud | undefined> {
    return await this.solicitudRepository.findOne(options);
  }

  async findAndCount(options: FindManyOptions<Solicitud>): Promise<[Solicitud[], number]> {
    options.relations = relationshipNames;
    return await this.solicitudRepository.findAndCount(options);
  }

  async save(solicitud: Solicitud): Promise<Solicitud | undefined> {
    return await this.solicitudRepository.save(solicitud);
  }

  async update(solicitud: Solicitud): Promise<Solicitud | undefined> {
    return await this.save(solicitud);
  }

  async delete(solicitud: Solicitud): Promise<Solicitud | undefined> {
    return await this.solicitudRepository.remove(solicitud);
  }
}
