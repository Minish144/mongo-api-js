const MongoClient = require("mongodb").MongoClient;

class MongoMethods {
    async init(link, db, collection) {
        this.client = new MongoClient(link, {useUnifiedTopology: true});
        await this.client.connect();
        this.users = this.client.db(db).collection(collection)
    }

    async addUser(user) {
       this.users.insertOne(user);
    }

    async deleteUser(id) {
        const userIndex = this.users.findIndex(user => user.id === id);
        this.users.splice(userIndex, 1);
    }

    async updateUser(user) {
        const userIndex = this.users.findIndex(user => user.id === id);
        this.users[userIndex] = user;
    }

    async getUser(id) {
        const user = this.users.findOne({_id: id});
        return user;
    }
}

module.exports = MongoMethods;
