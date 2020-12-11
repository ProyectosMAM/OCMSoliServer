import { Body, Controller, Delete, Get, Logger, Param, Post as PostMethod, Put, UseGuards, Req, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';
import Solicitud from '../../domain/solicitud.entity';
import { SolicitudService } from '../../service/solicitud.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { HeaderUtil } from '../../client/header-util';
import { LoggingInterceptor } from '../../client/interceptors/logging.interceptor';

@Controller('api/solicituds')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiUseTags('solicituds')
export class SolicitudController {
  logger = new Logger('SolicitudController');

  constructor(private readonly solicitudService: SolicitudService) {}

  @Get('/')
  @Roles(RoleType.USER)
  @ApiResponse({
    status: 200,
    description: 'List all records',
    type: Solicitud
  })
  async getAll(@Req() req: Request): Promise<Solicitud[]> {
    const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
    const [results, count] = await this.solicitudService.findAndCount({
      skip: +pageRequest.page * pageRequest.size,
      take: +pageRequest.size,
      order: pageRequest.sort.asOrder()
    });
    HeaderUtil.addPaginationHeaders(req.res, new Page(results, count, pageRequest));
    return results;
  }

  @Get('/:id')
  @Roles(RoleType.USER)
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Solicitud
  })
  async getOne(@Param('id') id: string): Promise<Solicitud> {
    return await this.solicitudService.findById(id);
  }

  @PostMethod('/')
  @Roles(RoleType.USER)
  @ApiOperation({ title: 'Create solicitud' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: Solicitud
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async post(@Req() req: Request, @Body() solicitud: Solicitud): Promise<Solicitud> {
    const created = await this.solicitudService.save(solicitud);
    HeaderUtil.addEntityCreatedHeaders(req.res, 'Solicitud', created.id);
    return created;
  }

  @Put('/')
  @Roles(RoleType.USER)
  @ApiOperation({ title: 'Update solicitud' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: Solicitud
  })
  async put(@Req() req: Request, @Body() solicitud: Solicitud): Promise<Solicitud> {
    HeaderUtil.addEntityCreatedHeaders(req.res, 'Solicitud', solicitud.id);
    return await this.solicitudService.update(solicitud);
  }

  @Delete('/:id')
  @Roles(RoleType.USER)
  @ApiOperation({ title: 'Delete solicitud' })
  @ApiResponse({
    status: 204,
    description: 'The record has been successfully deleted.'
  })
  async remove(@Req() req: Request, @Param('id') id: string): Promise<Solicitud> {
    HeaderUtil.addEntityDeletedHeaders(req.res, 'Solicitud', id);
    const toDelete = await this.solicitudService.findById(id);
    return await this.solicitudService.delete(toDelete);
  }
}
