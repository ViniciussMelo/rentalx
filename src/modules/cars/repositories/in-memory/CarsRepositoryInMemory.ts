import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { IListCarAvailableDTO } from "@modules/cars/dtos/IListCarAvailableDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    id,
    brand,
    category_id,
    fine_amount,
    license_plate,
    daily_rate,
    description,
    name,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      id,
      brand,
      category_id,
      fine_amount,
      license_plate,
      daily_rate,
      description,
      name,
    });

    this.cars.push(car);

    return car;
  }

  async findByLicensePlate(license_pate: string): Promise<Car> {
    return this.cars.find((car) => car.license_plate === license_pate);
  }

  async findAvailable({
    brand,
    category_id,
    name,
  }: IListCarAvailableDTO): Promise<Car[]> {
    return this.cars.filter((car) => {
      if (
        car.available === true ||
        (brand && car.brand === brand) ||
        (category_id && car.category_id === category_id) ||
        (name && car.name === name)
      ) {
        return car;
      }
      return null;
    });
  }

  async findById(id: string): Promise<Car> {
    return this.cars.find((car) => car.id === id);
  }
}

export { CarsRepositoryInMemory };
