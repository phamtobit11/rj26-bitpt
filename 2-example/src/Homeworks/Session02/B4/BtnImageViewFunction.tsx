import React, { useState } from "react";

function BtnImageViewFunction() {
  const [IndexImage, setIndexImage] = useState(0);
  const images = [
    {
      id: 0,
      url: "img",
    },
    {
      id: 1,
      url: "img1",
    },
    {
      id: 2,
      url: "img2",
    },
  ];
  const handlePrev = () => {
    if (IndexImage > 0) {
      setIndexImage(IndexImage - 1);
    }
    if (IndexImage === 0) {
      setIndexImage(images.length - 1);
    }
  };
  const handleNext = () => {
    if (IndexImage < images.length - 1) {
      setIndexImage(IndexImage + 1);
    }
    if (IndexImage === images.length - 1) {
      setIndexImage(0);
    }
  };
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-2" onClick={handlePrev}>
            Prev
          </div>
          <div className="col">
            {images.map((item) => {
              return item.id === IndexImage ? item.url : null;
            })}
          </div>
          <div className="col-2" onClick={handleNext}>
            Next
          </div>
        </div>
      </div>
      <div>
        {images.map((item, index) => (
          <span className="px-3" onClick={() => setIndexImage(index)} key={item.url + index}>{index + 1}</span>
        ))}
      </div>
    </div>
  );
}

export default BtnImageViewFunction;
