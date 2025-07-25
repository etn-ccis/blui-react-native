import React, {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View} from 'react-native';
import {NavDrawerProps, NavigationDrawer} from './navigation-drawer';
// import {createStackNavigator} from '@react-navigation/stack';
import {Home, Placeholder} from '../screens';
import {ROUTES} from './routes';
import {ActionListScreen} from '../examples/action-list/ActionList';
import {BottomSheetAlarmsScreen} from '../examples/bottom-sheet/BottomSheet';
import {CollapsibleAppbarScreen} from '../examples/collapsible-appbar/CollapsibleAppbar';
import {ComplexBottomSheetAlarmsScreen} from '../examples/complex-bottomsheet/ComplexBottomSheet';
import {DataListScreen} from '../examples/data-list/DataList';
import {FixedLengthPasscodeScreen} from '../examples/forms-and-validation/fixed-length-passcode/FixedLengthPasscode';
import {FormInAListScreen} from '../examples/forms-and-validation/form-in-a-list/FormInAList';
import {PasswordValidationScreen} from '../examples/forms-and-validation/password-validation/PasswordValidation';
import {VerifyOnSubmitScreen} from '../examples/forms-and-validation/verify-on-submit/VerifyOnSubmit';
import {LoadingStatesScreen} from '../examples/loading-states/LoadingStates';
import {MultiselectListScreen} from '../examples/multiselect-list/MultiselectList';
import {SearchbarScreen} from '../examples/searchbar/Searchbar';
import {SortableListScreen} from '../examples/sortable-list/SortableList';
import {StatusListScreen} from '../examples/status-list/StatusList';

const Drawer = createDrawerNavigator();

export type RootStackParamList = {
  home: undefined;
  'collapsible-appbar': undefined;
  'search-bar': undefined;
  'loading-states': undefined;
  'password-validation': undefined;
  'fixed-length-passcode': undefined;
  'verify-on-submit': undefined;
  'form-in-a-list': undefined;
  internationalization: undefined;
  'action-list': undefined;
  'data-list': undefined;
  'multiselect-list': undefined;
  'sortable-list': undefined;
  'status-list': undefined;
  'responsive-table': undefined;
  bottomsheet: undefined;
  'complex-bottomsheet': undefined;
  'dynamic-stepper': undefined;
  NavigationDrawer: undefined;
};

// const RootStack = createStackNavigator<RootStackParamList>();

const CustomDrawerContent = (props: any): any => (
  <View style={{height: '100%'}}>
    <NavigationDrawer {...props} />
  </View>
);

export const MainRouter = (): any => (
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="home"
      screenOptions={{
        drawerStyle: {backgroundColor: 'transparent', width: '80%'},
        headerShown: false,
      }}
      drawerContent={(props: NavDrawerProps): ReactNode => (
        <CustomDrawerContent {...props} />
      )}>
      <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen
        name="collapsible-appbar"
        component={CollapsibleAppbarScreen}
      />
      <Drawer.Screen name="search-bar" component={SearchbarScreen} />
      <Drawer.Screen name="loading-states" component={LoadingStatesScreen} />
      <Drawer.Screen
        name="password-validation"
        component={PasswordValidationScreen}
      />
      <Drawer.Screen
        name="fixed-length-passcode"
        component={FixedLengthPasscodeScreen}
      />
      <Drawer.Screen name="verify-on-submit" component={VerifyOnSubmitScreen} />
      <Drawer.Screen name="form-in-a-list" component={FormInAListScreen} />
      <Drawer.Screen
        name="internationalization"
        children={() => <Placeholder title={ROUTES.I18N.name} />}
      />
      <Drawer.Screen name="action-list" component={ActionListScreen} />
      <Drawer.Screen name="data-list" component={DataListScreen} />
      <Drawer.Screen
        name="multiselect-list"
        component={MultiselectListScreen}
      />
      <Drawer.Screen name="sortable-list" component={SortableListScreen} />
      <Drawer.Screen name="status-list" component={StatusListScreen} />
      <Drawer.Screen
        name="responsive-table"
        children={() => <Placeholder title={ROUTES.RESPONSIVE_TABLE.name} />}
      />
      <Drawer.Screen
        name="complex-bottomsheet"
        component={ComplexBottomSheetAlarmsScreen}
      />
      <Drawer.Screen name="bottomsheet" component={BottomSheetAlarmsScreen} />
      <Drawer.Screen
        name="dynamic-stepper"
        children={() => <Placeholder title={ROUTES.DYNAMIC_STEPPER.name} />}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);
