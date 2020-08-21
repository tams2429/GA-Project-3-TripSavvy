module.exports = [
  {
    name: "Vienna",
    hasNightLife: true,
    hasCulture: true,
    isHot: false,
    isSnow: true,
    isOutdoors: true,
    showCardInfo: {
      img: "",
      description: "",
      // //* To include within cities schema and populated through seeds
      // userWishListed: {type: mongoose.Schema.ObjectId, ref: 'User'},
      // userFavorited: {type: mongoose.Schema.ObjectId, ref: 'User'},
      // userReviews: {type: mongoose.Schema.ObjectId, ref: 'User'}
    }
  }
]