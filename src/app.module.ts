/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { DogsModule } from './dogs/dogs.module';
@Module({
  imports: [CatsModule, DogsModule],
})


export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cats', method: RequestMethod.GET});
  }
}




// forRoutes({
//   path: 'abcd/*splat',
//   method: RequestMethod.ALL,
// });
