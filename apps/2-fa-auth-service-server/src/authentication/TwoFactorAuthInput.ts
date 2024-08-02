import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class TwoFactorAuthInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    userId!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    temporaryToken!: string;

    @Field(() => Date)
    @Type(() => Date)
    expiry!: Date;
}

export { TwoFactorAuthInput as TwoFactorAuthInput };