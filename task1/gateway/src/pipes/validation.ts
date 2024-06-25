import { plainToClass } from '@nestjs/class-transformer';
import { validate } from '@nestjs/class-validator';
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { ValidationException } from 'src/exceptions/validationException';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    const obj = plainToClass(metadata.metatype, value);
    const errors = await validate(obj);

    if (errors.length) {
      const messages = errors.map((err) => {
        return `${Object.values(err.constraints).join(', ')}`;
      });

      throw new ValidationException(messages);
    }

    return value;
  }
}
