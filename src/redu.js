#!/usr/bin/env node

import program from 'commander'
import { container } from 'needlepoint'
import Kernel from './compiled/app/Console/Kernel'

let { resolve } = container

for(let command of resolve(Kernel).commands()) {
    resolve(command).run(program)
}

program.parse(process.argv)