module.exports = class Prefix {
    constructor () {
        this.prefix = '_b8aE-'; // random
        this.level = {
            atoms: 'at-',
            molecules: 'mo-',
            templates: 'te-'
        };
    }

    getPrefix(type) {
        if (type) {
            return `${this.prefix}${this.level[type]}`;
        }
        return this.prefix;
    }
}
