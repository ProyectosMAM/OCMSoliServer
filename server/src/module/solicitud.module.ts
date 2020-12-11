import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitudController } from '../web/rest/solicitud.controller';
import { SolicitudRepository } from '../repository/solicitud.repository';
import { SolicitudService } from '../service/solicitud.service';

@Module({
  imports: [TypeOrmModule.forFeature([SolicitudRepository])],
  controllers: [SolicitudController],
  providers: [SolicitudService],
  exports: [SolicitudService]
})
export class SolicitudModule {}
