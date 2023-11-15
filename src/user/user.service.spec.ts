import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "./user.service";
import { User } from "./schema/user.schema";
import { getModelToken } from "@nestjs/mongoose";
import { Model } from "mongoose";

describe("UserService", () => {
  let service: UserService;
  let userModelMock: Partial<Model<User>>;

  beforeEach(async () => {
    userModelMock = {
      findOne: jest.fn().mockResolvedValue({ uid: "some-uid" }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken(User.name),
          useValue: userModelMock,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  //   describe('createUser', () => {
  //     it('should create a user and return its uid', async () => {
  //       jest.spyOn(userModelMock, 'save').mockImplementationOnce(async () => {});
  //       const uid = await service.createUser();
  //       expect(uid).toBeDefined();
  //       expect(typeof uid).toBe('string');
  //     });
  //   });

  //   describe('getUser', () => {
  //     it('should return a user object if it exists', async () => {
  //       const testUid = 'test-uid';
  //       jest.spyOn(userModelMock, 'findOne').mockResolvedValueOnce({ uid: testUid, ... });
  //       const user = await service.getUser(testUid);
  //       expect(user).toBeDefined();
  //       expect(user.uid).toBe(testUid);
  //     });
  //   });
});
