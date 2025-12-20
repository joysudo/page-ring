import {
  Easing,
  Img,
  interpolate,
  Series,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const EXPO_IN = Easing.bezier(0.7, 0, 0.84, 0);
const EXPO_OUT = Easing.bezier(0.16, 1, 0.3, 1);

function Flower1Start() {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const rotate = interpolate(
    frame,
    [durationInFrames - 35, durationInFrames],
    [0, 12],
    {
      easing: EXPO_IN,
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  return (
    <Img
      src={staticFile("/flower-1.svg")}
      className="size-full object-contain"
      style={{ rotate: `${rotate}deg` }}
    />
  );
}
function Flower2() {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const rotate =
    interpolate(frame, [0, 35], [-12, 0], {
      easing: EXPO_OUT,
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }) +
    interpolate(frame, [durationInFrames - 35, durationInFrames], [0, 12], {
      easing: EXPO_IN,
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  return (
    <Img
      src={staticFile("/flower-2.svg")}
      className="size-full object-contain"
      style={{ rotate: `${rotate}deg` }}
    />
  );
}
function Flower3() {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const rotate =
    interpolate(frame, [0, 35], [-12, 0], {
      easing: EXPO_OUT,
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }) +
    interpolate(frame, [durationInFrames - 35, durationInFrames], [0, 12], {
      easing: EXPO_IN,
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  return (
    <Img
      src={staticFile("/flower-3.svg")}
      className="size-full object-contain"
      style={{ rotate: `${rotate}deg` }}
    />
  );
}
function Flower1End() {
  const frame = useCurrentFrame();

  const rotate = interpolate(frame, [0, 35], [-12, 0], {
    easing: EXPO_OUT,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <Img
      src={staticFile("/flower-1.svg")}
      className="size-full object-contain"
      style={{ rotate: `${rotate}deg` }}
    />
  );
}

export const MyComposition = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={40}>
        <Flower1Start />
      </Series.Sequence>
      <Series.Sequence durationInFrames={40}>
        <Flower2 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={40}>
        <Flower3 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={Infinity}>
        <Flower1End />
      </Series.Sequence>
    </Series>
  );
};
