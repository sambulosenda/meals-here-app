import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Text, View, Image } from "react-native";
import { Avatar, Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../assets/star";
import open from "../../../assets/open";

const RestuarentCard = styled(Card)`
  margin-bottom: ${(props) => props.theme.space[3]};

  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestuarentCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Address = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestuarentCard elevation={5} style={styles.card}>
      <RestuarentCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <View style={{ paddingLeft: 16 }} />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <View style={{ paddingLeft: 16 }} />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestuarentCard>
  );
};

export default RestaurantInfo;

const styles = StyleSheet.create({});
