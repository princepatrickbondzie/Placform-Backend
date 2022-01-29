const Business = require("../models/Business");

const getBusinesses = async (req, res) => {
  const businesses = await Business.find();
  res.status(200).json({ businesses });
};

const getBusiness = async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  const business = await Business.findById(id);
  res.status(200).json({ business });
};

const createBusiness = async (req, res) => {
  console.log(req.body);
  try {
    const business = await Business.create({
      ...req.body,
      image: req.file.path,
    });

    // const user = await User.findById(userId);
    // user.businesses.push(business._id);
    // await user.save();
    // return business
    
    res.status(201).json({ business });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateBusiness = async (req, res) => {
  const { businessId } = req.params.id;
  const business = await Business.findByIdAndUpdate(businessId, req.body, {
    new: true,
  });
  res.status(200).json({ business });
};

const deleteBusiness = async (req, res) => {
  const { businessId } = req.params.id;
  await Business.findByIdAndDelete(businessId);
  res.status(200).json({ message: "Post Deleted Successfully" });
};

module.exports = {
  getBusinesses,
  getBusiness,
  createBusiness,
  updateBusiness,
  deleteBusiness,
};
