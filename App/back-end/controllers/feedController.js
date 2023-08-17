const User = require('../models/User');
const HomeFeed = require('../models/HomeFeed');
const UserInfo = require('../models/UserInfo');
const Replies = require('../models/Replies');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const moment = require('moment-timezone');

const allPostsNoLimit = async (req, res) => {
    try {
      const { userId } = req.query;
  
      const posts = await HomeFeed.find({})
        .sort({ createdAt: -1 }) // Sort in descending order by createdAt
        .populate('user', '-_id -__v -password -email');
  

      const formattedPosts = posts.map((post) => {
        // should really compare it to the userInfoList of likes, or it may be better to do it this way 
        const alreadyDisliked = post.dislikes.includes(userId);
        const alreadyLiked = post.likes.includes(userId);

        const createdAt = moment(post.createdAt);
        const currentTimestamp = moment();
        const duration = moment.duration(currentTimestamp.diff(createdAt));
  
        let formattedDate = '';
        if (duration.asSeconds() < 60) {
          formattedDate = `${Math.floor(duration.asSeconds())}s`;
        } else if (duration.asMinutes() < 60) {
          formattedDate = `${Math.floor(duration.asMinutes())}m`;
        } else if (duration.asHours() < 24) {
          formattedDate = `${Math.floor(duration.asHours())}hr`;
        } else if (duration.asDays() < 30) {
          formattedDate = `${Math.floor(duration.asDays())}d`;
        } else if (duration.asMonths() < 12) {
          formattedDate = `${Math.floor(duration.asMonths())}mon`;
        } else {
          formattedDate = `${Math.floor(duration.asYears())}yr`;
        }
  
        return {
          ...post.toObject(),
          createdAt: formattedDate,
          likeToDislikeCount: post.likeToDislikeRatio,
          hasDisliked: alreadyDisliked,
          hasLiked: alreadyLiked
        };
      });
    
      res.status(StatusCodes.OK).json({
        count: formattedPosts.length,
        feed: formattedPosts,
      });

    } catch (error) {
      // Handle any errors that occur during the operation
      console.error(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: 'Internal Server Error',
      });
    }
};

const allPosts = async (req, res) => {
    try {
      const { userId } = req.query;
      const { page } = req.query;
      const limit = 10;

      console.log(page);
      console.log(userId);
  
      const totalCount = await HomeFeed.countDocuments({}); // Get total count of documents
      const totalPages = Math.ceil(totalCount / limit); // Calculate total number of pages
  
      let skip = (page - 1) * limit;
  
      // Calculate the skip value for fetching all previous pages
      if (page > 1) {
        skip = (page - 1) * limit + limit * (page - 2);
      }
  
      const posts = await HomeFeed.find({})
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 }) // Sort in descending order by createdAt
        .populate('user', '-_id -__v -password -email -bio');
  

      const formattedPosts = posts.map((post) => {
        // should really compare it to the userInfoList of likes, or it may be better to do it this way 
        const alreadyDisliked = post.dislikes.includes(userId);
        const alreadyLiked = post.likes.includes(userId);

        const createdAt = moment(post.createdAt);
        const currentTimestamp = moment();
        const duration = moment.duration(currentTimestamp.diff(createdAt));
  
        let formattedDate = '';
        if (duration.asSeconds() < 60) {
          formattedDate = `${Math.floor(duration.asSeconds())}s`;
        } else if (duration.asMinutes() < 60) {
          formattedDate = `${Math.floor(duration.asMinutes())}m`;
        } else if (duration.asHours() < 24) {
          formattedDate = `${Math.floor(duration.asHours())}hr`;
        } else if (duration.asDays() < 30) {
          formattedDate = `${Math.floor(duration.asDays())}d`;
        } else if (duration.asMonths() < 12) {
          formattedDate = `${Math.floor(duration.asMonths())}mon`;
        } else {
          formattedDate = `${Math.floor(duration.asYears())}yr`;
        }
  
        return {
          ...post.toObject(),
          createdAt: formattedDate,
          likeToDislikeCount: post.likeToDislikeRatio,
          hasDisliked: alreadyDisliked,
          hasLiked: alreadyLiked
        };
      });
    
      res.status(StatusCodes.OK).json({
        count: formattedPosts.length,
        totalPages: totalPages,
        currentPage: page,
        feed: formattedPosts,
      });

    } catch (error) {
      // Handle any errors that occur during the operation
      console.error(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: 'Internal Server Error',
      });
    }
};

