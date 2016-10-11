import Seeder from './Seeder'
import Model from '../app/User/Model'

export default class UserSeeder extends Seeder {
    run() {
        let users = []

        for(let i = 0; i < 25; i++) {
            users.push({
                name: this._faker.name.findName(),
                email: this._faker.internet.email(),
                phone: this._faker.phone.phoneNumber(),
                age: this._faker.random.number()
            })
        }

        return Model.collection.insert(users)
    }
}