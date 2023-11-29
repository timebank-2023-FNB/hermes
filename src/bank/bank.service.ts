import { Injectable } from "@nestjs/common";
import TransactionDto from "./dto/transaction.dto";
import axios from "axios";
import { API_BANK } from "src/config";

@Injectable()
export class BankService {
  private constructor() {}

  async registerPayApp() {
    const response = await axios.post(`${API_BANK}/mock/pay/register`, {});
    console.log(response);
    return "123123";
  }
  async issueAccount(payId: string) {
    const response = await axios.post(`${API_BANK}/mock/issue/account`, {
      payId,
    });
    console.log(response);
    return "z0ajfm239";
  }
  async getBalance(payId: string, bankAccount: string) {
    const response = await axios.post(`${API_BANK}/mock/balance`, {
      payId,
      bankAccount,
    });
    console.log(response);
    return 10000;
  }

  async transfer(payId: string, transaction: TransactionDto) {
    const response = await axios.post(`${API_BANK}/mock/balance`, {
      ...transaction,
      payId,
    });
    console.log(response);
    return true;
  }
}
