import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation, ReservationDocument } from './schemas/reservation.schema';

@Injectable()
export class ReservationService {
  constructor(
    @InjectModel(Reservation.name)
    private reservationModel: Model<ReservationDocument>,
  ) {}

  create(createReservationDto: CreateReservationDto) {
    return this.reservationModel.create(createReservationDto);
  }

  findAll() {
    return this.reservationModel.find();
  }

  update(id: string, updateReservationDto: UpdateReservationDto) {
    return this.reservationModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateReservationDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.reservationModel.deleteOne({
      _id: id,
    });
  }
}