const allPostsSortBy = async (req, res) => {
  try {
    const { userId } = req.query;
    const { sortBy } = req.query;
    console.log(sortBy);
    const { page } = req.query;
    const limit = 10;

    console.log(page);
    console.log(userId);

    const totalCount = await HomeFeed.countDocuments({}); // Get total count of documents
    const totalPages = Math.ceil(totalCount / limit); // Calculate total number of pages

    let skip = (page - 1) * limit;

    // Calculate the skip value for fetching all previous pages
    if (page > 1) {
      skip = (page - 1) * limit + limit * (page - 2);
    }

    let sortOption = { createdAt: -1 }; // Default sorting by newest

    // Determine the sorting option based on the sortBy parameter
    if (sortBy === 'Newest') {
      // No need to set anything here since it's the default
    } else if (sortBy === 'Oldest') {
      sortOption = { createdAt: 1 };
    } else if (sortBy === 'Likes') {
      sortOption = { likes: -1, createdAt: -1 };
    } else if (sortBy === 'Dislikes') {
      sortOption = { dislikes: -1, createdAt: -1 };
    }

    const posts = await HomeFeed.find({})
      .skip(skip)
      .limit(limit)
      .sort(sortOption) // Apply the selected sorting option
      .populate('user', '-_id -__v -password -email -bio');


    const formattedPosts = posts.map((post) => {
      // should really compare it to the userInfoList of likes, or it may be better to do it this way 
      const alreadyDisliked = post.dislikes.includes(userId);
      const alreadyLiked = post.likes.includes(userId);

      const createdAt = moment(post.createdAt);
      const currentTimestamp = moment();
      const duration = moment.duration(currentTimestamp.diff(createdAt));

      let formattedDate = '';
      if (duration.asSeconds() < 60) {
        formattedDate = `${Math.floor(duration.asSeconds())}s`;
      } else if (duration.asMinutes() < 60) {
        formattedDate = `${Math.floor(duration.asMinutes())}m`;
      } else if (duration.asHours() < 24) {
        formattedDate = `${Math.floor(duration.asHours())}hr`;
      } else if (duration.asDays() < 30) {
        formattedDate = `${Math.floor(duration.asDays())}d`;
      } else if (duration.asMonths() < 12) {
        formattedDate = `${Math.floor(duration.asMonths())}mon`;
      } else {
        formattedDate = `${Math.floor(duration.asYears())}yr`;
      }

      return {
        ...post.toObject(),
        postedAgo: formattedDate,
        likeToDislikeCount: post.likeToDislikeRatio,
        hasDisliked: alreadyDisliked,
        hasLiked: alreadyLiked
      };
    });
  
    res.status(StatusCodes.OK).json({
      count: formattedPosts.length,
      totalPages: totalPages,
      currentPage: page,
      feed: formattedPosts,
    });

  } catch (error) {
    // Handle any errors that occur during the operation
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: 'Internal Server Error',
    });
  }
};

