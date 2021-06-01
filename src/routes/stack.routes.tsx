import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { PasswordRemember } from '../screens/PasswordRemember';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
  >
    <stackRoutes.Screen
      name="SignIn"
      component={SignIn}
    />
    <stackRoutes.Screen
      name="SignUp"
      component={SignUp}
    />
    <stackRoutes.Screen
      name="PasswordRemember"
      component={PasswordRemember}
    />
  </stackRoutes.Navigator>
)

export default AppRoutes