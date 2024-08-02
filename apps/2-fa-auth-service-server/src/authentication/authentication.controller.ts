import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthenticationService } from "./authentication.service";
import { VerifyEmailInput } from "./VerifyEmailInput";
import { UserResponse } from "./UserResponse";
import { TwoFactorAuth } from "../twoFactorAuth/base/TwoFactorAuth";

@swagger.ApiTags("authentications")
@common.Controller("authentications")
export class AuthenticationController {
  constructor(protected readonly service: AuthenticationService) {}

  @common.Get("/dashboard")
  @swagger.ApiOkResponse({
    type: UserResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Dashboard(
    @common.Body()
    body: VerifyEmailInput
  ): Promise<UserResponse> {
        return this.service.Dashboard(body);
      }

  @common.Post("/login")
  @swagger.ApiOkResponse({
    type: UserResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Login(
    @common.Body()
    body: VerifyEmailInput
  ): Promise<UserResponse> {
        return this.service.Login(body);
      }

  @common.Post("/signup")
  @swagger.ApiOkResponse({
    type: UserResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Signup(
    @common.Body()
    body: VerifyEmailInput
  ): Promise<UserResponse> {
        return this.service.Signup(body);
      }

  @common.Post("/2fa")
  @swagger.ApiOkResponse({
    type: UserResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TwoFactorAuth(
    @common.Body()
    body: VerifyEmailInput
  ): Promise<UserResponse> {
        return this.service.TwoFactorAuth(body);
      }

  @common.Post("/verify-email")
  @swagger.ApiOkResponse({
    type: UserResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async VerifyEmail(
    @common.Body()
    body: VerifyEmailInput
  ): Promise<UserResponse> {
        return this.service.VerifyEmail(body);
      }
}
