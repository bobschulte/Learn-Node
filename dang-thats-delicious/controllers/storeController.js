const mongoose = require('mongoose')
const Store = mongoose.model('Store')

exports.homePage = (req, res) => {
    res.render('index')
}

exports.addStore = (req, res) => {
    res.render('editStore', { title: 'Add Store' })
}

exports.createStore = async (req, res) => {
    const store = await (new Store(req.body)).save()
    req.flash('success', `Successfully created ${store.name}. Care to leave a review?`)
    res.redirect(`/store/${store.slug}`)
}

exports.getStores = async (req, res) => {
    // Query the db for a list of all stores
    const stores = await Store.find()
    res.render('stores', { title: 'Stores', stores })
}

exports.editStore = async (req, res) => {
    // Find the store given the ID that was inputted
    const store = await Store.findOne({ _id: req.params.id })
    // Confirm that the user is the owner of the store
    
    // Render out the edit form so the user can update their store
    res.render('editStore', { title: `Edit ${store.name}`, store })
}

exports.updateStore = async (req, res) => {
    // Find and update the store
    const store = await Store.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true, // return the new store instead of the old one
        runValidators: true
    }).exec()
    req.flash('success', `Successfully updated <strong>${store.name}</strong>. <a href="/store/${store.slug}">View Store</a>`)
    // Redirect them to the store and tell them it worked
    res.redirect(`/stores/${store._id}/edit`)
}