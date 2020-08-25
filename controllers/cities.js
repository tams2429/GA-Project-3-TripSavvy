const City = require('../models/city')
const { notFound, unauthorized } = require('../lib/errorMessage')

async function citiesIndex(req, res, next) {
  try {
    const cities = await City.find().populate('user').populate('wishlistedUsers').populate('favouritedUsers')
    if (!cities) throw new Error(notFound)
    res.status(200).json(cities)
  } catch (err) {
    next(err) 
  }

}

async function citiesShow(req, res, next) {
  try {
    const city = await City.findById(req.params.id).populate('user')
    if (!city) throw new Error(notFound)
    res.status(200).json(city)
  } catch (err) {
    next(err)
  }
}

async function citiesCreate(req, res, next) {
  try {
    req.body.user = req.currentUser._id
    const createdCity = await City.create(req.body)
    res.status(201).json(createdCity)
  } catch (err) {
    next(err)
  }
}

async function citiesDelete(req, res, next) {
  try {
    const cityToDelete =  await City.findById(req.params.id) 
    if (!cityToDelete) throw new Error(notFound) 
    if (!cityToDelete.user.equals(req.currentUser._id)) throw new Error(unauthorized) 
    await cityToDelete.remove() 
    res.sendStatus(204) 
  } catch (err) {
    next(err)
  }
}

async function citiesEdit(req, res, next) {
  try {
    const cityToBeEdited = await City.findById(req.params.id) 
    if (!cityToBeEdited) throw new Error(notFound)
    if (!cityToBeEdited.user.equals(req.currentUser._id)) throw new Error(unauthorized) 
    Object.assign(cityToBeEdited, req.body) 
    await cityToBeEdited.save() 
    res.status(202).json(cityToBeEdited) 
  } catch (err) {
    next(err)
  }
}

async function citiesCommentCreate(req, res, next) {
  try {
    const city = await City.findById(req.params.id)
    if (!city) throw new Error(notFound)
    const commentBody = req.body
    console.log('Comment Body:', commentBody)
    commentBody.user = req.currentUser._id
    city.comments.push(commentBody)
    await city.save()
    res.status(201).json(city)
  } catch (err) {
    next(err)
  }
}

async function citiesCommentDelete(req, res, next) {
  try {
    const city = await City.findById(req.params.id)
    if (!city) throw new Error(notFound)
    const commentToDelete = city.comments.id(req.params.commentId)
    console.log('commentToDelete:', commentToDelete)
    if (!commentToDelete) throw new Error(notFound)
    if (!commentToDelete.user.equals(req.currentUser._id)) throw new Error(unauthorized)
    await commentToDelete.remove()
    await city.save()
    res.status(202).json(city)
  } catch (err) {
    next(err)
  }
}

async function addWishlistCity (req, res, next) {
  try {
    const city = await City.findById(req.params.id).populate('wishlistedUsers')
    if (!city) throw new Error(notFound)
    city.wishlistedUsers.push(req.currentUser._id) // <-- * just get this person from the token, no need for a body
    console.log(city)
    await city.save()
    res.status(201).json(city)
  } catch (err) {
    next(err)
  }
}

async function deleteWishlistCity (req, res, next) {
  try {
    const city = await City.findById(req.params.id).populate('wishlistedUsers')
    if (!city) throw new Error(notFound)
    
    const wishlistedUsersArray = city.wishlistedUsers
    console.log('wishlistedUsersArray', wishlistedUsersArray)

    let wishIndex = ''
    for (let i = 0; i < wishlistedUsersArray.length; i++) {
      if (wishlistedUsersArray[i]._id.equals(req.currentUser._id)) {
        wishIndex = i
      }
    }
    console.log('wish index', wishIndex)
  
    await city.wishlistedUsers[wishIndex].remove()

    await city.save()
    res.status(201).json(city)
  } catch (err) {
    next(err)
  }
}


//favourite city

async function addFavoriteCity (req, res, next) {
  try {
    const city = await City.findById(req.params.id).populate('favouritedUsers')
    if (!city) throw new Error(notFound)
    city.favouritedUsers.push(req.currentUser._id) // <-- * just get this person from the token, no need for a body
    console.log(city)
    await city.save()
    res.status(201).json(city)
  } catch (err) {
    next(err)
  }
}



module.exports = {
  index: citiesIndex,
  show: citiesShow,
  create: citiesCreate,
  delete: citiesDelete,
  edit: citiesEdit,
  commentCreate: citiesCommentCreate,
  commentDelete: citiesCommentDelete,
  addToWishList: addWishlistCity,
  deleteFromWishList: deleteWishlistCity,
  addFavoriteCity: addFavoriteCity
}
