import { Injectable } from "@nestjs/common";
// import axios from "axios";
// import TransactionDto from "./dto/transaction.dto";
import { EventService } from "src/event/event.service";

@Injectable()
export class BankService {
  private constructor(private readonly eventService: EventService) {}

  //   async transfer(dto: TransactionDto) {
  //     const bankRes = await axios.post("bank.com", dto);
  //   }
}
