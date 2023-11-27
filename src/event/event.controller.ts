import { Controller, Sse } from "@nestjs/common";
import { EventService } from "./event.service";

@Controller("transaction")
export class EventController {
  private constructor(private readonly eventService: EventService) {}

  @Sse()
  onTransaction() {
    return this.eventService.sendEvents();
  }
}
