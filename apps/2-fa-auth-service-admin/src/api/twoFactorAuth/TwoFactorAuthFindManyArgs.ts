import { TwoFactorAuthWhereInput } from "./TwoFactorAuthWhereInput";
import { TwoFactorAuthOrderByInput } from "./TwoFactorAuthOrderByInput";

export type TwoFactorAuthFindManyArgs = {
  where?: TwoFactorAuthWhereInput;
  orderBy?: Array<TwoFactorAuthOrderByInput>;
  skip?: number;
  take?: number;
};
