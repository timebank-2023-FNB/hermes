import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { BankService } from "./bank.service";
import TransactionDto from "./dto/transaction.dto";

@Controller("/bank")
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Post("/pay-id")
  async registerPayId() {
    const payId = await this.bankService.registerPayApp();
    return { data: payId };
  }
  @Post("/:pay-id/account/issue")
  async getAccount(@Param("payId") payId: string) {
    return { data: this.bankService.issueAccount(payId) };
  }

  @Get("/:payId/account/:bankAccount")
  async getBalance(
    @Param("payId") payId: string,
    @Param("bankAccount") bankAccount: string,
  ) {
    return { data: this.bankService.getBalance(payId, bankAccount) };
  }

  @Post("/:payId/transfer")
  async transfer(
    @Param("payId") payId: string,
    @Body() transactionDto: TransactionDto,
  ) {
    return { data: this.bankService.transfer(payId, transactionDto) };
  }
}
