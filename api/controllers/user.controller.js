const User = require('../models/user.model.js');

// Create and Save a new user
exports.create = (req, res) => {
    // Validate User
    if(!req.body.name && !req.body.email) {
        return res.status(400).send({
            message: "User content cannot be empty"
        })
    }

    // Create User
    const user = new User({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        phone: req.body.phone
    })
    user.save()
    .then(response => {
        res.send(response)
    })
    .catch(error => {
        res.status(500).send({
            message: error.message || "error occurred while creating the user"
        })
    })
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    console.log("yes here")
    User.find()
    .then(users => {
        res.send(users);
    })
    .catch(error => {
        res.status(500).send({
            message: error.message || "Error retrieving all the users!"
        })
    })
};

// Find a single user with a userId
exports.findOne = (req, res) => {
    User.findById(req.params.userId)
    .then(user => {
        res.send(user)
    })
    .catch(error => {
        res.status(500).send({
            message: error.message || "Error while getting user detail"
        })
    })
};

// Update a user identified by the userId in the request
exports.update = (req, res) => {

    if(!req.body.name && !req.body.email) {
        return res.status(400).send({
            message: "User content cannot be empty"
        })
    }
    User.findByIdAndUpdate(req.params.userId, {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        phone: req.body.phone
    }, {new: true})
    .then(modifiedUser => {
        if(!modifiedUser) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send(modifiedUser);
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error updating User with id " + req.params.userId
        });
    });
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });
        }
        res.send({message: "user deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
        });
    });
};