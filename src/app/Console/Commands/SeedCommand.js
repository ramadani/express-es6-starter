import 'babel-polyfill'
import connection from '../../../bootstrap/database'
import { container, dependencies } from 'needlepoint'
import DatabaseSeeder from '../../../seeds/DatabaseSeeder'

@dependencies(DatabaseSeeder)
export default class SeedCommand {
    constructor(databaseSeeder) {
        connection.open()

        this._databaseSeeder = databaseSeeder
    }

    async _handle(options) {
        for(let seedClass of this._databaseSeeder.seeders()) {
            const seeder = container.resolve(seedClass)
            const seederName = seeder.constructor.name
            const seederSelected = options.class || null

            if(seederSelected) {
                if(seederName == seederSelected) {
                    await seeder.run()
                    console.log(`${ seederName } seeded`)
                }else {
                    console.log(`${ seederSelected } not found`)
                }
            }else {
                await seeder.run()
                console.log(`${ seederName } seeded`)
            }
        }

        connection.close()
    }

    run(program) {
        program
            .command('seed')
            .description('Seed the database with records')
            .option('-c, --class [class]', 'The class name of the root seeder')
            .action((options) => {
                this._handle(options)
            })
    }
}