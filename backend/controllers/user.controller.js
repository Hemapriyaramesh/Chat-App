import user from '../models/user.model.js';

export const getUsersForSidebar = async (req,res) => {
  try {
    
    const loggedInUserId = req.user._id;

    const filteredUsers = await user.find({_id: { $ne: loggedInUserId}}).select("-password");//this part doesn't show ourselves in the chat sidebar
    res.status(200).json(filteredUsers);

  } 
  catch (error) {
    console.error("Error in GetUsersForSidebar: ", error.message);
    res.status(500).json({error: " Internal server error"});
  }
  
};