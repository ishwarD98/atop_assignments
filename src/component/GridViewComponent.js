import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function GridViewComponent() {
  const [imagesData, setImagesData] = useState([]);
  const [click, setClick] = useState(true)

  const setFlag = () => {
    setClick(true)
  }

  const unsetFlag = () => {
    setClick(false)
  }

  useEffect(() => {
    getUnsplashImage();
  }, []);

  const getUnsplashImage = () => {
    const ACCESS_KEY = "uicV8ZIPyAyOxqZqvri0dgdFAB5QBUCwVTLV206M_D0";
    axios
      .get("https://api.unsplash.com/photos/", {
        params: {
          client_id: ACCESS_KEY,
        },
      })
      .then(function (response) {
        console.log(response.data);
        setImagesData(response.data);
      });
  };

  const escFunction = useCallback((event) => {
    if (event.key === 'Escape') {
      console.log('Escape Pressed!')
      // Your Custom Logic
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false)

    return () => {
      document.removeEventListener('keydown', escFunction, false)
    }
  }, [])

  return (
    <div class="outer-grid">
      <div class="inner-grid">
        {imagesData.map((item) => {
          return (
            <>
              <img
                title={item.alt_description}
                src={`${item.links.download}?auto=compress&cs=tinysrgb&dpr=1&w=500`}
                alt="img"
                zoom = {click}
                onClick={setFlag}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
