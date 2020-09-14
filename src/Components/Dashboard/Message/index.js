import React, { useRef, useEffect, useMemo, useState } from "react";
import Icon from "@iconify/react";
import Check from "@iconify/icons-mdi/check";
import { gsap } from "gsap";
import Loading from "react-loading";

import "./style.scss";
import { useCallback } from "react";

const Message = (props) => {
  const { background, title, show } = props;
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(true);
  const messageRef = useRef({});
  const checkRef = useRef({});
  const loaderRef = useRef({});

  const messageMemo = useMemo(() => {
    return {
      beforeShowTrue: {
        left: "-50%",
      },
      afterShowTrue: {
        left: "-1%",
        duration: 1,
        ease: "power2.inOut",
        visibility: "visible",
      },
      beforeShowFalse: {
        left: "-1%",
      },
      afterShowFalse: {
        left: "-50%",
        duration: 1,
        delay: 0.2,
        autoAlpha: 0,
        ease: "power2.inOut",
      },
    };
  }, []);

  const showHandler = useCallback(() => {
    if (messageRef && messageRef.current) {
      if (show) {
        gsap.fromTo(
          messageRef.current,
          messageMemo.beforeShowTrue,
          messageMemo.afterShowTrue
        );
        setTimeout(() => {
          gsap.to(checkRef.current, {
            x: 50,
            autoAlpha: 0,
          });
        }, 1500);
        setTimeout(() => {
          setCheck(false);
          setLoading(true);
        }, 2000);
      } else {
        gsap.fromTo(
          messageRef.current,
          messageMemo.beforeShowFalse,
          messageMemo.afterShowFalse
        );
        setTimeout(() => {
          gsap.to(checkRef.current, {
            x: 50,
            autoAlpha: 0,
          });
        }, 1500);
      }
    }
  }, [messageRef, show, messageMemo]);

  useEffect(() => {
    if (show) {
      setLoading(false);
      setCheck(true);
    }
  }, [show]);
  useEffect(() => showHandler(), [showHandler]);

  const elRender = useMemo(() => {
    if (loading) {
      return (
        <div ref={loaderRef} className='loading'>
          <Loading
            color={background}
            height={"70%"}
            width={"70%"}
            type='bubbles'
          />
        </div>
      );
    }

    if (check) {
      return (
        <div ref={checkRef} style={{ color: background }} className='icon'>
          <Icon icon={Check} />
        </div>
      );
    }
  }, [loading, check, background]);

  return (
    <div ref={messageRef} style={{ background }} className='message-wrapper'>
      <span>{title}</span>
      <div className='icon-wrapper'>{elRender}</div>
    </div>
  );
};

export default Message;
