import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, FlatList, SafeAreaView, StyleSheet } from "react-native";
import styled from "styled-components/native";

import RestaurantInfo from "../components/Restuarent_info_card";
import { RestaurantsContext } from "../../services/restaurants/restuarant_context";
import { ActivityIndicator, Colors } from "react-native-paper";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;


const RestaurantsScreen = () => {
 const { isLoading, error, restaurants } = useContext(RestaurantsContext);

 
  return (
    <SafeArea>
      {
  isLoading && (
    <LoadingContainer>
      <Loading size={50} animating={true} color={Colors.blue300} />
    </LoadingContainer>
  )
}

      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <FlatList
        data={restaurants}
          renderItem={({ item }) => {
          return (
              <RestaurantInfo restaurant={item} />
          
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
