// src/guards/hmac.guard.ts

import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common";
import * as crypto from "crypto";

@Injectable()
export class HmacGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const secretKey = "your-secret-key"; // 여기에 비밀키를 넣으세요
    const receivedHmac = request.headers["x-hmac-auth"];

    const hmac = crypto
      .createHmac("sha256", secretKey)
      .update(JSON.stringify(request.body))
      .digest("hex");

    if (receivedHmac !== hmac) {
      throw new UnauthorizedException("Invalid HMAC");
    }

    return true;
  }
}
