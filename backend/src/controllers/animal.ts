import { BadRequestError, Controller, Get } from 'routing-controllers';
import { AnimalAttributes, AnimalModel } from "../models/animal";

@Controller('/api/animal')
export class AnimalController {
  @Get('/')
  async getAll(): Promise<AnimalAttributes[]> {
    const animals = await AnimalModel.findAll();
    return animals.map(v => v.get());
  }

  // example of how errors will be caught and handled by middleware with the appropriate status code and message
  @Get('/error')
  async get(): Promise<void> {
    throw new BadRequestError("Example error")
  }
}

export default new AnimalController();
