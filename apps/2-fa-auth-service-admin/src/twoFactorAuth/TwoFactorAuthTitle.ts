import { TwoFactorAuth as TTwoFactorAuth } from "../api/twoFactorAuth/TwoFactorAuth";

export const TWOFACTORAUTH_TITLE_FIELD = "id";

export const TwoFactorAuthTitle = (record: TTwoFactorAuth): string => {
  return record.id?.toString() || String(record.id);
};
