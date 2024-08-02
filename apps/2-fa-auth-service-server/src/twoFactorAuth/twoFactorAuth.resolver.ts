import * as graphql from "@nestjs/graphql";
import { TwoFactorAuthResolverBase } from "./base/twoFactorAuth.resolver.base";
import { TwoFactorAuth } from "./base/TwoFactorAuth";
import { TwoFactorAuthService } from "./twoFactorAuth.service";

@graphql.Resolver(() => TwoFactorAuth)
export class TwoFactorAuthResolver extends TwoFactorAuthResolverBase {
  constructor(protected readonly service: TwoFactorAuthService) {
    super(service);
  }
}
