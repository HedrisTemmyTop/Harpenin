import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import TextFont from "./TextFont";
import { Image, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

interface Position {
  x: number;
  y: number;
}

const DraggableImage = ({
  image,
  index,
  positions,
  onDragEnd,
}: {
  image: string;
  index: number;
  positions: Position[];
  onDragEnd: (index: number, newX: number, newY: number) => void;
}) => {
  const isDragging = useSharedValue(false);
  const translateX = useSharedValue(positions[index].x);
  const translateY = useSharedValue(positions[index].y);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx: { startX: number; startY: number }) => {
      ctx.startX = translateX.value;
      ctx.startY = translateY.value;
      isDragging.value = true;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
      translateY.value = ctx.startY + event.translationY;
    },
    onEnd: () => {
      isDragging.value = false;
      onDragEnd(index, translateX.value, translateY.value);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withSpring(translateX.value) },
        { translateY: withSpring(translateY.value) },
      ],
      zIndex: isDragging.value ? 1 : 0,
    };
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[styles.img, animatedStyle]}>
        <Image source={{ uri: image }} style={styles.imgContent} />
        {index === 0 && (
          <TextFont font="NunitoSans_600SemiBold" style={styles.cover}>
            Cover photo
          </TextFont>
        )}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default DraggableImage;

const styles = StyleSheet.create({
  img: {
    width: 86,
    height: 72,
  },
  imgContent: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 6,
  },
  cover: {
    color: Colors.primary.button,
    fontSize: 14,
  },
});
