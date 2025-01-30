import IconButton from "@/components/IconButton";
import TextFont from "@/components/TextFont";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  FlatListComponent,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
const { width: screenWidth } = Dimensions.get("window");
const data = [
  {
    id: "1",
    title: "Slide 1",
    image: require("@/assets/images/bg.png"),
  },
  {
    id: "2",
    title: "Slide 2",
    image: require("@/assets/images/bg.png"),
    // image: require('./assets/image2.jpg'),
  },
  {
    id: "3",
    title: "Slide 3",
    image: require("@/assets/images/preview.png"),
    // image: require('./assets/image3.jpg'),
  },
];
const Preview = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index
  const flatListRef = useRef<FlatList>(null); // Ref for the FlatList

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / screenWidth);
    setCurrentIndex(newIndex);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          onPress={() => {}}
          icon={"arrow-back"}
          size={24}
          color={"black"}
          style={{}}
        />
        <TextFont font="NunitoSans_700Bold" style={styles.headerText}>
          Event details
        </TextFont>
      </View>
      {/* <View style={styles.image}>
        <Image
          source={require("@/assets/images/preview.png")}
          style={styles.img}
        />
      </View> */}
      <ScrollView>
        <View style={styles.imgFlatList}>
          <FlatList
            ref={flatListRef}
            data={data}
            renderItem={({ item }) => (
              <View style={styles.image}>
                <Image source={item.image} style={styles.img} />
              </View>
            )}
            showsHorizontalScrollIndicator={false}
            horizontal
            pagingEnabled
            onScroll={handleScroll}
            keyExtractor={(item) => item.id}
          />
          <View style={styles.imgCap}>
            <TextFont font="NunitoSans_700Bold" style={styles.imgCapText}>
              {currentIndex + 1}/3
            </TextFont>
          </View>
        </View>

        <View style={styles.content}>
          <TextFont font="NunitoSans_600SemiBold" style={styles.contentDate}>
            14TH OF JULY
          </TextFont>
          <View style={styles.title}>
            <TextFont font="NunitoSans_600SemiBold" style={styles.contentTitle}>
              Lagos Startup Week 2023
            </TextFont>
            <Image source={require("@/assets/images/calendar-add.png")} />
          </View>
          <TextFont style={styles.contentText} font="NunitoSans_Regular">
            Experience the beauty of local art with an exhibit featuring works
            from up-and-coming artists.
          </TextFont>
          <View style={styles.eventType}>
            <View style={styles.btnType}>
              <TextFont style={styles.typeText} font="NunitoSans_600SemiBold">
                Free
              </TextFont>
            </View>
            <View style={styles.btnType}>
              <TextFont style={styles.typeText} font="NunitoSans_600SemiBold">
                Physical
              </TextFont>
            </View>
            <View style={styles.btnType}>
              <TextFont style={styles.typeText} font="NunitoSans_600SemiBold">
                One-time event
              </TextFont>
            </View>
          </View>
        </View>

        <View style={styles.date}>
          <TextFont font="NunitoSans_700Bold" style={styles.dateHead}>
            Date, time & location
          </TextFont>

          <View style={styles.dateRow}>
            <View style={styles.dateContainer}>
              <View style={styles.dateBox}>
                <Image source={require("@/assets/images/date.png")} />
                <TextFont font="NunitoSans_700Bold" style={styles.dateBoxText}>
                  Date
                </TextFont>
              </View>
              <TextFont font="NunitoSans_700Bold" style={styles.dateInWords}>
                14th July
              </TextFont>
            </View>
            <Text style={styles.days}>3 days from now</Text>
          </View>
          <View style={styles.dateRow}>
            <View style={styles.dateContainer}>
              <View style={styles.dateBox}>
                <Ionicons
                  name="time-sharp"
                  size={22}
                  color={Colors.primary.text}
                />
                <TextFont font="NunitoSans_700Bold" style={styles.dateBoxText}>
                  Time
                </TextFont>
              </View>
              <TextFont font="NunitoSans_700Bold" style={styles.dateInWords}>
                8:00AM - 2:00PM
              </TextFont>
            </View>
            <Text style={styles.days}>WAT</Text>
          </View>
          <View style={styles.dateRow}>
            <View style={styles.dateContainer}>
              <View style={styles.dateBox}>
                <Image source={require("@/assets/images/location.png")} />
                <TextFont font="NunitoSans_700Bold" style={styles.dateBoxText}>
                  Date
                </TextFont>
              </View>
              <TextFont font="NunitoSans_700Bold" style={styles.location}>
                Obafemi Awolowo Stadium, Ilesha Road, Akure, Ondo State.
              </TextFont>
            </View>
            {/* <Text style={styles.days}>3 days from now</Text> */}
          </View>
        </View>
        <View style={styles.about}>
          <TextFont font="NunitoSans_700Bold" style={styles.aboutHead}>
            About event
          </TextFont>
          <TextFont style={styles.aboutText} font="NunitoSans_Regular">
            Experience the beauty of local art with an exhibit featuring works
            from up-and-coming artists. Experience the beauty of local art with
            an exhibit featuring works from up-and-coming artists. Experience
            the beauty of local art with an exhibit featuring works from
            up-and-coming artists.
          </TextFont>
        </View>
      </ScrollView>
      {/* <CarouselComponent /> */}
    </View>
  );
};

