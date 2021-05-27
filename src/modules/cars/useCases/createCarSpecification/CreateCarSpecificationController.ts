import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarSpeciticationUseCase } from "./CreateCarSpeciticationUseCase";

class CreateCarSpeciticationController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { specifications_id } = request.body;

    const createCarSpeciticationUseCase = container.resolve(
      CreateCarSpeciticationUseCase
    );

    const car = await createCarSpeciticationUseCase.execute({
      car_id: id,
      specifications_id,
    });

    return response.json(car);
  }
}

export { CreateCarSpeciticationController };
