import { Controller, Post, Body, Param } from "@nestjs/common";
import { BankService } from "./bank.service";
import { CreateAccountRequestDto } from "./dto/create-account-request.dto";
import { AccountIssueResponseDto } from "./dto/account-issue-response.dto";

@Controller("bank")
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Post(":payId/account/issue")
  async createAccount(
    @Param("payId") payId: string,
    @Body() createAccountDto: CreateAccountRequestDto,
  ): Promise<AccountIssueResponseDto> {
    // 계좌 생성 로직 구현
    // const account = await this.bankService.createAccount(
    //   payId,
    //   createAccountDto,
    // );

    // 생성된 계좌 정보를 반환
    return account;
  }
}
