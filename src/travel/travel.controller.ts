
import {
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe
} from '@nestjs/common';

import { TravelService } from './travel.service';

@Controller('travel')
export class TravelController {

  constructor(private readonly travelService: TravelService) {}

  // POST /travel
  @Post()
  create(): string {
    return this.travelService.planifierVoyage();
  }

  // GET /travel
  @Get()
  findAll() {
    return this.travelService.findAll();
  }

  // GET /travel/:id
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.travelService.findOne(id);
  }

}
