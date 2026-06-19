import Request from "../models/request.model.js";
import Item from "../models/item.model.js";


// 📨 SEND REQUEST

export const sendRequest = async (req, res) => {

  try {

    const { itemId, message } = req.body;

    // Find item

    const item = await Item.findById(itemId);

    if (!item) {

      return res.status(404).json({
        message: "Item not found"
      });

    }

    // Prevent requesting own item

    if (
      item.ownerId.toString() ===
      req.user.id
    ) {

      return res.status(400).json({
        message: "You cannot request your own item"
      });

    }

    // Check duplicate request

    const existingRequest =
      await Request.findOne({
        itemId,
        requesterId: req.user.id
      });

    if (existingRequest) {

      return res.status(400).json({
        message: "Request already sent"
      });

    }

    // Create request

    const request = await Request.create({

      itemId,

      requesterId: req.user.id,

      ownerId: item.ownerId,

      message: message || ""

    });

    res.status(201).json({
      success: true,
      message: "Request sent successfully",
      request
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message
    });

  }
};



// 📥 GET REQUESTS FOR OWNER

export const getRequestsForOwner =
  async (req, res) => {

    try {

      const requests =
        await Request.find({

          ownerId: req.user.id

        })

          .populate(
            "itemId"
          )

          .populate(
            "requesterId",
            "username email phoneNumber location"
          )

          .sort({
            createdAt: -1
          });

      res.status(200).json({
        success: true,
        requests
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        success: false,
        message: err.message
      });

    }
  };



// ✅ ACCEPT REQUEST

export const acceptRequest =
  async (req, res) => {

    try {

      const request =
        await Request.findById(
          req.params.id
        );

      if (!request) {

        return res.status(404).json({
          message: "Request not found"
        });

      }

      // Authorization check

      if (
        request.ownerId.toString() !==
        req.user.id
      ) {

        return res.status(403).json({
          message: "Not authorized"
        });

      }

      // Update request status

      request.status = "accepted";

      await request.save();

      // Mark item sold

      await Item.findByIdAndUpdate(
        request.itemId,
        {
          status: "sold"
        }
      );

      res.status(200).json({
        success: true,
        message:
          "Request accepted and item marked as sold"
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        success: false,
        message: err.message
      });

    }
  };
  // 📥 GET MY REQUESTS

export const getMyRequests =
  async (req, res) => {

    try {

      const requests =
        await Request.find({

          requesterId: req.user.id

        })

          .populate(
            "itemId"
          )

          .populate(
            "ownerId",
            "username phoneNumber location"
          )

          .sort({
            createdAt: -1
          });

      res.status(200).json({
        success: true,
        requests
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        success: false,
        message: err.message
      });

    }
  };