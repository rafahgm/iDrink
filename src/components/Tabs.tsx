import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Home from '../screens/Home';
import Progress from '../screens/Progress';
import History from '../screens/History';
import WaterDrop from '../assets/drop-water.svg';
import CircleNotch from '../assets/circle-notch.svg';
import Calendar from '../assets/calendar.svg';
import {colors} from '../theme/theme';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {...styles.tabbar},
        headerShown: false
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? colors.blue100 : '#FFF',
                borderRadius: 5,
                padding: 10,
              }}>
              <WaterDrop
                fill="none"
                stroke={focused ? '#FFF' : colors.blue100}
                strokeWidth={4}
                scale={0.1}
                width={30}
                height={30}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Progress"
        component={Progress}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? colors.blue100 : '#FFF',
                borderRadius: 5,
                padding: 10,
              }}>
              <CircleNotch
                stroke="none"
                fill={focused ? '#FFF' : colors.blue100}
                scale={0.1}
                width={30}
                height={30}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? colors.blue100 : '#FFF',
                borderRadius: 5,
                padding: 10,
              }}>
              <Calendar
                stroke="none"
                fill={focused ? '#FFF' : colors.blue100}
                scale={0.1}
                width={30}
                height={30}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: '#FFF',
    borderRadius: 15,
    height: 60,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.5,
    elevation: 2,
  },
});

export default Tabs;
