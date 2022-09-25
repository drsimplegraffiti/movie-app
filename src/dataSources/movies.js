import { MongoDataSource } from 'apollo-datasource-mongodb';

export default class Movies extends MongoDataSource {
  async getMovies() {
    return await this.model.find();
  }

  async getMovie(id) {
    return await this.findOneById(id);
  }

  async createMovie({ title, rating, year }) {
    return await this.model.create({ title, rating, year });
  }

    async updateMovie(id, title, rating, year) {
        return await this.model.findByIdAndUpdate(id, { title, rating, year }, { new: true });
    }

    async deleteMovie(id) {
        return await this.model.findByIdAndDelete(id);
    }

    
}
