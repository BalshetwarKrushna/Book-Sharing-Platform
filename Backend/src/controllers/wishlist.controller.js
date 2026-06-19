import Wishlist from "../models/wishlist.model.js";


// ❤️ ADD TO WISHLIST

export const addToWishlist =
  async (req, res) => {

    try {

      const { itemId } = req.body;

      // Check duplicate

      const existing =
        await Wishlist.findOne({

          userId: req.user.id,

          itemId

        });

      if (existing) {

        return res.status(400).json({
          message: "Already in wishlist"
        });

      }

      const wishlist =
        await Wishlist.create({

          userId: req.user.id,

          itemId

        });

      res.status(201).json({
        success: true,
        wishlist
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        success: false,
        message: err.message
      });

    }
  };



// 📥 GET WISHLIST

export const getWishlist =
  async (req, res) => {

    try {

      const wishlist =
        await Wishlist.find({

          userId: req.user.id

        })

          .populate("itemId")

          .sort({
            createdAt: -1
          });

      res.status(200).json({
        success: true,
        wishlist
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        success: false,
        message: err.message
      });

    }
  };



// ❌ REMOVE FROM WISHLIST

export const removeFromWishlist =
  async (req, res) => {

    try {

      await Wishlist.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message: "Removed from wishlist"
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        success: false,
        message: err.message
      });

    }
  };