import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TwoFactorAuthServiceBase } from "./base/twoFactorAuth.service.base";

@Injectable()
export class TwoFactorAuthService extends TwoFactorAuthServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
