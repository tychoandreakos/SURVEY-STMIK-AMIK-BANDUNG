import React, { useRef, useState, useEffect } from 'react'
import Icon from '@iconify/react';

import DefaultIcon from '@iconify/icons-mdi/plus';

import './style.scss';

const LogoButton = (props) => {

    const [image, setImage] = useState();
    const [actualImage, setActualImage] = useState();
    const { title = "Add a Logo", icon = DefaultIcon } = props;
    const inputFileRef = useRef();

    useEffect(() => {
        if (image && (image.size < 4718592)) {
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = () => {
                setActualImage(reader.result);
            };
        }
    }, [image])

    const readFile = (e) => {
        const imageFiles = e.target.files[0];
        setImage(imageFiles);
    }

    const uploadHandler = () => {
        const elem = inputFileRef.current;
        elem.click()
    }

    let renderEl;
    if (actualImage) {
        renderEl = (
            <img
                alt="logo"
                onClick={uploadHandler}
                className="logo"
                src={actualImage}
            />
        )
    } else {
        renderEl = (
            <button onClick={uploadHandler} className="btn-add-header">
                <Icon className="icon-add-header" icon={icon} />
                <span>{title}</span>
            </button>
        )
    }

    return (
        <div className="upload-logo">
            {renderEl}
            <input
                type="file"
                onChange={readFile}
                hidden
                ref={inputFileRef}
                accept="image/*"
            />
        </div>
    )
}


export default LogoButton;