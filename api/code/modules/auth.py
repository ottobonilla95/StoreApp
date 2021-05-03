from flask import Blueprint
from flask_restful import Api
from resources.auth.user import (
    UserRegister,
    User,
    UserSignin,
    UserLogout,
    TokenRefresh,
    UserName,
    UserEmail,
    UserPassword,
    UserResetPassword,
    UserConfirmation
)

from resources.auth.confirmation import (
    ConfirmationByUser, Confirmation
)

# Create bluepirnt
auth_app = Blueprint('auth', __name__)
api = Api(auth_app)

#### Add resources

# # # # # # # # user
# User signup
api.add_resource(UserRegister, '/signup')
# UserLogin
api.add_resource(UserSignin, '/signin')
# UserLogout
api.add_resource(UserLogout, '/signout')
# UserTokenRefresh
api.add_resource(TokenRefresh, '/tokenrefresh')
# User
api.add_resource(User, '/user')
# UserName
api.add_resource(UserName, '/username')
# email
api.add_resource(UserEmail, '/email')
# password
api.add_resource(UserPassword, '/password')
# resetpassword
api.add_resource(UserResetPassword, "/resetpassword")

# # # # # confirmation
# user_confirm
api.add_resource(Confirmation, '/user_confirm/<string:confirmation_id>')
# confirmation
api.add_resource(ConfirmationByUser, "/confirmation/user/<int:user_id>")

# userconfirmationemail
api.add_resource(UserConfirmation, "/confirmationemail")
