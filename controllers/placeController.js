const Place = require("../models/Place")

const GetPlaces = async (req, res) => {
  try {
    const places = await Place.find({})
    res.send(places)
  } catch (error) {
    throw error
  }
}

const GetPlaceId = async (req, res) => {
  try {
    const place = await Place.findById(req.params.placeId)
    res.send(place)
  } catch (error) {
    throw error
  }
}

const CreatePlace = async (req, res) => {
  try {
    const place = await Place.create({ ...req.body })
    res.send(place)
  } catch (error) {
    throw error
  }
}

const UpdatePlace = async (req, res) => {
  try {
    const place = await Place.findByIdAndUpdate(req.params.placeId, req.body, {
      new: true,
    })
    res.send(place)
  } catch (error) {
    throw error
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
    throw error
  }
}

module.exports = {
  GetPlaces,
  GetPlaceId,
  CreatePlace,
  UpdatePlace,
  DeletePlace,
}
