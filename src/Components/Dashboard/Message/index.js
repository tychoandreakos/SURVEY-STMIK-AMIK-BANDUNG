import React, { useRef, useEffect, useMemo, useState } from "react";
import Icon from "@iconify/react";
import Check from "@iconify/icons-mdi/check";
import { gsap } from "gsap";
import Loading from "react-loading";

import "./style.scss";

const Message = () => {
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(true);
  const messageRef = useRef({});
  const checkRef = useRef({});
  const loaderRef = useRef({});
  const messageMemo = useMemo(() => {
    return {
      before: {
        left: "-50%",
      },
      after: {
        left: "-1%",
        duration: 1,
        ease: "power2.inOut",
      },
    };
  }, []);

  useEffect(() => {
    if (messageRef && messageRef.current) {
      gsap.fromTo(messageRef.current, messageMemo.before, messageMemo.after);
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
    }
  }, [messageRef]);

  const elRender = useMemo(() => {
    if (loading) {
      return (
        <div ref={loaderRef} className='loading'>
          <Loading
            color='#5661b6'
            height={"70%"}
            width={"70%"}
            type='bubbles'
          />
        </div>
      );
    }

    if (check) {
      return (
        <div ref={checkRef} className='icon'>
          <Icon icon={Check} />
        </div>
      );
    }
  }, [loading, check]);

  return (
    <div ref={messageRef} className='message-wrapper'>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
        officiis.
      </span>
      <div className='icon-wrapper'>{elRender}</div>
    </div>
  );
};

export default Message;
