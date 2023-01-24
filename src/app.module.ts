import { Module } from '@nestjs/common';
import { ModulesModule } from './modules/modules.module';
import { VeiculosModule } from './veiculos/veiculos.module';

@Module({
  imports: [ModulesModule, VeiculosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
