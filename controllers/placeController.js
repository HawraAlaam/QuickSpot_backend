const Place = require("../models/Place")

const GetPlaces = async (req, res) => {
  try {
    const places = await Place.find({})
    res.send(places)
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: "Error",
      msg: "An error has occurred while getting the places!",
    })
  }
}

const GetPlaceId = async (req, res) => {
  try {
    const place = await Place.findById(req.params.placeId)
    res.send(place)
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: "Error",
      msg: "An error has occurred while getting the place!",
    })
  }
}

const CreatePlace = async (req, res) => {
  try {
    //Adding pictures
    let placeImages = []

    if (req.files) {
      placeImages = req.files.map((file) => `/uploads/${file.filename}`)
    }

    const place = await Place.create({ ...req.body, images: placeImages })
    res.send(place)
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: "Error",
      msg: "An error has occurred while creating the place!",
    })
  }
}

const UpdatePlace = async (req, res) => {
  try {
    if (req.file) {
      req.body.images = `/uploads/${req.file.filename}`
    }
    const place = await Place.findByIdAndUpdate(req.params.placeId, req.body, {
      new: true,
    })
    res.send(place)
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: "Error",
      msg: "An error has occurred while updating the place!",
    })
  }
}

const DeletePlace = async (req, res) => {
  try {
    await Place.deleteOne({ _id: req.params.placeId })
    res.send({
      msg: "Place Deleted",
      payload: req.params.placeId,
      status: "Ok",
    })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: "Error",
      msg: "An error has occurred while deleting the place!",
    })
  }
}

module.exports = {
  GetPlaces,
  GetPlaceId,
  CreatePlace,
  UpdatePlace,
  DeletePlace,
}
