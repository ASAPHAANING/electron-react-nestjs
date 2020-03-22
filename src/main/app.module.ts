import { Module } from '@nestjs/common';
import { ElectronModule } from './electron/electron.module';

@Module({
    imports: [ElectronModule]
})
export class AppModule {}
