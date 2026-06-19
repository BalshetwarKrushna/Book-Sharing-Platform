import Item from "../models/item.model.js";

import cloudinary from "../config/cloudinary.js";


// ➕ CREATE ITEM

export const createItem = async (req, res) => {

  try {

    const {
      title,
      description,
      category,
      price,
      condition,
      location
    } = req.body;

    let imageUrl = "";

    // IMAGE UPLOAD

    if (req.file) {

      const uploadedImage =
        await new Promise((resolve, reject) => {

          const stream =
            cloudinary.uploader.upload_stream(

              {
                folder: "items"
              },

              (error, result) => {

                if (error) {

                  reject(error);

                } else {

                  resolve(result);

                }

              }

            );

          stream.end(req.file.buffer);

        });

      imageUrl =
        uploadedImage.secure_url;
    }

    // CREATE ITEM

    const item = await Item.create({

      title,

      description,

      category,

      price,

      condition,

      location,

      image: imageUrl,

      ownerId: req.user.id,

      status: "available"

    });

    res.status(201).json({

      success: true,

      item

    });

  } catch (err) {

    console.log(err);

    res.status(500).json({

      success: false,

      message: err.message

    });

  }
};


// 📥 GET ALL ITEMS

export const getItems = async (req, res) => {

  try {

    const {
      category,
      location,
      minPrice,
      maxPrice,
      search,
      page = 1,
      limit = 8
    } = req.query;

    let filter = {
      status: "available"
    };

    // Category filter

    if (category) {

      filter.category = category;

    }

    // Location filter

    if (location) {

      filter.location = {
        $regex: location,
        $options: "i"
      };

    }

    // Price filter

    if (minPrice || maxPrice) {

      filter.price = {};

      if (minPrice) {
        filter.price.$gte = Number(minPrice);
      }

      if (maxPrice) {
        filter.price.$lte = Number(maxPrice);
      }

    }

    // Search filter

    if (search) {

      filter.title = {
        $regex: search,
        $options: "i"
      };

    }

    // Pagination

    const skip =
      (Number(page) - 1) * Number(limit);

    const total =
      await Item.countDocuments(filter);

    const items = await Item.find(filter)

      .populate(
        "ownerId",
        "username location"
      )

      .sort({
        createdAt: -1
      })

      .skip(skip)

      .limit(Number(limit));

    res.status(200).json({
      success: true,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      items
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message
    });

  }
};



// 📄 GET SINGLE ITEM

export const getItemById = async (req, res) => {

  try {

    const item = await Item.findById(
      req.params.id
    ).populate(
      "ownerId",
      "username phoneNumber location"
    );

    if (!item) {

      return res.status(404).json({
        message: "Item not found"
      });

    }

    res.status(200).json({
      success: true,
      item
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message
    });

  }
};



// 👤 GET MY ITEMS

export const getMyItems = async (req, res) => {

  try {

    const items = await Item.find({
      ownerId: req.user.id
    }).sort({
      createdAt: -1
    });

    res.status(200).json({
      success: true,
      items
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message
    });

  }
};



// ❌ DELETE ITEM

export const deleteItem = async (req, res) => {

  try {

    const item = await Item.findById(
      req.params.id
    );

    if (!item) {

      return res.status(404).json({
        message: "Item not found"
      });

    }

    // Authorization check

    if (
      item.ownerId.toString() !==
      req.user.id
    ) {

      return res.status(403).json({
        message: "Not authorized"
      });

    }

    await item.deleteOne();

    res.status(200).json({
      success: true,
      message: "Item deleted successfully"
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message
    });

  }
};