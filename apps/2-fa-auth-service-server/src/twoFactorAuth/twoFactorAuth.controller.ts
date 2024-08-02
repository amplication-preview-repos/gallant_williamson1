import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TwoFactorAuthService } from "./twoFactorAuth.service";
import { TwoFactorAuthControllerBase } from "./base/twoFactorAuth.controller.base";

@swagger.ApiTags("twoFactorAuths")
@common.Controller("twoFactorAuths")
export class TwoFactorAuthController extends TwoFactorAuthControllerBase {
  constructor(protected readonly service: TwoFactorAuthService) {
    super(service);
  }
}
