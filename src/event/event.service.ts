import { Injectable } from "@nestjs/common";
import { Subject } from "rxjs";
import TransactionDto from "src/bank/dto/transaction.dto";

@Injectable()
export class EventService {
  private events = new Subject();

  addEvent(event: TransactionDto) {
    this.events.next(event);
  }

  sendEvents() {
    return this.events.asObservable();
  }
}
