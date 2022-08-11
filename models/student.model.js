var mongoose = require('mongoose');
const schema = mongoose.Schema;

let studentSchema = new schema({
    firstName : {
        type: String
    },
    lastName: {
        type: String
    },
    address: {
        type: String
    },
    emailAddress: {
        type: String
    },
    age: {
        type: Number
    }
},
{
    collection: 'student'
}
)

module.exports = mongoose.model('studentSchema', studentSchema);