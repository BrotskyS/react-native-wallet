import {CommonActions} from '@react-navigation/native';

export type RootStackParamList = {
  Root: {
    initial: keyof BottomTabParamList;
  };
  NotFound: undefined;
};
type ScreenWithParams<T, K extends keyof T | undefined = undefined> =
  | undefined
  | {
      screen: K;
      initial?: boolean;
      params?: K extends keyof T ? T[K] : undefined;
    };
type ScreenParams<T> = ScreenWithParams<T, keyof T>;

export type BottomTabParamList = {
  Sign: ScreenParams<Sign>;
  Home: ScreenParams<HomeTypes>;
};

export type NavigationProps = {
  navigation: any;
};

export type HomeTypes = {
  Home: undefined;
};
export type Sign = {
  Home: undefined;
  SignIn: undefined;
  Login: undefined;
  SignUp: undefined;
};
