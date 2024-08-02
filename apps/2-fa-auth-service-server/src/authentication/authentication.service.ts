import { Injectable } from "@nestjs/common";
import { UserResponse } from "./UserResponse";
import { LoginInput } from "./LoginInput";
import { SignupInput } from "./SignupInput";
import { TwoFactorAuthInput } from "./TwoFactorAuthInput";
import { TwoFactorAuth } from "../twoFactorAuth/base/TwoFactorAuth";
import { VerifyEmailInput } from "./VerifyEmailInput";

@Injectable()
export class AuthenticationService {
  constructor() {}
  async Dashboard(args: string): Promise<UserResponse> {
    throw new Error("Not implemented");
  }
  async Login(args: LoginInput): Promise<UserResponse> {
    throw new Error("Not implemented");
  }
  async Signup(args: SignupInput): Promise<UserResponse> {
    throw new Error("Not implemented");
  }
  async TwoFactorAuth(args: TwoFactorAuthInput): Promise<UserResponse> {
    throw new Error("Not implemented");
  }
  async VerifyEmail(args: VerifyEmailInput): Promise<UserResponse> {
    throw new Error("Not implemented");
  }
}
