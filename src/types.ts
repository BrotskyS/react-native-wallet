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
  onBoarding: ScreenParams<SignTypes>;
  Home: ScreenParams<HomeTypes>;
  Transaction: ScreenParams<HomeTypes>;
  Add: ScreenParams<HomeTypes>;
  Budget: ScreenParams<HomeTypes>;
  Profile: ScreenParams<HomeTypes>;
};

export type NavigationProps = {
  navigation: any;
};

export type WalletTypes = {
  Wallet: undefined;
};
export type SignTypes = {
  Sign: undefined;
  SignUp: undefined;
  PinCode: undefined;
  PinCode2: {pinCode: string};
  SetupStart: undefined;
  Verification: {
    email: string;
  };
};

export type HomeTypes = {
  Home: undefined;
};
