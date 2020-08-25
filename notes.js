    // const wishlistedUserToDeleteIndex = wishlistedUsersArray.map(user => {
    //   console.log('logging user', user)
    //   if (user._id.equals(req.currentUser._id)) {
    //     const indexToDelete = wishlistedUsersArray.indexOf(user)
    //     console.log(indexToDelete)
    //     console.log(typeof(indexToDelete))
    //     return indexToDelete
    //   } else {
    //     return 
    //   }
    // })
    // console.log('wishlistedUserToDelete', wishlistedUserToDelete)
    // const wishlistedUserToDeleteIndex = wishlistedUsersArray.indexOf(wishlistedUserToDelete)

    // console.log('wishlistedUserToDeleteIndex', wishlistedUserToDeleteIndex)
    // console.log('to delete', city.wishlistedUsers[wishlistedUserToDeleteIndex])
    // await city.wishlistedUsers[wishlistedUserToDeleteIndex].remove()

    // async function addWishlistCity (req, res, next) {
//   try {
//     const city = await City.findById(req.params.id).populate('wishlistedUsers')
//     if (!city) throw new Error(notFound)
//     city.wishlistedUsers.push(req.currentUser._id) // <-- * just get this person from the token, no need for a body
//     console.log(city)
//     await city.save()
//     res.status(201).json(city)
//   } catch (err) {
//     next(err)
//   }
// }

// async function deleteWishlistCity (req, res, next) {
//   try {
//     const city = await City.findById(req.params.id).populate('wishlistedUsers')
//     if (!city) throw new Error(notFound)
    
//     const wishlistedUsersArray = city.wishlistedUsers
//     console.log('wishlistedUsersArray', wishlistedUsersArray)

//     let wishIndex = ''
//     for (let i = 0; i < wishlistedUsersArray.length; i++) {
//       if (wishlistedUsersArray[i]._id.equals(req.currentUser._id)) {
//         wishIndex = i
//       }
//     }
//     console.log('wish index', wishIndex)
  
//     await city.wishlistedUsers[wishIndex].remove()

//     await city.save()
//     res.status(201).json(city)
//   } catch (err) {
//     next(err)
//   }
// }