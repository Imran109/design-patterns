type SignUpRequestOld = {
  readonly name: string;
  readonly phoneNumber: string;
  readonly email: string;
};

type SignUpRequestNew = {
  readonly Name: string;
  readonly Mobile: string;
  readonly EmailID: string;
};

class SignupUser {
  validateAndSignupUser(request: SignUpRequestOld) {
    console.log(
      `User successfully signed up with the following information:
       Name: ${request.name}
       Mobile: ${request.phoneNumber}
       Email: ${request.email}`
    );
  }
}

//Interface that is familiar with the user
interface VSignupUser {
  validateAndSignupUser(request: SignUpRequestNew): void;
}

class SignUpRequestMapper implements VSignupUser {
  private signupUser: SignupUser;

  constructor(signupUser: SignupUser) {
    this.signupUser = signupUser;
  }

  public validateAndSignupUser(request: SignUpRequestNew): void {
    console.log(`Request receieved for sign-up`, request);

    this.signupUser.validateAndSignupUser({
      email: request.EmailID,
      name: request.Name,
      phoneNumber: request.Mobile,
    });
  }
}

const signupUser = new SignupUser();
const requestMapper = new SignUpRequestMapper(signupUser);
requestMapper.validateAndSignupUser({
  EmailID: "ryan@bajajfinserv.in",
  Mobile: "+919094526991",
  Name: "Ryan",
});
