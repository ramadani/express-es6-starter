import SeedCommand from './Commands/SeedCommand'

export default class Kernel {
    constructor() {
        this._commands = [
            SeedCommand
        ]
    }

    commands() {
        return this._commands
    }
}