export default Preview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 80,
    paddingBottom: 24,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    alignItems: "center",
  },
  headerText: {
    flexBasis: "60%",
    fontSize: 16,
    // backgroundColor: "red",
    // justifySelf: "start"
  },
  image: {
    // width: "100%",
    backgroundColor: "red",
    // flex: 1,
  },
  img: {
    width: screenWidth,
    // flex: 1,
    height: 276,
    resizeMode: "cover",
  },
  imgFlatList: {
    // flex: 1,
    // backgroundColor: "green",
    position: "relative",
  },

  imgCap: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#fff",
    width: 56,
    height: 32,
    borderRadius: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  imgCapText: {
    color: Colors.primary.button,
  },
  contentDate: {
    color: Colors.purple.primary,
  },
  content: {
    paddingTop: 24,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  contentTitle: {
    fontSize: 23,
  },
  contentText: {
    marginTop: 10,
    color: Colors.primary.text,
    fontSize: 16,
  },
  eventType: {
    flexDirection: "row",
    paddingVertical: 24,
    gap: 8,
    alignItems: "center",
  },
  btnType: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: Colors.primary.line,
    borderRadius: 8,
  },
  typeText: {
    fontSize: 14,
  },
  date: {
    marginTop: 5,
    backgroundColor: "#fff",
    paddingTop: 24,
  },
  dateHead: {
    paddingHorizontal: 24,
    color: Colors.primary.button,
    fontSize: 18,
    marginBottom: 20,
  },
  dateRow: {
    paddingHorizontal: 24,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: Colors.secondary.line,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  dateContainer: {
    // flexBasis: "50%",
    gap: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateBox: {
    backgroundColor: Colors.primary.border,
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  dateBoxText: {
    color: Colors.primary.text,
  },

  days: {
    fontFamily: "Montaga-Regular",

    color: Colors.primary.text,
  },
  dateInWords: {
    fontSize: 16,
    // flexBasis: "80%",
  },
  location: {
    fontSize: 16,
    flexBasis: "80%",
  },
  about: {
    paddingHorizontal: 24,
    marginTop: 5,
    backgroundColor: "#fff",
    paddingVertical: 24,
    // justifyContent: "center",
    // alignItems: "center",
  },
  aboutHead: {
    fontSize: 16,
    marginBottom: 30,
  },
  aboutText: {
    color: Colors.primary.text,
    lineHeight: 21,
    marginBottom: 100,
  },
});
