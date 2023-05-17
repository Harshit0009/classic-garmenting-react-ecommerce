import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>I am the Sign IN page</h1>
      <div>
        <button onClick={logGoogleUser}>Google Sign In</button>
      </div>
    </div>
  );
};
export default SignIn;
