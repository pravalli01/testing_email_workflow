import { Test, TestingModule } from '@nestjs/testing';
import { SudentLoginController } from './studentlogin.controller';
import { StudentService } from './studentlogin.service';

describe('StudentloginController', () => {
  let controller: SudentLoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SudentLoginController],
      providers: [StudentService],
    }).compile();

    controller = module.get<SudentLoginController>(SudentLoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
