import React, { Component } from "react";
import { DrawerItems, SafeAreaView } from "react-navigation";
import { ScrollView, Animated, StyleSheet, Text } from "react-native";

export default (AppDrawerContent = props => {
  const translateX = props.drawerOpenProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0]
  });

  return (
    <Animated.View style={{ transform: [{ translateX }] }}>
      <ScrollView>
        <SafeAreaView
          style={styles.container}
          forceInset={{ top: "always", horizontal: "never" }}
        >
          <DrawerItems {...props} />
        </SafeAreaView>
      </ScrollView>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
