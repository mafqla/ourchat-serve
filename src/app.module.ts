import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './modules/user/user.module'
import { ChatModule } from './modules/chat/chat.module'
import { FriendModule } from './modules/friend/friend.module'
import { GroupModule } from './modules/group/group.module'
import { AuthModule } from './modules/auth/auth.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'ourchat',
      //自动加载实体
      autoLoadEntities: true,
      synchronize: true
    }),
    UserModule,
    ChatModule,
    FriendModule,
    GroupModule,
    AuthModule
  ]
})
export class AppModule {}
