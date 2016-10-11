import dbConfig from './database'

export default {
    'uri'     : `${ dbConfig.driver }://${ dbConfig.host }:${ dbConfig.port }/${ dbConfig.database }`
}