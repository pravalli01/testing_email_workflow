import { Test, TestingModule } from '@nestjs/testing';
import { RollnotemplateService } from './rollnotemplate.service';

describe('RollnotemplateService', () => {
  let service: RollnotemplateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RollnotemplateService],
    }).compile();

    service = module.get<RollnotemplateService>(RollnotemplateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
