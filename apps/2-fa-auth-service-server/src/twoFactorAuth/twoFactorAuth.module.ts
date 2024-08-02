import { Module } from "@nestjs/common";
import { TwoFactorAuthModuleBase } from "./base/twoFactorAuth.module.base";
import { TwoFactorAuthService } from "./twoFactorAuth.service";
import { TwoFactorAuthController } from "./twoFactorAuth.controller";
import { TwoFactorAuthResolver } from "./twoFactorAuth.resolver";

@Module({
  imports: [TwoFactorAuthModuleBase],
  controllers: [TwoFactorAuthController],
  providers: [TwoFactorAuthService, TwoFactorAuthResolver],
  exports: [TwoFactorAuthService],
})
export class TwoFactorAuthModule {}
