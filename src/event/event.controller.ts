import { Sse } from "@nestjs/common";
import { TransactionEvent } from "./dto/transaction.dto";
import { Observable, of } from "rxjs";

export class EventController {
  @Sse("/transaction")
  onTransaction(transaction: TransactionEvent): Observable<TransactionEvent> {
    return of(transaction);
  }
}
