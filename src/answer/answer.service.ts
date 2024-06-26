import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Answer } from './entities/answer.entity';
import { UpdateAnswerDto } from './dto/update-answer.dto';

@Injectable()
export class AnswerService {
  constructor(
    @InjectModel(Answer)
    private answerModel: typeof Answer,
  ) {}

  create(createAnswerInput: {
    questionId: string;
    answer: string;
    candidateId: string;
  }) {
    return this.answerModel.create(createAnswerInput);
  }

  findOne(payload = {}, options = {}) {
    return this.answerModel.findOne({
      where: payload,
      ...options,
    });
  }

  findAll(payload = {}, options = {}) {
    return this.answerModel.findAll({
      where: payload,
      ...options,
    });
  }

  async delete(condition = {}) {
    return this.answerModel.destroy({
      where: condition,
    });
  }

  async findAndCountAll(payload = {}, options = {}) {
    const { count, rows } = await this.answerModel.findAndCountAll({
      where: payload,
      ...options,
    });

    return { total: count, rows };
  }

  async update(condition = {}, payload: UpdateAnswerDto, options = {}) {
    return this.answerModel.update(payload, {
      where: condition,
      ...options,
      returning: true,
    });
  }

  findAllByCandidate(candidateId: string): Promise<Answer[]> {
    return this.answerModel.findAll({
      where: { candidateId },
    });
  }
}
