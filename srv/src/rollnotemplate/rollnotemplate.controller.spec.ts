import { Test, TestingModule } from '@nestjs/testing';
import { RollnotemplateController } from './rollnotemplate.controller';
import { RollnotemplateService } from './rollnotemplate.service';

describe('RollnotemplateController', () => {
  let controller: RollnotemplateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RollnotemplateController],
      providers: [RollnotemplateService],
    }).compile();

    controller = module.get<RollnotemplateController>(RollnotemplateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
