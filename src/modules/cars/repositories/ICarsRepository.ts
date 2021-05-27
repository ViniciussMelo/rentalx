import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { IListCarAvailableDTO } from "../dtos/IListCarAvailableDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car>;
  findAvailable({
    brand,
    category_id,
    name,
  }: IListCarAvailableDTO): Promise<Car[]>;
  findById(id: string): Promise<Car>;
}

export { ICarsRepository };
