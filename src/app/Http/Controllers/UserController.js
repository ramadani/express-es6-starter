import 'babel-polyfill'
import { container } from 'needlepoint'
import Repository from '../../User/Repository'

const repository = container.resolve(Repository)

export default {
    async index(req, res) {
        try {
            let users = await repository.all()

            res.json(users)
        } catch(err) {
            return res.status(500)
        }
    },

    create(req, res) {
        res.send('User create page')
    }
}