const allPostsForUser = async (req, res) => {
  try {
    const { userId } = req.query;
    const { page } = req.query;
    const limit = 10;

    const totalCount = await HomeFeed.countDocuments({}); // Get total count of documents
    const totalPages = Math.ceil(totalCount / limit); // Calculate total number of pages

    let skip = (page - 1) * limit;

    // Calculate the skip value for fetching all previous pages
    if (page > 1) {
      skip = (page - 1) * limit + limit * (page - 2);
    }

    const posts = await HomeFeed.find({ user: userId })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 }) // Sort in descending order by createdAt
      .populate('user', '-_id -__v -password -email');


    const formattedPosts = posts.map((post) => {
      // should really compare it to the userInfoList of likes, or it may be better to do it this way 
      const alreadyDisliked = post.dislikes.includes(userId);
      const alreadyLiked = post.likes.includes(userId);

      const createdAt = moment(post.createdAt);
      const currentTimestamp = moment();
      const duration = moment.duration(currentTimestamp.diff(createdAt));

      let formattedDate = '';
      if (duration.asSeconds() < 60) {
        formattedDate = `${Math.floor(duration.asSeconds())}s`;
      } else if (duration.asMinutes() < 60) {
        formattedDate = `${Math.floor(duration.asMinutes())}m`;
      } else if (duration.asHours() < 24) {
        formattedDate = `${Math.floor(duration.asHours())}hr`;
      } else if (duration.asDays() < 30) {
        formattedDate = `${Math.floor(duration.asDays())}d`;
      } else if (duration.asMonths() < 12) {
        formattedDate = `${Math.floor(duration.asMonths())}mon`;
      } else {
        formattedDate = `${Math.floor(duration.asYears())}yr`;
      }

      return {
        ...post.toObject(),
        createdAt: formattedDate,
        likeToDislikeCount: post.likeToDislikeRatio,
        hasDisliked: alreadyDisliked,
        hasLiked: alreadyLiked
      };
    });
  
    res.status(StatusCodes.OK).json({
      count: formattedPosts.length,
      totalPages: totalPages,
      currentPage: page,
      feed: formattedPosts,
    });

  } catch (error) {
    // Handle any errors that occur during the operation
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: 'Internal Server Error',
    });
  }
};

const getSinglePost = async (req, res) => {
  // const { id } = req.params; //should be params, since our authentication process with already have the userId/future jwt
  const { userId } = req.query;
  const { postId } = req.query;

  try {
    const post = await HomeFeed.findOne({ _id: postId })
      .populate('user', 'username firstname lastname color profilePic');

    if (!post) {
      throw new CustomError.BadRequestError(`User post with ID ${postId} does not exist.`);
    }

    const user = await User.findOne({ _id: userId }).select('-email -password');
    if (!user) {
      console.log('here'); //need to do extra steps to when the user isn't signed in
      throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }

    const alreadyDisliked = post.dislikes.includes(userId);
    const alreadyLiked = post.likes.includes(userId);

    const createdAt = moment(post.createdAt);
    const currentTimestamp = moment();
    const duration = moment.duration(currentTimestamp.diff(createdAt));

    let formattedDate = '';
    if (duration.asSeconds() < 60) {
      formattedDate = `${Math.floor(duration.asSeconds())}s`;
    } else if (duration.asMinutes() < 60) {
      formattedDate = `${Math.floor(duration.asMinutes())}m`;
    } else if (duration.asHours() < 24) {
      formattedDate = `${Math.floor(duration.asHours())}hr`;
    } else if (duration.asDays() < 30) {
      formattedDate = `${Math.floor(duration.asDays())}d`;
    } else if (duration.asMonths() < 12) {
      formattedDate = `${Math.floor(duration.asMonths())}mon`;
    } else {
      formattedDate = `${Math.floor(duration.asYears())}yr`;
    }

    const formattedCreatedAt = moment(post.createdAt).format('h:mm A · MMM D, YYYY');

    const formattedPost = {
      ...post.toObject(),
      postedAgo: formattedDate,
      likeToDislikeCount: post.likeToDislikeRatio,
      hasDisliked: alreadyDisliked,
      hasLiked: alreadyLiked,
      formattedCreatedAt: formattedCreatedAt
    };

    res.status(StatusCodes.OK).json({
      msg: `You've successfully got the post with ID: ${postId}`,
      post: formattedPost
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: 'An error occurred while fetching the post.'
    });
  }
};
  
