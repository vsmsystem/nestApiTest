import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';

@Injectable()
export class VeiculosService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateVeiculoDto) {
    // const inserirTeste = await this.prisma.veiculos.create({
    //   data
    // })
    // return inserirTeste;
  }

  async findAll() {
    return this.prisma.veiculos.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} veiculo`;
  }

  update(id: number, updateVeiculoDto: UpdateVeiculoDto) {
    return `This action updates a #${id} veiculo`;
  }

  remove(id: number) {
    return `This action removes a #${id} veiculo`;
  }
}
