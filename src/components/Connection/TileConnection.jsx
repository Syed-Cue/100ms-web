import React from "react";
import { styled, Text, textEllipsis } from "@100mslive/react-ui";
import branding from "../../../public/cue-branding.png";
import { ConnectionIndicator } from "./ConnectionIndicator";

const TileConnection = ({ name, peerId, hideLabel, width }) => {
  return (
    <>
      <WrapperLive>
        <img
          src={branding}
          alt="branding"
          style={{
            height: 49,
            width: 236,
          }}
        />
      </WrapperLive>
      <Wrapper>
        {!hideLabel ? (
          <Text
            css={{
              c: "$textHighEmp",
              ...textEllipsis(width - 60),
            }}
            variant="xs"
          >
            {name}
          </Text>
        ) : null}
        <ConnectionIndicator isTile peerId={peerId} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "absolute",
  bottom: "$2",
  left: "$2",
  zIndex: 10,
  backgroundColor: "$backgroundDark",
  borderRadius: "$1",
  "& p,span": {
    p: "$2 $3",
  },
});
const WrapperLive = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "absolute",
  bottom: "$16",
  left: "$2",
  zIndex: 10,
  backgroundColor: "$backgroundDark",
  borderRadius: "$1",
  "& p,span": {
    p: "$2 $3",
  },
});

export default TileConnection;