const clearFeed = async (req, res) => {
    try {
      await HomeFeed.deleteMany();
      
      // Reset UserInfo
      await UserInfo.updateMany({}, { $set: { likes: [] } });
      await UserInfo.updateMany({}, { $set: { dislikes: [] } });
      await UserInfo.updateMany({}, { $set: { posts: [] } });

      res.status(StatusCodes.OK).json({ msg: 'Feed has been cleared'});
    } catch (error) {
      throw new CustomError.InternalServerError('Error deleting feed posts'); 
    }
};

const userPost = async (req, res) => {
  const { userId, title, message } = req.body;

  if (!userId) {
    throw new CustomError.BadRequestError('Provide userId');
  }

  if (!message) {
    throw new CustomError.BadRequestError('Provide message');
  }

  const user = await User.findOne({ _id: userId }).select('-email -password');
  if (!user) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials');
  }

  const post = await HomeFeed.create({ user, title, message });

  // Use the postId from the created post object
  const postId = post._id;

  // Add the post to the user's liked list
  const userListOfStuff = await UserInfo.findOne({ user: userId });
  userListOfStuff.posts.push(post);

  // Save the userListOfStuff after adding the new post
  await userListOfStuff.save();

  // Send the postId in the response
  res.status(StatusCodes.CREATED).json({ postId });
};

const getRepliesToPost = async (req, res) => {
  const { postId } = req.params;

  if (!postId) {
    throw new CustomError.BadRequestError('Please provide postId.');
  }

  try {
    const post = await HomeFeed.findOne({ _id: postId }).populate({
      path: 'replies',
      populate: {
        path: 'user',
        select: 'username firstname lastname color profilePic',
      },
    });

    if (!post) {
      throw new CustomError.BadRequestError(`User post with ID ${postId} does not exist.`);
    }

    // Format createdAt for replies
    const formattedReplies = post.replies.map((reply) => {
      const replyCreatedAt = moment(reply.createdAt);
      const replyDuration = moment.duration(currentTimestamp.diff(replyCreatedAt));

      let formattedReplyDate = '';
      if (replyDuration.asSeconds() < 60) {
        formattedReplyDate = `${Math.floor(replyDuration.asSeconds())}s`;
      } else if (replyDuration.asMinutes() < 60) {
        formattedReplyDate = `${Math.floor(replyDuration.asMinutes())}m`;
      } else if (replyDuration.asHours() < 24) {
        formattedReplyDate = `${Math.floor(replyDuration.asHours())}hr`;
      } else if (replyDuration.asDays() < 30) {
        formattedReplyDate = `${Math.floor(replyDuration.asDays())}d`;
      } else if (replyDuration.asMonths() < 12) {
        formattedReplyDate = `${Math.floor(replyDuration.asMonths())}mon`;
      } else {
        formattedReplyDate = `${Math.floor(replyDuration.asYears())}yr`;
      }

      return {
        ...reply.toObject(),
        createdAt: formattedReplyDate,
      };
    });

    res.status(StatusCodes.OK).json({
      message: `Successfully received all replies to post ${postId}`,
      replies: formattedReplies, // Return the populated replies array with formatted dates
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: 'An error occurred while fetching the replies.',
    });
  }
};

const replyToPost = async (req, res) => {
  const { userId, postId, message } = req.body;

  if (!userId || !postId || !message) {
    throw new CustomError.BadRequestError('Please provide userId, postId, and message.');
  }

  const user = await User.findOne({ _id: userId }).select('-email -password');
  if (!user) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials');
  }

  const post = await HomeFeed.findOne({ _id: postId });
  if (!post) {
    throw new CustomError.BadRequestError(`User post with ID ${postId} does not exist.`);
  }

  // Create a new reply instance
  const newReply = new Replies({
    user: userId,
    userPost: postId,
    message: message,
  });

  // Save the new reply
  const savedReply = await newReply.save();

  // Update the HomeFeed document with the new reply
  post.replies.push(savedReply._id);
  await post.save();

  res.status(StatusCodes.CREATED).json({
    message: 'Reply successfully added.',
    reply: savedReply,
  });
};

