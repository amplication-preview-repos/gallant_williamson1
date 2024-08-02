import * as graphql from "@nestjs/graphql";
import { UserResponse } from "./UserResponse";
import { LoginInput } from "./LoginInput";
import { SignupInput } from "./SignupInput";
import { TwoFactorAuthInput } from "./TwoFactorAuthInput";
import { TwoFactorAuth } from "../twoFactorAuth/base/TwoFactorAuth";
import { VerifyEmailInput } from "./VerifyEmailInput";
import { AuthenticationService } from "./authentication.service";

export class AuthenticationResolver {
  constructor(protected readonly service: AuthenticationService) {}

  @graphql.Query(() => UserResponse)
  async Dashboard(
    @graphql.Args("args")
    args: string
  ): Promise<UserResponse> {
    return this.service.Dashboard(args);
  }

  @graphql.Mutation(() => UserResponse)
  async Login(
    @graphql.Args()
    args: LoginInput
  ): Promise<UserResponse> {
    return this.service.Login(args);
  }

  @graphql.Mutation(() => UserResponse)
  async Signup(
    @graphql.Args()
    args: SignupInput
  ): Promise<UserResponse> {
    return this.service.Signup(args);
  }

  @graphql.Mutation(() => UserResponse)
  async TwoFactorAuth(
    @graphql.Args()
    args: TwoFactorAuthInput
  ): Promise<UserResponse> {
    return this.service.TwoFactorAuth(args);
  }

  @graphql.Mutation(() => UserResponse)
  async VerifyEmail(
    @graphql.Args()
    args: VerifyEmailInput
  ): Promise<UserResponse> {
    return this.service.VerifyEmail(args);
  }
}
