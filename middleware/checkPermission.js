const checkPermission = (requestUser, resourceUserId) => {
    // compare req.user.userId set in authenticate user to resource createAt id
    if(requestUser.userId === resourceUserId.toString()) { // parse resource obj to string
        console.log(requestUser, resourceUserId.toString())
        return 
    }
    throw new CustomErrorMessage("Unauthorised request", StatusCodes.UNAUTHORIZED)
}

export default checkPermission