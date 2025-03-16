import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { ForgotPassword } from '@screens/ForgotPassword';
import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';

const { Navigator, Screen } = createNativeStackNavigator();

type AuthProps = {
  signIn: undefined;
  signUp: undefined;
  forgotPassword: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthProps>;

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
      <Screen name="forgotPassword" component={ForgotPassword} />
    </Navigator>
  );
}