const likePost = async (req, res) => {
  const { userId, postId } = req.body;

  if (!userId) {
    throw new CustomError.BadRequestError('Provide userId');
  }

  if (!postId) {
    throw new CustomError.BadRequestError('Provide postId');
  }

  const user = await User.findOne({ _id: userId }).select('-email -password');
  if (!user) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials');
  }

  const post = await HomeFeed.findOne({ _id: postId });
  if (!post) {
    throw new CustomError.BadRequestError(`User post: ${postId} does not exist.`);
  }

  // Check if the userId is already a part of the likes array
  const alreadyLiked = post.likes.includes(userId);
  if (alreadyLiked) {
    throw new CustomError.BadRequestError('You have already liked this post.');
  }

  // Add the post to the user's liked list
  const userListOfStuff = await UserInfo.findOne({ user: userId });
  userListOfStuff.likes.push(post);

  const alreadyDisliked = post.dislikes.includes(userId);
  if (alreadyDisliked) {
    // Remove user from post.dislikes
    const userIndex = post.dislikes.indexOf(userId);
    post.dislikes.splice(userIndex, 1);

    const userIndexForUserInfo = userListOfStuff.dislikes.indexOf(userId);
    userListOfStuff.dislikes.splice(userIndexForUserInfo, 1);
  }

  // Save new userInfo list
  await userListOfStuff.save();

  // Add the user's like to the post
  post.likes.push(user);
  await post.save();

  // Send the response with the updated likeToDislikeRatio
  res.status(StatusCodes.OK).json({
    msg: `You've successfully liked this user post: ${postId}`,
    updatedLikeToDislikeCount: post.likeToDislikeRatio,
  });
};

const dislikePost = async (req, res) => {
  const { userId, postId } = req.body;

  if(!userId){
      throw new CustomError.BadRequestError('Provide userId');
  }

  if(!postId){
      throw new CustomError.BadRequestError('Provide postId');
  }

  const user = await User.findOne({ _id: userId }).select('-email -password');
  if (!user) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials');
  }

  const post = await HomeFeed.findOne({ _id: postId });
  if (!post) {
    throw new CustomError.BadRequestError(`User post: ${postId} does not exist.`);
  }

  const alreadyDisliked = await post.dislikes.includes(userId);
  if (alreadyDisliked) {
    throw new CustomError.BadRequestError('You have already disliked this post.');
  }

  // add the post to the user's disliked list
  const userListOfStuff = await UserInfo.findOne({ user: userId });
  userListOfStuff.dislikes.push(post);

  // See if the userId is already apart of the likes array
  const alreadyLiked = await post.likes.includes(userId);
  if (alreadyLiked) {
    // Remove user from post.likes
    const userIndex = post.likes.indexOf(userId);
    post.likes.splice(userIndex, 1);
    
    const userIndexForUserInfo = userListOfStuff.likes.indexOf(userId);
    userListOfStuff.likes.splice(userIndexForUserInfo, 1);
  }
  
  // Save new userInfo list
  await userListOfStuff.save();

  // Add the user's like to the post
  post.dislikes.push(user);
  await post.save();

  res.status(StatusCodes.OK).json({
    msg: `You've successfully disliked this user post: ${postId} ... hater`, 
    updatedLikeToDislikeCount: post.likeToDislikeRatio,
  });
};

module.exports = {
  allPosts,
  allPostsNoLimit,
  allPostsForUser,
  allPostsSortBy,
  getSinglePost,
  clearFeed,
  userPost,
  likePost,
  dislikePost,
  replyToPost,
  getRepliesToPost
}