import BaseRepository from '../Repositories/Repository'
import Model from './Model'

export default class Repository extends BaseRepository {
    async all() {
        try {
            return await Model.find()
        } catch(err) {
            return err
        }
    }
}