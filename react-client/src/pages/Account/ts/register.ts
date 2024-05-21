
import { useState, useRef } from 'react';
import CropperJS from 'cropperjs';

/*Image Upload*/

export const useImageCropper = () => {
  const [image, setImage] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const cropperRef = useRef<HTMLImageElement & { cropper: CropperJS }>(null);

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
        setModalIsOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const getCroppedImage = () => {
    if (cropperRef.current) {
      const cropper = cropperRef.current.cropper;
      const croppedCanvas = cropper.getCroppedCanvas();

      // Create a circular cropped image
      const circularCanvas = document.createElement('canvas');
      const diameter = Math.min(croppedCanvas.width, croppedCanvas.height);
      circularCanvas.width = diameter;
      circularCanvas.height = diameter;
      const ctx = circularCanvas.getContext('2d');

      // Draw the circular clipping path
      ctx!.beginPath();
      ctx!.arc(diameter / 2, diameter / 2, diameter / 2, 0, Math.PI * 2);
      ctx!.closePath();
      ctx!.clip();

      // Draw the cropped square onto the circular clipping path
      ctx!.drawImage(
        croppedCanvas,
        (croppedCanvas.width - diameter) / 2,
        (croppedCanvas.height - diameter) / 2,
        diameter,
        diameter,
        0,
        0,
        diameter,
        diameter
      );

      // Get the circular cropped image as a data URL
      const croppedImageURL = circularCanvas.toDataURL();
      setImage(croppedImageURL);
      setModalIsOpen(false);
    }
  };

  return { image, modalIsOpen, cropperRef, onImageChange, getCroppedImage, setModalIsOpen };
};
 export {}