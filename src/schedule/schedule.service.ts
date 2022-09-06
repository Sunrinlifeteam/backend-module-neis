import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ScheduleService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
}
