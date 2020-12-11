/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base/base.entity';

import { validate, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from 'class-validator';

/**
 * A Solicitud.
 */
@Entity('solicitud')
export default class Solicitud extends BaseEntity {
  @Column({ name: 'descripcion' })
  descripcion: string;

  @Column({ type: 'date', name: 'fecha_solicitud' })
  fechaSolicitud: any;

  @Column({ type: 'date', name: 'fecha_respuesta', nullable: true })
  fechaRespuesta: any;

  // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
